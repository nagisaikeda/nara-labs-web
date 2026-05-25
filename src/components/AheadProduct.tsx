"use client";

import { motion } from "framer-motion";

export function AheadProduct() {
  return (
    <section id="ahead" className="relative py-32 md:py-48 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-gradient-drift"
          style={{
            background:
              "radial-gradient(circle, rgba(167, 229, 211, 0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-mint animate-pulse-soft" />
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted">
              Flagship Product
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="text-foreground">Ahead</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-muted max-w-2xl mx-auto">
            An adaptive reasoning agent for high-stakes decisions. Ahead combines
            realtime simulation, contextual memory, and transparent chain-of-thought
            to augment judgment where it matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative rounded-3xl border border-border overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-background" />

          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[24px] font-serif font-normal tracking-[-0.01em] text-foreground mb-4">
                  Deliberate reasoning over snap answers
                </h3>
                <p className="text-[15px] leading-relaxed text-muted mb-8">
                  Ahead doesn&apos;t optimize for speed. It explores decision spaces,
                  models uncertainty, accounts for behavioral context, and presents
                  reasoning chains you can inspect and challenge at every step.
                </p>
                <div className="space-y-4">
                  {[
                    "Multi-scenario simulation engine",
                    "Persistent contextual memory",
                    "Transparent reasoning chains",
                    "Adaptive behavioral modeling",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border border-border-strong flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-mint/70" />
                      </div>
                      <span className="text-[14px] text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <AheadInterface />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AheadInterface() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="px-5 py-3 border-b border-border flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-mint/50" />
        <span className="text-[12px] text-muted-soft font-medium">
          Ahead · Reasoning Session
        </span>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-surface-elevated flex-shrink-0 flex items-center justify-center">
            <span className="text-[10px] text-muted">U</span>
          </div>
          <div className="flex-1">
            <p className="text-[13px] text-foreground/80 leading-relaxed">
              I&apos;m weighing whether to relocate for a role that pays 40% more but
              means leaving my network and stability behind. How should I think about this?
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gradient-lavender/20 to-gradient-sky/20 flex-shrink-0 flex items-center justify-center">
            <span className="text-[10px] text-gradient-lavender">A</span>
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-[13px] text-foreground/80 leading-relaxed">
              This is a multi-dimensional decision. Let me map the trade-off
              space across several frames...
            </p>
            <div className="rounded-lg border border-border p-3 bg-surface/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 rounded-full bg-gradient-mint animate-pulse-soft" />
                <span className="text-[11px] text-muted-soft uppercase tracking-wider font-medium">
                  Reasoning
                </span>
              </div>
              <div className="space-y-1.5">
                <p className="text-[12px] text-muted leading-relaxed">
                  → Optionality value: new role expands future paths by ~3x
                </p>
                <p className="text-[12px] text-muted leading-relaxed">
                  → Network decay model: 60% of ties persist at distance
                </p>
                <p className="text-[12px] text-muted leading-relaxed">
                  → Regret asymmetry: inaction regret typically 2.4x stronger at 5yr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
