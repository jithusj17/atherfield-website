export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const placeholder = {
  title: "How to Build a Climate-Ready Data Stack",
  category: "Tooling",
  readTime: "4 min",
  excerpt:
    "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
};

export const articles: Article[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  ...placeholder,
  slug: `climate-ready-data-stack-${n}`,
  image: `/images/article-${n}.png`,
}));
