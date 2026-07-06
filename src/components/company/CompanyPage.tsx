"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { Footer } from "@/components/Footer";
import { COMPANY_ABOUT, APPLIED_AI_LAB_MODEL } from "@/data/company";
import { TEAM_MEMBERS } from "@/data/team";
import { motion } from "framer-motion";

export function CompanyPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Company"
        subtitle="An Applied AI Lab building configurable products for specialized industries."
        supportingText="We discover painful workflows, validate them with design partners, and ship AI products customers can evaluate and deploy."
      />

      <section className="relative px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-surface/20 p-8 md:p-12"
          >
            <h2 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-6">
              {COMPANY_ABOUT.title}
            </h2>
            <div className="space-y-4">
              {COMPANY_ABOUT.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-20 border-t border-border pt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.02em] text-foreground mb-4">
              {APPLIED_AI_LAB_MODEL.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              {APPLIED_AI_LAB_MODEL.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {APPLIED_AI_LAB_MODEL.steps.map((step, index) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                className="p-6 md:p-8 rounded-2xl border border-border bg-surface/20"
              >
                <p className="text-[12px] font-semibold tracking-[0.12em] text-muted-soft mb-3">
                  {step.step}
                </p>
                <h3 className="text-[16px] font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="relative pb-32 md:pb-48 px-6 border-t border-border pt-20"
        aria-labelledby="company-team-heading"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2
              id="company-team-heading"
              className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.02em] text-foreground mb-4"
            >
              Team
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              The people building applied AI products from the lab.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
