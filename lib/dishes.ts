export type MenuCategory = "starters" | "salads" | "grill" | "sides" | "drinks";

export interface Dish {
  id: string;
  category: MenuCategory;
  image: string;
  alt: string;
  /** Give this card outsized visual weight — reserved for the tomahawk */
  featured?: boolean;
}

export const dishes: Dish[] = [
  {
    id: "tomahawkSteak",
    category: "grill",
    image: "/images/dishes/tomahawk-steak.jpg",
    alt: "Tomahawk steak — bone-in tomahawk, grilled corn, side relish, on a wooden board",
    featured: true,
  },
  {
    id: "sizzlingLambChops",
    category: "grill",
    image: "/images/dishes/sizzling-lamb-chops.jpg",
    alt: "Sizzling lamb chops — grilled lamb rack on a hot plate with arugula, red onion, cherry tomato",
  },
  {
    id: "adanaKofta",
    category: "grill",
    image: "/images/dishes/adana-kofta-fries.jpg",
    alt: "Adana-style kofta with fries — grilled minced meat skewers, side of fries",
  },
  {
    id: "slicedGrilledSteak",
    category: "grill",
    image: "/images/dishes/sliced-grilled-steak.jpg",
    alt: "Sliced grilled steak with fries",
  },
  {
    id: "beefCarpaccio",
    category: "starters",
    image: "/images/dishes/beef-carpaccio.jpg",
    alt: "Beef carpaccio with mustard drizzle",
  },
  {
    id: "pomegranateWalnutSalad",
    category: "salads",
    image: "/images/dishes/pomegranate-walnut-salad.jpg",
    alt: "Pomegranate & walnut salad — fresh greens, pomegranate seeds, corn, cherry tomato, walnuts",
  },
  {
    id: "grilledVegPlatter",
    category: "sides",
    image: "/images/dishes/grilled-vegetable-platter.jpg",
    alt: "Grilled vegetable platter — peppers, zucchini, broccoli, garlic, on a wooden board",
  },
  {
    id: "turkishTeaService",
    category: "drinks",
    image: "/images/about/turkish-tea-service.jpg",
    alt: "Turkish tea service — tulip glass tea on a saucer with a spoon",
  },
];

export const menuCategoryOrder: MenuCategory[] = [
  "starters",
  "salads",
  "grill",
  "sides",
  "drinks",
];
