export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
};

// Placeholder roles from the Figma design: the same listing repeated three times.
const placeholder = {
  title: "Data Scientist",
  type: "Full-time",
  location: "Denver, CO",
  summary:
    "Help build the intelligence layer for climate action. You'll turn complex sustainability data into clear, actionable insights for enterprise teams.",
};

export const roles: Role[] = [1, 2, 3].map((n) => ({
  ...placeholder,
  slug: `data-scientist-${n}`,
}));

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}
