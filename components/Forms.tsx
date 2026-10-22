"use client";

import { useState, type FormEvent } from "react";
import { email, mailtoHref, projectTypes } from "@/lib/site";

function fieldClass() {
  return "mt-1 w-full border border-ink/20 bg-white px-3 py-3 text-base text-ink";
}

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "short" }) {
  const [sent, setSent] = useState(false);
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      `Naam: ${String(data.get("naam") ?? "")}`,
      `Telefoonnummer: ${String(data.get("telefoon") ?? "")}`,
      `E-mailadres: ${String(data.get("email") ?? "")}`,
    ];
    if (variant === "contact") lines.push(`Onderwerp: ${String(data.get("onderwerp") ?? "")}`);
    lines.push("", String(data.get("bericht") ?? ""));
    const next = mailtoHref("Bericht via de website", lines);
    setHref(next);
    setSent(true);
    window.location.href = next;
  }

  if (sent) {
    return (
      <div role="status" className="border border-brand/30 bg-white p-6">
        <h3 className="font-display text-2xl font-semibold">Uw bericht staat klaar</h3>
        <p className="mt-3 text-base leading-relaxed">
          Uw e-mailprogramma opent een bericht aan {email}. Verstuur die e-mail om uw bericht te verzenden.
        </p>
        <a href={href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand underline">
          E-mail opnieuw openen
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <label className="block text-sm font-semibold">
        Naam *
        <input name="naam" required autoComplete="name" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        Telefoonnummer *
        <input name="telefoon" type="tel" required autoComplete="tel" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        E-mailadres *
        <input name="email" type="email" required autoComplete="email" className={fieldClass()} />
      </label>
      {variant === "contact" ? (
        <label className="block text-sm font-semibold">
          Onderwerp *
          <input name="onderwerp" required className={fieldClass()} />
        </label>
      ) : null}
      <label className="block text-sm font-semibold">
        Bericht *
        <textarea name="bericht" required rows={5} className={fieldClass()} />
      </label>
      <button
        type="submit"
        data-cta="offerte"
        className="inline-flex min-h-11 items-center justify-center bg-brand px-5 font-display text-base font-semibold uppercase tracking-wide text-white hover:bg-brand-deep"
      >
        Verstuur via e-mail
      </button>
    </form>
  );
}

export function WerkopnameForm() {
  const [sent, setSent] = useState(false);
  const [href, setHref] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      "Aanvraag vrijblijvende werkopname",
      "",
      `Naam: ${String(data.get("naam") ?? "")}`,
      `Telefoonnummer: ${String(data.get("telefoon") ?? "")}`,
      `E-mailadres: ${String(data.get("email") ?? "")}`,
      `Plaats: ${String(data.get("plaats") ?? "")}`,
      `Soort project: ${String(data.get("soort") ?? "")}`,
      `Tekeningen: ${String(data.get("tekeningen") ?? "")}`,
      `Gewenste periode: ${String(data.get("periode") ?? "")}`,
      "",
      "Omschrijving:",
      String(data.get("omschrijving") ?? ""),
    ];
    const next = mailtoHref("Aanvraag vrijblijvende werkopname", lines);
    setHref(next);
    setSent(true);
    window.location.href = next;
  }

  if (sent) {
    return (
      <div role="status" className="border border-brand/30 bg-white p-6">
        <h3 className="font-display text-2xl font-semibold">Uw aanvraag staat klaar</h3>
        <p className="mt-3 text-base leading-relaxed">
          Uw e-mailprogramma opent een bericht aan {email}. Verstuur die e-mail om de vrijblijvende werkopname aan te
          vragen.
        </p>
        <a href={href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand underline">
          E-mail opnieuw openen
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="block text-sm font-semibold">
        Naam *
        <input name="naam" required autoComplete="name" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        Telefoonnummer *
        <input name="telefoon" type="tel" required autoComplete="tel" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        E-mailadres *
        <input name="email" type="email" required autoComplete="email" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        Plaats *
        <input name="plaats" required autoComplete="address-level2" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        Soort project *
        <select name="soort" required defaultValue="" className={fieldClass()}>
          <option value="" disabled>
            Kies een soort project
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <fieldset>
        <legend className="text-sm font-semibold">Heeft u al tekeningen? *</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {["Ja", "Nee", "Deels"].map((choice) => (
            <label key={choice} className="inline-flex min-h-11 items-center gap-2">
              <input type="radio" name="tekeningen" value={choice} required />
              {choice}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-semibold">
        Gewenste periode <span className="font-normal text-ink/70">(niet verplicht)</span>
        <input name="periode" className={fieldClass()} />
      </label>
      <label className="block text-sm font-semibold">
        Omschrijving *
        <textarea name="omschrijving" required rows={6} className={fieldClass()} />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input name="privacy" type="checkbox" required className="mt-1 h-5 w-5 shrink-0" />
        <span>
          Ik ga ermee akkoord dat deze gegevens per e-mail worden verstuurd naar Aannemersbedrijf Haarman, zodat u
          contact met mij kunt opnemen over mijn aanvraag.
        </span>
      </label>
      <button
        type="submit"
        data-cta="offerte"
        className="inline-flex min-h-11 items-center justify-center bg-brand px-5 font-display text-base font-semibold uppercase tracking-wide text-white hover:bg-brand-deep"
      >
        Vrijblijvende werkopname aanvragen
      </button>
    </form>
  );
}
