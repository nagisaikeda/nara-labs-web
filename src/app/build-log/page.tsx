import type { Metadata } from "next";
import { BuildLogPage } from "@/components/build-log/BuildLogPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Build Log | Nara Labs",
  description:
    "A public record of experiments, products, prototypes, research, and systems built at Nara Labs.",
  path: "/build-log",
  keywords: [
    "Nara Labs",
    "Build Log",
    "AI Product Studio",
    "Shipping",
    "Local PM OS",
    "ProbeIQ",
    "Ahead",
    "Hackathons",
    "AI Systems",
  ],
});

export default function BuildLog() {
  return <BuildLogPage />;
}
