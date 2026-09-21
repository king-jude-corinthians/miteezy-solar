import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://miteezy-solar.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Miteezy International Services Limited | Solar Solutions in Makurdi",
  description:
    "Solar installation, equipment supply and maintenance for homes and businesses. Talk to Miteezy International Services Limited in Makurdi, Benue State.",
  applicationName: "Miteezy Solar",
  keywords: ["solar installation Makurdi", "solar equipment Benue", "solar power Nigeria", "Miteezy International Services Limited"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Miteezy | Reliable solar power for homes & businesses",
    description: "Solar installation, equipment supply and maintenance in Makurdi, Benue State.",
    type: "website",
    locale: "en_NG",
    images: [{ url: "/hero-solar.webp", width: 1600, height: 900, alt: "Illustrative rooftop solar panels" }],
  },
  twitter: { card: "summary_large_image", title: "Miteezy | Solar solutions in Makurdi", description: "Solar installation, equipment supply and maintenance for homes and businesses.", images: ["/hero-solar.webp"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#102d4f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
