export default function Bestek({ title, points }: { title: string; points: string[] }) {
  return (
    <aside className="bestek" aria-label={title}>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brick">Op het bestek</p>
      <h2 className="mt-2 font-display text-2xl font-semibold">{title}</h2>
      <ol className="mt-4">
        {points.map((point, index) => (
          <li key={point} className="flex min-h-11 items-center gap-3 border-b border-brand/15">
            <span className="w-8 font-display text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-base">{point}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
