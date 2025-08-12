import fs from 'fs/promises';
import path from 'path';
import * as JimpNS from 'jimp';
const Jimp = JimpNS.default || JimpNS;

const INPUT_DIR = path.resolve('public/logos');
const OUTPUT_DIR = path.resolve('public/logos');

const TARGET_W = 240;
const TARGET_H = 72;

async function toWhite(image) {
  // Desaturate and force white for non-transparent pixels
  image.color([{ apply: 'desaturate', params: [100] }]);
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const alpha = this.bitmap.data[idx + 3];
    if (alpha > 0) {
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      // keep alpha
    }
  });
  return image;
}

async function normalize(file) {
  const filePath = path.join(INPUT_DIR, file);
  let img = await Jimp.read(filePath);
  img = await toWhite(img);
  img.contain(TARGET_W, TARGET_H, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
  await img.writeAsync(filePath.replace(/\.(svg)$/i, '.png'));
  if (/\.svg$/i.test(file)) {
    await fs.rm(filePath);
  }
  console.log('Normalized', file);
}

async function main() {
  const files = await fs.readdir(INPUT_DIR);
  for (const f of files) {
    if (!/\.(png|webp|jpg|jpeg|svg)$/i.test(f)) continue;
    await normalize(f).catch((e) => console.warn('Skip', f, e.message));
  }
  console.log('All normalized.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


