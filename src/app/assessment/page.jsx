// src/app/assessment/page.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

/**
 * Life Assessment – quick self-check across 5 wellbeing domains:
 * Stress, Mood, Sleep, Relationships, Purpose.
 * Scale: 0 (Never) … 4 (Always). Higher = more difficulty.
 * We invert to a “wellbeing score” when reporting.
 */

// -------------------- Config --------------------
const DOMAINS = [
  {
    key: "stress",
    title: "Stress & Burnout",
    questions: [
      "I feel overwhelmed by daily responsibilities.",
      "I struggle to switch off or relax.",
      "I often feel on edge or irritable.",
    ],
  },
  {
    key: "mood",
    title: "Mood & Emotions",
    questions: [
      "I feel low or down more days than not.",
      "I find it hard to enjoy things I used to enjoy.",
      "I feel anxious or worried most of the time.",
    ],
  },
  {
    key: "sleep",
    title: "Sleep & Energy",
    questions: [
      "I have difficulty falling or staying asleep.",
      "I wake up feeling tired or unrefreshed.",
      "My energy dips affect my day-to-day functioning.",
    ],
  },
  {
    key: "relationships",
    title: "Relationships",
    questions: [
      "Conflict or distance is affecting an important relationship.",
      "I struggle to communicate my needs and boundaries.",
      "Family or parenting pressures feel hard to manage.",
    ],
  },
  {
    key: "purpose",
    title: "Purpose & Balance",
    questions: [
      "I feel stuck, demotivated or unsure of my direction.",
      "My work–life balance feels unhealthy or unsustainable.",
      "I’m not living in line with my values or faith.",
    ],
  },
];

// 0–4 labels
const SCALE = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Always" },
];

// -------------------- Helpers --------------------
function calcResults(answers) {
  // answers: { [domainIndex_questionIndex]: 0..4 }
  // domain score (difficulty): average 0..4
  // wellbeing score: 100 - (difficulty/4 * 100)
  const perDomain = DOMAINS.map((d, di) => {
    const vals = d.questions.map((_, qi) => answers[`${di}_${qi}`]).filter((v) => v !== undefined);
    const filled = vals.length;
    const avg = filled ? vals.reduce((a, b) => a + b, 0) / filled : 0;
    const wellbeing = Math.round(100 - (avg / 4) * 100);
    return { key: d.key, title: d.title, difficultyAvg: avg, wellbeing };
  });

  const overallDifficulty =
    perDomain.reduce((a, d) => a + d.difficultyAvg, 0) / Math.max(perDomain.length, 1);
  const overallWellbeing = Math.round(100 - (overallDifficulty / 4) * 100);

  return { perDomain, overallWellbeing, overallDifficulty };
}

function insightFromScore(score) {
  if (score >= 80) return { tone: "positive", text: "Strong overall wellbeing. Keep your routines going." };
  if (score >= 60) return { tone: "ok", text: "Generally okay, with some areas to strengthen." };
  if (score >= 40) return { tone: "caution", text: "Noticeable pressure points. Consider guided support." };
  return { tone: "attention", text: "High strain detected. We recommend speaking with a professional." };
}

// -------------------- Components --------------------
function ProgressBar({ percent }) {
  return (
    <div className="h-2 w-full rounded-full bg-slate-200">
      <div
        className="h-2 rounded-full bg-brand transition-[width]"
        style={{ width: `${percent}%` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
}

export default function LifeAssessmentPage() {
  const [answers, setAnswers] = useState({});
  const totalQuestions = DOMAINS.reduce((acc, d) => acc + d.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const percent = Math.round((answeredCount / totalQuestions) * 100);

  const { perDomain, overallWellbeing } = useMemo(() => calcResults(answers), [answers]);
  const overallInsight = useMemo(() => insightFromScore(overallWellbeing), [overallWellbeing]);

  const isComplete = answeredCount === totalQuestions;

  const reset = () => setAnswers({});

  return (
    <main className="relative bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Life Assessment</h1>
          <p className="mt-3 max-w-3xl text-white/90">
            A quick self-check across five areas of wellbeing. Your results are private and designed to
            guide your next step — whether that’s self-care, coaching or counselling.
          </p>

          <div className="mt-6 max-w-2xl">
            <ProgressBar percent={percent} />
            <p className="mt-2 text-sm text-white/80">{answeredCount} of {totalQuestions} answered</p>
          </div>
        </div>

        {/* wave */}
        <svg aria-hidden="true" className="w-full text-white" viewBox="0 0 1440 90" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,64 C240,96 360,24 720,64 C1080,104 1200,64 1440,72 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: questions */}
          <div className="lg:col-span-2 space-y-8">
            {DOMAINS.map((domain, di) => (
              <div key={domain.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">{domain.title}</h2>
                <div className="mt-4 space-y-5">
                  {domain.questions.map((q, qi) => {
                    const name = `${di}_${qi}`;
                    const selected = answers[name];
                    return (
                      <fieldset key={name} className="rounded-xl border border-slate-200 p-4">
                        <legend className="mb-3 text-sm font-medium text-slate-800">{q}</legend>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                          {SCALE.map((opt) => (
                            <label
                              key={opt.value}
                              className={`flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2 text-sm ${
                                selected === opt.value
                                  ? "border-brand bg-brand/10 text-brand"
                                  : "border-slate-300 hover:border-brand/50"
                              }`}
                            >
                              <input
                                type="radio"
                                name={name}
                                value={opt.value}
                                className="sr-only"
                                checked={selected === opt.value}
                                onChange={() =>
                                  setAnswers((prev) => ({ ...prev, [name]: opt.value }))
                                }
                                aria-label={`${q} — ${opt.label}`}
                              />
                              {opt.label}
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-accent hover:text-brand"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-600"
              >
                Book a Session
              </Link>
            </div>
          </div>

          {/* Right: results card */}
          <aside className="lg:sticky lg:top-24 h-max rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">Your Results</h3>

            {!isComplete ? (
              <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
                <div className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                  <p className="text-sm">
                    Answer all questions to see your personalised insights.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-4 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">Overall Wellbeing</p>
                  <p className="mt-1 text-3xl font-extrabold text-slate-900">{overallWellbeing}%</p>
                  <p
                    className={`mt-1 text-sm ${
                      overallInsight.tone === "positive"
                        ? "text-emerald-700"
                        : overallInsight.tone === "ok"
                        ? "text-sky-700"
                        : overallInsight.tone === "caution"
                        ? "text-amber-700"
                        : "text-rose-700"
                    }`}
                  >
                    {overallInsight.text}
                  </p>
                </div>

                <ul className="mt-4 space-y-3">
                  {perDomain.map((d) => (
                    <li key={d.key} className="rounded-lg border border-slate-200 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">{d.title}</span>
                        <span className="text-sm font-semibold text-slate-900">{d.wellbeing}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">
                        <div
                          className="h-1.5 rounded-full bg-accent"
                          style={{ width: `${d.wellbeing}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-700">
                    These results are a quick indicator and not a diagnosis. If you’re concerned
                    about any area, we’re here to help.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-600"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Talk to a Professional
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-accent hover:text-brand"
                  >
                    Explore Services
                  </Link>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-brand text-white">
        
        <svg aria-hidden="true" className="w-full text-white rotate-180" viewBox="0 0 1440 90" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,64 C240,96 360,24 720,64 C1080,104 1200,64 1440,72 L1440,90 L0,90 Z" />
        </svg>
      </section>
    </main>
  );
}
