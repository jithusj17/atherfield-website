import Image from "next/image";
import Link from "next/link";
import { getStartedHref, navLinks } from "./nav-links";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-footer px-5 pt-10 pb-5 md:gap-5 md:pt-5">
      <div className="flex w-full flex-col gap-10 text-footer-text md:flex-row md:items-center md:justify-between md:gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-5">
          {[...navLinks, { label: "Get started", href: getStartedHref }].map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="type-title-lg block hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="type-body-lg text-center whitespace-pre md:text-right">
          {"© 2025  ·  All rights reserved"}
        </p>
      </div>

      <div aria-hidden className="relative h-[120px] w-full opacity-90 mix-blend-multiply md:h-[280px]">
        <Image src="/images/footer.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <Image
        src="/images/logo-footer.svg"
        alt="Aetherfield company logo"
        width={1240}
        height={204}
        className="h-auto w-full"
      />
    </footer>
  );
}
