import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Background Remover — Free AI Tool",
  description: "Remove any image background in one click. Free, no login required. QuickAITools.",
};

export default function ToolPage() {
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
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="text-6xl mb-6">🖼️</div>
        <span className="inline-block mb-4 px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-200">
          🚧 Coming Soon
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Background Remover</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">Remove any image background in one click.</p>
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
          <p className="text-blue-800 font-semibold mb-1">This tool is launching very soon!</p>
          <p className="text-blue-600 text-sm">We are working hard to build this tool. Check back in a few days.</p>
        </div>
        <Link href="/"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
          ← Back to All Tools
        </Link>
      </main>
    </div>
  );
}
