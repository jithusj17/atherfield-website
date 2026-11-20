import type { Metadata } from "next";
import Image from "next/image";
import { FounderStory } from "@/components/about/founder-story";
import { TeamDirectory } from "@/components/about/team-directory";
import { ButtonPrimary } from "@/components/buttons";
import { CallToAction } from "@/components/call-to-action";
import { ValueCards } from "@/components/value-cards";

export const metadata: Metadata = {
  title: "About | Aetherfield",
  description:
    "Aetherfield helps organizations turn complex climate data into measurable, meaningful change.",
};

export default function AboutPage() {
  return (
    <>
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
            <p className="type-body text-muted">Our mission</p>
            <h1 className="type-heading text-black">
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
          <h2 className="type-heading w-full max-w-[1500px] text-center text-black">Our values</h2>
          <ValueCards tone="grey" />
        </section>
        <FounderStory />
        <TeamDirectory />
      </main>

      <CallToAction
        tone="white"
        heading="We’re hiring! Want to join the team?"
        buttonLabel="View open roles"
        href="/careers"
      />
    </>
  );
}
