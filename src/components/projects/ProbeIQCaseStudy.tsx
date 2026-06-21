"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { TechStackPills } from "@/components/projects/TechStackPills";
import { TeamList } from "@/components/projects/TeamList";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PROBEIQ_PAGE } from "@/data/probeiq-page";
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

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5 mt-4 list-decimal list-inside">
      {items.map((item) => (
        <li key={item} className="text-[15px] leading-relaxed text-muted pl-1">
          {item}
        </li>
      ))}
    </ol>
  );
}

function QuestionList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/30 p-5">
      {items.map((question) => (
        <p
          key={question}
          className="text-[14px] leading-relaxed text-muted italic"
        >
          &ldquo;{question}&rdquo;
        </p>
      ))}
    </div>
  );
}

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

function StepCards({
  steps,
}: {
  steps: { step: number; text: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mt-6">
      {steps.map((item, index) => (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="p-5 rounded-xl border border-border bg-background/30 hover:border-border-strong transition-colors duration-300"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-border-strong bg-foreground/[0.06] text-[12px] font-semibold text-foreground mb-3">
            {item.step}
          </span>
          <p className="text-[14px] leading-relaxed text-muted">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch sm:items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-2">
          <span className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-border bg-background/40 text-[13px] text-muted text-center">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="text-muted-soft text-[13px]">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ProbeIQCaseStudy() {
  const project = getProjectBySlug("probeiq");
  const content = PROBEIQ_PAGE;

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
                ]}
              />
              <BulletList items={content.problem.bullets} />
              <div className="mt-4 space-y-4">
                <Paragraphs items={content.problem.paragraphs.slice(2)} />
              </div>
            </ProjectSection>

            <ProjectSection title="Solution">
              <Paragraphs
                items={[
                  content.solution.paragraphs[0],
                  content.solution.paragraphs[1],
                ]}
              />
              <BulletList items={content.solution.bullets} />
              <div className="mt-4 space-y-4">
                <p className="text-[15px] leading-relaxed text-muted">
                  {content.solution.paragraphs[2]}
                </p>
                <QuestionList items={content.solution.questions} />
                <p className="text-[15px] leading-relaxed text-muted">
                  {content.solution.paragraphs[3]}
                </p>
              </div>
            </ProjectSection>

            <ProjectSection title="Demo">
              <div className="rounded-xl border border-border bg-background/30 p-6 md:p-8 mb-8">
                <h4 className="text-[16px] font-medium text-foreground mb-3">
                  {content.demo.overview.title}
                </h4>
                <p className="text-[15px] leading-relaxed text-muted">
                  {content.demo.overview.description}
                </p>
              </div>

              <YouTubeEmbed
                videoId={content.demo.videoId}
                title={content.demo.overview.title}
              />

              <div className="mt-10">
                <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-1">
                  What Happens Behind the Scenes
                </h4>
                <StepCards steps={content.demo.behindTheScenes} />
              </div>

              <div className="mt-10">
                <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-4">
                  Why This Matters
                </h4>
                <Paragraphs items={content.demo.whyThisMatters.paragraphs} />
              </div>

              <div className="mt-10">
                <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-4">
                  Future Vision
                </h4>
                <Paragraphs items={content.demo.futureVision.paragraphs} />
              </div>

              <div className="mt-10 p-6 rounded-xl border border-border bg-background/30">
                <h4 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-4">
                  Technical Architecture
                </h4>
                <ArchitectureFlow steps={content.demo.technicalArchitecture} />
              </div>
            </ProjectSection>

            <ProjectSection title="Technology">
              <Paragraphs items={[content.technology.paragraphs[0]]} />
              <BulletList items={content.technology.bullets} />
              <div className="mt-4">
                <Paragraphs items={[content.technology.paragraphs[1]]} />
              </div>
              <div className="mt-6">
                <TechStackPills items={project.techStack} />
              </div>
            </ProjectSection>

            <ProjectSection title="Market Opportunity">
              <Paragraphs items={content.marketOpportunity.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Why Now">
              <Paragraphs items={[content.whyNow.paragraphs[0]]} />
              <NumberedList items={content.whyNow.numbered} />
              <div className="mt-4">
                <Paragraphs items={[content.whyNow.paragraphs[1]]} />
              </div>
            </ProjectSection>

            <ProjectSection title="Vision">
              <Paragraphs items={content.vision.paragraphs} />
            </ProjectSection>

            <ProjectSection title="Long-Term Opportunity">
              <Paragraphs
                items={[
                  content.longTermOpportunity.paragraphs[0],
                  content.longTermOpportunity.paragraphs[1],
                ]}
              />
              <BulletList items={content.longTermOpportunity.bullets} />
              <div className="mt-4 space-y-4">
                <Paragraphs
                  items={content.longTermOpportunity.paragraphs.slice(2)}
                />
              </div>
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
