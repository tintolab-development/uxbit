# tinto-loading

로딩 컴포넌트. 비동기 작업 진행 중임을 표시합니다. Spinner, Dots, Pulse 등 다양한 variant를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 로딩 -->
<tinto-loading />

<!-- 오버레이 모드 -->
<tinto-loading overlay text="로딩 중..." />

<!-- Dots variant -->
<tinto-loading variant="dots" />

<!-- Large 사이즈 -->
<tinto-loading size="lg" text="처리 중..." />
```

---

## Props

| Prop      | Type                             | Default     | 설명                               |
| --------- | -------------------------------- | ----------- | ---------------------------------- |
| `size`    | `'sm' \| 'md' \| 'lg'`           | `'md'`      | 로딩 크기                          |
| `variant` | `'spinner' \| 'dots' \| 'pulse'` | `'spinner'` | 로딩 variant                       |
| `overlay` | `boolean`                        | `false`     | 오버레이 모드 (전체 화면 오버레이) |
| `text`    | `string`                         | -           | 로딩 텍스트                        |

---

## Slots

| Slot      | 설명                                |
| --------- | ----------------------------------- |
| (default) | 로딩 텍스트 (또는 `text` prop 사용) |

---

## 사용 예시

### Variant

```html
<tinto-loading variant="spinner" />
<tinto-loading variant="dots" />
<tinto-loading variant="pulse" />
```

### Size

```html
<tinto-loading size="sm" />
<tinto-loading size="md" />
<tinto-loading size="lg" />
```

### 오버레이 모드

```html
<tinto-loading overlay text="로딩 중..." />
```

### 텍스트 포함

```html
<tinto-loading text="데이터를 불러오는 중..." /> <tinto-loading variant="dots" text="처리 중..." />
```

---

## A11y

- `role="status"` 자동 설정
- `aria-live="polite"` 자동 설정
- 스크린 리더 사용자에게 로딩 상태 알림

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 69.5점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 50.0     | 25%      | 12.50     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 90.0     | 20%      | 18.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 28.3     | 15%      | 4.25      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **69.5** | **100%** | **69.5**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled, loading)

### 평가 상세

#### 일관성 (50.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (90.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (28.3점)

- API 직관성: 33%
- Props 개수: 4개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: (평가 실행 후 업데이트)  
**종합 점수**: (평가 실행 후 업데이트)  
**등급**: (평가 실행 후 업데이트)

#### 점수 상세

| 지표                   | 점수  | 가중치   | 가중 점수 |
| ---------------------- | ----- | -------- | --------- |
| 일관성 (Consistency)   | -     | 25%      | -         |
| 재사용성 (Reusability) | -     | 20%      | -         |
| 완성도 (Completeness)  | -     | 20%      | -         |
| 성능 (Performance)     | -     | 15%      | -         |
| 사용성 (Usability)     | -     | 15%      | -         |
| 표준 준수 (Standards)  | -     | 5%       | -         |
| **종합**               | **-** | **100%** | **-**     |

#### 개선 제안

(평가 실행 후 업데이트)

### 평가 방법

1. Cursor에서 MCP 서버가 실행 중인지 확인
2. 다음 명령 실행:
   ```
   "tinto-loading 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
