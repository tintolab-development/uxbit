# tinto-wrapper

Flex 레이아웃 래퍼 컴포넌트. 배경 이미지, 오버레이, 데스크탑 오버라이드를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 래퍼 -->
<tinto-wrapper>
  <div>콘텐츠</div>
</tinto-wrapper>

<!-- 배경 이미지와 오버레이 -->
<tinto-wrapper src="background.jpg" overlay="rgba(0,0,0,0.5)" padding="48px">
  <h2>오버레이가 있는 래퍼</h2>
</tinto-wrapper>

<!-- 데스크탑 오버라이드 -->
<tinto-wrapper direction="column" direction-desktop="row" gap="24px">
  <div>모바일: 세로, 데스크탑: 가로</div>
</tinto-wrapper>
```

---

## Props

### Flex 레이아웃 (모바일)

| Prop        | Type            | Default        | 설명        |
| ----------- | --------------- | -------------- | ----------- |
| `direction` | `FlexDirection` | `'row'`        | Flex 방향   |
| `wrap`      | `FlexWrap`      | `'nowrap'`     | 줄바꿈      |
| `justify`   | `Justify`       | `'flex-start'` | 주축 정렬   |
| `align`     | `AlignItems`    | `'stretch'`    | 교차축 정렬 |
| `gap`       | `string`        | -              | Flex gap    |

### Flex 레이아웃 (데스크탑, >=1920px)

| Prop               | Type            | Default | 설명                 |
| ------------------ | --------------- | ------- | -------------------- |
| `directionDesktop` | `FlexDirection` | -       | 데스크탑 Flex 방향   |
| `wrapDesktop`      | `FlexWrap`      | -       | 데스크탑 줄바꿈      |
| `justifyDesktop`   | `Justify`       | -       | 데스크탑 주축 정렬   |
| `alignDesktop`     | `AlignItems`    | -       | 데스크탑 교차축 정렬 |
| `gapDesktop`       | `string`        | -       | 데스크탑 gap         |

### Box/시각

| Prop      | Type     | Default | 설명          |
| --------- | -------- | ------- | ------------- |
| `padding` | `string` | -       | 패딩          |
| `margin`  | `string` | -       | 마진          |
| `radius`  | `string` | -       | border-radius |
| `shadow`  | `string` | -       | box-shadow    |
| `border`  | `string` | -       | 테두리        |
| `color`   | `string` | -       | 텍스트 색상   |

### 배경

| Prop            | Type           | Default       | 설명                                                             |
| --------------- | -------------- | ------------- | ---------------------------------------------------------------- |
| `background`    | `string`       | -             | 배경색/그라디언트                                                |
| `src`           | `string`       | -             | 배경 이미지 URL                                                  |
| `bg-size`       | `BgSize`       | `'cover'`     | 배경 이미지 크기 (`'auto'`, `'cover'`, `'contain'` 또는 직접 값) |
| `bg-position`   | `string`       | `'50% 50%'`   | 배경 이미지 위치                                                 |
| `bg-repeat`     | `BgRepeat`     | `'no-repeat'` | 배경 이미지 반복                                                 |
| `bg-attachment` | `BgAttachment` | `'scroll'`    | 배경 이미지 고정 (`'scroll'`, `'fixed'`, `'local'`)              |
| `bg-blend`      | `BgBlend`      | `'normal'`    | 배경 블렌드 모드                                                 |

### 오버레이

| Prop              | Type     | Default | 설명                                     |
| ----------------- | -------- | ------- | ---------------------------------------- |
| `overlay`         | `string` | -       | 오버레이 색상 (rgba/hex-with-alpha 권장) |
| `overlay-opacity` | `number` | `1`     | 오버레이 불투명도 (0~1)                  |

### 기타

| Prop   | Type      | Default | 설명                                              |
| ------ | --------- | ------- | ------------------------------------------------- |
| `fill` | `boolean` | `false` | 부모를 덮는 모드 (`position: absolute; inset: 0`) |

---

## 사용 예시

### 기본 레이아웃

```html
<!-- 가로 배치 -->
<tinto-wrapper direction="row" gap="16px">
  <div>아이템 1</div>
  <div>아이템 2</div>
</tinto-wrapper>

<!-- 세로 배치 -->
<tinto-wrapper direction="column" gap="24px" align="center">
  <h2>제목</h2>
  <p>내용</p>
</tinto-wrapper>
```

### 배경 이미지

```html
<!-- 기본 배경 이미지 -->
<tinto-wrapper src="hero.jpg" bg-size="cover" padding="48px">
  <h1>히어로 섹션</h1>
</tinto-wrapper>

<!-- 고정 배경 (parallax 효과) -->
<tinto-wrapper src="background.jpg" bg-attachment="fixed" bg-position="center" padding="96px">
  <h2>고정 배경</h2>
</tinto-wrapper>
```

### 오버레이

```html
<!-- 어두운 오버레이 -->
<tinto-wrapper src="image.jpg" overlay="rgba(0,0,0,0.6)" color="#fff" padding="48px">
  <h2>오버레이가 있는 텍스트</h2>
</tinto-wrapper>

<!-- 투명도 조절 -->
<tinto-wrapper src="image.jpg" overlay="rgba(255,0,0,0.5)" overlay-opacity="0.7" padding="48px">
  <h2>투명도 조절된 오버레이</h2>
</tinto-wrapper>
```

### 데스크탑 오버라이드

```html
<!-- 모바일: 세로, 데스크탑: 가로 -->
<tinto-wrapper
  direction="column"
  direction-desktop="row"
  gap="16px"
  gap-desktop="48px"
  justify-desktop="space-between"
>
  <div>모바일에서는 세로로, 데스크탑에서는 가로로 배치</div>
  <div>데스크탑에서 공간 분배</div>
</tinto-wrapper>
```

### Fill 모드

```html
<!-- 부모를 완전히 덮음 -->
<div style="position: relative; width: 100%; height: 400px;">
  <tinto-wrapper fill src="background.jpg" overlay="rgba(0,0,0,0.3)">
    <h2>절대 위치 오버레이</h2>
  </tinto-wrapper>
</div>
```

### 배경 블렌드

```html
<!-- 배경 이미지와 색상 블렌드 -->
<tinto-wrapper src="pattern.jpg" background="rgba(255,0,0,0.5)" bg-blend="multiply" padding="48px">
  <h2>블렌드된 배경</h2>
</tinto-wrapper>
```

---

## 접근성

- ✅ 접근성 속성 패스스루 지원 (`aria-label`, `role` 등)

```html
<tinto-wrapper role="banner" aria-label="히어로 섹션" src="hero.jpg">
  <h1>히어로</h1>
</tinto-wrapper>
```

---

## CSS Parts

- `part="root"`: 래퍼 루트 요소
- `part="inner"`: 내부 Flex 컨테이너

```css
tinto-wrapper::part(root) {
  border: 1px solid #ccc;
}

tinto-wrapper::part(inner) {
  min-height: 200px;
}
```

---

## CSS 변수

컴포넌트 내부에서 사용하는 CSS 변수:

### Flex (모바일)

- `--tw-dir`: flex-direction
- `--tw-wrap`: flex-wrap
- `--tw-justify`: justify-content
- `--tw-align`: align-items
- `--tw-gap`: gap

### Flex (데스크탑)

- `--tw-dir-desktop`: 데스크탑 flex-direction
- `--tw-wrap-desktop`: 데스크탑 flex-wrap
- `--tw-justify-desktop`: 데스크탑 justify-content
- `--tw-align-desktop`: 데스크탑 align-items
- `--tw-gap-desktop`: 데스크탑 gap

### Box

- `--tw-pad`: padding
- `--tw-mar`: margin
- `--tw-radius`: border-radius
- `--tw-shadow`: box-shadow
- `--tw-border`: 테두리
- `--tw-color`: 텍스트 색상

### 배경

- `--tw-bg`: 배경색
- `--tw-bg-img`: 배경 이미지
- `--tw-bg-size`: 배경 크기
- `--tw-bg-pos`: 배경 위치
- `--tw-bg-repeat`: 배경 반복
- `--tw-bg-attach`: 배경 고정
- `--tw-bg-blend`: 배경 블렌드

### 오버레이

- `--tw-overlay`: 오버레이 색상
- `--tw-overlay-opacity`: 오버레이 불투명도

---

## 문제 해결

### Q: 데스크탑 오버라이드가 작동하지 않아요

A: 브라우저 너비가 1920px 이상인지 확인하세요. 데스크탑 오버라이드는 `@media (min-width: 1920px)`에서만 적용됩니다.

### Q: 배경 이미지가 보이지 않아요

A:

1. `src` URL이 올바른지 확인
2. CORS 설정 확인
3. `bg-size`가 `'cover'` 또는 `'contain'`인지 확인

### Q: 오버레이가 너무 진하거나 연해요

A: `overlay-opacity` prop으로 조절:

```html
<tinto-wrapper overlay="rgba(0,0,0,0.5)" overlay-opacity="0.3">
  <!-- 더 연한 오버레이 -->
</tinto-wrapper>
```

---

## 고급 사용법

### 동적 배경 변경

```javascript
const wrapper = document.querySelector('tinto-wrapper');
wrapper.src = 'new-background.jpg';
```

### 반응형 배경 이미지

```html
<!-- CSS 변수로 제어 -->
<tinto-wrapper src="image.jpg" style="--tw-bg-size: clamp(cover, 100vw, contain);"> </tinto-wrapper>
```

---

## TL;DR

- ✅ Flex 레이아웃 완벽 지원
- ✅ 데스크탑 오버라이드 (>=1920px)
- ✅ 배경 이미지 + 오버레이 지원
- ✅ Fill 모드로 절대 위치 지원

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
   "tinto-wrapper 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
