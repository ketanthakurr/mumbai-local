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
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import { Rickshaw } from "@/components/site/Motifs";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const t = useTranslations("Home.hero");
  const reduce = useReducedMotion();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reduce) return;
      gsap.to(".hero-bg", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.utils.toArray<HTMLElement>(".hero-float").forEach((el) => {
        const depth = Number(el.dataset.depth ?? 1);
        gsap.to(el, {
          yPercent: -20 * depth,
          ease: "none",
          scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(el, { y: "+=12", duration: 3 + depth, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });
    },
    { scope, dependencies: [reduce] },
  );

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section ref={scope} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Background image + wash */}
      <div className="hero-bg absolute inset-0 -z-20 scale-110">
        <Image src={img.pavBhaji} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,8,12,0.94) 0%, rgba(8,8,12,0.7) 45%, rgba(8,8,12,0.5) 100%), linear-gradient(0deg, rgba(8,8,12,0.95), transparent 55%), radial-gradient(60% 60% at 85% 25%, rgba(255,46,136,0.16), transparent 65%)",
        }}
      />
      <div className="scanlines grain absolute inset-0 -z-10" />

      {/* Floating dishes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hero-float pointer-events-none absolute right-[8%] top-[18%] hidden size-44 overflow-hidden rounded-full border border-white/10 lg:block"
        data-depth="1.3"
      >
        <Image src={img.butterChicken} alt="" fill sizes="180px" className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hero-float pointer-events-none absolute bottom-[14%] right-[24%] hidden size-28 overflow-hidden rounded-full border border-white/10 lg:block"
        data-depth="0.6"
      >
        <Image src={img.biryani} alt="" fill sizes="120px" className="object-cover" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Mumbai lockup — replaces the generic kicker */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 text-marigold"
        >
          <Rickshaw className="h-8 w-11" />
          <span className="font-deva text-lg text-bone/80">{site.deva}</span>
          <span className="h-4 w-px bg-bone/20" />
          <span className="text-sm text-bone/55">{t("eyebrow")}</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={rise}
          initial="hidden"
          animate="show"
          className="font-display mt-5 text-[clamp(2.9rem,8vw,6.5rem)] text-bone"
        >
          <span className="block">{t("line1")}</span>
          <span className="block text-magenta">{t("line2")}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-lg text-lg leading-relaxed text-bone/75"
        >
          {t("sub")}
        </motion.p>

        <motion.div
          custom={3}
          variants={rise}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white shadow-[0_0_28px_-4px_var(--color-magenta)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-2px_var(--color-magenta)]"
          >
            {t("ctaMenu")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-bone transition-colors hover:border-cyan hover:text-cyan"
          >
            {t("ctaReserve")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
