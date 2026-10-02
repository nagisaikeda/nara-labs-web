"use client";

import { useReducedMotion } from "framer-motion";

export const NARA_EASE = [0.22, 1, 0.36, 1] as const;

type RevealOptions = {
  delay?: number;
  y?: number;
  duration?: number;
  scale?: number;
  inView?: boolean;
  margin?: string;
};

export const NARA_INSTANT = { duration: 0, delay: 0 } as const;

/**
 * Entrance motion for Nara sections. Under prefers-reduced-motion the content
 * appears in its final state immediately. The initial state is identical on
 * server and client (useReducedMotion is null during SSR) to avoid hydration
 * mismatches; only the transition changes.
 */
export function useNaraReveal() {
  const reduce = useReducedMotion();

  return ({
    delay = 0,
    y = 14,
    duration = 0.9,
    scale,
    inView = false,
    margin = "-80px",
  }: RevealOptions = {}) => {
    const hidden = { opacity: 0, y, ...(scale ? { scale } : {}) };
    const shown = { opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) };
    const transition = reduce
      ? NARA_INSTANT
      : { duration, delay, ease: NARA_EASE };

    return inView
      ? {
          initial: hidden,
          whileInView: shown,
          viewport: { once: true, margin },
          transition,
        }
      : { initial: hidden, animate: shown, transition };
  };
}
