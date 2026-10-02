"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  NARA_HERO,
  NARA_HERO_SYSTEMS,
  type NaraHeroSystem,
  type NaraSystemId,
} from "@/data/nara";
import {
  NaraStatusIndicator as StatusIndicator,
  NaraSystemGlyph as SystemGlyph,
} from "@/components/nara/NaraSystemBadge";
import { NARA_INSTANT, useNaraReveal } from "@/components/nara/useNaraReveal";

/**
 * Positions are percentages of the illustration box and are tied to
 * `/public/nara/home-twin.jpg`. Update them if the illustration changes.
 */
const SYSTEM_PLACEMENT: Record<
  NaraSystemId,
  {
    pin: { x: number; y: number };
    anchor: { x: number; y: number };
    side: "left" | "right";
  }
> = {
  hvac: { pin: { x: 33, y: 58 }, anchor: { x: 26, y: 40 }, side: "left" },
  water: { pin: { x: 66.5, y: 44 }, anchor: { x: 77, y: 25 }, side: "right" },
  electrical: {
    pin: { x: 60, y: 63 },
    anchor: { x: 75, y: 76 },
    side: "right",
  },
};

function SystemCallout({
  system,
  index,
}: {
  system: NaraHeroSystem;
  index: number;
}) {
  const reveal = useNaraReveal();
  const { anchor, side } = SYSTEM_PLACEMENT[system.id];

  return (
    <motion.li
      {...reveal({ delay: 1.1 + index * 0.18, y: 8 })}
      className="absolute flex w-[13.5rem] -translate-y-1/2 items-center gap-3 rounded-2xl border border-nara-border bg-nara-surface/95 px-4 py-3.5 nara-shadow"
      style={{
        top: `${anchor.y}%`,
        ...(side === "left"
          ? { right: `${100 - anchor.x}%` }
          : { left: `${anchor.x}%` }),
      }}
    >
      <SystemGlyph system={system} />
      <div className="min-w-0">
        <p className="font-serif text-[19px] leading-tight text-nara-foreground">
          {system.name}
        </p>
        <StatusIndicator status={system.status} />
      </div>
    </motion.li>
  );
}

function HomeTwinIllustration() {
  const reveal = useNaraReveal();
  const reduce = useReducedMotion();

  return (
    <figure className="relative mx-auto mt-6 w-full max-w-[1280px] md:-mt-4 xl:-mt-14">
      <div className="relative overflow-hidden xl:overflow-visible">
        <motion.div
          {...reveal({ delay: 0.5, y: 24, duration: 1.4 })}
          className="relative left-1/2 aspect-[16/9] w-[150%] -translate-x-1/2 sm:w-[125%] md:w-full"
        >
          <Image
            src="/nara/home-twin.jpg"
            alt={NARA_HERO.visualAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1280px, (min-width: 768px) 100vw, 150vw"
            className="nara-image-fade object-cover"
          />

          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {NARA_HERO_SYSTEMS.map((system, index) => {
              const { pin, anchor } = SYSTEM_PLACEMENT[system.id];
              return (
                <motion.line
                  key={system.id}
                  x1={anchor.x}
                  y1={anchor.y}
                  x2={pin.x}
                  y2={pin.y}
                  stroke="var(--nara-border-strong)"
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={
                    reduce
                      ? NARA_INSTANT
                      : { duration: 0.8, delay: 1.3 + index * 0.18 }
                  }
                />
              );
            })}
          </svg>

          {NARA_HERO_SYSTEMS.map((system, index) => {
            const { pin } = SYSTEM_PLACEMENT[system.id];
            return (
              <motion.span
                key={system.id}
                aria-hidden
                {...reveal({ delay: 1.0 + index * 0.18, y: 0, scale: 0.6, duration: 0.6 })}
                className="absolute flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-nara-border-strong bg-nara-surface/90 nara-shadow"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    system.status === "known" ? "bg-nara-sage" : "bg-nara-amber"
                  }`}
                />
              </motion.span>
            );
          })}

          <ul aria-label="Home systems" className="hidden xl:block">
            {NARA_HERO_SYSTEMS.map((system, index) => (
              <SystemCallout key={system.id} system={system} index={index} />
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.ul
        aria-label="Home systems"
        {...reveal({ delay: 1.1, y: 12 })}
        className="relative mx-auto -mt-4 w-full max-w-md divide-y divide-nara-border rounded-3xl border border-nara-border bg-nara-surface/90 nara-shadow md:-mt-8 md:grid md:max-w-3xl md:grid-cols-3 md:divide-x md:divide-y-0 xl:hidden"
      >
        {NARA_HERO_SYSTEMS.map((system) => (
          <li
            key={system.id}
            className="flex items-center gap-4 px-5 py-4 md:justify-center md:px-4 md:py-5"
          >
            <SystemGlyph system={system} />
            <div className="flex flex-1 items-center justify-between gap-3 md:flex-none md:flex-col md:items-start md:gap-0.5">
              <p className="font-serif text-[20px] leading-tight text-nara-foreground">
                {system.name}
              </p>
              <StatusIndicator status={system.status} />
            </div>
          </li>
        ))}
      </motion.ul>

      <figcaption className="mt-5 text-center text-[12px] tracking-[0.02em] text-nara-muted xl:mt-0">
        {NARA_HERO.visualCaption}
      </figcaption>
    </figure>
  );
}

export function NaraHero() {
  const reveal = useNaraReveal();

  return (
    <section
      aria-labelledby="nara-hero-heading"
      className="relative bg-nara-canvas px-5 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-36 xl:pt-40"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          {...reveal({ delay: 0.1, y: 12 })}
          className="mb-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-nara-green"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-nara-green" />
          {NARA_HERO.eyebrow}
        </motion.p>

        <motion.h1
          id="nara-hero-heading"
          {...reveal({ delay: 0.2, y: 18, duration: 1.1 })}
          className="font-serif text-[clamp(2.5rem,6.4vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.025em] text-nara-foreground"
        >
          {NARA_HERO.headlineLines.map((line, index) => (
            <span key={line} className="lg:block">
              {line}
              {index < NARA_HERO.headlineLines.length - 1 ? " " : null}
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...reveal({ delay: 0.4, duration: 1 })}
          className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-nara-body md:text-[18px]"
        >
          {NARA_HERO.body}
        </motion.p>

        <motion.div
          {...reveal({ delay: 0.55, y: 12 })}
          className="mx-auto mt-10 flex max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
        >
          <a
            href={NARA_HERO.primaryCta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-nara-green px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-nara-green-strong"
          >
            {NARA_HERO.primaryCta.label}
          </a>
          <a
            href={NARA_HERO.secondaryCta.href}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-nara-border-strong bg-nara-surface/60 px-7 text-[15px] font-medium text-nara-foreground transition-colors duration-300 hover:border-nara-foreground/30 hover:bg-nara-surface"
          >
            {NARA_HERO.secondaryCta.label}
            <span aria-hidden>↓</span>
          </a>
        </motion.div>
      </div>

      <HomeTwinIllustration />
    </section>
  );
}
