import { CallToAction } from "@/components/call-to-action";
import { CaseStudy } from "@/components/home/case-study";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { JournalPreview } from "@/components/home/journal-preview";
import { Testimonial } from "@/components/home/testimonial";
import { Values } from "@/components/home/values";

export default function Home() {
  return (
    <>
      <div className="relative flex w-full flex-col">
        {/* Sky-to-cream gradient behind the hero and the top of the features section */}
        <div
          aria-hidden
          className="absolute inset-[0_0_65.24%_0] bg-gradient-to-b from-sky to-cream md:inset-[0_0_58.25%_0]"
        />
        <Hero />
        <Features />
      </div>
      <Values />
      <CaseStudy />
      <JournalPreview />
      <Testimonial />
      <CallToAction
        id="contact"
        heading="Ready to operationalize your sustainability goals?"
        buttonLabel="Request a demo"
        href="#contact"
      />
    </>
  );
}
