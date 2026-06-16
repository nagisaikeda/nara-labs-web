import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationStructuredData } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nara-labs.com"),
  ...createPageMetadata({
    title: "Nara Labs — AI Systems for Better Human Judgment",
    description:
      "Nara Labs builds frontier AI systems for realtime reasoning, contextual memory, agentic AI, local AI, voice AI, and behavioral decision support.",
    path: "/",
    keywords: [
      "Nara Labs",
      "AI Systems",
      "Agentic AI",
      "Local AI",
      "Voice AI",
      "AI Product Design",
      "AI Engineering",
      "Decision Intelligence",
      "Nagisa Ikeda",
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={getOrganizationStructuredData()} />
        {children}
      </body>
    </html>
  );
}
