"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TechStackPills } from "@/components/projects/TechStackPills";
import type { HomeProject } from "@/types/home-project";

type ProjectCardProps = {
  project: HomeProject;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col p-6 md:p-8 rounded-2xl border border-border bg-surface/20 hover:border-border-strong transition-colors duration-300"
    >
      <h3 className="font-serif text-[1.35rem] font-normal tracking-[-0.02em] text-foreground mb-3">
        {project.name}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted mb-6 flex-1">
        {project.description}
      </p>
      <TechStackPills items={project.tags} />
      <Link
        href={project.href}
        className="inline-flex items-center mt-6 text-[14px] text-muted hover:text-foreground transition-colors duration-300"
      >
        {project.ctaLabel} →
      </Link>
    </motion.article>
  );
}
