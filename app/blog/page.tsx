import Link from "next/link";
export default function Page(){
  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="bg-white border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl">QuickAITools</Link><Link href="/" className="text-sm bg-black text-white px-3 py-1.5 rounded-full">Back to Home</Link></div></header>
      <main className="max-w-4xl mx-auto px-6 py-16"><div className="bg-white border rounded-[24px] p-8 md:p-12 shadow-sm"><h1 className="text-3xl font-black tracking-tight">Blog - AI Tips & Guides</h1><div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div><div className="mt-8 text-[15px] leading-7 text-gray-600"><div class='space-y-6'><div class='border-b pb-4'><h3 class='font-bold'>How to Remove Background from Image in 2 Seconds (Free)</h3><p class='text-sm text-gray-500 mt-1'>Learn the fastest way to cut out background for your Daraz, Shopify products...</p></div><div class='border-b pb-4'><h3 class='font-bold'>Upscale Image to 4K Without Losing Quality</h3><p class='text-sm text-gray-500 mt-1'>Best free method for students and photographers...</p></div><div class='border-b pb-4'><h3 class='font-bold'>Best Hashtags for Instagram Reels in Pakistan 2026</h3><p class='text-sm text-gray-500 mt-1'>Viral hashtag strategy that actually works.</p></div><p class='text-sm text-gray-400 mt-6'>More articles coming soon!</p></div></div></div></main>
    </div>
  );
}
