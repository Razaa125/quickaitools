import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quickaitools.vercel.app";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/tools/background-remover`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/image-upscaler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/paraphraser`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/hashtag-generator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/passport-photo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/text-to-speech`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/how-to-remove-image-background-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/best-ai-tools-for-pakistani-students`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/how-to-make-passport-photo-at-home-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
