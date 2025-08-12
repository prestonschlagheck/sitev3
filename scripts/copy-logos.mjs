import fs from 'fs/promises';
import path from 'path';

const INPUT_DIR = path.resolve('softwareicons');
const OUTPUT_DIR = path.resolve('public/logos');

const renameMap = new Map([
  ['googlecloud.png', 'google-cloud-console.png'],
  ['oauth.png', 'google-oauth.png'],
  ['n88n.png', 'n8n.png'],
  ['yahoo finance.png', 'yahoo-finance.png'],
]);

function outName(file) {
  const base = path.basename(file);
  if (renameMap.has(base)) return renameMap.get(base);
  return base.toLowerCase().replace(/\s+/g, '-');
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const items = await fs.readdir(INPUT_DIR);
  for (const file of items) {
    if (!/\.(svg|png|webp|jpg|jpeg)$/i.test(file)) continue;
    const src = path.join(INPUT_DIR, file);
    const dest = path.join(OUTPUT_DIR, outName(file));
    await fs.copyFile(src, dest);
    console.log(`Copied ${file} -> ${path.basename(dest)}`);
  }
  console.log('Copied all provided icons into public/logos');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


