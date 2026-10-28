# ⚡ QuickAITools

**Free AI Tools Website** — Background Remover, Image Upscaler, AI Paraphraser, Age Calculator, Hashtag Generator, Urdu TTS.

## 📁 File Structure

```
quickaitools/
├── index.html                    ← Homepage
├── about.html                    ← About page
├── contact.html                  ← Contact page
├── privacy-policy.html           ← Privacy Policy (required for AdSense)
├── terms.html                    ← Terms of Service
├── disclaimer.html               ← Disclaimer
├── sitemap.xml                   ← SEO sitemap
├── robots.txt                    ← SEO robots
├── vercel.json                   ← Vercel config
├── assets/
│   ├── css/style.css             ← Main stylesheet
│   └── js/
│       ├── main.js               ← Shared JS (toast, FAQ, nav)
│       └── layout.js             ← Navbar + Footer injection
├── tools/
│   ├── background-remover.html
│   ├── image-upscaler.html
│   ├── paraphraser.html
│   ├── age-calculator.html
│   ├── hashtag-generator.html
│   └── text-to-speech.html
└── blog/
    ├── index.html                ← Blog listing
    ├── how-to-remove-image-background.html
    ├── best-ai-paraphrasing-tips.html
    ├── hashtag-strategy-instagram.html
    ├── upscale-images-free.html
    ├── urdu-text-to-speech-guide.html
    └── age-calculator-facts.html
```

## 🚀 How to Upload to GitHub + Vercel

1. Go to github.com → New Repository → name: `quickaitools`
2. Upload all these files (drag & drop or use GitHub Desktop)
3. Go to vercel.com → Import Project → Select your GitHub repo
4. Click Deploy — done!

## 💰 AdSense Setup

1. Go to google.com/adsense → Apply
2. Enter your website URL: `https://quickaitools.vercel.app`
3. Google will give you a code like:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
4. In EVERY HTML file, find this comment:
   ```html
   <!-- AdSense placeholder – replace with your code -->
   ```
   Replace it with your actual AdSense code.
5. Add ad units inside pages where you want ads to appear.

## ⚠️ Important Before AdSense Apply

- Make sure Privacy Policy, Terms, Disclaimer, About, Contact pages are all live
- Website should have real content (blog articles are already included)
- Wait 2-4 weeks after going live before applying
- Submit sitemap to Google Search Console first

## 🔧 Customization

- **Email:** Replace `support@quickaitools.com` in contact.html, privacy-policy.html, terms.html, disclaimer.html
- **Domain:** If you get a custom domain, update all `canonical` URLs in every HTML file
- **Analytics:** Add Google Analytics tag in every page's `<head>` section
