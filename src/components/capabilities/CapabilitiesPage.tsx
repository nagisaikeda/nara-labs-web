"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { CapabilityAreasSection } from "@/components/capabilities/CapabilityAreasSection";
import { SystemsMatrix } from "@/components/capabilities/SystemsMatrix";
import { CapabilityMaturity } from "@/components/capabilities/CapabilityMaturity";
import { StackSection } from "@/components/capabilities/StackSection";
import { ProjectEvidence } from "@/components/capabilities/ProjectEvidence";
import { Footer } from "@/components/Footer";
import { CAPABILITIES_PAGE_INTRO } from "@/data/capabilities";

export function CapabilitiesPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Technical Capabilities"
        subtitle="A map of the systems, workflows, and technical surfaces we are building across Nara Labs projects."
        supportingText={CAPABILITIES_PAGE_INTRO}
      />
      <CapabilityAreasSection />
      <SystemsMatrix />
      <CapabilityMaturity />
      <StackSection />
      <ProjectEvidence />
      <Footer />
    </main>
  );
}
