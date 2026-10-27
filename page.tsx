import Link from "next/link";

const tools = [
  {
    slug: "background-remover",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    name: "Background Remover",
    description: "Remove any image background in one click. No Photoshop needed — get a clean transparent PNG instantly.",
    badge: null,
  },
  {
    slug: "image-upscaler",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    name: "Image Upscaler 4K",
    description: "Enlarge blurry or small photos to 4× their size without losing sharpness. Perfect for printing and posting.",
    badge: "Popular",
  },
  {
    slug: "paraphraser",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    name: "AI Paraphraser",
    description: "Rewrite essays, emails, or any text in seconds. Bypasses plagiarism detectors — trusted by 10,000+ students.",
    badge: null,
  },
  {
    slug: "hashtag-generator",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    name: "Hashtag Generator",
    description: "Generate the best Instagram and TikTok hashtags for your niche. Boost reach and grow followers faster.",
    badge: null,
  },
  {
    slug: "passport-photo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    name: "Passport Photo Maker",
    description: "Create standard-size passport photos at home. Correct background, right dimensions — ready to print.",
    badge: null,
  },
  {
    slug: "text-to-speech",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-3-3m3 3l3-3M9 9l-3 3 3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728" />
      </svg>
    ),
    name: "Text to Speech",
    description: "Convert any text to natural-sounding audio in Urdu and English. Download the MP3 free.",
    badge: "Urdu ✓",
  },
];

const stats = [
  { value: "6", label: "Free AI Tools" },
  { value: "100%", label: "No signup needed" },
  { value: "0$", label: "Always free" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">
              Quick<span className="text-blue-600">AI</span>Tools
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="text-blue-600 font-semibold">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu icon */}
          <button className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Open menu">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block mb-5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full tracking-wide">
              Free · No Login · No Watermark
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-5">
              Free AI Tools Pack —{" "}
              <span className="text-blue-600">6 Tools</span> in One Place
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
              Remove backgrounds, upscale images, paraphrase text, generate hashtags,
              make passport photos, and convert text to speech — all free, all AI-powered.
            </p>

            <a
              href="#tools"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-md shadow-blue-200"
            >
              Explore All Tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── TOOLS GRID ── */}
        <section id="tools" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Pick a Tool, Get to Work</h2>
              <p className="mt-3 text-gray-500 text-base max-w-lg mx-auto">
                Every tool runs in your browser. No account, no credit card, no catch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.slug}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200"
                >
                  {/* Badge */}
                  {tool.badge && (
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    {tool.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-base font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-grow">{tool.description}</p>

                  {/* CTA */}
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

        {/* ── WHY US STRIP ── */}
        <section className="bg-blue-600 py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {[
              { icon: "⚡", title: "Instant Results", body: "Tools run in seconds, powered by the latest AI models." },
              { icon: "🔒", title: "Private & Safe", body: "Your files are never stored on our servers." },
              { icon: "🌍", title: "Works Everywhere", body: "Available in Urdu and English. Built for Pakistan & beyond." },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-bold text-base">
                  Quick<span className="text-blue-500">AI</span>Tools
                </span>
              </Link>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Free AI-powered tools for everyone. No account required.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </nav>

          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} QuickAITools.com — All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
