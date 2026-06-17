import type {
  CapabilityArea,
  CapabilityPreview,
  MaturityGroup,
  ProjectEvidenceBlock,
  StackGroup,
  SystemsMatrixRow,
} from "@/types/capability";

export const HOME_CAPABILITIES: CapabilityPreview[] = [
  {
    id: "agentic-systems",
    title: "Agentic Systems",
    description:
      "Multi-step planning, memory, tool use, workflow orchestration, and agent evaluation.",
  },
  {
    id: "retrieval-systems",
    title: "Retrieval Systems",
    description:
      "RAG pipelines, semantic search, context injection, and knowledge retrieval.",
  },
  {
    id: "realtime-voice",
    title: "Realtime Voice",
    description:
      "Low-latency conversational interfaces for decision-making and interactive workflows.",
  },
  {
    id: "reasoning-systems",
    title: "Reasoning Systems",
    description:
      "Structured tradeoff analysis, simulation, scenario comparison, and decision support.",
  },
  {
    id: "local-ai",
    title: "Local AI",
    description:
      "On-device agents and private workflows that run close to user or company data.",
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Rapid prototyping, product architecture, frontend implementation, and AI-native UX.",
  },
];

export const CAPABILITY_AREAS: CapabilityArea[] = [
  {
    id: "agentic-systems",
    title: "Agentic Systems",
    description:
      "Building AI systems that can reason, plan, use tools, and maintain context across complex workflows.",
    demonstratedIn: ["Ahead", "ProbeIQ", "Local PM OS"],
    explored: [
      "Multi-step reasoning",
      "Tool orchestration",
      "Memory systems",
      "Workflow planning",
      "Agent evaluation",
    ],
  },
  {
    id: "retrieval-systems",
    title: "Retrieval Systems",
    description:
      "Designing systems that retrieve, structure, and inject relevant knowledge into AI workflows.",
    demonstratedIn: ["ProbeIQ", "Local PM OS"],
    explored: [
      "RAG pipelines",
      "Semantic search",
      "Context injection",
      "Knowledge retrieval",
      "Document understanding",
    ],
  },
  {
    id: "realtime-voice",
    title: "Realtime Voice",
    description:
      "Building low-latency conversational systems for interactive reasoning and decision support.",
    demonstratedIn: ["Ahead", "YC Voice AI Hackathon"],
    explored: [
      "Streaming responses",
      "Voice interactions",
      "Stateful conversations",
      "Realtime decision support",
      "Multimodal interaction patterns",
    ],
  },
  {
    id: "reasoning-systems",
    title: "Reasoning Systems",
    description:
      "Building systems that help users compare options, simulate scenarios, and make better decisions.",
    demonstratedIn: ["Ahead", "ProbeIQ"],
    explored: [
      "Scenario comparison",
      "Tradeoff analysis",
      "Decision simulation",
      "Structured outputs",
      "Explainable recommendations",
    ],
  },
  {
    id: "local-ai",
    title: "Local AI",
    description:
      "Exploring on-device agents and private AI workflows that can run close to user or company data.",
    demonstratedIn: ["Local PM OS", "Dell × NVIDIA Local AI Hackathon"],
    explored: [
      "Local inference",
      "Private workflows",
      "On-device agents",
      "Local knowledge bases",
      "Edge AI constraints",
    ],
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Combining product design, frontend implementation, and AI-native interaction systems.",
    demonstratedIn: ["Ahead", "Nara Labs website", "Local PM OS"],
    explored: [
      "Rapid prototyping",
      "Product architecture",
      "AI-native UX",
      "Design systems",
      "Frontend implementation",
    ],
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    description:
      "Designing memory, retrieval, structured inputs, and knowledge layers that make AI systems more useful.",
    demonstratedIn: ["Ahead", "ProbeIQ", "Local PM OS"],
    explored: [
      "Memory design",
      "Structured context",
      "Prompt architecture",
      "Knowledge layers",
      "User state modeling",
    ],
  },
  {
    id: "agent-evaluation",
    title: "Agent Evaluation",
    description:
      "Testing and validating AI workflows so systems become more reliable, useful, and safe.",
    demonstratedIn: ["Ahead", "Hackathon projects"],
    explored: [
      "Scenario testing",
      "Prompt evaluation",
      "Human feedback loops",
      "Workflow validation",
      "Reliability checks",
    ],
  },
  {
    id: "multi-agent-systems",
    title: "Multi-Agent Systems",
    description:
      "Coordinating specialized agents across workflows with clear responsibilities and shared context.",
    demonstratedIn: ["Local PM OS"],
    explored: [
      "Agent routing",
      "Role-specific agents",
      "Shared context",
      "Workflow orchestration",
      "Task decomposition",
    ],
  },
  {
    id: "agent-governance",
    title: "Agent Governance",
    description:
      "Exploring controls, permissions, and review loops that make agent behavior safer and more trustworthy.",
    demonstratedIn: ["Local PM OS", "Hackathon projects"],
    explored: [
      "Human-in-the-loop review",
      "Guardrails",
      "Approval workflows",
      "Permission boundaries",
      "Agent behavior constraints",
    ],
  },
];

export const SYSTEMS_MATRIX: SystemsMatrixRow[] = [
  {
    id: "memory-systems",
    capability: "Memory Systems",
    projects: ["Ahead", "ProbeIQ", "Local PM OS"],
  },
  {
    id: "retrieval-rag",
    capability: "Retrieval & RAG",
    projects: ["ProbeIQ", "Local PM OS"],
  },
  {
    id: "agent-workflows",
    capability: "Agent Workflows",
    projects: ["ProbeIQ", "Local PM OS"],
  },
  {
    id: "realtime-voice",
    capability: "Realtime Voice",
    projects: ["Ahead", "YC Voice AI Hackathon"],
  },
  {
    id: "decision-simulation",
    capability: "Decision Simulation",
    projects: ["Ahead"],
  },
  {
    id: "local-ai",
    capability: "Local AI",
    projects: ["Local PM OS", "Dell × NVIDIA Local AI Hackathon"],
  },
  {
    id: "context-engineering",
    capability: "Context Engineering",
    projects: ["Ahead", "ProbeIQ", "Local PM OS"],
  },
  {
    id: "agent-evaluation",
    capability: "Agent Evaluation",
    projects: ["Ahead", "Hackathon projects"],
  },
  {
    id: "multi-agent-coordination",
    capability: "Multi-Agent Coordination",
    projects: ["Local PM OS"],
  },
  {
    id: "human-in-the-loop",
    capability: "Human-in-the-Loop",
    projects: ["Ahead", "Local PM OS"],
  },
];

export const CAPABILITY_MATURITY: MaturityGroup[] = [
  {
    status: "active",
    label: "Active",
    items: [
      "Agentic Systems",
      "Realtime Voice",
      "Reasoning Systems",
      "Design Engineering",
      "Context Engineering",
    ],
  },
  {
    status: "exploring",
    label: "Exploring",
    items: [
      "Retrieval Systems",
      "Local AI",
      "Multi-Agent Systems",
      "Agent Evaluation",
    ],
  },
  {
    status: "researching",
    label: "Researching",
    items: [
      "Agent Governance",
      "Monitoring / Observability",
      "Production Reliability",
      "Safety & Permissioning",
    ],
  },
];

export const CURRENT_STACK: StackGroup[] = [
  {
    id: "models",
    title: "Models",
    items: ["OpenAI", "Claude", "Gemini", "Nemotron"],
  },
  {
    id: "agent-frameworks",
    title: "Agent / AI Frameworks",
    items: ["OpenAI SDK", "Vercel AI SDK", "LangGraph", "LangChain"],
  },
  {
    id: "retrieval",
    title: "Retrieval",
    items: [
      "RAG pipelines",
      "Vector search",
      "Embeddings",
      "Structured context",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Vercel", "Supabase", "PostgreSQL", "GitHub"],
  },
  {
    id: "interfaces",
    title: "Interfaces",
    items: [
      "Chat",
      "Voice",
      "Web applications",
      "Decision cards",
      "Dashboards",
    ],
  },
];

export const PROJECT_EVIDENCE: ProjectEvidenceBlock[] = [
  {
    id: "ahead",
    name: "Ahead",
    summary:
      "Conversational decision engine for financial and life decisions.",
    capabilities: [
      "Realtime voice",
      "Memory systems",
      "Decision simulation",
      "Scenario comparison",
      "AI-native interaction design",
    ],
    href: "/projects/ahead",
  },
  {
    id: "probeiq",
    name: "ProbeIQ",
    summary:
      "Agentic research and learning platform for retrieval, reasoning, and interactive exploration.",
    capabilities: [
      "RAG",
      "Knowledge retrieval",
      "Agentic research workflows",
      "Context engineering",
      "Structured reasoning",
    ],
    href: "/projects/probeiq",
  },
  {
    id: "local-pm-os",
    name: "Local PM OS",
    summary:
      "AI-native product management operating system for turning conversations, documents, and project context into workflows.",
    capabilities: [
      "Agent workflows",
      "Multi-agent coordination",
      "Local AI",
      "Context routing",
      "Human-in-the-loop workflows",
    ],
    href: "/projects/local-pm-os",
  },
];

export const CAPABILITIES_PAGE_INTRO =
  "We build applied AI systems that combine product judgment with technical execution: agent workflows, memory, retrieval, realtime interfaces, evaluation loops, and AI-native product experiences.";
