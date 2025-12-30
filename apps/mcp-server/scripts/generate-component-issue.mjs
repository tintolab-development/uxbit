#!/usr/bin/env node
/**
 * 컴포넌트 문서에서 품질 평가 결과를 추출하여 GitHub Issue 본문을 생성하는 스크립트
 * 
 * 사용법:
 *   node scripts/generate-component-issue.mjs <component-name>
 * 
 * 예시:
 *   node scripts/generate-component-issue.mjs tinto-button
 */

import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = join(__dirname, '../../..');
const DOCS_DIR = join(PROJECT_ROOT, 'apps/stencil-components/docs/components');

async function generateIssueBody(componentName) {
  const docPath = join(DOCS_DIR, `${componentName}.md`);
  
  try {
    const content = await readFile(docPath, 'utf-8');
    
    // 품질 평가 섹션 추출
    const qualityMatch = content.match(/## 품질 평가[\s\S]*?(?=## |$)/);
    const qualitySection = qualityMatch ? qualityMatch[0] : '';
    
    // Issue 본문 생성
    let issueBody = content;
    
    if (qualitySection) {
      issueBody += `\n\n---\n\n## 📊 품질 평가 결과 (MCP 서버)\n\n${qualitySection}\n\n> 💡 **참고**: MCP 서버의 \`evaluate_component_quality\` 도구로 평가한 결과입니다.\n> 자세한 내용은 [품질 평가 도구 가이드](../../apps/mcp-server/docs/metrics/QUALITY_EVALUATION_TOOL.md)를 참고하세요.`;
    } else {
      issueBody += `\n\n---\n\n## 📊 품질 평가 결과\n\n> ⚠️ **평가 필요**: MCP 서버의 \`evaluate_component_quality\` 도구로 평가를 실행해주세요.\n> \n> 사용법:\n> \`\`\`\n> "${componentName} 컴포넌트의 품질을 평가해줘"\n> \`\`\`\n> \n> 자세한 내용은 [품질 평가 도구 가이드](../../apps/mcp-server/docs/metrics/QUALITY_EVALUATION_TOOL.md)를 참고하세요.`;
    }
    
    return issueBody;
  } catch (error) {
    console.error(`Error reading ${docPath}:`, error.message);
    process.exit(1);
  }
}

// CLI 실행
const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: node generate-component-issue.mjs <component-name>');
  process.exit(1);
}

generateIssueBody(componentName)
  .then(body => {
    console.log(body);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });

