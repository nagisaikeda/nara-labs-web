"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Realtime Reasoning",
    description:
      "Systems that think dynamically — weighing trade-offs, exploring scenarios, and adapting conclusions as new information arrives. Not static answers. Living intelligence.",
  },
  {
    title: "Contextual Memory",
    description:
      "AI that remembers what matters. Persistent context across sessions, evolving understanding of preferences, constraints, and goals. Intelligence that compounds over time.",
  },
  {
    title: "Behavioral Decision Support",
    description:
      "Augmenting human judgment without replacing it. Our systems surface blind spots, model uncertainty, and present reasoning you can follow, challenge, and trust.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative pt-32 md:pt-40 pb-32 md:pb-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mb-24"
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-6">
            Research Focus
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-8">
            <span className="text-foreground">
              Software that helps humans
            </span>
            <br />
            <span className="text-muted">
              reason through uncertainty.
            </span>
          </h2>
          <p className="text-[16px] leading-relaxed text-muted max-w-2xl">
            We&apos;re building the infrastructure for human-centered intelligent
            systems — adaptive interfaces, agentic orchestration, and reasoning
            engines that meet the full complexity of real-world decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl border border-border hover:border-border-strong transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-surface-glass to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-8 h-px bg-gradient-to-r from-gradient-lavender/50 to-transparent mb-6" />
                <h3 className="text-[18px] font-medium text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
