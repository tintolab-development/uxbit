# tinto-modal

모달 컴포넌트. 다이얼로그, 확인 창, 폼 등에 사용됩니다. 포커스 트랩, ESC 키 닫기, 배경 클릭 닫기 등 접근성 기능을 제공합니다.

---

## 빠른 시작

```html
<!-- 기본 모달 -->
<tinto-modal open>
  <h2 slot="header">모달 제목</h2>
  <p>모달 내용입니다.</p>
  <div slot="footer">
    <tinto-button>확인</tinto-button>
  </div>
</tinto-modal>

<!-- 프로그래밍 방식으로 제어 -->
<tinto-modal id="myModal">
  <p>모달 내용</p>
</tinto-modal>

<script>
  const modal = document.getElementById('myModal');
  modal.openModal(); // 모달 열기
  modal.closeModal(); // 모달 닫기
</script>
```

---

## Props

| Prop                | Type                             | Default | 설명                                                                |
| ------------------- | -------------------------------- | ------- | ------------------------------------------------------------------- |
| `open`              | `boolean`                        | `false` | 모달 열림 상태                                                      |
| `size`              | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'`  | 모달 크기                                                           |
| `show-close`        | `boolean`                        | `true`  | 닫기 버튼 표시 여부                                                 |
| `close-on-backdrop` | `boolean`                        | `true`  | 배경 클릭 시 닫기 여부                                              |
| `close-on-escape`   | `boolean`                        | `true`  | ESC 키로 닫기 여부                                                  |
| `focus-trap`        | `boolean`                        | `true`  | 포커스 트랩 활성화 여부                                             |
| `autofocus`         | `boolean`                        | `true`  | 자동 포커스 여부 (모달 열릴 때 첫 번째 포커스 가능한 요소에 포커스) |
| `described-by`      | `string`                         | -       | 모달 설명 ID (aria-describedby용)                                   |

---

## Slots

| Slot      | 설명      |
| --------- | --------- |
| `header`  | 모달 헤더 |
| (default) | 모달 본문 |
| `footer`  | 모달 푸터 |

---

## Events

| 이벤트       | Payload            | 설명             |
| ------------ | ------------------ | ---------------- |
| `tintoOpen`  | -                  | 모달 열기 이벤트 |
| `tintoClose` | `ModalCloseDetail` | 모달 닫기 이벤트 |

---

## Methods

| Method         | 설명      |
| -------------- | --------- |
| `openModal()`  | 모달 열기 |
| `closeModal()` | 모달 닫기 |

---

## 사용 예시

### Size

```html
<tinto-modal size="sm" open>
  <p>Small Modal</p>
</tinto-modal>

<tinto-modal size="md" open>
  <p>Medium Modal</p>
</tinto-modal>

<tinto-modal size="lg" open>
  <p>Large Modal</p>
</tinto-modal>

<tinto-modal size="full" open>
  <p>Full Screen Modal</p>
</tinto-modal>
```

### Slots 사용

```html
<tinto-modal open>
  <h2 slot="header">모달 제목</h2>
  <p>모달 본문 내용입니다.</p>
  <div slot="footer">
    <tinto-button variant="secondary">취소</tinto-button>
    <tinto-button>확인</tinto-button>
  </div>
</tinto-modal>
```

### 프로그래밍 방식 제어

```html
<tinto-modal id="confirmModal">
  <h2 slot="header">확인</h2>
  <p>정말 삭제하시겠습니까?</p>
  <div slot="footer">
    <tinto-button id="cancelBtn">취소</tinto-button>
    <tinto-button id="confirmBtn">확인</tinto-button>
  </div>
</tinto-modal>

<script>
  const modal = document.getElementById('confirmModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const confirmBtn = document.getElementById('confirmBtn');

  cancelBtn.addEventListener('click', () => modal.closeModal());
  confirmBtn.addEventListener('click', () => {
    // 삭제 로직
    modal.closeModal();
  });

  // 모달 열기
  modal.openModal();
</script>
```

---

## Semantic Parts (컴포넌트 구조)

이 컴포넌트는 다음과 같은 semantic parts를 제공합니다. 각 part는 `::part()` 선택자를 통해 스타일링할 수 있습니다.

### `backdrop` (배경 요소)

- **요소 타입**: `<div>`
- **설명**: 배경 요소, 모달 뒤의 어두운 배경 레이어로 포지셔닝, z-index, 배경색, 포인터 이벤트 등을 제어
- **주요 스타일 속성**: `position`, `z-index`, `background`, `pointer-events`, `inset`

### `container` (컨테이너 요소)

- **요소 타입**: `<div>`
- **설명**: 컨테이너 요소, 모달 콘텐츠를 감싸는 컨테이너로 배경색, 패딩, 둥근 모서리, 그림자, 테두리 등을 포함
- **주요 스타일 속성**: `background`, `padding`, `border-radius`, `box-shadow`, `border`, `max-width`, `max-height`

### `header` (헤더 요소)

- **요소 타입**: `<div>`
- **설명**: 헤더 요소, 모달 제목과 닫기 버튼을 포함하는 영역으로 flex 레이아웃, 정렬, 패딩, 폰트 크기, 줄 높이, 하단 테두리 등을 포함
- **주요 스타일 속성**: `display`, `padding`, `background`, `border-bottom`, `font-weight`, `font-size`, `line-height`

### `title` (제목 요소)

- **요소 타입**: `<h2>`
- **설명**: 제목 요소, 모달 제목 텍스트 스타일
- **주요 스타일 속성**: `font-size`, `font-weight`, `color`, `line-height`, `margin`

### `body` (본문 요소)

- **요소 타입**: `<div>`
- **설명**: 본문 요소, 모달의 주요 콘텐츠 영역으로 flex 비율, 최소 크기, 패딩, 오버플로우 스크롤 등을 포함
- **주요 스타일 속성**: `flex`, `min-height`, `padding`, `overflow`, `color`, `font-size`

### `footer` (푸터 요소)

- **요소 타입**: `<div>`
- **설명**: 푸터 요소, 모달 하단의 버튼 영역으로 flex 레이아웃, 리스트 스타일 리셋, 배경색, 상단 테두리, 하단 둥근 모서리 등을 포함
- **주요 스타일 속성**: `display`, `padding`, `background`, `border-top`, `border-radius`

### `close` (닫기 버튼 요소)

- **요소 타입**: `<button>`
- **설명**: 닫기 버튼 요소, 모달을 닫는 버튼으로 배경, 테두리, 패딩, 둥근 모서리, 커서, 전환 애니메이션 등을 포함
- **주요 스타일 속성**: `background`, `border`, `padding`, `border-radius`, `cursor`, `transition`

## CSS Parts 사용 예제

```css
/* 배경 스타일링 */
tinto-modal::part(backdrop) {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

/* 컨테이너 스타일링 */
tinto-modal::part(container) {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
}

/* 헤더 스타일링 */
tinto-modal::part(header) {
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

/* 제목 스타일링 */
tinto-modal::part(title) {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

/* 본문 스타일링 */
tinto-modal::part(body) {
  padding: 24px;
  color: #374151;
}

/* 푸터 스타일링 */
tinto-modal::part(footer) {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

/* 닫기 버튼 스타일링 */
tinto-modal::part(close) {
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 4px;
}
```

---

## A11y

- 포커스 트랩 자동 활성화
- ESC 키로 닫기 지원
- `aria-modal`, `aria-labelledby`, `aria-describedby` 자동 설정
- 모달 열릴 때 body 스크롤 잠금

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 78.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 70.0     | 25%      | 17.50     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 38.5     | 15%      | 5.78      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **78.0** | **100%** | **78.0**  |

#### 등급: B

#### 개선 제안

- 모든 기준을 충족합니다! 🎉

### 평가 상세

#### 일관성 (70.0점)

- Props 네이밍 일치율: 100%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 100%
- 공통 Props 사용: 4개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 5개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (38.5점)

- API 직관성: 36%
- Props 개수: 11개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 78.0점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 70.0     | 25%      | 17.50     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 38.5     | 15%      | 5.78      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **78.0** | **100%** | **78.0**  |

#### 등급: B

#### 개선 제안

- 모든 기준을 충족합니다! 🎉

### 평가 상세

#### 일관성 (70.0점)

- Props 네이밍 일치율: 100%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 100%
- 공통 Props 사용: 4개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 5개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (38.5점)

- API 직관성: 36%
- Props 개수: 11개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 65.1점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 90.0     | 20%      | 18.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 23.9     | 15%      | 3.58      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **65.1** | **100%** | **65.1**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled, loading)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (90.0점)

- 문서화: ✅
- 예제 코드: 5개
- 접근성(a11y): ✅
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (23.9점)

- API 직관성: 22%
- Props 개수: 9개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 52.1점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 17.5     | 25%      | 4.38      |
| 재사용성 (Reusability) | 65.0     | 20%      | 13.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 20.0     | 15%      | 3.00      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **52.1** | **100%** | **52.1**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, disabled, loading)
- 재사용성: variant prop 추가 고려

### 평가 상세

#### 일관성 (17.5점)

- Props 네이밍 일치율: 25%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 25%
- 공통 Props 사용: 1개

#### 재사용성 (65.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 5개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (20.0점)

- API 직관성: 13%
- Props 개수: 8개
- 학습 곡선: 높음
- 개발자 경험: 50%

#### 표준 준수 (80.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ❌

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 52.1점  
**등급**: D

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 17.5     | 25%      | 4.38      |
| 재사용성 (Reusability) | 65.0     | 20%      | 13.00     |
| 완성도 (Completeness)  | 75.0     | 20%      | 15.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 20.0     | 15%      | 3.00      |
| 표준 준수 (Standards)  | 80.0     | 5%       | 4.00      |
| **종합**               | **52.1** | **100%** | **52.1**  |

#### 등급: D

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (variant, disabled, loading)
- 재사용성: variant prop 추가 고려

### 평가 상세

#### 일관성 (17.5점)

- Props 네이밍 일치율: 25%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 25%
- 공통 Props 사용: 1개

#### 재사용성 (65.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ❌
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (75.0점)

- 문서화: ✅
- 예제 코드: 5개
- 접근성(a11y): ❌
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (20.0점)

- API 직관성: 13%
- Props 개수: 8개
- 학습 곡선: 높음
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
   "tinto-modal 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
