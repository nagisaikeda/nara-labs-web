import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/capabilities/CapabilitiesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Capabilities | Nara Labs",
  description:
    "A map of the systems, workflows, and technical surfaces Nara Labs builds across agentic systems, retrieval, realtime voice, reasoning, local AI, and design engineering.",
  path: "/capabilities",
  keywords: [
    "Nara Labs",
    "AI Engineering",
    "Applied AI",
    "Agentic Systems",
    "RAG",
    "Realtime Voice",
    "Local AI",
    "Design Engineering",
    "AI Product Studio",
  ],
});

export default function Capabilities() {
  return <CapabilitiesPage />;
}
