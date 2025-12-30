# tinto-carousel 컴포넌트 문서

**버전**: 1.0.0  
**상태**: ✅ 완료

---

## 개요

`tinto-carousel`은 터치/스와이프 슬라이드가 가능한 Carousel 컴포넌트입니다. 이미지 갤러리, 제품 카드, 배너 등을 슬라이드 형태로 표시할 수 있습니다.

---

## 주요 기능

- ✅ **터치/스와이프 슬라이드**: 모바일과 데스크탑 모두 지원
- ✅ **네비게이션 버튼**: 이전/다음 버튼 (옵션)
- ✅ **인디케이터**: 현재 위치 표시 (점/바/숫자)
- ✅ **자동 재생**: 배너 등에서 유용
- ✅ **무한 루프**: 순환 슬라이드
- ✅ **키보드 네비게이션**: 접근성 지원
- ✅ **반응형**: 모바일 퍼스트 디자인

---

## Props

### 상태 Props

| Prop          | 타입     | 기본값      | 설명                                     |
| ------------- | -------- | ----------- | ---------------------------------------- |
| `current`     | `number` | `0`         | 현재 슬라이드 인덱스 (0부터 시작)        |
| `slide-count` | `number` | `undefined` | 슬라이드 개수 (자동 감지 또는 수동 지정) |

### 네비게이션 Props

| Prop                  | 타입                                 | 기본값      | 설명                      |
| --------------------- | ------------------------------------ | ----------- | ------------------------- |
| `show-navigation`     | `boolean`                            | `true`      | 네비게이션 버튼 표시      |
| `navigation-position` | `'inside' \| 'outside' \| 'overlay'` | `'overlay'` | 네비게이션 버튼 위치      |
| `navigation-style`    | `'circle' \| 'arrow' \| 'text'`      | `'circle'`  | 네비게이션 버튼 스타일    |
| `navigation-display`  | `'always' \| 'hover' \| 'auto'`      | `'hover'`   | 네비게이션 버튼 표시 조건 |

### 인디케이터 Props

| Prop                 | 타입                                     | 기본값     | 설명            |
| -------------------- | ---------------------------------------- | ---------- | --------------- |
| `show-indicator`     | `boolean`                                | `true`     | 인디케이터 표시 |
| `indicator-type`     | `'dot' \| 'bar' \| 'number'`             | `'dot'`    | 인디케이터 타입 |
| `indicator-position` | `'bottom' \| 'top' \| 'left' \| 'right'` | `'bottom'` | 인디케이터 위치 |

### 동작 Props

| Prop                  | 타입                | 기본값    | 설명                         |
| --------------------- | ------------------- | --------- | ---------------------------- |
| `autoplay`            | `boolean`           | `false`   | 자동 재생                    |
| `autoplay-interval`   | `number`            | `3000`    | 자동 재생 간격 (ms)          |
| `loop`                | `boolean`           | `false`   | 무한 루프                    |
| `slides-per-view`     | `number`            | `1`       | 한 번에 표시할 슬라이드 개수 |
| `space-between`       | `string`            | `'16px'`  | 슬라이드 간격                |
| `transition`          | `'slide' \| 'fade'` | `'slide'` | 전환 효과                    |
| `transition-duration` | `number`            | `300`     | 전환 시간 (ms)               |
| `touch-enabled`       | `boolean`           | `true`    | 터치 활성화                  |
| `swipe-threshold`     | `number`            | `50`      | 스와이프 임계값 (px)         |

---

## 이벤트

### `tintoSlideChange`

슬라이드가 변경될 때 발생합니다.

```typescript
interface TintoCarouselSlideChangeDetail {
  current: number; // 현재 슬라이드 인덱스
  previous: number; // 이전 슬라이드 인덱스
  total: number; // 총 슬라이드 개수
}
```

### `tintoSlideStart`

슬라이드가 시작될 때 발생합니다.

```typescript
interface TintoCarouselSlideStartDetail {
  index: number; // 슬라이드 인덱스
}
```

### `tintoSlideEnd`

슬라이드가 종료될 때 발생합니다.

```typescript
interface TintoCarouselSlideEndDetail {
  index: number; // 슬라이드 인덱스
}
```

---

## 메서드

### `goToSlide(index: number)`

특정 슬라이드로 이동합니다.

```typescript
const carousel = document.querySelector('tinto-carousel');
await carousel.goToSlide(2); // 3번째 슬라이드로 이동
```

### `next()`

다음 슬라이드로 이동합니다.

```typescript
await carousel.next();
```

### `prev()`

이전 슬라이드로 이동합니다.

```typescript
await carousel.prev();
```

---

## 사용 예시

### 기본 사용

```html
<tinto-carousel>
  <div style="width: 100%; height: 400px; background: #ff6b6b;">Slide 1</div>
  <div style="width: 100%; height: 400px; background: #4ecdc4;">Slide 2</div>
  <div style="width: 100%; height: 400px; background: #45b7d1;">Slide 3</div>
</tinto-carousel>
```

### 이미지 슬라이드

```html
<tinto-carousel show-navigation show-indicator autoplay autoplay-interval="3000" loop>
  <tinto-image src="image1.jpg" aspect-ratio="16:9"></tinto-image>
  <tinto-image src="image2.jpg" aspect-ratio="16:9"></tinto-image>
  <tinto-image src="image3.jpg" aspect-ratio="16:9"></tinto-image>
</tinto-carousel>
```

### 여러 개 표시

```html
<tinto-carousel slides-per-view="3" space-between="24px" show-navigation show-indicator>
  <!-- 6개 슬라이드 -->
</tinto-carousel>
```

### 페이드 전환

```html
<tinto-carousel transition="fade" transition-duration="500" show-indicator>
  <!-- 슬라이드 -->
</tinto-carousel>
```

---

## CSS 변수

컴포넌트 스타일을 커스터마이징할 수 있습니다:

```css
tinto-carousel {
  --tc-nav-button-size: 44px;
  --tc-nav-button-bg: rgba(0, 0, 0, 0.5);
  --tc-nav-button-color: #ffffff;
  --tc-nav-button-bg-hover: rgba(0, 0, 0, 0.7);
  --tc-indicator-size: 8px;
  --tc-indicator-color: rgba(255, 255, 255, 0.5);
  --tc-indicator-active-color: #ffffff;
  --tc-transition-duration: 300ms;
  --tc-space-between: 16px;
  --tc-focus-color: #005fcc;
}
```

---

## 접근성

- ✅ 키보드 네비게이션 (좌우 화살표, Home, End)
- ✅ ARIA 속성 (`role="region"`, `aria-label`)
- ✅ 스크린 리더 지원
- ✅ 포커스 관리

---

## 반응형

- 모바일: 한 번에 1개 슬라이드 (기본)
- 데스크탑: `slides-per-view` prop으로 여러 개 표시 가능
- 터치 최적화: 모바일에서 자연스러운 스와이프

---

## 성능

- CSS `will-change` 사용으로 애니메이션 최적화
- `prefers-reduced-motion` 지원
- 터치 이벤트 최적화

---

## 브라우저 지원

- Chrome/Edge (최신)
- Firefox (최신)
- Safari (최신)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

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
   "tinto-carousel 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트

---

**작성일**: 2024년  
**작성자**: 개발팀
