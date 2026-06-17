"use client";

import { motion } from "framer-motion";
import { CURRENT_STACK } from "@/data/capabilities";

export function StackSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-3">
            Current Stack
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            The tools and technical layers we use to prototype and ship applied
            AI systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRENT_STACK.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-5 rounded-xl border border-border"
            >
              <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-muted-soft mb-3">
                {group.title}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14px] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
