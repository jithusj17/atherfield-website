"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getStartedHref, navLinks } from "./nav-links";

function GetStartedLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href={getStartedHref}
      onClick={onClick}
      className="inline-flex items-center gap-1 font-sans text-base leading-[1.2] font-medium text-black hover:opacity-70"
    >
      Get started
      <span className="flex w-3.5 items-center">
        <Image
          src="/images/arrow.svg"
          alt=""
          width={9.5}
          height={11.8283}
          className="-rotate-90"
        />
      </span>
    </Link>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 backdrop-blur-[32px]">
      <div className="flex h-[60px] items-center justify-between p-5">
        <Link href="/" aria-label="Aetherfield home" className="flex h-5 items-center">
          <Image
            src="/images/logo-nav.svg"
            alt="Aetherfield company logo"
            width={122}
            height={20}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sans text-base leading-[1.2] font-medium text-black hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <GetStartedLink />
          </li>
        </ul>

        <button
          type="button"
          className="flex size-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 bg-black transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-black transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-5 border-t border-divider bg-white/80 p-5 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} onClick={close} className="font-sans text-2xl font-medium text-black">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <GetStartedLink onClick={close} />
          </li>
        </ul>
      )}
    </nav>
  );
}
