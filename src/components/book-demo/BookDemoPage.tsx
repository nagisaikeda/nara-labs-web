"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import type { BookDemoFieldErrors, BookDemoInterest } from "@/lib/book-demo";

type FormValues = {
  name: string;
  email: string;
  company: string;
  interest: BookDemoInterest;
  message: string;
  _hp: string;
};

const defaultFormValues = (isPartner: boolean): FormValues => ({
  name: "",
  email: "",
  company: "",
  interest: isPartner ? "design-partner" : "readylead",
  message: "",
  _hp: "",
});

function BookDemoForm() {
  const searchParams = useSearchParams();
  const isPartner = searchParams.get("partner") === "1";
  const [formValues, setFormValues] = useState<FormValues>(() =>
    defaultFormValues(isPartner),
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<BookDemoFieldErrors>({});

  const updateField = <K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field as keyof BookDemoFieldErrors]) {
        return current;
      }

      const next = { ...current };
      delete next[field as keyof BookDemoFieldErrors];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          isPartner,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: BookDemoFieldErrors;
      };

      if (!response.ok || !result.ok) {
        setErrorMessage(
          result.error ?? "Unable to send your request right now. Please try again.",
        );
        setFieldErrors(result.fieldErrors ?? {});
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("[book-demo] Client submit failed:", error);
      setErrorMessage("Unable to send your request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (field: keyof BookDemoFieldErrors) =>
    `w-full px-4 py-3 rounded-xl border bg-background/40 text-[14px] text-foreground placeholder:text-muted-soft focus-visible:border-border-strong transition-colors ${
      fieldErrors[field] ? "border-rose-300/40" : "border-border"
    }`;

  return (
    <>
      <PageHero
        title={isPartner ? "Become a design partner" : "Book a demo"}
        subtitle={
          isPartner
            ? "Tell us about your industry workflow and how you'd like to shape the next product from the lab."
            : "See ReadyLead, ProbeIQ, or discuss how applied AI products can fit your workflow."
        }
        supportingText="We'll follow up within two business days."
      />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="rounded-2xl border border-border bg-surface/20 p-8 md:p-10 text-center">
              <h2 className="font-serif text-[1.5rem] font-normal text-foreground mb-3">
                Thank you
              </h2>
              <p className="text-[15px] leading-relaxed text-muted">
                We received your request and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/20 p-8 md:p-10 space-y-6"
            >
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="book-demo-hp">Leave blank</label>
                <input
                  id="book-demo-hp"
                  name="_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formValues._hp}
                  onChange={(event) => updateField("_hp", event.target.value)}
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="rounded-xl border border-rose-300/30 bg-rose-300/5 px-4 py-3 text-[14px] text-foreground"
                >
                  {errorMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formValues.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={inputClassName("name")}
                  placeholder="Your name"
                />
                {fieldErrors.name && (
                  <p className="mt-2 text-[13px] text-muted">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClassName("email")}
                  placeholder="you@company.com"
                />
                {fieldErrors.email && (
                  <p className="mt-2 text-[13px] text-muted">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formValues.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  className={inputClassName("company")}
                  placeholder="Company name"
                />
                {fieldErrors.company && (
                  <p className="mt-2 text-[13px] text-muted">{fieldErrors.company}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  {isPartner ? "Workflow interest" : "Product interest"}
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formValues.interest}
                  onChange={(event) =>
                    updateField("interest", event.target.value as BookDemoInterest)
                  }
                  className={inputClassName("interest")}
                >
                  <option value="readylead">ReadyLead (Flagship)</option>
                  <option value="probeiq">ProbeIQ</option>
                  <option value="design-partner">Design partner program</option>
                  <option value="research">Lab research (Ahead, Local PM OS)</option>
                  <option value="general">General inquiry</option>
                </select>
                {fieldErrors.interest && (
                  <p className="mt-2 text-[13px] text-muted">{fieldErrors.interest}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formValues.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className={`${inputClassName("message")} resize-y min-h-[120px]`}
                  placeholder={
                    isPartner
                      ? "Describe the workflow you'd like us to explore together."
                      : "Tell us about your use case or questions."
                  }
                />
                {fieldErrors.message && (
                  <p className="mt-2 text-[13px] text-muted">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Sending..."
                  : isPartner
                    ? "Submit partner request"
                    : "Request demo"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export function BookDemoPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Suspense fallback={null}>
        <BookDemoForm />
      </Suspense>
      <Footer />
    </main>
  );
}
