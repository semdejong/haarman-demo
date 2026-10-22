export default function Logo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <svg viewBox="0 0 220 56" className="h-11 w-auto" aria-hidden>
        <rect width="220" height="56" fill="#0047A3" />
        <path d="M14 28 L28 14 L42 28" fill="none" stroke="#fff" strokeWidth="1.6" />
        <path d="M18 28 V40 H38 V28" fill="none" stroke="#fff" strokeWidth="1.3" />
        <path d="M52 16 H60 V38" fill="none" stroke="#fff" strokeWidth="2.4" />
        <text
          x="66"
          y="38"
          fill="#fff"
          fontSize="22"
          fontWeight="700"
          letterSpacing="0.5"
          style={{ fontFamily: "var(--font-barlow), sans-serif" }}
        >
          HAARMAN
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 460 78" className="h-auto w-full" aria-hidden>
      <rect width="460" height="78" fill="#0047A3" />
      <path d="M18 36 L36 16 L54 36" fill="none" stroke="#fff" strokeWidth="1.7" />
      <path d="M24 36 V52 H48 V36" fill="none" stroke="#fff" strokeWidth="1.4" />
      <path d="M36 22 V32" stroke="#fff" strokeWidth="1.2" />
      <text
        x="70"
        y="28"
        fill="#fff"
        fontSize="15"
        style={{ fontFamily: "var(--font-source), sans-serif" }}
      >
        Aannemersbedrijf
      </text>
      <path d="M70 36 H80 V60" fill="none" stroke="#fff" strokeWidth="3" />
      <text
        x="88"
        y="58"
        fill="#fff"
        fontSize="28"
        fontWeight="700"
        letterSpacing="0.8"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        HAARMAN
      </text>
      <text
        x="318"
        y="28"
        fill="#fff"
        fontSize="14"
        fontStyle="italic"
        letterSpacing="1.2"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        NIEUWBOUW
      </text>
      <text
        x="318"
        y="46"
        fill="#fff"
        fontSize="14"
        fontStyle="italic"
        letterSpacing="1.2"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        VERBOUW
      </text>
      <text
        x="318"
        y="64"
        fill="#fff"
        fontSize="14"
        fontStyle="italic"
        letterSpacing="1.2"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        ONDERHOUD
      </text>
    </svg>
  );
}
