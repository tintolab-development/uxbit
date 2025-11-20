#!/usr/bin/env node
/**
 * Copies Storybook's index.html to 404.html (and 200.html) so GitHub Pages
 * serves the manager shell for deep-links like /story/xyz.
 */
const fs = require('fs/promises');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'storybook-static');
const SOURCE_FILE = path.join(OUTPUT_DIR, 'index.html');
const FALLBACK_FILES = ['404.html', '200.html'].map((name) => path.join(OUTPUT_DIR, name));

async function ensureFallbackFiles() {
  try {
    await fs.access(SOURCE_FILE);
  } catch {
    throw new Error(`Cannot find ${SOURCE_FILE}. Run "pnpm storybook:build" first.`);
  }

  await Promise.all(
    FALLBACK_FILES.map(async (file) => {
      await fs.copyFile(SOURCE_FILE, file);
      console.log(`Created ${path.relative(process.cwd(), file)} from index.html`);
    })
  );
}

ensureFallbackFiles().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
