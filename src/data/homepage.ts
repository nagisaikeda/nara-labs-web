import { FLAGSHIP_PRODUCTS, RESEARCH_PRODUCTS } from "@/data/products-catalog";

export const LAB_HERO = {
  eyebrow: "Nara Labs",
  headlineLines: ["Intelligence for the", "world we live in."],
  body: "We build AI systems that develop persistent understanding of real environments — observing what changes, reasoning with context, taking action, and learning over time.",
} as const;

export const INTELLIGENCE_LOOP = [
  { id: "observe", label: "Observe", note: "what changes" },
  { id: "understand", label: "Understand", note: "with context" },
  { id: "act", label: "Act", note: "with authorization" },
  { id: "learn", label: "Learn", note: "from outcomes" },
] as const;

export const THESIS = {
  eyebrow: "The Thesis",
  title: "Beyond the prompt.",
  paragraphs: [
    "Today's AI is remarkably capable inside a conversation. But the world outside the conversation is persistent, changing, and interconnected.",
    "We build systems designed to understand what persists between interactions — what changed, what happened before, what matters now, and what should happen next.",
  ],
  principles: [
    { id: "state", term: "State", line: "The world doesn't reset between prompts." },
    {
      id: "context",
      term: "Context",
      line: "Meaning depends on what happened before and what is changing now.",
    },
    {
      id: "action",
      term: "Action",
      line: "Intelligence becomes useful when it can change what happens next.",
    },
    {
      id: "learning",
      term: "Learning",
      line: "Every verified outcome can improve the system's understanding of its environment.",
    },
  ],
} as const;

export const PRIMITIVES = {
  eyebrow: "Primitives",
  items: [
    "Persistent state",
    "Multimodal observation",
    "Context models",
    "Reasoning under uncertainty",
    "Human authorization",
    "Agentic action",
    "Outcome verification",
    "Learning loops",
  ],
} as const;

export type LabMaturity = "Commercial" | "Experiment" | "Research";

export type LabEntry = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  maturity: LabMaturity;
  accolade?: string;
};

const LAB_ORDER: { id: string; maturity: LabMaturity }[] = [
  { id: "readylead", maturity: "Commercial" },
  { id: "ahead", maturity: "Research" },
  { id: "local-pm-os", maturity: "Experiment" },
  { id: "probeiq", maturity: "Commercial" },
];

const CATALOG = [...FLAGSHIP_PRODUCTS, ...RESEARCH_PRODUCTS];

export const FROM_THE_LAB = {
  eyebrow: "02 / From the Lab",
  title: "From the Lab",
  description:
    "Experiments in persistent intelligence across different environments.",
  entries: LAB_ORDER.flatMap(({ id, maturity }): LabEntry[] => {
    const product = CATALOG.find((p) => p.id === id);
    const href = product?.externalHref ?? product?.href;
    if (!product || !href) return [];
    return [
      {
        id,
        name: product.name,
        tagline: product.tagline,
        href,
        maturity,
        accolade: product.accolade,
      },
    ];
  }),
} as const;

export const NOTES_FROM_THE_LAB = {
  eyebrow: "03 / Notes from the Lab",
  title: "Notes from the Lab",
} as const;
