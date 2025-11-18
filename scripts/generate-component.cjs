const fs = require('fs');
const path = require('path');

const rawName = process.argv[2];

if (!rawName) {
  console.error('❌ 사용법: pnpm generate:component <ComponentName>');
  process.exit(1);
}

// "Button" / "iconButton" / "tinto-button" → "button", "icon-button", "button"
const toKebab = (str) =>
  str
    .replace(/^tinto-/i, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const baseName = toKebab(rawName); // 폴더/파일 prefix
const rootDir = process.cwd();
const componentsDir = path.join(rootDir, 'src', 'components'); // <- src/components
const componentDir = path.join(componentsDir, baseName);

if (!fs.existsSync(componentsDir)) {
  console.error('❌ src/components 디렉터리가 없습니다. (루트에서 실행했는지 확인하세요)');
  process.exit(1);
}

if (fs.existsSync(componentDir)) {
  console.error(`❌ ${componentDir} 이미 존재합니다.`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const files = [
  path.join(componentDir, `${baseName}.css`),
  path.join(componentDir, `${baseName}.types.ts`),
  path.join(componentDir, `${baseName}.stories.tsx`),
  path.join(componentDir, `${baseName}.tsx`),
];

files.forEach((filePath) => {
  // 이미 있으면 건너뜀
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, '', 'utf8'); // ✨ 빈 파일만 생성
});

console.log('✅ Generated component scaffold:');
console.log(`  - ${path.relative(rootDir, files[0])}`);
console.log(`  - ${path.relative(rootDir, files[1])}`);
console.log(`  - ${path.relative(rootDir, files[2])}`);
console.log(`  - ${path.relative(rootDir, files[3])}`);
