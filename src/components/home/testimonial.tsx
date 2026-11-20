import Image from "next/image";

export function Testimonial() {
  return (
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
          <blockquote className="type-heading text-black">
            We finally moved past spreadsheets and guesswork. Now we have real data to guide real
            decisions.
          </blockquote>
          <figcaption className="flex flex-col gap-2">
            <span className="type-title text-black">Elliot Williams</span>
            <span className="type-body text-muted">Head of Sustainability, Flux Materials</span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
