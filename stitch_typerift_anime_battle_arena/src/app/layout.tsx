import type { Metadata } from "next";
import { Anybody, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Anybody({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"]
});

const arcade = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-arcade",
  weight: ["400", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "700"]
});

export const metadata: Metadata = {
  title: "TypeRift",
  description: "Anime-inspired competitive typing battle prototype."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${arcade.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
