"use client";

import Link from "next/link";
import { HeartHandshake, Users2, Handshake, AlarmClock, Baby, FlaskConical, Brain, BriefcaseBusiness, Sparkles, GraduationCap, Dumbbell, Heart } from "lucide-react";

const services = [
  // Counselling Services
  {
    title: "Person-Centred Individual Counselling",
    desc: "Safe, confidential sessions focused on growth, healing and practical coping skills.",
    icon: HeartHandshake,
    href: "/services#individual",
    img: "/svc-individual.jpg" // optional: place in /public or omit to use icon
  },
  {
    title: "Couple / Marriage Counselling",
    desc: "Strengthen connection, improve communication and rebuild trust together.",
    icon: Users2,
    href: "/services#marriage",
    img: "/svc-marriage.jpg"
  },
  {
    title: "Pre-Marital Counselling",
    desc: "Set healthy expectations and build strong foundations for your marriage.",
    icon: Handshake,
    href: "/services#premarital",
    img: "/svc-premarital.jpg"
  },
  {
    title: "Grief & Bereavement",
    desc: "Compassionate support as you process loss and rebuild life after goodbye.",
    icon: Heart,
    href: "/services#grief",
    img: "/svc-grief.jpg"
  },
  {
    title: "Work-Life Balance Programme",
    desc: "Reduce burnout, manage stress and create sustainable daily rhythms.",
    icon: AlarmClock,
    href: "/services#worklife",
    img: "/svc-worklife.jpg"
  },
  {
    title: "Mental & Emotional Health Support",
    desc: "Ongoing guidance to strengthen resilience and emotional wellbeing.",
    icon: Brain,
    href: "/services#mental",
    img: "/svc-mental.jpg"
  },

  // Family & Crisis Support
  {
    title: "Family Crisis Support",
    desc: "Stabilise conflict, restore communication and work towards harmony.",
    icon: Users2,
    href: "/services#family-crisis",
    img: "/svc-family.jpg"
  },
  {
    title: "Postpartum Guidance",
    desc: "Support for new mothers and families through emotional changes and adjustment.",
    icon: Baby,
    href: "/services#postpartum",
    img: "/svc-postpartum.jpg"
  },
  {
    title: "Substance Abuse / Addiction Interventions",
    desc: "Structured interventions with referrals to help begin recovery.",
    icon: FlaskConical,
    href: "/services#addiction",
    img: "/svc-addiction.jpg"
  },
  {
    title: "Stress Management",
    desc: "Identify triggers and build practical, healthy coping routines.",
    icon: AlarmClock,
    href: "/services#stress",
    img: "/svc-stress.jpg"
  },

  // Coaching & Personal Development
  {
    title: "Career Coaching",
    desc: "Clarity, confidence and strategies for growth at any career stage.",
    icon: BriefcaseBusiness,
    href: "/services#career",
    img: "/svc-career.jpg"
  },
  {
    title: "Lifestyle & Behavioural Coaching",
    desc: "Adopt habits that support long-term wellbeing and purpose.",
    icon: Sparkles,
    href: "/services#lifestyle",
    img: "/svc-lifestyle.jpg"
  },
  {
    title: "Youth Coaching",
    desc: "Build confidence, resilience and direction for preteens & teens.",
    icon: GraduationCap,
    href: "/services#youth",
    img: "/svc-youth.jpg"
  },
  {
    title: "Physical Wellness Guidance",
    desc: "Connect movement and routines to mental and emotional health.",
    icon: Dumbbell,
    href: "/services#physical",
    img: "/svc-physical.jpg"
  },
  {
    title: "Courtship & Pre-Dating Counselling",
    desc: "Practical tools to form healthy, compatible relationships.",
    icon: HeartHandshake,
    href: "/services#courtship",
    img: "/svc-courtship.jpg"
  },
  {
    title: "Christian Spiritual Counselling",
    desc: "Christ-centred guidance integrating psychology with biblical wisdom.",
    icon: Heart,
    href: "/services#christian",
    img: "/svc-christian.jpg"
  },
];

function ServiceCard({ title, desc, icon: Icon, href, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      {/* If you later drop images into /public (e.g. /svc-career.jpg), you can add a top image block here.
          For now we keep it icon-only for speed. */}
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-brand transition group-hover:bg-accent/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <div className="mt-4">
        <Link
          href={href}
          className="text-sm font-semibold text-brand hover:underline"
          aria-label={`Learn more about ${title}`}
        >
          Learn more →
        </Link>
      </div>

      {/* subtle accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-0 transition group-hover:opacity-100"
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-3 text-slate-600">
            Coaching and counselling that restores balance, builds resilience and empowers people to thrive.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

      {/* decorative wave separator */}
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
