import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Bestek from "@/components/Bestek";
import { OfferteLink, PhoneLink } from "@/components/Buttons";
import { GableMark } from "@/components/RoofDivider";
import { galleryById, bySrc, fleetPhoto } from "@/lib/photos";
import { serviceBySlug, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Diensten" };
  return { title: service.label, description: service.description };
}

const timberDetails = [
  bySrc("/fotos/nieuwbouw-hout-b/nhb-04.jpg"),
  bySrc("/fotos/nieuwbouw-hout-b/nhb-07.jpg"),
  bySrc("/fotos/nieuwbouw-hout-b/nhb-17.jpg"),
  bySrc("/fotos/nieuwbouw-hout-a/nha-16.jpg"),
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const gallery = service.galleryId ? galleryById(service.galleryId) : undefined;
  const feature = service.showFleet ? fleetPhoto : gallery?.photos[0];
  const related = services.filter((item) => item.group === service.group && item.slug !== service.slug);

  return (
    <>
      <header data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <p className="eyebrow">Diensten · Harfsen en omstreken</p>
            <h1 className="display mt-3 max-w-4xl text-5xl md:text-6xl">{service.label}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{service.summary}</p>
            <div className="cta-row mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <OfferteLink>Vrijblijvende werkopname</OfferteLink>
              <PhoneLink />
            </div>
          </div>
          {feature ? (
            <Gallery photos={[feature]} variant="feature" priority />
          ) : (
            <div className="border border-brand/30 bg-white p-8 text-brand">
              <GableMark className="h-24 w-40" />
              <p className="mt-6 font-display text-3xl font-semibold leading-none text-ink">
                Van het eerste gesprek tot de oplevering.
              </p>
              <p className="mt-3 text-base text-ink">Eén aanspreekpunt, een vaste ploeg, en de vergunning indien nodig.</p>
            </div>
          )}
        </div>
      </header>

      <section
        data-section="toelichting"
        id={service.slug === "onderhoud" ? "spoed" : undefined}
        className={service.showFleet ? "timber scroll-mt-28" : "scroll-mt-28"}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.8fr)]">
          <div className="max-w-3xl space-y-5">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <Bestek title={service.label} points={service.points} />
        </div>
      </section>

      {service.showFleet ? (
        <section data-section="hout" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="eyebrow">Op de bouw</p>
            <h2 className="display mt-2 text-4xl">Houtwerk dat past bij wat er staat</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed">
              In de werkplaats maken we de onderdelen die bij de bestaande detaillering horen. Op de bouw ziet u dat
              houtwerk terug, bijvoorbeeld in nieuwbouw in hout: verbindingen, spanten en een kap.
            </p>
            <div className="mt-8">
              <Gallery photos={timberDetails} variant="strip" />
            </div>
          </div>
        </section>
      ) : null}

      {gallery && gallery.photos.length > 0 ? (
        <section data-section="fotos" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <p className="eyebrow">{gallery.title}</p>
            <h2 className="display mt-2 text-4xl">Zo ziet dit werk eruit</h2>
            <p className="mt-3 max-w-2xl text-base">{gallery.text}</p>
            <div className="mt-8">
              <Gallery photos={gallery.photos} />
            </div>
          </div>
        </section>
      ) : null}

      <section data-section="naast" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-3xl">Ook in de buurt van dit werk</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} className="flex min-h-24 flex-col justify-between border border-ink/10 bg-white p-5 hover:border-brand">
                  <span className="font-display text-2xl font-semibold">{item.label}</span>
                  <span className="mt-3 text-sm leading-relaxed text-ink/80">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="vervolg" className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 py-14">
          <div className="max-w-xl">
            <p className="eyebrow text-straw">Eerste stap</p>
            <h2 className="display mt-2 text-4xl">Vrijblijvend beginnen</h2>
            <p className="mt-3 text-base text-paper/85">
              Tijdens een werkopname bespreken we uw wensen. Nog geen tekeningen? Dan werken we die uit tot een
              schetsontwerp, en daarna volgt een vrijblijvende offerte.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <OfferteLink variant="light" />
            <Link href="/diensten" className="inline-flex min-h-11 items-center px-2 font-semibold text-straw underline underline-offset-4">
              Alle diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
