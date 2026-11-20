import Image from "next/image";
import { ButtonSecondary } from "@/components/buttons";

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="flex w-full scroll-mt-16 flex-col items-center px-5 py-20 md:py-[120px]"
    >
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
            <h2 className="type-title">Why Acme Inc chose Aetherfield</h2>
            <p className="type-body">
              With fragmented data and growing reporting pressure, Acme turned to Aetherfield to
              streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and
              34% more coverage.
            </p>
          </div>
          <ButtonSecondary href="#case-study">Read case study</ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
