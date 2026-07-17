import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { menu, tagLabelKey, allergenLabelKey, type Allergen } from "@/lib/menu";
import { categoryImage } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { TagChip } from "@/components/site/TagChip";
import { AllergenIcons } from "@/components/site/AllergenIcons";
import { PaisleyDivider } from "@/components/site/Motifs";
import { Nut, Milk, Wheat } from "lucide-react";

const neon = ["text-magenta", "text-cyan", "text-marigold"];
const allergenOrder: Allergen[] = ["nuts", "dairy", "gluten"];
const legendIcon = { nuts: Nut, dairy: Milk, gluten: Wheat };

export async function MenuBoard() {
  const t = await getTranslations("Home.menu");
  const tTag = await getTranslations("Tags");
  const tAll = await getTranslations("Allergens");

  const allergenLabels = Object.fromEntries(
    allergenOrder.map((a) => [a, tAll(`${allergenLabelKey[a]}.contains`)]),
  ) as Record<Allergen, string>;

  return (
    <section id="menu" className="relative scroll-mt-24 pb-24 pt-12 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <PaisleyDivider className="max-w-[180px] text-magenta/60" />
              <h2 className="font-display mt-4 text-5xl text-bone sm:text-7xl">
                {t("title")}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-bone/55">{t("intro")}</p>
          </div>
        </Reveal>

        {/* Jump-to-category nav — sticky under the fixed header on long scrolls */}
        <nav
          aria-label={t("jump")}
          className="glass sticky top-[72px] z-30 mt-8 flex gap-2 overflow-x-auto rounded-2xl px-3 py-3 [scrollbar-width:none]"
        >
          <span className="hidden shrink-0 items-center pl-1 pr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40 sm:inline-flex">
            {t("jump")}
          </span>
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-white/12 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-bone/70 transition-colors hover:border-cyan hover:text-cyan"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        {/* Masonry: cards pack tightly regardless of dish count */}
        <div className="mt-8 columns-1 gap-6 lg:columns-2">
          {menu.map((cat, i) => (
            <Reveal
              key={cat.id}
              direction="none"
              className="mb-6 block break-inside-avoid"
            >
              <article id={cat.id} className="group glass scroll-mt-36 overflow-hidden rounded-3xl">
                <header className="relative h-44 overflow-hidden">
                  <Image
                    src={categoryImage[cat.id]}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className={`font-display text-3xl sm:text-4xl ${neon[i % neon.length]}`}>
                      {cat.title}
                    </h3>
                    {cat.deva && (
                      <span className="font-deva text-sm text-bone/60">{cat.deva}</span>
                    )}
                  </div>
                </header>

                <div className="p-6 sm:p-7">
                  <p className="text-sm italic text-bone/55">{cat.blurb}</p>
                  <ul className="mt-5 space-y-4">
                    {cat.dishes.map((dish) => (
                      <li key={dish.name} className="flex items-baseline gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display text-lg tracking-wide text-bone">
                              {dish.name}
                            </span>
                            {dish.tags?.map((tag) => (
                              <TagChip key={tag} tag={tag} label={tTag(tagLabelKey[tag])} />
                            ))}
                            {dish.allergens && dish.allergens.length > 0 && (
                              <AllergenIcons allergens={dish.allergens} labels={allergenLabels} />
                            )}
                          </div>
                          <p className="text-[13px] leading-snug text-bone/50">{dish.note}</p>
                        </div>
                        <span
                          className="mx-1 mb-1 hidden flex-1 border-b border-dotted border-white/15 sm:block"
                          aria-hidden
                        />
                        <span className="ml-auto shrink-0 text-sm tabular font-medium text-marigold sm:ml-0">
                          €{dish.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Allergen legend */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-white/8 px-5 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
              {tAll("legend")}
            </span>
            {allergenOrder.map((a) => {
              const Icon = legendIcon[a];
              return (
                <span key={a} className="inline-flex items-center gap-2 text-sm text-bone/60">
                  <Icon className="size-4 text-bone/45" aria-hidden />
                  {tAll(`${allergenLabelKey[a]}.label`)}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
