import { Marquee } from "@/components/motion/Marquee";
import { menu, beverages } from "@/lib/menu";

const items = [
  ...menu.flatMap((c) => c.dishes.slice(0, 2)),
  ...beverages,
].map((d) => ({ name: d.name, price: d.price }));

export function DishTicker({ label }: { label: string }) {
  return (
    <div
      className="relative border-y border-magenta/40 bg-ink-2"
      style={{ boxShadow: "0 0 30px -10px var(--color-magenta)" }}
    >
      <Marquee aria-label={label}>
        {items.map((d, i) => (
          <span
            key={`${d.name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap px-6 py-3.5"
          >
            <span className="font-display text-xl uppercase tracking-wide text-bone/90">
              {d.name}
            </span>
            <span className="font-mono text-sm tabular text-marigold">€{d.price}</span>
            <span className="text-cyan" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
