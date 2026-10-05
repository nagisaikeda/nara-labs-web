"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { NARA_EARLY_ACCESS as COPY } from "@/data/nara";
import {
  EARLY_ACCESS_INVALID_EMAIL,
  normalizeEarlyAccessEmail,
} from "@/lib/early-access";
import { TwinGlyph } from "@/components/nara/NaraStoryPrimitives";

const CLOSE_MS = 160;
const ERROR_TEXT = "text-[#a3402c]";

type Status = "idle" | "submitting" | "success";

type NaraEarlyAccessProps = {
  label: string;
  className?: string;
};

export function NaraEarlyAccess({ label, className = "" }: NaraEarlyAccessProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const pressStartedOnBackdrop = useRef(false);
  const closeTimer = useRef<number | null>(null);

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const inputId = `${id}-email`;
  const errorId = `${id}-error`;

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const scrollbar = window.innerWidth - root.clientWidth;
    const previous = { overflow: root.style.overflow, paddingRight: root.style.paddingRight };
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
    return () => {
      root.style.overflow = previous.overflow;
      root.style.paddingRight = previous.paddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (status === "success") doneRef.current?.focus();
  }, [status]);

  useEffect(
    () => () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const openDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setOpen(true);
    inputRef.current?.focus();
  };

  const requestClose = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closeTimer.current !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      dialog.close();
    }, CLOSE_MS);
  };

  const handleClosed = () => {
    setClosing(false);
    setOpen(false);
    setFieldError(null);
    setFormError(null);
    if (status === "success") {
      setStatus("idle");
      setEmail("");
    }
    triggerRef.current?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const normalized = normalizeEarlyAccessEmail(email);
    if (!normalized) {
      setFieldError(EARLY_ACCESS_INVALID_EMAIL);
      inputRef.current?.focus();
      return;
    }

    setFieldError(null);
    setFormError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalized, _hp: honeypotRef.current?.value ?? "" }),
      });
      const data: { ok?: boolean; error?: string } | null = await response
        .json()
        .catch(() => null);

      if (!response.ok || !data?.ok) {
        setStatus("idle");
        if (response.status === 400) {
          setFieldError(data?.error ?? EARLY_ACCESS_INVALID_EMAIL);
          inputRef.current?.focus();
        } else {
          setFormError(data?.error ?? COPY.genericError);
        }
        return;
      }

      setStatus("success");
    } catch {
      setStatus("idle");
      setFormError(COPY.genericError);
    }
  };

  const submitting = status === "submitting";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={openDialog}
        className={className}
      >
        {label}
      </button>

      <dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={status === "success" ? undefined : descId}
        data-closing={closing ? "" : undefined}
        onCancel={(event) => {
          event.preventDefault();
          requestClose();
        }}
        onClose={handleClosed}
        onPointerDown={(event) => {
          pressStartedOnBackdrop.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget && pressStartedOnBackdrop.current) {
            requestClose();
          }
          pressStartedOnBackdrop.current = false;
        }}
        className="nara-dialog fixed inset-0 m-auto h-fit max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[520px] overflow-y-auto overscroll-contain rounded-[24px] border border-nara-border bg-nara-surface p-0 text-center text-nara-foreground"
      >
        <div className="relative px-6 pb-7 pt-9 sm:px-10 sm:pb-10 sm:pt-11">
          <button
            type="button"
            onClick={requestClose}
            aria-label={COPY.close}
            className="absolute right-3 top-3 flex size-10 cursor-pointer items-center justify-center rounded-full text-nara-muted transition-colors duration-200 hover:bg-nara-surface-sunk hover:text-nara-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nara-green sm:right-4 sm:top-4"
          >
            <svg aria-hidden viewBox="0 0 16 16" className="size-4">
              <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>

          <p role="status" className="sr-only">
            {status === "success" ? `${COPY.successEyebrow}. ${COPY.successBody}` : ""}
          </p>

          {status === "success" ? (
            <div>
              <TwinGlyph updated className="mx-auto mb-7 w-16" />
              <h2
                id={titleId}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-green"
              >
                {COPY.successEyebrow}
              </h2>
              <p className="mt-4 text-balance font-serif text-[clamp(1.6rem,4.6vw,2rem)] leading-[1.15] tracking-[-0.015em] text-nara-foreground">
                {COPY.successBody}
              </p>
              <button
                ref={doneRef}
                type="button"
                onClick={requestClose}
                className="mt-9 flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-nara-green px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-nara-green-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nara-green"
              >
                {COPY.done}
              </button>
            </div>
          ) : (
            <>
              <div className="px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-green">
                  {COPY.eyebrow}
                </p>
                <h2
                  id={titleId}
                  className="mt-4 font-serif text-[clamp(2rem,5.4vw,2.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-nara-foreground"
                >
                  {COPY.headline}
                </h2>
              </div>
              <p id={descId} className="mt-4 text-pretty text-[16px] leading-relaxed text-nara-body">
                {COPY.body}
              </p>

              <form noValidate onSubmit={handleSubmit} className="relative mt-8">
                <label htmlFor={inputId} className="block text-left text-[13px] font-medium text-nara-foreground">
                  {COPY.emailLabel}
                </label>
                <input
                  ref={inputRef}
                  id={inputId}
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (fieldError) setFieldError(null);
                  }}
                  aria-invalid={fieldError ? true : undefined}
                  aria-describedby={fieldError ? errorId : undefined}
                  className={`mt-2 block h-12 w-full rounded-xl border bg-nara-canvas/70 px-4 text-[16px] text-nara-foreground outline-none transition-[border-color,box-shadow] duration-200 focus-visible:ring-[3px] ${
                    fieldError
                      ? "border-[#c4664f] focus-visible:ring-[#c4664f]/15"
                      : "border-nara-border-strong focus-visible:border-nara-green focus-visible:ring-nara-green/15"
                  }`}
                />
                {fieldError && (
                  <p id={errorId} className={`mt-2 text-left text-[13.5px] ${ERROR_TEXT}`}>
                    {fieldError}
                  </p>
                )}

                <div aria-hidden className="absolute -left-[10000px] top-0 h-px w-px overflow-hidden">
                  <label>
                    Leave this field empty
                    <input ref={honeypotRef} type="text" name="_hp" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-nara-green px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-nara-green-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nara-green disabled:cursor-default disabled:opacity-75"
                >
                  {submitting ? COPY.submitting : COPY.submit}
                </button>

                {formError && (
                  <p role="alert" className={`mt-3 text-center text-[13.5px] ${ERROR_TEXT}`}>
                    {formError}
                  </p>
                )}

                <p className="mt-4 text-center text-[12.5px] text-nara-muted">{COPY.privacy}</p>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
