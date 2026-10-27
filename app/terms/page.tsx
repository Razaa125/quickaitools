import Link from "next/link";
export default function Page(){
  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="bg-white border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl">QuickAITools</Link><Link href="/" className="text-sm bg-black text-white px-3 py-1.5 rounded-full">Back to Home</Link></div></header>
      <main className="max-w-4xl mx-auto px-6 py-16"><div className="bg-white border rounded-[24px] p-8 md:p-12 shadow-sm"><h1 className="text-3xl font-black tracking-tight">Terms & Conditions</h1><div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div><div className="mt-8 text-[15px] leading-7 text-gray-600"><p>By accessing QuickAITools, you agree to these Terms.</p><p class='mt-4'><b>1. Free Use:</b> Tools are provided as-is for personal and commercial use, without warranty.</p><p class='mt-4'><b>2. Lawful Use:</b> Do not use tools for illegal, harmful, or copyrighted content you don't own.</p><p class='mt-4'><b>3. No Guarantee:</b> AI results may not be 100% accurate. Verify important outputs.</p><p class='mt-4'>We may update terms anytime. Continued use means acceptance.</p></div></div></main>
    </div>
  );
}
