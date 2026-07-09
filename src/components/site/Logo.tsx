import Link from "next/link";
import { site } from "@/lib/site";

/** Neon wordmark lockup with Devanagari sub-line. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex flex-col leading-none ${className}`}
      aria-label={`${site.name} — home`}
    >
      <span className="font-display neon-magenta text-2xl tracking-[0.02em] transition-[text-shadow] sm:text-[26px]">
        Mumbai Local
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-marigold">
          Indian Food
        </span>
        <span className="font-deva text-[11px] text-bone/55">{site.deva}</span>
      </span>
    </Link>
  );
}
