"use client";

import { motion } from "framer-motion";
import type { BuildLogEntry } from "@/types/build-log";

type BuildLogTimelineProps = {
  entries: BuildLogEntry[];
  showDescriptions?: boolean;
};

export function BuildLogTimeline({
  entries,
  showDescriptions = false,
}: BuildLogTimelineProps) {
  return (
    <div className="w-full">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
          className="group grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-10 py-6 border-b border-border last:border-b-0 transition-opacity duration-300 hover:opacity-80"
        >
          <time
            dateTime={entry.date}
            className="text-[13px] text-muted-soft tracking-wide"
          >
            {entry.date}
          </time>
          <div>
            <h3 className="text-[15px] font-medium text-foreground">
              {entry.title}
            </h3>
            {showDescriptions && entry.description && (
              <p className="text-[14px] leading-relaxed text-muted mt-2 max-w-2xl">
                {entry.description}
              </p>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
