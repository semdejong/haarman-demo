import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { groupMeta } from "@/lib/menu";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Nieuwbouw, verbouw, woonboerderijen, renovatie, onderhoud, timmerwerk, badkamer, utiliteit, agrarisch en service. Aannemersbedrijf Haarman in Harfsen.",
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Diensten"
        title="Van een dakpan tot een landhuis"
        lede="Burger- en utiliteitsbouw, voornamelijk in Harfsen en omstreken. Hieronder de tien activiteiten, in onze eigen woorden."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 md:py-24">
        {(Object.keys(groupMeta) as Array<keyof typeof groupMeta>).map((group) => (
          <section key={group} data-section={group}>
            <h2 className="display text-4xl">{groupMeta[group].title}</h2>
            <p className="mt-3 max-w-2xl text-base">{groupMeta[group].lede}</p>
            <ul
              className={`mt-8 grid gap-6 md:grid-cols-2 ${
                services.filter((service) => service.group === group).length === 3 ? "xl:grid-cols-3" : ""
              }`}
            >
              {services
                .filter((service) => service.group === group)
                .map((service) => (
                  <li key={service.slug} className="border border-ink/10 bg-white p-6">
                    <h3 className="font-display text-2xl font-semibold">{service.label}</h3>
                    <p className="mt-3 text-base leading-relaxed">{service.summary}</p>
                    <ul className="mt-4 space-y-1 text-sm">
                      {service.points.slice(0, 4).map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-brand" aria-hidden>
                            —
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
                      Lees verder
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
