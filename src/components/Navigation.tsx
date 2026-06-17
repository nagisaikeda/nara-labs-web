"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#vision", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/build-log", label: "Build Log" },
  { href: "/agents", label: "Hackathons" },
  { href: "/team", label: "Team" },
] as const;

function navLinkClass(isActive: boolean) {
  return `text-[14px] transition-colors duration-300 ${
    isActive
      ? "text-foreground"
      : "text-muted hover:text-foreground"
  }`;
}

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={navLinkClass(isActive(link.href))}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex lg:hidden items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className={navLinkClass(isActive("/projects"))}
              aria-current={isActive("/projects") ? "page" : undefined}
            >
              Projects
            </Link>
            <Link
              href="/build-log"
              className={navLinkClass(isActive("/build-log"))}
              aria-current={isActive("/build-log") ? "page" : undefined}
            >
              Build Log
            </Link>
            <Link
              href="/agents"
              className={navLinkClass(isActive("/agents"))}
              aria-current={isActive("/agents") ? "page" : undefined}
            >
              Hackathons
            </Link>
            <Link
              href="/team"
              className={navLinkClass(isActive("/team"))}
              aria-current={isActive("/team") ? "page" : undefined}
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
