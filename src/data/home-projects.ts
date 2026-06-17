import type { HomeProject } from "@/types/home-project";

export const HOME_PROJECTS: HomeProject[] = [
  {
    id: "ahead",
    name: "Ahead",
    description:
      "A conversational decision engine for financial and life decisions, combining memory, simulation, and realtime reasoning.",
    tags: [
      "Decision intelligence",
      "Realtime voice",
      "Memory",
      "Simulation",
    ],
    ctaLabel: "Explore Ahead",
    href: "/projects/ahead",
  },
  {
    id: "probeiq",
    name: "ProbeIQ",
    description:
      "An agentic research and learning system that combines retrieval, reasoning, and interactive exploration.",
    tags: ["Agentic research", "RAG", "Reasoning", "Knowledge systems"],
    ctaLabel: "Explore ProbeIQ",
    href: "/projects/probeiq",
  },
  {
    id: "local-pm-os",
    name: "Local PM OS",
    description:
      "An AI-native product management operating system for turning conversations, documents, and project context into structured workflows.",
    tags: ["Local AI", "Product workflows", "Agents", "Context engineering"],
    ctaLabel: "Explore Local PM OS",
    href: "/projects/local-pm-os",
  },
];
