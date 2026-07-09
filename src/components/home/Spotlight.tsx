import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { img } from "@/lib/images";

export async function Spotlight() {
  const t = await getTranslations("Home.spotlight");
  const stats = ["stat1", "stat2", "stat3"] as const;

  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 30%, rgba(255,46,136,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Image stack */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[500px]">
          <Reveal direction="right" className="absolute left-0 top-0 h-3/4 w-3/5">
            <Parallax speed={0.12} className="h-full w-full">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <Image src={img.platter} alt="" fill sizes="320px" className="object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal direction="left" delay={0.15} className="absolute bottom-0 right-0 h-3/5 w-1/2">
            <Parallax speed={-0.14} className="h-full w-full">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
                <Image src={img.curryRice} alt="" fill sizes="260px" className="object-cover" />
              </div>
            </Parallax>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
              {t("eyebrow")}
            </span>
            <h2 className="font-display mt-3 text-5xl leading-[0.95] text-bone sm:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/70">
              {t("body")}
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-8">
              {stats.map((s, i) => (
                <div key={s}>
                  <dt className={`font-display text-4xl sm:text-5xl ${i === 1 ? "text-cyan" : "text-magenta"}`}>
                    {t(`${s}.value`)}
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-wider text-bone/50">
                    {t(`${s}.label`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
