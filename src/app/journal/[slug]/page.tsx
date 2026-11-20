import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { Divider } from "@/components/divider";
import { MetaLine } from "@/components/meta-line";
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

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const recent = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="flex w-full flex-col items-center pt-[60px]">
        <header className="flex w-full flex-col items-center gap-4 px-5 pt-[60px] pb-10 text-center md:pt-20">
          <MetaLine variant="body" items={[article.category, article.readTime]} />
          <h1 className="w-full max-w-[1030px] font-sans text-[36px] leading-none font-normal tracking-[-0.02em] text-black md:text-[60px] md:tracking-[-0.05em] lg:text-[80px]">
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

        <div className="flex w-full max-w-[1500px] flex-col gap-8 px-5 pt-10 md:flex-row md:items-start md:justify-between md:gap-10 md:px-10 md:pt-20 lg:px-[100px]">
          <dl className="flex shrink-0 flex-row gap-4 md:w-[200px] md:flex-col md:gap-10">
            <div className="flex flex-1 flex-col gap-1 md:flex-none">
              <dt className="type-body text-muted">Published</dt>
              <dd className="type-label text-black">
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </dd>
            </div>
            <div className="flex flex-1 flex-col gap-1 md:flex-none">
              <dt className="type-body text-muted">Author</dt>
              <dd className="type-label text-black">{article.author}</dd>
            </div>
          </dl>

          <div className="flex w-full min-w-0 flex-col gap-10 md:max-w-[740px] md:flex-1 md:gap-12">
            <p className="type-article text-black">{article.intro}</p>
            <Divider />
            {article.body.length > 0 && (
              <div className="flex flex-col gap-6">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="type-article text-black">
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
        className="mt-10 flex w-full flex-col items-center gap-6 bg-surface px-5 py-10 md:mt-20 md:gap-5 md:py-[120px]"
      >
        <div className="flex w-full max-w-[1500px] flex-col items-center gap-4 text-center text-black md:flex-row md:items-end md:text-left">
          <h2 id="recent-articles" className="type-heading-lg flex-1">
            Recent articles
          </h2>
          <Link href="/journal" className="type-body-lg underline md:w-[320px] md:text-right">
            View all articles
          </Link>
        </div>
        <ul className="grid w-full max-w-[1500px] gap-x-4 gap-y-8 md:grid-cols-3">
          {recent.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} headingLevel="h3" imageSizes="(max-width: 768px) 100vw, 33vw" />
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
