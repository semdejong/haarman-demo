import type { Metadata } from "next";
import { WerkopnameForm } from "@/components/Forms";
import { faq, phone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vrijblijvende werkopname",
  description:
    "Vraag een vrijblijvende werkopname aan bij Aannemersbedrijf Haarman in Harfsen. We bespreken uw wensen, maken zo nodig een schetsontwerp en sturen een vrijblijvende offerte.",
};

const steps = [
  {
    title: "Werkopname",
    text: "Tijdens een vrijblijvende werkopname bespreken we uw wensen. Nog niets is verplicht.",
  },
  {
    title: "Schetsontwerp",
    text: "Heeft u nog geen tekeningen, dan werken we uw ideeën uit tot een schetsontwerp.",
  },
  {
    title: "Vrijblijvende offerte",
    text: "Op basis daarvan ontvangt u een vrijblijvende offerte. Indien nodig vragen we de vergunningen aan.",
  },
];

export default function WerkopnamePage() {
  return (
    <>
      <header data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">Vrijblijvend</p>
          <h1 className="display mt-3 max-w-4xl text-5xl md:text-6xl">Vraag een vrijblijvende werkopname aan</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            Tijdens een vrijblijvende werkopname bespreken we uw wensen. Heeft u nog geen tekeningen, dan werken we uw
            ideeën uit tot een schetsontwerp. Daarna ontvangt u een vrijblijvende offerte.
          </p>
        </div>
      </header>

      <section data-section="stappen">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:py-20">
          {steps.map((step, index) => (
            <article key={step.title} className="border-t-2 border-brand pt-4">
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-brick">0{index + 1}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold">{step.title}</h2>
              <p className="mt-3 text-base leading-relaxed">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-section="formulier" className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_20rem] md:py-20">
          <div>
            <h2 className="display text-4xl">Uw aanvraag</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed">
              Vul het formulier in. U verstuurt de aanvraag daarna zelf per e-mail naar info@aannemersbedrijfhaarman.nl.
            </p>
            <div className="mt-8">
              <WerkopnameForm />
            </div>
          </div>
          <aside data-section="bellen" className="h-fit border border-ink/10 bg-paper p-6">
            <h2 className="font-display text-2xl font-semibold">Liever bellen?</h2>
            <p className="mt-3 text-base">Een afspraak maakt u ook telefonisch. Bel of mail voor een afspraak.</p>
            <a href={phone.href} className="mt-4 flex min-h-11 items-center font-display text-3xl font-semibold text-brand">
              {phone.display}
            </a>
          </aside>
        </div>
      </section>

      {/* Lidmaatschap BouwGarant staat op de huidige site; actuele status nog bevestigen door de opdrachtgever. */}
      <section data-section="bouwgarant" className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="display text-3xl">BouwGarant</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Aannemersbedrijf Haarman is lid van Stichting BouwGarant. Bij het afsluiten van een verbouwgarantie bent u
            gewaarborgd van kwaliteit en financiële zekerheid. Vraagt u er gerust naar tijdens de werkopname.
          </p>
        </div>
      </section>

      <section data-section="faq" className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <h2 className="display text-4xl">Vragen</h2>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faq.map((item) => (
              <details key={item.q} className="group py-2">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden className="text-brand group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-base leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
