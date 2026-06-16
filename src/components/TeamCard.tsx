"use client";

import { motion } from "framer-motion";
import { TeamAvatar } from "@/components/TeamAvatar";
import { TeamLinkedInLink } from "@/components/TeamLinkedInLink";
import type { TeamMember } from "@/types/team";

type TeamCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col"
    >
      <div className="mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
        <TeamAvatar
          src={member.image}
          name={member.name}
          initials={member.initials}
        />
      </div>
      <div className="flex-1 flex flex-col p-6 rounded-2xl border border-border bg-surface/30 hover:border-border-strong transition-colors duration-500">
        <h2 className="text-[18px] font-semibold text-foreground mb-1">
          {member.name}
        </h2>
        <h3 className="text-[13px] font-normal text-muted">
          {member.role}
        </h3>
        {member.linkedin && (
          <TeamLinkedInLink name={member.name} linkedin={member.linkedin} />
        )}
        <p className="text-[14px] leading-relaxed text-muted mt-auto">
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
}
