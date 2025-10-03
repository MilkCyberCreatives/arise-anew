// src/app/about/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-3xl text-white/90">
            Restoring balance, unleashing potential from within. We provide professional
            counselling, coaching and practical wellness interventions for individuals, couples,
            families and communities across South Africa.
          </p>
        </div>
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

      {/* Company Overview + Image */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-16">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Company Overview
          </h2>
          <p className="mt-4 text-slate-700">
            Arise Anew Wellness Group is a professional coaching and counselling organisation
            headquartered in Midrand, South Africa. We assist people navigate personal, emotional and
            social challenges through tailored programmes that restore balance, build resilience and
            empower purposeful living.
          </p>
          <p className="mt-3 text-slate-700">
            Our practice is rooted in the belief that wellbeing is holistic — it goes beyond
            physical health to include emotional stability, mental clarity and healthy relationships.
            Through counselling, coaching and practical interventions, we meet clients where they are
            and walk with them towards where they wish to be.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-600"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-lg hover:border-accent hover:text-brand"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Diagonal image card */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 [clip-path:polygon(0_0,100%_5%,100%_95%,0_100%)]">
            <Image
              src="/images/about/about-hero.jpg" /* place in /public/images/about/ */
              alt="Supportive counselling environment"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/25"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-slate-700">
                To build one of South Africa’s leading wellness organisations — empowering lives,
                promoting overall wellbeing and equipping people to thrive in every area of life.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-slate-700">
                To deliver accessible, professional and compassionate wellness solutions that
                transform lives — guiding clients towards healing, stronger relationships, healthy
                lifestyle choices and renewed alignment to purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Ethical Values with background image */}
      <section
        className="relative bg-slate-900 text-white bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/about/values-bg.jpg')" }} /* place file */
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Core Ethical Values</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            <li>
              <span className="font-semibold">Justice &amp; Fairness:</span> Services delivered equitably without discrimination.
            </li>
            <li>
              <span className="font-semibold">Confidentiality &amp; Privacy:</span> Safeguarding personal information and trust.
            </li>
            <li>
              <span className="font-semibold">Informed Consent:</span> Ensuring clients understand methods, risks and choices.
            </li>
            <li>
              <span className="font-semibold">Professional Boundaries:</span> Clear, healthy relationships free of conflicts of interest.
            </li>
            <li>
              <span className="font-semibold">Non-Maleficence:</span> Committed to “do no harm” — emotionally, psychologically, physically.
            </li>
            <li>
              <span className="font-semibold">Respect &amp; Dignity:</span> Valuing each person’s beliefs, culture and unique experience.
            </li>
          </ul>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="relative bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What Makes Us Special
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Comprehensive Support",
                desc: "Counselling, coaching and interventions under one roof for well-rounded care.",
              },
              {
                title: "Culturally Relevant",
                desc: "Services tailored to the realities of South African families, workplaces and communities.",
              },
              {
                title: "Qualified Professionals",
                desc: "Experienced, compassionate practitioners who walk the journey with our clients.",
              },
              {
                title: "Long-Term Impact",
                desc: "Immediate relief plus practical tools for resilience and personal growth.",
              },
              {
                title: "Accessible",
                desc: "Centrally located in Midrand with online sessions available across Gauteng and beyond.",
              },
              {
                title: "Person-Centred Care",
                desc: "We honour your story and pace; no one-size-fits-all programmes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
