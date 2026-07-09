"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-white/8 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className={
                  "link-sweep font-mono text-xs uppercase tracking-[0.28em] transition-colors " +
                  (active ? "text-cyan" : "text-bone/75 hover:text-bone")
                }
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher label={t("language")} />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border border-white/12 text-bone md:hidden"
            aria-label={open ? t("close") : t("menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={
          "md:hidden overflow-hidden border-t border-white/8 bg-ink/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {nav.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                aria-current={active ? "page" : undefined}
                className={
                  "flex items-center gap-4 border-b border-white/6 py-4 font-display text-3xl uppercase tracking-wide transition-colors " +
                  (active ? "neon-magenta" : "text-bone hover:text-magenta")
                }
              >
                <span className="font-mono text-[11px] tabular text-cyan/70">
                  0{i + 1}
                </span>
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
