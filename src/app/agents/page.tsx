import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AgentsPage } from "@/components/AgentsPage";
import { createPageMetadata } from "@/lib/metadata";
import { getAgentsStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Hackathons | Nara Labs",
  description:
    "Explore hackathon-built AI agents from Nara Labs: Local PM OS (Dell × NVIDIA Local AI Hackathon), ProbeIQ (YC × Moss Conversational AI Hackathon), and Ahead — agentic AI, local AI, and voice AI experiments.",
  path: "/agents",
  ogImage: "/agents/local-pm-os/1.png",
  keywords: [
    "Nara Labs",
    "Local PM OS",
    "ProbeIQ",
    "Ahead",
    "Agentic AI",
    "Local AI",
    "Voice AI",
    "AI Systems",
    "Dell NVIDIA Hackathon",
    "YC Moss Conversational AI Hackathon",
    "AI Engineering",
  ],
});

export default function Agents() {
  return (
    <>
      <JsonLd data={getAgentsStructuredData()} />
      <AgentsPage />
    </>
  );
}
