import { serviceLinks } from "@/lib/menu";

export type Service = {
  href: string;
  slug: string;
  label: string;
  group: (typeof serviceLinks)[number]["group"];
  summary: string;
  description: string;
  paragraphs: string[];
  points: string[];
  galleryId?: string;
  showFleet?: boolean;
};

const copy: Record<string, Omit<Service, "href" | "slug" | "label" | "group">> = {
  nieuwbouw: {
    summary: "Woningen, bedrijfspanden en kleinere bijgebouwen, van de fundering tot de laatste afwerking.",
    description:
      "Nieuwbouw van woningen, bedrijfspanden en kleinere bijgebouwen in Harfsen en omstreken. Van fundering tot afwerking, inclusief vergunningen en begeleiding.",
    paragraphs: [
      "De bouw van woningen, bedrijfspanden of kleinere bijgebouwen verzorgt Aannemersbedrijf Haarman van de fundering tot de laatste afwerking.",
      "Daarnaast kunt u alles aan ons overlaten wat bij de nieuwbouw komt kijken, zoals het regelen van bouwvergunningen of, indien gewenst, tekeningen van de architect. Wij voeren dus niet alleen de bouwwerkzaamheden uit, maar begeleiden het hele nieuwbouwtraject.",
    ],
    points: [
      "Woningen",
      "Bedrijfspanden",
      "Kleinere bijgebouwen",
      "Van de fundering tot de laatste afwerking",
      "Bouwvergunningen",
      "Tekeningen van de architect, indien gewenst",
      "Begeleiding van het hele nieuwbouwtraject",
    ],
    galleryId: "nieuwbouw-hout",
  },
  "verbouw-en-aanbouw": {
    summary: "Dakkapel, kap op de garage of een serre. Eerst een vrijblijvende werkopname, daarna een schetsontwerp.",
    description:
      "Verbouw en aanbouw in Harfsen en omstreken: dakkapel, kap of serre. Vrijblijvende werkopname, schetsontwerp en offerte, met één aanspreekpunt.",
    paragraphs: [
      "Een uitbreiding van uw woning of een verbouwing in uw woning? We zorgen bijvoorbeeld voor uw dakkapel, kap op de garage of het vergroten van uw woning met een serre.",
      "Iedere verbouwing, van groot tot klein, is maatwerk. Tijdens een vrijblijvende werkopname bespreken we uw wensen. Heeft u nog geen tekeningen, dan werken we uw ideeën uit tot een schetsontwerp. Op basis hiervan ontvangt u een vrijblijvende offerte van de werkzaamheden die uitgevoerd moeten worden. Indien nodig vragen we de benodigde vergunningen aan.",
      "Zodra de voorbereiding is afgerond, wordt de bouw gepland. We zorgen dat de werkzaamheden goed verlopen, zodat u zo min mogelijk overlast heeft. Met een vaste ploeg die continu aan uw verbouwing werkt, en met onderaannemers en leveranciers waar we al jaren mee samenwerken. Daarmee vormen we een hecht team. We houden zicht op het hele traject en zijn voor, tijdens en na de bouw uw aanspreekpunt.",
    ],
    points: [
      "Dakkapel",
      "Kap op de garage",
      "Serre of andere uitbreiding",
      "Vrijblijvende werkopname",
      "Schetsontwerp als er nog geen tekeningen zijn",
      "Vrijblijvende offerte",
      "Vergunningen indien nodig",
      "Vaste ploeg en één aanspreekpunt",
    ],
    galleryId: "aanbouw",
  },
  woonboerderijen: {
    summary: "Een boerderij verbouwen tot woonboerderij, met oog voor de sfeer van weleer en een gezond leefklimaat.",
    description:
      "Woonboerderijen verbouwen in Harfsen en omstreken. Oog voor de sfeer van weleer, originele elementen en een gezond leefklimaat.",
    paragraphs: [
      "Een boerderij die zijn oorspronkelijke functie verliest, wordt vaak verbouwd tot woonboerderij. Een verbouwing die veel specifieke kennis vereist. Bij Aannemersbedrijf Haarman is deze kennis ruimschoots voorhanden. Meerdere boerderijen zijn door ons bedrijf omgetoverd tot woningen. Met oog voor de sfeer van weleer en de originele elementen. Maar ook met aandacht voor bijvoorbeeld een gezond leefklimaat.",
      "We ontwerpen ook uw woonhuis in uw boerderij. Samen met u en eventueel een architect, constructeur en installateur. Vervolgens gaan onze vakkundige medewerkers aan de slag om uw bouwwensen te realiseren.",
    ],
    points: [
      "Van boerderij naar woonboerderij",
      "Oog voor de sfeer van weleer",
      "Behoud van originele elementen",
      "Aandacht voor een gezond leefklimaat",
      "Samen met u",
      "Eventueel met architect, constructeur en installateur",
    ],
    galleryId: "woonboerderij",
  },
  renovatie: {
    summary: "Houtherstel, kozijnen en deuren vernieuwen, isolatie van muren, vloeren en beglazing.",
    description:
      "Renovatie van woningen en gebouwen: houtherstel, nieuwe kozijnen en deuren, isolatie van muren, vloeren en beglazing.",
    paragraphs: [
      "Soms voldoet eenvoudig onderhoud niet meer en is een grondige renovatie aan de orde. Houtherstel, het vernieuwen van kozijnen en deuren, het verbeteren van de isolatie van muren, vloeren en beglazing. Ook hierin is Aannemersbedrijf Haarman ervaren en deskundig.",
    ],
    points: [
      "Houtherstel",
      "Kozijnen vernieuwen",
      "Deuren vernieuwen",
      "Isolatie van muren",
      "Isolatie van vloeren",
      "Isolatie van beglazing",
    ],
    galleryId: "renovatie",
  },
  onderhoud: {
    summary: "Inspectie en advies, goten, kozijnen en betimmeringen. Spoedopdrachten en regulier onderhoud.",
    description:
      "Klein onderhoud aan woning, kantoor of bedrijfspand: inspectie, goten, kozijnen en betimmeringen. Spoed en regulier onderhoud.",
    paragraphs: [
      "Goed onderhoud van een woning, kantoor of bedrijfspand is van belang: zonder onderhoud kunt u later hoge onverwachte kosten tegenkomen. Met tijdig onderhoud verlengt u de levensduur. Dat wat goed is, moet goed blijven. Goten, kozijnen en overige betimmeringen moeten tijdig geïnspecteerd worden. Zo nodig moeten deze vervangen worden.",
      "Zowel voor inspectie en advies als voor het uitvoeren van onderhoudswerk kunt u een beroep op ons doen. Onze allround medewerkers verzorgen zowel uw spoedopdrachten als regulier onderhoud.",
    ],
    points: [
      "Inspectie en advies",
      "Goten",
      "Kozijnen",
      "Overige betimmeringen",
      "Vervangen waar dat nodig is",
      "Spoedopdrachten",
      "Regulier onderhoud",
    ],
    galleryId: "onderhoud",
  },
  timmerwerk: {
    summary: "Eigen timmerwerkplaats en machinepark. Kozijnen, ramen, deuren en trappen op maat, passend bij bestaande detaillering.",
    description:
      "Machinaal timmerwerk in de eigen timmerwerkplaats: ramen, deuren, kozijnen, trappen en lijstwerk op maat, passend bij bestaande detaillering.",
    paragraphs: [
      "Sinds 1986 heeft Aannemersbedrijf Haarman een eigen timmerwerkplaats. Vele gebouwen op leeftijd vragen speciale aandacht bij de detaillering van kozijn, deur of raam. We kijken naar de bestaande situatie en maken daar de bijpassende onderdelen bij.",
      "Ons bedrijf beschikt over een machinepark waar ramen, deuren, kozijnen, trappen, architraven en lijstwerk op maat gemaakt kunnen worden. Opdrachten worden met grote zorgvuldigheid uitgevoerd.",
      "De eigen timmerwerkplaats maakt dat we u met korte levertijden en extra service van dienst kunnen zijn en toch kwaliteit kunnen blijven garanderen. Het resultaat: maatwerk in houtbewerking.",
    ],
    points: [
      "Ramen op maat",
      "Deuren op maat",
      "Kozijnen op maat",
      "Trappen",
      "Architraven en lijstwerk",
      "Passend bij bestaande detaillering",
      "Eigen machinepark, sinds 1986",
    ],
    showFleet: true,
  },
  badkamer: {
    summary: "Natte ruimten, met regie over installatie, loodgieter, tegelzetter en timmerwerk. Eén aanspreekpunt.",
    description:
      "Badkamer en andere natte ruimten verbouwen. Eén aanspreekpunt voor installatie, loodgieter, tegelzetter en timmerwerk.",
    paragraphs: [
      "Het verbouwen van de zogenaamde natte ruimten verdient extra zorg. Aan deze ruimten worden bijzondere eisen gesteld, die te maken hebben met het comfort binnen en buiten de ruimte.",
      "Om er zeker van te zijn dat uw badkamer, bijkeuken, toilet of ander sanitair aan uw wensen voldoet, besteden we extra zorg aan de bouwkundige aanpassingen. Samen met de keuzen die u maakt voor aankleding en sanitair zorgen we voor de regie van alle betrokken disciplines: installatie, loodgieter en leidingwerk, tegelzetter en timmerwerk.",
      "Zo houdt u één aanspreekpunt tijdens de verbouwing. Het ongemak blijft beperkt, en de ruimte wordt zoals u die voor ogen heeft.",
    ],
    points: [
      "Badkamer",
      "Bijkeuken",
      "Toilet en ander sanitair",
      "Bouwkundige aanpassingen",
      "Installatie en leidingwerk",
      "Loodgieter",
      "Tegelzetter",
      "Timmerwerk",
      "Eén aanspreekpunt",
    ],
    galleryId: "badkamer",
  },
  utiliteitsbouw: {
    summary: "Gebouwen voor uiteenlopende branches, samen met u en de juiste toeleveranciers.",
    description:
      "Utiliteitsbouw voor uiteenlopende branches. Samen met u, en waar nodig met instanties en toeleveranciers, van ontwerp tot oplevering.",
    paragraphs: [
      "Utiliteitsbouw is een groot begrip. Iedere toepassing of bedrijfssector kent eigen kenmerken en eisen. Dankzij onze ervaring zijn wij in staat om samen met u, en met de juiste instanties of toeleveranciers, een gebouw te realiseren dat aan de gestelde gebruikerseisen voldoet.",
      "Het streven naar een tevreden opdrachtgever is daarbij bepalend voor onze manier van werken. Onze opdrachtgevers zijn vertegenwoordigd in uiteenlopende branches en komen terug met nieuwe opdrachten.",
    ],
    points: [
      "Gebouwen voor uiteenlopende branches",
      "Eigen eisen per sector",
      "Samen met u",
      "Samen met de juiste instanties",
      "Samen met toeleveranciers",
      "Een gebouw dat aan de gebruikerseisen voldoet",
    ],
  },
  agrarisch: {
    summary: "Melkstallen, ligboxstallen, jongveestallen en werktuigbergingen. Nieuwbouw en aanpassing.",
    description:
      "Agrarische bouw in Harfsen en omstreken: melkstallen, ligboxstallen, jongveestallen en werktuigbergingen. Nieuwbouw en aanpassing.",
    paragraphs: [
      "In de agrarische sector hebben we veel opdrachtgevers. De herstructurering van het platteland zorgt ervoor dat veel agrarische bedrijven hun activiteiten veranderen, aanpassen of uitbreiden. Zowel met nieuwbouw van diverse soorten stallen als met aanpassing van bestaande stallen hebben we ervaring opgebouwd.",
      "Melkstallen, ligboxstallen, jongveestallen, werktuigbergingen: we hebben ze gebouwd of aangepast in de ruimteverdeling. Dan gaat het over de bouw van de stallen zelf, maar ook over de inrichting en indeling. Daarvoor overleggen we tot in detail met specialisten.",
      "Uiteraard zijn we geen agrariërs, maar we weten wel wat boeren willen, hoe ze denken en hoe ze willen werken. Daardoor voelen we ons thuis bij hen en weten zij wat ze aan ons hebben. De ene vakman werkt aan de bedrijfsmiddelen van de ander.",
    ],
    points: [
      "Melkstallen",
      "Ligboxstallen",
      "Jongveestallen",
      "Werktuigbergingen",
      "Nieuwbouw van stallen",
      "Aanpassing van bestaande stallen",
      "Inrichting en indeling, samen met specialisten",
    ],
    galleryId: "agrarisch",
  },
  service: {
    summary: "Bouwmaterialen en kozijnen, tekenwerk en advies. Ook voor doe-het-zelvers, zelfs op zaterdag.",
    description:
      "Service van Aannemersbedrijf Haarman: levering van bouwmaterialen en kozijnen, tekenwerk en advies voor vergunningen, ook voor doe-het-zelvers.",
    paragraphs: [
      "Ook als u zelf uw klus klaart, kunt u bij Aannemersbedrijf Haarman terecht. Voor advies, tekenwerk en materiaal.",
      "Iedere particulier en elk bedrijf kan bij ons terecht voor levering van materialen en kozijnen. We werken samen met een aantal vaste leveranciers, zodat we materiaal leveren waar we achter staan. Wanneer u bij ons materiaal bestelt, voorzien we u van advies en kijken we tijdens de bouw of alles goed verloopt.",
      "Nieuwbouw of verbouw, en tekeningen nodig voor de aanvraag van uw vergunningen? Ook voor de doe-het-zelver regelen we het benodigde advies en tekenwerk. Bovendien begeleiden we u tijdens de bouw, zelfs op zaterdag.",
    ],
    points: [
      "Bouwmaterialen",
      "Kozijnen",
      "Advies bij de bestelling",
      "Tekenwerk voor vergunningen",
      "Ook als u zelf uw klus klaart",
      "Begeleiding, zelfs op zaterdag",
    ],
  },
};

export const services: Service[] = serviceLinks.map((link) => {
  const slug = link.href.split("/").pop() ?? "";
  const body = copy[slug];
  if (!body) throw new Error(`Ontbrekende tekst voor ${slug}`);
  return { href: link.href, slug, label: link.label, group: link.group, ...body };
});

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
