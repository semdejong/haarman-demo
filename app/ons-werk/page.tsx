import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { galleries } from "@/lib/photos";

const serviceFor: Record<string, string> = {
  woonboerderij: "/diensten/woonboerderijen",
  renovatie: "/diensten/renovatie",
  aanbouw: "/diensten/verbouw-en-aanbouw",
  "nieuwbouw-hout": "/diensten/nieuwbouw",
  agrarisch: "/diensten/agrarisch",
  badkamer: "/diensten/badkamer",
};

export const metadata: Metadata = {
  title: "Ons werk",
  description:
    "Foto's van Aannemersbedrijf Haarman, geordend op type werk: woonboerderij, renovatie, aanbouw, nieuwbouw in hout, agrarisch en badkamer.",
};

const shown = galleries.filter((gallery) => gallery.id !== "onderhoud");

export default function OnsWerkPage() {
  return (
    <>
      <PageHero
        eyebrow="Ons werk"
        title="Eigen foto's, per type werk"
        lede="Woonboerderijen, renovatie, aanbouw, nieuwbouw in hout, agrarisch werk en badkamers."
      />
      {shown.map((gallery) => (
        <section key={gallery.id} data-section={gallery.id} className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Eigen werk</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">{gallery.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed">{gallery.text}</p>
              </div>
              <Link href={serviceFor[gallery.id] ?? "/diensten"} className="inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
                Naar de dienst
              </Link>
            </div>
            <div className="mt-8">
              <Gallery photos={gallery.photos} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
