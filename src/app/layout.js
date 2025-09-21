// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ariseanew.co.za"),
  title: {
    default: "Arise Anew Wellness Group",
    template: "%s | Arise Anew Wellness Group",
  },
  description:
    "Professional counselling, coaching and wellness interventions in Midrand, South Africa. Restoring balance and unleashing potential from within.",
  keywords: [
    "counselling Midrand",
    "coaching Midrand",
    "wellness South Africa",
    "grief counselling",
    "marriage counselling",
    "stress management",
    "youth coaching",
    "Christian counselling",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/arise-logo.svg",
    shortcut: "/arise-logo.svg",
    apple: "/arise-logo.svg",
  },
  openGraph: {
    title: "Arise Anew Wellness Group",
    description:
      "Coaching and counselling in Midrand, South Africa. Tailored programmes that restore balance, build resilience and empower people to thrive.",
    url: "https://ariseanew.co.za/",
    siteName: "Arise Anew Wellness Group",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Arise Anew" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arise Anew Wellness Group",
    description:
      "Coaching and counselling in Midrand, South Africa. Tailored programmes that restore balance, build resilience and empower people to thrive.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <MainHeader />
        <div className="pt-16">{children}</div>
        <Footer />

        {/* SEO Schemas: LocalBusiness + ContactPoint (helps Google & AI search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Arise Anew Wellness Group",
              url: "https://ariseanew.co.za",
              image: "https://ariseanew.co.za/og-image.jpg",
              telephone: "+27 65 933 1865",
              email: "info@ariseanew.co.za",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44 Richards Drive, Leogem Business Park",
                addressLocality: "Midrand",
                postalCode: "1682",
                addressCountry: "ZA",
              },
              sameAs: ["https://instagram.com/AriseAnew_wellnessgroup"],
              description:
                "Professional coaching and counselling organisation in Midrand, South Africa.",
              areaServed: "ZA",
              openingHours: "Mo-Fr 08:00-17:00",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27 65 933 1865",
                contactType: "customer service",
                email: "info@ariseanew.co.za",
                areaServed: "ZA",
                availableLanguage: ["en", "en-ZA"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
