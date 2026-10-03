"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NARA_MATCH } from "@/data/nara";
import { NaraSectionHeader } from "@/components/nara/NaraStoryPrimitives";
import { useNaraReveal } from "@/components/nara/useNaraReveal";
import { useStepSequence } from "@/components/nara/useStepSequence";

const PAIRS = NARA_MATCH.pairs;
const RESOLVE_STEP = PAIRS.length;
const ENGINE_ID = "nara-match-engine";
const COLS = "grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_11rem_minmax(0,1fr)]";

export function NaraMatch() {
  const reveal = useNaraReveal();
  const ref = useRef<HTMLElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const focus = preview ?? pinned;
  const step = useStepSequence(ref, RESOLVE_STEP + 1, {
    interval: 1250,
    loop: true,
    paused: focus !== null,
  });

  const aligned = (i: number) => {
    if (focus !== null) return PAIRS[i].id === focus;
    return step === null || i <= step;
  };
  const resolved = focus === null && (step === null || step === RESOLVE_STEP);

  return (
    <section
      id="match"
      aria-labelledby="nara-match-heading"
      className="relative scroll-mt-20 bg-[#17201b] px-5 pb-24 pt-10 sm:px-6 md:pb-36"
    >
      <div className="mx-auto max-w-6xl">
        <NaraSectionHeader
          id="nara-match-heading"
          eyebrow={NARA_MATCH.eyebrow}
          headline={NARA_MATCH.headline}
          body={NARA_MATCH.body}
          align="center"
          tone="dark"
        />

        <figure ref={ref} className="mx-auto mt-16 max-w-4xl md:mt-24">
          <figcaption className="sr-only">{NARA_MATCH.visualLabel}</figcaption>

          <div aria-hidden className={`${COLS} items-end pb-5`}>
            <div className="pr-3 text-right md:pr-6">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#a9c7b1] md:text-[11px] md:tracking-[0.2em]">
                {NARA_MATCH.homeHeading}
              </p>
              <p className="mt-1.5 hidden font-serif text-[16px] italic text-[#f3ede1]/55 sm:block">
                {NARA_MATCH.homeNote}
              </p>
            </div>
            <p className="text-center text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#f3ede1] md:text-[11px] md:tracking-[0.24em]">
              {NARA_MATCH.engineLabel}
            </p>
            <div className="pl-3 md:pl-6">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#a9c7b1] md:text-[11px] md:tracking-[0.2em]">
                {NARA_MATCH.serviceHeading}
              </p>
              <p className="mt-1.5 hidden font-serif text-[16px] italic text-[#f3ede1]/55 sm:block">
                {NARA_MATCH.serviceNote}
              </p>
            </div>
          </div>

          <ul id={ENGINE_ID} aria-label="Requirements and capabilities" className="relative">
            <span aria-hidden className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#f3ede1]/20" />
            {PAIRS.map((pair, i) => {
              const on = aligned(i);
              return (
                <li key={pair.id} className="border-t border-[#f3ede1]/10">
                  <button
                    type="button"
                    aria-pressed={pinned === pair.id}
                    aria-label={`${pair.home} aligned with ${pair.service}${pair.qualifier ? `, ${pair.qualifier.toLowerCase()}` : ""}`}
                    onMouseEnter={() => setPreview(pair.id)}
                    onMouseLeave={() => setPreview(null)}
                    onFocus={() => setPreview(pair.id)}
                    onBlur={() => setPreview(null)}
                    onClick={() => setPinned((p) => (p === pair.id ? null : pair.id))}
                    className={`${COLS} group w-full items-center py-3.5 text-left focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-[#a9c7b1] md:py-4`}
                  >
                    <span
                      className={`pr-3 text-right text-[13px] leading-snug transition-colors duration-700 md:pr-6 md:text-[16px] ${
                        on ? "text-[#f3ede1]" : "text-[#f3ede1]/40"
                      }`}
                    >
                      {pair.home}
                    </span>
                    <span aria-hidden className="relative block h-5">
                      <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#f3ede1]/15" />
                      <span
                        className={`absolute left-0 right-1/2 top-1/2 h-px origin-right bg-[#a9c7b1] transition-transform duration-700 ${
                          on ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 right-0 top-1/2 h-px origin-left bg-[#a9c7b1] transition-transform duration-700 ${
                          on ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <span
                        className={`absolute left-1/2 top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rotate-45 border transition-colors duration-700 ${
                          on ? "border-[#a9c7b1] bg-[#a9c7b1]" : "border-[#f3ede1]/30 bg-[#17201b]"
                        }`}
                      />
                    </span>
                    <span className="pl-3 md:pl-6">
                      <span
                        className={`block text-[13px] leading-snug transition-colors duration-700 md:text-[16px] ${
                          on ? "text-[#f3ede1]" : "text-[#f3ede1]/40"
                        }`}
                      >
                        {pair.service}
                      </span>
                      {pair.qualifier && (
                        <span className="mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#f3ede1]/40 md:text-[10px]">
                          {pair.qualifier}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col items-center border-t border-[#f3ede1]/10 text-center">
            <span
              aria-hidden
              className={`h-12 w-px transition-colors duration-700 md:h-16 ${
                resolved ? "bg-[#a9c7b1]" : "bg-[#f3ede1]/20"
              }`}
            />
            <span
              aria-hidden
              className={`flex size-6 items-center justify-center rounded-full border transition-colors duration-700 ${
                resolved ? "border-[#a9c7b1]" : "border-[#f3ede1]/25"
              }`}
            >
              <span
                className={`size-2 rounded-full transition-colors duration-700 ${
                  resolved ? "bg-[#a9c7b1]" : "bg-[#f3ede1]/25"
                }`}
              />
            </span>
            <p
              className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-700 ${
                resolved ? "text-[#f3ede1]" : "text-[#f3ede1]/45"
              }`}
            >
              {NARA_MATCH.resultLabel}
            </p>
            <p className="mt-2 font-serif text-[18px] italic text-[#f3ede1]/60">
              {NARA_MATCH.resultNote}
            </p>
          </div>
        </figure>

        <motion.div
          {...reveal({ inView: true, y: 14 })}
          className="mx-auto mt-20 grid max-w-4xl gap-10 border-t border-[#f3ede1]/12 pt-10 md:mt-28 md:grid-cols-[1.2fr_1fr] md:gap-16"
        >
          <div>
            <h3 className="font-serif text-[26px] leading-tight tracking-[-0.01em] text-[#f3ede1]">
              {NARA_MATCH.principleHeading}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#f3ede1]/70">
              {NARA_MATCH.principle}
            </p>
          </div>
          <div className="md:pt-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a9c7b1]">
              Service outcomes
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#f3ede1]/60">
              {NARA_MATCH.outcomesNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
