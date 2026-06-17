"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BuildLogTimeline } from "@/components/build-log/BuildLogTimeline";
import { getBuildLogEntries } from "@/data/build-log";

export function BuildLogPreview() {
  const entries = getBuildLogEntries(4);

  return (
    <section id="build-log" className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Build Log
          </h2>
          <p className="text-[16px] leading-relaxed text-muted max-w-xl">
            A running record of what we&apos;re building, shipping, and learning.
          </p>
        </motion.div>

        <BuildLogTimeline entries={entries} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href="/build-log"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            View full build log →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
