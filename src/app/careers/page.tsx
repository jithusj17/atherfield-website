import type { Metadata } from "next";
import { ButtonSecondary } from "@/components/buttons";
import { DisplayHeading } from "@/components/display-heading";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { roles } from "@/data/roles";

export const metadata: Metadata = {
  title: "Careers | Aetherfield",
  description: "Open roles at Aetherfield. Help build the intelligence layer for climate action.",
};

const roleTitle = "font-sans text-xl leading-none font-medium tracking-[-0.02em] text-black";
const roleMeta = "flex gap-2 font-mono text-sm leading-none text-muted";
const roleBody = "font-serif text-xl leading-[1.2] tracking-[-0.04em] text-black";
const card = "flex flex-col items-start gap-6 rounded-2xl p-6 sm:flex-row sm:p-10";

export default function CareersPage() {
  return (
    <>
      <Navigation />

      <main className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-sky to-cream px-5 pt-[120px] pb-20 md:pt-[140px] md:pb-[120px]">
        <div className="w-full max-w-[1030px]">
          <DisplayHeading as="h1" serif="Careers at" sans="Aetherfield" />
        </div>

        <section aria-label="Open roles" className="flex w-full max-w-[820px] flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {roles.map((role) => (
              <li key={role.slug} className={`${card} bg-white`}>
                <div className="flex min-w-0 flex-1 flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h2 className={roleTitle}>{role.title}</h2>
                    <p className={roleMeta}>
                      <span>{role.type}</span>
                      <span aria-hidden>·</span>
                      <span>{role.location}</span>
                    </p>
                  </div>
                  <p className={roleBody}>{role.summary}</p>
                </div>
                <ButtonSecondary href={`/careers/${role.slug}`}>
                  View role
                  <span className="sr-only">: {role.title}</span>
                </ButtonSecondary>
              </li>
            ))}
          </ul>

          <div id="open-application" className={`${card} min-h-[194px] border border-dashed border-black`}>
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className={roleTitle}>Open application</h2>
                <p className={roleMeta}>
                  <span>Full-time</span>
                  <span aria-hidden>·</span>
                  <span>Denver, CO</span>
                </p>
              </div>
              <p className={roleBody}>Don’t see your role available? Apply for an open application!</p>
            </div>
            <ButtonSecondary href="mailto:careers@aetherfield.com?subject=Open%20application">
              Apply now
              <span className="sr-only">: send an open application</span>
            </ButtonSecondary>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
