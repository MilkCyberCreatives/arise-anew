import Link from "next/link";
import Image from "next/image";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/arise-logo.svg"
                alt="Arise Anew Wellness Group"
                width={64}
                height={64}
                className="h-16 w-16"
                priority={false}
              />
              <span className="sr-only">Arise Anew Wellness Group</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Restoring balance, unleashing potential from within. Coaching & counselling in Midrand and online across SA.
            </p>

            {/* Accreditations */}
            <p className="mt-4 text-xs font-semibold text-slate-700">
              Accreditations: COMENSA • ASCHP • EAPSA
            </p>
          </div>

          {/* Quick links */}
          <nav className="md:col-span-1" aria-label="Footer">
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-brand" href="/">Home</Link></li>
              <li><Link className="hover:text-brand" href="/services">Services</Link></li>
              <li><Link className="hover:text-brand" href="/assessment">Life Assessment</Link></li>
              <li><Link className="hover:text-brand" href="/about">About</Link></li>
              <li><Link className="hover:text-brand" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="tel:+27659331865" className="hover:text-brand">
                  065 933 1865
                </Link>
              </li>
              <li>
                <Link href="mailto:info@ariseanew.co.za" className="hover:text-brand">
                  info@ariseanew.co.za
                </Link>
              </li>
              <li className="text-slate-600">
                44 Richards Drive, Leogem Business Park, Midrand, 1682
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=44+Richards+Drive,+Leogem+Business+Park,+Midrand,+1682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  View on Google Maps →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900">Hours & Social</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mon–Fri: 08:00–17:00</li>
              <li>Sessions: In-person & Online</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <Link
                href="https://instagram.com/AriseAnew_wellnessgroup"
                target="_blank"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-accent hover:text-brand"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>
            © {year} Arise Anew Wellness Group. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-brand">Privacy</Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-brand">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
