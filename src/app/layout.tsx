import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { MotionProvider } from "@/components/MotionProvider";
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
    title: "Nara Labs — Intelligence for the world we live in",
    description:
      "Nara Labs builds AI systems that develop persistent understanding of real environments — observing what changes, reasoning with context, taking action, and learning over time. Nara is our flagship home intelligence.",
    path: "/",
    keywords: [
      "Nara Labs",
      "Nara",
      "Home intelligence",
      "Persistent AI",
      "AI lab",
      "ReadyLead",
      "ProbeIQ",
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
