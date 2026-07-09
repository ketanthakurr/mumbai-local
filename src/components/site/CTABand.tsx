import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { img } from "@/lib/images";

export async function CTABand() {
  const t = await getTranslations("CTA");

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24">
            <Image
              src={img.ambience}
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,8,12,0.82), rgba(8,8,12,0.9)), radial-gradient(60% 90% at 50% 0%, rgba(255,46,136,0.35), transparent 70%)",
              }}
            />
            <div className="scanlines absolute inset-0" />
            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                {t("eyebrow")}
              </span>
              <h2 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-[0.95] text-bone sm:text-7xl">
                {t("title").split(" ").map((w, i) => (
                  <span key={i} className={i % 3 === 1 ? "neon-magenta" : ""}>
                    {w}{" "}
                  </span>
                ))}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-bone/80">{t("body")}</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-magenta px-7 py-4 font-mono text-sm uppercase tracking-widest text-white shadow-[0_0_30px_-4px_var(--color-magenta)] transition-transform hover:-translate-y-0.5"
                >
                  {t("reserve")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-mono text-sm uppercase tracking-widest text-bone transition-colors hover:border-cyan hover:text-cyan"
                >
                  <Phone className="size-4" />
                  {t("call")}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
