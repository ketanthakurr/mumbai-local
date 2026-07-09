import { type ReactNode } from "react";

/**
 * Infinite horizontal ticker — the running "next train" indicator.
 * Content is duplicated so the CSS translateX(-50%) loop is seamless.
 * Pauses on hover; disabled under prefers-reduced-motion (see globals.css).
 */
export function Marquee({
  children,
  className = "",
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      <div className="marquee-track">
        <div className="flex shrink-0" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
