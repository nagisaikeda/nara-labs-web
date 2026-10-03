"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { NARA_ACT } from "@/data/nara";
import { NaraSectionHeader, TwinGlyph } from "@/components/nara/NaraStoryPrimitives";
import { NARA_EASE, useNaraReveal } from "@/components/nara/useNaraReveal";
import { useStepSequence } from "@/components/nara/useStepSequence";

const STAGES = NARA_ACT.stages;
const LAST = STAGES.length - 1;
const GATE = NARA_ACT.gateIndex;

function StageNode({ index, reached }: { index: number; reached: boolean }) {
  if (index === 0) {
    return (
      <span className="relative z-10 flex size-10 items-center justify-center bg-nara-background">
        <TwinGlyph className="w-10" />
      </span>
    );
  }
  if (index === GATE) {
    return (
      <span
        className={`relative z-10 flex size-10 items-center justify-center rounded-full border bg-nara-background transition-colors duration-700 ${
          reached ? "border-nara-green" : "border-nara-border-strong"
        }`}
      >
        <span
          className={`h-4 w-[3px] rounded-full transition-colors duration-700 ${
            reached ? "bg-nara-green" : "bg-nara-border-strong"
          }`}
        />
      </span>
    );
  }
  return (
    <span className="relative z-10 flex size-10 items-center justify-center bg-nara-background">
      <span
        className={`size-3 rounded-full border transition-colors duration-700 ${
          reached ? "border-nara-green bg-nara-green" : "border-nara-border-strong bg-nara-background"
        }`}
      />
    </span>
  );
}

export function NaraAct() {
  const reveal = useNaraReveal();
  const ref = useRef<HTMLElement>(null);
  const step = useStepSequence(ref, STAGES.length, { interval: 1300 });
  const reached = (i: number) => step === null || step >= i;
  const progress = step === null ? 1 : step / LAST;
  const transition = { duration: 1.1, ease: NARA_EASE };

  return (
    <section
      id="act"
      aria-labelledby="nara-act-heading"
      className="relative scroll-mt-20 bg-nara-background px-5 pb-24 pt-10 sm:px-6 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <NaraSectionHeader
          id="nara-act-heading"
          eyebrow={NARA_ACT.eyebrow}
          headline={NARA_ACT.headline}
          body={NARA_ACT.body}
        />

        <figure ref={ref} className="mt-16 md:mt-24">
          <figcaption className="sr-only">{NARA_ACT.visualLabel}</figcaption>

          <ol className="relative grid gap-7 md:grid-cols-5 md:gap-0">
            <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-nara-border-strong md:bottom-auto md:left-[10%] md:right-[10%] md:top-5 md:h-px md:w-auto" />
            <motion.span
              aria-hidden
              className="absolute left-5 top-5 w-px origin-top bg-nara-green md:hidden"
              style={{ height: "calc(100% - 2.5rem)" }}
              initial={false}
              animate={{ scaleY: progress }}
              transition={transition}
            />
            <motion.span
              aria-hidden
              className="absolute left-[10%] top-5 hidden h-px w-[80%] origin-left bg-nara-green md:block"
              initial={false}
              animate={{ scaleX: progress }}
              transition={transition}
            />
            {STAGES.map((stage, i) => {
              const on = reached(i);
              const gate = i === GATE;
              return (
                <li
                  key={stage.id}
                  className={`relative flex items-center gap-5 transition-opacity duration-700 md:flex-col md:items-center md:gap-0 md:text-center ${
                    on ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <StageNode index={i} reached={on} />
                  <div className="md:mt-5 md:px-2">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        gate ? "text-nara-green" : "text-nara-foreground"
                      }`}
                    >
                      {stage.label}
                    </p>
                    <p className="mt-1.5 font-serif text-[16px] italic text-nara-muted">
                      {stage.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </figure>

        <motion.div
          {...reveal({ inView: true, y: 14 })}
          className="mt-20 grid gap-14 border-t border-nara-border pt-12 md:mt-28 md:grid-cols-2 md:gap-16"
        >
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-muted">
              {NARA_ACT.packetHeading}
            </h3>
            <ul className="mt-5 border-t border-nara-border">
              {NARA_ACT.packet.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-nara-border py-3 text-[15px] text-nara-foreground"
                >
                  <span aria-hidden className="h-px w-3 bg-nara-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-10 md:pt-8">
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight tracking-[-0.015em] text-nara-foreground">
              {NARA_ACT.principleHeading}
            </h3>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-nara-body">
              {NARA_ACT.principle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
