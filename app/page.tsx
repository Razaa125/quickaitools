"use client";
import Link from "next/link";

const tools = [
  { name: "Background Remover", slug: "background-remover", desc: "Remove image background in 2 seconds with AI", icon: "🖼️" },
  { name: "Image Upscaler 4K", slug: "image-upscaler", desc: "Upscale image to 4K without losing quality", icon: "✨" },
  { name: "AI Paraphraser", slug: "paraphraser", desc: "Rewrite text for students, 100% plagiarism free", icon: "📝" },
  { name: "Hashtag Generator", slug: "hashtag-generator", desc: "Viral hashtags for Instagram, TikTok, YouTube", icon: "#️⃣" },
  { name: "Passport Photo Maker", slug: "passport-photo", desc: "Make passport size photo at home free", icon: "🪪" },
  { name: "Text to Speech Urdu", slug: "text-to-speech", desc: "Convert Urdu & English text to voice", icon: "🔊" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-[#2563EB]">QuickAITools</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Free AI Tools Pack<br/><span className="text-[#2563EB]">6 Tools in One Place</span></h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">No login, no watermark, 100% free for students and creators in Pakistan and worldwide.</p>
        <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
          <span>⚡ 6 Tools</span><span>🔓 No Login</span><span>💸 100% Free</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {tools.map(t => (
          <div key={t.slug} className="border rounded-2xl p-6 hover:shadow-lg transition">
            <div className="text-3xl">{t.icon}</div>
            <h3 className="mt-3 font-semibold text-lg">{t.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
            <Link href={`/${t.slug}`} className="mt-4 inline-block bg-[#2563EB] text-white text-sm px-4 py-2 rounded-lg">Use Tool</Link>
          </div>
        ))}
      </section>

      <section className="bg-[#2563EB] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div><h4 className="font-bold">Fast & Free</h4><p className="text-sm opacity-80 mt-1">All tools run in browser, super fast</p></div>
          <div><h4 className="font-bold">No Data Saved</h4><p className="text-sm opacity-80 mt-1">Your images & text never stored</p></div>
          <div><h4 className="font-bold">For Pakistan & Global</h4><p className="text-sm opacity-80 mt-1">Urdu + English support</p></div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-6 justify-between">
          <div>© 2026 QuickAITools - Free AI Tools</div>
          <div className="flex gap-4">
            <Link href="/about">About Us</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact Us</Link><Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
