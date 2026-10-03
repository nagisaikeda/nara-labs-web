"use client";

import { motion } from "framer-motion";
import type { NaraEpistemic } from "@/data/nara";
import { useNaraReveal } from "@/components/nara/useNaraReveal";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  title?: string;
  headline: string;
  body?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  thread?: boolean;
};

/** Shared opening for every chapter of the Nara story. */
export function NaraSectionHeader({
  id,
  eyebrow,
  title,
  headline,
  body,
  align = "left",
  tone = "light",
  thread = true,
}: SectionHeaderProps) {
  const reveal = useNaraReveal();
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <motion.div
      {...reveal({ inView: true, y: 18 })}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {thread && (
        <span
          aria-hidden
          className={`mb-8 block h-14 w-px bg-gradient-to-b from-transparent ${
            dark ? "to-[#8fb39a]/50" : "to-nara-border-strong"
          } ${centered ? "mx-auto" : ""}`}
        />
      )}
      <p
        className={`mb-6 text-[12px] font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#a9c7b1]" : "text-nara-green"
        }`}
      >
        {eyebrow}
        {title && (
          <span className={dark ? "text-[#f3ede1]/45" : "text-nara-muted"}>
            {" "}
            · {title}
          </span>
        )}
      </p>
      <h2
        id={id}
        className={`text-balance font-serif text-[clamp(2.2rem,4.8vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.025em] ${
          dark ? "text-[#f3ede1]" : "text-nara-foreground"
        }`}
      >
        {headline}
      </h2>
      {body && (
        <p
          className={`mt-6 max-w-xl text-pretty text-[17px] leading-relaxed ${
            dark ? "text-[#f3ede1]/70" : "text-nara-body"
          } ${centered ? "mx-auto" : ""}`}
        >
          {body}
        </p>
      )}
    </motion.div>
  );
}

/**
 * Marks how certain a piece of information is. Observations are open rings,
 * inferences and missing evidence are dashed, verified knowledge is solid.
 */
export function EpistemicMark({
  status,
  className = "",
}: {
  status: NaraEpistemic;
  className?: string;
}) {
  const shape = {
    observed: "border border-nara-foreground/55 bg-transparent",
    known: "border border-nara-green bg-nara-green",
    verified: "border border-nara-green bg-nara-green",
    inferred: "border border-dashed border-nara-foreground/55 bg-transparent",
    needed: "border border-dashed border-nara-amber bg-transparent",
  }[status];
  return (
    <span
      aria-hidden
      className={`inline-block size-[9px] shrink-0 rounded-full ${shape} ${className}`}
    />
  );
}

type TwinGlyphProps = {
  /** Amber marker on the state layer: something changed. */
  signal?: boolean;
  /** Green marker on the knowledge layer: a verified outcome returned. */
  updated?: boolean;
  className?: string;
};

const GLYPH_LAYERS = [20, 38, 56, 74];

/** A compact reference to the Home Twin model used throughout the story. */
export function TwinGlyph({ signal = false, updated = false, className = "" }: TwinGlyphProps) {
  const rhombus = (y: number, w = 44, h = 15) =>
    `${60 - w},${y} 60,${y - h} ${60 + w},${y} 60,${y + h}`;

  return (
    <svg aria-hidden viewBox="0 0 120 96" className={className}>
      {[...GLYPH_LAYERS].reverse().map((y, i) => {
        const index = GLYPH_LAYERS.length - 1 - i;
        const dark = index === 3;
        return (
          <polygon
            key={y}
            points={rhombus(y)}
            fill={dark ? "#26362d" : "#fbf7ef"}
            stroke={dark ? "#1c2a22" : "#bdb3a2"}
            strokeWidth={0.8}
          />
        );
      })}
      <polygon
        points="46,20 60,14 72,19 72,9 60,4 46,10"
        fill="#ece5d8"
        stroke="#3f4640"
        strokeOpacity={0.45}
        strokeWidth={0.6}
      />
      {signal && (
        <g>
          <ellipse cx={74} cy={38} rx={7} ry={3} fill="none" stroke="#d6982f" strokeWidth={0.9} />
          <ellipse cx={74} cy={38} rx={2.4} ry={1.3} fill="#d6982f" />
        </g>
      )}
      {updated && (
        <g>
          <ellipse cx={74} cy={74} rx={7} ry={3} fill="none" stroke="#a9c7b1" strokeWidth={0.9} />
          <rect x={72.2} y={72.2} width={3.6} height={3.6} fill="#f6f0e4" />
        </g>
      )}
    </svg>
  );
}
