"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { Vision } from "@/components/Vision";
import { Footer } from "@/components/Footer";

export function ResearchPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Vision />
      <Footer />
    </main>
  );
}
