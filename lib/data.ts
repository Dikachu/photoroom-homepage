/**
 * All homepage copy & asset references in one place.
 * Text is transcribed from the live Photoroom homepage.
 * Per project scope every link is an inert placeholder ("#").
 */

export const HREF = "#";

/* ----------------------------- Header nav ----------------------------- */

import type { MenuIconName } from "@/components/MenuIcon";

export type MenuEntry = {
  title: string;
  desc?: string;
  icon?: MenuIconName;
  badge?: string;
};

export type MenuColumn = {
  label?: string;
  /** icons = icon + title + desc · links = plain text · info = title + desc */
  variant: "icons" | "links" | "info";
  items?: MenuEntry[];
  cta?: { title: string; desc?: string };
  featured?: {
    kicker: string;
    title: string;
    image: string;
    badges: string[];
    cta: string;
  };
  sales?: { icon: MenuIconName; title: string; desc: string; button: string };
};

export type NavMenu = {
  label: string;
  columns?: MenuColumn[];
};

export const NAV_MENUS: NavMenu[] = [
  {
    label: "Product",
    columns: [
      {
        label: "Create",
        variant: "icons",
        items: [
          { title: "Background Remover", desc: "Instant AI cutouts", icon: "bg-remover" },
          { title: "Image Generator", desc: "Generate product scenes", icon: "image-generator" },
          { title: "AI Product Photography", desc: "Full AI photo shoots", icon: "ai-photography" },
          { title: "AI Fashion Models", desc: "Dress any mannequin", icon: "fashion-models" },
          { title: "Product Staging", desc: "Lifestyle background", icon: "product-staging" },
          { title: "AI Shadows", desc: "Realistic drop shadows", icon: "ai-shadows" },
        ],
      },
      {
        label: "Edit",
        variant: "icons",
        items: [
          { title: "Resize & Expand", desc: "Any format, instantly", icon: "resize" },
          { title: "Remove Objects", desc: "Clean any background", icon: "remove-objects" },
          { title: "Recolor Clothing", desc: "Color variants at scale", icon: "recolor" },
          { title: "Brand Kit", desc: "Fonts, logos & colors", icon: "brand-kit" },
          { title: "Logo Maker", desc: "Generate brand assets", icon: "logo-maker" },
        ],
        cta: { title: "See all tools" },
      },
      {
        label: "Scale & Automate",
        variant: "icons",
        items: [
          { title: "Batch Processing", desc: "Edit thousands at once", icon: "batch" },
          { title: "Product Catalog", desc: "Manage your full catalog", icon: "catalog" },
          { title: "Photoroom MCP", desc: "Custom connector in Claude", icon: "mcp" },
          { title: "API", desc: "Integrate at scale", icon: "api" },
          { title: "Team Workspaces", desc: "Collaborate & manage roles", icon: "team" },
          { title: "Enterprise", desc: "Governance, SLA & support", icon: "enterprise" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        label: "By scale",
        variant: "icons",
        items: [
          { title: "Growing Brands", desc: "Startups & SMBs getting to market fast", icon: "growing-brands" },
          { title: "Scaling Businesses", desc: "Mid-market teams needing volume & speed", icon: "scaling" },
          { title: "Enterprise", desc: "Governance, API, compliance & SLA", icon: "enterprise" },
        ],
        cta: { title: "ROI Calculator", desc: "Estimate your savings vs studio shots" },
      },
      {
        label: "By teams",
        variant: "icons",
        items: [
          { title: "Product & Engineering", desc: "API, integrations, workflow at scale", icon: "engineering" },
          { title: "Operations & Catalog", desc: "Image ops, merchant ops, compliance", icon: "operations" },
          { title: "Creative & Photo Studio", desc: "Brand consistency across every shot", icon: "creative" },
          { title: "Marketing", desc: "Campaigns, social, ads", icon: "marketing" },
        ],
      },
      {
        label: "Industries",
        variant: "icons",
        items: [
          { title: "Fashion & Apparel", desc: "Clothing, accessories, shoes", icon: "fashion" },
          { title: "Marketplace & Retail", desc: "Sell on Amazon, eBay & more", icon: "marketplace" },
          { title: "Beauty & Skincare", desc: "Cosmetics, wellness, personal care", icon: "beauty" },
          { title: "Home & Furniture", desc: "Decor, furniture, lifestyle", icon: "home" },
          { title: "Food & Delivery", desc: "Menus, packaging, apps", icon: "food" },
          { title: "Tech & SaaS", desc: "Screenshots, UI, product images", icon: "tech" },
        ],
        cta: { title: "See all industries" },
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        label: "Learn",
        variant: "links",
        items: [
          { title: "Blog" },
          { title: "Webinars" },
          { title: "Video templates" },
          { title: "Community" },
        ],
      },
      {
        label: "Developers",
        variant: "links",
        items: [
          { title: "API Overview" },
          { title: "Documentation" },
          { title: "Integrations" },
          { title: "API Pricing" },
        ],
      },
      {
        label: "Photoroom Intelligence",
        variant: "links",
        featured: {
          kicker: "New report",
          title: "The Hidden Cost of Product Photography for SMBs",
          image: "/images/spotlight_01.webp",
          badges: ["+30%", "+12h"],
          cta: "See all reports",
        },
      },
    ],
  },
  {
    label: "Enterprise",
    columns: [
      {
        label: "Platform",
        variant: "info",
        items: [
          { title: "Enterprise Overview", desc: "Built for teams at scale" },
          { title: "Security & Compliance", desc: "SSO, GDPR, SOC 2" },
          { title: "Team Management", desc: "Roles, permissions & admin" },
          { title: "API", desc: "Build custom workflows at scale" },
          { title: "Custom SLA & Support", desc: "Dedicated success team" },
        ],
      },
      {
        label: "Why Photoroom",
        variant: "info",
        items: [
          { title: "Customer Stories", desc: "How leading brands scaled visuals" },
          { title: "ROI Calculator", desc: "Estimate your savings vs studio shots" },
          { title: "Photoroom Intelligence", desc: "Thought leadership & imaging reports" },
          { title: "Comparisons", desc: "See why teams choose Photoroom" },
        ],
      },
      {
        label: "Talk to sales",
        variant: "info",
        sales: {
          icon: "team",
          title: "Scale your visual operations",
          desc: "Custom plan, dedicated onboarding, and a team that knows e-commerce imaging.",
          button: "Contact sales",
        },
      },
    ],
  },
  { label: "Pricing" },
];

/* ----------------------------- Brand logos ---------------------------- */

export type Logo = { name: string; src: string };

export const BRAND_LOGOS: Logo[] = [
  { name: "DoorDash", src: "/images/doordash_16_9.webp" },
  { name: "Rappi", src: "/images/rappi_16-9.webp" },
  { name: "Mercari", src: "/images/mercari_16_9.webp" },
  { name: "Wolt", src: "/images/wolt_16-9.webp" },
  { name: "Decathlon", src: "/images/decathlon_16-9.webp" },
  { name: "Naver", src: "/images/naver_16_9.webp" },
  { name: "Printify", src: "/images/printify_16_9.webp" },
  { name: "Depop", src: "/images/depop_16_9.webp" },
  { name: "Palm Angels", src: "/images/palm_angels_16-9.webp" },
  { name: "Layer", src: "/images/layer_16_9.webp" },
  { name: "Yuka", src: "/images/yuka_16_9.webp" },
  { name: "Selency", src: "/images/selency_16_9.webp" },
  { name: "Valuence", src: "/images/valuence_16-9.webp" },
  { name: "Sorare", src: "/images/sorare_16_9.webp" },
];

/* -------------------- "Full AI visual solution" tabs ------------------ */

export type BentoCard = {
  title: string;
  body: string;
  image: string;
  wide: boolean;
};

export type SolutionTab = {
  id: string;
  label: string;
  cards: BentoCard[];
};

export const SOLUTION_TABS: SolutionTab[] = [
  {
    id: "scale",
    label: "Scale & Automate",
    cards: [
      {
        title: "Batch Edit",
        body: "Run AI edits across thousands of images in one pass, via API or the web app. No queue infrastructure on your side.",
        image: "/images/batch_edit.webp",
        wide: true,
      },
      {
        title: "Image API",
        body: "Automate image production at scale.",
        image: "/images/api.webp",
        wide: false,
      },
      {
        title: "Marketplace Sync",
        body: "Publish on-brand to Shopify and any marketplace feeds.",
        image: "/images/marketing_sync.webp",
        wide: false,
      },
      {
        title: "Enterprise",
        body: "Custom models, dedicated capacity, custom endpoints, and SLA-backed uptime. SOC 2 Type 2.",
        image: "/images/entreprise.webp",
        wide: true,
      },
    ],
  },
  {
    id: "create",
    label: "Create",
    cards: [
      {
        title: "AI Product Photography",
        body: "Generate studio-quality product visuals without a studio.",
        image: "/images/ai_product_photography.webp",
        wide: true,
      },
      {
        title: "Brand kit",
        body: "Lock in your colors, logos, and layouts. Every image stays on brand, automatically.",
        image: "/images/brand_kit.webp",
        wide: false,
      },
      {
        title: "Instant Resize",
        body: "One image, every format. Resize for Instagram, Amazon, Shopify, and more.",
        image: "/images/instant_resize.webp",
        wide: false,
      },
      {
        title: "Video Templates",
        body: "Take one product shot and turn it into campaign-ready video for Reels, TikTok, and Stories, all on-brand and ready to publish.",
        image: "/images/video.webp",
        wide: true,
      },
    ],
  },
  {
    id: "edit",
    label: "Edit",
    cards: [
      {
        title: "Background Remover",
        body: "The fastest, most precise background remover on the market.",
        image: "/images/background_remover.webp",
        wide: true,
      },
      {
        title: "AI Shadow",
        body: "Add natural shadows that make products look real.",
        image: "/images/ai_shadows.webp",
        wide: false,
      },
      {
        title: "Recolor",
        body: "Change product colors instantly.",
        image: "/images/recolor.webp",
        wide: false,
      },
      {
        title: "Product Staging",
        body: "Drop your product into lifestyle scenes and seasonal contexts.",
        image: "/images/product_staging.webp",
        wide: true,
      },
    ],
  },
];

/* ----------------- "Built for businesses that sell" ------------------- */

export type Persona = {
  title: string;
  body: string;
  cta: string;
  quote: string;
  author: string;
  logo: string;
  dark?: boolean;
  lime?: boolean;
};

export const PERSONAS: Persona[] = [
  {
    title: "Growing brands",
    body: "Professional product photos in seconds. Remove backgrounds, create lifestyle shots, and list faster than your competition.",
    cta: "Start for free",
    quote:
      "It’s only simple, but it just adds a little bit extra. And we’re seeing so much more engagement, so many more followers and likes on our socials.",
    author: "Dan Bacon, Founder, Layer",
    logo: "/images/layer_persona_block_logo.webp",
  },
  {
    title: "Scaling businesses",
    body: "Easily batch edit your products, publish them directly to Shopify and maintain a consistent brand presence across all your marketing channels.",
    cta: "Start for free",
    quote:
      "We were able to move from product assets to final live images very quickly. The entire process took just three to four days.",
    author: "Marketing Manager",
    logo: "/images/palm_angels_persona_block_logo.webp",
  },
  {
    title: "Enterprise",
    body: "For global teams running visual production at catalogue scale. Custom AI models, API access and dedicated support to match.",
    cta: "Contact sales",
    quote:
      "We're proud to be the first fashion resale marketplace to partner with Photoroom, enabling sellers to quickly create high-quality product shots that help their listings stand out.",
    author: "Sonia Biddle, Chief Product Officer, Depop",
    logo: "/images/depop_persona_block_logo.webp",
    dark: true,
    lime: true,
  },
];

/* ----------------------------- Testimonials --------------------------- */

export type Testimonial = {
  brand: string;
  stat: string;
  quote: string;
  author: string;
  role: string;
  logo: string;
  cover: string;
};

// NOTE: only the Decathlon cover ships in the asset set; the other three use
// in-repo product images as stand-ins (swap the `cover` paths for the real
// shots when available).
export const FEATURED_TESTIMONIALS: Testimonial[] = [
  {
    brand: "Decathlon",
    stat: "99% cost reduction per image",
    quote:
      "Without Photoroom, we would not have been able to guarantee a constant quality level across our large image volume. We also would have missed the six-figures savings made possible by cutting the workload to a quarter through automation.",
    author: "Matthieu Chatelain",
    role: "Digital Project Manager",
    logo: "/images/decathlon_3-1.webp",
    cover: "/images/decathlon_testimonial_cover.webp",
  },
  {
    brand: "Valuence",
    stat: "$80K saved annually",
    quote:
      "The key factor in selecting Photoroom was the superior quality of its shadow rendering. While both Photoroom and the alternative offered comparable cutout accuracy, Photoroom's shadows appeared more natural and better suited for product images.",
    author: "Takanori Hirai",
    role: "Deputy General Manager",
    logo: "/images/valuence_16-9.webp",
    cover: "/images/spotlight_03.webp",
  },
  {
    brand: "Mercari",
    stat: "Easy to start, smooth to scale",
    quote:
      "Working with the Photoroom commercial and technical teams was easy and very straightforward, things went really smooth.",
    author: "Nick Pittoni",
    role: "AI/LLM Consumer Product Lead, Mercari",
    logo: "/images/mercari_16_9.webp",
    cover: "/images/spotlight_04.webp",
  },
  {
    brand: "Sorare",
    stat: "10× faster image processing",
    quote:
      "Our process is much more optimized now — it has allowed us to save cost while maintaining the quality of our pictures.",
    author: "Jessica Assouline",
    role: "Partnership Operations Lead, Sorare",
    logo: "/images/sorare_16_9.webp",
    cover: "/images/spotlight_02.webp",
  },
];

/* ------------------ "Built for visual production at scale" ------------ */

export type Differentiator = {
  index: string;
  title: string;
  points: { lead: string; rest: string }[];
  image: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    index: "01",
    title: "Thousands of images live in minutes, not launch cycles",
    image: "/images/differentiator_1_2x.webp",
    points: [
      { lead: "Batch editing at catalog scale:", rest: " Thousands of images in one job, from the web app or the API." },
      { lead: "Automated QA, not manual review:", rest: " Brand rules apply on upload, so checks that took hours run in minutes." },
      { lead: "One master image, every channel:", rest: " Marketplace, DTC, resale, and delivery formats from a single run." },
      { lead: "One queue for every source:", rest: " PIM, DAM, API, seller, and supplier inputs all flow into the same pipeline." },
    ],
  },
  {
    index: "02",
    title: "Accurate to the product, consistent to the brand, every image",
    image: "/images/differentiator_2_2x.webp",
    points: [
      { lead: "Brand Kit locks your rules:", rest: " Backgrounds, padding, colors, logos, and formats applied automatically, with role-based access." },
      { lead: "Edits that stay true to the product:", rest: " Models built for e‑commerce hold the real product, so what ships matches what arrives." },
      { lead: "Backed by Enterprise Guarantee:", rest: " Pay only for outputs that pass your fidelity criteria set upfront. Anything that doesn't is regenerated or credited back." },
    ],
  },
  {
    index: "03",
    title: "The best model on your stack, no vendor lock-in",
    image: "/images/differentiator_3_2x.webp",
    points: [
      { lead: "Custom AI models tuned to your catalog:", rest: " Trained on your products and brand rules, on Enterprise contracts." },
      { lead: "A REST API that adopts new models:", rest: " Endpoint-level control with your Brand Kit rules applied, so the same workflow runs as models evolve." },
      { lead: "Connects to your stack, across every surface:", rest: " Native PIM, DAM, and cloud connectors, on API, web, and mobile." },
      { lead: "Usage dashboards:", rest: " Track credits per key, feature, and user, with alerts before exhaustion." },
    ],
  },
];

/* --------------------- "See what Photoroom can do" -------------------- */

export const CAPABILITIES = [
  {
    title: "AI Product Photography",
    body: "Generate studio-quality shots in seconds. Just upload a product photo and Photoroom generates the visual.",
    image: "/images/spotlight_01.webp",
  },
  {
    title: "Background Remover",
    body: "The fastest AI background removal, trusted by 80M+ users. Get pixel-perfect cutouts for clean product listings, white backgrounds, or transparent exports.",
    image: "/images/spotlight_02.webp",
  },
  {
    title: "Brand Kit & Templates",
    body: "Save your brand colors, logos, fonts, and layouts so every image across every channel is consistent and on brand.",
    image: "/images/spotlight_03.webp",
  },
  {
    title: "Batch Processing & Automation",
    body: "Edit hundreds of images at once. Choose your parameters, apply across your catalog, and export marketplace-ready visuals in minutes.",
    image: "/images/spotlight_04.webp",
  },
];

/* --------------------- "Enterprise-grade security" -------------------- */

export const SECURITY = [
  {
    title: "SOC 2 Type 2",
    body: "Independently audited controls protect your data and integrations.",
    image: "/images/type_soc2.webp",
  },
  {
    title: "GDPR compliant",
    body: "Your data is handled with transparency, encryption, and strict access controls.",
    image: "/images/type_gdpr.webp",
  },
  {
    title: "Built on GCP, AWS, and Cloudflare",
    body: "World-class infrastructure with redundancy and fault tolerance.",
    image: "/images/type_infrastructure.webp",
    wide: true,
  },
  {
    title: "Responsible AI",
    body: "Regular audits to reduce bias, ensure fairness, and maintain transparency.",
    image: "/images/type_photoroom.webp",
  },
];

/* ---------------------------- Resources ------------------------------- */

export const RESOURCES = [
  {
    title: "How to replace fashion photoshoots with AI virtual models",
    image: "/images/virtual_models_for_fashion_e_commerce_m_.webp",
  },
  {
    title: "7 AI photo editing tips for e‑commerce success in 2026",
    image: "/images/essential_ai_photo_editing_tips_for_e_commerce_success_m_.webp",
  },
  {
    title: "How Shopify images influence organic and paid performance",
    image: "/images/how-better-visuals-improve-organic-and-paid-performance-on-shopify-m.webp",
  },
  {
    title: "50 AI image prompts to create visuals for e‑commerce",
    image: "/images/image_prompts_101_how_it_works_benefits_use_cases_m_.webp",
  },
  {
    title: "16+ best AI tools for e‑commerce: Boost productivity, creativity, and sales (2026)",
    image: "/images/best_ai_tools_for_small_businesses_ecommerce_m_.webp",
  },
];

/* ------------------------------ Footer -------------------------------- */

export const FOOTER_COLUMNS: { title: string; links: { label: string; badge?: string }[] }[] = [
  {
    title: "Tools",
    links: [
      { label: "Product Staging" },
      { label: "AI Fashion Models", badge: "New" },
      { label: "Ghost Mannequin", badge: "New" },
      { label: "Flat Lay", badge: "New" },
      { label: "Product Beautifier" },
      { label: "Unwrinkle clothes", badge: "New" },
      { label: "AI Shadows" },
      { label: "Edit with AI", badge: "New" },
      { label: "White Background" },
      { label: "Blur Background" },
      { label: "Background Generator" },
      { label: "Background Remover" },
      { label: "Product Video Generator", badge: "New" },
      { label: "Remove objects" },
      { label: "Recolor clothing" },
      { label: "Resize image" },
      { label: "Transparent background" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Faster product listings" },
      { label: "Catalogue at scale" },
      { label: "Visuals that sell" },
      { label: "Scale ads" },
      { label: "Increase brand visibility" },
      { label: "Multichannel image optimisation" },
    ],
  },
  {
    title: "Product photography",
    links: [
      { label: "E‑commerce" },
      { label: "Food" },
      { label: "Skincare" },
      { label: "Jewelry" },
      { label: "Beauty" },
      { label: "Clothing" },
      { label: "For Amazon" },
      { label: "Furniture" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Food & delivery" },
      { label: "Fashion & apparel" },
      { label: "Marketplaces" },
      { label: "Home & furniture" },
      { label: "Beauty" },
    ],
  },
  {
    title: "Automation",
    links: [
      { label: "Batch editing" },
      { label: "Bulk resizing" },
      { label: "Bulk background removal" },
      { label: "Bulk positioning" },
      { label: "Bulk converting" },
      { label: "API documentation" },
      { label: "Photoroom MCP", badge: "New" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us" },
      { label: "Job openings" },
      { label: "Media" },
      { label: "Press Kit" },
      { label: "Blog" },
      { label: "Company blog" },
      { label: "Customer stories" },
      { label: "Impact & Sustainability" },
      { label: "Industry reports" },
      { label: "Glossary" },
      { label: "Contact support" },
    ],
  },
  {
    title: "Plans",
    links: [{ label: "Pricing" }, { label: "Enterprise" }, { label: "API pricing" }],
  },
];

export const LEGAL_LINKS = [
  "Terms & conditions",
  "Privacy policy",
  "Cookie policy",
  "Legal",
];
