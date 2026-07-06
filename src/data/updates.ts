export type UpdateEntry = {
  id: string;
  date: string;
  title: string;
  description?: string;
  sortOrder: number;
};

export const HOME_UPDATES: UpdateEntry[] = [
  {
    id: "yc-ai-growth",
    date: "June 2026",
    title: "2nd Place @ YC AI Growth Hackathon",
    sortOrder: 5,
  },
  {
    id: "shipped-readylead",
    date: "June 2026",
    title: "Shipped ReadyLead",
    sortOrder: 4,
  },
  {
    id: "built-probeiq",
    date: "June 2026",
    title: "Built ProbeIQ",
    sortOrder: 3,
  },
  {
    id: "built-local-pm-os",
    date: "June 2026",
    title: "Built Local PM OS",
    sortOrder: 2,
  },
  {
    id: "shipped-ahead-ios",
    date: "June 2026",
    title: "Shipped Ahead iOS",
    sortOrder: 1,
  },
];

export const FULL_UPDATES: UpdateEntry[] = [
  {
    id: "yc-ai-growth",
    date: "June 2026",
    title: "2nd Place @ YC AI Growth Hackathon",
    description:
      "ReadyLead won 2nd place at the YC AI Growth Hackathon — an AI-native growth intelligence system for high-intent customer signals.",
    sortOrder: 8,
  },
  {
    id: "shipped-readylead",
    date: "June 2026",
    title: "Shipped ReadyLead",
    description:
      "Launched ReadyLead as our flagship commercial product for growth teams prioritizing high-intent pipeline.",
    sortOrder: 7,
  },
  {
    id: "built-probeiq",
    date: "June 2026",
    title: "Built ProbeIQ",
    description:
      "An agentic learning platform that transforms educational content into interactive AI tutors.",
    sortOrder: 6,
  },
  {
    id: "built-local-pm-os",
    date: "June 2026",
    title: "Built Local PM OS",
    description:
      "An AI-native operating system for product teams, built on local AI infrastructure.",
    sortOrder: 5,
  },
  {
    id: "shipped-ahead-ios",
    date: "June 2026",
    title: "Shipped Ahead iOS",
    description:
      "Released Ahead on iOS — a conversational decision engine exploring memory, simulation, and reasoning.",
    sortOrder: 4,
  },
  {
    id: "yc-voice-hackathon",
    date: "June 2026",
    title: "YC Voice AI Hackathon",
    description:
      "Built and tested realtime voice reasoning systems with memory, simulation, and conversational decision support.",
    sortOrder: 3,
  },
  {
    id: "dell-nvidia-hackathon",
    date: "June 2026",
    title: "Dell × NVIDIA Local AI Hackathon",
    description:
      "Explored always-on local AI agents running entirely on-device using NVIDIA GB10 hardware.",
    sortOrder: 2,
  },
  {
    id: "launched-nara-labs",
    date: "May 2026",
    title: "Launched Nara Labs",
    description:
      "Established Nara Labs as an Applied AI Lab focused on configurable products for specialized industries.",
    sortOrder: 1,
  },
];

export function getHomeUpdates() {
  return [...HOME_UPDATES].sort((a, b) => b.sortOrder - a.sortOrder);
}

export function getUpdates(limit?: number) {
  const sorted = [...FULL_UPDATES].sort((a, b) => b.sortOrder - a.sortOrder);
  return limit ? sorted.slice(0, limit) : sorted;
}
