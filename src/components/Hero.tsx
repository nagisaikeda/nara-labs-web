"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
          className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[1.02] tracking-[-0.03em] mb-8"
        >
          <span className="text-gradient">AI systems for</span>
          <br />
          <span className="text-gradient-accent">better human</span>
          <br />
          <span className="text-gradient">judgment</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-[17px] leading-relaxed text-muted max-w-xl mx-auto mb-12"
        >
          We build intelligent systems that reason in realtime, remember context,
          and help humans navigate complexity with clarity and confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Explore projects
          </Link>
          <Link
            href="/build-log"
            className="px-6 py-3 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
          >
            View build log
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="mt-10 max-w-lg mx-auto rounded-xl border border-border bg-surface/20 px-5 py-4 md:px-6"
        >
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-2">
            Recognition
          </p>
          <p className="text-[14px] font-medium text-foreground mb-2">
            🏆 2nd Place · YC AI Growth Hackathon 2026
          </p>
          <p className="text-[12px] text-muted-soft mb-1.5">Built at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] leading-relaxed text-muted">
            <span>YC AI Growth Hackathon</span>
            <span className="text-muted-soft" aria-hidden="true">
              ·
            </span>
            <span>Dell × NVIDIA Local AI Hackathon</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="mt-24 flex justify-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-soft/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
