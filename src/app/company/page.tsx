import type { Metadata } from "next";
import { CompanyPage } from "@/components/company/CompanyPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Company | Nara Labs",
  description:
    "Nara Labs is an Applied AI Lab that discovers painful workflows and turns them into configurable AI products for specialized industries.",
  path: "/company",
  keywords: [
    "Nara Labs",
    "Applied AI Lab",
    "AI Products",
    "Design Partners",
    "Team",
  ],
});

export default function Company() {
  return <CompanyPage />;
}
