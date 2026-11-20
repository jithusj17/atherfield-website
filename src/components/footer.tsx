import Image from "next/image";
import Link from "next/link";
import { getStartedHref, navLinks } from "./nav-links";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 bg-footer p-5">
      <div className="flex w-full flex-col gap-4 text-xl text-footer-text sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-5 font-sans leading-none font-medium tracking-[-0.4px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={getStartedHref} className="hover:opacity-70">
              Get started
            </Link>
          </li>
        </ul>
        <p className="font-serif leading-[1.2] tracking-[-0.8px] whitespace-pre sm:text-right">
          {"© 2025  ·  All rights reserved"}
        </p>
      </div>

      <div aria-hidden className="relative h-[160px] w-full opacity-90 mix-blend-multiply sm:h-[280px]">
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
