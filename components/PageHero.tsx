import { OfferteLink, PhoneLink } from "@/components/Buttons";

export default function PageHero({
  eyebrow,
  title,
  lede,
  section = "hero",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  section?: string;
}) {
  return (
    <header data-section={section} className="border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-3 max-w-4xl text-5xl text-ink md:text-6xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lede}</p> : null}
        <div className="cta-row mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <OfferteLink>Vrijblijvende werkopname</OfferteLink>
          <PhoneLink />
        </div>
      </div>
    </header>
  );
}
