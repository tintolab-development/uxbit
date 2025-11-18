// =============================================
// File: runner.ts (example usage for Node)
// =============================================

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { generatePageJSON, defaultOptions } from '../html-parser/parser';

function main() {
  const PATH = {
    input: './html-parser/template/index.html',
    outputJSON: './html-parser/output/parsed-json/index.json',
    outputReport: './html-parser/output/parsed-json/report.json',
  } as const;

  const html = readFileSync(PATH.input, 'utf8');

  const { pageJSON, report } = generatePageJSON(html, {
    ...defaultOptions,
    templateName: 'tinto',
    selected: ['tinto', 'default'],
    parserMode: 'auto', // detects tinto-section
    headAssetsMode: 'outerHTML', // or 'srcOnly'
  });

  mkdirSync(dirname(resolve(PATH.outputJSON)), { recursive: true });
  writeFileSync(PATH.outputJSON, JSON.stringify(pageJSON, null, 2), 'utf8');
  writeFileSync(PATH.outputReport, JSON.stringify(report, null, 2), 'utf8');
  console.log('✅ index.json and report.json written');
}

// 단독 실행 시 바로 실행 (tsx/ts-node에서 안전)
main();
