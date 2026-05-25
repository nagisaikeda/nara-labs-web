"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Nara Labs"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <span className="text-[15px] font-medium tracking-tight text-foreground">
            Nara Labs
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#vision"
            className="text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Research
          </a>
          <a
            href="https://ahead.nara-labs.com"
            className="text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Ahead
          </a>
          <a
            href="#reasoning"
            className="text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Systems
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-[13px] font-medium px-4 py-2 rounded-full bg-foreground/[0.08] border border-border-strong text-foreground hover:bg-foreground/[0.12] transition-all duration-300"
          >
            Request access
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
