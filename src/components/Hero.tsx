"use client";

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
          <a
            href="https://ahead.nara-labs.com"
            className="px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Explore Ahead
          </a>
          <a
            href="#vision"
            className="px-6 py-3 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
          >
            Our research
          </a>
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
