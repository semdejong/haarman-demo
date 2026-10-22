import Link from "next/link";
import Logo from "@/components/Logo";
import { content } from "@/content";
import { serviceLinks } from "@/lib/menu";
import { email, phone } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-section="footer" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Aannemersbedrijf Haarman, naar de homepage" className="inline-flex">
            <Logo full />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/80">
            {content.company.legalName}
            <br />
            {content.company.city}
          </p>
        </div>
        <div>
          <p className="eyebrow text-straw">Diensten</p>
          <ul className="mt-3">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-base hover:text-straw">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-straw">Contact</p>
          <a href={phone.href} className="mt-3 flex min-h-11 items-center font-display text-2xl font-semibold">
            {phone.display}
          </a>
          <a href={`mailto:${email}`} className="flex min-h-11 items-center break-all text-base underline decoration-white/30 underline-offset-4">
            {email}
          </a>
          <p className="mt-2 text-sm text-paper/80">Bel of mail voor een afspraak.</p>
          <a href="https://sleads.nl" target="_blank" rel="noopener" className="mt-6 inline-flex min-h-11 items-center text-sm text-straw">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
