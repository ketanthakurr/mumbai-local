/**
 * Mumbai street motifs drawn from the menu card — auto-rickshaw, Gateway of
 * India, lotus and a paisley border. All use currentColor so they can be
 * neon-tinted. Decorative only: every instance is aria-hidden.
 */

type P = { className?: string };

export function Rickshaw({ className }: P) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {/* canopy */}
      <path d="M22 46c0-20 14-32 34-32s34 12 34 30v6" />
      {/* body */}
      <path d="M14 46h92v20a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V46Z" />
      {/* front */}
      <path d="M14 52c-6 0-9 4-9 10v4h9" />
      <path d="M60 46V22" />
      {/* wheels */}
      <circle cx="30" cy="78" r="9" />
      <circle cx="88" cy="78" r="9" />
      {/* headlamp */}
      <circle cx="9" cy="60" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GatewayArch({ className }: P) {
  return (
    <svg viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M14 116V52c0-4 3-7 7-7h10V30h12V45h32V30h12v15h10c4 0 7 3 7 7v64" transform="translate(6 0)" />
      <path d="M52 116V80a18 18 0 0 1 36 0v36" />
      <path d="M22 45c0-8 5-13 12-14M118 45c0-8-5-13-12-14" />
      <path d="M8 116h124" />
      <path d="M40 30l30-20 30 20" />
    </svg>
  );
}

export function Lotus({ className }: P) {
  return (
    <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M50 12c6 12 6 30 0 46-6-16-6-34 0-46Z" />
      <path d="M50 58c-9-8-22-10-34-6 4-14 20-20 34-10" />
      <path d="M50 58c9-8 22-10 34-6-4-14-20-20-34-10" />
      <path d="M50 58c-5-9-15-15-27-16 0-2 1-4 2-6M50 58c5-9 15-15 27-16 0-2-1-4-2-6" />
    </svg>
  );
}

/** Iconic Mumbai kaali-peeli (black-and-yellow) taxi — a Premier Padmini. */
export function Taxi({ className }: P) {
  return (
    <svg viewBox="0 0 140 74" className={className} aria-hidden>
      {/* body */}
      <path d="M8 54c0-3 2-5 5-5h114c3 0 5 2 5 5v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-6Z" fill="#141414" />
      {/* cabin (yellow top) */}
      <path d="M30 49l12-18c1-2 3-3 5-3h44c2 0 4 1 5 3l14 18H30Z" fill="#f6b21a" />
      <path d="M52 28l-8 18h20V28H52ZM74 28v18h22l-12-16c-1-1-2-2-4-2h-6Z" fill="#0d1519" opacity="0.85" />
      {/* roof sign */}
      <rect x="60" y="20" width="18" height="7" rx="1.5" fill="#f6b21a" />
      {/* trim */}
      <rect x="8" y="55" width="124" height="4" fill="#f6b21a" />
      {/* wheels */}
      <circle cx="38" cy="64" r="9" fill="#0d1519" stroke="#f6b21a" strokeWidth="2.4" />
      <circle cx="102" cy="64" r="9" fill="#0d1519" stroke="#f6b21a" strokeWidth="2.4" />
      {/* headlamp */}
      <circle cx="130" cy="55" r="2.4" fill="#fff2cf" />
    </svg>
  );
}

/** Repeating ornamental border, echoing the menu's pink damask frame. */
export function PaisleyDivider({ className }: P) {
  return (
    <svg viewBox="0 0 96 16" preserveAspectRatio="none" className={className} aria-hidden style={{ width: "100%", height: 16 }}>
      <defs>
        <pattern id="paisley" width="48" height="16" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
            <path d="M8 8c0-4 4-6 7-6s6 3 6 6-3 5-6 5c-2 0-4-1-4-3s2-3 3-2" />
            <circle cx="24" cy="8" r="1.2" fill="currentColor" stroke="none" />
            <path d="M40 8c0-4-4-6-7-6s-6 3-6 6 3 5 6 5c2 0 4-1 4-3s-2-3-3-2" />
            <path d="M46 3c1 1 1 3 0 5M2 3c-1 1-1 3 0 5" />
          </g>
        </pattern>
      </defs>
      <rect width="96" height="16" fill="url(#paisley)" />
    </svg>
  );
}
