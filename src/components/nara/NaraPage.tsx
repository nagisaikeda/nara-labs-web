import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NaraHero } from "@/components/nara/NaraHero";
import { NaraHomeTwin } from "@/components/nara/NaraHomeTwin";
import { NaraTransition } from "@/components/nara/NaraTransition";
import { NaraCredit } from "@/components/nara/NaraCredit";

export function NaraPage() {
  return (
    <>
      <div className="nara-chrome">
        <Navigation />
      </div>
      <main className="nara-product relative overflow-hidden">
        <NaraHero />
        <NaraHomeTwin />
        <NaraTransition />
        <NaraCredit />
      </main>
      <Footer />
    </>
  );
}
