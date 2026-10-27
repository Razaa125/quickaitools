import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Free AI Tools for Pakistani Students in 2025",
  description: "6 free AI tools every Pakistani student needs in 2025. No credit card, no login — save hours every week.",
};

export default function BlogPost2() {
  const tools = [
    { name: "AI Paraphraser", use: "Rewrite assignments and essays without plagiarism", href: "/tools/paraphraser" },
    { name: "Background Remover", use: "Clean up ID and profile photos in one click", href: "/tools/background-remover" },
    { name: "Hashtag Generator", use: "Grow your social media accounts for side income", href: "/tools/hashtag-generator" },
    { name: "Image Upscaler 4K", use: "Make blurry presentation images sharp and clear", href: "/tools/image-upscaler" },
    { name: "Passport Photo Maker", use: "Make CNIC and passport photos at home for free", href: "/tools/passport-photo" },
    { name: "Urdu Text to Speech", use: "Create audio content or study notes in Urdu", href: "/tools/text-to-speech" },
  ];
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">Quick<span className="text-blue-600">AI</span>Tools</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-8">← Back to Blog</Link>
        <span className="inline-block mb-4 px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">Students</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">Best Free AI Tools for Pakistani Students in 2025</h1>
        <p className="text-gray-400 text-sm mb-8">January 15, 2025 · 5 min read</p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg text-gray-600">AI tools can save Pakistani students hours every week — but most cost money or require a foreign credit card. Here are 6 tools that are 100% free and built for you.</p>
          <div className="grid gap-4 mt-6">
            {tools.map((t, i) => (
              <div key={t.name} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:border-blue-200 transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{i+1}</div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{t.use}</p>
                </div>
                <Link href={t.href} className="shrink-0 text-xs font-semibold text-blue-600 hover:text-blue-700 self-center">Try Free →</Link>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="font-bold text-blue-900 text-lg mb-2">All tools are free — try them now!</p>
            <Link href="/#tools" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Explore All 6 Tools →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
