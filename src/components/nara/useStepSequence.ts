"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

type StepOptions = {
  interval?: number;
  loop?: boolean;
  paused?: boolean;
};

/**
 * Drives a step-by-step explanation once the element scrolls near view.
 * Returns null for the static state (server render, before arming, or
 * prefers-reduced-motion); components render their complete state for null.
 * Arming happens slightly before the element is visible so the reset to
 * step 0 is not seen.
 */
export function useStepSequence(
  ref: RefObject<Element | null>,
  count: number,
  { interval = 1500, loop = false, paused = false }: StepOptions = {},
) {
  const armed = useInView(ref, { once: true, margin: "320px 0px" });
  const visible = useInView(ref, { margin: "-18% 0px" });
  const [tick, setTick] = useState<number | null>(null);
  const started = tick !== null;
  const done = !loop && tick === count - 1;

  useEffect(() => {
    if (!armed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setTick((t) => t ?? 0), 0);
    return () => window.clearTimeout(id);
  }, [armed]);

  useEffect(() => {
    if (!started || !visible || paused || done) return;
    const id = window.setInterval(() => {
      setTick((t) => {
        if (t === null) return t;
        return loop ? t + 1 : Math.min(t + 1, count - 1);
      });
    }, interval);
    return () => window.clearInterval(id);
  }, [started, visible, paused, done, interval, loop, count]);

  if (tick === null) return null;
  return loop ? tick % count : tick;
}
