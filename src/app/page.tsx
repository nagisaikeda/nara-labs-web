"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { AheadProduct } from "@/components/AheadProduct";
import { ReasoningCard } from "@/components/ReasoningCard";
import { DecisionSimulation } from "@/components/DecisionSimulation";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Hero />
      <Vision />
      <AheadProduct />
      <ReasoningCard />
      <DecisionSimulation />
      <Footer />
    </main>
  );
}
