import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Aannemersbedrijf Haarman",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: content.colors.primary };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: content.company.name,
  legalName: content.company.legalName,
  telephone: "+31573431400",
  email: content.company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harfsen",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  areaServed: "Harfsen en omstreken",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${source.variable} ${barlow.variable} h-full antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-24 md:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#inhoud" className="skip-link">
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
