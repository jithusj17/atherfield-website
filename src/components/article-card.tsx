import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
  /** Heading level for the card title, so it fits the page outline. */
  headingLevel?: "h2" | "h3";
  imageSizes?: string;
};

/** Image, title, details and excerpt ("Journal item" in Figma). The whole card links to the article. */
export function ArticleCard({
  article,
  headingLevel: Heading = "h2",
  imageSizes = "(max-width: 768px) 100vw, 50vw",
}: ArticleCardProps) {
  return (
    <article className="group relative flex flex-col gap-5">
      <div className="relative aspect-[612/356] w-full overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-6 text-black">
        <div className="flex flex-col gap-2 leading-none">
          <Heading className="font-sans text-xl leading-none font-medium tracking-[-0.02em]">
            <Link
              href={`/journal/${article.slug}`}
              className="after:absolute after:inset-0 group-hover:underline"
            >
              {article.title}
            </Link>
          </Heading>
          <p className="flex gap-2 font-mono text-sm text-muted">
            <span>{article.category}</span>
            <span aria-hidden>·</span>
            <span>{article.readTime}</span>
          </p>
        </div>
        <p className="font-serif text-xl leading-[1.2] tracking-[-0.04em]">{article.excerpt}</p>
      </div>
    </article>
  );
}
