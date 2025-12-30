# MCP 서버 문서

## 문서 구조

### 📚 guides/ - 가이드 문서

사용자와 개발자를 위한 가이드 문서

- [TESTING.md](./guides/TESTING.md) - 상세 테스트 가이드
- [CURSOR_TEST_GUIDE.md](./guides/CURSOR_TEST_GUIDE.md) - Cursor에서 테스트하는 방법
- [TEST_CHECKLIST.md](./guides/TEST_CHECKLIST.md) - 테스트 항목 체크리스트

### 📊 metrics/ - 평가 및 메트릭

컴포넌트 품질 평가 관련 문서

- [COMPONENT_QUALITY_METRICS.md](./metrics/COMPONENT_QUALITY_METRICS.md) - 품질 평가 방법론 및 지표

### 🔄 migration/ - 마이그레이션

컴포넌트 마이그레이션 관련 문서

- [MIGRATION_PLAN.md](./migration/MIGRATION_PLAN.md) - 기존 컴포넌트 마이그레이션 계획

### ⚡ optimization/ - 최적화

성능 및 프로덕션 최적화 관련 문서

- [PRODUCTION_OPTIMIZATION.md](./optimization/PRODUCTION_OPTIMIZATION.md) - 프로덕션 최적화 완료 보고서

### 📈 phases/ - 단계별 문서

개발 단계별 문서

- [PHASE3.md](./phases/PHASE3.md) - Phase 3 기능 상세 가이드
- [PHASE1_TEST_RESULTS.md](./phases/PHASE1_TEST_RESULTS.md) - Phase 1 테스트 결과
- [NEXT_STEPS.md](./phases/NEXT_STEPS.md) - 다음 단계 가이드

### 🎯 vision/ - 비전 및 계획

비전 및 향후 계획 문서

- [VISION.md](./vision/VISION.md) - UXBIT MCP 서버의 목적과 비전
- [FUTURE_ENHANCEMENTS.md](./vision/FUTURE_ENHANCEMENTS.md) - 향후 개선 가능한 사항들

## 문서 작성 규칙

### 새 문서 추가 시

1. **카테고리 결정**
   - 가이드 문서 → `guides/`
   - 평가/메트릭 → `metrics/`
   - 마이그레이션 → `migration/`
   - 최적화 → `optimization/`
   - 단계별 문서 → `phases/`
   - 비전/계획 → `vision/`

2. **파일명 규칙**
   - 대문자로 시작 (예: `TESTING.md`)
   - 언더스코어 대신 대문자 사용 (예: `PHASE1_TEST_RESULTS.md`)

3. **README.md 업데이트**
   - 메인 README.md의 문서 섹션에 링크 추가
   - 이 파일(docs/README.md)에도 링크 추가

---

**작성일:** 2025년 12월 30일 (KST)
