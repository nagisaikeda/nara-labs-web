import type { Metadata } from "next";
import { TeamPage } from "@/components/TeamPage";

export const metadata: Metadata = {
  title: "Team — Nara Labs",
  description:
    "The people building Nara Labs — a small team combining product design, AI engineering, and fast execution.",
};

export default function Team() {
  return <TeamPage />;
}
