"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { Footer } from "@/components/Footer";
import { TEAM_MEMBERS } from "@/data/team";

export function TeamPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Team"
        subtitle="The people building Nara Labs"
        supportingText="We are a small team building intelligent systems for better human judgment — combining product design, AI engineering, and fast execution."
      />

      <section
        className="relative pb-32 md:pb-48 px-6"
        aria-labelledby="team-members-heading"
      >
        <h2 id="team-members-heading" className="sr-only">
          Nara Labs team members
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
