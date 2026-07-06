"use client";

import Link from "next/link";
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
                Applied AI Lab building configurable products for specialized
                industries. ReadyLead is our flagship commercial product.
              </p>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Products
              </p>
              <div className="space-y-3">
                <Link
                  href="/projects/readylead"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  ReadyLead
                </Link>
                <p className="text-[12px] text-muted-soft pl-0">
                  2nd Place · YC AI Growth Hackathon
                </p>
                <Link
                  href="/projects/probeiq"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  ProbeIQ
                </Link>
                <Link
                  href="/products"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  All products
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Company
              </p>
              <div className="space-y-3">
                <Link
                  href="/company"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/company#team"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Team
                </Link>
                <Link
                  href="/capabilities"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Capabilities
                </Link>
                <Link
                  href="/updates"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Updates
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
                Get started
              </p>
              <div className="space-y-3">
                <Link
                  href="/book-demo"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Book a demo
                </Link>
                <Link
                  href="/book-demo?partner=1"
                  className="block text-[14px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  Design partners
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-[13px] text-muted-soft">
              © 2026 Nara Labs. All rights reserved.
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
