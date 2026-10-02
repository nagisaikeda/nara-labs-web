import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { NaraPage } from "@/components/nara/NaraPage";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const title = "Nara — Home Intelligence | Nara Labs";
const description =
  "Nara is the home intelligence that learns your home, understands when something changes, and helps take care of what happens next.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/nara",
  ogImage: "/nara/home-twin.jpg",
  keywords: [
    "Nara",
    "Nara Labs",
    "Home Intelligence",
    "Home Twin",
    "Home Systems",
    "HVAC",
  ],
});

export default function Nara() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: `${SITE_URL}/nara`,
          about: {
            "@type": "Product",
            name: "Nara",
            description,
            brand: {
              "@type": "Organization",
              name: "Nara Labs",
              url: SITE_URL,
            },
          },
        }}
      />
      <NaraPage />
    </>
  );
}
