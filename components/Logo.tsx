function Roof({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 32" className={className} aria-hidden>
      <path d="M2 16 L18 3 L34 16" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 16 V28 H29 V16" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 8 V14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Logo({ compact = false, full = false }: { compact?: boolean; full?: boolean }) {
  return (
    <span className={`inline-flex items-center bg-[#0047A3] text-white ${compact ? "gap-2 px-2.5 py-2" : "gap-3 px-3 py-2"}`}>
      <Roof className={compact ? "h-7 w-8" : "h-8 w-9"} />
      <span className="leading-none">
        {compact ? null : <span className="block font-sans text-[11px] tracking-wide">Aannemersbedrijf</span>}
        <span className={`block font-display font-bold tracking-[0.06em] ${compact ? "text-xl" : "mt-1 text-[1.7rem]"}`}>
          HAARMAN
        </span>
      </span>
      {compact ? null : (
        <span className={`ml-1 border-l border-white/35 pl-3 font-display text-[13px] italic leading-[1.15] tracking-[0.16em] ${full ? "block" : "hidden xl:block"}`}>
          NIEUWBOUW
          <br />
          VERBOUW
          <br />
          ONDERHOUD
        </span>
      )}
    </span>
  );
}
