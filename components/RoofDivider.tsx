export default function RoofDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center text-brand ${className}`} aria-hidden>
      <svg viewBox="0 0 168 28" className="h-7 w-40">
        <path d="M2 22 H62 L84 6 L106 22 H166" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M84 6 V24" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1.5 2.2" />
        <path d="M62 22 V26 M106 22 V26" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

export function GableMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 72" className={className} aria-hidden>
      <path d="M8 64 L60 10 L112 64" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M28 64 V40 H92 V64" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 22 V36" stroke="currentColor" strokeWidth="1" />
      <path d="M46 64 V50 H74 V64" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
