import type { Metadata } from "next";
import Image from "next/image";
import { ButtonPrimary } from "@/components/buttons";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ValueCards } from "@/components/value-cards";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About | Aetherfield",
  description:
    "Aetherfield helps organizations turn complex climate data into measurable, meaningful change.",
};

const eyebrow = "font-serif text-xl leading-[1.2] tracking-[-0.04em] text-muted";
const largeHeading =
  "font-sans text-[40px] leading-none font-medium tracking-[-0.03em] text-black md:text-[56px]";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <header className="flex w-full flex-col items-center gap-10 pb-16 md:flex-row md:gap-4 md:pb-0">
        <div className="relative h-[480px] w-full md:h-[800px] md:flex-1">
          <Image
            src="/images/about-hero.png"
            alt="Abstracted user interface forecasting a 16% off target for 2027 emissions goal alongside an image of a mossy tree on top of a light blue gradient background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-14 px-5 md:flex-1 md:pr-10 md:pl-10 lg:pr-[105px] lg:pl-16">
          <div className="flex w-full max-w-[500px] flex-col gap-4">
            <p className={eyebrow}>Our mission</p>
            <h1 className="font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
              Climate action starts with better information. We help organizations turn complex data
              into measurable, meaningful change.
            </h1>
          </div>
          <div className="w-full max-w-[500px]">
            <ButtonPrimary href="#team">Meet the team</ButtonPrimary>
          </div>
        </div>
      </header>

      <main>
        <section className="flex w-full flex-col items-center gap-10 px-5 pt-20 pb-24 md:pt-[120px] md:pb-[160px]">
          <h2 className="w-full max-w-[1500px] text-center font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
            Our values
          </h2>
          <ValueCards tone="grey" />
        </section>

        <section className="flex w-full justify-center px-5 pb-20 md:pb-[120px]">
          <div className="relative flex w-full max-w-[1500px] flex-col items-center gap-10 md:flex-row md:gap-4">
            <div className="relative aspect-[612/700] w-full md:flex-1">
              <Image
                src="/images/founder.png"
                alt="Stylized blue duotone portrait of a woman with long hair facing slightly backward"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-center gap-10 md:flex-1 md:gap-14 lg:px-[105px]">
              <div className="flex flex-col gap-2">
                <p className={eyebrow}>Founder’s story</p>
                <h2 className={largeHeading}>Eunji Park</h2>
              </div>
              <p className="font-serif text-xl leading-[1.2] tracking-[-0.04em] text-black">
                Eunji founded Aetherfield with one goal: to help companies take climate action without
                waiting for a perfect plan. With a background in environmental systems and software
                design, she’s spent the past decade building tools that turn impact goals into
                real-world outcomes. She still insists on biking to every investor meeting.
              </p>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute top-[-94px] left-[-48px] hidden h-[182.221px] w-[313.694px] items-center justify-center lg:flex"
            >
              <Image src="/images/sticker-about.svg" alt="" width={298} height={147} className="-rotate-7" />
            </div>
          </div>
        </section>

        <section
          id="team"
          aria-labelledby="team-heading"
          className="flex w-full scroll-mt-16 flex-col items-center gap-10 bg-surface px-5 py-20 text-black md:gap-16 md:py-[120px]"
        >
          <h2 id="team-heading" className={`w-full max-w-[1500px] ${largeHeading}`}>
            Meet the team
          </h2>
          <table className="w-full max-w-[1500px] border-separate border-spacing-0 text-left">
            <thead className="font-mono text-sm leading-none">
              <tr>
                <th scope="col" className="pb-2.5 font-normal">Name</th>
                <th scope="col" className="hidden pb-2.5 font-normal md:table-cell">Title</th>
                <th scope="col" className="hidden pb-2.5 text-right font-normal sm:table-cell">Contact</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {team.map((member, i) => (
                <tr key={i}>
                  <td
                    className={`border-b border-divider py-4 pr-4 align-middle font-sans leading-none font-medium tracking-[-0.02em] md:w-1/3 ${i === 0 ? "border-t" : ""}`}
                  >
                    {member.name}
                    <span className="mt-1 block font-serif leading-[1.15] font-normal tracking-[-0.04em] text-muted md:hidden">
                      {member.title}
                    </span>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-2 block font-serif text-lg leading-[1.15] font-normal tracking-[-0.04em] underline sm:hidden"
                    >
                      {member.email}
                    </a>
                  </td>
                  <td
                    className={`hidden border-b border-divider py-4 pr-4 align-middle font-serif leading-[1.15] tracking-[-0.04em] md:table-cell md:w-1/3 ${i === 0 ? "border-t" : ""}`}
                  >
                    {member.title}
                  </td>
                  <td
                    className={`hidden border-b border-divider py-4 text-right align-middle font-serif leading-[1.15] tracking-[-0.04em] sm:table-cell md:w-1/3 ${i === 0 ? "border-t" : ""}`}
                  >
                    <a href={`mailto:${member.email}`} className="underline hover:opacity-70">
                      {member.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <CallToAction
        tone="white"
        heading="We’re hiring! Want to join the team?"
        buttonLabel="View open roles"
        href="/careers"
      />

      <Footer />
    </>
  );
}
