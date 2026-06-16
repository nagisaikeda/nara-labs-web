import type { Metadata } from "next";
import { AgentsPage } from "@/components/AgentsPage";

export const metadata: Metadata = {
  title: "Agents — Nara Labs",
  description:
    "A collection of AI systems built through Nara Labs research, hackathons, and product experiments — exploring agentic systems, local AI, voice AI, and decision intelligence.",
};

export default function Agents() {
  return <AgentsPage />;
}
