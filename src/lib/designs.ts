export interface DesignItem {
  id: string;
  title: string;
  description: string;
  category: string[];
  tags: string[];
  path: string;
  gradient: string;
  inspiration: string;
}

export const designCategories = [
  "All",
  "Video",
  "Luxury",
  "Scroll Animation",
  "Horizontal",
  "Dark/Neon",
  "Minimalist",
  "Editorial",
  "Creative",
] as const;

export const designs: DesignItem[] = [
  {
    id: "video-hero",
    title: "Video Hero",
    description: "Full-screen video background with cinematic overlay text and smooth transitions",
    category: ["Video", "Creative"],
    tags: ["fullscreen", "video", "cinematic", "immersive"],
    path: "/designs/video-hero",
    gradient: "from-red-600 to-orange-500",
    inspiration: "Apple, Nike, Tesla",
  },
  {
    id: "luxury-jewelry",
    title: "Luxury Jewelry",
    description: "Elegant serif typography with gold accents and smooth reveal animations",
    category: ["Luxury"],
    tags: ["elegant", "serif", "gold", "premium", "jewelry"],
    path: "/designs/luxury-jewelry",
    gradient: "from-amber-700 to-yellow-500",
    inspiration: "Tiffany & Co, Cartier, Bulgari",
  },
  {
    id: "scroll-animation",
    title: "Scroll Animation",
    description: "GSAP-powered parallax scroll with pin sections and text reveals",
    category: ["Scroll Animation", "Creative"],
    tags: ["gsap", "parallax", "scroll-trigger", "pin"],
    path: "/designs/scroll-animation",
    gradient: "from-violet-600 to-indigo-500",
    inspiration: "Apple AirPods Pro, Stripe, Linear",
  },
  {
    id: "horizontal-scroll",
    title: "Horizontal Scroll",
    description: "Sideways scrolling gallery with momentum-based navigation",
    category: ["Horizontal", "Creative"],
    tags: ["horizontal", "gallery", "momentum", "portfolio"],
    path: "/designs/horizontal-scroll",
    gradient: "from-cyan-500 to-blue-500",
    inspiration: "Locomotive, Rally Interactive",
  },
  {
    id: "dark-neon",
    title: "Dark Neon",
    description: "Cyberpunk-inspired dark theme with glowing neon accents and grid patterns",
    category: ["Dark/Neon", "Creative"],
    tags: ["dark", "neon", "cyberpunk", "glow", "grid"],
    path: "/designs/dark-neon",
    gradient: "from-purple-600 to-pink-500",
    inspiration: "Razer, Steam, Cyberpunk 2077",
  },
  {
    id: "minimalist-zen",
    title: "Minimalist Zen",
    description: "Japanese-inspired ultra clean design with generous whitespace and subtle animations",
    category: ["Minimalist"],
    tags: ["minimal", "zen", "whitespace", "japanese", "clean"],
    path: "/designs/minimalist-zen",
    gradient: "from-stone-400 to-stone-600",
    inspiration: "Muji, Aesop, Issey Miyake",
  },
  {
    id: "magazine-editorial",
    title: "Magazine Editorial",
    description: "Bold editorial grid layout with asymmetric typography and image overlaps",
    category: ["Editorial", "Creative"],
    tags: ["magazine", "grid", "editorial", "typography", "asymmetric"],
    path: "/designs/magazine-editorial",
    gradient: "from-rose-500 to-red-600",
    inspiration: "Vogue, The New York Times, Bloomberg",
  },
  {
    id: "creative-agency",
    title: "Creative Agency",
    description: "Bold oversized typography with cursor interactions and motion design",
    category: ["Creative"],
    tags: ["agency", "typography", "motion", "bold", "cursor"],
    path: "/designs/creative-agency",
    gradient: "from-emerald-500 to-teal-500",
    inspiration: "Awwwards, Basic/Dept, Rally",
  },
];
