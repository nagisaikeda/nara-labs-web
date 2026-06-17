"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeTeamPreview() {
  return (
    <section id="team" className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Team
          </h2>
          <p className="text-[16px] leading-relaxed text-muted mb-8 max-w-xl">
            Small applied AI team building across product, engineering, machine
            learning, and research.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Meet the team →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
