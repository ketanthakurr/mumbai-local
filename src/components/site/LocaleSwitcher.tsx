"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { Globe, Check, ChevronDown } from "lucide-react";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";

/** Compact language menu — writes the locale cookie via a server action. */
export function LocaleSwitcher({ label }: { label: string }) {
  const current = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function choose(next: Locale) {
    setOpen(false);
    if (next === current) return;
    startTransition(async () => {
      await setUserLocale(next);
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex items-center gap-1.5 rounded-full border border-marigold/40 bg-marigold/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-marigold transition-colors hover:bg-marigold/20 disabled:opacity-50"
      >
        <Globe className="size-3.5" aria-hidden />
        {current}
        <ChevronDown
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-marigold/25 bg-ink-2/95 p-1 shadow-2xl backdrop-blur"
        >
          {locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={loc === current}
                onClick={() => choose(loc)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-bone/85 transition-colors hover:bg-magenta/20"
              >
                {localeLabels[loc]}
                {loc === current && (
                  <Check className="size-4 text-marigold" aria-hidden />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
