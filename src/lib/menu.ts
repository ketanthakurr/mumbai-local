/**
 * Menu data — transcribed from the Mumbai Local menu card.
 * Dish names are proper nouns and stay untranslated across locales;
 * `note` lists key ingredients in plain English.
 */

export type DishTag = "veg" | "vegan" | "mild" | "hot" | "very-hot" | "signature";

/** Big-three allergens we surface on dish cards, inferred from the ingredient note. */
export type Allergen = "nuts" | "dairy" | "gluten";

export interface Dish {
  name: string;
  note: string;
  price: string; // as printed, in EUR
  tags?: DishTag[];
  /** Present allergens, best-effort from the printed ingredients. */
  allergens?: Allergen[];
}

export interface MenuCategory {
  id: string;
  /** Station-board destination label */
  title: string;
  /** Devanagari transliteration for signage flavour */
  deva?: string;
  blurb: string;
  dishes: Dish[];
}

export const menu: MenuCategory[] = [
  {
    id: "mumbai-special",
    title: "Mumbai Special",
    deva: "मुंबई स्पेशल",
    blurb: "The platform snacks — what Mumbai eats on the move.",
    dishes: [
      {
        name: "Pav Bhaji",
        note: "Mashed spiced vegetables · butter · two soft pav",
        price: "10.90",
        tags: ["veg", "signature"],
        allergens: ["dairy", "gluten"],
      },
      {
        name: "Mumbai Poha",
        note: "Flattened rice · peanuts · curry leaves · turmeric · lemon",
        price: "9.90",
        tags: ["vegan"],
        allergens: ["nuts"],
      },
      {
        name: "Batata Vada Sambar",
        note: "Chickpea-battered potato · curry leaves · sambar",
        price: "11.90",
        tags: ["vegan"],
      },
    ],
  },
  {
    id: "starters",
    title: "Starters & Salads",
    deva: "स्टार्टर",
    blurb: "First stop. Small plates to wake the palate up.",
    dishes: [
      { name: "Samosa", note: "Two dumplings · potato · green peas · coriander", price: "5.90", tags: ["vegan"], allergens: ["gluten"] },
      { name: "Kachumbar Salat", note: "Cucumber · tomato · onion · lemon · peanuts", price: "7.90", tags: ["vegan"], allergens: ["nuts"] },
      { name: "Madras Rasam", note: "Red lentil · curry leaves · mustard seeds", price: "3.90", tags: ["vegan"] },
      { name: "Chicken Soup", note: "Curry · chicken", price: "3.90" },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    deva: "चिकन",
    blurb: "The busiest line on the board.",
    dishes: [
      { name: "Butter Chicken", note: "Tandoori chicken · butter-tomato cream sauce", price: "12.90", tags: ["signature"], allergens: ["dairy"] },
      { name: "Chicken Curry", note: "Cumin · turmeric · curry leaves · garam masala", price: "10.90" },
      { name: "Chicken Mango", note: "Chicken · mango curry sauce", price: "11.90", tags: ["mild"] },
      { name: "Chicken Vindaloo", note: "Potato · peppers · onion · tomato · coconut", price: "11.90", tags: ["hot"] },
      { name: "Chicken Tikka Gravy", note: "Grilled chicken · yoghurt · red curry sauce", price: "13.90", allergens: ["dairy"] },
      { name: "Chicken Kadahi", note: "Onion · peppers · tomato · chili · coriander", price: "12.80", tags: ["hot"] },
      { name: "Chicken Korma", note: "Cashew-cream sauce · turmeric · almonds · raisins", price: "12.90", tags: ["mild"], allergens: ["nuts", "dairy"] },
      { name: "Dahi Kasoori Chicken", note: "12-hour marinade · fenugreek · clove · cinnamon", price: "12.90", allergens: ["dairy"] },
    ],
  },
  {
    id: "lamb",
    title: "Lamb",
    deva: "मटन",
    blurb: "Slow-cooked, bone-deep flavour.",
    dishes: [
      { name: "Lamm Curry", note: "Lamb · bay leaves · cumin seeds · curry sauce", price: "12.90" },
      { name: "Lamm Sabji", note: "Lamb · carrots · cauliflower · peas · garam masala", price: "12.90" },
      { name: "Lamm Korma", note: "Cashew-cream · turmeric · almonds · raisins", price: "13.90", tags: ["mild"], allergens: ["nuts", "dairy"] },
      { name: "Bhuna Ghosht", note: "Lamb · peppers · ginger · onion · tomato", price: "12.90" },
      { name: "Mutton Rogan Josh", note: "Lamb · cream cheese · peppers · coconut · red curry", price: "13.50", tags: ["signature"], allergens: ["dairy"] },
    ],
  },
  {
    id: "veg",
    title: "Vegetarian & Vegan",
    deva: "शाकाहारी",
    blurb: "Served with North-Indian basmati and fresh salad.",
    dishes: [
      { name: "Dal Makhni", note: "Beluga lentils · butter · onion · tomato · fenugreek", price: "9.90", tags: ["veg"], allergens: ["dairy"] },
      { name: "Palak Paneer", note: "Paneer · spinach · coriander seeds · ginger", price: "10.90", tags: ["veg"], allergens: ["dairy"] },
      { name: "Malai Kofta", note: "Potato rolls · cheese-cream sauce · almonds · cashew", price: "12.90", tags: ["veg"], allergens: ["nuts", "dairy"] },
      { name: "Aloo Madras", note: "Potato · madras curry paste · coconut-milk sauce", price: "10.90", tags: ["vegan", "hot"] },
      { name: "Paneer Jhalfrezi", note: "Paneer · peppers · cauliflower · coconut", price: "11.90", tags: ["veg", "hot"], allergens: ["dairy"] },
      { name: "Sweet Potato Curry", note: "Sweet potato · mustard seeds · coconut milk", price: "10.90", tags: ["vegan"] },
    ],
  },
  {
    id: "biryani-thali",
    title: "Biryani & Thali",
    deva: "बिरयानी",
    blurb: "The full journey on one plate.",
    dishes: [
      { name: "Chicken Biryani", note: "Basmati · peppers · carrots · raita · papad", price: "12.90", tags: ["signature"], allergens: ["dairy"] },
      { name: "Veggie Biryani", note: "Basmati · cauliflower · cinnamon · clove · cumin", price: "11.90", tags: ["vegan"] },
      { name: "Nawabi Thali", note: "Lamm Korma · Sabji Masala · Butter Chicken", price: "17.90", tags: ["signature"], allergens: ["nuts", "dairy"] },
      { name: "Tirumala Thali", note: "Dal Makhni · Matter Paneer · sweet potato · kadhi pakora", price: "17.90", tags: ["veg"], allergens: ["dairy"] },
    ],
  },
];

/** Drinks for the ticker + contact page. */
export const beverages: Dish[] = [
  { name: "Mango Lassi", note: "0.3 L", price: "4.50", tags: ["signature"] },
  { name: "Indian Masala Chai", note: "spiced tea", price: "3.30" },
  { name: "Indisches Bier", note: "0.33 L", price: "4.50" },
  { name: "Coffee", note: "Kaffee", price: "3.50" },
];

export const tagLabelKey = {
  veg: "veg",
  vegan: "vegan",
  mild: "mild",
  hot: "hot",
  "very-hot": "veryHot",
  signature: "signature",
} as const satisfies Record<DishTag, string>;

export const allergenLabelKey = {
  nuts: "nuts",
  dairy: "dairy",
  gluten: "gluten",
} as const satisfies Record<Allergen, string>;

/**
 * Signature panels for the home carousel — derived from the menu itself so the
 * carousel can never drift from the board. Presentation (image + accent) is the
 * only thing layered on top; name, price and note come straight from `menu`.
 */
export const signatureDishes = menu
  .flatMap((c) => c.dishes)
  .filter((d) => d.tags?.includes("signature"));
