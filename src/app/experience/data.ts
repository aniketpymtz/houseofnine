// ─── Experience Center Data ───────────────────────────────────────────

export type DesignTheme = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  palette: string[];
  features: string[];
};

export type FurnitureStyle = {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
};

export type ColorScheme = {
  id: string;
  name: string;
  description: string;
  colors: string[];
  mood: string;
};

export type RoomType = {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
};

export type BudgetRange = {
  id: string;
  label: string;
  range: string;
  description: string;
  includes: string[];
};

// ── Step 1: Design Themes ────────────────────────────────────────────

export const designThemes: DesignTheme[] = [
  {
    id: "japandi",
    name: "Japandi",
    tagline: "Calm meets craft",
    description:
      "A fusion of Japanese minimalism and Scandinavian functionality. Warm woods, muted tones, and intentional simplicity create spaces that breathe.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    palette: ["#F6F1E8", "#D5C5AE", "#A88660", "#5F473A"],
    features: [
      "Natural wood tones",
      "Clean lines",
      "Wabi-sabi textures",
      "Breathable layouts",
    ],
  },
  {
    id: "indian-modern",
    name: "Indian Modern",
    tagline: "Heritage reimagined",
    description:
      "Traditional Indian craftsmanship meets contemporary design. Rich textures, vibrant accents, and artisanal details create culturally rooted yet modern spaces.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    palette: ["#FDF5E6", "#D4A574", "#8B4513", "#2F1B14"],
    features: [
      "Jali patterns",
      "Brass accents",
      "Hand-block textiles",
      "Warm earth tones",
    ],
  },
  {
    id: "retro",
    name: "Retro Modern",
    tagline: "Nostalgia with edge",
    description:
      "Mid-century silhouettes infused with bold color and playful geometry. Vintage-inspired pieces sit alongside modern materials for eclectic personality.",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
    palette: ["#FAF3E8", "#E8985E", "#C25B3F", "#2D3436"],
    features: [
      "Curved furniture",
      "Bold patterns",
      "Statement lighting",
      "Mixed materials",
    ],
  },
  {
    id: "scandi",
    name: "Scandinavian",
    tagline: "Light & functional",
    description:
      "Bright, airy spaces built on practical layouts and honest materials. Every piece serves a purpose while maintaining warmth and visual calm.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    palette: ["#FAFAF8", "#E6E8E4", "#A7B0A8", "#3A4041"],
    features: [
      "White & pale wood",
      "Functional design",
      "Cozy textiles",
      "Natural light focus",
    ],
  },
  {
    id: "minimalist",
    name: "Minimalist",
    tagline: "Less is everything",
    description:
      "Pared-back luxury where every element is deliberate. Monochromatic palettes, architectural forms, and premium materials speak through restraint.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    palette: ["#FFFFFF", "#E0E0E0", "#808080", "#1A1A1A"],
    features: [
      "Monochrome palette",
      "Hidden storage",
      "Geometric forms",
      "Negative space",
    ],
  },
  {
    id: "modern-luxe",
    name: "Modern Luxe",
    tagline: "Bold & refined",
    description:
      "High-contrast drama meets sophisticated materials. Fluted surfaces, metallic accents, and statement pieces create an elevated, hotel-inspired aesthetic.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    palette: ["#F1E8DE", "#CAA989", "#7F5A43", "#1D1713"],
    features: [
      "Fluted panels",
      "Brass & marble",
      "Boucle seating",
      "Dramatic lighting",
    ],
  },
];

// ── Step 2: Room Types ───────────────────────────────────────────────

export const roomTypes: RoomType[] = [
  {
    id: "living",
    name: "Living Room",
    icon: "🛋️",
    description: "The heart of your home — designed for comfort and conversations.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: "🛏️",
    description: "Your personal retreat — calm, restful, and perfectly you.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: "🍳",
    description: "Where function meets beauty — efficient, stylish, and inspiring.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    id: "office",
    name: "Home Office",
    icon: "💼",
    description: "Productivity meets personality — focused yet inviting workspace.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    id: "dining",
    name: "Dining Room",
    icon: "🍽️",
    description: "Gather and celebrate — a space for shared moments and memories.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    icon: "🚿",
    description: "Spa-inspired sanctuary — where daily rituals become luxurious.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
];

// ── Step 3: Furniture Styles ─────────────────────────────────────────

export const furnitureStyles: FurnitureStyle[] = [
  {
    id: "low-profile",
    name: "Low-Profile & Grounded",
    description:
      "Platform beds, floor-hugging sofas, and low coffee tables that create a sense of openness and calm.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    tags: ["Minimal", "Japanese-inspired", "Open feel"],
  },
  {
    id: "mid-century",
    name: "Mid-Century Modern",
    description:
      "Tapered legs, organic curves, and warm wood finishes. Timeless silhouettes from the golden age of design.",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
    tags: ["Retro", "Iconic shapes", "Warm wood"],
  },
  {
    id: "contemporary",
    name: "Contemporary & Clean",
    description:
      "Sleek lines, modular systems, and neutral upholstery. Furniture that adapts to modern living.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    tags: ["Versatile", "Modular", "Neutral tones"],
  },
  {
    id: "artisan",
    name: "Artisan & Handcrafted",
    description:
      "One-of-a-kind pieces with visible joinery, hand-turned details, and raw material beauty.",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    tags: ["Handmade", "Unique", "Natural materials"],
  },
  {
    id: "statement",
    name: "Statement & Sculptural",
    description:
      "Bold, art-like furniture that becomes the focal point. Dramatic forms and luxurious materials.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    tags: ["Bold", "Art-inspired", "Luxe materials"],
  },
  {
    id: "classic-indian",
    name: "Classic Indian",
    description:
      "Ornate wooden carvings, brass inlay work, and rich upholstery rooted in Indian heritage craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    tags: ["Heritage", "Carved wood", "Rich textiles"],
  },
];

// ── Step 4: Color Schemes ────────────────────────────────────────────

export const colorSchemes: ColorScheme[] = [
  {
    id: "warm-neutral",
    name: "Warm Neutrals",
    description: "Creamy whites, soft tans, and warm greys for a cozy, inviting atmosphere.",
    colors: ["#FDF6F0", "#E8D5C0", "#C4A882", "#8B7355", "#4A3728"],
    mood: "Cozy & Inviting",
  },
  {
    id: "cool-minimal",
    name: "Cool Minimal",
    description: "Crisp whites, soft greys, and icy blues for a clean, contemporary feel.",
    colors: ["#FAFBFC", "#E4E7EB", "#B0B8C4", "#6B7C93", "#2C3E50"],
    mood: "Fresh & Modern",
  },
  {
    id: "earthy-organic",
    name: "Earthy Organic",
    description: "Terracotta, sage, and clay tones inspired by natural landscapes.",
    colors: ["#F5EDE3", "#C8A882", "#A67B5B", "#6B8F71", "#3D2B1F"],
    mood: "Grounded & Natural",
  },
  {
    id: "moody-dark",
    name: "Moody & Dark",
    description: "Deep charcoals, rich navy, and warm metallics for a dramatic, intimate mood.",
    colors: ["#E8E0D8", "#8C7B6B", "#4A4A4A", "#2C3E50", "#1A1A2E"],
    mood: "Dramatic & Intimate",
  },
  {
    id: "vibrant-eclectic",
    name: "Vibrant Eclectic",
    description: "Mustard, teal, and burnt orange for a bold, personality-driven palette.",
    colors: ["#FFF8E7", "#E8A838", "#C25B3F", "#2D8C8C", "#2D3436"],
    mood: "Bold & Expressive",
  },
  {
    id: "pastel-soft",
    name: "Soft Pastels",
    description: "Blush pink, lavender, and soft mint for a gentle, dreamy ambiance.",
    colors: ["#FFF5F5", "#F0D5D0", "#D5C0D0", "#C0D8D0", "#8B8B8B"],
    mood: "Gentle & Dreamy",
  },
];

// ── Step 5: Budget Ranges ────────────────────────────────────────────

export const budgetRanges: BudgetRange[] = [
  {
    id: "essential",
    label: "Essential",
    range: "₹5L – ₹12L",
    description: "Smart design with curated selections that maximize impact within a practical budget.",
    includes: [
      "Space planning & layout",
      "Curated furniture selection",
      "Basic lighting design",
      "Color & material palette",
    ],
  },
  {
    id: "premium",
    label: "Premium",
    range: "₹12L – ₹30L",
    description: "Elevated design with custom elements, premium materials, and detailed styling.",
    includes: [
      "Everything in Essential",
      "Custom furniture pieces",
      "Premium material sourcing",
      "Accent lighting design",
      "Art & accessory curation",
    ],
  },
  {
    id: "luxury",
    label: "Luxury",
    range: "₹30L – ₹60L",
    description: "Bespoke design with handcrafted details, imported materials, and white-glove execution.",
    includes: [
      "Everything in Premium",
      "Bespoke joinery & millwork",
      "Imported materials & finishes",
      "Smart home integration",
      "Turnkey project management",
      "Styling & photography",
    ],
  },
  {
    id: "ultra",
    label: "Ultra Luxury",
    range: "₹60L+",
    description: "No-compromise design for extraordinary spaces. Exclusive collaborations and rare materials.",
    includes: [
      "Everything in Luxury",
      "Exclusive designer collaborations",
      "Rare & bespoke materials",
      "Architectural modifications",
      "Full interior architecture",
      "Ongoing design retainer",
    ],
  },
];

// ── Step labels ──────────────────────────────────────────────────────

export const stepLabels = [
  "Design Theme",
  "Room Type",
  "Furniture Style",
  "Color Scheme",
  "Budget",
  "Summary",
] as const;
