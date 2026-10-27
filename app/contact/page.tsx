import Link from "next/link";
export default function Page(){
  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="bg-white border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-xl">QuickAITools</Link><Link href="/" className="text-sm bg-black text-white px-3 py-1.5 rounded-full">Back to Home</Link></div></header>
      <main className="max-w-4xl mx-auto px-6 py-16"><div className="bg-white border rounded-[24px] p-8 md:p-12 shadow-sm"><h1 className="text-3xl font-black tracking-tight">Contact Us</h1><div className="mt-2 h-1 w-16 bg-blue-600 rounded-full"></div><div className="mt-8 text-[15px] leading-7 text-gray-600"><p>Have questions, feedback, or partnership ideas? We love to hear from you.</p><div class='mt-6 bg-gray-50 border rounded-xl p-4'><p class='text-sm'><b>Email:</b> support@quickaitools.vercel.app</p><p class='text-sm mt-1'><b>Response time:</b> Within 24 hours</p><p class='text-sm mt-1'><b>Location:</b> Karachi, Pakistan (Remote)</p></div><p class='mt-6'>You can also reach us via GitHub issues on our repository.</p></div></div></main>
    </div>
  );
}
