import Link from "next/link";
export default function Page(){
  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="bg-white border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl">QuickAITools</Link><Link href="/" className="text-sm bg-black text-white px-3 py-1.5 rounded-full">Back to Home</Link></div></header>
      <main className="max-w-4xl mx-auto px-6 py-16"><div className="bg-white border rounded-[24px] p-8 md:p-12 shadow-sm"><h1 className="text-3xl font-black tracking-tight">Privacy Policy</h1><div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div><div className="mt-8 text-[15px] leading-7 text-gray-600"><p class='font-medium text-gray-900'>Last Updated: 27 Oct 2026</p><p class='mt-4'>At QuickAITools, your privacy is our top priority. We do NOT store your images, text, or personal data on our servers.</p><p class='mt-4'><b>1. Data Collection:</b> All image processing happens in your browser using AI models. We don't upload your files to any cloud.</p><p class='mt-4'><b>2. Cookies:</b> We use Google Analytics and Google AdSense cookies to understand traffic and show relevant ads. You can disable cookies anytime.</p><p class='mt-4'><b>3. Third Party:</b> Our site is hosted on Vercel. Vercel may collect anonymous logs.</p><p class='mt-4'>If you have concerns, email us at support@quickaitools.vercel.app</p></div></div></main>
    </div>
  );
}
