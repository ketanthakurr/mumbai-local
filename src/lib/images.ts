/**
 * Placeholder food photography (Unsplash).
 * Swap these for local /public assets later — the keys stay the same.
 */

const U = "https://images.unsplash.com/photo-";
const q = "?q=80&auto=format&fit=crop";

export const img = {
  pavBhaji: `${U}1606491956689-2ea866880c84${q}`, // dark, moody pav bhaji
  curryRice: `${U}1585937421612-70a008356fbe${q}`, // top-down curry + rice
  butterChicken: `${U}1631452180519-c014fe946bc7${q}`, // kadai + naan
  biryani: `${U}1563379091339-03b21ab4a4f8${q}`,
  curryPan: `${U}1596797038530-2c107229654b${q}`,
  samosa: `${U}1601050690597-df0568f70950${q}`,
  interior: `${U}1517248135467-4c7edcad34c4${q}`,
  interior2: `${U}1552566626-52f8b828add9${q}`,
  ambience: `${U}1514933651103-005eec06c04b${q}`,
  platter: `${U}1567188040759-fb8a883dc6d8${q}`,
} as const;

/** Category id -> hero image. */
export const categoryImage: Record<string, string> = {
  "mumbai-special": img.pavBhaji,
  starters: img.samosa,
  chicken: img.butterChicken,
  lamb: img.curryPan,
  veg: img.curryRice,
  "biryani-thali": img.biryani,
};
