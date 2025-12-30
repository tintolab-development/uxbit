# GitHub Issue 템플릿 및 워크플로우 마이그레이션 완료

**완료일:** 2025년 12월 30일 (KST)

## 개선 사항

### 1. Issue 템플릿 업데이트

**파일**: `.github/ISSUE_TEMPLATE/component_doc.yml`

**변경 내용:**

- ✅ 품질 평가 결과 필드 추가
- ✅ MCP 서버 평가 도구 사용 안내 추가
- ✅ Acceptance Criteria에 품질 평가 완료 조건 추가

**주요 추가 항목:**

- `quality_score`: MCP 서버의 `evaluate_component_quality` 도구로 평가한 결과 입력 필드

### 2. 워크플로우 업데이트

**파일**: `.github/workflows/sync-component-docs.yml`

**변경 내용:**

- ✅ 컴포넌트 빌드 단계 추가 (custom-elements.json 생성)
- ✅ 품질 평가 섹션 자동 추출 및 포함
- ✅ 스크립트를 별도 파일로 분리 (YAML 파싱 오류 해결)
- ✅ 컴포넌트 코드 변경 시에도 트리거되도록 경로 추가

**주요 기능:**

- 문서 파일에서 `## 품질 평가` 섹션 자동 추출
- 품질 평가 결과를 Issue 본문에 자동 포함
- MCP 서버 평가 도구 안내 링크 추가

### 3. 스크립트 추가

**파일**: `.github/scripts/sync-component-issues.sh`

**기능:**

- 컴포넌트 문서를 읽어서 Issue 생성/업데이트
- 품질 평가 섹션 자동 추출 및 포함
- 라벨 및 담당자 자동 할당

**파일**: `apps/mcp-server/scripts/generate-component-issue.mjs`

**기능:**

- 컴포넌트 문서에서 Issue 본문 생성
- 품질 평가 섹션 포함 여부 확인
- 로컬에서 Issue 본문 미리보기 가능

### 4. 문서 템플릿 추가

**파일**: `apps/mcp-server/docs/migration/COMPONENT_DOC_TEMPLATE.md`

**내용:**

- 컴포넌트 문서에 품질 평가 섹션을 추가하는 표준 형식
- 평가 결과 표시 방법
- 개선 제안 포함 방법

## 사용 방법

### 1. 컴포넌트 품질 평가

Cursor에서 MCP 서버를 통해 평가:

```
"tinto-button 컴포넌트의 품질을 평가해줘"
```

### 2. 평가 결과를 문서에 추가

`apps/stencil-components/docs/components/tinto-button.md` 파일에 다음 섹션 추가:

```markdown
## 품질 평가

### 평가 결과

**평가일**: 2025-12-30  
**종합 점수**: 88.5점 (A 등급)

[평가 상세 내용...]
```

### 3. 자동 Issue 생성

문서를 커밋하면 워크플로우가 자동으로:

- 문서를 읽어서 Issue 생성/업데이트
- 품질 평가 섹션을 자동으로 포함
- 라벨 및 담당자 자동 할당

## 워크플로우 트리거 조건

다음 파일이 변경되면 자동 실행:

- `apps/stencil-components/docs/components/*.md`
- `apps/stencil-components/src/components/**/*.tsx`

## Issue 형식

생성되는 Issue는 다음 형식을 따릅니다:

```
[Docs] tinto-button: Guide

[컴포넌트 문서 내용]

---

## 📊 품질 평가 결과 (MCP 서버)

[품질 평가 섹션 내용]

> 💡 참고: MCP 서버의 `evaluate_component_quality` 도구로 평가한 결과입니다.
```

## 관련 문서

- [컴포넌트 문서 템플릿](./COMPONENT_DOC_TEMPLATE.md)
- [품질 평가 도구 가이드](../metrics/QUALITY_EVALUATION_TOOL.md)
- [컴포넌트 품질 평가 방법론](../metrics/COMPONENT_QUALITY_METRICS.md)
