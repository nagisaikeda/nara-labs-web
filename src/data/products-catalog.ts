import type { CustomerProduct } from "@/types/customer-product";

export const READYLEAD_ACCOLADE = "2nd Place · YC AI Growth Hackathon";

export const READYLEAD_CREDIBILITY_LINE = `${READYLEAD_ACCOLADE} · ReadyLead`;

export const FLAGSHIP_PRODUCTS: CustomerProduct[] = [
  {
    id: "readylead",
    name: "ReadyLead",
    tagline: "AI growth intelligence for high-intent customer signals",
    description:
      "Identify buying signals, prioritize leads, and convert customer intent into pipeline with an AI-native growth system built for revenue teams.",
    industry: "Growth & Revenue",
    tier: "flagship",
    accolade: READYLEAD_ACCOLADE,
    href: "/projects/readylead",
    previewImage: "/agents/readylead/preview.png",
  },
  {
    id: "probeiq",
    name: "ProbeIQ",
    tagline: "Turn educational content into an interactive AI tutor",
    description:
      "Transform videos and learning resources into conversational tutors that answer questions, explain concepts, and guide learners in real time.",
    industry: "Education & Training",
    tier: "flagship-secondary",
    href: "/projects/probeiq",
    previewImage: "/agents/probeiq/1.png",
  },
];

export const RESEARCH_PRODUCTS: CustomerProduct[] = [
  {
    id: "ahead",
    name: "Ahead",
    tagline: "Conversational decision engine for financial and life decisions",
    description:
      "Explores memory, scenario simulation, and realtime reasoning to help people navigate complex financial tradeoffs — demonstrating our Applied AI Lab direction in decision intelligence.",
    industry: "Decision Intelligence",
    tier: "research-incubation",
    labCategory: "Research / Incubation",
    href: "/projects/ahead",
    previewImage: "/agents/ahead/preview.png",
  },
  {
    id: "local-pm-os",
    name: "Local PM OS",
    tagline: "AI-native operating system for product teams",
    description:
      "An always-on product intelligence layer that reasons across Jira, GitHub, email, and calendars to surface launch risks and PM briefings — built on local AI infrastructure.",
    industry: "Product Operations",
    tier: "research-incubation",
    labCategory: "Research / Incubation",
    href: "/projects/local-pm-os",
    previewImage: "/agents/local-pm-os/3.png",
  },
];

export const RESEARCH_SECTION_COPY = {
  title: "Research & Incubation",
  description:
    "Products in active exploration that demonstrate our Applied AI Lab direction. These systems validate new workflow patterns before they become commercially available.",
} as const;
