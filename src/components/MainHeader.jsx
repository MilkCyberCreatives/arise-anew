"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/assessment", label: "Life Assessment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/arise-logo.svg"
            alt="Arise Anew Wellness Group"
            width={72}
            height={72}
            priority
            className="h-18 w-18"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-accent hover:text-brand"
          >
            Book a Session
          </Link>
          <Link
            href="/assessment"
            className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            Take the Life Test
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white/85 text-slate-700 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <nav
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
            aria-label="Mobile"
          >
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-accent/10 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-center text-sm font-medium text-slate-700 hover:border-accent hover:text-brand"
                >
                  Book a Session
                </Link>
                <Link
                  href="/assessment"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-brand px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-600"
                >
                  Life Test
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
