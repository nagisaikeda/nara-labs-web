"use client";

import { useState } from "react";
import { NaraSectionHeader } from "@/components/nara/NaraStoryPrimitives";
import { NARA_HOME_TWIN, NARA_HOME_TWIN_ID } from "@/data/nara";
import {
  HomeTwinStack,
  layerTopPercent,
  type HomeTwinLayerId,
} from "@/components/nara/HomeTwinStack";

const MODEL_ID = "home-twin-model";

type LayerControlProps = {
  id: HomeTwinLayerId;
  label: string;
  description: string;
  active: boolean;
  pressed: boolean;
  onPreview: (id: HomeTwinLayerId | null) => void;
  onToggle: (id: HomeTwinLayerId) => void;
  className?: string;
};

function LayerControl({
  id,
  label,
  description,
  active,
  pressed,
  onPreview,
  onToggle,
  className = "",
}: LayerControlProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-controls={MODEL_ID}
      onMouseEnter={() => onPreview(id)}
      onMouseLeave={() => onPreview(null)}
      onFocus={() => onPreview(id)}
      onBlur={() => onPreview(null)}
      onClick={() => onToggle(id)}
      className={`group rounded-sm text-left transition-opacity duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nara-green ${className}`}
    >
      <span
        className={`block text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
          active ? "text-nara-green" : "text-nara-muted group-hover:text-nara-foreground"
        }`}
      >
        {label}
      </span>
      <span className="mt-1.5 block font-serif text-[17px] leading-snug text-nara-foreground">
        {description}
      </span>
    </button>
  );
}

export function NaraHomeTwin() {
  const [preview, setPreview] = useState<HomeTwinLayerId | null>(null);
  const [pinned, setPinned] = useState<HomeTwinLayerId | null>(null);
  const active = preview ?? pinned;
  const layers = NARA_HOME_TWIN.layers;

  const toggle = (id: HomeTwinLayerId) => {
    if (pinned === id) {
      setPinned(null);
      setPreview(null);
    } else {
      setPinned(id);
    }
  };

  const controlState = (id: HomeTwinLayerId) => ({
    active: active === id,
    pressed: pinned === id,
    onPreview: setPreview,
    onToggle: toggle,
  });

  const dimmed = (id: HomeTwinLayerId) =>
    active !== null && active !== id ? "opacity-45" : "opacity-100";

  return (
    <section
      id={NARA_HOME_TWIN_ID}
      aria-labelledby="nara-home-twin-heading"
      className="relative scroll-mt-20 bg-gradient-to-b from-nara-canvas to-nara-background px-5 py-24 sm:px-6 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <NaraSectionHeader
          id="nara-home-twin-heading"
          eyebrow={NARA_HOME_TWIN.eyebrow}
          title={NARA_HOME_TWIN.title}
          headline={NARA_HOME_TWIN.headline}
          body={NARA_HOME_TWIN.body}
          align="center"
          thread={false}
        />

        <div className="mt-14 md:mt-20 lg:mt-24">
          <div className="relative mx-auto flex max-w-[620px] lg:max-w-none">
            <div className="w-full lg:w-[62%]">
              <HomeTwinStack id={MODEL_ID} active={active} onInspect={setPreview} />
            </div>
            <ul
              aria-label="Home Twin layers"
              className="relative hidden lg:block lg:w-[38%]"
            >
              {layers.map((layer, index) => (
                <li
                  key={layer.id}
                  className={`absolute left-0 -translate-y-1/2 pl-5 transition-opacity duration-500 ${dimmed(layer.id)}`}
                  style={{ top: `${layerTopPercent(index)}%` }}
                >
                  <LayerControl
                    id={layer.id}
                    label={layer.label}
                    description={layer.description}
                    {...controlState(layer.id)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-6 flex max-w-[620px] flex-col items-center text-center lg:mx-0 lg:w-[62%] lg:max-w-none">
            <span aria-hidden className="mb-4 h-6 w-px bg-nara-border-strong" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-nara-foreground">
              {NARA_HOME_TWIN.modelLabel}
            </p>
            <p className="mt-1.5 text-[12px] tracking-[0.04em] text-nara-muted">
              {NARA_HOME_TWIN.modelNote}
            </p>
          </div>

          <ul
            aria-label="Home Twin layers"
            className="mx-auto mt-14 grid max-w-[620px] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:hidden"
          >
            {layers.map((layer) => (
              <li
                key={layer.id}
                className={`border-t pt-4 transition-[opacity,border-color] duration-500 ${
                  active === layer.id ? "border-nara-green" : "border-nara-border-strong"
                } ${dimmed(layer.id)}`}
              >
                <LayerControl
                  id={layer.id}
                  label={layer.label}
                  description={layer.description}
                  className="w-full"
                  {...controlState(layer.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
