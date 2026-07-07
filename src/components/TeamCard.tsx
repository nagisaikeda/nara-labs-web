"use client";

import { motion } from "framer-motion";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { TeamLinkedInLink } from "@/components/TeamLinkedInLink";
import type { TeamMember } from "@/types/team";

type TeamCardProps = {
  member: TeamMember;
  index: number;
  variant?: "core" | "advisor";
};

function getExpertiseLines(member: TeamMember): string[] {
  if (member.expertise && member.expertise.length > 0) {
    return member.expertise;
  }

  if (!member.subtitle) {
    return [];
  }

  return Array.isArray(member.subtitle) ? member.subtitle : [member.subtitle];
}

export function TeamCard({ member, index, variant = "core" }: TeamCardProps) {
  const isAdvisor = variant === "advisor";
  const expertiseLines = getExpertiseLines(member);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-border bg-surface/20 p-6 pt-8 transition-colors duration-300 hover:border-border-strong hover:bg-surface/25"
    >
      <div className="mb-6 flex justify-center">
        <ProfileAvatar name={member.name} image={member.image} />
      </div>

      {isAdvisor && (
        <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-muted-soft mb-2">
          Advisor
        </p>
      )}

      <h2 className="text-[17px] font-semibold text-foreground leading-snug">
        {member.name}
      </h2>

      <p className="mt-1.5 text-[13px] text-muted">{member.role}</p>

      {expertiseLines.length > 0 && (
        <p className="mt-4 text-[11px] font-medium tracking-[0.04em] text-muted-soft leading-relaxed">
          {expertiseLines.join(" • ")}
        </p>
      )}

      <p className="mt-5 flex-1 text-[14px] leading-[1.65] text-muted">
        {member.bio}
      </p>

      {member.linkedin && (
        <TeamLinkedInLink
          name={member.name}
          linkedin={member.linkedin}
          className="mt-5 mb-0"
        />
      )}
    </motion.article>
  );
}
