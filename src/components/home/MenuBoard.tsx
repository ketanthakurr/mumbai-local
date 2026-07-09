import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { menu, tagLabelKey, type DishTag } from "@/lib/menu";
import { categoryImage } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { TagChip } from "@/components/site/TagChip";
import { PaisleyDivider } from "@/components/site/Motifs";

const neon = ["text-magenta", "text-cyan", "text-marigold"];

export async function MenuBoard() {
  const t = await getTranslations("Home.menu");
  const tTag = await getTranslations("Tags");

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

        {/* Masonry: cards pack tightly regardless of dish count */}
        <div className="mt-12 columns-1 gap-6 lg:columns-2">
          {menu.map((cat, i) => (
            <Reveal
              key={cat.id}
              direction="none"
              className="mb-6 block break-inside-avoid"
            >
              <article className="group glass overflow-hidden rounded-3xl">
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
                            {dish.tags
                              ?.filter((tag: DishTag) => tag !== "veg")
                              .map((tag: DishTag) => (
                                <TagChip key={tag} tag={tag} label={tTag(tagLabelKey[tag])} />
                              ))}
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
      </div>
    </section>
  );
}
