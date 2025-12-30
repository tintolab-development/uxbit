# tinto-form-input

폼 입력 필드 컴포넌트. 다양한 입력 타입(text, email, password, number 등)을 지원하며, 상태 표시(error, success, warning) 기능을 제공합니다.

---

## 빠른 시작

```html
<!-- 기본 입력 필드 -->
<tinto-form-input name="username" placeholder="사용자명을 입력하세요" />

<!-- 이메일 입력 필드 -->
<tinto-form-input type="email" name="email" placeholder="이메일을 입력하세요" required />

<!-- 에러 상태 -->
<tinto-form-input
  name="password"
  type="password"
  state="error"
  placeholder="비밀번호를 입력하세요"
/>
```

---

## Props

### 기본 Props

| Prop           | Type                                                                                         | Default     | 설명                               |
| -------------- | -------------------------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| `type`         | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search' \| 'date' \| ...` | `'text'`    | 입력 필드 타입                     |
| `size`         | `'sm' \| 'md' \| 'lg'`                                                                       | `'md'`      | 입력 필드 크기                     |
| `variant`      | `'default' \| 'outline' \| 'filled' \| 'underline'`                                          | `'default'` | 입력 필드 variant                  |
| `state`        | `'default' \| 'error' \| 'success' \| 'warning'`                                             | `'default'` | 입력 필드 상태                     |
| `value`        | `string`                                                                                     | `''`        | 입력 값                            |
| `placeholder`  | `string`                                                                                     | -           | 플레이스홀더                       |
| `name`         | `string`                                                                                     | -           | 필드 이름 (form 제출 시 사용)      |
| `required`     | `boolean`                                                                                    | `false`     | 필수 입력 여부                     |
| `disabled`     | `boolean`                                                                                    | `false`     | 비활성화 여부                      |
| `readonly`     | `boolean`                                                                                    | `false`     | 읽기 전용 여부                     |
| `autofocus`    | `boolean`                                                                                    | `false`     | 자동 포커스 여부                   |
| `autocomplete` | `string`                                                                                     | -           | 자동 완성 (HTML autocomplete 속성) |
| `maxlength`    | `number`                                                                                     | -           | 최대 길이                          |
| `minlength`    | `number`                                                                                     | -           | 최소 길이                          |
| `min`          | `number`                                                                                     | -           | 최소값 (number 타입일 때)          |
| `max`          | `number`                                                                                     | -           | 최대값 (number 타입일 때)          |

---

## Slots

| Slot     | 설명               |
| -------- | ------------------ |
| `prefix` | 선행 아이콘/텍스트 |
| `suffix` | 후행 아이콘/텍스트 |

---

## Events

| 이벤트       | Payload                 | 설명                |
| ------------ | ----------------------- | ------------------- |
| `tintoInput` | `FormInputChangeDetail` | 입력 값 변경 이벤트 |
| `tintoFocus` | `FormInputFocusDetail`  | 포커스 이벤트       |
| `tintoBlur`  | `FormInputFocusDetail`  | 블러 이벤트         |

---

## Methods

| Method    | 설명                      |
| --------- | ------------------------- |
| `focus()` | 입력 필드에 포커스 설정   |
| `blur()`  | 입력 필드에서 포커스 제거 |

---

## 사용 예시

### Variant

```html
<tinto-form-input variant="default" placeholder="Default" />
<tinto-form-input variant="outline" placeholder="Outline" />
<tinto-form-input variant="filled" placeholder="Filled" />
<tinto-form-input variant="underline" placeholder="Underline" />
```

### Size

```html
<tinto-form-input size="sm" placeholder="Small" />
<tinto-form-input size="md" placeholder="Medium" />
<tinto-form-input size="lg" placeholder="Large" />
```

### State

```html
<tinto-form-input state="default" placeholder="Default" />
<tinto-form-input state="error" placeholder="Error" />
<tinto-form-input state="success" placeholder="Success" />
<tinto-form-input state="warning" placeholder="Warning" />
```

### 다양한 타입

```html
<tinto-form-input type="text" placeholder="텍스트" />
<tinto-form-input type="email" placeholder="이메일" />
<tinto-form-input type="password" placeholder="비밀번호" />
<tinto-form-input type="number" placeholder="숫자" />
<tinto-form-input type="tel" placeholder="전화번호" />
<tinto-form-input type="date" />
<tinto-form-input type="time" />
```

---

## A11y

- ✅ `aria-invalid` 자동 설정 (에러 상태일 때)
- ✅ `aria-required` 자동 설정 (required일 때)
- ✅ `aria-describedby` 자동 설정 (도움말/에러 메시지)
- ✅ 메시지에 `role="alert"` 또는 `role="status"` 자동 설정
- ✅ `aria-live` 속성 자동 설정 (에러: assertive, 일반: polite)
- ✅ label과 input 연결 자동 처리
- ✅ 키보드 접근성 지원
- ✅ 스크린 리더 지원
- ✅ 상태에 따른 접근성 피드백 제공

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.5점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 37.8     | 15%      | 5.67      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.5** | **100%** | **73.5**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (37.8점)

- API 직관성: 12%
- Props 개수: 25개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.5점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 37.8     | 15%      | 5.67      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.5** | **100%** | **73.5**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (37.8점)

- API 직관성: 12%
- Props 개수: 25개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.5점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 37.8     | 15%      | 5.67      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.5** | **100%** | **73.5**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (37.8점)

- API 직관성: 12%
- Props 개수: 25개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.5점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 37.8     | 15%      | 5.67      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.5** | **100%** | **73.5**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (37.8점)

- API 직관성: 12%
- Props 개수: 25개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

## 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 73.5점  
**등급**: B

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 52.5     | 25%      | 13.13     |
| 재사용성 (Reusability) | 85.0     | 20%      | 17.00     |
| 완성도 (Completeness)  | 100.0    | 20%      | 20.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 37.8     | 15%      | 5.67      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **73.5** | **100%** | **73.5**  |

#### 등급: B

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (loading)
- 사용성: Props 개수 줄이기 (20개 이하 권장)

### 평가 상세

#### 일관성 (52.5점)

- Props 네이밍 일치율: 75%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 75%
- 공통 Props 사용: 3개

#### 재사용성 (85.0점)

- 필수 Props 비율: 0%
- 선택 Props 비율: 100%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (100.0점)

- 문서화: ✅
- 예제 코드: 6개
- 접근성(a11y): ✅
- 에러 처리: ✅
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (37.8점)

- API 직관성: 12%
- Props 개수: 25개
- 학습 곡선: 보통
- 개발자 경험: 50%

#### 표준 준수 (100.0점)

- Web Components 표준: ✅
- Shadow DOM: ✅
- 시맨틱 HTML: ✅
- ARIA 가이드라인: ✅

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
   "tinto-form-input 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
