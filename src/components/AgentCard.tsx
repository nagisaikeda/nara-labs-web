"use client";

import { motion } from "framer-motion";
import { AgentGallery } from "@/components/AgentGallery";
import type { AgentCardData } from "@/types/agent";

type AgentCardProps = AgentCardData & {
  index?: number;
  variant?: "default" | "featured";
};

function AgentBadge({ badge, featured }: { badge: string; featured?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold tracking-[0.12em] uppercase ${
        featured
          ? "border-border-strong bg-foreground/[0.06] text-foreground"
          : "border-border bg-surface/50 text-muted"
      }`}
    >
      {featured && (
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-mint animate-pulse-soft" />
      )}
      {badge}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[14px] text-muted"
        >
          <span className="mt-2 w-1 h-1 rounded-full bg-gradient-lavender/70 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1.5 rounded-full border border-border bg-background/40 text-[12px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function AgentCard({
  name,
  label,
  description,
  descriptionExtra,
  capabilities,
  techStack,
  researchAreas,
  team,
  keyInsight,
  badge,
  href,
  hrefLabel,
  gallery,
  index = 0,
  variant = "default",
}: AgentCardProps) {
  const featured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative rounded-2xl border overflow-hidden transition-colors duration-500 ${
        featured
          ? "border-border-strong bg-gradient-to-b from-surface-elevated/80 to-surface/40 hover:border-foreground/15"
          : "border-border bg-surface/30 hover:border-border-strong"
      }`}
    >
      {featured && (
        <div
          className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(167, 229, 211, 0.12) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {badge && <AgentBadge badge={badge} featured={featured} />}
          <span className="text-[12px] text-muted-soft uppercase tracking-wider">
            {label}
          </span>
        </div>

        <h2
          className={`font-serif font-normal tracking-[-0.02em] text-foreground mb-4 ${
            featured
              ? "text-[clamp(2rem,3.5vw,2.75rem)]"
              : "text-[clamp(1.75rem,3vw,2.25rem)]"
          }`}
        >
          {name}
        </h2>

        <div className="mb-8 max-w-3xl space-y-4">
          <p className="text-[15px] leading-relaxed text-muted">{description}</p>
          {descriptionExtra && (
            <p className="text-[15px] leading-relaxed text-muted">
              {descriptionExtra}
            </p>
          )}
        </div>

        {gallery && gallery.length > 0 && <AgentGallery images={gallery} />}

        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
            Capabilities
          </p>
          <BulletList items={capabilities} />
        </div>

        {techStack && techStack.length > 0 && (
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
              Tech Stack
            </p>
            <TagList items={techStack} />
          </div>
        )}

        {researchAreas && researchAreas.length > 0 && (
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
              Research Areas
            </p>
            <TagList items={researchAreas} />
          </div>
        )}

        {team && team.length > 0 && (
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
              Team
            </p>
            <div className="flex flex-wrap gap-2">
              {team.map((member) => (
                <span
                  key={member}
                  className="px-3 py-1.5 rounded-full border border-border bg-surface/40 text-[13px] text-muted"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}

        {keyInsight && (
          <div className="rounded-xl border border-border p-5 bg-background/30 group-hover:border-border-strong transition-colors duration-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-px bg-gradient-to-r from-gradient-sky/60 to-transparent" />
              <span className="text-[11px] text-muted-soft uppercase tracking-wider font-medium">
                Key Insight
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-muted italic">
              {keyInsight}
            </p>
          </div>
        )}

        {href && (
          <a
            href={href}
            className="inline-flex items-center mt-8 text-[14px] text-foreground hover:text-gradient-mint transition-colors duration-300"
          >
            {hrefLabel ?? `Explore ${name}`} →
          </a>
        )}
      </div>
    </motion.article>
  );
}
