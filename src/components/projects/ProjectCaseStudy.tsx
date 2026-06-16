"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AgentGallery } from "@/components/AgentGallery";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { TechStackPills } from "@/components/projects/TechStackPills";
import { TeamList } from "@/components/projects/TeamList";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { ProjectCaseStudy } from "@/types/project";

type ProjectCaseStudyProps = {
  project: ProjectCaseStudy;
};

export function ProjectCaseStudyView({ project }: ProjectCaseStudyProps) {
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
              {project.badge && (
                <span className="px-3 py-1 rounded-full border border-border-strong bg-foreground/[0.06] text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  {project.badge}
                </span>
              )}
              <span className="text-[12px] text-muted-soft uppercase tracking-wider">
                {project.origin}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-foreground mb-3">
              {project.name}
            </h1>
            <p className="text-[17px] text-muted mb-6">{project.label}</p>
            <p className="text-[16px] leading-relaxed text-muted max-w-3xl mb-8">
              {project.overview}
            </p>

            <ProjectLinks
              variant="hero"
              demoVideo={project.demoVideo}
              githubRepo={project.githubRepo}
            />
          </motion.div>
        </div>
      </section>

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface/20 p-8 md:p-12">
            <ProjectSection title="Overview">
              <p className="text-[15px] leading-relaxed text-muted max-w-3xl">
                {project.overview}
              </p>
            </ProjectSection>

            <ProjectSection title="Problem">
              <p className="text-[15px] leading-relaxed text-muted">
                {project.problem}
              </p>
            </ProjectSection>

            <ProjectSection title="Solution">
              <p className="text-[15px] leading-relaxed text-muted">
                {project.solution}
              </p>
            </ProjectSection>

            <ProjectSection title="Architecture">
              <pre className="text-[13px] leading-relaxed text-muted font-mono whitespace-pre-wrap rounded-xl border border-border bg-background/40 p-5 overflow-x-auto">
                {project.architecture}
              </pre>
            </ProjectSection>

            {project.gallery && project.gallery.length > 0 && (
              <ProjectSection title="Screenshots">
                <AgentGallery images={project.gallery} />
              </ProjectSection>
            )}

            <ProjectSection title="Team">
              <TeamList members={project.team} />
            </ProjectSection>

            <ProjectSection title="Tech Stack">
              <TechStackPills items={project.techStack} />
            </ProjectSection>

            <ProjectSection title="Links">
              <ProjectLinks
                demoVideo={project.demoVideo}
                githubRepo={project.githubRepo}
              />
            </ProjectSection>

            <ProjectSection title="Lessons Learned">
              <blockquote className="text-[15px] leading-relaxed text-muted border-l-2 border-border-strong pl-5 italic">
                {project.lessonsLearned}
              </blockquote>
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
