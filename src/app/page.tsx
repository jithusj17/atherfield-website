import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { CallToAction } from "@/components/call-to-action";
import { DisplayHeading } from "@/components/display-heading";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ValueCards } from "@/components/value-cards";
import { articles } from "@/data/articles";

const features = [
  { title: "Track", number: "001", body: "Emissions, energy, and waste across your value chain" },
  { title: "Model", number: "002", body: "Forecast performance and goal alignment" },
  { title: "Report", number: "003", body: "Generate ESG disclosures, automate frameworks" },
  { title: "Act", number: "004", body: "Surface insights and operational next steps" },
];

const latestArticles = articles.slice(0, 3);

const sectionHeading =
  "w-full max-w-[612px] text-center font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]";
const paragraph = "font-serif text-xl leading-[1.2] tracking-[-0.04em]";
const itemTitle = "font-sans text-xl leading-none font-medium tracking-[-0.02em] text-black";

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="relative flex w-full flex-col">
        <div aria-hidden className="absolute inset-[0_0_58.25%_0] bg-gradient-to-b from-sky to-cream" />

        <header className="relative flex w-full flex-col items-center gap-14 px-5 pt-[120px] md:pt-[140px]">
          <div className="flex w-full max-w-[1030px] flex-col items-center gap-8">
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <DisplayHeading as="h1" serif="Sustainability insights," sans="built for business" />
              <p className={paragraph}>
                Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonPrimary href="#contact">Request a demo</ButtonPrimary>
              <ButtonPrimary href="#features">Explore the platform</ButtonPrimary>
            </div>
          </div>

          <div className="relative aspect-[960/608] w-full max-w-[960px] overflow-hidden rounded-3xl border-2 border-black">
            <Image
              src="/images/hero-dashboard.png"
              alt="Software dashboard showing sustainability metrics including energy use, emissions trend, and goal progress"
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        </header>

        <main id="features" className="relative flex w-full scroll-mt-16 flex-col items-center gap-10 px-5 py-20 md:py-[120px]">
          <h2 className={sectionHeading}>
            Everything you need to measure, model, and act on sustainability
          </h2>

          <div className="flex w-full max-w-[1500px] flex-col items-center gap-10 lg:flex-row">
            <div className="relative aspect-[693/502] w-full shrink-0 lg:w-[693px]">
              <Image
                src="/images/features.png"
                alt="UI card displaying energy consumption data on a light fabric background"
                fill
                sizes="(max-width: 1024px) 100vw, 693px"
                className="object-cover"
              />
            </div>

            <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-6">
              <ul className="w-full">
                {features.map((f) => (
                  <li
                    key={f.number}
                    className="flex flex-col gap-4 border-t border-divider py-6 text-black last:border-b"
                  >
                    <div className="flex items-start gap-4">
                      <h3 className={`flex-1 ${itemTitle}`}>{f.title}</h3>
                      <span className="font-mono text-sm leading-none text-muted">{f.number}</span>
                    </div>
                    <p className={paragraph}>{f.body}</p>
                  </li>
                ))}
              </ul>
              <ButtonPrimary href="#features">Explore features</ButtonPrimary>
            </div>
          </div>
        </main>
      </div>

      <section id="values" className="relative flex w-full scroll-mt-16 flex-col items-center gap-10 px-5 py-20 md:py-[120px]">
        <Image src="/images/values-bg.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="relative w-full max-w-[1500px]">
          <DisplayHeading serif="Built for clarity" sans="Designed for action" />
        </div>
        <ValueCards tone="white" />
      </section>

      <section id="case-study" className="flex w-full scroll-mt-16 flex-col items-center px-5 py-20 md:py-[120px]">
        <div className="flex w-full max-w-[980px] flex-col items-center gap-8 rounded-2xl bg-surface p-5 md:flex-row md:gap-10">
          <div className="relative aspect-[498/280] w-full shrink-0 overflow-hidden rounded-lg md:w-[498px]">
            <Image
              src="/images/case-study.png"
              alt="Group of colleagues greeting each other in a stylized blue duotone treatment"
              fill
              sizes="(max-width: 768px) 100vw, 498px"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-8 md:w-[403px]">
            <div className="flex flex-col gap-4 text-black">
              <h2 className={itemTitle}>Why Acme Inc chose Aetherfield</h2>
              <p className={paragraph}>
                With fragmented data and growing reporting pressure, Acme turned to Aetherfield to
                streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and
                34% more coverage.
              </p>
            </div>
            <ButtonSecondary href="#case-study">Read case study</ButtonSecondary>
          </div>
        </div>
      </section>

      <section id="journal" className="flex w-full scroll-mt-24 flex-col items-center gap-10 px-5">
        <h2 className={sectionHeading}>From the journal</h2>

        <div className="relative flex w-full max-w-[620px] flex-col items-center gap-6">
          <ul className="w-full">
            {latestArticles.map((a) => (
              <li key={a.slug} className="border-b border-divider first:border-t">
                <article className="group relative flex items-start justify-between gap-4 py-6">
                  <div className="relative aspect-[165/100] w-[110px] shrink-0 sm:w-[165px]">
                    <Image src={a.image} alt="" fill sizes="165px" className="object-cover" />
                  </div>
                  <div className="flex w-full flex-col gap-2 leading-none sm:w-[439px]">
                    <h3 className={itemTitle}>
                      <Link
                        href={`/journal/${a.slug}`}
                        className="after:absolute after:inset-0 group-hover:underline"
                      >
                        {a.title}
                      </Link>
                    </h3>
                    <p className="flex gap-2 font-mono text-sm text-muted">
                      <span>{a.category}</span>
                      <span aria-hidden>·</span>
                      <span>{a.readTime}</span>
                    </p>
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
            <Image
              src="/images/sticker-journal.svg"
              alt=""
              width={400}
              height={154.001}
              className="-rotate-10"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center px-5 py-20 md:py-[120px]">
        <figure className="flex w-full max-w-[1500px] flex-col items-center gap-10 md:flex-row md:gap-4">
          <div className="relative aspect-[612/700] w-full md:flex-1">
            <Image
              src="/images/testimonial.png"
              alt="Stylized blue duotone portrait of a person facing the camera with arms crossed"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-10 md:flex-1 md:gap-14 lg:px-[105px]">
            <Image src="/images/quotation.svg" alt="" width={24} height={20} />
            <blockquote className="font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
              We finally moved past spreadsheets and guesswork. Now we have real data to guide real
              decisions.
            </blockquote>
            <figcaption className="flex flex-col gap-2 text-xl">
              <span className={itemTitle}>Elliot Williams</span>
              <span className={`${paragraph} text-muted`}>Head of Sustainability, Flux Materials</span>
            </figcaption>
          </div>
        </figure>
      </section>

      <CallToAction
        id="contact"
        heading="Ready to operationalize your sustainability goals?"
        buttonLabel="Request a demo"
        href="#contact"
      />

      <Footer />
    </>
  );
}
