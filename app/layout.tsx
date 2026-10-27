import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickAITools - Free AI Tools Pack",
  description: "6 Free AI Tools in One Place - Background Remover, Upscaler, Paraphraser, Hashtag Generator, Passport Photo, Urdu TTS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
