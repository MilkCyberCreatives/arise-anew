"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background blobs (hidden from screen readers) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        {/* Left copy */}
        <div>
          {/* Tagline chip (optional – from your profile) */}

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Your <span className="text-brand">Wellness Partner</span> in Midrand
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Coaching and counselling that helps you navigate stress, relationships, and life
            changes—so you can thrive with clarity and purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-600"
            >
              Take the Life Test
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-soft hover:border-accent hover:text-brand"
            >
              View Our Services
            </Link>
          </div>

          {/* trust/quick info */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Confidential & Compassionate</p>
              <p className="mt-1 text-sm text-slate-600">Safe, private sessions in-person or online.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Qualified Professionals</p>
              <p className="mt-1 text-sm text-slate-600">Evidence-informed, person-centred care.</p>
            </div>
          </div>
        </div>

        {/* Right image card with angled mask */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200">
            <Image
              src="/hero-counselling.jpg"  // ✅ place this file directly in /public/
              alt="Counselling session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
              className="object-cover"
            />
            {/* angled overlay to mimic reference diagonal */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/40 mix-blend-overlay"
            />
          </div>

          {/* decorative swoosh */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 text-accent/30"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M0,160 C60,140 120,220 200,120 L200,200 L0,200 Z" />
          </svg>
        </div>
      </div>

      {/* bottom wave divider like the reference */}
      <svg
        aria-hidden="true"
        className="mt-16 w-full text-brand"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,128 360,0 720,64 C1080,128 1200,64 1440,80 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
