/** Shared shell for long-form legal copy. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-sm leading-relaxed text-bone/70 [&_a]:text-cyan [&_a:hover]:text-bone">
      {children}
    </div>
  );
}

export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display pt-6 text-3xl text-magenta first:pt-0">{children}</h2>
  );
}
