import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about QuickAITools — free AI tools built for students, creators, and professionals in Pakistan and worldwide.",
};

function NavHeader({ active }: { active: string }) {
  return (
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
              className={active===l ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
              {l}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader active="About" />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <span className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">About Us</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About QuickAITools</h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          We are passionate about making AI accessible to everyone — students, creators, freelancers,
          and professionals — especially in Pakistan.
        </p>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            { title: "Our Mission", body: "QuickAITools was created with one simple goal: give everyone access to powerful AI tools for free. We believe AI should not be locked behind expensive subscriptions. Our tools are 100% free, require no account, and work directly in your browser." },
            { title: "What We Offer", body: "We currently offer 6 AI-powered tools: a background remover, image upscaler, AI paraphraser, hashtag generator, passport photo maker, and a text-to-speech converter that supports both Urdu and English. More tools are coming soon." },
            { title: "Why We Built This", body: "As Pakistanis, we know how hard it can be to access premium tools that require international credit cards. QuickAITools solves that. Everything here is free, fast, and works on mobile." },
            { title: "Privacy First", body: "We respect your privacy. Files you upload are processed and immediately discarded. We do not store, sell, or share your data with anyone." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="text-blue-800 font-semibold">Questions or feedback?</p>
          <p className="text-blue-600 text-sm mt-1">
            We would love to hear from you.{" "}
            <Link href="/contact" className="underline font-medium">Contact us here →</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
