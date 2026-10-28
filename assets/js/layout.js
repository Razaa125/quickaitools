// ── Shared Layout Injection ──
// Injects navbar + footer + toast into every page

(function () {
  const NAV_HTML = `
<nav class="navbar">
  <a href="/index.html" class="nav-logo">
    <div class="logo-icon">⚡</div>
    <span class="logo-text">QuickAITools</span>
  </a>
  <ul class="nav-links">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/blog/index.html">Blog</a></li>
    <li><a href="/about.html">About</a></li>
    <li><a href="/contact.html" class="nav-cta">Contact</a></li>
  </ul>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu">
  <a href="/index.html">Home</a>
  <a href="/blog/index.html">Blog</a>
  <a href="/about.html">About</a>
  <a href="/contact.html">Contact</a>
  <a href="/tools/paraphraser.html">Paraphraser</a>
  <a href="/tools/hashtag-generator.html">Hashtag Generator</a>
  <a href="/tools/age-calculator.html">Age Calculator</a>
  <a href="/tools/text-to-speech.html">Text to Speech</a>
  <a href="/tools/background-remover.html">Background Remover</a>
  <a href="/tools/image-upscaler.html">Image Upscaler</a>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo-text">⚡ QuickAITools</div>
        <p>Free AI tools for everyone. No login, no watermark, no cost.</p>
      </div>
      <div class="footer-col">
        <h4>Tools</h4>
        <ul>
          <li><a href="/tools/background-remover.html">Background Remover</a></li>
          <li><a href="/tools/image-upscaler.html">Image Upscaler</a></li>
          <li><a href="/tools/paraphraser.html">AI Paraphraser</a></li>
          <li><a href="/tools/age-calculator.html">Age Calculator</a></li>
          <li><a href="/tools/hashtag-generator.html">Hashtag Generator</a></li>
          <li><a href="/tools/text-to-speech.html">Text to Speech</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/blog/index.html">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms of Service</a></li>
          <li><a href="/disclaimer.html">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 QuickAITools. All rights reserved.</p>
      <p>Made with ❤️ for creators &amp; professionals</p>
    </div>
  </div>
</footer>
<div id="toast"></div>`;

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
})();
