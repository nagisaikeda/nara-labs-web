"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-20">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/logo.png"
                  alt="Nara Labs"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-[15px] font-medium text-foreground">
                  Nara Labs
                </span>
              </div>
              <p className="text-[14px] leading-relaxed text-muted max-w-xs">
                Frontier AI systems for realtime reasoning, contextual memory,
                and human-centered decision intelligence.
              </p>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Research
              </p>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Reasoning Systems
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Behavioral Models
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Adaptive Interfaces
                </a>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Products
              </p>
              <div className="space-y-3">
                <a
                  href="https://ahead.nara-labs.com"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Ahead
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  API
                </a>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Company
              </p>
              <div className="space-y-3">
                <a
                  href="/team"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Team
                </a>
                <a
                  href="/projects"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="/agents"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Hackathons
                </a>
                <a
                  href="#"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-[13px] text-muted-soft">
              © 2025 Nara Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[13px] text-muted-soft hover:text-muted transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[13px] text-muted-soft hover:text-muted transition-colors duration-300"
              >
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
