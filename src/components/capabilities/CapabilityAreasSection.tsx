"use client";

import { motion } from "framer-motion";
import { CAPABILITY_AREAS } from "@/data/capabilities";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";

export function CapabilityAreasSection() {
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
            Capability Areas
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Technical surfaces where we have shipped, experimented, or built
            working prototypes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {CAPABILITY_AREAS.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
