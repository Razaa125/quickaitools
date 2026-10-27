import Link from "next/link";
export default function Page(){
  return (<div className="min-h-screen bg-white"><header className="border-b"><div className="max-w-4xl mx-auto px-6 py-4 flex justify-between"><Link href="/" className="font-bold text-blue-600">QuickAITools</Link><Link href="/" className="text-sm">Back</Link></div></header><main className="max-w-4xl mx-auto px-6 py-16"><h1 className="text-3xl font-bold">Privacy Policy</h1><p className="mt-6 text-gray-600 leading-7">Last updated Oct 2026. We do not store your images or text. We use cookies for analytics.</p></main></div>);
}
