"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const reasoningSteps = [
  {
    label: "Context Recall",
    text: "Drawing on prior sessions: user values long-term optionality, has moderate risk tolerance, and weights autonomy heavily. Last major decision (6 months ago) followed a similar pattern — deliberated 3 weeks, chose the expansive path, reported high satisfaction.",
  },
  {
    label: "Uncertainty Mapping",
    text: "Three key unknowns: adaptation speed in new environment (historically 4–8 weeks for this profile), network reconstruction cost (moderate — user builds connections quickly), and role-fit confidence (strong signal from interview process, but untested in practice).",
  },
  {
    label: "Behavioral Modeling",
    text: "Detecting status quo bias in the framing. The question 'should I leave stability' anchors on loss. Reframing: 'what does staying cost over 3 years?' reveals opportunity cost more clearly. User tends to underweight compounding gains from discomfort.",
  },
  {
    label: "Scenario Simulation",
    text: "Running three trajectories: (A) relocate now — expected utility peaks at month 14. (B) Delay 6 months — optionality decays 20%, but preparation time reduces adaptation risk. (C) Decline — stable baseline, but regret probability rises to 0.72 by year 2.",
  },
  {
    label: "Synthesis",
    text: "The decision architecture favors action with a preparation buffer. Recommend: commit to the move with a 60-day transition plan. This preserves the opportunity while reducing the adaptation shock that drives early regret. The network concern is real but historically overstated for your profile.",
  },
];

export function ReasoningCard() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % reasoningSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="reasoning" className="relative py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-soft mb-6">
            Transparent Intelligence
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Watch the system reason
          </h2>
          <p className="text-[16px] text-muted max-w-xl mx-auto">
            Every output carries its full reasoning chain — visible,
            challengeable, and grounded in your context.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="rounded-2xl border border-border overflow-hidden"
            onMouseEnter={() => setIsAnimating(false)}
            onMouseLeave={() => setIsAnimating(true)}
          >
            <div className="px-6 py-4 border-b border-border bg-surface/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {reasoningSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                        i === activeStep
                          ? "bg-gradient-lavender w-4"
                          : i < activeStep
                            ? "bg-muted-soft"
                            : "bg-border-strong"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-muted-soft uppercase tracking-wider font-medium">
                  Chain of Thought
                </span>
              </div>
              <span className="text-[11px] text-muted-soft">
                Step {activeStep + 1} of {reasoningSteps.length}
              </span>
            </div>

            <div className="p-6 md:p-8 min-h-[200px] flex flex-col justify-center">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-mint animate-pulse-soft" />
                  <span className="text-[13px] font-medium text-gradient-mint/80">
                    {reasoningSteps[activeStep].label}
                  </span>
                </div>
                <p className="text-[15px] leading-[1.7] text-foreground/80">
                  {reasoningSteps[activeStep].text}
                </p>
              </motion.div>
            </div>

            <div className="px-6 py-3 border-t border-border bg-surface/20">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-soft">
                  Life Decision · Relocation Analysis · Confidence: 0.84
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gradient-mint" />
                  <span className="text-[11px] text-muted-soft">
                    Reasoning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
