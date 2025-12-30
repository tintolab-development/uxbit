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

## A11y

- 포커스 트랩 자동 활성화
- ESC 키로 닫기 지원
- `aria-modal`, `aria-labelledby`, `aria-describedby` 자동 설정
- 모달 열릴 때 body 스크롤 잠금

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
   "tinto-modal 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
