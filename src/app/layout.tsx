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
    title: "Nara Labs — Applied AI Products for Specialized Industries",
    description:
      "Nara Labs is an Applied AI Lab that discovers painful workflows and turns them into configurable AI products. Evaluate ReadyLead, ProbeIQ, and upcoming products from the lab.",
    path: "/",
    keywords: [
      "Nara Labs",
      "Applied AI Lab",
      "ReadyLead",
      "ProbeIQ",
      "AI Products",
      "Design Partners",
      "Growth Intelligence",
      "AI Tutor",
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
