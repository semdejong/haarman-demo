import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { OfferteLink } from "@/components/Buttons";
import { email, phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bel 0573 - 431400 of mail info@aannemersbedrijfhaarman.nl. Aannemersbedrijf Haarman in Harfsen. Bel of mail voor een afspraak.",
};

export default function ContactPage() {
  return (
    <>
      <header data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3 text-5xl md:text-6xl">Bel of mail voor een afspraak</h1>
          <p className="mt-5 max-w-2xl text-lg">
            Aannemersbedrijf Haarman, Harfsen. Voor een werkopname, een kleine klus of een vraag over materiaal.
          </p>
        </div>
      </header>
      <section data-section="gegevens">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="display text-3xl">Aannemersbedrijf Haarman</h2>
            <p className="mt-2 text-base">Harfsen · gemeente Lochem</p>
            <a href={phone.href} className="mt-6 flex min-h-11 items-center font-display text-4xl font-semibold text-brand">
              {phone.display}
            </a>
            <a href={`mailto:${email}`} className="flex min-h-11 items-center break-all text-lg underline decoration-brand/40 underline-offset-4">
              {email}
            </a>
            <p className="mt-6 max-w-md text-base leading-relaxed">Bel of mail voor een afspraak.</p>
            <ul className="mt-8 space-y-3 text-base">
              <li className="border-t border-ink/10 pt-3">Een werkopname, vrijblijvend, bij u thuis of op het erf.</li>
              <li className="border-t border-ink/10 pt-3">Een kleine klus, onderhoud of een spoedopdracht.</li>
              <li className="border-t border-ink/10 pt-3">Materiaal, kozijnen of tekenwerk, ook als u zelf bouwt.</li>
            </ul>
            <div className="mt-6">
              <OfferteLink>Werkopname aanvragen</OfferteLink>
            </div>
          </div>
          <div data-section="formulier">
            <h2 className="display mb-6 text-3xl">Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
