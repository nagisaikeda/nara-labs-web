import type { ProjectCaseStudy } from "@/types/project";

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "local-pm-os",
    name: "Local PM OS",
    label: "The Company Brain for Autonomous Software Teams",
    origin: "Built at Dell × NVIDIA Local AI Hackathon",
    summary:
      "An AI-native operating system that captures company context, identifies risks, prioritizes work, and converts decisions into executable actions.",
    overview:
      "LocalPMOS is an AI-native operating system that continuously captures company context, identifies risks and opportunities, prioritizes work, and converts decisions into executable actions.",
    problem:
      "Product managers spend hours each week manually gathering context across disconnected tools. Critical launch risks are often discovered too late because information is fragmented across Jira tickets, GitHub pull requests, emails, meetings, and task systems.",
    solution:
      "Local PM OS acts as an always-on product intelligence layer. It continuously reasons across product, engineering, and business signals, then generates PM briefings, risk summaries, blocker analysis, and stakeholder-ready updates.",
    architecture: `Local LLM
→ Tool calling layer
→ Jira / GitHub / Email / Calendar / Tasks / Notes
→ Local RAG pipeline
→ Risk detection and prioritization
→ PM briefing and recommended actions`,
    gallery: [
      {
        src: "/agents/local-pm-os/1.png",
        alt: "Team building Local PM OS during the Dell × NVIDIA hackathon",
      },
      {
        src: "/agents/local-pm-os/2.png",
        alt: "Local PM OS demo day at BuilderBase AI Factory",
      },
      {
        src: "/agents/local-pm-os/3.png",
        alt: "Local PM OS dashboard with launch risk analysis and context signals",
      },
    ],
    team: [
      { name: "Eddy", role: "AI / Machine Learning Engineering" },
      { name: "Nagisa Ikeda", role: "Product Management, AI Design Engineering" },
      { name: "Jiawen Zhang", role: "AI Engineering, Implementation" },
    ],
    techStack: [
      "Dell Pro Max with NVIDIA GB10",
      "NVIDIA NIM",
      "Next.js",
      "React",
      "Python",
      "Local RAG",
      "Vector Database",
      "Multi-agent orchestration",
    ],
    demoVideo: "https://youtu.be/deE54ieqOsI",
    lessonsLearned:
      "Technical execution is necessary but not sufficient. The strongest AI products need clear problem framing, expensive pain points, business value, and a compelling story before technical execution can fully matter.",
    previewImage: "/agents/local-pm-os/3.png",
    badge: "Featured",
    seoDescription:
      "LocalPMOS is an AI-native operating system that captures company context, identifies risks, prioritizes work, and converts decisions into action. Built at the Dell × NVIDIA Local AI Hackathon by Nara Labs.",
    featured: true,
  },
  {
    slug: "probeiq",
    name: "ProbeIQ",
    label: "Turn Every Educational Resource Into an AI Tutor",
    origin: "Built at YC × Moss Conversational AI Hackathon",
    summary:
      "ProbeIQ transforms educational videos into interactive AI tutors with grounded answers, voice interaction, and real-time guidance based on source material.",
    overview:
      "ProbeIQ transforms educational videos into interactive AI tutors. Learners can ask questions naturally while watching content and receive grounded answers, explanations, and guidance based on the source material in real time.",
    problem:
      "Procedural learning videos are often passive and difficult to navigate. Learners must scrub manually, search for context, and interpret complex steps without interactive guidance.",
    solution:
      "ProbeIQ turns videos into conversational learning environments. It transcribes video content, structures it into retrievable knowledge, retrieves relevant procedure context, answers through voice, and controls video playback in real time.",
    architecture: `Video input
→ Deepgram transcription
→ Knowledge structuring
→ Moss retrieval
→ Qwen reasoning
→ MiniMax voice response
→ LiveKit real-time interaction
→ Video playback control`,
    gallery: [
      {
        src: "/agents/probeiq/1.png",
        alt: "ProbeIQ team at the YC × Moss Conversational AI Hackathon",
      },
      {
        src: "/agents/probeiq/2.png",
        alt: "ProbeIQ demo day presentation at Y Combinator",
      },
      {
        src: "/agents/probeiq/3.png",
        alt: "YC Conversational AI Hackathon event signage",
      },
    ],
    team: [
      { name: "Shivoham Angal", role: "AI/ML Engineering" },
      { name: "Amogh Biju", role: "AI/ML Engineering" },
      { name: "Nagisa Ikeda", role: "Product Management, AI Design Engineering" },
      { name: "Jiawen Zhang", role: "AI Engineering, Implementation" },
    ],
    techStack: ["Moss", "MiniMax", "Deepgram", "LiveKit", "Qwen"],
    demoVideo: "https://www.youtube.com/watch?v=a4XDWGnEkhg",
    lessonsLearned:
      "In voice AI, retrieval latency is not just a backend metric. It directly affects whether an agent feels grounded, responsive, and trustworthy. The most interesting challenge was orchestrating retrieval, context, voice, and interaction timing into a seamless experience.",
    previewImage: "/agents/probeiq/1.png",
    badge: "Voice AI",
    seoDescription:
      "ProbeIQ transforms educational videos into interactive AI tutors with transcription, retrieval, voice interaction, and grounded reasoning. Built at the YC × Moss Conversational AI Hackathon by Nara Labs.",
  },
  {
    slug: "ahead",
    name: "Ahead",
    label: "AI Financial Decision Agent",
    origin: "Nara Labs product experiment",
    summary:
      "An AI decision agent that combines memory, scenario simulation, and conversational reasoning to help users navigate financial tradeoffs and long-term goals.",
    overview:
      "Ahead explores how AI can help individuals make better financial decisions by combining memory, scenario simulation, and conversational reasoning.",
    problem:
      "Traditional budgeting tools focus on tracking past spending, but many young adults need help making forward-looking decisions about rent, savings, career moves, lifestyle tradeoffs, and long-term financial goals.",
    solution:
      "Ahead acts as a conversational financial decision agent. It helps users compare scenarios, understand tradeoffs, remember personal goals, and reason through financial choices in real time.",
    architecture: `User context
→ Personal memory
→ Financial decision engine
→ Scenario simulation
→ Conversational interface
→ Recommendation and explanation layer`,
    gallery: [
      {
        src: "/agents/ahead/1.jpg",
        alt: "Ahead product interface screenshot",
      },
      {
        src: "/agents/ahead/2.jpg",
        alt: "Ahead decision simulation in action",
      },
      {
        src: "/agents/ahead/3.jpg",
        alt: "Ahead team building session",
      },
    ],
    team: [
      { name: "Nagisa Ikeda", role: "Product Management, AI Design Engineering" },
      { name: "Jiawen Zhang", role: "AI Engineering, Implementation" },
    ],
    techStack: [
      "iOS",
      "SwiftUI",
      "OpenAI Realtime / reasoning models",
      "Financial simulation logic",
      "Memory layer",
      "Conversational interface",
    ],
    lessonsLearned:
      "Ahead clarified that strong AI products need more than a compelling interface. They need a specific user, urgent pain point, trusted reasoning layer, and clear differentiation from general-purpose AI assistants.",
    previewImage: "/agents/ahead/preview.png",
    badge: "Experimental",
    seoDescription:
      "Ahead is an AI financial decision agent by Nara Labs that explores memory, scenario simulation, conversational reasoning, and decision intelligence for young adults navigating financial tradeoffs.",
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}

export function getPreviewTechStack(project: ProjectCaseStudy, count = 3): string[] {
  return project.techStack.slice(0, count);
}
