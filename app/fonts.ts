import localFont from "next/font/local";

/**
 * Self-hosted "TT Photoroom" typeface (the brand font used on photoroom.com).
 * Files are stored locally so Next.js can optimise and inline them with no
 * external request and zero layout shift.
 */
export const ttPhotoroom = localFont({
  src: [
    { path: "./fonts/TT_Photoroom_Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TT_Photoroom_Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/TT_Photoroom_Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/TT_Photoroom_DemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/TT_Photoroom_Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/TT_Photoroom_ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-photoroom",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});
