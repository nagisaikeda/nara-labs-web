"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { NARA_LOOP, NARA_WEDGE } from "@/data/nara";
import { NaraSectionHeader } from "@/components/nara/NaraStoryPrimitives";
import { NaraSystemIcon } from "@/components/nara/NaraSystemIcon";
import { useNaraReveal } from "@/components/nara/useNaraReveal";
import { useStepSequence } from "@/components/nara/useStepSequence";

const STEPS = NARA_LOOP.steps;
const RETURN_STEP = STEPS.length;

export function NaraLoop() {
  const reveal = useNaraReveal();
  const ref = useRef<HTMLElement>(null);
  const step = useStepSequence(ref, RETURN_STEP + 1, { interval: 700 });
  const lit = (i: number) => step === null || step >= i;
  const returned = lit(RETURN_STEP);
  const stepClass = (i: number) =>
    `text-[12px] font-semibold uppercase tracking-[0.24em] transition-colors duration-700 ${
      lit(i) ? "text-nara-foreground" : "text-nara-muted/50"
    }`;

  return (
    <section
      id="loop"
      aria-labelledby="nara-loop-heading"
      className="relative scroll-mt-20 bg-nara-canvas px-5 pb-24 pt-10 sm:px-6 md:pb-32"
    >
      <div className="mx-auto max-w-5xl">
        <NaraSectionHeader
          id="nara-loop-heading"
          eyebrow={NARA_LOOP.eyebrow}
          headline={NARA_LOOP.headline}
          align="center"
        />

        <figure ref={ref} className="mx-auto mt-16 md:mt-20">
          <figcaption className="sr-only">{NARA_LOOP.srLabel}</figcaption>

          <div aria-hidden className="hidden md:block">
            <ol className="grid grid-cols-5">
              {STEPS.map((label, i) => (
                <li key={label} className="relative text-center">
                  <span className={stepClass(i)}>{label}</span>
                  {i < STEPS.length - 1 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[12px] leading-none text-nara-muted/70">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <div className="relative mx-[10%] mt-4 h-10">
              <span
                className={`absolute inset-0 rounded-b-[16px] border-x border-b transition-colors duration-700 ${
                  returned ? "border-nara-green/60" : "border-nara-border-strong"
                }`}
              />
              <span
                className={`absolute -left-[4.5px] -top-[5px] text-[9px] leading-none transition-colors duration-700 ${
                  returned ? "text-nara-green" : "text-nara-border-strong"
                }`}
              >
                ▲
              </span>
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-nara-canvas px-4 font-serif text-[17px] italic transition-colors duration-700 ${
                  returned ? "text-nara-green" : "text-nara-muted"
                }`}
              >
                {NARA_LOOP.returnLabel}
                <span className="ml-1.5 not-italic">↺</span>
              </span>
            </div>
          </div>

          <div aria-hidden className="mx-auto w-fit pl-10 md:hidden">
            <div className="relative">
              <span
                className={`absolute -left-8 bottom-[8px] top-[8px] w-6 rounded-l-[14px] border-y border-l transition-colors duration-700 ${
                  returned ? "border-nara-green/60" : "border-nara-border-strong"
                }`}
              />
              <span
                className={`absolute -left-[13px] top-[3px] text-[8px] leading-none transition-colors duration-700 ${
                  returned ? "text-nara-green" : "text-nara-border-strong"
                }`}
              >
                ▶
              </span>
              <ol className="space-y-5">
                {STEPS.map((label, i) => (
                  <li key={label} className={`leading-4 ${stepClass(i)}`}>
                    {label}
                  </li>
                ))}
              </ol>
            </div>
            <p
              className={`-ml-8 mt-5 font-serif text-[16px] italic transition-colors duration-700 ${
                returned ? "text-nara-green" : "text-nara-muted"
              }`}
            >
              {NARA_LOOP.returnLabel}
              <span className="ml-1.5 not-italic">↺</span>
            </p>
          </div>
        </figure>

        <motion.div
          {...reveal({ inView: true, y: 14 })}
          className="mt-28 grid gap-12 border-t border-nara-border pt-14 md:mt-36 md:grid-cols-[1fr_1.1fr] md:gap-16"
        >
          <div>
            <h3 className="text-balance font-serif text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-nara-foreground">
              {NARA_WEDGE.headline}
            </h3>
            <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-nara-body">
              {NARA_WEDGE.body}
            </p>
          </div>
          <ul aria-label="Home system domains" className="border-t border-nara-border md:mt-2">
            {NARA_WEDGE.domains.map((domain) => (
              <li
                key={domain.id}
                className={`flex items-center gap-4 border-b border-nara-border py-4 ${
                  domain.active ? "" : "opacity-60"
                }`}
              >
                <span
                  aria-hidden
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                    domain.active
                      ? "bg-nara-green-soft text-nara-green"
                      : "border border-dashed border-nara-border-strong text-nara-muted"
                  }`}
                >
                  <NaraSystemIcon system={domain.id} className="h-[18px] w-[18px]" />
                </span>
                <span className="flex-1 font-serif text-[21px] leading-none text-nara-foreground">
                  {domain.name}
                </span>
                <span
                  className={`flex items-center gap-2 text-[12px] ${
                    domain.active ? "text-nara-sage-text" : "text-nara-muted"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full ${
                      domain.active ? "bg-nara-sage" : "border border-nara-muted/60"
                    }`}
                  />
                  {domain.note}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
