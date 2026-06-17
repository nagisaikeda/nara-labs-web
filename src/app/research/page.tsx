import type { Metadata } from "next";
import { ResearchPage } from "@/components/ResearchPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Research | Nara Labs",
  description:
    "Nara Labs research focus: realtime reasoning, contextual memory, and behavioral decision support for human-centered intelligent systems.",
  path: "/research",
  keywords: [
    "Nara Labs",
    "AI Research",
    "Realtime Reasoning",
    "Contextual Memory",
    "Decision Support",
    "Agentic AI",
  ],
});

export default function Research() {
  return <ResearchPage />;
}
