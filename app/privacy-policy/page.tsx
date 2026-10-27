import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "QuickAITools Privacy Policy — how we handle your data when you use our free AI tools.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">Quick<span className="text-blue-600">AI</span>Tools</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-gray max-w-none">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            { h: "1. Information We Collect", p: "QuickAITools does not require users to create an account. We do not collect personally identifiable information unless you voluntarily provide it through our Contact form (name and email). When you use our image tools, uploaded images are processed in real-time and are not stored on our servers." },
            { h: "2. How We Use Your Information", p: "Contact form data is used solely to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes." },
            { h: "3. Cookies and Analytics", p: "We use Google Analytics to understand how visitors use our site. This data is aggregated and anonymous. We also use Google AdSense which may place cookies to show relevant ads. You can control cookie preferences through your browser settings." },
            { h: "4. Third-Party Services", p: "Our tools may use third-party AI APIs (such as Hugging Face and Google) to process requests. These services have their own privacy policies. We encourage you to review them." },
            { h: "5. Data Security", p: "We take reasonable precautions to protect your information. However, no internet transmission is 100% secure. Use our tools at your own discretion." },
            { h: "6. Children's Privacy", p: "QuickAITools is not directed at children under 13. We do not knowingly collect data from children." },
            { h: "7. Changes to This Policy", p: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date." },
            { h: "8. Contact Us", p: "If you have questions about this Privacy Policy, please contact us at contact@quickaitools.com." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
