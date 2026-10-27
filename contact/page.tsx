import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with QuickAITools. We are happy to help with any questions about our free AI tools.",
};

export default function ContactPage() {
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
                className={l==="Contact" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
                {l}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <span className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Contact</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-500 mb-10">Have a question, suggestion, or found a bug? We would love to hear from you. Fill out the form below and we will get back to you within 24 hours.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
            <input type="text" placeholder="e.g. Ahmed Khan"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
            <input type="email" placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
            <input type="text" placeholder="What is this about?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
            <textarea rows={5} placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none" />
          </div>
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors">
            Send Message →
          </button>
        </form>

        <div className="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-100 text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-1">📧 Email Us Directly</p>
          <p>contact@quickaitools.com</p>
          <p className="mt-2 text-xs text-gray-400">We typically respond within 24 hours.</p>
        </div>
      </main>
    </div>
  );
}
