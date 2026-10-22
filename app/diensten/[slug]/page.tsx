import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
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
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const gallery = service.galleryId ? galleryById(service.galleryId) : undefined;

  return (
    <>
      <header data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">Diensten</p>
          <h1 className="display mt-3 max-w-4xl text-5xl md:text-6xl">{service.label}</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <OfferteLink>Vrijblijvende werkopname</OfferteLink>
            <PhoneLink />
          </div>
        </div>
      </header>

      <section
        data-section="toelichting"
        id={service.slug === "onderhoud" ? "spoed" : undefined}
        className={service.showFleet ? "timber scroll-mt-28" : "scroll-mt-28"}
      >
        <div className={`mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-20 ${service.showFleet ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <div className="max-w-3xl space-y-5">
            {service.slug === "utiliteitsbouw" ? <GableMark className="h-16 w-28 text-brand" /> : null}
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {service.showFleet ? <Gallery photos={[fleetPhoto]} variant="feature" /> : null}
        </div>
      </section>

      {service.showFleet ? (
        <section data-section="hout" className="border-t border-ink/10">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="display text-3xl">Houtwerk op de bouw</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed">
              Kozijnen en trappen maken we in de werkplaats. Op de bouw komt dat houtwerk terug in de constructie, zoals
              bij nieuwbouw in hout.
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
            <h2 className="display text-3xl">{gallery.title}</h2>
            <p className="mt-3 max-w-2xl text-base">{gallery.text}</p>
            <div className="mt-8">
              <Gallery photos={gallery.photos} />
            </div>
          </div>
        </section>
      ) : null}

      <section data-section="vervolg" className="border-t border-ink/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <div>
            <h2 className="display text-3xl">Vrijblijvend beginnen</h2>
            <p className="mt-2 max-w-xl text-base">
              Tijdens een werkopname bespreken we uw wensen. Nog geen tekeningen? Dan werken we die uit tot een
              schetsontwerp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <OfferteLink />
            <Link href="/diensten" className="inline-flex min-h-11 items-center px-2 font-semibold text-brand underline underline-offset-4">
              Alle diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
