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
  primaryCta: { label: "Get early access" },
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
  eyebrow: "01 / Know",
  title: "Home Twin",
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

export const NARA_EARLY_ACCESS = {
  eyebrow: "Nara early access",
  headline: "Your home, understood.",
  body: "Join the early access list for Nara. We’ll let you know when we’re ready to welcome more homes.",
  emailLabel: "Email address",
  submit: "Join early access",
  submitting: "Joining…",
  privacy: "No spam. Just occasional updates from Nara.",
  close: "Close",
  successEyebrow: "You’re on the list",
  successBody: "We’ll be in touch when Nara is ready for more homes.",
  done: "Done",
  genericError: "We couldn’t add you just now. Please try again.",
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

/**
 * Epistemic status used across the page. Observations and inferences stay
 * provisional; only verified outcomes become durable knowledge.
 */
export type NaraEpistemic = "observed" | "known" | "inferred" | "needed" | "verified";

export const NARA_UNDERSTAND = {
  eyebrow: "02 / Understand",
  headline: "Nara notices when something changes.",
  body: "Because Nara understands the home behind the symptom, it can reason with equipment, current state, history, and prior service — and ask only for what the home cannot already tell it.",
  event: "Cooling change detected",
  domain: "Heating & cooling",
  inputs: [
    {
      id: "observed",
      tag: "Observed",
      label: "Cooling behavior changed",
      source: "Current state",
      status: "observed",
    },
    {
      id: "known",
      tag: "Known",
      label: "The home and its cooling equipment",
      source: "Home Twin · Systems",
      status: "known",
    },
    {
      id: "history",
      tag: "History",
      label: "Relevant prior events and service",
      source: "Home Twin · History",
      status: "known",
    },
    {
      id: "needed",
      tag: "Needed",
      label: "Evidence the home can’t provide",
      source: "Asked of the homeowner",
      status: "needed",
    },
  ] satisfies {
    id: string;
    tag: string;
    label: string;
    source: string;
    status: NaraEpistemic;
  }[],
  output: {
    tag: "Output",
    title: "Structured service need",
    fields: [
      { label: "Domain", value: "Heating & cooling" },
      { label: "Observed", value: "Change in cooling behavior" },
      { label: "Context", value: "Equipment, history, and prior service attached" },
      { label: "Cause", value: "Not yet verified" },
    ],
  },
  visualLabel:
    "Illustrative reasoning trace. A change in cooling behavior is observed. Nara combines it with what the Home Twin already knows about the home and its equipment, relevant history and prior service, and any additional evidence it needs to ask for. The result is a structured service need, with the cause marked as not yet verified.",
  legend: [
    { status: "observed", label: "Observation" },
    { status: "inferred", label: "Inference" },
    { status: "verified", label: "Verified knowledge" },
  ] satisfies { status: NaraEpistemic; label: string }[],
} as const;

export type NaraMatchPair = {
  id: string;
  home: string;
  service: string;
  qualifier?: string;
};

export const NARA_MATCH = {
  eyebrow: "03 / Match",
  headline: "The right service for this home.",
  body: "Nara turns what it understands about your home into a structured service need, then evaluates available service options against the capabilities the job requires.",
  homeHeading: "Home intelligence",
  homeNote: "What this job requires",
  serviceHeading: "Service intelligence",
  serviceNote: "What a service option offers",
  engineLabel: "Nara",
  resultLabel: "Suitable service",
  resultNote: "Matched to the needs of this home",
  pairs: [
    { id: "equipment", home: "Equipment on record", service: "Equipment expertise" },
    { id: "job", home: "Structured service need", service: "Capabilities" },
    {
      id: "credentials",
      home: "Job requirements",
      service: "Certifications",
      qualifier: "Where data is available",
    },
    { id: "location", home: "Home location", service: "Service area" },
    {
      id: "timing",
      home: "Timing need",
      service: "Availability",
      qualifier: "Where available",
    },
    {
      id: "pricing",
      home: "Decision context",
      service: "Pricing information",
      qualifier: "Where available",
    },
    {
      id: "outcomes",
      home: "Service history",
      service: "Service outcomes",
      qualifier: "When reliable data exists",
    },
  ] satisfies NaraMatchPair[],
  principleHeading: "Requirements, not star ratings.",
  principle:
    "Nara matches the requirements of the home against the capabilities of the service network. A provider isn’t suitable because it ranks well in general — it’s suitable because it fits what this home, this equipment, and this job need.",
  outcomesNote:
    "Past service outcomes can become part of the matching context when reliable data is available.",
  visualLabel:
    "Matching diagram. On one side, what the home requires: equipment on record, the structured service need, job requirements, home location, timing need, decision context, and service history. On the other, what a service option offers: equipment expertise, capabilities, certifications where data is available, service area, availability where available, pricing information where available, and service outcomes when reliable data exists. Nara aligns each requirement with the matching capability to find a suitable service.",
} as const;

export const NARA_DECIDE = {
  eyebrow: "04 / Decide",
  headline: "Know what you’re approving.",
  body: "Nara doesn’t make consequential decisions quietly on your behalf. Before anything happens, you can see what Nara believes, why it chose a service option, and what will be shared.",
  understands: [
    "What Nara believes the service need is",
    "What information will be shared",
    "Why a service option is suitable",
    "Timing, when available",
    "Price context, when available",
    "What happens when you approve",
  ],
  priceHeading: "Price context",
  priceLine: "Understand the expected cost before committing.",
  priceBody:
    "When reliable pricing information is available, Nara can provide price context before you approve service.",
  review: {
    title: "Service request",
    status: "Awaiting your review",
    sections: [
      {
        id: "need",
        label: "What Nara understands",
        lines: ["Cooling behavior changed.", "Cause not yet verified."],
      },
      {
        id: "technician",
        label: "What the technician needs to know",
        lines: ["Cooling equipment on record", "Relevant service history", "What you observed"],
      },
      {
        id: "fit",
        label: "Why this service option fits",
        lines: ["Relevant capability", "Equipment expertise", "Service area", "Availability"],
      },
    ],
    price: {
      label: "Price context",
      line: "Shown when reliable pricing information is available.",
    },
    shared: {
      label: "What will be shared",
      line: "Only the context needed for this service.",
    },
    action: "Authorize service",
    footnote: "Nothing is requested until you authorize.",
  },
  visualLabel:
    "Illustrative review screen for a service request, awaiting the homeowner’s review. It shows what Nara understands, what the technician needs to know, why the service option fits, price context when reliable pricing is available, what will be shared, and an Authorize service action. Nothing is requested until the homeowner authorizes.",
  caption: "Illustrative product concept",
} as const;

export const NARA_ACT = {
  eyebrow: "05 / Act",
  headline: "From understanding to service.",
  body: "Once you approve, Nara can turn the Home Twin context into a structured service request and coordinate the next step.",
  stages: [
    { id: "twin", label: "Home Twin", note: "Accumulated context" },
    { id: "packet", label: "Service packet", note: "Prepared by Nara" },
    { id: "authorize", label: "Your authorization", note: "You approve" },
    { id: "request", label: "Service request", note: "Sent with context" },
    { id: "provider", label: "Provider", note: "Technician receives it" },
  ],
  gateIndex: 2,
  packetHeading: "Inside the service packet",
  packet: [
    "Relevant home and system information",
    "The observed problem",
    "Relevant history",
    "Evidence you supplied",
    "What the technician needs for this service",
  ],
  principleHeading: "Your home. Your decision.",
  principle:
    "Nara can understand, prepare, and coordinate. Consequential actions remain visible before they happen.",
  visualLabel:
    "Service coordination sequence: Home Twin context becomes a service packet prepared by Nara, which waits for your authorization. Only after you approve does it become a service request sent to the provider.",
} as const;

export const NARA_LEARN = {
  eyebrow: "06 / Learn",
  headline: "Every visit makes your home smarter.",
  body: "Service doesn’t disappear into a receipt. Verified outcomes become part of the Home Twin, giving Nara better context the next time your home needs attention.",
  phases: [
    {
      id: "before",
      label: "Before",
      status: "inferred",
      statusLabel: "Provisional",
      lines: ["Issue observed", "Cause unknown"],
    },
    {
      id: "service",
      label: "Service",
      status: "observed",
      statusLabel: "Checked on site",
      lines: ["Technician diagnosis", "Service outcome"],
    },
    {
      id: "after",
      label: "After",
      status: "verified",
      statusLabel: "Verified",
      lines: ["Verified outcome", "Home Twin updated"],
    },
  ] satisfies {
    id: string;
    label: string;
    status: NaraEpistemic;
    statusLabel: string;
    lines: string[];
  }[],
  chain: ["Observation", "Inference", "Service", "Verified outcome", "Durable knowledge"],
  chainNote:
    "Nara doesn’t turn every inference into permanent truth. What a technician verifies becomes durable knowledge; what Nara only inferred stays provisional.",
  returnLabel: "Returns to the Home Twin",
} as const;

export const NARA_LOOP = {
  eyebrow: "07 / Loop",
  headline: "A home that gets smarter over time.",
  steps: ["Know", "Sense", "Understand", "Act", "Learn"],
  returnLabel: "Know more",
  srLabel:
    "The Nara loop: know the home, sense what changes, understand what it needs, act with your authorization, learn from the verified outcome, and come back knowing more.",
} as const;

export const NARA_WEDGE = {
  headline: "It starts with heating & cooling.",
  body: "HVAC is where Nara starts. The home is where Nara is going.",
  domains: [
    { id: "hvac", name: "HVAC", note: "Where Nara starts", active: true },
    { id: "water", name: "Water", note: "Learning", active: false },
    { id: "electrical", name: "Electrical", note: "Learning", active: false },
  ] satisfies { id: NaraSystemId; name: string; note: string; active: boolean }[],
} as const;

export const NARA_VISION = {
  headline: "A home that knows itself.",
  body: "A persistent intelligence layer for the home — understanding what exists, what changes, what happened before, and what should happen next.",
  promise: "The home intelligence that knows your home and takes care of it.",
} as const;
