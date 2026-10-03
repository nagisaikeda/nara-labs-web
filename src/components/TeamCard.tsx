"use client";

import { motion } from "framer-motion";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { LinkedInIcon, TeamLinkedInLink } from "@/components/TeamLinkedInLink";
import { OptionalExternalLink } from "@/components/OptionalExternalLink";
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

function getHeadline(member: TeamMember): string | null {
  if (!member.expertise?.length || !member.subtitle) {
    return null;
  }

  return Array.isArray(member.subtitle)
    ? member.subtitle.join(" • ")
    : member.subtitle;
}

function PartnerIdentityTile({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={name}
      className="relative flex size-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border-strong bg-surface-elevated"
    >
      <div
        aria-hidden
        className="absolute inset-3 rounded-lg border border-white/[0.06]"
      />
      <div aria-hidden className="relative flex flex-col items-center select-none">
        <span className="pl-[0.32em] text-[15px] font-semibold uppercase tracking-[0.32em] text-foreground/85">
          {name}
        </span>
        <span className="mt-2.5 pl-[0.2em] text-[9px] font-medium uppercase tracking-[0.2em] text-muted-soft">
          AI system
        </span>
      </div>
    </div>
  );
}

const partnerLinkClass =
  "inline-flex items-center gap-1.5 rounded-sm text-[13px] text-muted-soft transition-colors duration-300 hover:text-foreground";

function PartnerLinks({ member }: { member: TeamMember }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
      <OptionalExternalLink
        href={member.website}
        label={`${member.name} website`}
        className={partnerLinkClass}
      >
        {member.name} ↗
      </OptionalExternalLink>
      <OptionalExternalLink
        href={member.linkedin}
        label={`${member.name} on LinkedIn`}
        className={partnerLinkClass}
      >
        <LinkedInIcon className="h-3.5 w-3.5 opacity-70" />
        LinkedIn ↗
      </OptionalExternalLink>
    </div>
  );
}

export function TeamCard({ member, index, variant = "core" }: TeamCardProps) {
  const isAdvisor = variant === "advisor";
  const expertiseLines = getExpertiseLines(member);
  const headline = getHeadline(member);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-border bg-surface/20 p-6 pt-8 transition-colors duration-300 hover:border-border-strong hover:bg-surface/25"
    >
      <div className="mb-6 flex justify-center">
        {member.kind === "partner" && !member.image ? (
          <PartnerIdentityTile name={member.name} />
        ) : (
          <ProfileAvatar name={member.name} image={member.image} />
        )}
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

      {headline && (
        <p className="mt-2 text-[11px] font-medium text-foreground/75 leading-relaxed">
          {headline}
        </p>
      )}

      {expertiseLines.length > 0 && (
        <p
          className={`text-[11px] font-medium tracking-[0.04em] text-muted-soft leading-relaxed ${
            headline ? "mt-3" : "mt-4"
          }`}
        >
          {expertiseLines.join(" • ")}
        </p>
      )}

      <p className="mt-5 flex-1 text-[14px] leading-[1.65] text-muted">
        {member.bio}
      </p>

      {member.kind === "partner" ? (
        <PartnerLinks member={member} />
      ) : member.linkedin && (
        <TeamLinkedInLink
          name={member.name}
          linkedin={member.linkedin}
          className="mt-5 mb-0"
        />
      )}
    </motion.article>
  );
}
