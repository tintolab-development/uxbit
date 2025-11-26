#!/usr/bin/env node

/**
 * Copies Storybook's index.html to 404.html (and 200.html) so GitHub Pages
 * serves the manager shell for deep-links like /story/xyz.
 */
const fs = require('fs/promises');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'storybook-static');
const SOURCE_FILE = path.join(OUTPUT_DIR, 'index.html');
const NO_JEKYLL_FILE = path.join(OUTPUT_DIR, '.nojekyll');
const FALLBACK_FILES = ['404.html', '200.html'].map((name) => path.join(OUTPUT_DIR, name));
const STENCIL_ESM_DIR = path.resolve(__dirname, '..', 'dist', 'esm');
const STORYBOOK_ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

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
        }),
    );
}

async function copyStencilBundles() {
    try {
        await fs.access(STENCIL_ESM_DIR);
    } catch {
        throw new Error(`Cannot find ${STENCIL_ESM_DIR}. Run "pnpm build" before Storybook build.`);
    }

    const files = await fs.readdir(STENCIL_ESM_DIR);
    const jsFiles = files.filter((file) => file.endsWith('.js'));

    await fs.mkdir(STORYBOOK_ASSETS_DIR, {
        recursive: true,
    });

    await Promise.all(
        jsFiles.map(async (file) => {
            const src = path.join(STENCIL_ESM_DIR, file);
            const dest = path.join(STORYBOOK_ASSETS_DIR, file);
            await fs.copyFile(src, dest);
            console.log(
                `Copied ${path.relative(process.cwd(), src)} -> ${path.relative(process.cwd(), dest)}`,
            );
        }),
    );
}

async function main() {
    await ensureFallbackFiles();
    await fs.writeFile(NO_JEKYLL_FILE, '');
    console.log(
        `Created ${path.relative(process.cwd(), NO_JEKYLL_FILE)} to disable Jekyll processing`,
    );
    await copyStencilBundles();
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});