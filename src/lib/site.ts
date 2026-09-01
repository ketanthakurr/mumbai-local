/** Static brand + contact facts, shared across pages. */

export const site = {
  name: "Mumbai Local",
  deva: "मुंबई लोकल",
  tagline: "Indian Food",
  phone: "030 50959406",
  phoneHref: "tel:+493050959406",
  email: "info@mumbai-local.de",
  website: "www.mumbai-local.de",
  websiteHref: "https://www.mumbai-local.de",
  address: {
    street: "Rathaus Str 13",
    city: "10178 Berlin",
    country: "Germany",
  },
  mapsHref: "https://maps.google.com/?q=Rathausstr+13+10178+Berlin",
  socials: {
    instagram: "https://instagram.com/mumbailocal",
    facebook: "https://facebook.com/mumbailocal",
  },
} as const;

/** Imprint / Impressum facts (§5 TMG). */
export const legal = {
  company: "Mahadev Foods GmbH",
  companyAddress: {
    street: "Maßenstr 5",
    city: "10777 Berlin",
  },
  managingDirector: "Rajeev Parasher",
  regulatoryOffice: {
    name: "Ordnungsamt Berlin Mitte",
    address: "Karl-Marx-Allee 31",
  },
  /** Venue address as printed on the imprint. */
  venueStreet: "Rathausstr 05",
  venueCity: "10178 Berlin",
} as const;

/** Opening hours — key is used for i18n day labels. */
export const hours: {
  day: "daily";
  open: string;
  closed?: boolean;
}[] = [{ day: "daily", open: "09:00 – 01:00" }];

/** Navigation — hrefs are the source of truth; labels come from i18n. */
export const nav: { key: "home" | "about" | "contact"; href: string }[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

/** Legal footer links. */
export const legalNav: { key: "privacy" | "imprint"; href: string }[] = [
  { key: "privacy", href: "/privacy" },
  { key: "imprint", href: "/imprint" },
];
