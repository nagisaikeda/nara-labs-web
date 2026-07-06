import type { Metadata } from "next";
import { BookDemoPage } from "@/components/book-demo/BookDemoPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Demo | Nara Labs",
  description:
    "Book a demo of ReadyLead or ProbeIQ, or apply to become a design partner with Nara Labs.",
  path: "/book-demo",
  keywords: [
    "Book Demo",
    "ReadyLead Demo",
    "ProbeIQ Demo",
    "Design Partner",
    "Nara Labs",
  ],
});

export default function BookDemo() {
  return <BookDemoPage />;
}
