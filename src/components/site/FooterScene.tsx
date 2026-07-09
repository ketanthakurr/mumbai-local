import { Rickshaw, Taxi } from "./Motifs";

/**
 * A little Mumbai street running along the top of the footer: a rickshaw and a
 * kaali-peeli taxi drive across a road, over a local-train rail line.
 * Pure CSS animation; vehicles park in view under reduced-motion (globals.css).
 */
export function FooterScene() {
  return (
    <div
      className="relative h-28 w-full overflow-hidden border-b border-white/8 bg-ink"
      aria-hidden
    >
      {/* skyline silhouette */}
      <svg
        className="absolute bottom-8 left-0 h-14 w-full text-ink-3"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
        fill="currentColor"
      >
        <path d="M0 60V34h40V20h30v14h50V26h24v8h60V16h28v18h70V30h40v-8h24v8h60V24h30v10h80V18h26v16h70V28h44v6h80V22h28v12h70V30h40v-6h24v6h60v0H0Z" />
      </svg>

      {/* road */}
      <div className="absolute inset-x-0 bottom-7 h-8 bg-ink-2" />
      <div className="absolute inset-x-0 bottom-[38px] h-px bg-white/12" />
      {/* lane dashes */}
      <div
        className="absolute inset-x-0 bottom-[26px] h-px opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-marigold) 0 18px, transparent 18px 40px)",
        }}
      />
      {/* rail line below the road */}
      <div className="absolute inset-x-0 bottom-2 h-px bg-white/10" />
      <div
        className="absolute inset-x-0 bottom-[3px] h-1 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-magenta) 0 2px, transparent 2px 14px)",
        }}
      />

      {/* vehicles */}
      <div
        className="ml-vehicle park-1 text-magenta"
        style={{ "--dur": "16s" } as React.CSSProperties}
      >
        <Rickshaw className="h-9 w-12 drop-shadow-[0_0_10px_rgba(255,46,136,0.35)]" />
      </div>
      <div
        className="ml-vehicle park-2"
        style={{ "--dur": "23s", "--delay": "-8s" } as React.CSSProperties}
      >
        <Taxi className="h-10 w-16" />
      </div>
    </div>
  );
}
