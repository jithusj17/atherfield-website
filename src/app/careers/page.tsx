import type { Metadata } from "next";
import { ButtonSecondary } from "@/components/buttons";
import { DisplayHeading } from "@/components/display-heading";
import { MetaLine } from "@/components/meta-line";
import { applyHref, roles } from "@/data/roles";

export const metadata: Metadata = {
  title: "Careers | Aetherfield",
  description: "Open roles at Aetherfield. Help build the intelligence layer for climate action.",
};

const card = "flex flex-col items-start gap-6 rounded-2xl p-6 sm:flex-row sm:p-10";

/** Title, details and summary shared by role cards and the open-application card. */
function RoleText({ title, details, summary }: { title: string; details: string[]; summary: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="type-title text-black">{title}</h2>
        <MetaLine items={details} />
      </div>
      <p className="type-body text-black">{summary}</p>
    </div>
  );
}

export default function CareersPage() {
  return (
    <main className="flex w-full flex-col items-center gap-10 bg-gradient-to-b from-sky to-cream px-5 pt-[120px] pb-20 md:pt-[140px] md:pb-[120px]">
      <div className="w-full max-w-[1030px]">
        <DisplayHeading as="h1" serif="Careers at" sans="Aetherfield" />
      </div>

      <section aria-label="Open roles" className="flex w-full max-w-[820px] flex-col gap-4">
        <ul className="flex flex-col gap-4">
          {roles.map((role) => (
            <li key={role.slug} className={`${card} bg-white`}>
              <RoleText title={role.title} details={[role.type, role.location]} summary={role.summary} />
              <ButtonSecondary href={`/careers/${role.slug}`}>
                View role
                <span className="sr-only">: {role.title}</span>
              </ButtonSecondary>
            </li>
          ))}
        </ul>

        <div id="open-application" className={`${card} min-h-[194px] border border-dashed border-black`}>
          <RoleText
            title="Open application"
            details={["Full-time", "Denver, CO"]}
            summary="Don’t see your role available? Apply for an open application!"
          />
          <ButtonSecondary href={applyHref("Open application")}>
            Apply now
            <span className="sr-only">: send an open application</span>
          </ButtonSecondary>
        </div>
      </section>
    </main>
  );
}
