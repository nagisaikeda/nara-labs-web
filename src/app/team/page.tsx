import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TeamPage } from "@/components/TeamPage";
import { createPageMetadata } from "@/lib/metadata";
import { getTeamStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Team | Nara Labs",
  description:
    "Meet the team behind Nara Labs. Nagisa Ikeda, Eddy, and Jiawen Zhang are building AI systems, agentic workflows, local AI applications, and intelligent decision-support products.",
  path: "/team",
  keywords: [
    "Nara Labs",
    "Nagisa Ikeda",
    "Jiawen Zhang",
    "Eddy",
    "AI Engineer",
    "Machine Learning Engineer",
    "AI Product Designer",
    "AI Systems",
    "Agentic AI",
    "Local AI",
    "Voice AI",
    "Startup Team",
  ],
});

export default function Team() {
  return (
    <>
      <JsonLd data={getTeamStructuredData()} />
      <TeamPage />
    </>
  );
}
