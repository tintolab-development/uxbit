# tinto-section

Flex 레이아웃 기반 섹션 컴포넌트. 높이 모드, 중앙 정렬, 스크롤 가능한 섹션을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 섹션 -->
<tinto-section>
  <h2>섹션 제목</h2>
  <p>섹션 내용</p>
</tinto-section>

<!-- 중앙 정렬, 최대 너비 제한 -->
<tinto-section center max-width="1200px" padding="24px">
  <h2>중앙 정렬 섹션</h2>
</tinto-section>

<!-- 전체 화면 높이 -->
<tinto-section height-mode="screen" background="#f0f0f0">
  <h1>풀스크린 섹션</h1>
</tinto-section>
```

---

## Props

### Flex 레이아웃

| Prop        | Type            | Default        | 설명                                                                                                        |
| ----------- | --------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| `direction` | `FlexDirection` | `'column'`     | Flex 방향 (`'row'`, `'column'`, `'row-reverse'`, `'column-reverse'`)                                        |
| `wrap`      | `FlexWrap`      | `'nowrap'`     | 줄바꿈 (`'nowrap'`, `'wrap'`, `'wrap-reverse'`)                                                             |
| `justify`   | `Justify`       | `'flex-start'` | 주축 정렬 (`'flex-start'`, `'center'`, `'flex-end'`, `'space-between'`, `'space-around'`, `'space-evenly'`) |
| `align`     | `AlignItems`    | `'stretch'`    | 교차축 정렬 (`'stretch'`, `'flex-start'`, `'center'`, `'flex-end'`, `'baseline'`)                           |
| `gap`       | `string`        | -              | Flex gap (예: `"12px"`, `"1rem"`)                                                                           |

### 크기/여백

| Prop       | Type      | Default | 설명                                                 |
| ---------- | --------- | ------- | ---------------------------------------------------- |
| `maxWidth` | `string`  | -       | 최대 너비 (예: `"1200px"`, `"100%"`, `"80ch"`)       |
| `padding`  | `string`  | -       | 패딩 (예: `"16px"`, `"24px 12px"`)                   |
| `margin`   | `string`  | -       | 마진 (예: `"0 auto"`)                                |
| `center`   | `boolean` | `false` | 가운데 정렬 (maxWidth 사용 시 `margin-inline: auto`) |

### 시각

| Prop         | Type     | Default | 설명              |
| ------------ | -------- | ------- | ----------------- |
| `background` | `string` | -       | 배경색/그라디언트 |
| `color`      | `string` | -       | 텍스트 색상       |
| `radius`     | `string` | -       | border-radius     |
| `shadow`     | `string` | -       | box-shadow        |

### 높이 모드

| Prop         | Type         | Default  | 설명                                                                                       |
| ------------ | ------------ | -------- | ------------------------------------------------------------------------------------------ |
| `heightMode` | `HeightMode` | `'auto'` | 높이 모드 (`'auto'`: 내용 높이, `'dvh'`: 동적 뷰포트 최소 높이, `'screen'`: 정확히 100dvh) |
| `scrollable` | `boolean`    | `false`  | 내부 스크롤 허용 (heightMode가 `dvh`/`screen`일 때)                                        |

---

## 사용 예시

### 기본 레이아웃

```html
<!-- 세로 배치 (기본) -->
<tinto-section direction="column" gap="16px">
  <h2>제목</h2>
  <p>내용</p>
</tinto-section>

<!-- 가로 배치 -->
<tinto-section direction="row" gap="24px" align="center">
  <img src="image1.jpg" alt="이미지1" />
  <img src="image2.jpg" alt="이미지2" />
</tinto-section>
```

### 중앙 정렬 컨테이너

```html
<tinto-section center max-width="1200px" padding="32px" background="#ffffff">
  <h2>중앙 정렬된 콘텐츠</h2>
  <p>최대 너비 1200px로 제한되고 중앙에 정렬됩니다.</p>
</tinto-section>
```

### 높이 모드

```html
<!-- 자동 높이 (기본) -->
<tinto-section>
  <p>내용에 따라 높이가 결정됩니다.</p>
</tinto-section>

<!-- 동적 뷰포트 최소 높이 -->
<tinto-section height-mode="dvh" background="#f5f5f5">
  <h1>최소한 화면 높이만큼</h1>
</tinto-section>

<!-- 정확히 화면 높이 -->
<tinto-section height-mode="screen" background="#000" color="#fff">
  <h1>정확히 화면 높이</h1>
</tinto-section>

<!-- 스크롤 가능한 전체 화면 -->
<tinto-section height-mode="screen" scrollable>
  <div style="height: 200vh;">
    <h1>긴 콘텐츠</h1>
    <p>스크롤 가능합니다.</p>
  </div>
</tinto-section>
```

### Flex 정렬

```html
<!-- 중앙 정렬 -->
<tinto-section justify="center" align="center" height-mode="screen">
  <h1>완벽한 중앙 정렬</h1>
</tinto-section>

<!-- 공간 분배 -->
<tinto-section direction="row" justify="space-between" align="center">
  <span>왼쪽</span>
  <span>중앙</span>
  <span>오른쪽</span>
</tinto-section>

<!-- 줄바꿈 -->
<tinto-section direction="row" wrap="wrap" gap="16px">
  <div style="width: 200px;">아이템 1</div>
  <div style="width: 200px;">아이템 2</div>
  <div style="width: 200px;">아이템 3</div>
</tinto-section>
```

### 시각 스타일

```html
<!-- 배경과 그림자 -->
<tinto-section
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  color="#fff"
  padding="48px"
  radius="16px"
  shadow="0 4px 6px rgba(0,0,0,0.1)"
>
  <h2>스타일링된 섹션</h2>
</tinto-section>
```

---

## 접근성

- ✅ `role`, `aria-label`, `aria-labelledby`, `aria-describedby` 패스스루 지원
- ✅ `scrollable` 활성화 시 키보드 스크롤 가능 (`tabIndex` 자동 설정)

```html
<tinto-section role="region" aria-label="주요 콘텐츠 섹션" height-mode="screen" scrollable>
  <h2>스크롤 가능한 섹션</h2>
</tinto-section>
```

---

## CSS Parts

- `part="root"`: 섹션 루트 요소

```css
tinto-section::part(root) {
  border: 1px solid #ccc;
}
```

---

## CSS 변수

컴포넌트 내부에서 사용하는 CSS 변수:

- `--t-max-w`: 최대 너비
- `--t-pad`: 패딩
- `--t-mar`: 마진
- `--t-bg`: 배경
- `--t-color`: 텍스트 색상
- `--t-radius`: border-radius
- `--t-shadow`: box-shadow
- `--t-dir`: flex-direction
- `--t-wrap`: flex-wrap
- `--t-justify`: justify-content
- `--t-align`: align-items
- `--t-gap`: gap
- `--t-vh`: 뷰포트 높이 (구형 iOS 대비)

---

## 문제 해결

### Q: 중앙 정렬이 안 돼요

A: `center` prop과 `maxWidth`를 함께 사용하세요:

```html
<tinto-section center max-width="1200px">
  <!-- 중앙 정렬됨 -->
</tinto-section>
```

### Q: 높이가 화면을 채우지 않아요

A: `heightMode`를 `"dvh"` 또는 `"screen"`으로 설정:

```html
<tinto-section height-mode="screen">
  <!-- 화면 높이만큼 -->
</tinto-section>
```

### Q: 모바일에서 레이아웃이 깨져요

A: `direction`을 `"column"`으로 설정하고 `wrap`을 활용:

```html
<tinto-section direction="column" wrap="wrap" gap="16px">
  <!-- 모바일 친화적 -->
</tinto-section>
```

---

## 고급 사용법

### 동적 레이아웃 변경

```javascript
const section = document.querySelector('tinto-section');
section.direction = 'row'; // 가로로 변경
section.justify = 'space-between'; // 공간 분배
```

### 반응형 패딩

```html
<!-- CSS 변수로 반응형 제어 -->
<tinto-section style="--t-pad: clamp(16px, 4vw, 48px);">
  <h2>반응형 패딩</h2>
</tinto-section>
```

---

## TL;DR

- ✅ Flex 레이아웃 완벽 지원
- ✅ 높이 모드 다양 (auto/dvh/screen)
- ✅ 중앙 정렬 및 스크롤 지원
- ✅ 접근성 속성 패스스루

---

## 품질 평가

> 💡 **참고**: MCP 서버의 `evaluate_component_quality` 도구를 사용하여 평가 결과를 생성하세요.  
> 평가 후 이 섹션을 실제 결과로 업데이트하세요.

### 평가 결과

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
   "tinto-section 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
