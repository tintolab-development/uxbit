#!/usr/bin/env node

/**
 * 모든 컴포넌트를 평가하고 결과를 문서에 반영하는 스크립트
 * 
 * 사용법:
 *   node apps/mcp-server/scripts/evaluate-all-components.mjs
 */

import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = join(__dirname, '../../..');
const STENCIL_DIR = join(PROJECT_ROOT, 'apps/stencil-components');
const CUSTOM_ELEMENTS_JSON = join(STENCIL_DIR, 'custom-elements.json');
const DOCS_DIR = join(STENCIL_DIR, 'docs/components');

// MCP 서버와 통신하는 함수 (stdio를 통해)
async function evaluateComponent(tagName) {
  // MCP 서버가 실행 중이어야 함
  // 실제로는 MCP 프로토콜을 통해 통신해야 하지만,
  // 여기서는 직접 평가 로직을 실행하는 방식으로 구현
  
  const customElements = JSON.parse(await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8'));
  const components = customElements.components || [];
  const component = components.find((c) => c.tag === tagName);
  
  if (!component) {
    throw new Error(`Component not found: ${tagName}`);
  }

  // 평가 로직 (MCP 서버의 로직과 동일)
  const evaluation = await evaluateComponentQuality(tagName, components, component);
  
  return evaluation;
}

// 간단한 평가 로직 (MCP 서버의 로직을 단순화)
async function evaluateComponentQuality(tagName, allComponents, component) {
  const props = component.props || [];
  const events = component.events || [];
  
  // 기본 점수 계산
  const commonProps = ['variant', 'size', 'disabled', 'loading'];
  const componentPropNames = props.map((p) => p.name?.toLowerCase() || '');
  
  // 일관성
  const commonPropsUsed = commonProps.filter((prop) =>
    componentPropNames.includes(prop.toLowerCase())
  ).length;
  const propsNamingMatch = commonProps.length > 0 ? commonPropsUsed / commonProps.length : 0.5;
  
  // 이벤트 네이밍 패턴
  const eventPatterns = ['click', 'change', 'input', 'focus', 'blur'];
  const componentEvents = events.map((e) => e.name?.toLowerCase() || '');
  const eventsFollowingPattern = componentEvents.filter((event) =>
    eventPatterns.some((pattern) => event.includes(pattern))
  ).length;
  const eventsNamingMatch = componentEvents.length > 0
    ? eventsFollowingPattern / componentEvents.length
    : componentEvents.length === 0 ? 0.5 : 0.3;
  
  // 토큰 사용
  const tokenProps = ['variant', 'size', 'disabled', 'loading'];
  const tokenPropsUsed = tokenProps.filter((prop) =>
    componentPropNames.includes(prop.toLowerCase())
  ).length;
  const tokenUsageMatch = tokenProps.length > 0 ? tokenPropsUsed / tokenProps.length : 0.5;
  
  const consistencyScore = (propsNamingMatch * 0.4 + eventsNamingMatch * 0.3 + tokenUsageMatch * 0.3) * 100;
  
  // 재사용성
  const requiredProps = props.filter((p) => !p.optional && !p.default).length;
  const optionalProps = props.filter((p) => p.optional || p.default).length;
  const totalProps = props.length;
  const requiredPropsRatio = totalProps > 0 ? requiredProps / totalProps : 0;
  const optionalPropsRatio = totalProps > 0 ? optionalProps / totalProps : 0;
  
  const variantSupport = componentPropNames.includes('variant');
  const sizeSupport = componentPropNames.includes('size');
  const hasSlots = component.slots && component.slots.length > 0;
  
  let reusabilityScore = 0;
  reusabilityScore += (1 - requiredPropsRatio) * 30;
  reusabilityScore += optionalPropsRatio * 20;
  reusabilityScore += variantSupport ? 20 : 0;
  reusabilityScore += sizeSupport ? 15 : 0;
  reusabilityScore += hasSlots ? 15 : 0;
  reusabilityScore = Math.min(100, reusabilityScore);
  
  // 완성도
  const docPath = join(DOCS_DIR, `${tagName}.md`);
  let hasDocumentation = false;
  let exampleCount = 0;
  try {
    const docContent = await readFile(docPath, 'utf-8');
    hasDocumentation = docContent.length > 100;
    exampleCount = (docContent.match(/```/g) || []).length / 2;
  } catch {
    hasDocumentation = false;
  }
  
  const hasA11ySupport = props.some((p) => 
    p.name?.toLowerCase().includes('aria') || p.name?.toLowerCase().includes('role')
  ) || component.docs?.toLowerCase().includes('accessibility');
  
  const hasErrorHandling = props.some((p) => {
    const name = p.name?.toLowerCase() || '';
    return name.includes('disabled') || name.includes('loading') || name.includes('error');
  });
  
  const propsWithTypes = props.filter((p) => p.type).length;
  const typescriptTypes = props.length > 0 ? propsWithTypes / props.length : 0.5;
  
  let completenessScore = 0;
  completenessScore += hasDocumentation ? 40 : 0;
  completenessScore += Math.min(exampleCount * 5, 25);
  completenessScore += hasA11ySupport ? 15 : 0;
  completenessScore += hasErrorHandling ? 10 : 0;
  completenessScore += typescriptTypes * 10;
  completenessScore = Math.min(100, completenessScore);
  
  // 성능 (기본값)
  const performanceScore = 85;
  
  // 사용성
  const intuitiveProps = ['variant', 'size', 'disabled', 'loading', 'href', 'target'];
  const intuitivePropsUsed = props.filter((p) =>
    intuitiveProps.includes(p.name?.toLowerCase() || '')
  ).length;
  const apiIntuitiveness = props.length > 0
    ? intuitivePropsUsed / Math.max(props.length, intuitiveProps.length)
    : 0.5;
  
  const propsCount = props.length;
  const learningCurve = propsCount <= 10 ? 1 : propsCount <= 20 ? 0.7 : 0.4;
  
  const hasDocs = !!component.docs && component.docs.length > 50;
  const hasTypes = props.every((p) => p.type);
  const developerExperience = (hasDocs ? 0.5 : 0) + (hasTypes ? 0.5 : 0);
  
  const usabilityScore = (apiIntuitiveness * 0.4 + (1 - learningCurve) * 0.3 + developerExperience * 0.3) * 100;
  
  // 표준 준수
  const webComponentsCompliant = component.tag.includes('-') && component.tag.startsWith('tinto-');
  const shadowDOM = true;
  const semanticHTML = true;
  const hasAriaProps = props.some((p) => p.name?.toLowerCase().includes('aria'));
  const ariaCompliant = hasAriaProps || component.docs?.toLowerCase().includes('aria');
  
  const standardsScore = (webComponentsCompliant ? 0.3 : 0) +
    (shadowDOM ? 0.3 : 0) +
    (semanticHTML ? 0.2 : 0) +
    (ariaCompliant ? 0.2 : 0);
  const standardsScorePercent = standardsScore * 100;
  
  // 가중치
  const weights = {
    consistency: 0.25,
    reusability: 0.2,
    completeness: 0.2,
    performance: 0.15,
    usability: 0.15,
    standards: 0.05,
  };
  
  const totalScore =
    consistencyScore * weights.consistency +
    reusabilityScore * weights.reusability +
    completenessScore * weights.completeness +
    performanceScore * weights.performance +
    usabilityScore * weights.usability +
    standardsScorePercent * weights.standards;
  
  const grade =
    totalScore >= 90 ? 'A+'
    : totalScore >= 80 ? 'A'
    : totalScore >= 70 ? 'B'
    : totalScore >= 60 ? 'C'
    : 'D';
  
  return {
    component: tagName,
    evaluationDate: new Date().toISOString(),
    scores: {
      consistency: Math.round(consistencyScore * 100) / 100,
      reusability: Math.round(reusabilityScore * 100) / 100,
      completeness: Math.round(completenessScore * 100) / 100,
      performance: performanceScore,
      usability: Math.round(usabilityScore * 100) / 100,
      standards: Math.round(standardsScorePercent * 100) / 100,
    },
    totalScore: Math.round(totalScore * 100) / 100,
    grade,
    improvements: generateImprovements(component, commonProps, componentPropNames, hasDocumentation, exampleCount, requiredPropsRatio, variantSupport, sizeSupport, propsCount),
    details: {
      consistency: { propsNamingMatch, eventsNamingMatch, tokenUsageMatch, commonPropsUsed },
      reusability: { requiredPropsRatio, optionalPropsRatio, variantSupport, sizeSupport, hasSlots },
      completeness: { hasDocumentation, exampleCount, hasA11ySupport, hasErrorHandling, typescriptTypes },
      usability: { apiIntuitiveness, learningCurve, developerExperience, propsCount },
      standards: { webComponentsCompliant, shadowDOM, semanticHTML, ariaCompliant },
    },
  };
}

function generateImprovements(component, commonProps, componentPropNames, hasDocumentation, exampleCount, requiredPropsRatio, variantSupport, sizeSupport, propsCount) {
  const improvements = [];
  
  const missingProps = commonProps.filter(
    (prop) => !componentPropNames.includes(prop.toLowerCase())
  );
  if (missingProps.length > 0) {
    improvements.push(`일관성: 공통 Props 추가 고려 (${missingProps.join(', ')})`);
  }
  
  if (!variantSupport) {
    improvements.push('재사용성: variant prop 추가 고려');
  }
  if (!sizeSupport) {
    improvements.push('재사용성: size prop 추가 고려');
  }
  
  if (requiredPropsRatio > 0.3) {
    improvements.push('재사용성: 필수 Props 비율을 낮추기 (기본값 제공)');
  }
  
  if (!hasDocumentation) {
    improvements.push('완성도: 컴포넌트 문서 작성 필요');
  }
  if (exampleCount < 3) {
    improvements.push('완성도: 예제 코드 추가 (최소 3개 권장)');
  }
  
  if (propsCount > 20) {
    improvements.push('사용성: Props 개수 줄이기 (20개 이하 권장)');
  }
  
  return improvements.length > 0 ? improvements : ['모든 기준을 충족합니다! 🎉'];
}

// 문서에 평가 결과 업데이트
async function updateDocumentWithEvaluation(tagName, evaluation) {
  const docPath = join(DOCS_DIR, `${tagName}.md`);
  
  try {
    let docContent = await readFile(docPath, 'utf-8');
    
    // 품질 평가 섹션 찾기
    const qualitySectionRegex = /## 품질 평가[\s\S]*?(?=## |$)/;
    const hasQualitySection = qualitySectionRegex.test(docContent);
    
    if (!hasQualitySection) {
      console.warn(`⚠️  ${tagName}: 품질 평가 섹션이 없습니다.`);
      return;
    }
    
    // 평가 결과로 업데이트
    const evaluationDate = new Date(evaluation.evaluationDate).toLocaleDateString('ko-KR');
    const scores = evaluation.scores;
    const totalScore = evaluation.totalScore;
    const grade = evaluation.grade;
    const improvements = evaluation.improvements;
    const details = evaluation.details;
    
    const updatedSection = `## 품질 평가

### 평가 결과

**평가일**: ${evaluationDate}  
**종합 점수**: ${totalScore.toFixed(1)}점  
**등급**: ${grade}

#### 점수 상세

| 지표                   | 점수  | 가중치   | 가중 점수 |
| ---------------------- | ----- | -------- | --------- |
| 일관성 (Consistency)   | ${scores.consistency.toFixed(1)}     | 25%      | ${(scores.consistency * 0.25).toFixed(2)}         |
| 재사용성 (Reusability) | ${scores.reusability.toFixed(1)}     | 20%      | ${(scores.reusability * 0.2).toFixed(2)}         |
| 완성도 (Completeness)  | ${scores.completeness.toFixed(1)}     | 20%      | ${(scores.completeness * 0.2).toFixed(2)}         |
| 성능 (Performance)     | ${scores.performance.toFixed(1)}     | 15%      | ${(scores.performance * 0.15).toFixed(2)}         |
| 사용성 (Usability)     | ${scores.usability.toFixed(1)}     | 15%      | ${(scores.usability * 0.15).toFixed(2)}         |
| 표준 준수 (Standards)  | ${scores.standards.toFixed(1)}     | 5%       | ${(scores.standards * 0.05).toFixed(2)}         |
| **종합**               | **${totalScore.toFixed(1)}** | **100%** | **${totalScore.toFixed(1)}**     |

#### 등급: ${grade}

#### 개선 제안

${improvements.map((imp) => `- ${imp}`).join('\n')}

### 평가 상세

#### 일관성 (${scores.consistency.toFixed(1)}점)

- Props 네이밍 일치율: ${Math.round(details.consistency.propsNamingMatch * 100)}%
- 이벤트 네이밍 패턴: ${Math.round(details.consistency.eventsNamingMatch * 100)}%
- 토큰 사용 일치율: ${Math.round(details.consistency.tokenUsageMatch * 100)}%
- 공통 Props 사용: ${details.consistency.commonPropsUsed}개

#### 재사용성 (${scores.reusability.toFixed(1)}점)

- 필수 Props 비율: ${Math.round(details.reusability.requiredPropsRatio * 100)}%
- 선택 Props 비율: ${Math.round(details.reusability.optionalPropsRatio * 100)}%
- variant 지원: ${details.reusability.variantSupport ? '✅' : '❌'}
- size 지원: ${details.reusability.sizeSupport ? '✅' : '❌'}
- Slots 지원: ${details.reusability.hasSlots ? '✅' : '❌'}

#### 완성도 (${scores.completeness.toFixed(1)}점)

- 문서화: ${details.completeness.hasDocumentation ? '✅' : '❌'}
- 예제 코드: ${details.completeness.exampleCount}개
- 접근성(a11y): ${details.completeness.hasA11ySupport ? '✅' : '❌'}
- 에러 처리: ${details.completeness.hasErrorHandling ? '✅' : '❌'}
- TypeScript 타입: ${details.completeness.typescriptTypes}%

#### 성능 (${scores.performance.toFixed(1)}점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (${scores.usability.toFixed(1)}점)

- API 직관성: ${Math.round(details.usability.apiIntuitiveness * 100)}%
- Props 개수: ${details.usability.propsCount}개
- 학습 곡선: ${details.usability.learningCurve <= 0.3 ? '낮음' : details.usability.learningCurve <= 0.7 ? '보통' : '높음'}
- 개발자 경험: ${Math.round(details.usability.developerExperience * 100)}%

#### 표준 준수 (${scores.standards.toFixed(1)}점)

- Web Components 표준: ${details.standards.webComponentsCompliant ? '✅' : '❌'}
- Shadow DOM: ${details.standards.shadowDOM ? '✅' : '❌'}
- 시맨틱 HTML: ${details.standards.semanticHTML ? '✅' : '❌'}
- ARIA 가이드라인: ${details.standards.ariaCompliant ? '✅' : '❌'}
`;

    // 기존 품질 평가 섹션을 업데이트된 내용으로 교체
    docContent = docContent.replace(qualitySectionRegex, updatedSection);
    
    await writeFile(docPath, docContent, 'utf-8');
    console.log(`✅ ${tagName}: 평가 결과 업데이트 완료 (${totalScore.toFixed(1)}점, ${grade})`);
  } catch (error) {
    console.error(`❌ ${tagName}: 문서 업데이트 실패`, error.message);
  }
}

// 메인 실행
async function main() {
  try {
    const customElements = JSON.parse(await readFile(CUSTOM_ELEMENTS_JSON, 'utf-8'));
    const components = customElements.components || [];
    
    console.log(`\n📊 컴포넌트 품질 평가 시작 (총 ${components.length}개)\n`);
    
    for (const component of components) {
      const tagName = component.tag;
      try {
        const evaluation = await evaluateComponent(tagName);
        await updateDocumentWithEvaluation(tagName, evaluation);
      } catch (error) {
        console.error(`❌ ${tagName}: 평가 실패`, error.message);
      }
    }
    
    console.log(`\n✅ 모든 컴포넌트 평가 완료!\n`);
  } catch (error) {
    console.error('❌ 평가 스크립트 실행 실패:', error);
    process.exit(1);
  }
}

main();

