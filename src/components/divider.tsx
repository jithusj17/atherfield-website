import Image from "next/image";

/** Thin horizontal rule using the Figma divider asset. */
export function Divider() {
  return <Image src="/images/divider.svg" alt="" width={740} height={1} className="h-px w-full" />;
}
