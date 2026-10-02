"use client";

import { motion } from "framer-motion";
import { LAB_HERO } from "@/data/homepage";
import { IntelligenceLoop } from "@/components/home/IntelligenceLoop";

const EASE = [0.22, 1, 0.36, 1] as const;

export function LabHero() {
  return (
    <section
      aria-labelledby="lab-hero-heading"
      className="relative px-6 pb-24 pt-36 md:pb-32 md:pt-44 lg:pt-52"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="mb-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-muted-soft md:mb-10"
        >
          {LAB_HERO.eyebrow}
        </motion.p>

        <motion.h1
          id="lab-hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
          className="text-gradient max-w-4xl pb-1 font-serif text-[clamp(2.9rem,7.6vw,6.5rem)] font-normal leading-[1.02] tracking-[-0.03em]"
        >
          {LAB_HERO.headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted md:mt-10 md:text-[18px]"
        >
          {LAB_HERO.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
          className="mt-20 max-w-4xl md:mt-28"
        >
          <IntelligenceLoop />
        </motion.div>
      </div>
    </section>
  );
}
