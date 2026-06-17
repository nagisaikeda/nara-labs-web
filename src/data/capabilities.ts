import type { Capability } from "@/types/capability";

export const CAPABILITIES: Capability[] = [
  {
    id: "agentic-systems",
    title: "Agentic Systems",
    description:
      "Multi-step planning, memory, tool use, workflow orchestration, and agent evaluation.",
  },
  {
    id: "realtime-voice",
    title: "Realtime Voice",
    description:
      "Low-latency conversational interfaces for decision-making, coaching, and interactive workflows.",
  },
  {
    id: "reasoning-systems",
    title: "Reasoning Systems",
    description:
      "Structured tradeoff analysis, simulation, scenario comparison, and decision support.",
  },
  {
    id: "local-ai",
    title: "Local AI",
    description:
      "On-device agents and private workflows that can run close to user or company data.",
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Rapid prototyping, product architecture, frontend implementation, and AI-native UX systems.",
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    description:
      "Designing memory, retrieval, structured inputs, and knowledge layers that make AI systems more useful.",
  },
];
