"use client";

import { motion } from "framer-motion";
import { NARA_VISION } from "@/data/nara";
import { TwinGlyph } from "@/components/nara/NaraStoryPrimitives";
import { useNaraReveal } from "@/components/nara/useNaraReveal";

export function NaraVision() {
  const reveal = useNaraReveal();
  return (
    <section
      aria-labelledby="nara-vision-heading"
      className="relative bg-gradient-to-b from-nara-canvas to-nara-background px-5 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24"
    >
      <motion.div
        {...reveal({ inView: true, y: 18, duration: 1.1 })}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <TwinGlyph updated className="mb-10 w-24" />
        <h2
          id="nara-vision-heading"
          className="text-balance font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.03] tracking-[-0.025em] text-nara-foreground"
        >
          {NARA_VISION.headline}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-[18px] leading-relaxed text-nara-body">
          {NARA_VISION.body}
        </p>
        <span aria-hidden className="mt-14 h-px w-10 bg-nara-border-strong" />
        <p className="mt-8 max-w-md text-balance font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] italic leading-snug text-nara-muted">
          {NARA_VISION.promise}
        </p>
      </motion.div>
    </section>
  );
}
