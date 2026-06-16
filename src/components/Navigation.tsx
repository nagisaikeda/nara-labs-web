"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#vision", label: "Research" },
  { href: "https://ahead.nara-labs.com", label: "Ahead", external: true },
  { href: "/#reasoning", label: "Systems" },
  { href: "/agents", label: "Agents" },
  { href: "/team", label: "Team" },
] as const;

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
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
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex lg:hidden items-center gap-4">
            <Link
              href="/agents"
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-300"
            >
              Agents
            </Link>
            <Link
              href="/team"
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-300"
            >
              Team
            </Link>
          </div>
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
