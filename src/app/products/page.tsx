import type { Metadata } from "next";
import { ProductsPage } from "@/components/products/ProductsPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Products | Nara Labs",
  description:
    "Evaluate ReadyLead, ProbeIQ, and upcoming applied AI products from Nara Labs — configurable AI systems for specialized industries.",
  path: "/products",
  keywords: [
    "ReadyLead",
    "ProbeIQ",
    "Applied AI",
    "AI Products",
    "Growth Intelligence",
    "AI Tutor",
  ],
});

export default function Products() {
  return <ProductsPage />;
}
