import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const [, , input, output, toleranceArg] = process.argv;

if (!input || !output) {
  console.error("Usage: node scripts/remove-white-bg.mjs <input> <output> [tolerance]");
  process.exit(1);
}

const tolerance = Number(toleranceArg ?? 18);

const buf = await readFile(input);
const { data, info } = await sharp(buf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.from(data);
let cleared = 0;
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (r >= 255 - tolerance && g >= 255 - tolerance && b >= 255 - tolerance) {
    out[i + 3] = 0;
    cleared++;
  } else {
    const dist = Math.min(255 - r, 255 - g, 255 - b);
    if (dist < tolerance * 2) {
      const ratio = dist / (tolerance * 2);
      out[i + 3] = Math.round(255 * ratio);
    }
  }
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Wrote ${output} — ${cleared} pixels made fully transparent`);
