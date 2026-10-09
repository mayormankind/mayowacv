// One-off generator for public/images/og-image.png (1200x630 social card)
const path = require("path");
const sharp = require(path.resolve(
  __dirname,
  "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp"
));

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#de1b1b" stop-opacity="0.28"/>
      <stop offset="60%" stop-color="#de1b1b" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#de1b1b"/>
      <stop offset="100%" stop-color="#de1b1b" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0d0d0d"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- accent bar, left edge -->
  <rect x="0" y="0" width="10" height="${HEIGHT}" fill="#de1b1b"/>

  <!-- eyebrow -->
  <text x="96" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="24"
        font-weight="700" letter-spacing="8" fill="#de1b1b">MAYOWAMAKINDE.DEV</text>

  <!-- name -->
  <text x="92" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="96"
        font-weight="800" fill="#ffffff">Mayowa Makinde</text>

  <!-- role -->
  <text x="96" y="380" font-family="Segoe UI, Arial, sans-serif" font-size="40"
        font-weight="600" fill="#b3b3b3">Full-Stack Product Engineer</text>

  <!-- divider -->
  <rect x="96" y="430" width="220" height="4" fill="url(#bar)"/>

  <!-- specialties -->
  <text x="96" y="500" font-family="Segoe UI, Arial, sans-serif" font-size="27"
        font-weight="400" fill="#808080">SaaS Platforms &#183; Dashboards &#183; Scalable Web Apps &#183; Next.js &amp; React</text>

  <!-- availability pill -->
  <rect x="96" y="540" width="320" height="44" rx="22" fill="none" stroke="#de1b1b" stroke-opacity="0.6" stroke-width="1.5"/>
  <circle cx="122" cy="562" r="6" fill="#de1b1b"/>
  <text x="142" y="571" font-family="Segoe UI, Arial, sans-serif" font-size="19"
        font-weight="600" letter-spacing="3" fill="#d9d9d9">AVAILABLE FOR WORK</text>
</svg>`;

const logo = path.resolve(__dirname, "../public/images/logo.png");
const out = path.resolve(__dirname, "../public/images/og-image.png");

(async () => {
  const logoBuf = await sharp(logo)
    .resize({ width: 200, height: 200, fit: "inside" })
    .png()
    .toBuffer();

  await sharp(Buffer.from(svg))
    .composite([{ input: logoBuf, top: 215, left: 930 }])
    .png()
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`wrote ${out} (${meta.width}x${meta.height})`);
})();
