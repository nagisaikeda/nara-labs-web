"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BookDemoBand() {
  return (
    <section className="relative py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl border border-border-strong bg-gradient-to-b from-surface-elevated/80 to-surface/30 p-10 md:p-14 text-center"
        >
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal tracking-[-0.02em] text-foreground mb-4">
            See our products in action
          </h2>
          <p className="text-[16px] leading-relaxed text-muted max-w-xl mx-auto mb-8">
            Start with ReadyLead, our flagship product — or evaluate ProbeIQ and
            discuss design partner opportunities for upcoming lab research.
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Book a demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
