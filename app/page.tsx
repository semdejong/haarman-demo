import Link from "next/link";
import Gallery from "@/components/Gallery";
import RoofDivider, { GableMark } from "@/components/RoofDivider";
import Timeline from "@/components/Timeline";
import { ContactForm } from "@/components/Forms";
import { OfferteLink, PhoneLink } from "@/components/Buttons";
import { groupMeta } from "@/lib/menu";
import { services } from "@/lib/services";
import { bySrc, fleetPhoto, heroPhoto, historyPhoto, workStrip } from "@/lib/photos";
import { email, phone, processSteps } from "@/lib/site";
import { content } from "@/content";

export const metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

const buildRoute = [
  { href: "/diensten/nieuwbouw", label: "Nieuwbouw" },
  { href: "/diensten/verbouw-en-aanbouw", label: "Verbouw en aanbouw" },
  { href: "/diensten/woonboerderijen", label: "Woonboerderij" },
  { href: "/diensten/renovatie", label: "Renovatie" },
];

const jobRoute = [
  { href: "/diensten/onderhoud", label: "Klein onderhoud" },
  { href: "/diensten/timmerwerk", label: "Machinaal timmerwerk" },
  { href: "/diensten/service", label: "Materialen en kozijnen" },
  { href: "/diensten/onderhoud#spoed", label: "Spoedopdracht" },
];

const farmPhotos = [
  bySrc("/fotos/woonboerderij-riet/woona0.jpg"),
  bySrc("/fotos/woonboerderij-baksteen/woonb1.jpg"),
];

export default function Home() {
  return (
    <>
      <section data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)]">
          <div>
            <p className="eyebrow">Nieuwbouw · Verbouw · Onderhoud</p>
            <h1 className="display mt-4 text-5xl text-ink md:text-6xl lg:text-[4.2rem]">
              Sinds 1850 wordt er vanaf deze plek in Harfsen gebouwd
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed">
              Van het vervangen van een dakpan tot nieuwbouw van landhuizen.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
              Aannemersbedrijf Haarman is een traditioneel aannemersbedrijf, gespecialiseerd in de burger- en
              utiliteitsbouw. Het werk doen we voornamelijk in Harfsen en omstreken.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <OfferteLink>Vrijblijvende werkopname</OfferteLink>
              <PhoneLink />
            </div>
          </div>
          <Gallery photos={[heroPhoto]} variant="feature" priority />
        </div>
      </section>

      <section data-section="routes" className="mx-auto grid max-w-6xl gap-px bg-ink/10 px-5 py-16 md:grid-cols-2 md:py-24">
        <article className="bg-paper p-6 md:p-10">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brick">01</p>
          <h2 className="display mt-3 text-4xl">Ik wil (ver)bouwen</h2>
          <p className="mt-4 text-base leading-relaxed">
            Nieuwbouw, verbouw, woonboerderij of renovatie. We beginnen met een vrijblijvende werkopname en begeleiden
            het traject daarna.
          </p>
          <ul className="mt-6">
            {buildRoute.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-11 items-center justify-between border-b border-ink/10 font-display text-xl font-semibold uppercase tracking-wide hover:text-brand">
                  {item.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <article className="bg-straw-soft p-6 md:p-10">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-brick">02</p>
          <h2 className="display mt-3 text-4xl">Ik heb een klus of onderhoud</h2>
          <p className="mt-4 text-base leading-relaxed">
            Een dakpan, een kozijn, materiaal of een spoedklus. Onze allround medewerkers verzorgen spoedopdrachten en
            regulier onderhoud.
          </p>
          <ul className="mt-6">
            {jobRoute.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-11 items-center justify-between border-b border-ink/10 font-display text-xl font-semibold uppercase tracking-wide hover:text-brand">
                  {item.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section data-section="diensten" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Wat we doen</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Tien activiteiten, één aanspreekpunt</h2>
          <div className="mt-12 space-y-14">
            {(Object.keys(groupMeta) as Array<keyof typeof groupMeta>).map((group) => (
              <div key={group}>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-brand">{groupMeta[group].title}</h3>
                <p className="mt-2 max-w-2xl text-base">{groupMeta[group].lede}</p>
                <ul className="mt-6 grid gap-6 md:grid-cols-2">
                  {services
                    .filter((service) => service.group === group)
                    .map((service) => (
                      <li key={service.slug} className="border-t border-ink/15 pt-4">
                        <Link href={service.href} className="group block">
                          <span className="font-display text-2xl font-semibold group-hover:text-brand">{service.label}</span>
                          <span className="mt-2 block text-base leading-relaxed">{service.summary}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/diensten" className="mt-10 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
            Alle diensten
          </Link>
        </div>
      </section>

      <RoofDivider />

      <section data-section="woonboerderijen" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <GableMark className="mb-4 h-16 w-28 text-brand" />
          <p className="eyebrow">Woonboerderijen</p>
          <h2 className="display mt-3 text-4xl md:text-5xl">Sfeer van weleer, gezond leefklimaat</h2>
          <p className="mt-5 text-base leading-relaxed">
            Een boerderij die zijn oorspronkelijke functie verliest, wordt vaak verbouwd tot woonboerderij. Dat vraagt
            specifieke kennis. Meerdere boerderijen zijn door ons omgetoverd tot woningen, met oog voor de sfeer van
            weleer en de originele elementen, en met aandacht voor een gezond leefklimaat.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            We doen dat samen met u en, als dat nodig is, met een architect, constructeur en installateur.
          </p>
          <Link href="/diensten/woonboerderijen" className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
            Meer over woonboerderijen
          </Link>
        </div>
        <Gallery photos={farmPhotos} variant="grid" />
      </section>

      <section data-section="werk" className="border-y border-ink/10 bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Ons werk</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Per type werk</h2>
            </div>
            <Link href="/ons-werk" className="inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
              Meer van ons werk
            </Link>
          </div>
          <div className="mt-8">
            <Gallery photos={workStrip} variant="strip" />
          </div>
        </div>
      </section>

      <section data-section="timmerwerk" className="timber">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Sinds 1986</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Eigen timmerwerkplaats</h2>
            <p className="mt-5 text-base leading-relaxed">
              In 1986 is een nieuwe timmerwerkplaats gebouwd. Vanaf die tijd doen we ook het timmerwerk zelf. Ramen,
              deuren, kozijnen, trappen, architraven en lijstwerk maken we op maat, passend bij de bestaande detaillering
              van oudere gebouwen.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Het machinepark staat op het eigen erf. Daardoor kunnen we zorgvuldig werken en toch korte levertijden
              aanhouden.
            </p>
            <Link href="/diensten/timmerwerk" className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
              Machinaal timmerwerk
            </Link>
          </div>
          <Gallery photos={[fleetPhoto]} variant="feature" />
        </div>
      </section>

      <section data-section="werkwijze">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Zo werken we</p>
          <h2 className="display mt-3 max-w-3xl text-4xl md:text-5xl">Vrijblijvend beginnen, daarna één lijn</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step.title} className="border-t border-brand pt-4">
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-brick">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <OfferteLink>Vrijblijvende werkopname</OfferteLink>
          </div>
        </div>
      </section>

      <section data-section="historie" className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="eyebrow">Sinds 1850 op één plek</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Al meer dan 150 jaar een begrip</h2>
            <p className="mt-5 text-base leading-relaxed">
              Reeds vanaf 1850 worden er bouwkundige werkzaamheden uitgevoerd vanaf onze vestigingsplaats. In 1977 ging
              het bedrijf verder onder de naam Aannemersbedrijf Haarman.
            </p>
            <div className="mt-8 max-w-[900px]">
              <Gallery photos={[historyPhoto]} variant="feature" />
            </div>
            <Link href="/over-ons" className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
              Lees de historie
            </Link>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Lidmaatschap BouwGarant staat op de huidige site; actuele status nog bevestigen door de opdrachtgever. */}
      <section data-section="zekerheid" className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <p className="eyebrow">Zekerheid</p>
          <h2 className="display mt-3 text-4xl">BouwGarant</h2>
          <p className="mt-5 text-lg leading-relaxed">
            Aannemersbedrijf Haarman is lid van Stichting BouwGarant. Bij het afsluiten van een verbouwgarantie bent u
            gewaarborgd van kwaliteit en financiële zekerheid. Neemt u gerust contact met ons op, we vertellen u graag
            meer over Stichting BouwGarant en haar verbouwgarantie.
          </p>
        </div>
      </section>

      <section data-section="visie" className="bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
          <p className="eyebrow text-straw">Visie</p>
          <blockquote className="display mt-6 text-4xl leading-tight md:text-5xl">
            “‘Mits’ en ‘maar’ zijn niet aan ons besteed. ‘Nee’ verkopen al helemaal niet.”
          </blockquote>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
            U geeft de opdracht, en wij nemen hem aan. Of het nu gaat om een verbouwing, renovatie, kantoorpand of
            luxe villa. Of het nu groot is of klein.
          </p>
          <Link href="/over-ons#visie" className="mt-8 inline-flex min-h-11 items-center text-straw underline underline-offset-4">
            Lees onze visie
          </Link>
        </div>
      </section>

      <section data-section="werkgebied">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">Werkgebied</p>
          <h2 className="display mt-3 text-5xl md:text-7xl">Harfsen en omstreken</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            Het werk doen we voornamelijk in Harfsen en omstreken, in de gemeente Lochem. Dezelfde ploeg bouwt de
            woonboerderij, de stal en de werktuigberging, en komt ook voor het kleine onderhoud.
          </p>
          <p className="dimension mt-8 max-w-md text-brand">
            <span />
          </p>
          <p className="mt-2 font-display text-sm uppercase tracking-[0.16em] text-brand">Gemeente Lochem · Gelderland</p>
        </div>
      </section>

      <section data-section="contact" className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Bel of mail voor een afspraak</h2>
            <a href={phone.href} className="mt-6 flex min-h-11 items-center font-display text-4xl font-semibold text-brand">
              {phone.display}
            </a>
            <a href={`mailto:${email}`} className="flex min-h-11 items-center text-lg underline decoration-brand/30 underline-offset-4">
              {email}
            </a>
            <p className="mt-4 max-w-md text-base leading-relaxed">Bel of mail voor een afspraak.</p>
          </div>
          <ContactForm variant="short" />
        </div>
      </section>
    </>
  );
}

