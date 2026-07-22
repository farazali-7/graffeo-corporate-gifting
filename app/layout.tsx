import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

/**
 * Fraunces — the warm, editorial display serif. We pull in the optical-size,
 * SOFT and WONK axes so headlines read as typeset rather than generic.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
  variable: "--font-fraunces",
});

/** Instrument Sans — a refined, humanist grotesque for body and UI. */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const SITE_URL = "https://gifting.graffeo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Corporate Coffee Gifting | Graffeo — Roasting Since 1935",
    template: "%s | Graffeo Gifting",
  },
  description:
    "Send unforgettable small-batch coffee gifts to clients, teams, and partners — without the logistical headache. Self-serve or fully concierge, from a heritage North Beach roaster.",
  keywords: [
    "corporate coffee gifts",
    "client gifting",
    "employee gifts",
    "bulk coffee gifts",
    "Graffeo",
    "corporate gifting program",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Corporate Coffee Gifting | Graffeo",
    description:
      "Unforgettable coffee gifts for clients and teams, without the logistics. Heritage roasting since 1935.",
    siteName: "Graffeo Coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Coffee Gifting | Graffeo",
    description:
      "Unforgettable coffee gifts for clients and teams, without the logistics.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} antialiased`}
    >
      {/* Browser extensions (e.g. ColorZilla, Grammarly) inject attributes on
          <body> before hydration; suppress the resulting attribute mismatch
          on this node only — it does not affect children. */}
      <body className="min-h-dvh font-sans" suppressHydrationWarning>
        {/* Site-wide paper grain veil (decorative) */}
        <div aria-hidden className="site-noise" />
        {children}
      </body>
    </html>
  );
}
