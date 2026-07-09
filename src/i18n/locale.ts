"use server";

import { cookies, headers } from "next/headers";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "./config";

const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Resolve the active locale for the current request.
 * Priority: persisted cookie -> Accept-Language header -> default.
 */
export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (fromCookie && isLocale(fromCookie)) {
    return fromCookie;
  }

  const accept = (await headers()).get("accept-language");
  if (accept) {
    for (const part of accept.split(",")) {
      const tag = part.split(";")[0].trim().slice(0, 2).toLowerCase();
      if (isLocale(tag)) {
        return tag;
      }
    }
  }

  return defaultLocale;
}

/** Persist the visitor's locale choice in a cookie. */
export async function setUserLocale(locale: Locale): Promise<void> {
  if (!locales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
    httpOnly: false,
  });
}
