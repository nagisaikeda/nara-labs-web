"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TechStackPills } from "@/components/projects/TechStackPills";
import { HACKATHON_ENTRIES } from "@/data/hackathons";

export function HomeHackathons() {
  return (
    <section id="hackathons" className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Hackathons
          </h2>
          <p className="text-[16px] leading-relaxed text-muted max-w-xl">
            Rapid experiments that pressure-test our systems thinking and
            shipping velocity.
          </p>
        </motion.div>

        <div className="space-y-0">
          {HACKATHON_ENTRIES.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              className="py-8 border-b border-border last:border-b-0"
            >
              <h3 className="text-[15px] font-medium text-foreground mb-2">
                {entry.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted mb-2">
                {entry.description}
              </p>
              <p className="text-[13px] leading-relaxed text-muted-soft mb-4">
                {entry.explored}
              </p>
              <TechStackPills items={entry.keywords} />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href="/agents"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            View all hackathons →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
