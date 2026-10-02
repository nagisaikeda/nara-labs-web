"use client";

import { Navigation } from "@/components/Navigation";
import { LabHero } from "@/components/home/LabHero";
import { NaraFlagship } from "@/components/home/NaraFlagship";
import { LabThesis } from "@/components/home/LabThesis";
import { FromTheLab } from "@/components/home/FromTheLab";
import { UpdatesStrip } from "@/components/home/UpdatesStrip";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <LabHero />
      <NaraFlagship />
      <LabThesis />
      <FromTheLab />
      <UpdatesStrip />
      <Footer />
    </main>
  );
}
