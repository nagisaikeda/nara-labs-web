"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getHomeUpdates } from "@/data/updates";

export function UpdatesStrip() {
  const entries = getHomeUpdates();

  return (
    <section className="relative py-16 md:py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-2">
              Updates
            </p>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.02em] text-foreground">
              Momentum from the lab
            </h2>
          </div>
          <Link
            href="/updates"
            className="text-[14px] text-muted hover:text-foreground transition-colors duration-300 shrink-0"
          >
            View all updates →
          </Link>
        </div>

        <div className="space-y-0">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-[6.5rem_1fr] gap-2 sm:gap-8 py-4 border-b border-border last:border-b-0"
            >
              <time
                dateTime={entry.date}
                className="text-[12px] text-muted-soft tracking-wide"
              >
                {entry.date}
              </time>
              <p className="text-[14px] text-muted">{entry.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
