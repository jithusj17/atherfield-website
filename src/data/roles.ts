export type RoleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  /** Full job description. Empty until real content is written. */
  description: RoleSection[];
};

// Placeholder roles from the Figma design: the same listing repeated three times.
const placeholder = {
  title: "Data Scientist",
  type: "Full-time",
  location: "Denver, CO",
  summary:
    "Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams.",
  description: [] as RoleSection[],
};

export const roles: Role[] = [1, 2, 3].map((n) => ({
  ...placeholder,
  slug: `data-scientist-${n}`,
}));

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}

export const careersEmail = "careers@aetherfield.com";

export function applyHref(subject: string) {
  return `mailto:${careersEmail}?subject=${encodeURIComponent(subject)}`;
}
