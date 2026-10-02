"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
  matchNested?: boolean;
  accent?: boolean;
};

const navLinks: readonly NavLink[] = [
  { href: "/nara", label: "Nara", matchNested: true, accent: true },
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/company", label: "Company" },
  { href: "/updates", label: "Updates" },
];

function navLinkClass(isActive: boolean) {
  return `inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-300 ${
    isActive ? "text-foreground" : "text-muted hover:text-foreground"
  }`;
}

function NavLinks({
  isActive,
  className,
}: {
  isActive: (link: NavLink) => boolean;
  className: string;
}) {
  return (
    <div className={className}>
      {navLinks.map((link) => {
        const active = isActive(link);
        return (
          <Link
            key={link.label}
            href={link.href}
            className={navLinkClass(active)}
            aria-current={active ? "page" : undefined}
          >
            {link.accent ? (
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-[#8fb39a]"
              />
            ) : null}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();

  const isActive = (link: NavLink) =>
    pathname === link.href ||
    (link.matchNested === true && pathname.startsWith(`${link.href}/`));

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[rgba(5,5,8,0.72)] backdrop-blur-[16px] supports-[backdrop-filter]:bg-[rgba(5,5,8,0.72)] px-6 py-4 md:py-5"
      style={{ WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto max-w-7xl flex flex-wrap md:flex-nowrap items-center justify-between gap-x-4 gap-y-3">
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

        <NavLinks
          isActive={isActive}
          className="hidden xl:flex items-center gap-7 text-[14px]"
        />

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <NavLinks
            isActive={isActive}
            className="hidden md:flex xl:hidden items-center gap-4 text-[14px]"
          />
          <Link
            href="/book-demo"
            className="text-[13px] font-medium px-4 py-2 rounded-full bg-foreground/[0.08] border border-border-strong text-foreground hover:bg-foreground/[0.12] transition-all duration-300 whitespace-nowrap"
          >
            Book Demo
          </Link>
        </div>

        <NavLinks
          isActive={isActive}
          className="flex md:hidden w-full items-center justify-between gap-4 overflow-x-auto text-[13px]"
        />
      </div>
    </motion.nav>
  );
}
