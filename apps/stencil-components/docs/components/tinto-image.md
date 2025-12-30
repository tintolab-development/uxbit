# tinto-image

고성능 이미지 컴포넌트. Lazy loading, placeholder, 애니메이션, 링크/버튼 모드를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 이미지 -->
<tinto-image src="https://example.com/image.jpg" alt="설명"></tinto-image>

<!-- Lazy loading -->
<tinto-image src="image.jpg" loading="lazy" ratio="16:9"></tinto-image>

<!-- Placeholder와 함께 -->
<tinto-image src="image.jpg" placeholder="blur.jpg" alt="고해상도 이미지"> </tinto-image>

<!-- 애니메이션 -->
<tinto-image src="logo.png" animation="spin" duration="10" alt="회전하는 로고"> </tinto-image>
```

---

## Props

### 이미지/미디어

| Prop         | Type                                                       | Default     | 설명                                                                            |
| ------------ | ---------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| `src`        | `string`                                                   | -           | 이미지 URL (필수)                                                               |
| `alt`        | `string`                                                   | -           | 대체 텍스트 (접근성 필수)                                                       |
| `ratio`      | `AspectRatio \| string`                                    | `'16:9'`    | 종횡비 (`"16:9"`, `"1:1"` 등)                                                   |
| `fit`        | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`   | object-fit 값                                                                   |
| `position`   | `string`                                                   | `'50% 50%'` | object-position 값                                                              |
| `radius`     | `string`                                                   | -           | border-radius (숫자만 입력 시 `px` 자동 추가)                                   |
| `rounded`    | `RoundedPreset`                                            | -           | 미리 정의된 둥근 모서리 (`'soft'`, `'oval'`, `'top'`, `'diagonal'`, `'circle'`) |
| `border`     | `string`                                                   | -           | 테두리 스타일                                                                   |
| `shadow`     | `string`                                                   | -           | box-shadow 값                                                                   |
| `background` | `string`                                                   | -           | 배경색/그라디언트                                                               |
| `width`      | `string`                                                   | -           | 호스트 너비                                                                     |
| `height`     | `string`                                                   | -           | 호스트 높이                                                                     |

### 로딩 정책

| Prop             | Type                          | Default   | 설명                          |
| ---------------- | ----------------------------- | --------- | ----------------------------- |
| `loading`        | `'lazy' \| 'eager'`           | `'lazy'`  | 로딩 전략                     |
| `priority`       | `boolean`                     | `false`   | 우선 로딩 (preload 주입)      |
| `placeholder`    | `string`                      | -         | 블러/저해상도 placeholder URL |
| `srcset`         | `string`                      | -         | 반응형 이미지 srcset          |
| `sizes`          | `string`                      | -         | 반응형 이미지 sizes           |
| `decoding`       | `'async' \| 'sync' \| 'auto'` | `'async'` | 디코딩 전략                   |
| `crossorigin`    | `string`                      | -         | CORS 설정                     |
| `referrerpolicy` | `string`                      | -         | Referrer 정책                 |

### 상호작용

| Prop       | Type         | Default | 설명                                     |
| ---------- | ------------ | ------- | ---------------------------------------- |
| `href`     | `string`     | -       | 링크 모드일 때 이동할 URL                |
| `target`   | `LinkTarget` | -       | 링크 타겟                                |
| `rel`      | `string`     | -       | 링크 rel (target이 `_blank`면 자동 보정) |
| `download` | `string`     | -       | 다운로드 속성                            |
| `as`       | `'button'`   | -       | 버튼 모드 활성화                         |
| `disabled` | `boolean`    | `false` | 비활성화 상태                            |

### 애니메이션

| Prop                   | Type                             | Default      | 설명                                                         |
| ---------------------- | -------------------------------- | ------------ | ------------------------------------------------------------ |
| `animation`            | `ImageAnimation`                 | `''`         | 애니메이션 타입 (`'spin'`, `'float'`, `'wobble'`, `'pulse'`) |
| `play`                 | `boolean`                        | `true`       | 재생/일시정지                                                |
| `rotate`               | `'left' \| 'right'`              | `'right'`    | 회전 방향 (spin 모드)                                        |
| `duration`             | `number`                         | `20`         | 애니메이션 지속 시간 (초)                                    |
| `animation-scale`      | `number`                         | -            | 애니메이션 중 스케일 배수                                    |
| `auto-scale-threshold` | `number`                         | `0.8`        | 자동 스케일 임계값 (부모 대비 너비 비율)                     |
| `auto-scale-value`     | `number`                         | `0.6`        | 자동 스케일 값                                               |
| `repeat`               | `'infinite' \| number \| string` | `'infinite'` | 반복 횟수                                                    |
| `pause-on-hover`       | `boolean`                        | `false`      | 호버 시 일시정지                                             |
| `start-on-viewport`    | `boolean`                        | `false`      | 뷰포트 진입 시 시작                                          |

---

## Slots

| Slot      | 설명                            |
| --------- | ------------------------------- |
| `overlay` | 이미지 위에 오버레이되는 콘텐츠 |

---

## 이벤트

| 이벤트         | Payload                                           | 설명             |
| -------------- | ------------------------------------------------- | ---------------- |
| `tinto:loaded` | `{ width: number, height: number, src?: string }` | 이미지 로드 완료 |
| `tinto:error`  | `{ src?: string }`                                | 이미지 로드 실패 |
| `tinto:press`  | `{ kind: 'link' \| 'button' \| 'plain' }`         | 클릭/탭 이벤트   |

---

## 사용 예시

### 기본 사용

```html
<tinto-image src="hero.jpg" alt="히어로 이미지" ratio="16:9"> </tinto-image>
```

### Placeholder와 함께

```html
<tinto-image src="high-res.jpg" placeholder="blur.jpg" alt="고해상도 이미지" ratio="1:1">
</tinto-image>
```

### 반응형 이미지

```html
<tinto-image
  src="image.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="반응형 이미지"
>
</tinto-image>
```

### 애니메이션

```html
<!-- 회전 애니메이션 -->
<tinto-image src="logo.png" animation="spin" duration="5" rotate="right" alt="회전 로고">
</tinto-image>

<!-- 떠다니는 애니메이션 -->
<tinto-image src="icon.png" animation="float" duration="3" pause-on-hover alt="떠다니는 아이콘">
</tinto-image>

<!-- 뷰포트 진입 시 시작 -->
<tinto-image src="animated.gif" animation="pulse" start-on-viewport alt="펄스 애니메이션">
</tinto-image>
```

### 링크 모드

```html
<tinto-image
  src="thumbnail.jpg"
  href="https://example.com/article"
  target="_blank"
  alt="기사 썸네일"
>
</tinto-image>
```

### 버튼 모드

```html
<tinto-image src="icon.png" as="button" alt="클릭 가능한 아이콘"> </tinto-image>

<script>
  document.querySelector('tinto-image[as="button"]').addEventListener('tinto:press', (e) => {
    console.log('클릭됨:', e.detail.kind);
  });
</script>
```

### 둥근 모서리

```html
<!-- Soft 모서리 -->
<tinto-image src="photo.jpg" rounded="soft" alt="사진"></tinto-image>

<!-- 상단만 둥글게 -->
<tinto-image src="card.jpg" rounded="oval" alt="카드"></tinto-image>

<!-- 원형 -->
<tinto-image src="avatar.jpg" rounded="circle" alt="아바타"></tinto-image>

<!-- 커스텀 반경 -->
<tinto-image src="image.jpg" radius="20" alt="이미지"></tinto-image>
```

### 오버레이 슬롯

```html
<tinto-image src="background.jpg" alt="배경">
  <div slot="overlay" style="color: white; padding: 2rem;">
    <h2>오버레이 텍스트</h2>
  </div>
</tinto-image>
```

---

## 성능 최적화

### 1. Lazy Loading

```html
<!-- 기본적으로 lazy loading 활성화 -->
<tinto-image src="below-fold.jpg" loading="lazy" alt="하단 이미지"></tinto-image>

<!-- 위쪽 폴드 이미지는 eager -->
<tinto-image src="hero.jpg" loading="eager" priority alt="히어로"></tinto-image>
```

### 2. Priority 힌트

```html
<!-- 중요한 이미지는 priority 사용 -->
<tinto-image src="logo.jpg" priority alt="로고"> </tinto-image>
```

### 3. Placeholder 전략

```html
<!-- 저해상도 placeholder로 CLS 방지 -->
<tinto-image src="high-res.jpg" placeholder="low-res-blur.jpg" alt="이미지"> </tinto-image>
```

---

## 접근성

- ✅ `alt` 속성 필수 (이미지 의미 전달)
- ✅ `aria-busy` 자동 설정 (로딩 중)
- ✅ 키보드 포커스 지원 (링크/버튼 모드)
- ✅ `prefers-reduced-motion` 고려 (애니메이션 자동 비활성화)

```html
<!-- 접근성 좋은 예시 -->
<tinto-image
  src="chart.jpg"
  alt="2024년 매출 증가 그래프. 전년 대비 25% 증가."
  aria-label="매출 차트"
>
</tinto-image>
```

---

## CSS Parts

외부에서 `::part()` 선택자로 스타일 오버라이드:

- `part="frame"`: 이미지 프레임
- `part="img"`: 실제 이미지 요소
- `part="placeholder"`: placeholder 이미지
- `part="link"`: 링크 래퍼 (href 사용 시)
- `part="button"`: 버튼 래퍼 (as="button" 사용 시)
- `part="plain"`: 일반 래퍼

```css
tinto-image::part(frame) {
  border: 2px solid #ccc;
}

tinto-image::part(img) {
  filter: grayscale(50%);
}
```

---

## CSS 변수

컴포넌트 내부에서 사용하는 CSS 변수:

- `--ti-width`: 호스트 너비
- `--ti-base-scale`: 기본 스케일
- `--ratio-w`, `--ratio-h`: 종횡비
- `--ti-fit`: object-fit
- `--ti-pos`: object-position
- `--ti-radius`: border-radius
- `--ti-border`: 테두리
- `--ti-shadow`: 그림자
- `--ti-bg`: 배경
- `--ti-focus`: 포커스 링 색상

---

## 문제 해결

### Q: 이미지가 로드되지 않아요

A:

1. `src` URL이 올바른지 확인
2. CORS 설정 확인 (`crossorigin` 속성)
3. `tinto:error` 이벤트 리스너로 에러 확인

```html
<tinto-image src="image.jpg" alt="이미지" id="img1"></tinto-image>
<script>
  document.getElementById('img1').addEventListener('tinto:error', (e) => {
    console.error('이미지 로드 실패:', e.detail.src);
  });
</script>
```

### Q: Placeholder가 사라지지 않아요

A: 메인 이미지가 로드되면 자동으로 사라집니다. `tinto:loaded` 이벤트로 확인:

```javascript
img.addEventListener('tinto:loaded', () => {
  console.log('이미지 로드 완료');
});
```

### Q: 애니메이션이 너무 빠르거나 느려요

A: `duration` prop으로 조절:

```html
<!-- 더 빠르게 (5초) -->
<tinto-image animation="spin" duration="5"></tinto-image>

<!-- 더 느리게 (30초) -->
<tinto-image animation="spin" duration="30"></tinto-image>
```

### Q: 모바일에서 성능이 안 좋아요

A:

1. `loading="lazy"` 사용
2. `srcset`/`sizes`로 적절한 크기 이미지 로드
3. 애니메이션은 필요한 경우만 사용

---

## 고급 사용법

### 동적 이미지 교체

```javascript
const img = document.querySelector('tinto-image');
img.src = 'new-image.jpg'; // 자동으로 새 이미지 로드
```

### 애니메이션 제어

```javascript
const img = document.querySelector('tinto-image[animation]');
img.play = false; // 일시정지
img.play = true; // 재생
```

### IntersectionObserver와 함께 사용

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('loading', 'eager');
    }
  });
});

document.querySelectorAll('tinto-image[loading="lazy"]').forEach((img) => {
  observer.observe(img);
});
```

---

## TL;DR

- ✅ Lazy loading, placeholder, 애니메이션 지원
- ✅ 링크/버튼 모드로 상호작용 가능
- ✅ 성능 최적화 (IntersectionObserver, preload)
- ✅ 접근성 고려 (alt, aria-busy, 키보드 지원)
- ✅ 반응형 이미지 지원 (srcset/sizes)

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 60.3점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 85.0     | 20%      | 17.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 52.2     | 15%      | 7.83      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **60.3** | **100%** | **60.3**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (85.0점)

- 문서화: ✅
- 예제 코드: 21개
- 접근성(a11y): ❌
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (52.2점)

- API 직관성: 11%
- Props 개수: 38개
- 학습 곡선: 보통
- 개발자 경험: 100%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 60.3점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 85.0     | 20%      | 17.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 52.2     | 15%      | 7.83      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **60.3** | **100%** | **60.3**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (85.0점)

- 문서화: ✅
- 예제 코드: 21개
- 접근성(a11y): ❌
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (52.2점)

- API 직관성: 11%
- Props 개수: 38개
- 학습 곡선: 보통
- 개발자 경험: 100%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 60.3점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 85.0     | 20%      | 17.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 52.2     | 15%      | 7.83      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **60.3** | **100%** | **60.3**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (85.0점)

- 문서화: ✅
- 예제 코드: 21개
- 접근성(a11y): ❌
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (52.2점)

- API 직관성: 11%
- Props 개수: 38개
- 학습 곡선: 보통
- 개발자 경험: 100%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 60.3점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 85.0     | 20%      | 17.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 52.2     | 15%      | 7.83      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **60.3** | **100%** | **60.3**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (85.0점)

- 문서화: ✅
- 예제 코드: 21개
- 접근성(a11y): ❌
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (52.2점)

- API 직관성: 11%
- Props 개수: 38개
- 학습 곡선: 보통
- 개발자 경험: 100%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 60.3점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 50.0     | 20%      | 10.00     |
| 완성도 (Completeness)  | 85.0     | 20%      | 17.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 52.2     | 15%      | 7.83      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **60.3** | **100%** | **60.3**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, size)
- 재사용성: variant prop 추가 고려
- 재사용성: size prop 추가 고려
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (50.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ❌
- Slots 지원: ❌

#### 완성도 (85.0점)

- 문서화: ✅
- 예제 코드: 21개
- 접근성(a11y): ❌
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (52.2점)

- API 직관성: 11%
- Props 개수: 38개
- 학습 곡선: 보통
- 개발자 경험: 100%

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
   "tinto-image 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
