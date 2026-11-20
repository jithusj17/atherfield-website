import type { Metadata } from "next";
import Image from "next/image";
import { ArticleCard } from "@/components/article-card";
import { CallToAction } from "@/components/call-to-action";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Journal | Aetherfield",
  description: "Latest articles from the Aetherfield Journal on sustainability data and practice.",
};

export default function JournalPage() {
  return (
    <>
      <header className="flex w-full flex-col items-center px-5 pt-[60px]">
        <div className="relative aspect-[1240/480] max-h-[580.6452px] w-full max-w-[1500px]">
          <Image
            src="/images/journal-stamp.png"
            alt="Aetherfield Journal stamp graphic with the words tech, earth, and data around a diamond frame"
            fill
            priority
            sizes="(max-width: 1540px) 100vw, 1500px"
            className="object-cover"
          />
        </div>
      </header>

      <main className="flex w-full flex-col items-center gap-10 px-5 pt-6 pb-4 md:pt-20 md:pb-10">
        <h1 className="type-heading w-full max-w-[612px] text-center text-black">Latest articles</h1>

        <ul className="grid w-full max-w-[1540px] gap-x-4 gap-y-20 pb-10 md:grid-cols-2 md:pb-[120px]">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      </main>

      <CallToAction
        id="subscribe"
        heading="Subscribe to Aetherfield Journal"
        buttonLabel="Sign up to newsletter"
        href="#subscribe"
      />
    </>
  );
}
