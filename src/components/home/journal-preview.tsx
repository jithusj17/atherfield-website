import Image from "next/image";
import Link from "next/link";
import { ButtonSecondary } from "@/components/buttons";
import { MetaLine } from "@/components/meta-line";
import { articles } from "@/data/articles";

const latestArticles = articles.slice(0, 3);

/** "From the journal": compact list of the three latest articles. */
export function JournalPreview() {
  return (
    <section id="journal" className="flex w-full scroll-mt-24 flex-col items-center gap-10 px-5">
      <h2 className="type-heading w-full max-w-[612px] text-center text-black">From the journal</h2>

      <div className="relative flex w-full max-w-[620px] flex-col items-center gap-6">
        <ul className="w-full">
          {latestArticles.map((a) => (
            <li key={a.slug} className="border-b border-divider first:border-t">
              <article className="group relative flex items-start justify-between gap-4 py-6">
                <div className="relative aspect-[165/100] w-[110px] shrink-0 sm:w-[165px]">
                  <Image src={a.image} alt="" fill sizes="165px" className="object-cover" />
                </div>
                <div className="flex w-full flex-col gap-2 sm:w-[439px]">
                  <h3 className="type-title text-black">
                    <Link
                      href={`/journal/${a.slug}`}
                      className="after:absolute after:inset-0 group-hover:underline"
                    >
                      {a.title}
                    </Link>
                  </h3>
                  <MetaLine items={[a.category, a.readTime]} />
                </div>
              </article>
            </li>
          ))}
        </ul>
        <ButtonSecondary href="/journal">View all articles</ButtonSecondary>

        <div
          aria-hidden
          className="pointer-events-none absolute top-[-109px] left-[-287px] hidden h-[221.12px] w-[420.665px] items-center justify-center xl:flex"
        >
          <Image src="/images/sticker-journal.svg" alt="" width={400} height={154.001} className="-rotate-10" />
        </div>
      </div>
    </section>
  );
}
