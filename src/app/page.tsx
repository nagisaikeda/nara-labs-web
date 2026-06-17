"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatWereBuilding } from "@/components/WhatWereBuilding";
import { BuildLogPreview } from "@/components/build-log/BuildLogPreview";
import { CapabilityGrid } from "@/components/capabilities/CapabilityGrid";
import { HomeHackathons } from "@/components/HomeHackathons";
import { HomeTeamPreview } from "@/components/HomeTeamPreview";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Hero />
      <WhatWereBuilding />
      <BuildLogPreview />
      <CapabilityGrid />
      <HomeHackathons />
      <HomeTeamPreview />
      <Footer />
    </main>
  );
}
