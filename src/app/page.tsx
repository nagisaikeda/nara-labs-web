"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkflowProblems } from "@/components/home/WorkflowProblems";
import { ProductsFromLab } from "@/components/home/ProductsFromLab";
import { CustomerOutcomes } from "@/components/home/CustomerOutcomes";
import { WhyDifferent } from "@/components/home/WhyDifferent";
import { DesignPartners } from "@/components/home/DesignPartners";
import { BookDemoBand } from "@/components/home/BookDemoBand";
import { UpdatesStrip } from "@/components/home/UpdatesStrip";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Hero />
      <WorkflowProblems />
      <ProductsFromLab />
      <CustomerOutcomes />
      <WhyDifferent />
      <DesignPartners />
      <BookDemoBand />
      <UpdatesStrip />
      <Footer />
    </main>
  );
}
