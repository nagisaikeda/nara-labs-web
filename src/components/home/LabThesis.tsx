"use client";

import { motion } from "framer-motion";
import { PRIMITIVES, THESIS } from "@/data/homepage";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
} as const;

export function LabThesis() {
  return (
    <section
      id="thesis"
      aria-labelledby="thesis-heading"
      className="relative border-t border-border px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            {...reveal}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-soft">
              {THESIS.eyebrow}
            </p>
            <h2
              id="thesis-heading"
              className="text-balance font-serif text-[clamp(2.6rem,5.2vw,4.25rem)] font-normal leading-[1.02] tracking-[-0.03em] text-foreground"
            >
              {THESIS.title}
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-12"
          >
            <p className="text-[19px] leading-[1.6] text-foreground/85 md:text-[20px]">
              {THESIS.paragraphs[0]}
            </p>
            <p className="text-[16px] leading-relaxed text-muted md:text-[17px]">
              {THESIS.paragraphs[1]}
            </p>
          </motion.div>
        </div>

        <ol className="mt-24 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-32 lg:grid-cols-4">
          {THESIS.principles.map((principle, index) => (
            <motion.li
              key={principle.id}
              {...reveal}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="border-t border-border-strong pt-6"
            >
              <p className="text-[11px] tabular-nums tracking-[0.12em] text-muted-soft">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-serif text-[2rem] font-normal leading-none tracking-[-0.02em] text-foreground">
                {principle.term}
              </h3>
              <p className="mt-4 max-w-[17rem] text-[15px] leading-relaxed text-muted">
                {principle.line}
              </p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          {...reveal}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 grid gap-8 md:mt-32 lg:grid-cols-12 lg:gap-8"
        >
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-soft lg:col-span-3 lg:pt-1">
            {PRIMITIVES.eyebrow}
          </h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-8 lg:col-span-9 lg:grid-cols-4">
            {PRIMITIVES.items.map((item) => (
              <li
                key={item}
                className="border-l border-border pl-4 text-[15px] leading-snug text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
