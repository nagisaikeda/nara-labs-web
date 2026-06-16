import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { createPageMetadata } from "@/lib/metadata";
import { getProjectsStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Projects | Nara Labs",
  description:
    "Explore production-grade AI systems built by Team Nara Lab, including Local PM OS, ProbeIQ, and Ahead. Case studies cover agentic AI, local AI, voice AI, RAG, decision intelligence, architecture, demos, teams, and tech stacks.",
  path: "/projects",
  ogImage: "/agents/local-pm-os/3.png",
  keywords: [
    "Nara Labs",
    "Team Nara Lab",
    "AI Projects",
    "AI Agents",
    "Local AI",
    "Voice AI",
    "Agentic AI",
    "RAG",
    "AI Product Design",
    "AI Engineering",
    "Local PM OS",
    "ProbeIQ",
    "Ahead",
  ],
});

export default function Projects() {
  return (
    <>
      <JsonLd data={getProjectsStructuredData()} />
      <ProjectsPage />
    </>
  );
}
