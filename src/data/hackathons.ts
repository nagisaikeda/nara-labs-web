import type { HackathonEntry } from "@/types/hackathon";

export const HACKATHON_ENTRIES: HackathonEntry[] = [
  {
    id: "yc-voice-ai",
    name: "YC Voice AI Hackathon",
    description:
      "Built and tested realtime voice reasoning systems with memory, simulation, and conversational decision support.",
    explored:
      "Voice-native decision agents with persistent context and low-latency reasoning loops.",
    keywords: ["Voice AI", "Realtime reasoning", "Memory", "Simulation"],
  },
  {
    id: "dell-nvidia",
    name: "Dell × NVIDIA Local AI Hackathon",
    description:
      "Explored always-on local AI agents running entirely on-device using NVIDIA GB10 hardware.",
    explored:
      "Local PM OS — an on-device product intelligence layer across Jira, GitHub, email, and calendar.",
    keywords: ["Local AI", "On-device agents", "NVIDIA GB10", "Tool use"],
  },
  {
    id: "hud-frontier-rl",
    name: "HUD Frontier RL Environments Hackathon",
    description:
      "Experimented with reinforcement learning environments, agent evaluation systems, and post-training workflows.",
    explored:
      "RL environment design, agent benchmarking pipelines, and post-training evaluation workflows.",
    keywords: [
      "Reinforcement learning",
      "Agent evaluation",
      "RL environments",
      "Post-training",
    ],
  },
];
