import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse — Medical Device Design System",
  description:
    "A design system for clinical software and connected devices. Calm, legible, and engineered for accuracy under fatigue.",
  keywords: [
    "medical device design system",
    "clinical software",
    "healthcare UI",
    "EHR design",
    "bedside monitor",
    "patient care interface",
  ],
  openGraph: {
    title: "Pulse — Medical Device Design System",
    description:
      "A foundation of color, type, and components for healthcare interfaces — from bedside monitors to patient companion apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse — Medical Device Design System",
    description:
      "A foundation of color, type, and components for healthcare interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
