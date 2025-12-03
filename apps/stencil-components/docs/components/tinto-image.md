# tinto-image

이미지 컴포넌트. 이미지 최적화, 애니메이션, 링크/버튼 모드를 지원하며, placeholder와 반응형 이미지(srcset/sizes)를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 이미지 -->
<tinto-image
  src="https://example.com/image.jpg"
  alt="이미지 설명"
  ratio="16:9"
  width="300px"
></tinto-image>

<!-- Placeholder와 함께 -->
<tinto-image
  src="https://example.com/image.jpg"
  alt="이미지 설명"
  placeholder="https://example.com/placeholder.jpg"
  ratio="16:9"
  width="300px"
></tinto-image>

<!-- 링크 모드 -->
<tinto-image
  src="https://example.com/image.jpg"
  alt="클릭 가능한 이미지"
  href="https://example.com"
  target="_blank"
  ratio="16:9"
  width="300px"
></tinto-image>

<!-- 애니메이션 -->
<tinto-image
  src="https://example.com/image.jpg"
  alt="회전하는 이미지"
  ratio="1:1"
  width="200px"
  animation="spin"
  play
  duration="3"
  rotate="right"
></tinto-image>
```

---

## Props

### 이미지/미디어

| Prop       | Type                                                       | Default     | 설명                                              |
| ---------- | ---------------------------------------------------------- | ----------- | ------------------------------------------------- |
| `src`      | `string`                                                   | -           | 이미지 URL                                        |
| `alt`      | `string`                                                   | -           | 대체 텍스트 (필수)                                |
| `ratio`    | `'16:9' \| '4:3' \| '1:1' \| '3:2' \| '21:9' \| string`    | `'16:9'`    | 종횡비 (예: `"16:9"`, `"1:1"`)                    |
| `fit`      | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`   | object-fit                                        |
| `position` | `string`                                                   | `'50% 50%'` | object-position (예: `"50% 50%"`, `"center top"`) |

### 비주얼

| Prop         | Type                                                  | Default | 설명                                   |
| ------------ | ----------------------------------------------------- | ------- | -------------------------------------- |
| `radius`     | `string`                                              | -       | border-radius (예: `"8px"`, `"50%"`)   |
| `rounded`    | `'soft' \| 'oval' \| 'top' \| 'diagonal' \| 'circle'` | -       | 반경 프리셋 (`radius`가 있으면 무시됨) |
| `border`     | `string`                                              | -       | border 토큰 (예: `"1px solid #000"`)   |
| `shadow`     | `string`                                              | -       | box-shadow 토큰                        |
| `background` | `string`                                              | -       | 배경 색/그라디언트                     |
| `width`      | `string`                                              | -       | 호스트 박스 너비 (CSS inline-size)     |
| `height`     | `string`                                              | -       | 호스트 박스 높이 (CSS block-size)      |

### 로딩

| Prop             | Type                          | Default   | 설명                                                                    |
| ---------------- | ----------------------------- | --------- | ----------------------------------------------------------------------- |
| `loading`        | `'lazy' \| 'eager'`           | -         | 로딩 정책                                                               |
| `priority`       | `boolean`                     | `false`   | 우선 로딩 (`true`일 때 `fetchpriority="high"` + `<link rel="preload">`) |
| `placeholder`    | `string`                      | -         | 블러/저해상도 placeholder URL                                           |
| `srcset`         | `string`                      | -         | 반응형 이미지 srcset                                                    |
| `sizes`          | `string`                      | -         | 반응형 이미지 sizes                                                     |
| `decoding`       | `'async' \| 'sync' \| 'auto'` | `'async'` | 디코딩 방식                                                             |
| `crossorigin`    | `string`                      | -         | CORS 설정                                                               |
| `referrerpolicy` | `string`                      | -         | Referrer 정책                                                           |

### 상호작용

| Prop       | Type                                         | Default | 설명                             |
| ---------- | -------------------------------------------- | ------- | -------------------------------- |
| `href`     | `string`                                     | -       | 링크 모드일 때 이동할 URL        |
| `target`   | `'_self' \| '_blank' \| '_parent' \| '_top'` | -       | 링크 타겟                        |
| `rel`      | `string`                                     | -       | 링크 rel                         |
| `download` | `string`                                     | -       | 다운로드 파일명 (빈 문자열 허용) |
| `as`       | `'button'`                                   | -       | 버튼 모드 (`as="button"`)        |
| `disabled` | `boolean`                                    | `false` | 비활성화 상태 (버튼 모드)        |

### 애니메이션

| Prop                | Type                                             | Default      | 설명                        |
| ------------------- | ------------------------------------------------ | ------------ | --------------------------- |
| `animation`         | `'spin' \| 'float' \| 'wobble' \| 'pulse' \| ''` | `''`         | 애니메이션 타입             |
| `play`              | `boolean`                                        | `true`       | 재생/일시정지               |
| `rotate`            | `'left' \| 'right'`                              | `'right'`    | 회전 방향 (spin 애니메이션) |
| `duration`          | `number`                                         | `20`         | 애니메이션 지속 시간 (초)   |
| `repeat`            | `'infinite' \| number \| string`                 | `'infinite'` | 반복 횟수                   |
| `pause-on-hover`    | `boolean`                                        | `false`      | hover 시 일시정지           |
| `start-on-viewport` | `boolean`                                        | `false`      | 뷰포트 진입 시 시작         |

---

## Slots

| Slot      | 설명                                 |
| --------- | ------------------------------------ |
| `overlay` | 이미지 위에 표시되는 오버레이 콘텐츠 |

---

## 이벤트

| 이벤트         | Payload                          | 설명                         |
| -------------- | -------------------------------- | ---------------------------- |
| `tinto:loaded` | `{ src: string }`                | 이미지 로드 완료             |
| `tinto:error`  | `{ src: string, error?: Error }` | 이미지 로드 실패             |
| `tinto:press`  | `{ originalEvent: MouseEvent }`  | 클릭/터치 이벤트 (버튼 모드) |

---

## 사용 예시

### 기본 이미지

```html
<tinto-image
  src="https://picsum.photos/800/450"
  alt="랜덤 이미지"
  ratio="16:9"
  width="300px"
></tinto-image>
```

### Placeholder와 함께

```html
<tinto-image
  src="https://picsum.photos/800/450"
  alt="Placeholder 이미지"
  placeholder="https://picsum.photos/80/45?blur=10"
  ratio="16:9"
  width="300px"
></tinto-image>
```

> **참고**: `placeholder`가 있으면 메인 이미지는 기본적으로 `eager` 로딩됩니다 (빠른 스왑).

### 반응형 이미지

```html
<tinto-image
  src="https://example.com/image-800w.jpg"
  alt="반응형 이미지"
  srcset="https://example.com/image-400w.jpg 400w, https://example.com/image-800w.jpg 800w, https://example.com/image-1200w.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  ratio="16:9"
  width="100%"
></tinto-image>
```

### 링크 모드

```html
<tinto-image
  src="https://picsum.photos/800/450"
  alt="클릭 가능한 이미지"
  href="https://example.com"
  target="_blank"
  ratio="16:9"
  width="300px"
></tinto-image>
```

### 버튼 모드

```html
<tinto-image
  src="https://picsum.photos/400/400"
  alt="버튼 이미지"
  as="button"
  ratio="1:1"
  width="200px"
></tinto-image>

<script>
  document.querySelector('tinto-image[as="button"]').addEventListener('tinto:press', (e) => {
    console.log('이미지 클릭됨', e.detail);
  });
</script>
```

### 애니메이션

```html
<!-- 회전 애니메이션 -->
<tinto-image
  src="https://picsum.photos/400/400"
  alt="회전하는 이미지"
  ratio="1:1"
  width="200px"
  animation="spin"
  play
  duration="3"
  rotate="right"
></tinto-image>

<!-- Float 애니메이션 -->
<tinto-image
  src="https://picsum.photos/400/400"
  alt="떠다니는 이미지"
  ratio="1:1"
  width="200px"
  animation="float"
  play
  duration="2"
  repeat="infinite"
></tinto-image>

<!-- Hover 시 일시정지 -->
<tinto-image
  src="https://picsum.photos/400/400"
  alt="Hover 일시정지"
  ratio="1:1"
  width="200px"
  animation="spin"
  play
  pause-on-hover
></tinto-image>

<!-- 뷰포트 진입 시 시작 -->
<tinto-image
  src="https://picsum.photos/400/400"
  alt="뷰포트 진입 시 시작"
  ratio="1:1"
  width="200px"
  animation="pulse"
  start-on-viewport
></tinto-image>
```

### 오버레이 슬롯

```html
<tinto-image src="https://picsum.photos/800/450" alt="오버레이 이미지" ratio="16:9" width="300px">
  <div
    slot="overlay"
    style="
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      padding: 0.25rem 0.5rem;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
    "
  >
    OVERLAY
  </div>
</tinto-image>
```

### 반경 프리셋

```html
<!-- Soft (기본 반경) -->
<tinto-image src="..." alt="..." rounded="soft"></tinto-image>

<!-- Oval (상단만 라운드) -->
<tinto-image src="..." alt="..." rounded="oval"></tinto-image>

<!-- Top (상단 모서리만) -->
<tinto-image src="..." alt="..." rounded="top"></tinto-image>

<!-- Diagonal (대각선) -->
<tinto-image src="..." alt="..." rounded="diagonal"></tinto-image>

<!-- Circle (완전 원형) -->
<tinto-image src="..." alt="..." rounded="circle"></tinto-image>

<!-- 커스텀 반경 -->
<tinto-image src="..." alt="..." radius="12px"></tinto-image>
```

### 우선 로딩

```html
<tinto-image
  src="https://example.com/hero.jpg"
  alt="히어로 이미지"
  priority
  ratio="21:9"
  width="100%"
></tinto-image>
```

> **참고**: `priority`가 `true`이면 `fetchpriority="high"`와 `<link rel="preload">`가 자동으로 추가됩니다.

---

## CSS Parts

- `part="frame"`: 이미지 프레임 컨테이너
- `part="img"`: 실제 이미지 요소
- `part="placeholder"`: placeholder 이미지 요소

```css
tinto-image::part(frame) {
  border: 2px solid #000;
}

tinto-image::part(img) {
  filter: grayscale(100%);
}
```

---

## 접근성

- `alt` 속성 필수 (이미지 설명)
- `aria-busy`: 로딩 중 상태 표시
- 키보드 네비게이션: 링크/버튼 모드에서 지원
- `prefers-reduced-motion`: 애니메이션 비활성화 고려

---

## FAQ

**Q: placeholder가 표시되지 않아요**  
A: `placeholder` prop에 유효한 이미지 URL을 제공했는지 확인하세요. placeholder는 메인 이미지가 로드되기 전에 표시됩니다.

**Q: 애니메이션이 시작되지 않아요**  
A: `play` prop이 `true`인지, `animation` prop이 올바른 값인지 확인하세요. `start-on-viewport`가 `true`이면 뷰포트에 진입해야 시작됩니다.

**Q: 반응형 이미지가 작동하지 않아요**  
A: `srcset`과 `sizes` prop을 함께 제공해야 합니다. 브라우저가 적절한 이미지를 선택합니다.

**Q: 링크 모드에서 새 탭이 열리지 않아요**  
A: `target="_blank"`와 함께 `href`를 제공하세요. 자동으로 `rel="noopener noreferrer"`가 추가됩니다.

---

## TL;DR

- 이미지 최적화: placeholder, 반응형 이미지, 우선 로딩 지원
- 애니메이션: spin, float, wobble, pulse
- 링크/버튼 모드: 클릭 가능한 이미지
- 오버레이 슬롯: 이미지 위 콘텐츠 배치
- 반경 프리셋: soft, oval, top, diagonal, circle
