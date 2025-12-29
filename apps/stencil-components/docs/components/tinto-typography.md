# tinto-typography

타이포그래피 컴포넌트. 폰트 토큰, 타이핑 애니메이션, 링크 모드를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 텍스트 -->
<tinto-typography>일반 텍스트</tinto-typography>

<!-- 제목 -->
<tinto-typography variant="h1">큰 제목</tinto-typography>

<!-- 타이핑 애니메이션 -->
<tinto-typography rolling typing-texts='["안녕하세요", "반갑습니다", "환영합니다"]'>
  안녕하세요
</tinto-typography>
```

---

## Props

### 기본

| Prop      | Type                                    | Default | 설명                                                  |
| --------- | --------------------------------------- | ------- | ----------------------------------------------------- |
| `variant` | `Variant`                               | `'p'`   | 출력 스타일 (`'h1'`, `'h2'`, `'h3'`, `'p'`, `'span'`) |
| `as`      | `'h1' \| 'h2' \| 'h3' \| 'p' \| 'span'` | -       | 시맨틱 태그 강제 (예: `variant="h1"` + `as="h2"`)     |
| `inline`  | `boolean`                               | `false` | 인라인 모드 (기본 block)                              |
| `visible` | `boolean`                               | `true`  | 텍스트 가시성                                         |

### 타이포그래피

| Prop        | Type                 | Default     | 설명                                                                                           |
| ----------- | -------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `font`      | `FontFamily`         | `'system'`  | 폰트 패밀리 (`'system'`, `'pretendard'`, `'paperlogy'`, `'clash-display'`, `'climate-crisis'`) |
| `fontSize`  | `FontSize \| string` | -           | 폰트 크기 (토큰: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'` 또는 직접 값)                 |
| `color`     | `string`             | `'inherit'` | 텍스트 색상                                                                                    |
| `weight`    | `number \| string`   | -           | 폰트 두께 (예: `400`, `500`, `700`, `'bold'`)                                                  |
| `align`     | `Align`              | `'left'`    | 정렬 (`'left'`, `'center'`, `'right'`, `'justify'`)                                            |
| `underline` | `boolean`            | `false`     | 밑줄 여부                                                                                      |
| `highlight` | `string`             | -           | 하이라이트 배경색                                                                              |

### 링크

| Prop     | Type                                         | Default | 설명                                     |
| -------- | -------------------------------------------- | ------- | ---------------------------------------- |
| `href`   | `string`                                     | -       | 하이퍼링크 URL (설정 시 `<a>`로 감쌈)    |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | -       | 링크 타겟                                |
| `rel`    | `string`                                     | -       | 링크 rel (target이 `_blank`면 자동 보정) |

### 타이핑 애니메이션

| Prop                  | Type               | Default  | 설명                                                                           |
| --------------------- | ------------------ | -------- | ------------------------------------------------------------------------------ |
| `rolling`             | `boolean`          | `false`  | 타이핑 애니메이션 활성화                                                       |
| `typingTexts`         | `string`           | -        | 타이핑할 문장 배열 (JSON: `'["문장1","문장2"]'` 또는 구분자: `'문장1\|문장2'`) |
| `typingDuration`      | `number`           | -        | 타이핑 속도 토큰 (1~10, 기본 `rollSpeed` 사용)                                 |
| `typingEraseDuration` | `number`           | -        | 삭제 속도 토큰 (1~10, 기본 `typingDuration` 사용)                              |
| `typingLoop`          | `boolean`          | `true`   | 반복 여부                                                                      |
| `typingCursor`        | `boolean`          | `true`   | 커서(`\|`) 표시 여부                                                           |
| `typingUnit`          | `'char' \| 'word'` | `'char'` | 타이핑 단위 (문자/단어)                                                        |
| `rollSpeed`           | `number`           | `5`      | 기본 속도 토큰 (1~10)                                                          |
| `rollClone`           | `number`           | `3`      | 기본 문장 복제 개수 (typingTexts 없을 때)                                      |

---

## 사용 예시

### 기본 텍스트

```html
<!-- 단락 -->
<tinto-typography variant="p"> 이것은 일반 단락 텍스트입니다. </tinto-typography>

<!-- 제목 -->
<tinto-typography variant="h1">큰 제목</tinto-typography>
<tinto-typography variant="h2">중간 제목</tinto-typography>
<tinto-typography variant="h3">작은 제목</tinto-typography>

<!-- 인라인 -->
<tinto-typography variant="span" inline> 인라인 텍스트 </tinto-typography>
```

### 타이포그래피 커스터마이징

```html
<!-- 폰트 패밀리 -->
<tinto-typography font="pretendard" variant="h1"> Pretendard 폰트 </tinto-typography>

<!-- 폰트 크기 -->
<tinto-typography fontSize="lg" variant="h2"> 큰 텍스트 </tinto-typography>

<!-- 폰트 두께 -->
<tinto-typography weight="700" variant="h1"> 굵은 텍스트 </tinto-typography>

<!-- 정렬 -->
<tinto-typography align="center" variant="h1"> 중앙 정렬 </tinto-typography>

<!-- 하이라이트 -->
<tinto-typography highlight="#ffeb3b"> 하이라이트된 텍스트 </tinto-typography>
```

### 타이핑 애니메이션

```html
<!-- 기본 타이핑 (슬롯 텍스트 사용) -->
<tinto-typography rolling> 안녕하세요 </tinto-typography>

<!-- 여러 문장 타이핑 (JSON) -->
<tinto-typography rolling typing-texts='["첫 번째 문장", "두 번째 문장", "세 번째 문장"]'>
</tinto-typography>

<!-- 구분자로 문장 지정 -->
<tinto-typography rolling typing-texts="문장1|문장2|문장3"> </tinto-typography>

<!-- 속도 조절 -->
<tinto-typography rolling typing-duration="3" typing-erase-duration="2">
  빠르게 타이핑
</tinto-typography>

<!-- 단어 단위 타이핑 -->
<tinto-typography rolling typing-unit="word" typing-texts='["Hello World", "Welcome Home"]'>
</tinto-typography>

<!-- 커서 없이 -->
<tinto-typography rolling typing-cursor="false"> 커서 없는 타이핑 </tinto-typography>

<!-- 반복 없이 -->
<tinto-typography rolling typing-loop="false" typing-texts='["한 번만"]'> </tinto-typography>
```

### 링크 모드

```html
<!-- 기본 링크 -->
<tinto-typography href="https://example.com"> 링크 텍스트 </tinto-typography>

<!-- 새 탭에서 열기 -->
<tinto-typography href="https://example.com" target="_blank"> 새 탭 링크 </tinto-typography>

<!-- 링크 + 타이핑 -->
<tinto-typography href="https://example.com" rolling typing-texts='["클릭하세요", "링크로 이동"]'>
</tinto-typography>
```

### 시맨틱 태그 분리

```html
<!-- 스타일은 h1, 시맨틱은 h2 -->
<tinto-typography variant="h1" as="h2"> 스타일과 시맨틱 분리 </tinto-typography>
```

---

## 접근성

- ✅ 타이핑 애니메이션 시 스크린 리더용 정적 텍스트 제공 (`sr-only`)
- ✅ `aria-live="polite"`로 동적 콘텐츠 변경 알림
- ✅ `prefers-reduced-motion` 고려 (애니메이션 자동 비활성화)

```html
<!-- 접근성 좋은 예시 -->
<tinto-typography
  variant="h1"
  rolling
  typing-texts='["안녕하세요", "환영합니다"]'
  aria-label="인사말"
>
</tinto-typography>
```

---

## CSS Parts

- `part="root"`: 루트 요소
- `part="link"`: 링크 요소 (href 사용 시)

```css
tinto-typography::part(root) {
  margin-bottom: 1rem;
}

tinto-typography::part(link) {
  text-decoration: underline;
}
```

---

## CSS 변수

- `--t-font-size`: 폰트 크기
- `--typing-line-height`: 타이핑 애니메이션용 줄 높이

---

## 문제 해결

### Q: 타이핑 애니메이션이 작동하지 않아요

A:

1. `rolling` prop이 `true`인지 확인
2. `typingTexts` 또는 슬롯에 텍스트가 있는지 확인
3. `prefers-reduced-motion` 설정 확인 (애니메이션 비활성화 시 작동 안 함)

### Q: 타이핑 속도가 너무 빠르거나 느려요

A: `typingDuration` prop으로 조절 (1~10, 숫자가 클수록 느림):

```html
<tinto-typography rolling typing-duration="8"> 느린 타이핑 </tinto-typography>
```

### Q: 여러 문장을 어떻게 지정하나요?

A: JSON 배열 또는 구분자(`|`, `,`) 사용:

```html
<!-- JSON -->
<tinto-typography typing-texts='["문장1", "문장2"]'></tinto-typography>

<!-- 구분자 -->
<tinto-typography typing-texts="문장1|문장2"></tinto-typography>
```

### Q: 폰트 크기가 적용되지 않아요

A: `fontSize` prop 사용 (토큰 또는 직접 값):

```html
<!-- 토큰 -->
<tinto-typography fontSize="lg"></tinto-typography>

<!-- 직접 값 -->
<tinto-typography fontSize="24px"></tinto-typography>
```

---

## 고급 사용법

### 동적 텍스트 변경

```javascript
const typo = document.querySelector('tinto-typography');
typo.textContent = '새 텍스트'; // 정적 텍스트 변경
```

### 타이핑 애니메이션 제어

```javascript
const typo = document.querySelector('tinto-typography[rolling]');
typo.rolling = false; // 애니메이션 중지
typo.rolling = true; // 애니메이션 재개
```

---

## TL;DR

- ✅ 폰트 토큰 시스템 지원
- ✅ 타이핑 애니메이션 기능
- ✅ 링크 모드 지원
- ✅ 접근성 고려 (sr-only, aria-live)
