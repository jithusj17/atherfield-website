import Image from "next/image";

export function FounderStory() {
  return (
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
            <p className="type-body text-muted">Founder’s story</p>
            <h2 className="type-heading-lg text-black">Eunji Park</h2>
          </div>
          <p className="type-body text-black">
            Eunji founded Aetherfield with one goal: to help companies take climate action without
            waiting for a perfect plan. With a background in environmental systems and software
            design, she’s spent the past decade building tools that turn impact goals into real-world
            outcomes. She still insists on biking to every investor meeting.
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
  );
}
