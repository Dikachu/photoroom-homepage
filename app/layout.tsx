import type { Metadata, Viewport } from "next";
import { ttPhotoroom } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.photoroom.com"),
  title:
    "AI-Powered Photo Editor and Listing Studio for Product Photography | Photoroom",
  description:
    "AI-powered photo editing tool and listing studio for quick, professional-quality visuals tailored to e‑commerce businesses and social media creators. It helps automate image creation, format for multiple marketplaces, and produce marketplace-ready listings at scale.",
  applicationName: "Photoroom",
  openGraph: {
    title: "Remove Background and Create Product Pictures | Photoroom",
    description:
      "Create product and portrait pictures using only your phone. Remove background, change background and showcase products.",
    type: "website",
    locale: "en",
    siteName: "Photoroom",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@photoroom_app",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={ttPhotoroom.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
