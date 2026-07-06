"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { READYLEAD_CREDIBILITY_LINE } from "@/data/products-catalog";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full animate-gradient-drift opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(200, 184, 224, 0.12) 0%, rgba(168, 200, 232, 0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-8">
            Nara Labs
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.03em] mb-8"
        >
          <span className="text-gradient">Applied AI products</span>
          <br />
          <span className="text-gradient-accent">for specialized</span>
          <br />
          <span className="text-gradient">industries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-[17px] leading-relaxed text-muted max-w-2xl mx-auto mb-12"
        >
          Nara Labs is an Applied AI Lab that discovers painful workflows and
          turns them into configurable AI products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book-demo"
            className="px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Book a demo
          </Link>
          <Link
            href="/book-demo?partner=1"
            className="px-6 py-3 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
          >
            Become a design partner
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          className="mt-8 max-w-lg mx-auto rounded-xl border border-border bg-surface/20 px-5 py-3.5 md:px-6"
        >
          <p className="text-[13px] font-medium text-foreground/90">
            {READYLEAD_CREDIBILITY_LINE}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-soft/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
