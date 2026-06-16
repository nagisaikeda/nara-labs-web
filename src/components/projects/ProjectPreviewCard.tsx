"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TechStackPills } from "@/components/projects/TechStackPills";
import { getPreviewTechStack } from "@/data/projects";
import type { ProjectCaseStudy } from "@/types/project";

type ProjectPreviewCardProps = {
  project: ProjectCaseStudy;
  index: number;
};

export function ProjectPreviewCard({ project, index }: ProjectPreviewCardProps) {
  const previewStack = getPreviewTechStack(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative rounded-2xl border overflow-hidden transition-colors duration-500 ${
        project.featured
          ? "border-border-strong bg-gradient-to-b from-surface-elevated/80 to-surface/30 hover:border-foreground/15"
          : "border-border bg-surface/20 hover:border-border-strong"
      }`}
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
        {project.previewImage && (
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] border-b md:border-b-0 md:border-r border-border overflow-hidden bg-surface-elevated">
            <Image
              src={project.previewImage}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="p-8 md:p-10 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.badge && (
              <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                {project.badge}
              </span>
            )}
            <span className="text-[12px] text-muted-soft">{project.origin}</span>
          </div>

          <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-normal tracking-[-0.02em] text-foreground mb-2">
            {project.name}
          </h2>
          <p className="text-[14px] text-muted mb-4">{project.label}</p>
          <p className="text-[15px] leading-relaxed text-muted mb-6 flex-1">
            {project.summary}
          </p>

          <TechStackPills items={previewStack} />

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center mt-8 px-5 py-2.5 rounded-full bg-foreground/[0.08] border border-border-strong text-[14px] font-medium text-foreground hover:bg-foreground/[0.12] transition-all duration-300 w-fit"
          >
            View case study →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
