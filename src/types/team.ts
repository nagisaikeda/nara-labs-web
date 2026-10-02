export type TeamMember = {
  /** "partner" marks a non-human team member (an AI system or company). */
  kind?: "person" | "partner";
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
  expertise?: string[];
  website?: string;
  linkedin?: string;
  subtitle?: string | string[];
};
