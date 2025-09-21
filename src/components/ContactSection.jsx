"use client";

import Link from "next/link";

const ADDRESS_TEXT = "44 Richards Drive, Leogem Business Park, Midrand, 1682";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=44+Richards+Drive,+Leogem+Business+Park,+Midrand,+1682";

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      {/* soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: contact details */}
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-brand">
              Contact us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              We’re ready to help
            </h2>
            <p className="mt-3 text-slate-600">
              Reach out to book a confidential session or ask any question. In-person appointments
              in Midrand and secure online sessions across South Africa.
            </p>

            <dl className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <dt className="sr-only">Telephone</dt>
                <svg
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 text-brand"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.2z" />
                </svg>
                <dd>
                  <Link
                    href="tel:+27659331865"
                    className="text-sm font-semibold text-slate-900 hover:text-brand"
                  >
                    065 933 1865
                  </Link>
                  <p className="text-xs text-slate-600">Mon–Fri, 08:00–17:00</p>
                </dd>
              </div>

              <div className="flex items-start gap-3">
                <dt className="sr-only">Email</dt>
                <svg
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 text-brand"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.2l-10 5.6L2 6.2V6zm0 3.3V18a2 2 0 002 2h16a2 2 0 002-2V9.3l-9.4 5.2a2 2 0 01-1.9 0L2 9.3z" />
                </svg>
                <dd>
                  <Link
                    href="mailto:info@ariseanew.co.za"
                    className="text-sm font-semibold text-slate-900 hover:text-brand"
                  >
                    info@ariseanew.co.za
                  </Link>
                  <p className="text-xs text-slate-600">We reply within one business day</p>
                </dd>
              </div>

              <div className="flex items-start gap-3">
                <dt className="sr-only">Address</dt>
                <svg
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 text-brand"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <dd className="text-sm text-slate-700">
                  {ADDRESS_TEXT}
                  <div>
                    <Link
                      href={MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-brand hover:underline"
                    >
                      View on Google Maps →
                    </Link>
                  </div>
                </dd>
              </div>
            </dl>

            {/* Quick actions */}
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

          {/* Right: live Google Map (diagonal cut to match your style) */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]">
              <iframe
                title="Arise Anew Wellness Group Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14344.03136827523!2d28.115641168378257!3d-26.000560499211517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s44%20Richards%20Drive%2C%20Leogem%20Business%20Park%2C%20Midrand%2C%201682!5e0!3m2!1sen!2sza!4v1758464907647!5m2!1sen!2sza"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
                style={{ border: 0 }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20"
              />
            </div>

            {/* Map CTA pill */}
            <div className="pointer-events-none absolute -bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-lg ring-1 ring-slate-200">
              Midrand • In-person & online
            </div>
          </div>
        </div>
      </div>

      {/* section divider */}
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
