"use client";
import { useState } from "react";
import Link from "next/link";

/* ── Tool data ── */
const tools = [
  {
    slug: "background-remover",
    emoji: "🖼️",
    color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    badge: null,
    name: "Background Remover",
    desc: "Remove any image background in one click. Get a clean transparent PNG instantly — no Photoshop, no skills needed.",
  },
  {
    slug: "image-upscaler",
    emoji: "🔍",
    color: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    badge: "Popular",
    name: "Image Upscaler 4K",
    desc: "Enlarge blurry or low-res photos up to 4× without losing sharpness. Perfect for printing, posting, and presentations.",
  },
  {
    slug: "paraphraser",
    emoji: "✍️",
    color: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    badge: null,
    name: "AI Paraphraser",
    desc: "Rewrite essays, emails, or any text in seconds. Trusted by 10,000+ students to improve writing and beat plagiarism checkers.",
  },
  {
    slug: "hashtag-generator",
    emoji: "#️⃣",
    color: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    badge: null,
    name: "Hashtag Generator",
    desc: "Generate the best Instagram and TikTok hashtags for your niche. Boost reach, grow followers, and go viral faster.",
  },
  {
    slug: "passport-photo",
    emoji: "📷",
    color: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
    badge: null,
    name: "Passport Photo Maker",
    desc: "Create standard-size passport and CNIC photos at home. Correct white background, right dimensions — ready to print.",
  },
  {
    slug: "text-to-speech",
    emoji: "🔊",
    color: "bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    badge: "Urdu ✓",
    name: "Text to Speech",
    desc: "Convert any text to natural-sounding audio in Urdu and English. Download the MP3 free — great for content creators.",
  },
];

const stats = [
  { value: "6", label: "Free AI Tools" },
  { value: "100%", label: "No Signup Needed" },
  { value: "Free", label: "Always & Forever" },
  { value: "2", label: "Languages (EN + UR)" },
];

const features = [
  { icon: "⚡", title: "Instant Results", body: "All tools run in seconds, powered by the latest AI models." },
  { icon: "🔒", title: "Private & Safe", body: "Your files and text are never stored on our servers." },
  { icon: "🌍", title: "Works Everywhere", body: "Available in Urdu & English. Built for Pakistan and beyond." },
  { icon: "📱", title: "Mobile Friendly", body: "Works perfectly on phone, tablet, and desktop." },
];

/* ── Header ── */
function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Quick<span className="text-blue-600">AI</span>Tools</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-600 transition-colors">{l.label}</Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

/* ── Main page ── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 via-blue-50 to-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 mb-5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
              Free · No Login · No Watermark
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-5">
              Your Free AI Toolkit —<br />
              <span className="text-blue-600">6 Powerful Tools</span> in One Place
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Background remover, image upscaler, AI paraphraser, hashtag generator, passport photo maker,
              and Urdu text-to-speech — all free, all AI-powered, works on mobile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#tools"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-md shadow-blue-200 w-full sm:w-auto justify-center"
              >
                Explore All Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-colors border border-gray-200 w-full sm:w-auto justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl border border-gray-100 py-4 px-3 shadow-sm">
                  <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <div className="bg-gray-50 border-y border-gray-100 py-4 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs text-gray-500 font-medium">
            {["✅ Used by 10,000+ Students & Creators","✅ Works in Urdu & English","✅ No Credit Card Required","✅ Trusted in Pakistan, USA & UK"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <section id="tools" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Pick a Tool, Get Results in Seconds</h2>
              <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
                Every tool runs in your browser. No account, no credit card, no catch.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.slug}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-200"
                >
                  {tool.badge && (
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {tool.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl transition-all duration-200 ${tool.color}`}>
                    {tool.emoji}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{tool.desc}</p>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold text-sm py-2.5 rounded-xl border border-gray-200 hover:border-blue-600 transition-all duration-200"
                  >
                    Use Tool
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-blue-600 py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Why Choose QuickAITools?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
              {features.map((f) => (
                <div key={f.title} className="bg-blue-700 bg-opacity-40 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-base mb-1">{f.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-2xl mb-3 block">📖</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Learn How to Use These Tools</h2>
            <p className="text-gray-500 mb-6 text-base">Step-by-step guides, tips, and tutorials to get the most out of every AI tool.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Read Our Blog →
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-bold">Quick<span className="text-blue-500">AI</span>Tools</span>
              </Link>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                Free AI-powered tools for students, creators, and professionals. No account required.
              </p>
              <p className="text-xs text-gray-600 mt-3">Made with ❤️ in Pakistan 🇵🇰</p>
              {/* Social links */}
              <div className="flex gap-3 mt-4">
                {[
                  { label: "Facebook", href: "#", icon: "f" },
                  { label: "Instagram", href: "#", icon: "ig" },
                  { label: "YouTube", href: "#", icon: "yt" },
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                  { href: "/disclaimer", label: "Disclaimer" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Our Tools</h4>
              <ul className="space-y-2 text-sm">
                {tools.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/tools/${t.slug}`} className="hover:text-white transition-colors">{t.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} QuickAITools.com — All rights reserved. |{" "}
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy</Link>{" · "}
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
