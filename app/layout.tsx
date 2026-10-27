import "./globals.css";
export const metadata = {
  title: "QuickAITools - 6 Free AI Tools in One Place",
  description: "Free AI Tools Pack - Background Remover, Image Upscaler, Paraphraser, Hashtag Generator, Passport Photo Maker, Urdu TTS. No Login, No Watermark.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fafbff]">{children}</body>
    </html>
  );
}
