import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIR = path.resolve('softwareicons');
const OUTPUT_DIR = path.resolve('public/logos');

const nameMap = new Map([
  ['googlecloud.png', 'google-cloud-console.png'],
  ['oauth.png', 'google-oauth.png'],
  ['n88n.png', 'n8n.png'],
  ['yahoo finance.png', 'yahoo-finance.png'],
]);

const TARGET_WIDTH = 240; // uniform wordmark width
const TARGET_HEIGHT = 72; // consistent visual height

async function ensureDirs() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

function outName(file) {
  const base = path.basename(file);
  if (nameMap.has(base)) return nameMap.get(base);
  return base.toLowerCase().replace(/\s+/g, '-');
}

async function processFile(file) {
  const inputPath = path.join(INPUT_DIR, file);
  const outputFile = outName(file).replace(/\.(svg|png|webp|jpg|jpeg)$/i, '.png');
  const outputPath = path.join(OUTPUT_DIR, outputFile);

  // Normalize sizing and convert to PNG
  const resized = await sharp(inputPath)
    .resize({ width: TARGET_WIDTH, height: TARGET_HEIGHT, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  // Place onto transparent canvas for consistent box
  const canvas = sharp({
    create: {
      width: TARGET_WIDTH,
      height: TARGET_HEIGHT,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  const composited = await canvas
    .composite([{ input: resized, gravity: 'center' }])
    .toBuffer();

  // Convert non-transparent pixels to white via colorize approach
  const white = await sharp(composited)
    .ensureAlpha()
    .modulate({ brightness: 1, saturation: 0 }) // remove color
    .tint({ r: 255, g: 255, b: 255 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  await fs.writeFile(outputPath, white);
  console.log(`Processed: ${file} -> ${path.basename(outputPath)}`);
}

async function main() {
  await ensureDirs();
  const entries = await fs.readdir(INPUT_DIR);
  for (const file of entries) {
    if (!/\.(svg|png|webp|jpg|jpeg)$/i.test(file)) continue;
    try {
      await processFile(file);
    } catch (err) {
      console.warn(`Skipping '${file}' due to processing error:`, err?.message || err);
    }
  }
  console.log('All logos processed to public/logos');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


