import type { ProjectTeamMember } from "@/types/project";

type TeamListProps = {
  members: ProjectTeamMember[];
};

export function TeamList({ members }: TeamListProps) {
  return (
    <ul className="space-y-4">
      {members.map((member) => (
        <li
          key={member.name}
          className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
        >
          <span className="text-[14px] font-semibold text-foreground shrink-0">
            {member.name}
          </span>
          {member.role && (
            <>
              <span className="hidden sm:inline text-muted-soft">—</span>
              <span className="text-[14px] text-muted">{member.role}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
