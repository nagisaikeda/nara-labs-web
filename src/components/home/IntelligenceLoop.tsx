"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { INTELLIGENCE_LOOP } from "@/data/homepage";

const STEP_MS = 2600;
const SAGE = "#8fb39a";
const LAST = INTELLIGENCE_LOOP.length - 1;

/**
 * Returns the active step index, or null when the loop should render static
 * (server render, before mount, reduced motion, or off-screen).
 */
function useLoopStep(inView: boolean) {
  const [tick, setTick] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = window.setTimeout(() => setTick(0), 0);
    const id = window.setInterval(
      () => setTick((t) => (t ?? 0) + 1),
      STEP_MS,
    );
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, [inView]);

  return inView && tick !== null ? tick % INTELLIGENCE_LOOP.length : null;
}

function stepTone(i: number, step: number | null) {
  if (step === null) return { label: "text-foreground/85", dot: "idle" as const };
  if (i === step) return { label: "text-foreground", dot: "active" as const };
  if (i < step) return { label: "text-muted", dot: "visited" as const };
  return { label: "text-muted-soft", dot: "idle" as const };
}

function Dot({ state }: { state: "idle" | "visited" | "active" }) {
  return (
    <span
      aria-hidden
      className="relative block size-[9px] rounded-full border bg-background transition-[border-color,background-color,box-shadow] duration-700"
      style={{
        borderColor: state === "idle" ? "var(--border-strong)" : SAGE,
        backgroundColor: state === "active" ? SAGE : "var(--background)",
        boxShadow: state === "active" ? `0 0 0 4px rgba(143,179,154,0.14)` : "none",
      }}
    />
  );
}

function StepText({ index, step }: { index: number; step: number | null }) {
  const item = INTELLIGENCE_LOOP[index];
  const tone = stepTone(index, step);
  return (
    <>
      <p className="mt-5 text-[11px] tabular-nums tracking-[0.12em] text-muted-soft">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p
        className={`mt-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors duration-700 ${tone.label}`}
      >
        {item.label}
      </p>
      <p className="mt-1.5 font-serif text-[15px] italic text-muted">{item.note}</p>
    </>
  );
}

const MOBILE_PLACEMENT = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-2 row-start-2",
  "col-start-1 row-start-2",
];

export function IntelligenceLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const step = useLoopStep(inView);
  const returning = step === LAST;

  return (
    <figure ref={ref} className="relative">
      <figcaption className="sr-only">
        The intelligence loop: observe what changes, understand with context,
        act with authorization, learn from outcomes, then observe again.
      </figcaption>

      {/* md and up: horizontal notation with a return path */}
      <div aria-hidden className="relative hidden md:block">
        <div className="relative ml-[4px] h-10 w-[75%]">
          <span
            className="absolute inset-0 rounded-t-[14px] border-x border-t transition-colors duration-700"
            style={{ borderColor: returning ? SAGE : "var(--border)" }}
          />
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-[13px] leading-none text-muted-soft">
            ↺
          </span>
          <svg
            viewBox="0 0 9 6"
            className="absolute -bottom-[3px] -left-[4px] h-[6px] w-[9px] transition-colors duration-700"
            style={{ color: returning ? SAGE : "var(--border-strong)" }}
          >
            <path d="M0.5 0.5 L4.5 5 L8.5 0.5" fill="none" stroke="currentColor" />
          </svg>
        </div>
        <ol className="relative mt-2 grid grid-cols-4">
          <span className="absolute left-[4px] top-[4px] h-px w-[75%] bg-border-strong" />
          <motion.span
            className="absolute left-[4px] top-[4px] h-px"
            style={{ backgroundColor: SAGE }}
            initial={false}
            animate={{ width: step === null ? "0%" : `${(step / LAST) * 75}%` }}
            transition={{ duration: step === 0 ? 0.4 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {INTELLIGENCE_LOOP.map((item, i) => (
            <li key={item.id} className="relative pr-6">
              <Dot state={stepTone(i, step).dot} />
              <StepText index={i} step={step} />
            </li>
          ))}
        </ol>
      </div>

      {/* below md: the same loop folded into a clockwise square */}
      <div aria-hidden className="relative md:hidden">
        <span
          className="absolute left-[4px] top-[4px] h-[8.5rem] w-1/2 border transition-colors duration-700"
          style={{ borderColor: returning ? SAGE : "var(--border)" }}
        />
        <span className="absolute left-[calc(25%+4px)] top-[4px] -translate-x-1/2 -translate-y-1/2 bg-background px-1.5 text-[11px] leading-none text-muted-soft">
          →
        </span>
        <span className="absolute left-[calc(50%+4px)] top-[calc(4.25rem+4px)] -translate-x-1/2 -translate-y-1/2 bg-background py-1 text-[11px] leading-none text-muted-soft">
          ↓
        </span>
        <span className="absolute left-[calc(25%+4px)] top-[calc(8.5rem+4px)] -translate-x-1/2 -translate-y-1/2 bg-background px-1.5 text-[11px] leading-none text-muted-soft">
          ←
        </span>
        <span className="absolute left-[4px] top-[calc(4.25rem+4px)] -translate-x-1/2 -translate-y-1/2 bg-background py-1 text-[11px] leading-none text-muted-soft">
          ↑
        </span>
        <ol className="relative grid grid-cols-2 grid-rows-[8.5rem_auto]">
          {INTELLIGENCE_LOOP.map((item, i) => (
            <li key={item.id} className={`relative ${MOBILE_PLACEMENT[i]}`}>
              <Dot state={stepTone(i, step).dot} />
              <div className="pl-5 -mt-1">
                <StepText index={i} step={step} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
