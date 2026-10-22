import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { galleries } from "@/lib/photos";

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
            <h2 className="display text-4xl">{gallery.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed">{gallery.text}</p>
            <div className="mt-8">
              <Gallery photos={gallery.photos} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
