"use client";

import { useRef } from "react";
import { NARA_LEARN } from "@/data/nara";
import {
  EpistemicMark,
  NaraSectionHeader,
  TwinGlyph,
} from "@/components/nara/NaraStoryPrimitives";
import { useStepSequence } from "@/components/nara/useStepSequence";

const PHASES = NARA_LEARN.phases;
const RETURN_STEP = PHASES.length;
const SERVICE_INDEX = 2;
const DURABLE_FROM = 3;

export function NaraLearn() {
  const ref = useRef<HTMLElement>(null);
  const step = useStepSequence(ref, RETURN_STEP + 1, { interval: 1300 });
  const reached = (i: number) => step === null || step >= i;
  const returned = reached(RETURN_STEP);

  return (
    <section
      id="learn"
      aria-labelledby="nara-learn-heading"
      className="relative scroll-mt-20 bg-gradient-to-b from-nara-background to-nara-canvas px-5 pb-24 pt-10 sm:px-6 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <NaraSectionHeader
          id="nara-learn-heading"
          eyebrow={NARA_LEARN.eyebrow}
          headline={NARA_LEARN.headline}
          body={NARA_LEARN.body}
          align="center"
        />

        <figure ref={ref} className="mx-auto mt-16 max-w-5xl md:mt-24">
          <figcaption className="sr-only">
            Illustrative service cycle. Before: an issue is observed and the cause is unknown, so
            the information stays provisional. Service: a technician diagnoses and records the
            service outcome. After: the verified outcome updates the Home Twin.
          </figcaption>

          <ol className="relative grid gap-10 pl-10 md:grid-cols-3 md:gap-0 md:pl-0">
            <span aria-hidden className="absolute bottom-2 left-[4px] top-2 border-l border-dashed border-nara-border-strong md:hidden" />
            <span aria-hidden className="absolute left-[16.67%] right-[50%] top-[4px] hidden border-t border-dashed border-nara-foreground/30 md:block" />
            <span
              aria-hidden
              className={`absolute left-[50%] right-[16.67%] top-[4px] hidden h-px transition-colors duration-700 md:block ${
                reached(2) ? "bg-nara-green" : "bg-nara-border-strong"
              }`}
            />
            {PHASES.map((phase, i) => {
              const on = reached(i);
              return (
                <li
                  key={phase.id}
                  className={`relative transition-opacity duration-700 md:px-6 md:text-center ${
                    on ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span className="absolute -left-10 top-0 flex size-[9px] md:static md:mx-auto md:mb-6 md:flex md:justify-center">
                    <EpistemicMark status={phase.status} className="bg-nara-background md:bg-nara-canvas" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-foreground">
                    {phase.label}
                  </p>
                  <p
                    className={`mt-1 text-[12px] tracking-[0.02em] ${
                      phase.status === "verified" ? "text-nara-green" : "text-nara-muted"
                    }`}
                  >
                    {phase.statusLabel}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {phase.lines.map((text) => (
                      <li key={text} className="font-serif text-[20px] leading-snug text-nara-foreground">
                        {text}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>

          <div
            className={`mt-12 flex flex-col items-start gap-4 pl-10 transition-opacity duration-700 md:mt-8 md:items-center md:pl-0 ${
              returned ? "opacity-100" : "opacity-30"
            }`}
          >
            <div aria-hidden className="relative hidden h-14 w-full md:block">
              <span className="absolute bottom-0 left-1/2 right-[16.67%] top-0 rounded-br-[22px] border-b border-r border-nara-green/50" />
            </div>
            <div className="flex items-center gap-4 md:-mt-3 md:flex-col md:gap-3">
              <TwinGlyph updated={returned} className="w-20 md:w-24" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-green">
                ↺ {NARA_LEARN.returnLabel}
              </p>
            </div>
          </div>
        </figure>

        <div className="mx-auto mt-20 max-w-4xl border-t border-nara-border pt-10 md:mt-24">
          <ol
            aria-label="From observation to durable knowledge"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            {NARA_LEARN.chain.map((item, i) => {
              const durable = i >= DURABLE_FROM;
              return (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden className="text-nara-muted">→</span>
                  )}
                  <span
                    className={`rounded-full px-3 py-1.5 ${
                      durable
                        ? "border border-nara-green bg-nara-green text-white"
                        : i === SERVICE_INDEX
                          ? "border border-nara-foreground/35 text-nara-foreground"
                          : "border border-dashed border-nara-foreground/30 text-nara-muted"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="mx-auto mt-7 max-w-xl text-center text-[15px] leading-relaxed text-nara-body">
            {NARA_LEARN.chainNote}
          </p>
        </div>
      </div>
    </section>
  );
}
