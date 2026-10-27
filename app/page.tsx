import Link from "next/link";
const tools = [
  { name: "Background Remover", href: "#", desc: "Remove BG in 1 click" },
  { name: "Image Upscaler", href: "#", desc: "Upscale to 4K" },
  { name: "Paraphraser", href: "#", desc: "Rewrite text" },
  { name: "Hashtag Generator", href: "#", desc: "Viral hashtags" },
  { name: "Passport Photo Maker", href: "#", desc: "Make passport photo" },
  { name: "Urdu Text to Speech", href: "#", desc: "Urdu voice" },
];

function SimplePage({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b"><div className="max-w-5xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl text-blue-600">QuickAITools</Link><Link href="/" className="text-sm">Home</Link></div></header>
      <main className="max-w-5xl mx-auto px-6 py-16"><h1 className="text-3xl font-bold">{title}</h1><p className="mt-6 text-gray-600">{text}</p></main>
    </div>
  );
}

export default function Page(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b"><div className="max-w-6xl mx-auto px-6 py-4 font-bold text-xl text-blue-600">QuickAITools</div></header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center">Free AI Tools Pack - 6 Tools in One Place</h1>
        <p className="text-center text-gray-600 mt-3">No Login - No Watermark - Free Forever</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {tools.map(t=>(
            <div key={t.name} className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{t.desc}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full">Use Tool</button>
            </div>
          ))}
        </div>
        <footer className="mt-16 border-t pt-8 flex flex-wrap gap-4 text-sm text-gray-500 justify-center">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/blog">Blog</Link>
        </footer>
      </main>
    </div>
  )
}
