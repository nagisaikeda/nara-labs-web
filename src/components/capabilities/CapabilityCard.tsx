"use client";

import { motion } from "framer-motion";
import type { CapabilityArea } from "@/types/capability";
import { TechStackPills } from "@/components/projects/TechStackPills";

type CapabilityCardProps = {
  capability: CapabilityArea;
  index: number;
};

export function CapabilityCard({ capability, index }: CapabilityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: "easeOut" }}
      className="p-6 md:p-8 rounded-xl border border-border hover:border-border-strong transition-colors duration-300"
    >
      <h3 className="text-[16px] font-medium text-foreground mb-2">
        {capability.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted mb-6">
        {capability.description}
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-soft mb-2">
            Demonstrated in
          </p>
          <TechStackPills items={capability.demonstratedIn} />
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-soft mb-2">
            Explored
          </p>
          <TechStackPills items={capability.explored} />
        </div>
      </div>
    </motion.article>
  );
}
