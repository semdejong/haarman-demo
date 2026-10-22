import Link from "next/link";

export default function NotFound() {
  return (
    <section data-section="niet-gevonden" className="mx-auto max-w-3xl px-5 py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-3 text-5xl">Deze pagina bestaat niet</h1>
      <p className="mt-4 text-lg">De pagina is verplaatst of het adres klopt niet.</p>
      <Link href="/" className="mt-8 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
        Naar de homepage
      </Link>
    </section>
  );
}
