export const serviceLinks = [
  { href: "/diensten/nieuwbouw", label: "Nieuwbouw", group: "bouwen" },
  { href: "/diensten/utiliteitsbouw", label: "Utiliteitsbouw", group: "bouwen" },
  { href: "/diensten/agrarisch", label: "Agrarisch", group: "bouwen" },
  { href: "/diensten/verbouw-en-aanbouw", label: "Verbouw en aanbouw", group: "verbouwen" },
  { href: "/diensten/woonboerderijen", label: "Woonboerderijen", group: "verbouwen" },
  { href: "/diensten/renovatie", label: "Renovatie", group: "verbouwen" },
  { href: "/diensten/badkamer", label: "Badkamer", group: "verbouwen" },
  { href: "/diensten/onderhoud", label: "Klein onderhoud", group: "vakwerk" },
  { href: "/diensten/timmerwerk", label: "Machinaal timmerwerk", group: "vakwerk" },
  { href: "/diensten/service", label: "Service", group: "vakwerk" },
] as const;

export type ServiceGroup = (typeof serviceLinks)[number]["group"];

export const groupMeta: Record<ServiceGroup, { title: string; lede: string }> = {
  bouwen: {
    title: "Bouwen",
    lede: "Van de fundering tot de laatste afwerking, voor woning, bedrijf en boerenerf.",
  },
  verbouwen: {
    title: "Verbouwen en renoveren",
    lede: "Aanbouw, woonboerderij, renovatie of badkamer. Eén aanspreekpunt voor, tijdens en na de bouw.",
  },
  vakwerk: {
    title: "Vakwerk en service",
    lede: "Onderhoud, timmerwerk op maat, en materialen of tekenwerk als u zelf aan de slag gaat.",
  },
};

export const mainNav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/diensten/woonboerderijen", label: "Woonboerderijen" },
  { href: "/ons-werk", label: "Ons werk" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

export const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Alle diensten" },
  ...serviceLinks.map((item) => ({ href: item.href, label: item.label })),
  { href: "/ons-werk", label: "Ons werk" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
  { href: "/werkopname", label: "Werkopname aanvragen" },
] as const;
