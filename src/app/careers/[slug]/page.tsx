import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonPrimary, ButtonSecondary } from "@/components/buttons";
import { Divider } from "@/components/divider";
import { MetaLine } from "@/components/meta-line";
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

export default async function RolePage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const apply = applyHref(`Application: ${role.title}`);

  return (
    <main className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-sky to-cream px-5 pt-[120px] pb-20 md:pt-[140px] md:pb-[120px]">
      <Link href="/careers" className="type-body text-black hover:underline">
        <span aria-hidden>← </span>Back to Careers
      </Link>

      <article className="relative flex w-full max-w-[820px] flex-col gap-12 rounded-2xl bg-white p-6 sm:p-10">
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="type-heading text-black">{role.title}</h1>
              <MetaLine variant="body" items={[role.type, role.location]} />
            </div>
            <p className="type-body text-black">{role.summary}</p>
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
                  <h2 className="type-title text-black">{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="type-body text-black">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="type-body list-disc space-y-2 pl-6 text-black">
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
          <h2 className="type-heading text-center text-black">
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
  );
}
