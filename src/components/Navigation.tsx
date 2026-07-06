"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/company", label: "Company" },
  { href: "/updates", label: "Updates" },
] as const;

function navLinkClass(isActive: boolean) {
  return `text-[14px] transition-colors duration-300 ${
    isActive ? "text-foreground" : "text-muted hover:text-foreground"
  }`;
}

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

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

        <div className="hidden xl:flex items-center gap-7">
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
          <div className="flex xl:hidden items-center gap-3 sm:gap-4 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${navLinkClass(isActive(link.href))} whitespace-nowrap`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/book-demo"
            className="text-[13px] font-medium px-4 py-2 rounded-full bg-foreground/[0.08] border border-border-strong text-foreground hover:bg-foreground/[0.12] transition-all duration-300 whitespace-nowrap"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
