
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
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-6 prose prose-gray max-w-none text-gray-600 leading-7">
          "<div><p className=\"text-lg\">Learn how to use our AI tools effectively.</p><ul className=\"mt-6 list-disc pl-6 space-y-2\"><li>How to Remove Background from Image in 2 Seconds - Free</li><li>How to Upscale Image to 4K Without Losing Quality</li><li>Best Hashtags for Instagram Reels 2026</li></ul><p className=\"mt-6\">More blogs coming soon!</p></div>"
        </div>
      </main>
    </div>
  );
}
