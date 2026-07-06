"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DESIGN_PARTNERS_COPY } from "@/data/homepage";

export function DesignPartners() {
  return (
    <section
      id="design-partners"
      className="relative py-32 md:py-48 px-6 border-t border-border"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            {DESIGN_PARTNERS_COPY.title}
          </h2>
          <p className="text-[16px] leading-relaxed text-muted mb-8">
            {DESIGN_PARTNERS_COPY.description}
          </p>
          <Link
            href="/book-demo?partner=1"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
          >
            {DESIGN_PARTNERS_COPY.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
