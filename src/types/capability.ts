export type CapabilityPreview = {
  id: string;
  title: string;
  description: string;
};

export type CapabilityArea = {
  id: string;
  title: string;
  description: string;
  demonstratedIn: string[];
  explored: string[];
};

export type SystemsMatrixRow = {
  id: string;
  capability: string;
  projects: string[];
};

export type MaturityStatus = "active" | "exploring" | "researching";

export type MaturityGroup = {
  status: MaturityStatus;
  label: string;
  items: string[];
};

export type StackGroup = {
  id: string;
  title: string;
  items: string[];
};

export type ProjectEvidenceBlock = {
  id: string;
  name: string;
  summary: string;
  capabilities: string[];
  href: string;
};
