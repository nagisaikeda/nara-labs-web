"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getHomeUpdates } from "@/data/updates";
import { NOTES_FROM_THE_LAB } from "@/data/homepage";

export function UpdatesStrip() {
  const entries = getHomeUpdates();

  return (
    <section
      id="notes"
      aria-labelledby="notes-heading"
      className="relative border-t border-border px-6 py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-soft">
            {NOTES_FROM_THE_LAB.eyebrow}
          </p>
          <h2
            id="notes-heading"
            className="text-balance font-serif text-[clamp(2.2rem,4.2vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground"
          >
            {NOTES_FROM_THE_LAB.title}
          </h2>
          <Link
            href="/updates"
            className="mt-8 inline-flex text-[14px] text-muted transition-colors duration-300 hover:text-foreground"
          >
            View all updates →
          </Link>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {entries.map((entry, index) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="grid grid-cols-1 gap-1.5 border-b border-border py-5 first:border-t sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <time
                dateTime={entry.date}
                className="text-[12px] tracking-wide text-muted-soft sm:pt-0.5"
              >
                {entry.date}
              </time>
              {entry.href ? (
                <Link
                  href={entry.href}
                  className="group inline-flex items-baseline gap-1.5 self-start rounded-sm text-[15px] text-foreground/90 transition-colors duration-300 hover:text-foreground"
                >
                  {entry.title}
                  <span
                    aria-hidden
                    className="text-muted-soft transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <p className="text-[15px] text-muted">{entry.title}</p>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
