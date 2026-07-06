export type HackathonGalleryImage = {
  src: string;
  alt: string;
};

export const READYLEAD_HACKATHON = {
  hackathon: "YC AI Growth Hackathon",
  placement: "2nd Place",
  name: "ReadyLead",
  description:
    "Built an AI growth intelligence system for identifying high-intent customer signals and converting them into prioritized outreach workflows.",
  descriptionExtra:
    "ReadyLead is an AI-native growth intelligence system that identifies high-intent customer signals, prioritizes leads, and helps teams convert customer intent into pipeline.",
  heroImage: "/agents/readylead/hero.png",
  gallery: [
    {
      src: "/agents/readylead/team-win.png",
      alt: "ReadyLead team accepting 2nd place at the YC AI Growth Hackathon",
    },
    {
      src: "/agents/readylead/yc-sign.png",
      alt: "Team members at the Y Combinator sign",
    },
    {
      src: "/agents/readylead/hackathon-display.png",
      alt: "YC AI Growth Hackathon event signage",
    },
    {
      src: "/agents/readylead/building-1.png",
      alt: "Team building ReadyLead at the hackathon",
    },
    {
      src: "/agents/readylead/building-2.png",
      alt: "ReadyLead team working at the hackathon",
    },
    {
      src: "/agents/readylead/presentation.png",
      alt: "ReadyLead demo presentation at the YC AI Growth Hackathon",
    },
  ] satisfies HackathonGalleryImage[],
};
