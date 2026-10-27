import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Make a Passport Photo at Home — Free & Easy",
  description: "Create a perfect passport or CNIC photo at home using your smartphone. Save money and time with our free AI tool.",
};

export default function BlogPost3() {
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
        <span className="inline-block mb-4 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full">Passport Photo</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">How to Make a Passport Photo at Home — Free & Easy</h1>
        <p className="text-gray-400 text-sm mb-8">January 20, 2025 · 3 min read</p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg text-gray-600">Photo studios in Pakistan charge Rs. 200–500 per passport photo. With our free AI tool, you can make one from your phone in under a minute.</p>
          <h2 className="text-2xl font-bold text-gray-900">Pakistan Passport Photo Requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Size: 35mm × 45mm (standard international)</li>
            <li>Background: White or light grey</li>
            <li>Face must be clearly visible and centred</li>
            <li>No glasses, no head covering (except for religious reasons)</li>
            <li>Neutral facial expression</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">Steps to Make Your Photo</h2>
          <div className="space-y-3">
            {[
              "Take a selfie or ask someone to take your photo against a plain white wall",
              "Upload the photo to our Passport Photo Maker tool",
              "The AI will automatically crop, resize, and fix the background",
              "Download and print at any photo shop (2×2 or 35×45mm)",
            ].map((s, i) => (
              <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0">{i+1}</div>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
            ⚠️ <strong>Note:</strong> Always verify official requirements before submitting photos for passports or CNICs. Requirements may change.
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="font-bold text-blue-900 text-lg mb-2">Try it now — completely free</p>
            <Link href="/tools/passport-photo" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Make Passport Photo Free →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
