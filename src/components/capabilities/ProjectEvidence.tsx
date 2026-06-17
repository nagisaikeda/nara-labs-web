"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECT_EVIDENCE } from "@/data/capabilities";
import { TechStackPills } from "@/components/projects/TechStackPills";

export function ProjectEvidence() {
  return (
    <section className="relative py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-3">
            Project Evidence
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Where these capabilities show up in shipped projects and prototypes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {PROJECT_EVIDENCE.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="p-6 md:p-8 rounded-xl border border-border hover:border-border-strong transition-colors duration-300"
            >
              <h3 className="text-[16px] font-medium text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted mb-4">
                {project.summary}
              </p>
              <TechStackPills items={project.capabilities} />
              <Link
                href={project.href}
                className="inline-flex items-center mt-5 text-[14px] text-muted hover:text-foreground transition-colors duration-300"
              >
                View project →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
