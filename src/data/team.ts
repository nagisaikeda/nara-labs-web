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
    subtitle: "Senior UX Researcher • Former PayPal • Cash App",
    expertise: ["Customer Discovery", "Product Validation"],
    bio: "Simon advises Nara Labs on customer discovery and product validation. He brings research leadership from consumer financial products and AI initiatives at PayPal and Cash App. He helps refine customer interviews and turn user insights into product direction.",
    image: "",
    initials: "SS",
    linkedin: "https://www.linkedin.com/in/simonspagnoletti",
  },
  {
    name: "Jing Wang",
    role: "AI Systems Advisor",
    subtitle:
      "Former Co-Founder & CEO, MiraRobo • Former Microsoft • Carnegie Mellon University",
    expertise: [
      "AI Systems",
      "Applied Machine Learning",
      "LLM Applications",
      "Enterprise AI",
      "Technical Strategy",
    ],
    bio: "Jing advises Nara Labs on AI systems architecture, technical product strategy, and the application of modern machine learning to real-world products. With experience leading AI startups and building LLM-powered systems at Microsoft, she provides guidance on scalable AI architecture, platform strategy, and technical decision-making.",
    image: "",
    initials: "JW",
    linkedin: "https://www.linkedin.com/in/jingwangsophia",
  },
];
