"use client";

import { motion } from "framer-motion";
import { WORKFLOW_PROBLEMS } from "@/data/homepage";

export function WorkflowProblems() {
  return (
    <section
      id="workflows"
      className="relative py-32 md:py-48 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Workflow Problems We Build For
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            We focus on expensive, repeatable workflow pain in specialized
            industries — then productize solutions customers can configure and
            deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {WORKFLOW_PROBLEMS.map((problem, index) => (
            <motion.article
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-surface/20 hover:border-border-strong transition-colors duration-300"
            >
              <h3 className="text-[16px] font-medium text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
