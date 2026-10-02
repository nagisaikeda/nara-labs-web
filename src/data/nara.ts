export type NaraSystemId = "hvac" | "water" | "electrical";

export type NaraSystemStatus = "known" | "learning";

export type NaraHeroSystem = {
  id: NaraSystemId;
  name: string;
  status: NaraSystemStatus;
};

export type NaraHomeTwinLayer = {
  id: "systems" | "state" | "history" | "knowledge";
  label: string;
  description: string;
};

/** Placeholder until the early access destination exists. */
export const NARA_EARLY_ACCESS_HREF = "#early-access";

export const NARA_HOME_TWIN_ID = "home-twin";

export const NARA_STATUS_LABELS: Record<NaraSystemStatus, string> = {
  known: "Known",
  learning: "Learning",
};

export const NARA_HERO = {
  eyebrow: "Introducing Nara",
  headlineLines: [
    "The home intelligence",
    "that knows your home",
    "and takes care of it.",
  ],
  body: "Nara learns your home’s systems, notices when something changes, and helps take care of what happens next.",
  primaryCta: { label: "Get early access", href: NARA_EARLY_ACCESS_HREF },
  secondaryCta: {
    label: "See how Nara works",
    href: `#${NARA_HOME_TWIN_ID}`,
  },
  visualAlt:
    "Illustration of a modern two-story home surrounded by trees, shown as the center of Nara’s Home Twin.",
  visualCaption: "Illustration of a Home Twin",
} as const;

export const NARA_HERO_SYSTEMS: NaraHeroSystem[] = [
  { id: "hvac", name: "HVAC", status: "known" },
  { id: "water", name: "Water", status: "learning" },
  { id: "electrical", name: "Electrical", status: "learning" },
];

export const NARA_HOME_TWIN = {
  eyebrow: "01 / Home Twin",
  headline: "Your home becomes a living model.",
  body: "Systems, state, history, and verified knowledge accumulate into a Home Twin that gets richer over time.",
  modelLabel: "Home Twin",
  modelNote: "Persistent model",
  visualLabel:
    "A layered model of one home: the building and its HVAC, water, and electrical systems on top, then current state, history, and learned knowledge beneath, joined into a single Home Twin.",
  layers: [
    {
      id: "systems",
      label: "Systems",
      description: "What exists.",
    },
    {
      id: "state",
      label: "State",
      description: "What is happening now.",
    },
    {
      id: "history",
      label: "History",
      description: "What happened before.",
    },
    {
      id: "knowledge",
      label: "Knowledge",
      description: "What Nara has learned.",
    },
  ] satisfies NaraHomeTwinLayer[],
} as const;

export const NARA_HOMEPAGE_INTRO = {
  eyebrow: "01 / Flagship",
  name: "Nara",
  headlineLines: [
    "The home intelligence that knows",
    "your home and takes care of it.",
  ],
  body: "Nara builds a living understanding of your home — its systems, history, changing state, and what happens over time.",
  cta: { label: "Explore Nara", href: "/nara" },
} as const;

/** Renders as: "Made with ♡ by Nara Labs × Labotr" */
export const NARA_CREDIT = {
  wordmark: "Nara",
  lead: "Made with",
  heart: "♡",
  by: "by",
  maker: "Nara Labs",
  separator: "×",
  partner: "Labotr",
} as const;

export const NARA_TRANSITION = {
  line: "When something changes, Nara notices.",
} as const;
