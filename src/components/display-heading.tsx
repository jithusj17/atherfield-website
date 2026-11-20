/** Two-line display heading: serif line over sans line (Header 1 + Header 2 styles in Figma). */
export function DisplayHeading({
  serif,
  sans,
  as: Tag = "h2",
}: {
  serif: string;
  sans: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag className="flex w-full flex-col items-center text-center text-[48px] leading-none text-black sm:text-[64px] lg:text-[80px]">
      <span className="mb-[-0.1em] block font-serif tracking-[-0.04em]">{serif}</span>
      <span className="block font-sans font-normal tracking-[-0.05em]">{sans}</span>
    </Tag>
  );
}
