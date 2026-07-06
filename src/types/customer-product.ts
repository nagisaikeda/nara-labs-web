export type ProductTier =
  | "flagship"
  | "flagship-secondary"
  | "research-incubation"
  | "research";

export type LabCategory = "Research / Incubation";

export type CustomerProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  tier: ProductTier;
  labCategory?: LabCategory;
  accolade?: string;
  href?: string;
  externalHref?: string;
  previewImage?: string;
};

export type HomepageSection = {
  title: string;
  description: string;
};
