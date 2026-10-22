import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import { OfferteLink, PhoneLink } from "@/components/Buttons";
import { fleetPhoto, historyPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Historie, visie en kwaliteit van Aannemersbedrijf Haarman in Harfsen. Bouwen vanaf deze plek sinds 1850, onder de naam Haarman sinds 1977.",
};

export default function OverOnsPage() {
  return (
    <>
      <header data-section="hero" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow">Over ons</p>
          <h1 className="display mt-3 max-w-4xl text-5xl md:text-6xl">Traditioneel met zin in de toekomst</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            Aannemersbedrijf Haarman is een traditioneel familiebedrijf. Kwaliteit en een eerlijke prijs staan hoog in
            het vaandel. De bouw verandert doorlopend: nieuwe technieken, nieuwe ontwerpen, andere inzichten. Oude
            bouwmethodes en nieuwe bouwtechnieken passen we toe waar dat gewenst is, in de burgerbouw en in de
            utiliteit.
          </p>
        </div>
      </header>

      <section data-section="historie" id="historie" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="eyebrow">Historie</p>
            <h2 className="display text-4xl md:text-5xl">Al meer dan 150 jaar een begrip</h2>
            <p>
              Reeds vanaf 1850 werden er bouwkundige werkzaamheden uitgevoerd vanaf onze vestigingsplaats. Hendrikus
              Lamberts was landbouwer, maar ging in de tijd die over was metselen bij verschillende boeren en burgers.
              Zijn vervoer bestond uit een karretje achter de fiets. In 1878 werd dit vak voortgezet door Jan Lamberts.
              Omstreeks 1900 nam de zoon van Jan het bedrijf over.
            </p>
            <p>
              Albert Lamberts, toen ongeveer 16 jaar oud, heeft ongeveer een jaar samengewerkt met oom Dieks, die later
              een eigen bedrijf is begonnen. In 1958 heeft zoon Jan het bedrijf voortgezet. Dat was van korte duur, want
              hij werd ernstig ziek. In 1963 werd het bedrijf overgenomen door H. Bargeman, die ook het woonhuis naast
              het bedrijf heeft gebouwd.
            </p>
            <p>
              In 1977 is het bedrijf overgenomen door Bertus Haarman en verdergegaan onder zijn eigen naam:
              Aannemersbedrijf Haarman. Om het dienstenpakket uit te breiden is in 1986 een nieuwe timmerwerkplaats
              gebouwd, zodat vanaf die tijd ook timmerwerk werd uitgevoerd. In 2008 is de volgende generatie in dienst
              getreden om in de toekomst de naam verder uit te dragen.
            </p>
            <Gallery photos={[historyPhoto]} variant="feature" />
          </div>
          <Timeline />
        </div>
      </section>

      <section data-section="profiel" className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Profiel</p>
            <h2 className="display mt-3 text-4xl">Een vaste ploeg, korte lijnen</h2>
            <p className="mt-5 text-lg leading-relaxed">
              Aannemersbedrijf Haarman beschikt over een gedisciplineerd team van vaste vakbekwame werknemers en een
              schare aan vaste onderaannemers. Hiermee wordt naar de wensen van onze opdrachtgevers gebouwd. Een goede
              organisatie en korte communicatielijnen zorgen ervoor dat wij het werk voor onze opdrachtgevers goed
              kunnen verrichten.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Sinds 1986 staat de timmerwerkplaats op het eigen erf. Het wagenpark rijdt van daaruit naar Harfsen en
              omstreken.
            </p>
          </div>
          <Gallery photos={[fleetPhoto]} variant="feature" />
        </div>
      </section>

      <section data-section="visie" id="visie" className="scroll-mt-28 bg-ink text-paper">
        <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 md:py-24">
          <p className="eyebrow text-straw">Visie</p>
          <h2 className="display text-4xl md:text-5xl">Een kwestie van geven en nemen</h2>
          <p className="text-2xl leading-snug">
            “‘Mits’ en ‘maar’ zijn niet aan ons besteed. ‘Nee’ verkopen al helemaal niet.”
          </p>
          <p>
            U geeft de opdracht, en wij nemen hem aan. Het kan zo simpel zijn omdat wij voor elk bouwaspect specialisten
            in huis hebben. Juist om die reden zijn onze opdrachtgevers zeer gevarieerd. Of het nu gaat om een
            verbouwing, renovatie, kantoorpand of luxe villa. Of het nu gaat om een grote of een kleine opdracht. Onze
            mensen staan klaar om er met enthousiasme aan te werken.
          </p>
          <p>
            Opdrachtgevers komen bij ons terug voor een ander bouwproject, hoeveel anders die ook is dan de vorige. Zij
            weten waar ze moeten zijn voor kwaliteit en duidelijkheid.
          </p>
          <h3 className="pt-4 font-display text-2xl font-semibold">Doelstelling</h3>
          <p>
            Aannemersbedrijf Haarman heeft als doelstelling met een gestage groei, in de regio Harfsen, bouwwerken te
            realiseren waardoor de continuïteit van het bedrijf gewaarborgd blijft. Het behouden van een goede relatie
            met onze vaste opdrachtgevers is hierbij een pre. Uitgangspunten hierbij zijn:
          </p>
          <ol className="list-decimal space-y-4 pl-5">
            <li>
              Een werkfilosofie die ervan uitgaat dat optimale resultaten alleen kunnen worden bereikt door een goede
              verhouding met de klanten. Problemen in die relatie worden kordaat en afdoende opgelost, op een
              economische en maatschappelijk verantwoorde wijze.
            </li>
            <li>
              Het leveren van een hoge kwaliteit van producten en diensten. Dit wordt bereikt door ervaren en
              gemotiveerd personeel dat de verantwoordelijkheid draagt voor veilige methoden en werkwijzen.
            </li>
            <li>
              Een werkomgeving waarin de medewerkers zich thuis voelen en waarin zij zich ook maatschappelijk kunnen
              ontplooien. De groei van de organisatie gaat daarbij hand in hand met de persoonlijke ontwikkeling van de
              medewerkers.
            </li>
          </ol>
        </div>
      </section>

      {/* Lidmaatschap BouwGarant staat op de huidige site; actuele status nog bevestigen door de opdrachtgever. */}
      <section data-section="kwaliteit" id="kwaliteit" className="scroll-mt-28">
        <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 md:py-24">
          <p className="eyebrow">Kwaliteit</p>
          <h2 className="display text-4xl">Kennis, ervaring en mentaliteit</h2>
          <p>
            Aannemersbedrijf Haarman is een traditioneel familiebedrijf met een historie van meer dan 150 jaar. We
            beschikken over een grote hoeveelheid kennis in alle facetten van de bouw.
          </p>
          <p>
            Aannemersbedrijf Haarman is één van de 2.000 bouwbedrijven die voldoen aan de kwaliteitseisen van BouwGarant.
            Kiezen voor een BouwGarant-aannemer betekent dat u kiest voor kwaliteit. Tevens kunt u bij ons een
            verbouwgarantie afsluiten. Deze beschermt tegen de financiële risico&apos;s van verbouwen.
          </p>
          <p>
            De belangrijkste zekerheid die wij u kunnen bieden is de combinatie van onze kennis, ervaring en mentaliteit.
            Iedereen bij ons bedrijf werkt met de trots en het verantwoordelijkheidsgevoel dat hoort bij oprecht
            vakmanschap. Wij houden van ons werk en we realiseren dat we dat alleen maar kunnen blijven doen als we het
            goed doen.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <OfferteLink />
            <PhoneLink />
          </div>
        </div>
      </section>

      <section data-section="vacatures" id="vacatures" className="scroll-mt-28 border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="display text-4xl">Vacatures</h2>
          <p className="mt-4 text-lg">Op dit moment zijn er geen vacatures binnen ons bedrijf.</p>
        </div>
      </section>
    </>
  );
}
