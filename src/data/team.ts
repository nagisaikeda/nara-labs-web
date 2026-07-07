import type { TeamMember } from "@/types/team";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Nagisa Ikeda",
    role: "Founder",
    expertise: [
      "Product Strategy",
      "AI Design Engineering",
      "Go-to-Market",
    ],
    bio: "Founder of Nara Labs, leading product vision, design, and positioning for applied AI products. Background across product design, fintech, and AI-native workflows. Focuses on translating emerging AI capabilities into systems teams can evaluate and deploy.",
    image: "/team/nagisa.png",
    initials: "NI",
    linkedin: "https://www.linkedin.com/in/nagisaikeda",
  },
  {
    name: "Eddy",
    role: "AI / Machine Learning Engineering",
    expertise: [
      "Machine Learning",
      "Backend Systems",
      "Agent Architecture",
    ],
    bio: "AI and ML engineer building production pipelines, agent systems, and local AI infrastructure. Experience with risk scoring, feature engineering at scale, and rapid hackathon-to-product execution. Drives the technical foundation behind Nara Labs prototypes and flagship products.",
    image: "/team/eddy.jpg",
    initials: "E",
    linkedin: "https://www.linkedin.com/in/jiajunh/",
  },
  {
    name: "Jiawen Zhang",
    role: "AI Engineering, Implementation",
    expertise: [
      "AI Engineering",
      "Full-Stack Implementation",
      "Product Development",
    ],
    bio: "Founding engineer shipping product concepts across frontend, backend, and AI-assisted workflows. Focuses on fast iteration, clean implementation, and integrating requirements into production-ready systems. Builds the foundation for Ahead and future agentic products.",
    image: "/team/jiawen.png",
    initials: "JZ",
    linkedin: "https://www.linkedin.com/in/jiawen-zhang042/",
  },
];

export const ADVISORS: TeamMember[] = [
  {
    name: "Simon Spagnoletti",
    role: "Customer Discovery Advisor",
    expertise: [
      "Senior UX Researcher",
      "Customer Discovery",
      "Former PayPal",
      "Cash App",
    ],
    bio: "Simon advises Nara Labs on customer discovery and product validation. He brings research leadership from consumer financial products and AI initiatives at PayPal and Cash App. He helps refine customer interviews and turn user insights into product direction.",
    image: "",
    initials: "SS",
    linkedin: "https://www.linkedin.com/in/simonspagnoletti",
  },
];
