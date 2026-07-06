"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HackathonGallery } from "@/components/HackathonGallery";
import { READYLEAD_HACKATHON } from "@/data/readylead-hackathon";

export function ReadyLeadHackathonSection() {
  const content = READYLEAD_HACKATHON;

  return (
    <section className="relative px-6 pb-8">
      <div className="max-w-4xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl border border-border-strong bg-gradient-to-b from-surface-elevated/80 to-surface/40 overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(167, 229, 211, 0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-strong bg-foreground/[0.06] text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-mint animate-pulse-soft" />
                {content.placement}
              </span>
              <span className="text-[12px] text-muted-soft uppercase tracking-wider">
                {content.hackathon}
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-normal tracking-[-0.02em] text-foreground mb-6">
              {content.name}
            </h2>

            <div className="max-w-3xl space-y-4 mb-8">
              <p className="text-[15px] leading-relaxed text-muted">
                {content.description}
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                {content.descriptionExtra}
              </p>
            </div>

            <div className="flex items-center justify-center bg-[#f4f4f6] rounded-2xl border border-border p-4 md:p-6 mb-10 overflow-hidden">
              <Image
                src={content.heroImage}
                alt="ReadyLead product screenshot"
                width={2048}
                height={1402}
                sizes="(max-width: 768px) 100vw, 896px"
                className="w-full h-auto max-w-full object-cover rounded-xl shadow-sm"
              />
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-5">
                Hackathon Gallery
              </p>
              <HackathonGallery images={content.gallery} />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
