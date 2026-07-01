import type { ReactNode, SVGProps } from "react";

/**
 * Line-icon set for the dashboard sidebar, tool tiles and chrome.
 * Drawn on a 24px grid with a 1.7 stroke and round joins to match the
 * glyph weight used across the Photoroom web app.
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Shared stroke wrapper so every glyph stays visually consistent. */
function Ico({ children, ...props }: IconProps & { children: ReactNode }) {
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
      {children}
    </svg>
  );
}

/* ------------------------------- Sidebar ------------------------------ */

export function Home(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V19a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V9.5" />
      <path d="M9.75 20.5v-5.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v5.5" />
    </Ico>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M12 4.5 13.4 9 18 10.4 13.4 11.8 12 16.5 10.6 11.8 6 10.4 10.6 9 12 4.5Z" />
      <path d="M18.5 4v3M20 5.5h-3" />
    </Ico>
  );
}

export function Layers(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" />
      <path d="M3 12.5 12 17l9-4.5" />
      <path d="M3 16.5 12 21l9-4.5" opacity="0.6" />
    </Ico>
  );
}

export function Bell(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M6 9.5a6 6 0 0 1 12 0c0 4.5 1.8 5.5 1.8 5.5H4.2S6 14 6 9.5Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Ico>
  );
}

export function Shopify(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M6.5 8h11l.7 11.5a1 1 0 0 1-1 1.05H6.8a1 1 0 0 1-1-1.05L6.5 8Z" />
      <path d="M9 8.5V6.5a3 3 0 0 1 6 0v2" />
    </Ico>
  );
}

export function Designs(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4.5 17 4.5-4.5 4 4 3-3 3.5 3.5" />
    </Ico>
  );
}

export function BrandKit(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M5 4.5h8l6 6v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" />
      <path d="M13 4.5V10h5.5" />
      <path d="M8.5 14.5h5M8.5 17.5h3" opacity="0.7" />
    </Ico>
  );
}

export function Templates(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11.5H12l1-7.5Z" />
    </Ico>
  );
}

export function Usage(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M4 16h16" />
      <path d="M12 16l4-3.5" />
    </Ico>
  );
}

export function Preferences(props: IconProps) {
  return (
    <Ico {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M4.2 7.5l1.9 1.1M17.9 15.4l1.9 1.1M4.2 16.5l1.9-1.1M17.9 8.6l1.9-1.1" />
    </Ico>
  );
}

/* ------------------------------ Tool tiles ---------------------------- */

export function UploadPhoto(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M12 15V6" />
      <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
      <path d="M6 14.5V17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5" />
    </Ico>
  );
}

export function BgRemover(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path
        d="M4 9 9 4M5.5 15 15 5.5M11 20.5 20.5 11M17 20.5l3.5-3.5"
        strokeWidth="1.2"
        opacity="0.85"
      />
    </Ico>
  );
}

export function VirtualModel(props: IconProps) {
  return (
    <Ico {...props}>
      <circle cx="10" cy="8" r="3" />
      <path d="M4.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M18 7.5v4M20 9.5h-4" />
    </Ico>
  );
}

export function ProductStaging(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M8 3.5h8l2 5H6l2-5Z" />
      <path d="M12 8.5V16" />
      <path d="M9 20.5h6M12 16v4.5" />
    </Ico>
  );
}

export function GhostMannequin(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M8.5 4 12 5.8 15.5 4l3 2.6-2.4 2.4V20H7.9V9L5.5 6.6 8.5 4Z" />
    </Ico>
  );
}

export function ProductBeautifier(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M5 19.5 14 10.5" />
      <path d="M16 4.5 17 7l2.5 1L17 9l-1 2.5L15 9l-2.5-1L15 7l1-2.5Z" />
    </Ico>
  );
}

export function FlatLay(props: IconProps) {
  return (
    <Ico {...props}>
      <path d="M7 4h10l.5 4.5-1 12h-3.7L12 13l-.8 7.5H7.5l-1-12L7 4Z" />
      <path d="M6.6 8.5h10.8" opacity="0.7" />
    </Ico>
  );
}

export function VideoGen(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="M16 10.5 21 7.5v9l-5-3" />
    </Ico>
  );
}

export function Grid(props: IconProps) {
  return (
    <Ico {...props}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </Ico>
  );
}

/* --------------------------------- Chrome ----------------------------- */

export function Search(props: IconProps) {
  return (
    <Ico {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Ico>
  );
}

export function Bolt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 2 4.5 13.5H11l-1 8L18.5 10H12l1-8Z" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.9723 4.45554L13.6997 9.70839C13.7916 9.98857 14.0114 10.2084 14.2916 10.3003L19.5445 12.0277C20.3943 12.3079 20.3943 13.5103 19.5445 13.7904L14.2916 15.5179C14.0114 15.6097 13.7916 15.8296 13.6997 16.1098L11.9723 21.3626C11.6921 22.2125 10.4897 22.2125 10.2096 21.3626L8.48211 16.1098C8.39026 15.8296 8.17039 15.6097 7.89021 15.5179L2.63736 13.7904C1.78755 13.5103 1.78755 12.3079 2.63736 12.0277L7.89021 10.3003C8.17039 10.2084 8.39026 9.98857 8.48211 9.70839L10.2096 4.45554C10.4897 3.60573 11.6921 3.60573 11.9723 4.45554ZM10.2096 10.2755C9.93751 11.1047 9.28723 11.7551 8.45821 12.0275L8.45658 12.028L5.77737 12.9091L8.45658 13.7902L8.45754 13.7905C9.28626 14.0627 9.93705 14.7131 10.2093 15.5418L10.2098 15.5434L11.0909 18.2226L11.972 15.5434L11.9723 15.5425C12.2445 14.7137 12.8949 14.063 13.7236 13.7907L13.7252 13.7902L16.4044 12.9091L13.7252 12.028L13.7243 12.0277C12.8956 11.7555 12.2448 11.1051 11.9725 10.2764L11.972 10.2748L11.0909 7.59556L10.2096 10.2755Z"></path><path d="M17.9207 2.32055C18.0614 1.89315 18.6659 1.89315 18.8066 2.32055L19.4438 4.25859C19.4904 4.39925 19.6008 4.50959 19.7414 4.55622L21.6795 5.19343C22.1068 5.33408 22.1068 5.93865 21.6795 6.0793L19.7414 6.71651C19.6008 6.76313 19.4904 6.87348 19.4438 7.01413L18.8066 8.95218C18.6659 9.37958 18.0614 9.37958 17.9207 8.95218L17.2835 7.01413C17.2369 6.87348 17.1265 6.76313 16.9859 6.71651L15.0478 6.0793C14.6204 5.93865 14.6204 5.33408 15.0478 5.19343L16.9859 4.55622C17.1265 4.50959 17.2369 4.39925 17.2835 4.25859L17.9207 2.32055Z"></path>
    </svg>
  );
}
