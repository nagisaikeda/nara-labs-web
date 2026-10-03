import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NaraHero } from "@/components/nara/NaraHero";
import { NaraHomeTwin } from "@/components/nara/NaraHomeTwin";
import { NaraUnderstand } from "@/components/nara/NaraUnderstand";
import { NaraMatch } from "@/components/nara/NaraMatch";
import { NaraDecide } from "@/components/nara/NaraDecide";
import { NaraAct } from "@/components/nara/NaraAct";
import { NaraLearn } from "@/components/nara/NaraLearn";
import { NaraLoop } from "@/components/nara/NaraLoop";
import { NaraVision } from "@/components/nara/NaraVision";
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
        <NaraUnderstand />
        <NaraMatch />
        <NaraDecide />
        <NaraAct />
        <NaraLearn />
        <NaraLoop />
        <NaraVision />
        <NaraCredit />
      </main>
      <Footer />
    </>
  );
}
