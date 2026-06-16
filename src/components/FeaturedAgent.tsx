"use client";

import { AgentCard } from "@/components/AgentCard";
import type { AgentCardData } from "@/types/agent";

const localPmOs: AgentCardData = {
  name: "Local PM OS",
  label: "Dell × NVIDIA Local AI Hackathon",
  description:
    "Local PM OS is an AI Chief of Staff designed to help product teams navigate fragmented organizational knowledge. Running entirely on Dell Pro Max with NVIDIA GB10, the system analyzes Jira tickets, GitHub activity, emails, calendars, tasks, and internal notes to identify launch risks, surface blockers, and recommend next actions.",
  capabilities: [
    "Cross-system project intelligence",
    "Launch risk detection",
    "Blocker identification",
    "PM briefings and stakeholder updates",
    "Enterprise privacy through local execution",
  ],
  techStack: [
    "Dell Pro Max with NVIDIA GB10",
    "NVIDIA NIM",
    "Next.js",
    "React",
    "Python",
    "Local RAG",
    "Vector Database",
    "Multi-agent orchestration",
  ],
  badge: "Featured",
  gallery: [
    {
      src: "/agents/local-pm-os/1.png",
      alt: "Team members building Local PM OS during the Dell × NVIDIA hackathon",
    },
    {
      src: "/agents/local-pm-os/2.png",
      alt: "Local PM OS demo day presentation at BuilderBase AI Factory",
    },
    {
      src: "/agents/local-pm-os/3.png",
      alt: "Local PM OS dashboard showing launch risk analysis, recommended actions, and live context signals",
    },
  ],
};

export function FeaturedAgent() {
  return (
    <section className="relative px-6 pb-8">
      <div className="max-w-4xl mx-auto">
        <AgentCard {...localPmOs} variant="featured" index={0} />
      </div>
    </section>
  );
}
