/**
 * Two-line display heading: serif line over sans line (Header 1 + Header 2 styles in Figma).
 * 36px on mobile (Figma Mobile frame), growing to 80px on desktop.
 */
export function DisplayHeading({
  serif,
  sans,
  as: Tag = "h2",
  fitOnMobile = false,
}: {
  serif: string;
  sans: string;
  as?: "h1" | "h2";
  /**
   * Shrink slightly on narrow phones so a long serif line stays on one line, as in Figma.
   * Needed because Source Serif 4 renders about 6% wider than the Source Serif Pro used in
   * the design (the Home headline's first line is 357px at 36px, but a 375px phone has 335px).
   */
  fitOnMobile?: boolean;
}) {
  const mobileSize = fitOnMobile ? "text-[length:min(36px,calc((100vw-40px)*0.1))]" : "text-[36px]";
  return (
    <Tag
      className={`flex w-full flex-col items-center text-center leading-none text-black md:text-[64px] lg:text-[80px] ${mobileSize}`}
    >
      <span className="block font-serif tracking-[-0.04em] md:mb-[-0.1em]">{serif}</span>
      <span className="block font-sans font-normal tracking-[-0.02em] md:tracking-[-0.05em]">{sans}</span>
    </Tag>
  );
}
