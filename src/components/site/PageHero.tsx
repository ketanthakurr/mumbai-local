import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/** Interior-page header with an image backdrop and neon title. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  accent = "magenta",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  accent?: "magenta" | "cyan";
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-14 pt-40">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,12,0.7), rgba(8,8,12,0.6) 40%, rgba(8,8,12,0.97)), radial-gradient(60% 60% at 15% 20%, rgba(255,46,136,0.2), transparent 60%)",
        }}
      />
      <div className="scanlines grain absolute inset-0 -z-10" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
            {eyebrow}
          </span>
          <h1 className={`font-display mt-4 text-[clamp(3rem,10vw,8rem)] ${accent === "cyan" ? "text-cyan" : "text-magenta"}`}>
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/75">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
