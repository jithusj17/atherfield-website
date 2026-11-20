export type TeamMember = {
  name: string;
  title: string;
  email: string;
};

// Placeholder directory from the Figma design: the same person repeated twelve times.
export const team: TeamMember[] = Array.from({ length: 12 }, () => ({
  name: "John McClelland",
  title: "Director of Technology",
  email: "jmcclelland@aetherfield.com",
}));
