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
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <div className="mt-6 text-gray-600 leading-7 text-base">
          <p>QuickAITools was built for students, creators and small businesses in Pakistan and worldwide who need fast, free AI tools without login or watermark.</p><p class='mt-4'>Our mission is to make AI simple. We offer 6 tools in one place: Background Remover, Image Upscaler, Paraphraser, Hashtag Generator, Passport Photo Maker and Urdu Text to Speech.</p><p class='mt-4'>Contact: support@quickaitools.vercel.app</p>
        </div>
      </main>
    </div>
  );
}
