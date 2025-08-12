import fs from 'fs/promises';
import path from 'path';

const LOGOS_DIR = path.resolve('public/logos');

// Create minimal white SVG replacements for problematic logos
const WHITE_LOGOS = {
  'google-oauth.png': `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
  <text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="500">Google OAuth</text>
</svg>`,
  'yahoo-finance.png': `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
  <text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="500">Yahoo Finance</text>
</svg>`
};

async function main() {
  for (const [filename, svgContent] of Object.entries(WHITE_LOGOS)) {
    const outputPath = path.join(LOGOS_DIR, filename.replace('.png', '.svg'));
    await fs.writeFile(outputPath, svgContent.trim());
    console.log(`Created white version: ${path.basename(outputPath)}`);
  }
  console.log('Fixed problematic logos.');
}

main().catch(console.error);
