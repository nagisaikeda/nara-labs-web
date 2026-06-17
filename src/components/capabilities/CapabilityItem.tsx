"use client";

import { motion } from "framer-motion";
import type { Capability } from "@/types/capability";

type CapabilityItemProps = {
  capability: Capability;
  index: number;
};

export function CapabilityItem({ capability, index }: CapabilityItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      className="p-6 rounded-xl border border-border hover:border-border-strong transition-colors duration-300"
    >
      <h3 className="text-[15px] font-medium text-foreground mb-2">
        {capability.title}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted">
        {capability.description}
      </p>
    </motion.div>
  );
}
