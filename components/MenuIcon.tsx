import type { ReactElement, SVGProps } from "react";

/**
 * Clean line-icon set used inside the header mega-menus, styled to match the
 * outline glyphs on photoroom.com (24px grid, 1.7 stroke, round joins).
 */

export type MenuIconName =
  | "bg-remover"
  | "image-generator"
  | "ai-photography"
  | "fashion-models"
  | "product-staging"
  | "ai-shadows"
  | "resize"
  | "remove-objects"
  | "recolor"
  | "brand-kit"
  | "logo-maker"
  | "batch"
  | "catalog"
  | "mcp"
  | "api"
  | "team"
  | "enterprise"
  | "growing-brands"
  | "scaling"
  | "engineering"
  | "operations"
  | "creative"
  | "marketing"
  | "fashion"
  | "marketplace"
  | "beauty"
  | "home"
  | "food"
  | "tech";

const PATHS: Record<MenuIconName, ReactElement> = {
  "bg-remover": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M3 9l6-6M5 15l10-10M11 21l10-10M17 21l4-4" strokeWidth="1.2" opacity="0.85" />
    </>
  ),
  "image-generator": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="8.5" cy="9" r="1.4" />
      <path d="M21 16l-4.5-4.5L7 21" />
      <path d="M18.5 3v3.4M16.8 4.7h3.4" strokeWidth="1.4" />
    </>
  ),
  "ai-photography": (
    <>
      <path d="M14.5 4.5h-5L8 6.5H4.5A1.5 1.5 0 0 0 3 8v9.5A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5H16l-1.5-2Z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </>
  ),
  "fashion-models": (
    <>
      <circle cx="11.5" cy="8" r="3.2" />
      <path d="M5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M19 3v3.2M17.4 4.6h3.2" strokeWidth="1.4" />
    </>
  ),
  "product-staging": (
    <>
      <path d="M9 2.5h6l2.5 6.5H6.5L9 2.5Z" />
      <path d="M12 9v9.5" />
      <path d="M8.5 21.5h7" />
    </>
  ),
  "ai-shadows": (
    <>
      <rect x="3.5" y="3.5" width="12" height="12" rx="2.5" />
      <path d="M8.5 19.5h10a1 1 0 0 0 1-1v-9" opacity="0.55" />
    </>
  ),
  resize: (
    <>
      <path d="M4 9V5a1 1 0 0 1 1-1h4" />
      <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
    </>
  ),
  "remove-objects": (
    <>
      <path d="M12 20H6.5l-3-3a2 2 0 0 1 0-2.8l8-8a2 2 0 0 1 2.8 0l4 4a2 2 0 0 1 0 2.8L13.5 20" />
      <path d="M11 20h9" />
      <path d="M8.5 9.5l5 5" />
    </>
  ),
  recolor: <path d="M12 3s6 6.3 6 10.6a6 6 0 0 1-12 0C6 9.3 12 3 12 3Z" />,
  "brand-kit": (
    <path d="M6 3.5h12a1 1 0 0 1 1 1V20l-7-3.2L5 20V4.5a1 1 0 0 1 1-1Z" />
  ),
  "logo-maker": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.6a4 4 0 1 0 0 4.8" />
    </>
  ),
  batch: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 12.5l9 5 9-5" />
      <path d="M3 16.5l9 5 9-5" opacity="0.55" />
    </>
  ),
  catalog: (
    <>
      <path d="M3.5 3.5h7L20 13l-6.5 6.5L4 10V3.5Z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </>
  ),
  mcp: <path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11.5H12l1-7.5Z" />,
  api: (
    <>
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.6a3 3 0 0 1 0 5.8" />
      <path d="M17 19a5.5 5.5 0 0 0-2.2-4.4" />
    </>
  ),
  enterprise: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 9h4.5a1 1 0 0 1 1 1v11" />
      <path d="M3 21h18" />
      <path d="M7.5 8h3M7.5 12h3M7.5 16h3" strokeWidth="1.4" />
    </>
  ),
  "growing-brands": (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 21v-9M20 7.5l-8 4.5-8-4.5" />
    </>
  ),
  scaling: (
    <>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M10.6 7.8L7.4 14.8M13.4 7.8l3.2 7M8.5 17h7" strokeWidth="1.4" />
    </>
  ),
  engineering: <path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11.5H12l1-7.5Z" />,
  operations: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="4.5" rx="1.6" />
      <rect x="13.5" y="10" width="7.5" height="11" rx="1.6" />
      <rect x="3" y="13" width="7.5" height="8" rx="1.6" />
    </>
  ),
  creative: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-1 1.4-2-.4-1.2.5-2.2 1.7-2.2H17a4 4 0 0 0 4-4c0-4.9-4-7.8-9-7.8Z" />
      <circle cx="7.8" cy="11" r="1" />
      <circle cx="12" cy="7.8" r="1" />
      <circle cx="16" cy="10.5" r="1" />
    </>
  ),
  marketing: (
    <>
      <path d="M3 21h18" />
      <path d="M6.5 21v-5M11.5 21V8M16.5 21v-9" />
    </>
  ),
  fashion: (
    <>
      <path d="M12 7.2a2 2 0 1 1 2 2c-1.1 0-2 .9-2 2" />
      <path d="M12 11.2L4.2 17a1 1 0 0 0 .6 1.8h14.4a1 1 0 0 0 .6-1.8L12 11.2Z" />
    </>
  ),
  marketplace: (
    <>
      <path d="M6.2 8h11.6l-1 11.5a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6.2 8Z" />
      <path d="M9 8.5V6.5a3 3 0 0 1 6 0v2" />
    </>
  ),
  beauty: (
    <>
      <path d="M10 2.5h4v3l1 2.2V19a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7.7l1-2.2v-3Z" />
      <path d="M9 11.5h6" />
    </>
  ),
  home: (
    <>
      <path d="M5 11V8.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V11" />
      <path d="M3.5 11.5A1.8 1.8 0 0 1 6.5 13v2.5h11V13a1.8 1.8 0 0 1 3-1.4V19h-2v-1.5h-13V19h-2v-7.5Z" />
    </>
  ),
  food: (
    <>
      <path d="M12 3.2c3.4 0 6.5 1.8 8.4 4.7L12 20.8 3.6 7.9A10 10 0 0 1 12 3.2Z" />
      <circle cx="10" cy="9" r="0.9" />
      <circle cx="13.5" cy="11" r="0.9" />
    </>
  ),
  tech: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2.2" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
};

export default function MenuIcon({
  name,
  ...props
}: { name: MenuIconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
