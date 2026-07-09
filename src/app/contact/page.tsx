import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site, hours } from "@/lib/site";
import { img } from "@/lib/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");
  return { title: t("meta.title"), description: t("meta.description") };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  const tHours = await getTranslations("Hours");

  const tiles = [
    { Icon: Phone, label: t("phone"), value: site.phone, href: site.phoneHref },
    { Icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
    { Icon: MapPin, label: t("address"), value: `${site.address.street}, ${site.address.city}`, href: site.mapsHref },
  ];

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={img.interior} accent="cyan" />

      {/* Quick-contact tiles */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-3">
          {tiles.map(({ Icon, label, value, href }) => (
            <Reveal key={label}>
              <a
                href={href}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan transition-shadow group-hover:shadow-[0_0_20px_-4px_var(--color-cyan)]">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-bone/45">
                    {label}
                  </span>
                  <span className="block truncate text-bone">{value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + visit panel */}
      <section className="pb-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="right">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-4xl text-magenta">{t("formTitle")}</h2>
              <p className="mt-2 text-sm text-bone/60">{t("formIntro")}</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="flex h-full flex-col gap-6">
              {/* Interior with OPEN sign */}
              <a
                href={site.mapsHref}
                className="group relative block h-56 overflow-hidden rounded-3xl border border-white/10"
                aria-label={t("directions")}
              >
                <Image src={img.interior2} alt="" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="font-display absolute right-5 top-5 text-3xl text-cyan">
                  Open
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-2xl text-bone">{site.address.street}</span>
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-marigold">
                    {t("directions")} <ExternalLink className="size-3" />
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="glass rounded-3xl p-6 sm:p-7">
                <h3 className="font-display text-2xl text-bone">{t("hoursTitle")}</h3>
                <ul className="mt-5 space-y-3">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-white/6 pb-3 text-sm last:border-0 last:pb-0">
                      <span className="text-bone/80">{tHours(h.day)}</span>
                      {h.closed ? (
                        <span className="text-chili/80">{tHours("closed")}</span>
                      ) : (
                        <span className="tabular text-bone/60">{h.open}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
