import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/capabilities/CapabilitiesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Capabilities | Nara Labs",
  description:
    "The reusable AI systems, design engineering philosophy, and platform capabilities behind Nara Labs products — agentic systems, retrieval, voice, reasoning, local AI, and design engineering.",
  path: "/capabilities",
  keywords: [
    "Nara Labs",
    "AI Capabilities",
    "Applied AI",
    "Agentic Systems",
    "RAG",
    "Realtime Voice",
    "Local AI",
    "Design Engineering",
    "Platform Capabilities",
  ],
});

export default function Capabilities() {
  return <CapabilitiesPage />;
}
