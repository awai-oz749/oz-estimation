import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

// Create a 1200x630 OG image
const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F2140;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D4A843;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8C566;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  
  <!-- Subtle grid pattern -->
  <g opacity="0.03">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 60}" y1="0" x2="${i * 60}" y2="${height}" stroke="white" stroke-width="1"/>`).join('')}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 60}" x2="${width}" y2="${i * 60}" stroke="white" stroke-width="1"/>`).join('')}
  </g>
  
  <!-- Top gold accent line -->
  <rect x="0" y="0" width="${width}" height="4" fill="url(#gold)" />
  
  <!-- Corner accent -->
  <rect x="60" y="60" width="80" height="3" fill="#D4A843" rx="1.5" />
  <rect x="60" y="60" width="3" height="50" fill="#D4A843" rx="1.5" />
  
  <!-- Company name -->
  <text x="60" y="160" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="6" fill="#D4A843">OZ ESTIMATION</text>
  
  <!-- Main title -->
  <text x="60" y="260" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700" fill="white">Construction Cost</text>
  <text x="60" y="330" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700" fill="white">Estimation Services</text>
  
  <!-- Divider -->
  <rect x="60" y="360" width="120" height="3" fill="#D4A843" rx="1.5" />
  
  <!-- Subtitle -->
  <text x="60" y="410" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#94A3B8">Accurate Takeoffs &amp; Cost Breakdowns for All 50 States</text>
  
  <!-- Stats bar -->
  <g transform="translate(60, 470)">
    <text font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#D4A843">5,000+</text>
    <text y="26" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748B">Projects</text>
    
    <rect x="160" y="-5" width="1" height="55" fill="#1E3A5F" />
    
    <text x="200" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#D4A843">98%</text>
    <text x="200" y="26" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748B">Accuracy</text>
    
    <rect x="320" y="-5" width="1" height="55" fill="#1E3A5F" />
    
    <text x="360" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#D4A843">24-48h</text>
    <text x="360" y="26" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748B">Turnaround</text>
    
    <rect x="520" y="-5" width="1" height="55" fill="#1E3A5F" />
    
    <text x="560" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" fill="#D4A843">ASPE</text>
    <text x="560" y="26" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#64748B">Certified</text>
  </g>
  
  <!-- Bottom gold accent -->
  <rect x="0" y="${height - 4}" width="${width}" height="4" fill="url(#gold)" />
  
  <!-- Website URL -->
  <text x="${width - 60}" y="${height - 30}" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#64748B" text-anchor="end">ozestimations.com</text>
  
  <!-- Right decorative element -->
  <g opacity="0.06">
    <rect x="900" y="80" width="240" height="240" rx="12" fill="none" stroke="#D4A843" stroke-width="2" transform="rotate(12, 1020, 200)" />
    <rect x="930" y="110" width="180" height="180" rx="8" fill="none" stroke="#D4A843" stroke-width="1.5" transform="rotate(12, 1020, 200)" />
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath} (1200x630 PNG)`);
