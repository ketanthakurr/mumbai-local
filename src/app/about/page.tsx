import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Flame, HandPlatter, Sprout } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("About");
  return { title: t("meta.title"), description: t("meta.description") };
}

const values = [
  { key: "value1", Icon: Flame, accent: "text-magenta" },
  { key: "value2", Icon: HandPlatter, accent: "text-cyan" },
  { key: "value3", Icon: Sprout, accent: "text-marigold" },
] as const;

const stops = ["stop1", "stop2", "stop3", "stop4"] as const;

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={img.interior2} />

      {/* Story + image collage */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative mx-auto h-[440px] w-full max-w-md">
            <Reveal direction="right" className="absolute left-0 top-0 h-3/5 w-3/5">
              <Parallax speed={0.1} className="h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                  <Image src={img.pavBhaji} alt="" fill sizes="320px" className="object-cover" />
                </div>
              </Parallax>
            </Reveal>
            <Reveal direction="left" delay={0.15} className="absolute bottom-0 right-0 h-3/5 w-1/2">
              <Parallax speed={-0.12} className="h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                  <Image src={img.curryPan} alt="" fill sizes="240px" className="object-cover" />
                </div>
              </Parallax>
            </Reveal>
          </div>

          <Reveal direction="left">
            <div>
              <span className="font-deva text-lg text-magenta">मुंबई लोकल</span>
              <h2 className="font-display mt-2 text-4xl text-bone sm:text-5xl">
                {t("storyTitle")}
              </h2>
              <p className="mt-5 leading-relaxed text-bone/70">{t("story1")}</p>
              <p className="mt-4 leading-relaxed text-bone/70">{t("story2")}</p>
              <p className="font-display mt-8 text-3xl leading-tight text-bone sm:text-4xl">
                “<span className="text-cyan">{t("quote")}</span>”
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-marigold">
                {t("quoteBy")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The line — numbered sequence */}
      <section className="bg-ink-2 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
              {t("lineEyebrow")}
            </span>
            <h2 className="font-display mt-3 text-4xl text-bone sm:text-6xl">
              {t("lineTitle")}
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {stops.map((s, i) => (
              <RevealItem key={s}>
                <div className="group relative h-full bg-ink-2 p-7 transition-colors hover:bg-ink-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm tabular text-cyan">0{i + 1}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent" />
                    <span className="size-3 rounded-full border-2 border-magenta bg-ink transition-all group-hover:bg-magenta group-hover:shadow-[0_0_12px_var(--color-magenta)]" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl text-bone">{t(`${s}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{t(`${s}.body`)}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {values.map(({ key, Icon, accent }) => (
              <RevealItem key={key}>
                <div className="glass h-full rounded-3xl p-8 transition-colors hover:border-magenta/40">
                  <span className="grid size-12 place-items-center rounded-xl bg-magenta/12 text-magenta">
                    <Icon className="size-6" />
                  </span>
                  <h3 className={`font-display mt-6 text-2xl ${accent}`}>{t(`${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{t(`${key}.body`)}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand />
    </>
  );
}
