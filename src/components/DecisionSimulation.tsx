"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const scenarios = [
  {
    id: "career",
    label: "Career Transition",
    question: "Should I leave a stable role to join an early-stage company as a co-founder?",
    metrics: [
      { label: "Optionality Score", value: "8.4", status: "actionable" },
      { label: "Risk Tolerance Fit", value: "High", status: "moderate" },
      { label: "Regret Probability", value: "0.31", status: "actionable" },
    ],
    insight:
      "Your behavioral profile strongly correlates with founder satisfaction at 3-year mark. The risk is real but bounded — your fallback optionality (return to market) decays only 12% over 18 months. Key variable: co-founder alignment on equity split signals long-term trust architecture.",
  },
  {
    id: "operations",
    label: "Operational Strategy",
    question: "We're choosing between building an internal tool or buying — 6-month runway pressure.",
    metrics: [
      { label: "Build Time", value: "14 wks", status: "stretch" },
      { label: "Buy Integration", value: "4 wks", status: "actionable" },
      { label: "Long-term TCO", value: "Build wins at M18", status: "moderate" },
    ],
    insight:
      "Under runway pressure, buy-then-migrate is the dominant strategy. Build the abstraction layer now (2 weeks), integrate the vendor, then plan the internal rebuild for post-Series A. This preserves optionality without burning critical months.",
  },
  {
    id: "relocation",
    label: "Life Architecture",
    question: "We're considering moving abroad for 2 years. How do we think about what we'd lose vs. gain?",
    metrics: [
      { label: "Adaptation Curve", value: "~8 wks", status: "actionable" },
      { label: "Network Persistence", value: "64%", status: "moderate" },
      { label: "Experience Yield", value: "Very high", status: "actionable" },
    ],
    insight:
      "The asymmetry favors going. Network degradation is overestimated for high-agency individuals — you'll rebuild 80% within 6 months of return. The experiential and perspective gains compound permanently. Optimal structure: commit for 18 months with a 6-month review gate.",
  },
];

export function DecisionSimulation() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = scenarios[activeScenario];

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full animate-gradient-drift-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 197, 168, 0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-6">
            Adaptive Simulation
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Decisions, modeled in real time
          </h2>
          <p className="text-[16px] text-muted max-w-xl mx-auto">
            Explore how our systems reason through the high-stakes decisions
            that shape careers, companies, and lives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {scenarios.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(i)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  i === activeScenario
                    ? "bg-foreground/[0.1] border border-border-strong text-foreground"
                    : "border border-transparent text-muted hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="p-6 md:p-10 bg-gradient-to-b from-surface/40 to-transparent">
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-[14px] text-muted-soft mb-2">Query</p>
                <p className="text-[20px] font-serif font-normal text-foreground mb-10 max-w-2xl">
                  &ldquo;{scenario.question}&rdquo;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {scenario.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-xl border border-border bg-background/50"
                    >
                      <p className="text-[11px] text-muted-soft uppercase tracking-wider mb-2">
                        {metric.label}
                      </p>
                      <p className="text-[24px] font-light text-foreground tracking-tight">
                        {metric.value}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            metric.status === "actionable"
                              ? "bg-gradient-mint"
                              : metric.status === "moderate"
                                ? "bg-gradient-sky"
                                : "bg-gradient-peach"
                          }`}
                        />
                        <span className="text-[11px] text-muted-soft capitalize">
                          {metric.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border p-5 bg-surface/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-px bg-gradient-to-r from-gradient-lavender/60 to-transparent" />
                    <span className="text-[11px] text-muted-soft uppercase tracking-wider font-medium">
                      Synthesis
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.7] text-foreground/80">
                    {scenario.insight}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
