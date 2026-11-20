import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center bg-black font-mono text-sm leading-none font-medium whitespace-nowrap text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

/** Large black button with a white square bullet ("Button primary" in Figma). */
export function ButtonPrimary({ href, children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} gap-2.5 p-4 ${className}`}>
      <span aria-hidden className="size-1 bg-white" />
      {children}
    </Link>
  );
}

/** Compact black button ("Button secondary" in Figma). */
export function ButtonSecondary({ href, children, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} p-3 ${className}`}>
      {children}
    </Link>
  );
}
