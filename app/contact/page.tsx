import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/" className="font-bold text-xl text-blue-600">QuickAITools</Link>
          <Link href="/" className="text-sm">Back to Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <div className="mt-6 text-gray-600 leading-7 text-base">
          <p>Have a question? We would love to hear from you.</p><p class='mt-4'>Email us at support@quickaitools.vercel.app</p><p class='mt-4'>We reply within 24 hours.</p>
        </div>
      </main>
    </div>
  );
}
