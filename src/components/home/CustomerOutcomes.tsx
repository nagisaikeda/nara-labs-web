"use client";

import { motion } from "framer-motion";
import { CUSTOMER_OUTCOMES } from "@/data/homepage";

export function CustomerOutcomes() {
  return (
    <section className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Customer Outcomes
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            Applied AI products should create measurable workflow improvement —
            not novelty demos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {CUSTOMER_OUTCOMES.map((outcome, index) => (
            <motion.article
              key={outcome.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-surface/20"
            >
              <div className="w-8 h-px bg-gradient-to-r from-gradient-lavender/50 to-transparent mb-6" />
              <h3 className="text-[16px] font-medium text-foreground mb-3">
                {outcome.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">
                {outcome.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
