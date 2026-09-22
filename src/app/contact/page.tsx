import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { LegalContact } from "@/components/legal/LegalContact";
import { site, hours, outlets, type Outlet } from "@/lib/site";
import { img } from "@/lib/images";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contact");
  return { title: t("meta.title"), description: t("meta.description") };
}

const addressLine = (o: Outlet) => [o.venue, o.street, o.city].filter(Boolean).join(", ");

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  const tHours = await getTranslations("Hours");

  const tiles = [
    { Icon: Phone, label: t("phone"), value: site.phone, href: site.phoneHref },
    { Icon: Mail, label: t("email"), value: site.email, href: `mailto:${site.email}` },
    ...outlets.map((o) => ({ Icon: MapPin, label: t("address"), value: addressLine(o), href: o.mapsHref })),
  ];

  const mapEmbed = (o: Outlet) =>
    `https://www.google.com/maps?q=${encodeURIComponent(addressLine(o))}&output=embed`;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} image={img.interior} accent="cyan" />

      {/* Quick-contact tiles */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {tiles.map(({ Icon, label, value, href }) => (
            <Reveal key={value}>
              <a
                href={href}
                className="glass group flex h-full items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan transition-shadow group-hover:shadow-[0_0_20px_-4px_var(--color-cyan)]">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-bone/45">
                    {label}
                  </span>
                  <span className="block text-bone">{value}</span>
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
              <div className="group relative h-56 overflow-hidden rounded-3xl border border-white/10">
                <Image src={img.interior2} alt="" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="font-display absolute right-5 top-5 text-3xl text-cyan">
                  Open
                </span>
                <div className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                  {outlets.map((o) => (
                    <a key={o.key} href={o.mapsHref} className="flex items-center justify-between gap-3">
                      <span className="font-display text-lg text-bone sm:text-2xl">{o.street}</span>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs uppercase tracking-wider text-marigold">
                        {t("directions")} <ExternalLink className="size-3" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

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

      {/* Live map embed */}
      <section className="pb-20 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {outlets.map((o) => (
              <Reveal key={o.key}>
                <div className="glass overflow-hidden rounded-3xl">
                  <div className="flex items-center justify-between gap-3 border-b border-white/8 px-5 py-4 sm:px-6">
                    <div className="min-w-0">
                      <h2 className="font-display text-2xl text-bone">{o.street}</h2>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-bone/50">
                        {[o.venue, o.city].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                    <a
                      href={o.mapsHref}
                      className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-cyan transition-colors hover:text-bone"
                    >
                      {t("openMaps")} <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                  <iframe
                    title={`${t("mapTitle")}: ${o.street}`}
                    src={mapEmbed(o)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="h-[380px] w-full border-0"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-6">
              <LegalContact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
