"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { FeaturedAgent } from "@/components/FeaturedAgent";
import { AgentCard } from "@/components/AgentCard";
import { Footer } from "@/components/Footer";
import type { AgentCardData } from "@/types/agent";

const agents: AgentCardData[] = [
  {
    name: "ProbeIQ",
    label: "YC × Moss Conversational AI Hackathon",
    description:
      "ProbeIQ transforms procedural videos into interactive learning experiences through real-time voice conversations. Users can ask questions naturally while watching educational content and receive context-aware explanations grounded in the source material.",
    descriptionExtra:
      "The system combines transcription, retrieval, conversational AI, and media controls to create a more active learning experience for complex technical subjects.",
    capabilities: [
      "Voice tutoring",
      "Video understanding",
      "Retrieval-augmented generation",
      "Context-aware explanations",
      "Real-time playback controls",
      "Conversational learning",
    ],
    techStack: ["Moss", "MiniMax", "Deepgram", "LiveKit", "Qwen"],
    team: [
      "Amogh Biju",
      "Shivoham Angal",
      "Jiawen Zhang",
      "Nagisa Ikeda",
    ],
    keyInsight:
      "Retrieval latency is not merely a backend metric. In voice AI systems, latency directly impacts whether an agent feels responsive, trustworthy, and genuinely conversational.",
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
  },
  {
    name: "Ahead",
    label: "AI Financial Decision Agent",
    description:
      "Ahead explores how AI can help individuals make better financial decisions by combining memory, scenario simulation, and conversational reasoning.",
    descriptionExtra:
      "Rather than functioning as a traditional budgeting application, Ahead focuses on helping users evaluate tradeoffs, understand long-term consequences, and make more informed decisions about money, work, and life goals. The project serves as an ongoing exploration of AI-assisted decision-making and personalized reasoning systems.",
    capabilities: [
      "Financial decision simulation",
      "Personalized memory",
      "Goal-aware reasoning",
      "Scenario comparison",
      "Conversational guidance",
    ],
    researchAreas: [
      "Human-AI decision support",
      "Personal memory systems",
      "Behavioral finance",
      "Long-term planning",
      "Agentic reasoning",
    ],
    badge: "Experimental",
    href: "https://ahead.nara-labs.com",
    hrefLabel: "Explore Ahead",
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
  },
];

export function AgentsPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Agents"
        subtitle="A collection of AI systems built through Nara Labs research, hackathons, and product experiments."
        supportingText="We explore how intelligent systems can help humans reason, learn, decide, and collaborate more effectively."
      />

      <FeaturedAgent />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {agents.map((agent, i) => (
            <AgentCard key={agent.name} {...agent} index={i + 1} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
