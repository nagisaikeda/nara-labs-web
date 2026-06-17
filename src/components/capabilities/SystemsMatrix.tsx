"use client";

import { motion } from "framer-motion";
import { SYSTEMS_MATRIX } from "@/data/capabilities";

export function SystemsMatrix() {
  return (
    <section className="relative py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-3">
            Systems We&apos;ve Built
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            How our projects map to concrete AI capabilities.
          </p>
        </motion.div>

        <div className="hidden md:block rounded-xl border border-border overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-surface/30">
                <th className="px-6 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft w-[40%]">
                  Capability
                </th>
                <th className="px-6 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft">
                  Projects
                </th>
              </tr>
            </thead>
            <tbody>
              {SYSTEMS_MATRIX.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="border-b border-border last:border-b-0 hover:bg-surface/20 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-[14px] font-medium text-foreground">
                    {row.capability}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-muted">
                    {row.projects.join(", ")}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {SYSTEMS_MATRIX.map((row, index) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="p-4 rounded-xl border border-border"
            >
              <p className="text-[14px] font-medium text-foreground mb-1">
                {row.capability}
              </p>
              <p className="text-[13px] text-muted">{row.projects.join(", ")}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
