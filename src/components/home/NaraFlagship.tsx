"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NARA_HERO, NARA_HERO_SYSTEMS, NARA_HOMEPAGE_INTRO } from "@/data/nara";
import {
  NaraStatusIndicator,
  NaraSystemGlyph,
} from "@/components/nara/NaraSystemBadge";

export function NaraFlagship() {
  return (
    <section
      id="nara"
      aria-labelledby="home-nara-heading"
      className="nara-product relative bg-nara-canvas"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl items-center px-6 py-20 md:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-6 lg:py-32"
      >
        <div className="text-left">
          <p className="mb-10 text-[12px] font-semibold uppercase tracking-[0.18em] text-nara-green md:mb-12">
            {NARA_HOMEPAGE_INTRO.eyebrow}
          </p>
          <h2
            id="home-nara-heading"
            className="font-serif text-[clamp(3.25rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-nara-foreground"
          >
            {NARA_HOMEPAGE_INTRO.name}
          </h2>
          <p className="mt-6 max-w-md text-balance font-serif text-[clamp(1.45rem,2.6vw,2rem)] leading-[1.18] tracking-[-0.01em] text-nara-foreground/90">
            {NARA_HOMEPAGE_INTRO.headlineLines.join(" ")}
          </p>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-nara-body md:text-[17px]">
            {NARA_HOMEPAGE_INTRO.body}
          </p>
          <Link
            href={NARA_HOMEPAGE_INTRO.cta.href}
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-nara-green px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-nara-green-strong"
          >
            {NARA_HOMEPAGE_INTRO.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <figure className="relative mt-12 lg:mt-0">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden sm:aspect-[16/10]">
            <Image
              src="/nara/home-twin.jpg"
              alt={NARA_HERO.visualAlt}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="nara-image-fade scale-[1.35] object-cover sm:scale-[1.2]"
            />
          </div>
          <ul
            aria-label="Home systems"
            className="relative -mt-6 grid grid-cols-3 divide-x divide-nara-border rounded-2xl border border-nara-border bg-nara-surface/95 nara-shadow sm:mx-auto sm:max-w-lg"
          >
            {NARA_HERO_SYSTEMS.map((system) => (
              <li
                key={system.id}
                className="flex flex-col items-center gap-2 px-2 py-4 text-center sm:flex-row sm:gap-3 sm:px-4 sm:text-left"
              >
                <NaraSystemGlyph system={system} />
                <div>
                  <p className="font-serif text-[17px] leading-tight text-nara-foreground sm:text-[18px]">
                    {system.name}
                  </p>
                  <NaraStatusIndicator status={system.status} />
                </div>
              </li>
            ))}
          </ul>
        </figure>
      </motion.div>
    </section>
  );
}
