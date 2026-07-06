export const COMPANY_ABOUT = {
  title: "About Nara Labs",
  paragraphs: [
    "Nara Labs is an Applied AI Lab focused on specialized industries where workflow pain is expensive, repetitive, and underserved by generic AI tools.",
    "We discover those workflows through research, design partner collaboration, and rapid product iteration — then turn validated patterns into configurable AI products customers can evaluate and deploy.",
    "Our goal is to build a growing set of applied AI products that compound in value as we learn from each industry we serve.",
  ],
} as const;

export const APPLIED_AI_LAB_MODEL = {
  title: "The Applied AI Lab model",
  description:
    "Instead of building disconnected experiments, we run a repeatable lab process designed to turn workflow insight into product.",
  steps: [
    {
      step: "01",
      title: "Discover workflow pain",
      description:
        "Identify high-cost, high-frequency workflows in specialized industries where AI can remove friction and improve decisions.",
    },
    {
      step: "02",
      title: "Validate with design partners",
      description:
        "Work with early partners to test assumptions, map real operational constraints, and define product requirements grounded in live workflows.",
    },
    {
      step: "03",
      title: "Ship configurable products",
      description:
        "Productize validated workflows into AI systems customers can configure, evaluate through demos, and deploy in production environments.",
    },
    {
      step: "04",
      title: "Compound learnings",
      description:
        "Feed production learnings back into the lab to improve existing products and inform the next workflow opportunity.",
    },
  ],
} as const;
