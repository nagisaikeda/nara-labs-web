"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { BuildLogTimeline } from "@/components/build-log/BuildLogTimeline";
import { Footer } from "@/components/Footer";
import { getUpdates } from "@/data/updates";

export function UpdatesPage() {
  const entries = getUpdates();

  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Updates"
        subtitle="A running record of product launches, milestones, and momentum from the lab."
        supportingText="We share progress as we ship — so you can follow what we're building and where we're headed next."
      />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-3xl mx-auto">
          <BuildLogTimeline entries={entries} showDescriptions />
        </div>
      </section>

      <Footer />
    </main>
  );
}
