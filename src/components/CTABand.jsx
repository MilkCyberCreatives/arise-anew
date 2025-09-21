"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTABand() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_100%_-20%,hsl(150_100%_23%/.18),transparent),radial-gradient(900px_500px_at_-10%_120%,hsl(142_60%_52%/.18),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand to-accent mix-blend-multiply opacity-90"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy + buttons */}
          <div>
            <h2
              id="cta-title"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Ready to talk? Let’s take the next step together.
            </h2>
            <p className="mt-2 max-w-2xl text-white/90">
              Book a confidential session or try the quick Life Test to get an instant
              snapshot of your wellness and practical next steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand shadow-lg hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Book a Session
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                Take the Life Test
              </Link>
            </div>
          </div>

          {/* Right: circular/organic photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/30 [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]">
  <Image
    src="/cta-session.jpg"
    alt="Counselling session"
    fill
    className="object-cover"
  />
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-white/10"
  />
</div>
        </div>
      </div>

      {/* Decorative wave divider */}
      <svg
        aria-hidden="true"
        className="w-full text-white"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,64 C240,96 360,24 720,64 C1080,104 1200,64 1440,72 L1440,90 L0,90 Z" />
      </svg>
    </section>
  );
}
