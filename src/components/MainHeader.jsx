// src/components/MainHeader.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) && href !== "/";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-brand"
          : "text-slate-700 hover:text-brand hover:bg-accent/10"
      }`}
    >
      {children}
    </Link>
  );
}

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Arise Anew Wellness Group">
          <Image
            src="/arise-logo.svg"
            alt="Arise Anew logo"
            width={200}   // enlarged
            height={70}   // enlarged
            priority
            className="h-20 w-auto"  // enlarged height
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/assessment">Life Assessment</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <div className="ml-3 flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-accent hover:text-brand"
            >
              Book a Session
            </Link>
            <Link
              href="/assessment"
              className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
            >
              Take the Life Test
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-accent/10 hover:text-brand md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            aria-hidden="true"
            onClick={close}
          />
          <div
            className="fixed inset-x-0 top-0 z-50 origin-top animate-[slideDown_200ms_ease-out] rounded-b-2xl border-b border-slate-200 bg-white p-5 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-3 flex items-center justify-between">
              <Image
                src="/arise-logo.svg"
                alt="Arise Anew logo"
                width={200}   // enlarged
                height={70}
                className="h-20 w-auto"
                priority
              />
              <button
                type="button"
                className="rounded-md p-2 text-slate-700 hover:bg-accent/10 hover:text-brand"
                aria-label="Close menu"
                onClick={close}
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <nav className="grid gap-2" aria-label="Mobile">
              <NavLink href="/" onClick={close}>Home</NavLink>
              <NavLink href="/services" onClick={close}>Services</NavLink>
              <NavLink href="/assessment" onClick={close}>Life Assessment</NavLink>
              <NavLink href="/about" onClick={close}>About</NavLink>
              <NavLink href="/contact" onClick={close}>Contact</NavLink>
            </nav>

            <div className="mt-4 grid gap-2">
              <Link
                href="/contact"
                onClick={close}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-800 shadow-sm hover:border-accent hover:text-brand"
              >
                Book a Session
              </Link>
              <Link
                href="/assessment"
                onClick={close}
                className="w-full rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
              >
                Take the Life Test
              </Link>
              <Link
                href="https://wa.me/27659331865"
                target="_blank"
                onClick={close}
                className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from { transform: scaleY(0.96); opacity: 0; }
          to { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </header>
  );
}
