"use client";

import { motion } from "framer-motion";
import { CapabilityItem } from "@/components/capabilities/CapabilityItem";
import { CAPABILITIES } from "@/data/capabilities";

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Capabilities
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            The technical surfaces we are exploring across our projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((capability, index) => (
            <CapabilityItem
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
