import Link from "next/link";

const tools = [
  { icon: "✂️", title: "Background Remover", desc: "Remove background from any image in 1 click with AI. 100% free.", color: "from-violet-500 to-indigo-500", badge: "Popular" },
  { icon: "🔍", title: "Image Upscaler", desc: "Upscale images to 4K HD without losing quality. AI powered.", color: "from-blue-500 to-cyan-500", badge: "HD" },
  { icon: "📝", title: "Paraphraser Tool", desc: "Rewrite, rephrase any text to make it unique and plagiarism-free.", color: "from-emerald-500 to-teal-500", badge: "AI Writing" },
  { icon: "#️⃣", title: "Hashtag Generator", desc: "Generate viral hashtags for Instagram, TikTok, YouTube Reels.", color: "from-pink-500 to-rose-500", badge: "Viral" },
  { icon: "🪪", title: "Passport Photo Maker", desc: "Create perfect passport size photo for CNIC, Passport, CV.", color: "from-orange-500 to-amber-500", badge: "PK" },
  { icon: "🗣️", title: "Urdu Text to Speech", desc: "Convert Urdu & English text to natural voice. Download MP3.", color: "from-slate-700 to-slate-900", badge: "Urdu AI" },
];

export default function Page(){
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-items-center font-bold">Q</div>
            <span className="font-extrabold text-xl tracking-tight">QuickAITools</span>
            <span className="ml-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border">Free</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>
          <Link href="#tools" className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-zinc-800">Explore Tools</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white border shadow-sm rounded-full px-3 py-1 text-xs">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 12,500+ users trust us daily
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
          6 Powerful AI Tools,<br/>
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">All in One Place.</span>
        </h1>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">No Login • No Watermark • No Limits • Made for Students & Creators in Pakistan</p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#tools" className="bg-blue-600 text-white px-7 py-3 rounded-full font-medium shadow-lg shadow-blue-200">Start Using Free →</a>
          <Link href="/about" className="bg-white border px-7 py-3 rounded-full font-medium">How it works</Link>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section id="tools" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((t)=>(
            <div key={t.title} className="group bg-white border rounded-[24px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} grid place-items-center text-white text-xl`}>{t.icon}</div>
                <span className="text-[10px] tracking-widest bg-gray-50 border px-2 py-1 rounded-full">{t.badge}</span>
              </div>
              <h3 className="mt-5 font-bold text-lg">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-6">{t.desc}</p>
              <button className="mt-5 w-full bg-gray-900 text-white py-2.5 rounded-full text-sm font-medium group-hover:bg-black">Use Tool Now</button>
              <p className="mt-2 text-center text-[11px] text-gray-400">Free • No login needed</p>
            </div>
          ))}
        </div>

        {/* TRUST */}
        <div className="mt-16 bg-white border rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-bold text-xl">Why QuickAITools?</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>✓ 100% Free forever, no hidden charges</li>
              <li>✓ Works in browser - your photos never uploaded to server</li>
              <li>✓ Made for Pakistani students & creators</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div><div className="text-2xl font-black">6</div><div className="text-xs text-gray-500">Tools</div></div>
            <div><div className="text-2xl font-black">0s</div><div className="text-xs text-gray-500">Login</div></div>
            <div><div className="text-2xl font-black">∞</div><div className="text-xs text-gray-500">Free Uses</div></div>
          </div>
        </div>
      </section>

      {/* FOOTER - ADSENSE LINKS */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-black text-white grid place-items-center font-bold">Q</div><span className="font-bold">QuickAITools</span></div>
            <p className="mt-3 text-sm text-gray-500 max-w-sm">Free AI Tools Pack for everyone. Remove background, upscale images, paraphrase text and more - all without login or watermark.</p>
            <p className="mt-3 text-xs text-gray-400">© 2026 QuickAITools.vercel.app - All rights reserved.</p>
          </div>
          <div>
            <h5 className="font-semibold text-sm">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-sm">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-black">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
