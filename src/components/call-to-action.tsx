import { ButtonPrimary } from "./buttons";

type CallToActionProps = {
  heading: string;
  buttonLabel: string;
  href: string;
  id?: string;
};

/** Grey full-width band with a centered heading and primary button ("Call to action" in Figma). */
export function CallToAction({ heading, buttonLabel, href, id }: CallToActionProps) {
  return (
    <aside
      id={id}
      className="flex w-full scroll-mt-16 flex-col items-center gap-8 bg-surface px-5 py-20 md:py-[120px]"
    >
      <h2 className="w-full max-w-[1500px] text-center font-sans text-[32px] leading-none font-medium tracking-[-0.03em] text-black md:text-[40px]">
        {heading}
      </h2>
      <ButtonPrimary href={href}>{buttonLabel}</ButtonPrimary>
    </aside>
  );
}
