# tinto-app-route

> ⚠️ **Deprecated 및 제거됨**: 이 컴포넌트는 더 이상 사용할 수 없습니다.
>
> **컴포넌트가 삭제되었습니다.** 대신 **`tinto-layout`** 컴포넌트를 사용하세요.
>
> - ✅ 더 명확한 역할 분리
> - ✅ 최소한의 Props (60개 → 5개)
> - ✅ 완전한 responsive 지원
> - ✅ 더 나은 사용성과 유지보수성
>
> **마이그레이션 가이드**: [LAYOUT_MIGRATION.md](./LAYOUT_MIGRATION.md)

---

# tinto-app-route (삭제됨)

고급 레이아웃 컴포넌트. Flex 레이아웃, Safe area, Scroll snap, 세밀한 패딩/마진 제어를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 라우트 -->
<tinto-app-route>
  <h1>페이지 콘텐츠</h1>
</tinto-app-route>

<!-- Safe area 지원 (모바일) -->
<tinto-app-route safe-area padding="16px">
  <h1>안전 영역 고려</h1>
</tinto-app-route>

<!-- 전체 화면 높이 -->
<tinto-app-route height-mode="screen" direction="column" justify="center">
  <h1>중앙 정렬된 풀스크린</h1>
</tinto-app-route>
```

---

## Props

### Flex 레이아웃

| Prop            | Type            | Default        | 설명               |
| --------------- | --------------- | -------------- | ------------------ |
| `direction`     | `FlexDirection` | `'column'`     | Flex 방향          |
| `wrap`          | `FlexWrap`      | `'nowrap'`     | 줄바꿈             |
| `justify`       | `Justify`       | `'flex-start'` | 주축 정렬          |
| `align`         | `AlignItems`    | `'stretch'`    | 교차축 정렬        |
| `align-content` | `AlignContent`  | `'stretch'`    | 교차축 콘텐츠 정렬 |
| `gap`           | `string`        | -              | Flex gap           |
| `row-gap`       | `string`        | -              | 행 gap             |
| `column-gap`    | `string`        | -              | 열 gap             |

### 크기

| Prop          | Type         | Default  | 설명                                      |
| ------------- | ------------ | -------- | ----------------------------------------- |
| `width`       | `string`     | `'100%'` | 너비                                      |
| `max-width`   | `string`     | -        | 최대 너비                                 |
| `min-height`  | `string`     | -        | 최소 높이                                 |
| `height`      | `string`     | -        | 높이                                      |
| `center`      | `boolean`    | `false`  | 가운데 정렬                               |
| `height-mode` | `HeightMode` | `'auto'` | 높이 모드 (`'auto'`, `'dvh'`, `'screen'`) |

### 패딩 (세밀한 제어)

| Prop                   | Type     | Default | 설명                  |
| ---------------------- | -------- | ------- | --------------------- |
| `padding`              | `string` | -       | 전체 패딩             |
| `padding-inline`       | `string` | -       | 인라인 패딩 (좌우)    |
| `padding-block`        | `string` | -       | 블록 패딩 (상하)      |
| `padding-inline-start` | `string` | -       | 시작 인라인 패딩 (좌) |
| `padding-inline-end`   | `string` | -       | 끝 인라인 패딩 (우)   |
| `padding-block-start`  | `string` | -       | 시작 블록 패딩 (상)   |
| `padding-block-end`    | `string` | -       | 끝 블록 패딩 (하)     |

### 마진 (세밀한 제어)

| Prop                  | Type     | Default | 설명             |
| --------------------- | -------- | ------- | ---------------- |
| `margin`              | `string` | -       | 전체 마진        |
| `margin-inline`       | `string` | -       | 인라인 마진      |
| `margin-block`        | `string` | -       | 블록 마진        |
| `margin-inline-start` | `string` | -       | 시작 인라인 마진 |
| `margin-inline-end`   | `string` | -       | 끝 인라인 마진   |
| `margin-block-start`  | `string` | -       | 시작 블록 마진   |
| `margin-block-end`    | `string` | -       | 끝 블록 마진     |

### 시각

| Prop              | Type     | Default | 설명              |
| ----------------- | -------- | ------- | ----------------- |
| `background`      | `string` | -       | 배경색/그라디언트 |
| `color`           | `string` | -       | 텍스트 색상       |
| `radius`          | `string` | -       | border-radius     |
| `shadow`          | `string` | -       | box-shadow        |
| `border`          | `string` | -       | 테두리            |
| `backdrop-filter` | `string` | -       | backdrop-filter   |

### 타이포그래피

| Prop             | Type            | Default | 설명           |
| ---------------- | --------------- | ------- | -------------- |
| `font`           | `string`        | -       | font-family    |
| `font-size`      | `string`        | -       | font-size      |
| `font-weight`    | `string`        | -       | font-weight    |
| `line-height`    | `string`        | -       | line-height    |
| `letter-spacing` | `string`        | -       | letter-spacing |
| `text-transform` | `TextTransform` | -       | text-transform |
| `text-align`     | `TextAlign`     | -       | text-align     |

### 배경 이미지

| Prop            | Type           | Default       | 설명            |
| --------------- | -------------- | ------------- | --------------- |
| `src`           | `string`       | -             | 배경 이미지 URL |
| `bg-size`       | `BgSize`       | `'cover'`     | 배경 크기       |
| `bg-position`   | `string`       | `'50% 50%'`   | 배경 위치       |
| `bg-repeat`     | `BgRepeat`     | `'no-repeat'` | 배경 반복       |
| `bg-attachment` | `BgAttachment` | `'scroll'`    | 배경 고정       |
| `bg-blend`      | `BgBlend`      | `'normal'`    | 배경 블렌드     |

### 오버레이

| Prop              | Type     | Default | 설명                 |
| ----------------- | -------- | ------- | -------------------- |
| `overlay`         | `string` | -       | 오버레이 색상        |
| `overlay-opacity` | `number` | `1`     | 오버레이 불투명도    |
| `overlay-blend`   | `string` | -       | 오버레이 블렌드 모드 |

### 스크롤/Safe Area

| Prop                    | Type             | Default     | 설명                                                 |
| ----------------------- | ---------------- | ----------- | ---------------------------------------------------- |
| `safe-area`             | `boolean`        | `false`     | Safe area 지원 (모바일 노치 대응)                    |
| `overflow`              | `OverflowMode`   | -           | overflow (모든 방향)                                 |
| `overflow-x`            | `OverflowMode`   | `'visible'` | 가로 overflow                                        |
| `overflow-y`            | `OverflowMode`   | `'visible'` | 세로 overflow                                        |
| `scroll-behavior`       | `ScrollBehavior` | `'auto'`    | 스크롤 동작 (`'auto'`, `'smooth'`)                   |
| `scroll-padding`        | `string`         | -           | 스크롤 패딩                                          |
| `scroll-padding-inline` | `string`         | -           | 인라인 스크롤 패딩                                   |
| `scroll-padding-block`  | `string`         | -           | 블록 스크롤 패딩                                     |
| `scroll-snap-type`      | `ScrollSnapType` | -           | 스크롤 snap 타입                                     |
| `snap-align`            | `SnapAlign`      | -           | 스냅 정렬 (`'start'`, `'center'`, `'end'`, `'none'`) |

---

## 사용 예시

### 기본 레이아웃

```html
<!-- 세로 배치 -->
<tinto-app-route direction="column" gap="24px" padding="32px">
  <h1>제목</h1>
  <p>내용</p>
</tinto-app-route>
```

### Safe Area (모바일 노치 대응)

```html
<!-- Safe area 자동 적용 -->
<tinto-app-route safe-area padding="16px" padding-block-start="env(safe-area-inset-top)">
  <h1>노치 영역 고려</h1>
</tinto-app-route>
```

### 세밀한 패딩 제어

```html
<!-- 좌우만 패딩 -->
<tinto-app-route padding-inline="24px">
  <h1>좌우 패딩만</h1>
</tinto-app-route>

<!-- 상단만 패딩 -->
<tinto-app-route padding-block-start="48px">
  <h1>상단 패딩만</h1>
</tinto-app-route>

<!-- Safe area와 결합 -->
<tinto-app-route
  safe-area
  padding-inline-start="16px"
  padding-inline-end="16px"
  padding-block-start="env(safe-area-inset-top)"
  padding-block-end="env(safe-area-inset-bottom)"
>
  <h1>완벽한 Safe area 대응</h1>
</tinto-app-route>
```

### 높이 모드

```html
<!-- 자동 높이 -->
<tinto-app-route>
  <p>내용에 따라 높이 결정</p>
</tinto-app-route>

<!-- 동적 뷰포트 최소 높이 -->
<tinto-app-route height-mode="dvh" background="#f5f5f5">
  <h1>최소 화면 높이</h1>
</tinto-app-route>

<!-- 정확히 화면 높이 -->
<tinto-app-route height-mode="screen" direction="column" justify="center">
  <h1>정확히 화면 높이, 중앙 정렬</h1>
</tinto-app-route>
```

### Scroll Snap

```html
<!-- 세로 스크롤 snap -->
<tinto-app-route scroll-snap-type="y mandatory" height-mode="screen" overflow-y="scroll">
  <div snap-align="start">
    <h1>첫 번째 섹션</h1>
  </div>
  <div snap-align="start">
    <h1>두 번째 섹션</h1>
  </div>
  <div snap-align="start">
    <h1>세 번째 섹션</h1>
  </div>
</tinto-app-route>
```

### 배경 이미지 + 오버레이

```html
<tinto-app-route
  src="hero.jpg"
  overlay="rgba(0,0,0,0.5)"
  color="#fff"
  padding="48px"
  height-mode="screen"
  direction="column"
  justify="center"
>
  <h1>히어로 섹션</h1>
</tinto-app-route>
```

### Backdrop Filter

```html
<tinto-app-route
  background="rgba(255,255,255,0.8)"
  backdrop-filter="blur(10px)"
  padding="24px"
  radius="16px"
>
  <h2>블러 배경</h2>
</tinto-app-route>
```

---

## 접근성

- ✅ `role`, `aria-label`, `aria-labelledby`, `aria-describedby` 패스스루 지원
- ✅ 키보드 스크롤 지원

```html
<tinto-app-route role="main" aria-label="메인 콘텐츠" scroll-behavior="smooth">
  <h1>접근성 고려된 라우트</h1>
</tinto-app-route>
```

---

## CSS Parts

- `part="root"`: 라우트 루트 요소

```css
tinto-app-route::part(root) {
  border: 1px solid #ccc;
}
```

---

## CSS 변수

컴포넌트 내부에서 사용하는 CSS 변수는 매우 많습니다. 주요 변수:

### Flex

- `--ta-dir`, `--ta-wrap`, `--ta-justify`, `--ta-align`, `--ta-align-content`
- `--ta-gap`, `--ta-row-gap`, `--ta-column-gap`

### 크기

- `--ta-width`, `--ta-max-w`, `--ta-min-h`, `--ta-height`

### 패딩/마진

- `--ta-pad-*`, `--ta-mar-*` (inline/block/start/end 변형 포함)

### 시각

- `--ta-bg`, `--ta-color`, `--ta-radius`, `--ta-shadow`, `--ta-border`
- `--ta-backdrop-filter`

### 타이포그래피

- `--ta-font`, `--ta-font-size`, `--ta-font-weight`, `--ta-line-height`
- `--ta-letter-spacing`, `--ta-text-transform`, `--ta-text-align`

### 배경

- `--ta-bg-img`, `--ta-bg-size`, `--ta-bg-position`, `--ta-bg-repeat`
- `--ta-bg-attach`, `--ta-bg-blend`

### 오버레이

- `--ta-overlay`, `--ta-overlay-opacity`, `--ta-overlay-blend`

### 스크롤

- `--ta-scroll-behavior`, `--ta-scroll-padding-*`, `--ta-scroll-snap`, `--ta-snap-align`
- `--ta-overflow`, `--ta-overflow-x`, `--ta-overflow-y`

### Safe Area

- `--ta-safe-top`, `--ta-safe-bottom`, `--ta-safe-left`, `--ta-safe-right`
- `--ta-vh`: 뷰포트 높이 (구형 iOS 대비)

---

## 문제 해결

### Q: Safe area가 작동하지 않아요

A:

1. `safe-area` prop이 `true`인지 확인
2. 모바일 기기에서 테스트 (데스크탑에서는 보이지 않음)
3. `env(safe-area-inset-*)` CSS 변수 사용

### Q: Scroll snap이 작동하지 않아요

A:

1. `scroll-snap-type`이 설정되어 있는지 확인
2. 자식 요소에 `snap-align` 설정
3. `overflow-y` 또는 `overflow-x`가 `scroll` 또는 `auto`인지 확인

### Q: 패딩이 Safe area와 겹쳐요

A: `padding-block-start`에 Safe area를 더하세요:

```html
<tinto-app-route safe-area padding-block-start="calc(16px + env(safe-area-inset-top))">
</tinto-app-route>
```

---

## 고급 사용법

### 동적 레이아웃 변경

```javascript
const route = document.querySelector('tinto-app-route');
route.direction = 'row';
route.justify = 'space-between';
```

### 반응형 패딩

```html
<tinto-app-route style="--ta-pad: clamp(16px, 4vw, 48px);">
  <h1>반응형 패딩</h1>
</tinto-app-route>
```

---

## TL;DR

- ✅ Flex 레이아웃 완벽 지원
- ✅ Safe area 지원 (모바일 노치)
- ✅ Scroll snap 지원
- ✅ 세밀한 패딩/마진 제어
- ✅ 배경 이미지 + 오버레이
- ✅ 50개 이상의 Props로 완전한 제어

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 50.5점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 15.0     | 25%      | 3.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 33.0     | 15%      | 4.95      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **50.5** | **100%** | **50.5**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (15.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 14개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (33.0점)

- API 직관성: 0%
- Props 개수: 60개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 50.5점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 15.0     | 25%      | 3.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 33.0     | 15%      | 4.95      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **50.5** | **100%** | **50.5**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (15.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 14개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (33.0점)

- API 직관성: 0%
- Props 개수: 60개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 50.5점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 15.0     | 25%      | 3.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 33.0     | 15%      | 4.95      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **50.5** | **100%** | **50.5**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (15.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 14개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (33.0점)

- API 직관성: 0%
- Props 개수: 60개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 50.5점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 15.0     | 25%      | 3.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 33.0     | 15%      | 4.95      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **50.5** | **100%** | **50.5**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (15.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 14개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (33.0점)

- API 직관성: 0%
- Props 개수: 60개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 50.5점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 15.0     | 25%      | 3.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 33.0     | 15%      | 4.95      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **50.5** | **100%** | **50.5**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size, disabled, loading)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (15.0점)

- Props 네이밍 일치율: 0%
- 이벤트 네이밍 패턴: 50%
- 토큰 사용 일치율: 0%
- 공통 Props 사용: 0개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 14개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (33.0점)

- API 직관성: 0%
- Props 개수: 60개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

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
   "tinto-app-route 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
