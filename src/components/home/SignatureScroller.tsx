"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { img } from "@/lib/images";
import { Lotus } from "@/components/site/Motifs";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

const panels = [
  { name: "Butter Chicken", note: "Tandoori chicken · butter-tomato cream", price: "12.90", image: img.butterChicken, accent: "magenta" },
  { name: "Pav Bhaji", note: "Mashed spiced veg · buttered pav", price: "10.90", image: img.pavBhaji, accent: "marigold" },
  { name: "Hyderabadi Biryani", note: "Basmati · saffron · slow-steamed", price: "12.90", image: img.biryani, accent: "cyan" },
  { name: "Rogan Josh", note: "Lamb · Kashmiri chili · yoghurt", price: "13.50", image: img.curryPan, accent: "magenta" },
  { name: "Nawabi Thali", note: "The whole network on one plate", price: "17.90", image: img.platter, accent: "cyan" },
];

const accentClass: Record<string, string> = {
  magenta: "text-magenta",
  cyan: "text-cyan",
  marigold: "text-marigold",
};

export function SignatureScroller() {
  const t = useTranslations("Home.signature");
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        gsap.to(el, {
          x: () => -(el.scrollWidth - window.innerWidth + 48),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => "+=" + (el.scrollWidth - window.innerWidth + 40),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative overflow-hidden pt-14 pb-6 md:flex md:h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex items-center gap-3 text-marigold">
          <Lotus className="h-7 w-10" />
          <span className="font-deva text-sm text-bone/60">स्वादिष्ट</span>
        </div>
        <h2 className="font-display mt-3 text-5xl text-bone sm:text-7xl">{t("title")}</h2>
      </div>

      {/* Heading + track centered together in the viewport */}
      <div className="md:mt-10 md:flex md:items-center">
        <div
          ref={track}
          className="flex gap-5 overflow-x-auto px-5 pb-4 pt-8 sm:px-8 [scrollbar-width:none] snap-x snap-mandatory md:overflow-visible md:px-8 md:pb-0 md:pt-0 md:snap-none"
        >
          {panels.map((p, i) => (
            <article
              key={p.name}
              className="sig-panel group relative aspect-[3/4] w-[78vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[60vw] md:aspect-[4/5] md:w-[30vw]"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 78vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute left-5 top-5 grid size-10 place-items-center rounded-full border border-white/20 bg-ink/40 text-sm tabular text-bone backdrop-blur">
                0{i + 1}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs tabular text-marigold">€{p.price}</p>
                <h3 className={`font-display mt-1 text-4xl ${accentClass[p.accent]}`}>{p.name}</h3>
                <p className="mt-2 text-sm text-bone/70">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
