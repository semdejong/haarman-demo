export const phone = {
  display: "0573 - 431400",
  href: "tel:+31573431400",
} as const;

export const email = "info@aannemersbedrijfhaarman.nl";

export const timeline = [
  {
    year: "1850",
    text: "Hendrikus Lamberts is landbouwer en metselt in de tijd die over is bij boeren en burgers. Zijn vervoer is een karretje achter de fiets.",
  },
  {
    year: "1878",
    text: "Jan Lamberts zet het vak voort, in dezelfde vorm en vanaf dezelfde plek.",
  },
  {
    year: "ca. 1900",
    text: "De zoon van Jan neemt het bedrijf over. Albert Lamberts werkt ongeveer een jaar samen met oom Dieks, die later een eigen bedrijf begint.",
  },
  {
    year: "1958",
    text: "Zoon Jan zet het bedrijf voort. Dat is van korte duur: hij wordt ernstig ziek.",
  },
  {
    year: "1963",
    text: "H. Bargeman neemt het bedrijf over en bouwt het woonhuis naast het bedrijf.",
  },
  {
    year: "1977",
    text: "Bertus Haarman neemt het bedrijf over. Het gaat verder onder zijn eigen naam: Aannemersbedrijf Haarman.",
  },
  {
    year: "1986",
    text: "Een nieuwe timmerwerkplaats. Vanaf dat moment wordt ook timmerwerk uitgevoerd.",
  },
  {
    year: "2008",
    text: "De volgende generatie treedt in dienst om de naam verder uit te dragen.",
  },
] as const;

export const processSteps = [
  {
    title: "Werkopname",
    text: "Tijdens een vrijblijvende werkopname bespreken we uw wensen.",
  },
  {
    title: "Schetsontwerp",
    text: "Heeft u nog geen tekeningen, dan werken we uw ideeën uit tot een schetsontwerp.",
  },
  {
    title: "Vrijblijvende offerte",
    text: "Op basis daarvan ontvangt u een vrijblijvende offerte van de werkzaamheden.",
  },
  {
    title: "Vergunningen",
    text: "Indien nodig vragen we de benodigde vergunningen aan.",
  },
  {
    title: "Planning",
    text: "Zodra de voorbereiding is afgerond, plannen we de bouw en houden we de overlast beperkt.",
  },
  {
    title: "Eén aanspreekpunt",
    text: "Een vaste ploeg en vaste onderaannemers. Voor, tijdens en na de bouw heeft u één aanspreekpunt.",
  },
] as const;

export const projectTypes = [
  "Nieuwbouw",
  "Verbouw/aanbouw",
  "Woonboerderij",
  "Renovatie",
  "Klein onderhoud",
  "Machinaal timmerwerk",
  "Badkamer",
  "Utiliteitsbouw",
  "Agrarisch",
  "Materialen/tekenwerk",
] as const;

export const faq = [
  {
    q: "Wat is een werkopname?",
    a: "Tijdens een vrijblijvende werkopname bespreken we uw wensen. U weet daarna waar u aan toe bent, voordat er gebouwd wordt.",
  },
  {
    q: "Ik heb nog geen tekeningen, kan dat?",
    a: "Ja. Heeft u nog geen tekeningen, dan werken we uw ideeën uit tot een schetsontwerp. Op basis daarvan ontvangt u een vrijblijvende offerte.",
  },
  {
    q: "Regelen jullie de vergunning?",
    a: "Ja, indien nodig vragen we de benodigde vergunningen aan. Bij nieuwbouw kunt u ook het regelen van de bouwvergunning en, indien gewenst, tekeningen van de architect aan ons overlaten.",
  },
  {
    q: "Doen jullie ook kleine klussen?",
    a: "Ja. Van het vervangen van een dakpan tot nieuwbouw van landhuizen. Onze allround medewerkers verzorgen zowel spoedopdrachten als regulier onderhoud.",
  },
  {
    q: "Kan ik bij jullie alleen materiaal of kozijnen kopen?",
    a: "Ja. Iedere particulier en elk bedrijf kan bij ons terecht voor levering van materialen en kozijnen. Ook voor advies en tekenwerk, en ook als u zelf uw klus klaart. We begeleiden u tijdens de bouw, zelfs op zaterdag.",
  },
  {
    q: "Wat is de verbouwgarantie van BouwGarant?",
    a: "Aannemersbedrijf Haarman is lid van Stichting BouwGarant. Bij het afsluiten van een verbouwgarantie bent u gewaarborgd van kwaliteit en financiële zekerheid. Neemt u contact op, dan vertellen we u graag meer.",
  },
  {
    q: "In welke regio werken jullie?",
    a: "Voornamelijk in Harfsen en omstreken, in de gemeente Lochem.",
  },
] as const;

export function mailtoHref(subject: string, lines: string[]) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
