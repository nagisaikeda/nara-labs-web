"use client";

import { motion } from "framer-motion";
import { NARA_DECIDE } from "@/data/nara";
import { NaraSectionHeader } from "@/components/nara/NaraStoryPrimitives";
import { useNaraReveal } from "@/components/nara/useNaraReveal";

function SheetLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-nara-muted">
      {children}
    </p>
  );
}

function ReviewSheet() {
  const { review } = NARA_DECIDE;
  return (
    <div className="overflow-hidden rounded-[22px] border border-nara-border bg-nara-surface nara-shadow">
      <div className="flex items-center justify-between gap-4 border-b border-nara-border px-6 py-4">
        <p className="font-serif text-[20px] leading-none text-nara-foreground">{review.title}</p>
        <p className="flex items-center gap-2 whitespace-nowrap text-[12px] text-nara-amber-text">
          <span aria-hidden className="size-1.5 rounded-full bg-nara-amber" />
          {review.status}
        </p>
      </div>

      <div className="divide-y divide-nara-border">
        {review.sections.map((section) => (
          <div key={section.id} className="px-6 py-4">
            <SheetLabel>{section.label}</SheetLabel>
            {section.id === "fit" ? (
              <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5">
                {section.lines.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-nara-body">
                    <span aria-hidden className="h-px w-2.5 bg-nara-green" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-2 space-y-0.5">
                {section.lines.map((item) => (
                  <li key={item} className="text-[14px] leading-relaxed text-nara-body">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="grid gap-4 px-6 py-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <SheetLabel>{review.price.label}</SheetLabel>
            <p className="mt-2 text-[13.5px] italic leading-relaxed text-nara-muted">
              {review.price.line}
            </p>
          </div>
          <div>
            <SheetLabel>{review.shared.label}</SheetLabel>
            <p className="mt-2 text-[13.5px] leading-relaxed text-nara-body">
              {review.shared.line}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-nara-border bg-nara-surface-sunk/60 px-6 py-5">
        <span className="flex min-h-12 w-full items-center justify-center rounded-full bg-nara-green text-[15px] font-medium text-white">
          {review.action}
        </span>
        <p className="mt-3 text-center text-[12px] text-nara-muted">{review.footnote}</p>
      </div>
    </div>
  );
}

export function NaraDecide() {
  const reveal = useNaraReveal();
  return (
    <section
      id="decide"
      aria-labelledby="nara-decide-heading"
      className="relative scroll-mt-20 bg-nara-canvas px-5 pb-24 pt-10 sm:px-6 md:pb-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-20">
        <div>
          <NaraSectionHeader
            id="nara-decide-heading"
            eyebrow={NARA_DECIDE.eyebrow}
            headline={NARA_DECIDE.headline}
            body={NARA_DECIDE.body}
          />

          <motion.div {...reveal({ inView: true, y: 14, delay: 0.1 })}>
            <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-muted">
              Before you approve, you see
            </p>
            <ol className="mt-4 grid border-t border-nara-border sm:grid-cols-2 sm:gap-x-8">
              {NARA_DECIDE.understands.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-nara-border py-3 text-[15px] leading-snug text-nara-foreground"
                >
                  <span className="text-[11px] tabular-nums tracking-[0.12em] text-nara-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>

            <div className="mt-12 max-w-md">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nara-green">
                {NARA_DECIDE.priceHeading}
              </h3>
              <p className="mt-3 font-serif text-[24px] leading-snug text-nara-foreground">
                {NARA_DECIDE.priceLine}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-nara-body">
                {NARA_DECIDE.priceBody}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.figure
          {...reveal({ inView: true, y: 24, delay: 0.15, duration: 1.1 })}
          className="lg:pt-24"
        >
          <div role="group" aria-label={NARA_DECIDE.visualLabel}>
            <ReviewSheet />
          </div>
          <figcaption className="mt-4 text-center text-[12px] tracking-[0.02em] text-nara-muted">
            {NARA_DECIDE.caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
