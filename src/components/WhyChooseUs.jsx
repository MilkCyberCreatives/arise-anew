// src/components/WhyChooseUs.jsx
"use client";

import { ShieldCheck, HandHeart, Target, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

const points = [
  {
    icon: HandHeart,
    title: "Comprehensive Support",
    desc: "Counselling, coaching and interventions under one roof for well-rounded care.",
  },
  {
    icon: Target,
    title: "Person-Centred & Culturally Relevant",
    desc: "Tailored to the realities of South African families, workplaces and communities.",
  },
  {
    icon: Users,
    title: "Qualified Professionals",
    desc: "Experienced, compassionate practitioners who walk the journey with you.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Impact",
    desc: "Practical tools for resilience, growth and sustained wellbeing.",
  },
  {
    icon: MapPin,
    title: "Accessible",
    desc: "Centrally located in Midrand with online sessions available across SA.",
  },
  {
    icon: Clock,
    title: "Confidential & Timely",
    desc: "Safe, private support with flexible scheduling options.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-brand">
              What makes us special
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Holistic care. Real results. Lasting change.
            </h2>
            <p className="mt-4 text-slate-600">
              At Arise Anew Wellness Group, we recognise that every client’s story is unique—that’s why we don’t offer
              one-size-fits-all solutions. Our person-centred approach delivers meaningful outcomes while honouring your
              values, privacy and pace.
            </p>

            {/* Accreditations strip */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-700">Professional memberships & accreditations</p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <AccreditationLogo src="/comensa.png" alt="COMENSA" label="COMENSA" />
                <AccreditationLogo src="/aschp.png" alt="ASCHP" label="ASCHP" />
                {/* Removed EAPSA */}
              </div>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, desc }) => (
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
        </div>
      </div>

      {/* wave separator */}
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

function AccreditationLogo({ src, alt, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2">
      <div className="relative h-6 w-6 overflow-hidden rounded">
        <Image src={src} alt={alt} fill className="object-contain" sizes="24px" />
      </div>
      <span className="text-xs font-medium text-slate-600">{label}</span>
    </div>
  );
}
