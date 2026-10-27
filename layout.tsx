import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "QuickAITools — Free AI Tools for Everyone",
    template: "%s | QuickAITools",
  },
  description:
    "6 free AI tools in one place: Background Remover, Image Upscaler 4K, AI Paraphraser, Hashtag Generator, Passport Photo Maker, and Urdu Text to Speech. No login required.",
  keywords: [
    "free ai tools", "background remover", "image upscaler", "ai paraphraser",
    "hashtag generator", "passport photo maker", "urdu text to speech",
    "free tools pakistan", "ai tools online",
  ],
  authors: [{ name: "QuickAITools" }],
  creator: "QuickAITools",
  metadataBase: new URL("https://quickaitools.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quickaitools.vercel.app",
    siteName: "QuickAITools",
    title: "QuickAITools — Free AI Tools for Everyone",
    description:
      "6 free AI tools: Background Remover, Image Upscaler, Paraphraser, Hashtag Generator, Passport Photo & Urdu TTS. No signup needed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuickAITools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickAITools — Free AI Tools for Everyone",
    description: "6 free AI tools in one place. No login, no watermark.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
