
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
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <div className="mt-6 prose prose-gray max-w-none text-gray-600 leading-7">
          "<p>By using QuickAITools, you agree to use our free tools for lawful purposes only. Tools are provided as-is without warranty.</p><p className=\"mt-4\">Do not use our tools for illegal, harmful or copyrighted content that you do not own. You are responsible for content you generate.</p><p className=\"mt-4\">We reserve the right to update terms at any time.</p>"
        </div>
      </main>
    </div>
  );
}
