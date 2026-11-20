import Image from "next/image";
import { DisplayHeading } from "@/components/display-heading";
import { ValueCards } from "@/components/value-cards";

export function Values() {
  return (
    <section
      id="values"
      className="relative flex w-full scroll-mt-16 flex-col items-center gap-10 px-5 py-20 md:py-[120px]"
    >
      <Image src="/images/values-bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative w-full max-w-[1500px]">
        <DisplayHeading serif="Built for clarity" sans="Designed for action" />
      </div>
      <ValueCards tone="white" />
    </section>
  );
}
