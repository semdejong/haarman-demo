/**
 * Bedrijfsgegevens voor deze demo. Geen adres, postcode, KvK of fax:
 * die blijven bewust achterwege.
 */
export const content = {
  slug: "haarman-demo",

  company: {
    name: "Aannemersbedrijf Haarman",
    legalName: "Aannemersbedrijf Haarman B.V.",
    tagline: "Sinds 1850 wordt er vanaf deze plek in Harfsen gebouwd",
    description:
      "Traditioneel aannemersbedrijf, gespecialiseerd in de burger- en utiliteitsbouw, voornamelijk in Harfsen en omstreken.",
    city: "Harfsen",
    region: "Harfsen en omstreken",
    phoneDisplay: "0573 - 431400",
    phoneHref: "tel:+31573431400",
    email: "info@aannemersbedrijfhaarman.nl",
  },

  colors: {
    primary: "#004C99",
    primaryForeground: "#ffffff",
    accent: "#9A4A32",
    background: "#F6F3EE",
    foreground: "#16202E",
    muted: "#EFE6D6",
  },

  seo: {
    title: "Aannemersbedrijf Haarman | Sinds 1850 in Harfsen",
    description:
      "Traditioneel aannemersbedrijf in Harfsen. Nieuwbouw, verbouw, woonboerderijen, renovatie en onderhoud. Van een dakpan tot een landhuis. Vraag een vrijblijvende werkopname aan.",
    lang: "nl",
  },
};

export type Content = typeof content;
