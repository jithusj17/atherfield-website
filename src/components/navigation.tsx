"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getStartedHref, navLinks } from "./nav-links";

function GetStartedLink() {
  return (
    <Link
      href={getStartedHref}
      className="inline-flex items-center gap-1 font-sans text-base leading-[1.2] font-medium text-black hover:opacity-70"
    >
      Get started
      <span className="flex w-3.5 items-center">
        <Image src="/images/arrow.svg" alt="" width={9.5} height={11.8283} className="-rotate-90" />
      </span>
    </Link>
  );
}

/**
 * Site navigation. Desktop shows a link row; below 768px it becomes the
 * "Navigation mobile" component from Figma: a +/× toggle that opens a white
 * dropdown with large links and a full-width Get started button.
 */
export function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 ${
        open
          ? "bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.12),0px_8px_8px_-4px_rgba(0,0,0,0.08)] md:bg-transparent md:shadow-none"
          : ""
      }`}
    >
      <div className="flex h-[60px] items-center justify-between p-5 backdrop-blur-[32px]">
        <Link href="/" aria-label="Aetherfield home" onClick={close} className="flex h-5 items-center">
          <Image src="/images/logo-nav.svg" alt="Aetherfield company logo" width={122} height={20} priority />
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
          className="size-6 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Image src={open ? "/images/menu-close.svg" : "/images/menu-open.svg"} alt="" width={24} height={24} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="flex flex-col gap-6 px-5 pb-5 md:hidden">
          <ul>
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`border-divider py-6 ${i > 0 ? "border-t" : ""} ${i === navLinks.length - 1 ? "border-b" : ""}`}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  className="block font-sans text-[40px] leading-none font-medium tracking-[-0.03em] text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={getStartedHref}
            onClick={close}
            className="flex w-full items-center justify-center bg-black p-4 font-mono text-xl leading-none font-medium text-white"
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}
