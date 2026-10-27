import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Remove Image Background for Free in 2025",
  description: "Step-by-step guide to removing image backgrounds without Photoshop. Works on mobile, completely free, no downloads needed.",
};

export default function BlogPost1() {
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
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-8">
          ← Back to Blog
        </Link>
        <span className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Background Remover</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          How to Remove Image Background for Free in 2025
        </h1>
        <p className="text-gray-400 text-sm mb-8">January 10, 2025 · 4 min read</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg text-gray-600">Removing an image background used to require Photoshop skills and hours of work. Today, AI can do it in under 3 seconds — completely free. Here is how.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Remove a Background?</h2>
          <p>Background removal is useful for product photos (for online selling), profile pictures, ID card photos, social media posts, presentations, and much more. Professional studios charge Rs. 500–1000 per image. With QuickAITools, it is completely free.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Step-by-Step Guide</h2>
          <div className="space-y-4">
            {[
              { n: "1", t: "Open the Background Remover Tool", b: "Go to QuickAITools and click on the Background Remover tool. No login required." },
              { n: "2", t: "Upload Your Image", b: "Click the upload button and select your image from your phone or computer. Supported formats: JPG, PNG, WEBP." },
              { n: "3", t: "Wait 2–3 Seconds", b: "The AI will automatically detect the subject and remove the background. You will see the result instantly." },
              { n: "4", t: "Download Your Image", b: "Click the Download button to save your transparent PNG image. Free, no watermark." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</div>
                <div>
                  <p className="font-semibold text-gray-900">{s.t}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.b}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Tips for Best Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Use images with good lighting and clear contrast between subject and background</li>
            <li>Higher resolution images give better results</li>
            <li>Works best on people, products, animals, and objects</li>
            <li>If the result is not perfect, try a slightly different cropped version of the image</li>
          </ul>

          <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="font-bold text-blue-900 text-lg mb-2">Ready to try it?</p>
            <Link href="/tools/background-remover"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Use Background Remover Free →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
