import { Nut, Milk, Wheat, type LucideIcon } from "lucide-react";
import type { Allergen } from "@/lib/menu";

const icon: Record<Allergen, LucideIcon> = {
  nuts: Nut,
  dairy: Milk,
  gluten: Wheat,
};

/**
 * Tiny allergen markers for a dish card. Each icon carries an accessible label
 * (e.g. "Contains dairy") so the meaning is never colour- or glyph-only.
 */
export function AllergenIcons({
  allergens,
  labels,
}: {
  allergens: Allergen[];
  /** allergen -> localized "Contains …" string */
  labels: Record<Allergen, string>;
}) {
  if (allergens.length === 0) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-bone/40">
      {allergens.map((a) => {
        const Icon = icon[a];
        return (
          <span key={a} className="inline-flex" title={labels[a]}>
            <Icon className="size-3.5" aria-label={labels[a]} />
          </span>
        );
      })}
    </span>
  );
}
