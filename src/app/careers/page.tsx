import type { Metadata } from "next";
import { ButtonSecondary } from "@/components/buttons";
import { DisplayHeading } from "@/components/display-heading";
import { MetaLine } from "@/components/meta-line";
import { applyHref, roles } from "@/data/roles";

export const metadata: Metadata = {
  title: "Careers | Aetherfield",
  description: "Open roles at Aetherfield. Help build the intelligence layer for climate action.",
};

const card = "flex flex-col items-start gap-6 rounded-2xl p-6 md:flex-row md:p-10";

/** Title, details and summary shared by role cards and the open-application card. */
function RoleText({
  title,
  details,
  summary,
  mobileGap = "gap-4",
}: {
  title: string;
  details: string[];
  summary: string;
  /** Gap between the title block and summary on mobile; the Figma Mobile frame uses 16px for roles, 24px for the open application. */
  mobileGap?: "gap-4" | "gap-6";
}) {
  return (
    <div className={`flex w-full min-w-0 flex-1 flex-col md:gap-6 ${mobileGap}`}>
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
    <main className="flex w-full flex-col items-center gap-8 bg-gradient-to-b from-sky to-cream px-5 py-[120px] md:gap-10 md:pt-[140px]">
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
            mobileGap="gap-6"
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
