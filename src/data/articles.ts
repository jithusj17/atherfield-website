export type Article = {
  slug: string;
  /** Title shown on article cards. */
  title: string;
  /** Headline shown at the top of the article page. */
  headline: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  heroImage: string;
  heroAlt: string;
  publishedAt: string;
  author: string;
  intro: string;
  /** Body paragraphs below the intro. Empty until real content is written. */
  body: string[];
};

// Placeholder copy taken from the Figma design, shared by every article for now.
const placeholder = {
  title: "How to Build a Climate-Ready Data Stack",
  headline: "Carbon Accounting: Myths, Models, and Must-Haves",
  category: "Tooling",
  readTime: "4 min",
  excerpt:
    "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
  heroImage: "/images/article-hero.png",
  heroAlt: "Stylized halftone image of a mountain peak with a beige sky",
  publishedAt: "2025-07-01",
  author: "Al Gorithm",
  intro:
    "Climate action is only as strong as the data that informs it. But most data stacks weren’t designed with emissions, supply chains, or climate modeling in mind. Teams are often stuck retrofitting existing systems or relying on brittle workarounds to generate insights. It’s time to rethink our infrastructure—starting with the foundation.",
  body: [] as string[],
};

export const articles: Article[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  ...placeholder,
  slug: `climate-ready-data-stack-${n}`,
  image: `/images/article-${n}.png`,
}));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
