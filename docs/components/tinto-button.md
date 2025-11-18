# tinto-button 엘리먼트 가이드라인

> 모바일 퍼스트(Web Component Button). Variant/Size/Token으로 일관 스타일, 링크·폼·토글·로딩까지 단일 컴포넌트로 처리.

---

## 1. 개요 (Overview)

- **Variants / Sizes / Tokens** 기반 스타일.
- **Modes:** 링크(`href`), 폼(`type`), 토글(`toggle`), 로딩(`loading`).
- **A11y:** `aria-busy`, `aria-disabled`, `aria-pressed`, `:focus-visible`.

---

## 2. Props (HTML Attributes, `reflect: true`)

### 2.1 시각/레이아웃

- `variant`: `primary | secondary | tertiary`
- `size`: `sm | md | lg`
- `pill` (boolean): 완전 라운드
- `block` (boolean): 가로 100%
- `elevated` (boolean): 그림자
- `outline` (boolean): 윤곽선
- `radius` (string): 커스텀 반경(숫자만 입력 시 `px` 자동)

### 2.2 동작/상태

- `disabled` (boolean)
- `loading` (boolean): 중앙 스피너 + 내용 시각적 숨김
- `toggle` (boolean) / `pressed` (boolean, mutable)
- `type`: `button | submit | reset` _(링크 모드가 아닐 때 폼 트리거)_
- `href` (string) / `target`: `_self | _blank | _parent | _top`

### 2.3 라벨/타이포그래피

- `label` (string): 기본 슬롯 대체
- `editable` (boolean): 인라인 라벨 편집
- `text-family`: `system | pretendard | paperlogy | clash-display | climate-crisis | custom`
- `text-size`: `sm | md | lg | xl | custom`  
  _(매핑: `sm=16px`, `md=20px`, `lg=40px`, `xl=64px`)_
- `text-weight`: `regular | medium | semibold | bold | black | custom`  
  _(매핑: `400, 500, 600, 700, 900`)_
- `text-color`: CSS color 값

---

## 3. Slots & Parts

### 3.1 Slots

- `slot="prefix"`: 선행 아이콘/배지
- (default): 라벨(또는 `label` 미설정 시)
- `slot="suffix"`: 후행 아이콘

### 3.2 Shadow Parts

- `part="button"`, `part="spinner"`, `part="prefix"`, `part="label"`, `part="suffix"`  
  → 외부에서 `::part(...)`로 세부 스타일 오버라이드 가능

---

## 4. CSS 토큰 (Custom Properties)

### 4.1 컨테이너

- `--t-button-bg`
- `--t-button-fg`
- `--t-button-border`
- `--t-button-radius`
- `--t-button-px`, `--t-button-py`
- `--t-button-w`
- `--t-button-ring` _(focus outline)_

### 4.2 라벨

- `--t-button-label-ff` _(font-family)_
- `--t-button-label-fs` _(font-size)_
- `--t-button-label-fw` _(font-weight)_
- `--t-button-label-color` _(color)_

> Variant/Size/Outline 변경은 기본 토큰 세트를 변경합니다.

---

## 5. 이벤트 (Events)

- `tintoClick`: `{ originalEvent: MouseEvent }`
- `tintoToggle`: `{ pressed: boolean }` _(toggle 모드)_
- `labelChange`: `{ value: string }` _(editable 라벨 변경 시)_

---

## 6. 접근성 (Accessibility)

- 자동 ARIA: `aria-busy`, `aria-disabled`, `aria-pressed`
- 키보드 포커스: `:focus-visible` 시 `--t-button-ring`
- High Contrast: `@media (forced-colors: active)` 대응

---

## 7. 사용 예시 (Usage)

### 7.1 기본/사이즈/필 모양

```html
<tinto-button variant="primary">Primary</tinto-button>

<tinto-button size="sm">Small</tinto-button>
<tinto-button size="md">Medium</tinto-button>
<tinto-button size="lg" pill>Large Pill</tinto-button>
7.2 아웃라인/그림자/블록
html
Copy code
<tinto-button variant="secondary" outline>Secondary Outline</tinto-button>
<tinto-button variant="tertiary" elevated>Elevated</tinto-button>
<tinto-button block>Full Width</tinto-button>
7.3 프리픽스/서픽스 슬롯
html
Copy code
<tinto-button>
  <span slot="prefix">✔</span>
  Continue
  <span slot="suffix">→</span>
</tinto-button>
7.4 로딩
html
Copy code
<tinto-button loading>Processing…</tinto-button>
7.5 링크 모드
html
Copy code
<tinto-button href="https://example.com" target="_blank">Open Docs</tinto-button>
7.6 폼 제출/리셋
html
Copy code
<form onsubmit="alert('submitted')">
  <tinto-button type="submit">Submit</tinto-button>
  <tinto-button type="reset" variant="secondary">Reset</tinto-button>
</form>
7.7 토글 버튼
html
Copy code
<tinto-button toggle pressed aria-label="Toggle favorite">
  Favorite
</tinto-button>

<script>
  document.querySelector('tinto-button[toggle]')
    .addEventListener('tintoToggle', (e) => console.log(e.detail.pressed));
</script>
7.8 인라인 라벨 편집
html
Copy code
<tinto-button editable label="Edit me"></tinto-button>
<script>
  document.querySelector('tinto-button[editable]')
    .addEventListener('labelChange', (e) => console.log('label:', e.detail.value));
</script>
7.9 타이포그래피 토큰
html
Copy code
<tinto-button
  text-family="pretendard"
  text-size="md"          <!-- 혹은 18px / 1.125rem -->
  text-weight="semibold"  <!-- 혹은 600 -->
  text-color="#111827"
>
  Custom Label
</tinto-button>
8. 동작 우선순위 (Behavior Priority)
disabled | loading | editable → 클릭 차단

toggle 활성 → pressed 토글 후 tintoToggle 발생

href 존재 → 링크 모드 우선

href 없음 + type="submit|reset" → 폼 동작

마지막에 tintoClick 발생

9. 테마/오버라이드 (Theming)
9.1 전역 테마 토큰
css
Copy code
:root {
  --color-primary: #111827;
}
:root[data-theme="dark"] {
  --color-primary: #e5e7eb;
}
9.2 컴포넌트 단위 오버라이드
html
Copy code
<tinto-button
  style="
    --t-button-bg:#0ea5e9;
    --t-button-fg:white;
    --t-button-border:1px solid transparent;
    --t-button-radius:14px;
    --t-button-px:1rem; --t-button-py:.65rem;
    --t-button-ring:2px solid #38bdf8;
  "
>
  Themed
</tinto-button>
10. FAQ
스피너 중앙 정렬?
.tinto-button { position:relative } + .spinner { position:absolute; inset:0; margin:auto; }

editable에서 클릭이 안 먹는 이유?
편집 중 오작동 방지로 링크/폼/토글 차단.

1920px 이상 레이아웃 변화가 있나요?
버튼 자체는 브레이크포인트 독립적이며, 상위 레이아웃 컴포넌트의 토큰만 영향.

11. QA 체크리스트
Variant/Size/Modifier 조합 시 토큰 적용 확인

disabled|loading|editable에서 클릭 억제 + ARIA 반영

toggle 모드 pressed 토글 & 이벤트 페이로드 확인

링크 > 폼 우선순위 검증

:focus-visible 시 포커스 링 출력

High Contrast(forced-colors)에서 테두리 가시성 확인

12. TL;DR
한 컴포넌트로 링크·폼·토글·로딩 커버

Variants/Size + Tokens로 일관 스타일

Slots/Parts로 유연 구성, A11y 기본 탑재
```
