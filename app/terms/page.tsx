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
        <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
        <div className="mt-6 text-gray-600 leading-7 text-base">
          <p>By using QuickAITools, you agree to use our free tools for lawful purposes only. Tools are provided as-is without warranty.</p>
        </div>
      </main>
    </div>
  );
}
