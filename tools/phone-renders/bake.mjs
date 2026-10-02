import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdirSync } from 'fs';
const OUT = new URL('../../public/img/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });
/* renders far above the output size (the screen comes out ~2900 px tall, above the 2120 px screenshots), then scales down with lanczos */
const RENDER = 4800;
const PHONES = [
  { name: 'day', src: 'screenshots/day@display.png', ry: -0.32, rx: 0.06, rz: 0.015, h: 1600 },
  { name: 'record', src: 'screenshots/record@display.png', ry: -0.55, rx: 0.06, rz: 0.02, h: 1320 },
  { name: 'money', src: 'screenshots/money@display.png', ry: 0.55, rx: 0.06, rz: -0.02, h: 1320 },
];
const b = await chromium.launch({ executablePath: '/usr/bin/brave', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
p.on('pageerror', e => console.log('pageerror', e.message));
await p.goto('http://127.0.0.1:4322/', { waitUntil: 'networkidle' });
await p.waitForFunction(() => window.ready, null, { timeout: 60000 });
for (const ph of PHONES) {
  const url = await p.evaluate((o) => window.renderPhone(o), { src: ph.src, split: ph.split, ry: ph.ry, rx: ph.rx, rz: ph.rz, height: RENDER });
  const png = Buffer.from(url.split(',')[1], 'base64');
  const trimmed = await sharp(png).trim({ threshold: 1 }).toBuffer();
  await sharp(trimmed).resize({ height: ph.h, kernel: 'lanczos3' }).webp({ quality: 92, alphaQuality: 90, smartSubsample: true, effort: 6 }).toFile(`${OUT}/phone-${ph.name}.webp`);
  const m = await sharp(`${OUT}/phone-${ph.name}.webp`).metadata();
  console.log(ph.name, m.width + 'x' + m.height);
}
await b.close();
