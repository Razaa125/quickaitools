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
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <div className="mt-6 text-gray-600 leading-7 text-base">
          <p>Learn how to use our AI tools effectively. More blogs coming soon!</p>
        </div>
      </main>
    </div>
  );
}
