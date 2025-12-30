# tinto-toast

토스트 컴포넌트. 알림 메시지를 표시합니다. Success, Error, Info, Warning 등 다양한 variant를 지원하며, 자동 닫기 기능을 제공합니다.

---

## 빠른 시작

```html
<!-- 기본 토스트 -->
<tinto-toast message="알림 메시지입니다" open />

<!-- Success 토스트 -->
<tinto-toast message="성공적으로 저장되었습니다" variant="success" open />

<!-- 자동 닫기 설정 -->
<tinto-toast message="3초 후 자동으로 닫힙니다" duration="3000" open />

<!-- 프로그래밍 방식으로 제어 -->
<tinto-toast id="myToast" message="프로그래밍 방식으로 제어" />

<script>
  const toast = document.getElementById('myToast');
  toast.show(); // 토스트 표시
  toast.hide(); // 토스트 숨기기
</script>
```

---

## Props

| Prop         | Type                                                                                              | Default           | 설명                                       |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------ |
| `message`    | `string`                                                                                          | -                 | 토스트 메시지 (필수)                       |
| `variant`    | `'success' \| 'error' \| 'info' \| 'warning'`                                                     | `'info'`          | 토스트 variant                             |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                                            | `'md'`            | 토스트 크기                                |
| `open`       | `boolean`                                                                                         | `false`           | 표시 여부                                  |
| `duration`   | `number`                                                                                          | `3000`            | 자동 닫기 시간 (ms, 0이면 자동 닫기 안 함) |
| `position`   | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'bottom-center'` | 토스트 위치                                |
| `show-close` | `boolean`                                                                                         | `true`            | 닫기 버튼 표시 여부                        |

---

## Events

| 이벤트       | Payload | 설명               |
| ------------ | ------- | ------------------ |
| `tintoClose` | -       | 토스트 닫기 이벤트 |

---

## Methods

| Method   | 설명          |
| -------- | ------------- |
| `show()` | 토스트 표시   |
| `hide()` | 토스트 숨기기 |

---

## 사용 예시

### Variant

```html
<tinto-toast message="성공 메시지" variant="success" open />
<tinto-toast message="에러 메시지" variant="error" open />
<tinto-toast message="정보 메시지" variant="info" open />
<tinto-toast message="경고 메시지" variant="warning" open />
```

### Size

```html
<tinto-toast message="Small Toast" size="sm" open />
<tinto-toast message="Medium Toast" size="md" open />
<tinto-toast message="Large Toast" size="lg" open />
```

### Position

```html
<tinto-toast message="Top Left" position="top-left" open />
<tinto-toast message="Top Center" position="top-center" open />
<tinto-toast message="Top Right" position="top-right" open />
<tinto-toast message="Bottom Left" position="bottom-left" open />
<tinto-toast message="Bottom Center" position="bottom-center" open />
<tinto-toast message="Bottom Right" position="bottom-right" open />
```

### 자동 닫기

```html
<!-- 3초 후 자동 닫기 -->
<tinto-toast message="3초 후 닫힙니다" duration="3000" open />

<!-- 자동 닫기 안 함 -->
<tinto-toast message="수동으로 닫아야 합니다" duration="0" open />
```

### 프로그래밍 방식 제어

```html
<tinto-toast id="notification" message="알림 메시지" />

<script>
  const toast = document.getElementById('notification');

  // 토스트 표시
  toast.show();

  // 5초 후 자동 닫기
  setTimeout(() => {
    toast.hide();
  }, 5000);

  // 닫기 이벤트 리스너
  toast.addEventListener('tintoClose', () => {
    console.log('토스트가 닫혔습니다');
  });
</script>
```

---

## A11y

- `role="alert"` 또는 `role="status"` 자동 설정 (variant에 따라)
- 스크린 리더 사용자에게 알림 메시지 전달
- 키보드 접근성 지원 (닫기 버튼)

---

## 품질 평가

### 평가 결과

**평가일**: 2025. 12. 30.  
**종합 점수**: 64.0점  
**등급**: C

#### 점수 상세

| 지표                   | 점수     | 가중치   | 가중 점수 |
| ---------------------- | -------- | -------- | --------- |
| 일관성 (Consistency)   | 35.0     | 25%      | 8.75      |
| 재사용성 (Reusability) | 77.9     | 20%      | 15.57     |
| 완성도 (Completeness)  | 90.0     | 20%      | 18.00     |
| 성능 (Performance)     | 85.0     | 15%      | 12.75     |
| 사용성 (Usability)     | 26.4     | 15%      | 3.96      |
| 표준 준수 (Standards)  | 100.0    | 5%       | 5.00      |
| **종합**               | **64.0** | **100%** | **64.0**  |

#### 등급: C

#### 개선 제안

- 일관성: 공통 Props 추가 고려 (disabled, loading)

### 평가 상세

#### 일관성 (35.0점)

- Props 네이밍 일치율: 50%
- 이벤트 네이밍 패턴: 0%
- 토큰 사용 일치율: 50%
- 공통 Props 사용: 2개

#### 재사용성 (77.9점)

- 필수 Props 비율: 14%
- 선택 Props 비율: 86%
- variant 지원: ✅
- size 지원: ✅
- Slots 지원: ❌

#### 완성도 (90.0점)

- 문서화: ✅
- 예제 코드: 7개
- 접근성(a11y): ✅
- 에러 처리: ❌
- TypeScript 타입: 1%

#### 성능 (85.0점)

- 기본 점수 (런타임 측정 필요)

#### 사용성 (26.4점)

- API 직관성: 29%
- Props 개수: 7개
- 학습 곡선: 높음
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
   "tinto-toast 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
