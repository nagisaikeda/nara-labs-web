"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { ProjectPreviewCard } from "@/components/projects/ProjectPreviewCard";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/data/projects";

export function ProjectsPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Projects"
        subtitle="Production-grade AI systems built by Team Nara Lab"
        supportingText="A portfolio of applied AI systems, agentic workflows, and decision-support products."
      />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectPreviewCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
