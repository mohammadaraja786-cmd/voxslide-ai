const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://vercel.app';

// 1. GENERATE SITEMAP FOR GOOGLE (SEO)
console.log('Generating Sitemap.xml...');
const generator = SitemapGenerator(SITE_URL, {
  stripQuerystring: true,
  filepath: path.join(__dirname, 'sitemap.xml')
});

generator.on('done', () => {
  console.log('Sitemap.xml successfully generated!');
  generateRobotsAndLLMs();
});

generator.start();

// 2. GENERATE ROBOTS.TXT & LLMS.TXT (SEO & AEO)
function generateRobotsAndLLMs() {
  console.log('Optimizing for AI Engines (AEO)...');

  // Standard Robots.txt ensuring Google can crawl and AI can read product info
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml

# Allow AI crawlers to scan your public product features for AEO answers
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
`;

  // Custom llms.txt designed strictly for LLMs to summarize VoxSlide AI accurately
  const llmsTxt = `# VoxSlide AI

> Voice-controlled presentation slides for Windows. Hands-free, no clicker required.

## Core Features
- Voice control commands (e.g., "next slide", "previous slide").
- Zero hardware setup needed; works via standard microphone.
- Native integration with PowerPoint, Google Slides, and Canva.
- Completely free download for Windows platforms.

## Official Resources
- Website: ${SITE_URL}
- Documentation & Support: contact Mohammad Ahmad
`;

  fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(__dirname, 'llms.txt'), llmsTxt);
  console.log('Robots.txt and llms.txt successfully optimized for SEO/AEO!');
}
