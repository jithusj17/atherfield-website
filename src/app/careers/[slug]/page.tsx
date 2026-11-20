import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { applyHref, getRole, roles } from "@/data/roles";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return {
    title: `${role.title} | Careers at Aetherfield`,
    description: role.summary,
  };
}

const bodyText = "font-serif text-xl leading-[1.2] tracking-[-0.04em] text-black";

function Divider() {
  return <Image src="/images/divider.svg" alt="" width={740} height={1} className="h-px w-full" />;
}

export default async function RolePage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const apply = applyHref(`Application: ${role.title}`);

  return (
    <>
      <Navigation />

      <main className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-sky to-cream px-5 pt-[120px] pb-20 md:pt-[140px] md:pb-[120px]">
        <Link
          href="/careers"
          className="font-serif text-xl leading-[1.2] tracking-[-0.04em] text-black hover:underline"
        >
          <span aria-hidden>← </span>Back to Careers
        </Link>

        <article className="relative flex w-full max-w-[820px] flex-col gap-12 rounded-2xl bg-white p-6 sm:p-10">
          <header className="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
                  {role.title}
                </h1>
                <p className="flex flex-wrap gap-2 font-serif text-xl leading-[1.2] tracking-[-0.04em] text-muted">
                  <span>{role.type}</span>
                  <span aria-hidden>·</span>
                  <span>{role.location}</span>
                </p>
              </div>
              <p className={bodyText}>{role.summary}</p>
            </div>
            <ButtonSecondary href={apply}>
              Apply now
              <span className="sr-only">: {role.title}</span>
            </ButtonSecondary>
          </header>

          <Divider />

          {role.description.length > 0 && (
            <>
              <div className="flex flex-col gap-10">
                {role.description.map((section) => (
                  <section key={section.heading} className="flex flex-col gap-4">
                    <h2 className="font-sans text-xl leading-none font-medium tracking-[-0.02em] text-black">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((p, i) => (
                      <p key={i} className={bodyText}>
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className={`list-disc space-y-2 pl-6 ${bodyText}`}>
                        {section.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
              <Divider />
            </>
          )}

          <section className="relative flex flex-col items-center gap-6">
            <h2 className="text-center font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
              Ready to help build the
              <br className="hidden sm:block" /> future of climate intelligence?
            </h2>
            <ButtonPrimary href={apply}>Apply now</ButtonPrimary>

            <div
              aria-hidden
              className="pointer-events-none absolute top-[-120px] right-[-120px] hidden h-[173.568px] w-[298.945px] items-center justify-center xl:flex"
            >
              <Image src="/images/sticker-careers.svg" alt="" width={284} height={140.001} className="rotate-7" />
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
