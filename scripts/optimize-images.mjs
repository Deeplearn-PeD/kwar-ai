import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

const files = [
  'hero.png', 'hero_websummit.png', 'the problem.png',
  'enterprise precos.png', 'pesquisa.png', 'credibilidade.png',
  'problema.png', 'global.png', 'municipais.png',
  'foco.png', 'globo.png', 'joyce 1.png', 'flavio.png',
  'amanhecer.png', 'transicao.png', 'desafio pt.png', 'desafio en.png',
  'epidbot pt.png', 'epidbot en.png', 'epidbot es.png',
  'imagem para hero main.png', 'logo-oficial.png',
];

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${file} — not found`);
    continue;
  }
  const ext = path.extname(file);
  const name = path.basename(file, ext);
  const outputName = `${name}.webp`;
  const outputPath = path.join(imagesDir, outputName);

  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    const inSize = fs.statSync(inputPath).size;
    const outSize = fs.statSync(outputPath).size;
    const savings = ((1 - outSize / inSize) * 100).toFixed(1);
    console.log(`${file} → ${outputName}  (${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB, saved ${savings}%)`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}
