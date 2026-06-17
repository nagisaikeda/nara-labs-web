"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { HOME_PROJECTS } from "@/data/home-projects";

export function WhatWereBuilding() {
  return (
    <section id="projects" className="relative py-32 md:py-48 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            Experiments, products, and prototypes from Nara Labs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {HOME_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
