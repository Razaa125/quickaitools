
import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl text-[#2563EB]">QuickAITools</Link>
          <Link href="/" className="text-sm">← Back to Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <div className="mt-6 prose prose-gray max-w-none text-gray-600 leading-7">
          "<p>Last Updated: Oct 2026. At QuickAITools, we respect your privacy. We do not store your images or text on our servers. All processing happens in your browser where possible.</p><p className=\"mt-4\">We use cookies for analytics (Google Analytics) and ads (Google AdSense) to improve experience. You can disable cookies in your browser.</p><p className=\"mt-4\">Third-party services like Vercel may collect anonymous usage data. Contact us if you have any concerns.</p>"
        </div>
      </main>
    </div>
  );
}
