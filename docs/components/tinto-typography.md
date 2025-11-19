# tinto-typography

타이포그래피 컴포넌트. 폰트 토큰 기반 스타일링과 타이핑 애니메이션을 지원하며, 링크 모드도 제공합니다.

---

## 빠른 시작

```html
<!-- 기본 텍스트 -->
<tinto-typography variant="p">일반 텍스트</tinto-typography>

<!-- 제목 -->
<tinto-typography variant="h1" font="pretendard" font-size="xl" weight="700">
  제목 텍스트
</tinto-typography>

<!-- 타이핑 애니메이션 -->
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["안녕하세요", "반갑습니다", "환영합니다"]'
  typing-duration="5"
  typing-loop
  typing-cursor
>
  타이핑 효과
</tinto-typography>

<!-- 링크 모드 -->
<tinto-typography variant="p" href="https://example.com" target="_blank">
  링크 텍스트
</tinto-typography>
```

---

## Props

### 기본

| Prop      | Type                                    | Default | 설명                                      |
| --------- | --------------------------------------- | ------- | ----------------------------------------- |
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'p' \| 'span'` | `'p'`   | HTML 태그 변형                            |
| `as`      | `string`                                | -       | 커스텀 HTML 태그 (예: `"div"`, `"label"`) |
| `visible` | `boolean`                               | `true`  | 표시/숨김 (`aria-hidden` 제어)            |

### 폰트/타이포그래피

| Prop        | Type                                                                                       | Default | 설명                         |
| ----------- | ------------------------------------------------------------------------------------------ | ------- | ---------------------------- |
| `font`      | `'system' \| 'pretendard' \| 'paperlogy' \| 'clash-display' \| 'climate-crisis' \| string` | -       | 폰트 패밀리                  |
| `font-size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| string`                | -       | 폰트 크기 (토큰 또는 CSS 값) |
| `weight`    | `'300' \| '400' \| '500' \| '600' \| '700' \| '800' \| '900' \| string`                    | -       | 폰트 굵기                    |
| `color`     | `string`                                                                                   | -       | 텍스트 색상                  |
| `align`     | `'left' \| 'center' \| 'right' \| 'justify'`                                               | -       | 텍스트 정렬                  |
| `highlight` | `'yellow' \| 'green' \| 'blue' \| 'pink' \| string`                                        | -       | 하이라이트 색상              |

### 링크

| Prop     | Type                                         | Default | 설명                                                                  |
| -------- | -------------------------------------------- | ------- | --------------------------------------------------------------------- |
| `href`   | `string`                                     | -       | 링크 URL                                                              |
| `target` | `'_self' \| '_blank' \| '_parent' \| '_top'` | -       | 링크 타겟                                                             |
| `rel`    | `string`                                     | -       | 링크 rel (자동 보정: `target="_blank"` 시 `noopener noreferrer` 추가) |

### 타이핑 애니메이션

| Prop                     | Type               | Default  | 설명                                                   |
| ------------------------ | ------------------ | -------- | ------------------------------------------------------ |
| `rolling`                | `boolean`          | `false`  | 타이핑 애니메이션 활성화                               |
| `typing-texts`           | `string`           | -        | 타이핑할 문장 배열 (JSON 문자열 또는 `\|`/`,` 구분자)  |
| `typing-duration`        | `number`           | `5`      | 타이핑 속도 토큰 (1~10, 숫자가 클수록 느림)            |
| `typing-erase-duration`  | `number`           | -        | 삭제 속도 토큰 (1~10, 비우면 `typing-duration`과 동일) |
| `typing-loop`            | `boolean`          | `true`   | 반복 여부                                              |
| `typing-cursor`          | `boolean`          | `true`   | 커서(`\|`) 표시 여부                                   |
| `typing-unit`            | `'char' \| 'word'` | `'char'` | 타이핑 단위 (문자/단어)                                |
| `roll-speed`             | `number`           | `5`      | 레거시 속도 토큰 (1~10, `typing-duration` 우선)        |
| `roll-clone`             | `number`           | `3`      | 슬롯 텍스트 복제 횟수 (typing-texts 없을 때)           |
| `roll-play`              | `boolean`          | `true`   | 재생/일시정지                                          |
| `roll-start-on-viewport` | `boolean`          | `false`  | 뷰포트 진입 시 시작                                    |
| `pause-on-hover`         | `boolean`          | `false`  | hover 시 일시정지                                      |

---

## 사용 예시

### 기본 텍스트

```html
<tinto-typography variant="p">일반 단락 텍스트</tinto-typography>
<tinto-typography variant="span">인라인 텍스트</tinto-typography>
```

### 제목

```html
<tinto-typography variant="h1" font="pretendard" font-size="xl" weight="700">
  H1 제목
</tinto-typography>

<tinto-typography variant="h2" font="pretendard" font-size="lg" weight="600">
  H2 제목
</tinto-typography>

<tinto-typography variant="h3" font="pretendard" font-size="md" weight="600">
  H3 제목
</tinto-typography>
```

### 폰트 커스터마이징

```html
<tinto-typography
  variant="p"
  font="pretendard"
  font-size="md"
  weight="500"
  color="#111827"
  align="center"
>
  커스텀 타이포그래피
</tinto-typography>
```

### 하이라이트

```html
<tinto-typography variant="p" highlight="yellow"> 노란색 하이라이트 텍스트 </tinto-typography>

<tinto-typography variant="p" highlight="green"> 초록색 하이라이트 텍스트 </tinto-typography>
```

### 링크 모드

```html
<tinto-typography variant="p" href="https://example.com" target="_blank">
  외부 링크
</tinto-typography>
```

### 타이핑 애니메이션

#### 기본 타이핑

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["안녕하세요", "반갑습니다", "환영합니다"]'
  typing-duration="5"
  typing-loop
  typing-cursor
>
  타이핑 효과
</tinto-typography>
```

#### 구분자로 문장 지정

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts="안녕하세요|반갑습니다|환영합니다"
  typing-duration="5"
  typing-loop
>
  타이핑 효과
</tinto-typography>
```

#### 슬롯 텍스트 사용

```html
<tinto-typography variant="h2" rolling typing-duration="5" typing-loop roll-clone="3">
  이 텍스트가 타이핑됩니다
</tinto-typography>
```

> **참고**: `typing-texts`가 없으면 슬롯 텍스트를 `roll-clone` 횟수만큼 복제해서 사용합니다.

#### 단어 단위 타이핑

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["Hello World", "Welcome Home", "Nice to Meet You"]'
  typing-duration="5"
  typing-unit="word"
  typing-loop
>
  단어 단위 타이핑
</tinto-typography>
```

#### 커스텀 속도

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["빠른 타이핑", "느린 타이핑"]'
  typing-duration="2"
  typing-erase-duration="3"
  typing-loop
>
  커스텀 속도
</tinto-typography>
```

> **참고**: `typing-duration`은 타이핑 속도 (1~10, 숫자가 클수록 느림), `typing-erase-duration`은 삭제 속도입니다.

#### 뷰포트 진입 시 시작

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["안녕하세요", "반갑습니다"]'
  roll-start-on-viewport
>
  뷰포트 진입 시 시작
</tinto-typography>
```

#### Hover 시 일시정지

```html
<tinto-typography variant="h2" rolling typing-texts='["안녕하세요", "반갑습니다"]' pause-on-hover>
  Hover 시 일시정지
</tinto-typography>
```

#### 반복 없이 한 번만

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["안녕하세요", "반갑습니다"]'
  typing-loop="false"
>
  한 번만 타이핑
</tinto-typography>
```

#### 커서 없이

```html
<tinto-typography
  variant="h2"
  rolling
  typing-texts='["안녕하세요", "반갑습니다"]'
  typing-cursor="false"
>
  커서 없이 타이핑
</tinto-typography>
```

---

## CSS Parts

- `part="root"`: 루트 요소

```css
tinto-typography::part(root) {
  line-height: 1.6;
}
```

---

## 접근성

- 타이핑 애니메이션 시 `aria-live="polite"`로 스크린 리더에 변경 사항 알림
- 스크린 리더용 정적 텍스트 제공 (`.sr-only` 스팬)
- `prefers-reduced-motion` 고려: 애니메이션 비활성화 시 타이핑 효과 건너뛰기
- `aria-hidden`: `visible="false"`일 때 스크린 리더에서 숨김

---

## FAQ

**Q: 타이핑 애니메이션이 시작되지 않아요**  
A: `rolling` prop이 `true`인지 확인하세요. `roll-start-on-viewport`가 `true`이면 뷰포트에 진입해야 시작됩니다.

**Q: 타이핑 속도가 너무 빠르거나 느려요**  
A: `typing-duration` 값을 조정하세요 (1~10, 숫자가 클수록 느림). 기본값은 `5`입니다.

**Q: 타이핑이 반복되지 않아요**  
A: `typing-loop`가 `true`인지 확인하세요. 기본값은 `true`입니다.

**Q: 스크린 리더에서 타이핑 텍스트가 제대로 읽히지 않아요**  
A: 컴포넌트는 자동으로 스크린 리더용 정적 텍스트를 제공합니다. `prefers-reduced-motion`이 활성화되면 애니메이션 없이 정적 텍스트만 표시됩니다.

**Q: 커스텀 HTML 태그를 사용하고 싶어요**  
A: `as` prop을 사용하세요. 예: `as="div"`, `as="label"`.

---

## TL;DR

- 폰트 토큰 기반 스타일링: font, font-size, weight, color
- 타이핑 애니메이션: 문자/단어 단위, 반복, 커서, 속도 제어
- 링크 모드: 클릭 가능한 텍스트
- 접근성: 스크린 리더 지원, prefers-reduced-motion 고려
- 하이라이트: 노란색, 초록색, 파란색, 핑크색
