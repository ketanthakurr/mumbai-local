"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { dish, type HeroDish } from "@/lib/dishes";
import { site } from "@/lib/site";
import { Rickshaw } from "@/components/site/Motifs";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * One plate in the collage — photo under a painted stall board.
 * `depth` drives how far the tile drifts on scroll; 0 keeps it pinned.
 */
function Plate({
  item,
  className,
  sizes,
  depth = 0,
  priority = false,
  compact = false,
}: {
  item: HeroDish;
  className: string;
  sizes: string;
  depth?: number;
  priority?: boolean;
  /** Small tiles carry the name only — the stall line needs a wider board. */
  compact?: boolean;
}) {
  return (
    <article
      className={`plate group relative overflow-hidden bg-ink-2 ${className}`}
      data-depth={depth}
    >
      <Image
        src={item.image}
        alt={`${item.name} — ${item.spot}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
      />
      {/* Wash so the board stays legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 flex items-end p-3 sm:p-4">
        <div className="border-l-2 border-marigold pl-2.5 sm:pl-3">
          <p className="font-deva text-[13px] leading-tight text-marigold sm:text-base">
            {item.deva}
          </p>
          <h2
            className={
              "font-display leading-[0.95] text-bone " +
              (compact ? "text-lg sm:text-2xl" : "text-xl sm:text-3xl")
            }
          >
            {item.name}
          </h2>
          {!compact && (
            <p className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/75 sm:block">
              {item.spot}
            </p>
          )}
        </div>
      </div>

      {/* Magenta tube edge on hover — the stall lighting up */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 neon-tube" />
    </article>
  );
}

export function Hero() {
  const t = useTranslations("Home.hero");
  const reduce = useReducedMotion();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reduce) return;
      const mm = gsap.matchMedia();
      // Drift is desktop-only: on a phone the collage is already one column
      // of full-width plates, and shifting them just fights the scroll.
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".plate").forEach((el) => {
          const depth = Number(el.dataset.depth ?? 0);
          if (!depth) return;
          gsap.to(el, {
            yPercent: -6 * depth,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });
      });
    },
    { scope, dependencies: [reduce] },
  );

  const tile = {
    hidden: { opacity: 0, y: reduce ? 0 : 18, scale: reduce ? 1 : 0.985 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section ref={scope} className="relative overflow-hidden pt-24 pb-12 sm:pt-28">
      {/* Stall-light haze behind the wall of plates */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 12%, rgba(255,46,136,0.18), transparent 70%), radial-gradient(45% 40% at 92% 78%, rgba(255,176,32,0.14), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5">
        <motion.div
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-1.5 sm:gap-2 md:h-[calc(100svh-9.5rem)] md:min-h-[560px] md:grid-cols-6 md:grid-rows-5"
        >
          {/* Headline board — a tile in the wall, not text floating over it */}
          <motion.div
            custom={0}
            variants={tile}
            className="col-span-2 flex flex-col justify-between border border-white/10 bg-ink-2 p-5 sm:p-7 md:col-span-3 md:row-span-3"
          >
            <div className="flex items-center gap-3">
              <Rickshaw className="h-7 w-10 text-marigold" />
              <span className="font-deva text-base text-bone/80">{site.deva}</span>
              <span className="h-4 w-px bg-bone/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/55">
                {t("eyebrow")}
              </span>
            </div>

            <div className="mt-8 md:mt-0">
              <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] text-bone">
                <span className="block">{t("line1")}</span>
                <span className="block neon-magenta flicker">{t("line2")}</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg">
                {t("sub")}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-magenta px-5 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-[0_0_28px_-4px_var(--color-magenta)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-2px_var(--color-magenta)]"
              >
                {t("ctaMenu")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium uppercase tracking-widest text-bone transition-colors hover:border-cyan hover:text-cyan"
              >
                {t("ctaReserve")}
              </Link>
            </div>
          </motion.div>

          {/* Pav Bhaji — the tall plate, and the loudest photo of the five */}
          <motion.div
            custom={1}
            variants={tile}
            className="col-span-1 row-span-2 md:col-span-2 md:row-span-3"
          >
            <Plate
              item={dish["pav-bhaji"]}
              className="h-full min-h-[220px]"
              sizes="(max-width: 768px) 50vw, 34vw"
              priority
              depth={1}
            />
          </motion.div>

          <motion.div custom={2} variants={tile} className="md:col-span-1 md:row-span-2">
            <Plate
              item={dish["vada-pav"]}
              className="h-full min-h-[105px]"
              sizes="(max-width: 768px) 50vw, 18vw"
              depth={0.5}
              compact
            />
          </motion.div>

          <motion.div custom={3} variants={tile} className="md:col-span-1 md:row-span-1">
            <Plate
              item={dish["pani-puri"]}
              className="h-full min-h-[105px]"
              sizes="(max-width: 768px) 50vw, 18vw"
              depth={1.6}
              compact
            />
          </motion.div>

          <motion.div custom={4} variants={tile} className="md:col-span-2 md:row-span-2">
            <Plate
              item={dish["bhel-puri"]}
              className="h-full min-h-[150px]"
              sizes="(max-width: 768px) 50vw, 34vw"
              depth={0.8}
            />
          </motion.div>

          <motion.div custom={5} variants={tile} className="md:col-span-3 md:row-span-2">
            <Plate
              item={dish.chaat}
              className="h-full min-h-[150px]"
              sizes="(max-width: 768px) 50vw, 50vw"
              depth={1.2}
            />
          </motion.div>

          {/* Painted end-board: the address panel every stall keeps at the edge */}
          <motion.div
            custom={6}
            variants={tile}
            className="col-span-2 flex flex-col justify-between bg-marigold p-4 text-ink md:col-span-1 md:row-span-2"
          >
            <div>
              <p className="font-deva text-lg leading-tight">{site.deva}</p>
              <p className="font-display mt-1 text-xl leading-[0.9]">{site.tagline}</p>
            </div>
            <address className="not-italic">
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] sm:text-[11px]">
                {site.address.street}
              </p>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] sm:text-[11px] text-ink/70">
                {site.address.city}
              </p>
            </address>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
