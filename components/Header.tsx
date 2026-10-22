"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { OfferteLink } from "@/components/Buttons";
import { mainNav, mobileNav, serviceLinks } from "@/lib/menu";
import { phone } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="h-1 bg-brand" />
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-5">
      <div className="flex items-center gap-3">
        <Link href="/" className="mr-auto shrink-0" aria-label="Aannemersbedrijf Haarman, naar de homepage">
          <span className="block w-[148px] sm:hidden">
            <Logo compact />
          </span>
          <span className="hidden w-[220px] sm:block lg:w-[300px]">
            <Logo />
          </span>
        </Link>

        <a href={phone.href} className="hidden min-h-11 items-center whitespace-nowrap font-display text-lg font-semibold tracking-wide text-brand sm:inline-flex">
          {phone.display}
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          <details className="relative">
            <summary className="cursor-pointer list-none font-display text-base font-semibold uppercase tracking-wide text-ink [&::-webkit-details-marker]:hidden">
              Diensten
            </summary>
            <div className="absolute right-0 z-20 mt-3 w-72 border border-ink/10 bg-paper p-3 shadow-sm">
              <Link href="/diensten" className="block min-h-11 px-2 py-2 text-sm font-semibold text-brand">
                Alle diensten
              </Link>
              <ul>
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block min-h-11 px-2 py-2 text-base hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>
          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="font-display text-base font-semibold uppercase tracking-wide hover:text-brand aria-[current=page]:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="hidden lg:inline-flex">
          <OfferteLink>Werkopname</OfferteLink>
        </span>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>
      <a href={phone.href} className="mt-1 inline-flex min-h-11 items-center font-display text-xl font-semibold tracking-wide text-brand sm:hidden">
        {phone.display}
      </a>
      </div>

      <nav
        id="site-menu"
        hidden={!open}
        aria-label="Mobiel menu"
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink/10 bg-paper px-4 py-4 lg:hidden"
      >
        <ul className="mx-auto max-w-6xl">
          {mobileNav.map((item) => (
            <li key={item.href + item.label}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center border-b border-ink/10 font-display text-xl font-semibold uppercase tracking-wide"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
