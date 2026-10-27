import Link from "next/link";
export default function Page(){
  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="bg-white border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl">QuickAITools</Link><Link href="/" className="text-sm bg-black text-white px-3 py-1.5 rounded-full">Back to Home</Link></div></header>
      <main className="max-w-4xl mx-auto px-6 py-16"><div className="bg-white border rounded-[24px] p-8 md:p-12 shadow-sm"><h1 className="text-3xl font-black tracking-tight">About QuickAITools</h1><div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div><div className="mt-8 text-[15px] leading-7 text-gray-600"><p>QuickAITools was founded in 2026 with a simple mission: make powerful AI tools free and accessible for everyone, especially students and small businesses in Pakistan.</p><p class='mt-4'>We saw that many AI tools ask for login, credit card, or add watermarks. We wanted to change that. Our 6 tools work directly in your browser - fast, private, and free forever.</p><p class='mt-4 font-semibold'>What we offer:</p><ul class='mt-2 list-disc pl-6'><li>Background Remover - AI precision cutout</li><li>Image Upscaler - 4K HD quality</li><li>Paraphraser - Rewrite text uniquely</li><li>Hashtag Generator - Viral reach</li><li>Passport Photo Maker - Official sizes</li><li>Urdu Text to Speech - Natural voice</li></ul><p class='mt-6'>Contact: support@quickaitools.vercel.app</p></div></div></main>
    </div>
  );
}
