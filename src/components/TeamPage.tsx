"use client";

import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { Footer } from "@/components/Footer";
import type { TeamMember } from "@/types/team";

const teamMembers: TeamMember[] = [
  {
    name: "Nagisa Ikeda",
    role: "Founder, Product & Design",
    bio: "Nagisa is the founder of Nara Labs and leads product vision, design, storytelling, and user experience. With a background across product design, fintech, architecture, and AI-native workflows, she focuses on building intelligent systems that help people make better decisions under complexity. At Nara Labs, she drives product strategy, interface design, market positioning, and the translation of emerging AI capabilities into useful human-centered products.",
    image: "/team/nagisa.jpg",
    initials: "NI",
    linkedin: "https://www.linkedin.com/in/nagisaikeda",
  },
  {
    name: "Eddy",
    role: "AI / Machine Learning Engineer",
    bio: "Eddy is an AI and machine learning builder with experience across ML pipelines, backend systems, and applied AI products. He has built risk scoring systems, engineered data features at scale, and worked with tools such as Python, FastAPI, Spark, Optuna, and modern ML infrastructure. At Nara Labs, Eddy contributes to agent architecture, local AI systems, model workflows, and rapid technical execution across hackathon and product prototypes.",
    image: "/team/eddy.jpg",
    initials: "E",
    linkedin: "https://www.linkedin.com/in/jiajunh/",
  },
  {
    name: "Jiawen Zhang",
    role: "Founding Engineer",
    bio: "Jiawen is a founding engineer at Nara Labs, helping turn product concepts into working software. She contributes across frontend, backend, product implementation, and AI-assisted development workflows. At Nara Labs, Jiawen focuses on shipping fast, integrating product requirements into functional systems, and helping build the foundation for intelligent applications such as Ahead and future agentic products.",
    image: "/team/jiawen.jpg",
    initials: "JZ",
    linkedin: "https://www.linkedin.com/in/jiawen-zhang042/",
  },
];

export function TeamPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        label="Team"
        title="The people building Nara Labs"
        subtitle="We are a small team building intelligent systems for better human judgment — combining product design, AI engineering, and fast execution."
      />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
