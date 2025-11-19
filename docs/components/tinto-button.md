# tinto-button

모바일 퍼스트 버튼 컴포넌트. Variant/Size/Token 기반 스타일링과 링크·폼·토글·로딩 모드를 단일 컴포넌트로 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 버튼 -->
<tinto-button>클릭하세요</tinto-button>

<!-- Primary 버튼, Large 사이즈 -->
<tinto-button variant="primary" size="lg">시작하기</tinto-button>

<!-- 로딩 상태 -->
<tinto-button loading>처리 중...</tinto-button>

<!-- 링크 모드 -->
<tinto-button href="https://example.com" target="_blank">문서 보기</tinto-button>
```

---

## Props

### 시각/레이아웃

| Prop       | Type                                     | Default     | 설명                                                 |
| ---------- | ---------------------------------------- | ----------- | ---------------------------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | 버튼 스타일 변형                                     |
| `size`     | `'sm' \| 'md' \| 'lg'`                   | `'md'`      | 버튼 크기                                            |
| `pill`     | `boolean`                                | `false`     | 완전 라운드 모양                                     |
| `block`    | `boolean`                                | `false`     | 가로 100% 너비                                       |
| `elevated` | `boolean`                                | `false`     | 그림자 효과                                          |
| `outline`  | `boolean`                                | `false`     | 윤곽선 스타일                                        |
| `radius`   | `string`                                 | -           | 커스텀 border-radius (숫자만 입력 시 `px` 자동 추가) |

### 동작/상태

| Prop       | Type                                         | Default    | 설명                                    |
| ---------- | -------------------------------------------- | ---------- | --------------------------------------- |
| `disabled` | `boolean`                                    | `false`    | 비활성화 상태                           |
| `loading`  | `boolean`                                    | `false`    | 로딩 상태 (스피너 표시)                 |
| `toggle`   | `boolean`                                    | `false`    | 토글 버튼 모드                          |
| `pressed`  | `boolean`                                    | `false`    | 토글 버튼의 눌림 상태 (mutable)         |
| `type`     | `'button' \| 'submit' \| 'reset'`            | `'button'` | 폼 제출/리셋 동작 (링크 모드가 아닐 때) |
| `href`     | `string`                                     | -          | 링크 모드일 때 이동할 URL               |
| `target`   | `'_self' \| '_blank' \| '_parent' \| '_top'` | -          | 링크 타겟 (href 지정 시)                |

### 라벨/타이포그래피

| Prop          | Type                                                                                       | Default | 설명                                                         |
| ------------- | ------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------ |
| `label`       | `string`                                                                                   | -       | 텍스트 라벨 (슬롯 대신 사용 가능)                            |
| `text-family` | `'system' \| 'pretendard' \| 'paperlogy' \| 'clash-display' \| 'climate-crisis' \| string` | -       | 폰트 패밀리                                                  |
| `text-size`   | `'sm' \| 'md' \| 'lg' \| 'xl' \| string`                                                   | -       | 폰트 크기 (토큰: `sm=16px`, `md=20px`, `lg=40px`, `xl=64px`) |
| `text-weight` | `'regular' \| 'medium' \| 'semibold' \| 'bold' \| 'black' \| string`                       | -       | 폰트 굵기 (토큰: `400, 500, 600, 700, 900`)                  |
| `text-color`  | `string`                                                                                   | -       | 텍스트 색상 (CSS color 값)                                   |

---

## Slots

| Slot      | 설명                                 |
| --------- | ------------------------------------ |
| `prefix`  | 선행 아이콘/배지                     |
| (default) | 라벨 텍스트 (또는 `label` prop 사용) |
| `suffix`  | 후행 아이콘                          |

---

## 이벤트

| 이벤트        | Payload                         | 설명                         |
| ------------- | ------------------------------- | ---------------------------- |
| `tintoClick`  | `{ originalEvent: MouseEvent }` | 클릭 이벤트                  |
| `tintoToggle` | `{ pressed: boolean }`          | 토글 상태 변경 (toggle 모드) |

---

## 사용 예시

### 기본 버튼

```html
<tinto-button>기본 버튼</tinto-button>
<tinto-button variant="secondary">Secondary</tinto-button>
<tinto-button variant="tertiary">Tertiary</tinto-button>
```

### 사이즈 및 모양

```html
<tinto-button size="sm">Small</tinto-button>
<tinto-button size="md">Medium</tinto-button>
<tinto-button size="lg">Large</tinto-button>

<!-- Pill 모양 -->
<tinto-button pill>Pill Button</tinto-button>

<!-- 블록 버튼 -->
<tinto-button block>Full Width</tinto-button>
```

### 스타일 변형

```html
<!-- 아웃라인 -->
<tinto-button variant="secondary" outline>Outline</tinto-button>

<!-- 그림자 -->
<tinto-button variant="tertiary" elevated>Elevated</tinto-button>

<!-- 커스텀 반경 -->
<tinto-button radius="12">Custom Radius</tinto-button>
```

### 아이콘과 함께 사용

```html
<tinto-button>
  <span slot="prefix">✔</span>
  계속하기
  <span slot="suffix">→</span>
</tinto-button>
```

### 로딩 상태

```html
<tinto-button loading>처리 중...</tinto-button>
```

### 링크 모드

```html
<tinto-button href="https://example.com" target="_blank"> 문서 보기 </tinto-button>
```

### 폼 제출/리셋

```html
<form onsubmit="alert('submitted')">
  <tinto-button type="submit">제출</tinto-button>
  <tinto-button type="reset" variant="secondary">리셋</tinto-button>
</form>
```

### 토글 버튼

```html
<tinto-button toggle pressed aria-label="즐겨찾기 토글"> 즐겨찾기 </tinto-button>

<script>
  document.querySelector('tinto-button[toggle]').addEventListener('tintoToggle', (e) => {
    console.log('토글 상태:', e.detail.pressed);
  });
</script>
```

### 타이포그래피 커스터마이징

```html
<tinto-button text-family="pretendard" text-size="md" text-weight="semibold" text-color="#111827">
  커스텀 타이포그래피
</tinto-button>
```

---

## 동작 우선순위

1. `disabled` 또는 `loading` → 클릭 차단
2. `toggle` 활성 → `pressed` 토글 후 `tintoToggle` 발생
3. `href` 존재 → 링크 모드 우선
4. `href` 없음 + `type="submit|reset"` → 폼 동작
5. 마지막에 `tintoClick` 발생

---

## CSS Parts

외부에서 `::part()` 선택자로 스타일 오버라이드 가능:

- `part="button"`: 버튼 요소
- `part="spinner"`: 로딩 스피너
- `part="prefix"`: 접두사 슬롯
- `part="label"`: 라벨 텍스트
- `part="suffix"`: 접미사 슬롯

```css
tinto-button::part(button) {
  background: #0ea5e9;
  color: white;
}
```

---

## CSS 변수 (Custom Properties)

컴포넌트 내부에서 사용하는 CSS 변수:

### 컨테이너

- `--t-button-bg`: 배경색
- `--t-button-fg`: 전경색
- `--t-button-border`: 테두리
- `--t-button-radius`: 반경
- `--t-button-px`, `--t-button-py`: 패딩
- `--t-button-w`: 너비
- `--t-button-ring`: 포커스 링

### 라벨

- `--t-button-label-ff`: font-family
- `--t-button-label-fs`: font-size
- `--t-button-label-fw`: font-weight
- `--t-button-label-color`: color

---

## 접근성

- 자동 ARIA: `aria-busy`, `aria-disabled`, `aria-pressed`
- 키보드 포커스: `:focus-visible` 시 포커스 링 표시
- High Contrast 모드 지원: `@media (forced-colors: active)` 대응
- 접근성 속성 패스스루: `aria-label`, `aria-describedby` 지원

---

## FAQ

**Q: 스피너가 중앙에 정렬되지 않아요**  
A: 스피너는 `position: absolute`로 중앙 정렬됩니다. 버튼에 `position: relative`가 필요합니다 (기본적으로 적용됨).

**Q: 1920px 이상에서 레이아웃이 바뀌나요?**  
A: 버튼 자체는 브레이크포인트 독립적입니다. 상위 레이아웃 컴포넌트의 토큰만 영향을 받습니다.

**Q: 커스텀 스타일을 적용하려면?**  
A: CSS Parts (`::part()`) 또는 CSS 변수를 사용하세요. Variant/Size 변경은 기본 토큰 세트를 변경합니다.

---

## TL;DR

- 한 컴포넌트로 링크·폼·토글·로딩 모두 지원
- Variants/Size + Tokens로 일관된 스타일
- Slots/Parts로 유연한 구성
- 접근성 기본 탑재
