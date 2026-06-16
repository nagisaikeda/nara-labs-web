export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type ProjectTeamMember = {
  name: string;
  role?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  name: string;
  label: string;
  origin: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  gallery?: ProjectGalleryImage[];
  team: ProjectTeamMember[];
  techStack: string[];
  demoVideo?: string;
  githubRepo?: string;
  lessonsLearned: string;
  previewImage?: string;
  badge?: string;
  seoDescription: string;
  featured?: boolean;
};
