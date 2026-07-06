import type { Metadata } from "next";
import { UpdatesPage } from "@/components/updates/UpdatesPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Updates | Nara Labs",
  description:
    "Product launches, milestones, and momentum from Nara Labs — an Applied AI Lab building configurable products for specialized industries.",
  path: "/updates",
  keywords: ["Nara Labs", "Updates", "Product Launches", "Applied AI"],
});

export default function Updates() {
  return <UpdatesPage />;
}
