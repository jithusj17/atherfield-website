import Image from "next/image";
import { ButtonPrimary } from "@/components/buttons";
import { DisplayHeading } from "@/components/display-heading";

export function Hero() {
  return (
    <header className="relative flex w-full flex-col items-center gap-8 px-5 pt-[120px] md:gap-14 md:pt-[140px]">
      <div className="flex w-full max-w-[480px] flex-col items-center gap-6 md:max-w-[1030px] md:gap-8">
        <div className="flex w-full flex-col items-center gap-3 text-center md:gap-4">
          <DisplayHeading as="h1" serif="Sustainability insights," sans="built for business" fitOnMobile />
          <p className="type-body">
            Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap md:gap-4">
          <ButtonPrimary href="#contact">Request a demo</ButtonPrimary>
          <ButtonPrimary href="#features">Explore the platform</ButtonPrimary>
        </div>
      </div>

      <div className="relative aspect-[960/608] w-full max-w-[960px] overflow-hidden rounded-xl border-2 border-black md:rounded-3xl">
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
  );
}
