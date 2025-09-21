"use client";

import { ShieldCheck, HeartHandshake, MessagesSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    icon: HeartHandshake,
    title: "Safe, confidential space",
    desc: "Judgement-free sessions where you can talk openly and feel supported.",
  },
  {
    icon: MessagesSquare,
    title: "Practical tools that last",
    desc: "Simple techniques for stress, relationships and daily balance you’ll keep using.",
  },
  {
    icon: ShieldCheck,
    title: "Guidance you can trust",
    desc: "Qualified, person-centred care grounded in compassion and ethics.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="relative overflow-hidden">
      {/* subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-brand">
              How we help people
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Support that restores hope and builds resilience
            </h2>
            <p className="mt-4 text-slate-600">
              Behind every challenge is a person, a family, a community. Our work is not only about
              solving problems — it’s about empowering people with practical, sustainable solutions
              to live purposeful, balanced lives.
            </p>

            {/* micro-cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-brand transition group-hover:bg-accent/25">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-0 transition group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* small CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-lg hover:border-accent hover:text-brand"
              >
                Book a Session
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-600"
              >
                Take the Life Test
              </Link>
            </div>
          </div>

          {/* Visual (optional image, diagonal cut to match CTA) */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]">
              <Image
                src="/how-we-help.jpg"  // ✅ place this file directly in /public/ (or change name)
                alt="Supportive counselling in session"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <svg
        aria-hidden="true"
        className="w-full text-brand"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,80 C240,0 360,120 720,64 C1080,8 1200,80 1440,48 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
