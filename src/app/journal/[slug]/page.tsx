import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { articles, formatDate, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.headline} | Aetherfield Journal`,
    description: article.excerpt,
  };
}

const metaLabel = "font-serif text-xl leading-[1.2] tracking-[-0.04em] text-muted";
const metaValue = "font-sans text-xl leading-none tracking-[-0.02em] text-black";
const articleParagraph = "font-serif text-xl leading-[1.4] tracking-[-0.04em] text-black";

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const recent = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Navigation />

      <article className="flex w-full flex-col items-center pt-[60px]">
        <header className="flex w-full flex-col items-center gap-4 px-5 pt-20 pb-10 text-center">
          <p className="flex gap-2 font-serif text-xl leading-[1.2] tracking-[-0.04em] text-muted">
            <span>{article.category}</span>
            <span aria-hidden>·</span>
            <span>{article.readTime}</span>
          </p>
          <h1 className="w-full max-w-[1030px] font-sans text-[44px] leading-none font-normal tracking-[-0.05em] text-black sm:text-[60px] lg:text-[80px]">
            {article.headline}
          </h1>
        </header>

        <div className="flex w-full flex-col items-center px-5">
          <div className="relative aspect-[1240/500] max-h-[604.8387px] w-full max-w-[1500px]">
            <Image
              src={article.heroImage}
              alt={article.heroAlt}
              fill
              priority
              sizes="(max-width: 1540px) 100vw, 1500px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[1500px] flex-col gap-10 px-5 pt-14 md:flex-row md:items-start md:justify-between md:px-10 md:pt-20 lg:px-[100px]">
          <dl className="flex shrink-0 flex-row gap-10 md:w-[200px] md:flex-col">
            <div className="flex flex-col gap-1">
              <dt className={metaLabel}>Published</dt>
              <dd className={metaValue}>
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className={metaLabel}>Author</dt>
              <dd className={metaValue}>{article.author}</dd>
            </div>
          </dl>

          <div className="flex w-full min-w-0 flex-col gap-12 md:max-w-[740px] md:flex-1">
            <p className={articleParagraph}>{article.intro}</p>
            <Image src="/images/divider.svg" alt="" width={740} height={1} className="h-px w-full" />
            {article.body.length > 0 && (
              <div className="flex flex-col gap-6">
                {article.body.map((paragraph, i) => (
                  <p key={i} className={articleParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      <aside
        aria-labelledby="recent-articles"
        className="mt-20 flex w-full flex-col items-center gap-5 bg-surface px-5 py-20 md:py-[120px]"
      >
        <div className="flex w-full max-w-[1500px] flex-col gap-4 text-black sm:flex-row sm:items-end">
          <h2
            id="recent-articles"
            className="flex-1 font-sans text-[40px] leading-none font-medium tracking-[-0.03em] md:text-[56px]"
          >
            Recent articles
          </h2>
          <Link
            href="/journal"
            className="font-serif text-xl leading-[1.2] tracking-[-0.04em] underline sm:w-[320px] sm:text-right"
          >
            View all articles
          </Link>
        </div>
        <ul className="grid w-full max-w-[1500px] gap-x-4 gap-y-14 md:grid-cols-3">
          {recent.map((a) => (
            <li key={a.slug}>
              <ArticleCard
                article={a}
                headingLevel="h3"
                imageSizes="(max-width: 768px) 100vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </aside>

      <Footer />
    </>
  );
}
