import type { Locale } from "@/i18n/config";
import type messages from "../messages/en.json";

// Give useTranslations / getTranslations full autocomplete + key checking.
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
  }
}
