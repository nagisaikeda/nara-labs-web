"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeProjectsTeaser() {
  return (
    <section id="projects" className="relative py-32 md:py-40 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-6">
            Projects
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Production-grade AI systems
          </h2>
          <p className="text-[16px] leading-relaxed text-muted mb-8 max-w-xl">
            Case studies documenting problem framing, architecture, and execution
            across our flagship builds.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            View projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
