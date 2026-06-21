"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AgentGallery } from "@/components/AgentGallery";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { TechStackPills } from "@/components/projects/TechStackPills";
import { TeamList } from "@/components/projects/TeamList";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LOCAL_PM_OS_PAGE } from "@/data/local-pm-os-page";
import { getProjectBySlug } from "@/data/projects";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text) => (
        <p key={text} className="text-[15px] leading-relaxed text-muted">
          {text}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mt-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-muted"
        >
          <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-muted-soft" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <pre className="mt-4 text-[13px] leading-relaxed text-muted font-mono whitespace-pre-wrap rounded-xl border border-border bg-background/40 p-5 overflow-x-auto">
      {steps.join("\n→ ")}
    </pre>
  );
}

function ExampleBlock({ text }: { text: string }) {
  return (
    <div className="mt-4 rounded-xl border border-border bg-background/30 p-5">
      <p className="text-[14px] leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function LocalPMOSCaseStudy() {
  const project = getProjectBySlug("local-pm-os");
  const content = LOCAL_PM_OS_PAGE;

  if (!project) return null;

  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-[13px] text-muted-soft hover:text-foreground transition-colors duration-300 mb-8"
            >
              ← Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full border border-border-strong bg-foreground/[0.06] text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                {content.hero.badge}
              </span>
              <span className="text-[12px] text-muted-soft uppercase tracking-wider">
                {content.hero.origin}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-foreground mb-3">
              {content.hero.title}
            </h1>
            <p className="text-[18px] md:text-[20px] text-foreground/90 mb-5">
              {content.hero.subtitle}
            </p>
            <p className="text-[16px] leading-relaxed text-muted max-w-3xl">
              {content.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface/20 p-8 md:p-12">
            <ProjectSection title="Overview">
              <Paragraphs items={content.overview.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Problem">
              <Paragraphs
                items={[
                  content.problem.paragraphs[0],
                  content.problem.paragraphs[1],
                  content.problem.paragraphs[2],
                ]}
              />
              <BulletList items={content.problem.bullets} />
              <div className="mt-4 space-y-4">
                <Paragraphs items={content.problem.paragraphs.slice(3)} />
              </div>
            </ProjectSection>

            <ProjectSection title="Initial Customer Profile">
              <Paragraphs items={content.initialCustomerProfile.paragraphs.slice(0, 3)} />
              <p className="text-[15px] leading-relaxed text-muted mt-4">
                {content.initialCustomerProfile.paragraphs[3]}
              </p>
              <BulletList items={content.initialCustomerProfile.bullets} />
            </ProjectSection>

            <ProjectSection title="Market Opportunity">
              <Paragraphs items={content.marketOpportunity.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Solution">
              <Paragraphs
                items={[
                  content.solution.paragraphs[0],
                  content.solution.paragraphs[1],
                  content.solution.paragraphs[2],
                ]}
              />
              <BulletList items={content.solution.bullets} />
              <div className="mt-4 space-y-4">
                <Paragraphs items={content.solution.paragraphs.slice(3)} />
              </div>
              <div className="mt-6">
                <TechStackPills items={project.techStack} />
              </div>
            </ProjectSection>

            <ProjectSection title="Demo">
              <Paragraphs items={[content.demo.paragraphs[0], content.demo.paragraphs[1]]} />
              <ExampleBlock text={content.demo.paragraphs[2]} />
              <div className="mt-4 space-y-4">
                <p className="text-[15px] leading-relaxed text-muted">
                  {content.demo.paragraphs[3]}
                </p>
                <FlowDiagram steps={content.demo.flow} />
                <p className="text-[15px] leading-relaxed text-muted">
                  {content.demo.paragraphs[4]}
                </p>
              </div>
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-8">
                  <AgentGallery images={project.gallery} />
                </div>
              )}
            </ProjectSection>

            <ProjectSection title="Why Now">
              <Paragraphs items={content.whyNow.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Vision">
              <Paragraphs items={content.vision.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Long-Term Opportunity">
              <Paragraphs items={content.longTermOpportunity.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Team">
              <TeamList members={project.team} />
            </ProjectSection>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
