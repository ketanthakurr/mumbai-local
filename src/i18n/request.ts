import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./locale";

// next-intl request config for the "without i18n routing" (cookie-based) setup.
export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    // Fixed time zone keeps server/client formatting deterministic.
    timeZone: "Asia/Kolkata",
    now: new Date(),
  };
});
