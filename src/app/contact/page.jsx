// src/app/contact/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

export default function ContactPage() {
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // set on Vercel

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",       // honeypot
    recaptchaToken: "",// v3 token
  });
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Obtain a fresh token just-in-time on submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, error: "" });

    try {
      let token = form.recaptchaToken;

      // Ensure grecaptcha is available and get a new token for 'contact' action
      if (window.grecaptcha && SITE_KEY) {
        token = await window.grecaptcha.execute(SITE_KEY, { action: "contact" });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ sending: false, ok: true, error: "" });
        setForm({ name: "", email: "", phone: "", message: "", website: "", recaptchaToken: "" });
      } else {
        throw new Error(data?.error || "Failed to send message");
      }
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || "Something went wrong" });
    }
  };

  return (
    <main className="relative bg-white">
      {/* Load reCAPTCHA v3 */}
      {SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-3xl text-white/90">
            We’re here to help. Get in touch with Arise Anew Wellness Group — whether you’d like to
            book a session, ask about our services, or discuss partnership opportunities.
          </p>
        </div>
        <svg aria-hidden="true" className="w-full text-white" viewBox="0 0 1440 90" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,64 C240,96 360,24 720,64 C1080,104 1200,64 1440,72 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-extrabold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600">Fill in the form below and we’ll get back to you within 24 hours.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  maxLength={100}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
                  placeholder="+27 65 933 1865"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={form.message}
                  onChange={onChange}
                  minLength={10}
                  maxLength={2000}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status.sending}
                  className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-600 disabled:opacity-60"
                >
                  {status.sending ? "Sending…" : "Send Message"}
                </button>
              </div>

              {/* Alerts */}
              {status.ok && <p className="text-sm font-semibold text-green-700">Thank you — your message has been sent.</p>}
              {status.ok === false && <p className="text-sm font-semibold text-red-700">Sorry, we couldn’t send your message. {status.error}</p>}
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Our Contact Details</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li><strong>Address:</strong> 44 Richards Drive, Leogem Business Park, Midrand, 1682</li>
                <li>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:info@ariseanew.co.za" className="text-brand hover:underline">
                    info@ariseanew.co.za
                  </Link>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <Link href="tel:+27659331865" className="text-brand hover:underline">
                    +27 65 933 1865
                  </Link>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <iframe
                title="Arise Anew Wellness Group Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14344.03136827523!2d28.115641168378257!3d-26.000560499211517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s44%20Richards%20Drive%2C%20Leogem%20Business%20Park%2C%20Midrand%2C%201682!5e0!3m2!1sen!2sza!4v1758464907647!5m2!1sen!2sza"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
