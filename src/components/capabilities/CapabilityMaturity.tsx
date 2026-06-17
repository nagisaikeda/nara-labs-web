"use client";

import { motion } from "framer-motion";
import { CAPABILITY_MATURITY } from "@/data/capabilities";
import type { MaturityStatus } from "@/types/capability";

const statusStyles: Record<MaturityStatus, string> = {
  active: "border-foreground/20 text-foreground bg-foreground/[0.06]",
  exploring: "border-border-strong text-muted bg-surface/40",
  researching: "border-border text-muted-soft bg-surface/20",
};

export function CapabilityMaturity() {
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
            Capability Maturity
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            A transparent view of where we are actively building, exploring,
            and researching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CAPABILITY_MATURITY.map((group, groupIndex) => (
            <motion.div
              key={group.status}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
              className="p-6 rounded-xl border border-border"
            >
              <span
                className={`inline-block px-3 py-1 rounded-full border text-[11px] font-semibold tracking-[0.1em] uppercase mb-5 ${statusStyles[group.status]}`}
              >
                {group.label}
              </span>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-muted leading-relaxed"
                  >
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
