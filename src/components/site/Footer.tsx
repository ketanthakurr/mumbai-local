import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail } from "lucide-react";
import { site, nav, hours, legalNav, outlets } from "@/lib/site";
import { FooterScene } from "./FooterScene";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="relative mt-24 bg-ink-2">
      {/* Animated Mumbai street */}
      <FooterScene />
      {/* Perforated ticket edge */}
      <div className="perf-top h-4 w-full bg-ink" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <span className="font-display text-3xl text-magenta">Mumbai Local</span>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.3em] text-marigold">
            Indian Food · <span className="font-deva">{site.deva}</span>
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/60">
            {t("Footer.blurb")}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.instagram}
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-magenta hover:text-magenta"
            >
              <InstagramIcon className="size-4.5" />
            </a>
            <a
              href={site.socials.facebook}
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-magenta hover:text-magenta"
            >
              <FacebookIcon className="size-4.5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-marigold">
            {t("Footer.explore")}
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-sweep text-sm text-bone/70 transition-colors hover:text-bone"
                >
                  {t(`Nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-marigold">
            {t("Footer.hours")}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-bone/80">{t(`Hours.${h.day}`)}</span>
                <span className="font-mono text-xs tabular text-bone/55">
                  {h.closed ? t("Hours.closed") : h.open}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-marigold">
            {t("Footer.legal")}
          </h3>
          <ul className="mt-5 space-y-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-sweep text-sm text-bone/70 transition-colors hover:text-bone"
                >
                  {t(`Nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-marigold">
            {t("Footer.find")}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-bone/70">
            {outlets.map((o) => (
              <li key={o.key} className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-magenta" />
                <span>
                  {o.venue && (
                    <>
                      {o.venue}
                      <br />
                    </>
                  )}
                  {o.street}
                  <br />
                  {o.city}
                </span>
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-bone"
              >
                <Phone className="size-4 shrink-0 text-magenta" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-bone"
              >
                <Mail className="size-4 shrink-0 text-magenta" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-wider text-bone/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © 2026 {site.name}. {t("Footer.rights")}
          </span>
          <span>{t("Footer.made")}</span>
        </div>
      </div>
    </footer>
  );
}
