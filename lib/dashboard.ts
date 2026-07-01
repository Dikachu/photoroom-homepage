/**
 * Dashboard copy + asset references in one place.
 * Every link is an inert placeholder ("#") per project scope.
 *
 * Image / video assets are referenced as if they already live in
 * `/public/dashboard/...`. Drop the files in with the exact names below and
 * they light up automatically (see the checklist in the component tree).
 */

import type { ComponentType, SVGProps } from "react";
import {
  Home,
  Sparkles,
  Layers,
  Bell,
  Shopify,
  Designs,
  BrandKit,
  Templates,
  Usage,
  Preferences,
  UploadPhoto,
  BgRemover,
  VirtualModel,
  ProductStaging,
  GhostMannequin,
  ProductBeautifier,
  FlatLay,
  VideoGen,
  Grid,
} from "@/components/dashboard/DashIcons";

export const HREF = "#";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* -------------------------------- Account ----------------------------- */

export const ACCOUNT = {
  initial: "K",
  name: "Kingsley",
  spaceName: "Kingsley's Space",
  scope: "Only you",
};

/* ----------------------------- Sidebar nav ---------------------------- */

export type NavItem = {
  label: string;
  icon: Icon;
  active?: boolean;
  badge?: string;
};

export const NAV_MAIN: NavItem[] = [
  { label: "Home", icon: Home, active: true },
  { label: "AI tools", icon: Sparkles },
  { label: "Batch", icon: Layers },
  { label: "Activity", icon: Bell },
];

export const NAV_CONTENT: NavItem[] = [
  { label: "Shopify products", icon: Shopify, badge: "New" },
  { label: "Designs", icon: Designs },
  { label: "Brand kit", icon: BrandKit },
  { label: "Templates", icon: Templates },
  { label: "Usage", icon: Usage },
  { label: "Preferences", icon: Preferences },
];

/* --------------------------- Account dropdown ------------------------- */

/** Grouped rows for the popover that opens under the account name. */
export const ACCOUNT_MENU: { label: string; muted?: boolean }[][] = [
  [{ label: "Manage Space" }, { label: "Enterprise integrations" }, { label: "Log in to mobile app" }],
  [{ label: "Profile" }, { label: "Sign out" }],
];

/* ------------------------------ Tool tiles ---------------------------- */

export type Tool = {
  label: string;
  icon: Icon;
  /** Purple "active" tile (Start from a photo). */
  highlight?: boolean;
  badge?: string;
  /** Collapsed away below xl so tablets show the truncated set + "See all". */
  hideOnSmall?: boolean;
};

export const TOOLS: Tool[] = [
  { label: "Start from a photo", icon: UploadPhoto, highlight: true },
  { label: "Background Remover", icon: BgRemover },
  { label: "Virtual Model", icon: VirtualModel },
  { label: "Product Staging", icon: ProductStaging },
  { label: "Ghost Mannequin", icon: GhostMannequin },
  { label: "Product Beautifier", icon: ProductBeautifier, hideOnSmall: true },
  { label: "Flat Lay", icon: FlatLay, hideOnSmall: true },
  { label: "Video Generator", icon: VideoGen, badge: "Max", hideOnSmall: true },
  { label: "Batch", icon: Layers, hideOnSmall: true },
  { label: "See all tools...", icon: Grid },
];

/* ------------------------------ Empower ------------------------------- */

export const EMPOWER = {
  title: "Empower your team",
  body: "Upgrade your Space to Pro to boost creativity and efficiency.",
  cta: "Upgrade my Space",
  team: "/dashboard/team.webp",
  alt: "Empowerment team"
};

/* ----------------------------- Get started ---------------------------- */

/** Each card is a single looping video that plays on hover (no poster image). */
export type GetStartedCard = {
  title: string;
  video: string;
};

export const GET_STARTED: GetStartedCard[] = [
  {
    title: "Remove a background",
    video: "/dashboard/get-started/remove-background.webm",
  },
  {
    title: "Generate AI backgrounds",
    video: "/dashboard/get-started/ai-backgrounds.webm",
  },
  {
    title: "Edit hundreds of images at once",
    video: "/dashboard/get-started/batch-edit.webm",
  },
  {
    title: "Retouch an Image",
    video: "/dashboard/get-started/retouch.webm",
  },
];

/* ------------------------- Template galleries ------------------------- */

export type Template = { label?: string; image: string; badge?: boolean };

export const CLASSICS: Template[] = [
  { label: "White", image: "/dashboard/classics/white.jpg" },
  { label: "Black", image: "/dashboard/classics/black.jpg" },
  { label: "Transparent", image: "/dashboard/classics/transparent.jpg" },
  { label: "Original Image", image: "/dashboard/classics/original.jpg" },
];

export const STUDIO: Template[] = Array.from({ length: 8 }, (_, i) => ({
  image: `/dashboard/studio/studio-${i + 1}.jpg`,
  badge: true,
}));

export const ESSENTIALS: Template[] = Array.from({ length: 12 }, (_, i) => ({
  image: `/dashboard/essentials/essentials-${i + 1}.jpg`,
}));
