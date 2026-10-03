"use client";

import { useRef } from "react";
import { NARA_UNDERSTAND } from "@/data/nara";
import {
  EpistemicMark,
  NaraSectionHeader,
  TwinGlyph,
} from "@/components/nara/NaraStoryPrimitives";
import { useStepSequence } from "@/components/nara/useStepSequence";

const OUTPUT_STEP = NARA_UNDERSTAND.inputs.length;

function line(on: boolean) {
  return `transition-colors duration-700 ${on ? "bg-nara-green/60" : "bg-nara-border-strong"}`;
}

export function NaraUnderstand() {
  const ref = useRef<HTMLElement>(null);
  const step = useStepSequence(ref, OUTPUT_STEP + 1, { interval: 1100 });
  const reached = (i: number) => step === null || step >= i;
  const outputOn = reached(OUTPUT_STEP);
  const { inputs, output } = NARA_UNDERSTAND;

  return (
    <section
      id="understand"
      aria-labelledby="nara-understand-heading"
      className="relative scroll-mt-20 bg-nara-background px-5 pb-24 pt-8 sm:px-6 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        <NaraSectionHeader
          id="nara-understand-heading"
          eyebrow={NARA_UNDERSTAND.eyebrow}
          headline={NARA_UNDERSTAND.headline}
          body={NARA_UNDERSTAND.body}
        />

        <figure ref={ref} className="mt-16 lg:mt-24">
          <figcaption className="sr-only">{NARA_UNDERSTAND.visualLabel}</figcaption>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-0">
            <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6 lg:pr-12">
              <TwinGlyph signal className="w-24 shrink-0 sm:w-28 lg:w-40" />
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-amber-text">
                  <span aria-hidden className="size-1.5 rounded-full bg-nara-amber" />
                  {NARA_UNDERSTAND.event}
                </p>
                <p className="mt-2 font-serif text-[19px] leading-snug text-nara-foreground">
                  {NARA_UNDERSTAND.domain}
                </p>
              </div>
            </div>

            <div className="relative pl-8 lg:pl-10 lg:pr-16">
              <span aria-hidden className="absolute -top-10 bottom-0 left-[3px] w-px bg-nara-border-strong lg:hidden" />
              <span aria-hidden className="absolute -left-12 top-1/2 hidden h-px w-12 bg-nara-border-strong lg:block" />
              <span aria-hidden className="absolute left-0 top-[12.5%] bottom-[12.5%] hidden w-px bg-nara-border-strong lg:block" />
              <span
                aria-hidden
                className={`absolute right-6 top-[12.5%] bottom-[12.5%] hidden w-px lg:block ${line(outputOn)}`}
              />
              <span
                aria-hidden
                className={`absolute -right-0 top-1/2 hidden h-px w-6 lg:block ${line(outputOn)}`}
              />

              <ol className="grid auto-rows-fr border-y border-nara-border">
                {inputs.map((input, i) => {
                  const on = reached(i);
                  const current = step === i;
                  return (
                    <li
                      key={input.id}
                      className={`relative flex flex-col justify-center border-b border-nara-border py-4 last:border-b-0 transition-opacity duration-700 ${
                        on ? "opacity-100" : "opacity-35"
                      }`}
                    >
                      <span aria-hidden className={`absolute -left-[29px] top-1/2 h-px w-6 lg:-left-10 lg:w-8 ${line(on)}`} />
                      <span
                        aria-hidden
                        className={`absolute -right-10 top-1/2 hidden h-px w-10 lg:block ${line(on)}`}
                      />
                      <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-muted">
                        <EpistemicMark status={input.status} />
                        <span className={current ? "text-nara-green" : ""}>{input.tag}</span>
                      </p>
                      <p className="mt-1.5 font-serif text-[18px] leading-snug text-nara-foreground">
                        {input.label}
                      </p>
                      <p className="mt-1 text-[12px] tracking-[0.02em] text-nara-muted">
                        {input.source}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div
              className={`relative ml-8 rounded-2xl border bg-nara-surface p-6 nara-shadow transition-[opacity,border-color] duration-700 lg:ml-0 ${
                outputOn ? "border-nara-green/35 opacity-100" : "border-nara-border opacity-40"
              }`}
            >
              <span aria-hidden className="absolute -left-[29px] -top-10 h-[calc(2.5rem+1.75rem)] w-px bg-nara-border-strong lg:hidden" />
              <span aria-hidden className="absolute -left-[29px] top-7 h-px w-6 bg-nara-border-strong lg:hidden" />
              <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-green">
                <EpistemicMark status="inferred" />
                {output.tag}
              </p>
              <p className="mt-2 font-serif text-[23px] leading-tight text-nara-foreground">
                {output.title}
              </p>
              <dl className="mt-5 divide-y divide-nara-border border-t border-nara-border">
                {output.fields.map((field) => {
                  const unverified = field.label === "Cause";
                  return (
                    <div key={field.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5">
                      <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-nara-muted">
                        {field.label}
                      </dt>
                      <dd
                        className={`flex items-start gap-2 text-[14px] leading-snug ${
                          unverified ? "text-nara-amber-text" : "text-nara-body"
                        }`}
                      >
                        {unverified && <EpistemicMark status="inferred" className="mt-[5px]" />}
                        {field.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>

          <ul
            aria-label="Legend"
            className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-nara-border pt-6 text-[12px] text-nara-muted lg:mt-20"
          >
            {NARA_UNDERSTAND.legend.map((item) => (
              <li key={item.status} className="flex items-center gap-2">
                <EpistemicMark status={item.status} />
                {item.label}
              </li>
            ))}
            <li className="flex items-center gap-2">
              <EpistemicMark status="needed" />
              Missing evidence
            </li>
          </ul>
        </figure>
      </div>
    </section>
  );
}
