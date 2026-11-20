import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Journal | Aetherfield",
  description: "Latest articles from the Aetherfield Journal on sustainability data and practice.",
};

export default function JournalPage() {
  return (
    <>
      <Navigation />

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

      <main className="flex w-full flex-col items-center gap-10 px-5 pt-20 pb-10">
        <h1 className="w-full max-w-[612px] text-center font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
          Latest articles
        </h1>

        <ul className="grid w-full max-w-[1540px] gap-x-4 gap-y-14 pb-20 md:grid-cols-2 md:gap-y-20 md:pb-[120px]">
          {articles.map((a) => (
            <li key={a.slug}>
              <article className="flex flex-col gap-5">
                <div className="relative aspect-[612/356] w-full">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6 text-black">
                  <div className="flex flex-col gap-2 leading-none">
                    <h2 className="font-sans text-xl leading-none font-medium tracking-[-0.02em]">
                      {a.title}
                    </h2>
                    <p className="flex gap-2 font-mono text-sm text-muted">
                      <span>{a.category}</span>
                      <span aria-hidden>·</span>
                      <span>{a.readTime}</span>
                    </p>
                  </div>
                  <p className="font-serif text-xl leading-[1.2] tracking-[-0.04em]">{a.excerpt}</p>
                </div>
              </article>
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

      <Footer />
    </>
  );
}
