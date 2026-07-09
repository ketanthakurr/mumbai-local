export const locales = ["en", "fr", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Cookie key used to persist the visitor's chosen locale.
export const LOCALE_COOKIE = "MUMBAILOCAL_LOCALE";

// Human-readable labels for the locale switcher.
export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
};

// Right-to-left locales (none yet, kept for future locales like ar/he).
export const rtlLocales: Locale[] = [];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}
