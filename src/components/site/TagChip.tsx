import { Leaf, Flame } from "lucide-react";
import type { DishTag } from "@/lib/menu";

const tone: Record<DishTag, string> = {
  veg: "border-jade/40 bg-jade/12 text-jade",
  mild: "border-marigold/40 bg-marigold/12 text-marigold",
  hot: "border-chili/40 bg-chili/12 text-chili",
  "very-hot": "border-chili/50 bg-chili/18 text-chili",
  signature: "border-magenta/45 bg-magenta/12 text-magenta",
};

export function TagChip({ tag, label }: { tag: DishTag; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tone[tag]}`}
    >
      {tag === "veg" && <Leaf className="size-3" aria-hidden />}
      {(tag === "hot" || tag === "very-hot") && (
        <Flame className="size-3" aria-hidden />
      )}
      {label}
    </span>
  );
}
