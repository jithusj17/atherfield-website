import { ButtonPrimary } from "./buttons";

type CallToActionProps = {
  heading: string;
  buttonLabel: string;
  href: string;
  id?: string;
  tone?: "grey" | "white";
};

/** Full-width band with a centered heading and primary button ("Call to action" in Figma). */
export function CallToAction({ heading, buttonLabel, href, id, tone = "grey" }: CallToActionProps) {
  return (
    <aside
      id={id}
      className={`flex w-full scroll-mt-16 flex-col items-center gap-8 px-5 py-10 md:py-[120px] ${tone === "grey" ? "bg-surface" : "bg-white"}`}
    >
      <h2 className="type-heading w-full max-w-[1500px] text-center text-black">
        {heading}
      </h2>
      <ButtonPrimary href={href}>{buttonLabel}</ButtonPrimary>
    </aside>
  );
}
