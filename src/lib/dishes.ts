/**
 * The five street-food plates the homepage leads with — the ones people name
 * when they say "Mumbai". Names are proper nouns and stay untranslated;
 * `spot` is the stall-board line, `deva` the Devanagari on the same board.
 */

export interface HeroDish {
  slug: string;
  name: string;
  deva: string;
  /** Where in Mumbai you'd eat it — the line painted on the stall board. */
  spot: string;
  image: string;
}

export const heroDishes: HeroDish[] = [
  {
    slug: "pav-bhaji",
    name: "Pav Bhaji",
    deva: "पाव भाजी",
    spot: "Tawa-fresh, buttered twice",
    image: "/dishes/pav-bhaji.webp",
  },
  {
    slug: "vada-pav",
    name: "Vada Pav",
    deva: "वडा पाव",
    spot: "Mumbai ka Vada Pav",
    image: "/dishes/vada-pav.webp",
  },
  {
    slug: "pani-puri",
    name: "Pani Puri",
    deva: "पाणी पुरी",
    spot: "Six shots, one bite each",
    image: "/dishes/pani-puri.webp",
  },
  {
    slug: "bhel-puri",
    name: "Bhel Puri",
    deva: "भेळ पुरी",
    spot: "Chowpatty ki Bhel Puri",
    image: "/dishes/bhel-puri.webp",
  },
  {
    slug: "chaat",
    name: "Sev Puri Chaat",
    deva: "चाट",
    spot: "Khau Galli ki Chaat",
    image: "/dishes/chaat.webp",
  },
];

/** Lookup by slug so layout code can place specific plates in the collage. */
export const dish = Object.fromEntries(heroDishes.map((d) => [d.slug, d])) as Record<
  string,
  HeroDish
>;
