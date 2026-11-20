import Image from "next/image";
import { ButtonPrimary } from "@/components/buttons";

const features = [
  { title: "Track", number: "001", body: "Emissions, energy, and waste across your value chain" },
  { title: "Model", number: "002", body: "Forecast performance and goal alignment" },
  { title: "Report", number: "003", body: "Generate ESG disclosures, automate frameworks" },
  { title: "Act", number: "004", body: "Surface insights and operational next steps" },
];

export function Features() {
  return (
    <main
      id="features"
      className="relative flex w-full scroll-mt-16 flex-col items-center gap-10 px-5 py-20 md:py-[120px]"
    >
      <h2 className="type-heading w-full max-w-[612px] text-center text-black">
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
                  <h3 className="type-title flex-1">{f.title}</h3>
                  <span className="type-caption text-muted">{f.number}</span>
                </div>
                <p className="type-body">{f.body}</p>
              </li>
            ))}
          </ul>
          <ButtonPrimary href="#features">Explore features</ButtonPrimary>
        </div>
      </div>
    </main>
  );
}
