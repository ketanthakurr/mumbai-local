/** Static brand + contact facts, shared across pages. */

export const site = {
  name: "Mumbai Local",
  deva: "मुंबई लोकल",
  tagline: "Indian Food",
  phone: "+49 30 1234 5678",
  phoneHref: "tel:+493012345678",
  email: "hallo@mumbailocal.example",
  address: {
    street: "Bahnhofstraße 1",
    city: "10115 Berlin",
    country: "Germany",
  },
  mapsHref: "https://maps.google.com/?q=Bahnhofstrasse+1+Berlin",
  socials: {
    instagram: "https://instagram.com/mumbailocal",
    facebook: "https://facebook.com/mumbailocal",
  },
} as const;

/** Opening hours — key is used for i18n day labels. */
export const hours: {
  day: "mon" | "tueFri" | "sat" | "sun";
  open: string;
  closed?: boolean;
}[] = [
  { day: "mon", open: "—", closed: true },
  { day: "tueFri", open: "12:00 – 15:00 · 17:30 – 23:00" },
  { day: "sat", open: "12:00 – 00:00" },
  { day: "sun", open: "12:00 – 22:00" },
];

/** Navigation — hrefs are the source of truth; labels come from i18n. */
export const nav: { key: "home" | "about" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];
