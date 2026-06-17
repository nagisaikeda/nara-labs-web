"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { BuildLogTimeline } from "@/components/build-log/BuildLogTimeline";
import { Footer } from "@/components/Footer";
import { getBuildLogEntries } from "@/data/build-log";

export function BuildLogPage() {
  const entries = getBuildLogEntries();

  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Build Log"
        subtitle="A public record of experiments, products, prototypes, research, and systems built at Nara Labs."
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
