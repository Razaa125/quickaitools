
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
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="mt-6 prose prose-gray max-w-none text-gray-600 leading-7">
          "<div><p>Have a question? We would love to hear from you.</p><form className=\"mt-6 space-y-4\"><input placeholder=\"Your Name\" className=\"w-full border rounded-lg p-3\"/><input placeholder=\"Your Email\" className=\"w-full border rounded-lg p-3\"/><textarea placeholder=\"Message\" rows={5} className=\"w-full border rounded-lg p-3\"></textarea><button type=\"button\" className=\"bg-[#2563EB] text-white px-6 py-3 rounded-lg\">Send Message</button></form><p className=\"mt-6\">Email: support@quickaitools.vercel.app</p></div>" 
        </div>
      </main>
    </div>
  );
}
