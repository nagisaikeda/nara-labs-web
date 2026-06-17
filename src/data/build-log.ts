import type { BuildLogEntry } from "@/types/build-log";

export const BUILD_LOG_ENTRIES: BuildLogEntry[] = [
  {
    id: "local-pm-os",
    date: "June 2026",
    title: "Built Local PM OS",
    description:
      "An AI-native operating system for product managers that transforms conversations, documents, and project context into structured workflows.",
    sortOrder: 7,
  },
  {
    id: "probeiq",
    date: "June 2026",
    title: "Built ProbeIQ",
    description:
      "An agentic research and learning platform that combines retrieval, reasoning, and interactive exploration.",
    sortOrder: 6,
  },
  {
    id: "ahead",
    date: "June 2026",
    title: "Built Ahead",
    description:
      "A conversational decision engine that helps people evaluate financial and life decisions through simulation and tradeoff analysis.",
    sortOrder: 5,
  },
  {
    id: "yc-voice-hackathon",
    date: "June 2026",
    title: "YC Voice AI Hackathon",
    description:
      "Built and tested realtime voice reasoning systems with memory, simulation, and conversational decision support.",
    sortOrder: 4,
  },
  {
    id: "dell-nvidia-hackathon",
    date: "June 2026",
    title: "Dell × NVIDIA Local AI Hackathon",
    description:
      "Explored always-on local AI agents running entirely on-device using NVIDIA GB10 hardware.",
    sortOrder: 3,
  },
  {
    id: "hud-frontier-rl",
    date: "June 2026",
    title: "HUD Frontier RL Environments Hackathon",
    description:
      "Experimented with reinforcement learning environments, agent evaluation systems, and post-training workflows.",
    sortOrder: 2,
  },
  {
    id: "launched-nara-labs",
    date: "May 2026",
    title: "Launched Nara Labs",
    description:
      "Established Nara Labs as an independent AI product studio focused on intelligent systems and human-AI collaboration.",
    sortOrder: 1,
  },
];

export function getBuildLogEntries(limit?: number): BuildLogEntry[] {
  const sorted = [...BUILD_LOG_ENTRIES].sort((a, b) => b.sortOrder - a.sortOrder);
  return limit ? sorted.slice(0, limit) : sorted;
}
