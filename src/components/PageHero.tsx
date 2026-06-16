"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle: string;
  supportingText?: string;
};

export function PageHero({
  label,
  title,
  subtitle,
  supportingText,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-6"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.05] tracking-[-0.03em] text-foreground mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-[17px] leading-relaxed text-muted max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        {supportingText && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="text-[15px] leading-relaxed text-muted-soft max-w-xl mx-auto mt-6"
          >
            {supportingText}
          </motion.p>
        )}
      </div>
    </section>
  );
}
