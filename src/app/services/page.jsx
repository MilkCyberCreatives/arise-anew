// src/app/services/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: "counselling",
    title: "Counselling Services",
    items: [
      {
        id: "individual",
        title: "Person-Centred Individual Counselling",
        desc: "A safe, confidential space grounded in the Person-Centred Approach to explore personal challenges, build coping skills and move towards healing and growth.",
        image: "/images/services/services1.jpg",
      },
      {
        id: "marriage",
        title: "Couple / Marriage Counselling",
        desc: "Strengthen connection, improve communication and resolve conflict constructively, rebuilding trust and creating a healthier, happier relationship.",
        image: "/images/services/services2.jpg",
      },
      {
        id: "premarital",
        title: "Pre-Marital Counselling",
        desc: "Prepare for marriage with realistic expectations, deeper emotional bonds, shared values and practical tools for a strong foundation.",
        image: "/images/services/services3.jpg",
      },
      {
        id: "grief",
        title: "Grief & Bereavement Counselling",
        desc: "Compassionate care for individuals and families processing loss — find comfort, meaning and strength as you rebuild life after goodbye.",
        image: "/images/services/services4.jpg",
      },
      {
        id: "worklife",
        title: "Work-Life Balance Programme",
        desc: "Tailored support to reduce burnout, manage stress and create sustainable routines that align work, health and family commitments.",
        image: "/images/services/services5.jpg",
      },
      {
        id: "mental",
        title: "Mental & Emotional Health Support",
        desc: "Ongoing guidance to improve emotional regulation, resilience and wellbeing, with practical, evidence-informed strategies.",
        image: "/images/services/services6.jpg",
      },
    ],
  },
  {
    id: "family-crisis",
    title: "Family & Crisis Support",
    items: [
      {
        id: "family-crisis",
        title: "Family Crisis Support",
        desc: "Specialised intervention to stabilise conflict, restore communication and guide families toward harmony during breakdown or trauma.",
        image: "/images/services/services7.jpg",
      },
      {
        id: "postpartum",
        title: "Postpartum Guidance",
        desc: "Support for mothers and families navigating life after childbirth — emotional changes, identity, bonding and healthy adjustments.",
        image: "/images/services/services8.jpg",
      },
      {
        id: "addiction",
        title: "Substance Abuse / Addiction Interventions",
        desc: "Structured interventions, counselling and referrals that help individuals and families begin recovery and rebuild their lives.",
        image: "/images/services/services9.jpg",
      },
      {
        id: "stress",
        title: "Stress Management",
        desc: "Identify triggers, develop practical coping mechanisms and embed healthier routines that lower stress and promote total wellbeing.",
        image: "/images/services/services10.jpg",
      },
    ],
  },
  {
    id: "coaching",
    title: "Coaching & Personal Development",
    items: [
      {
        id: "career",
        title: "Career Coaching",
        desc: "Clarity and confidence at any career stage — choose a path, plan growth and navigate workplace challenges with practical strategies.",
        image: "/images/services/services11.jpg",
      },
      {
        id: "lifestyle",
        title: "Lifestyle & Behavioural Coaching",
        desc: "Adopt healthier habits and positive behaviours — time management, personal discipline and daily choices that sustain wellbeing.",
        image: "/images/services/services12.jpg",
      },
      {
        id: "youth",
        title: "Youth Coaching",
        desc: "Support for preteens and teens to build life skills, resilience, confidence and direction while navigating peer pressure and academics.",
        image: "/images/services/services13.jpg",
      },
      {
        id: "physical",
        title: "Physical Wellness Guidance",
        desc: "Connect movement, rest and nutrition to mental and emotional health with realistic plans that fit your lifestyle.",
        image: "/images/services/services14.jpg",
      },
      {
        id: "courtship",
        title: "Courtship & Pre-Dating Counselling",
        desc: "Thoughtful guidance for entering new relationships — understand compatibility and avoid common pitfalls with healthy foundations.",
        image: "/images/services/services15.jpg",
      },
    ],
  },
  {
    id: "spiritual",
    title: "Faith-Based Support",
    items: [
      {
        id: "christian",
        title: "Christian Spiritual Counselling",
        desc: "Christ-centred counselling that integrates psychological principles with biblical wisdom and spiritual practices for healing and growth.",
        image: "/images/services/services16.jpg",
      },
    ],
  },
];

function ServiceCard({ title, desc, image, anchor }) {
  return (
    <article
      id={anchor}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="text-sm font-semibold text-brand hover:underline"
            aria-label={`Enquire about ${title}`}
          >
            Enquire →
          </Link>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-0 transition group-hover:opacity-100"
      />
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Professional counselling, coaching and crisis support — tailored to restore balance,
            build resilience and empower purposeful living.
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

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="mb-14 scroll-mt-24" id={cat.id}>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {cat.title}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((s) => (
                <ServiceCard
                  key={s.id}
                  title={s.title}
                  desc={s.desc}
                  image={s.image}
                  anchor={s.id}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Page CTA */}
        <div className="mt-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-600"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
