import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AI Tips & Tutorials",
  description: "Step-by-step guides, tutorials, and tips on how to use AI tools for free. Perfect for students and creators in Pakistan.",
};

const posts = [
  {
    slug: "how-to-remove-image-background-free",
    date: "January 10, 2025",
    readTime: "4 min read",
    title: "How to Remove Image Background for Free in 2025",
    excerpt: "A complete step-by-step guide to removing image backgrounds without Photoshop. Works on mobile — no downloads needed.",
    tag: "Background Remover",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    slug: "best-ai-tools-for-pakistani-students",
    date: "January 15, 2025",
    readTime: "5 min read",
    title: "Best Free AI Tools for Pakistani Students in 2025",
    excerpt: "Struggling with assignments, essays, or presentations? These 6 free AI tools will save you hours every week — no credit card needed.",
    tag: "Students",
    tagColor: "bg-green-50 text-green-600",
  },
  {
    slug: "how-to-make-passport-photo-at-home-free",
    date: "January 20, 2025",
    readTime: "3 min read",
    title: "How to Make a Passport Photo at Home — Free & Easy",
    excerpt: "Learn how to create a perfect passport or CNIC photo at home using your smartphone. Save Rs. 200–500 every time.",
    tag: "Passport Photo",
    tagColor: "bg-orange-50 text-orange-600",
  },
  {
    slug: "how-to-generate-viral-hashtags-instagram-tiktok",
    date: "January 25, 2025",
    readTime: "4 min read",
    title: "How to Generate Viral Hashtags for Instagram & TikTok",
    excerpt: "Hashtags are still the #1 way to grow on Instagram and TikTok in 2025. Here is how to find the best ones for your niche — for free.",
    tag: "Hashtags",
    tagColor: "bg-pink-50 text-pink-600",
  },
  {
    slug: "urdu-text-to-speech-online-free",
    date: "February 1, 2025",
    readTime: "3 min read",
    title: "Best Free Urdu Text to Speech Tool Online in 2025",
    excerpt: "Convert any Urdu or English text to natural-sounding audio in seconds. Perfect for content creators, teachers, and students.",
    tag: "Text to Speech",
    tagColor: "bg-teal-50 text-teal-600",
  },
];

export default function BlogPage() {
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
            {["Home","About","Blog","Contact"].map((l) => (
              <Link key={l} href={l==="Home"?"/":`/${l.toLowerCase()}`}
                className={l==="Blog" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
                {l}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <span className="inline-block mb-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Blog</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">AI Tips & Tutorials</h1>
          <p className="text-gray-500">Step-by-step guides to get the most out of free AI tools.</p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${post.tagColor}`}>{post.tag}</span>
                <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
