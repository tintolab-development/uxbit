# tinto-pagination

페이지네이션 컴포넌트는 대량의 데이터를 여러 페이지로 나누어 탐색할 수 있도록 도와줍니다.

## 주요 기능

- ✅ 페이지 번호 표시
- ✅ 이전/다음 버튼
- ✅ 첫 페이지/마지막 페이지 이동
- ✅ 현재 페이지 표시
- ✅ 총 페이지 수 표시
- ✅ 페이지 크기 선택 (선택적)
- ✅ 빠른 이동 입력 필드 (선택적)
- ✅ 간단한 모드 (이전/다음만)
- ✅ 접근성 (ARIA)

## Props

| Prop              | 타입                                 | 기본값      | 설명                             |
| ----------------- | ------------------------------------ | ----------- | -------------------------------- |
| `variant`         | `'default' \| 'simple' \| 'compact'` | `'default'` | 페이지네이션 스타일 variant      |
| `size`            | `'sm' \| 'md' \| 'lg'`               | `'md'`      | 버튼 크기                        |
| `align`           | `'start' \| 'center' \| 'end'`       | `'start'`   | 정렬                             |
| `current`         | `number`                             | `1`         | 현재 페이지 (1부터 시작)         |
| `total`           | `number`                             | `1`         | 총 페이지 수                     |
| `pageSize`        | `number`                             | `undefined` | 페이지 크기 (선택적)             |
| `showSizeChanger` | `boolean`                            | `false`     | 페이지 크기 선택기 표시          |
| `showQuickJumper` | `boolean`                            | `false`     | 빠른 이동 입력 필드 표시         |
| `showTotal`       | `boolean`                            | `false`     | 총 항목 수 표시                  |
| `totalItems`      | `number`                             | `undefined` | 총 항목 수 (showTotal일 때 사용) |
| `disabled`        | `boolean`                            | `false`     | 비활성화                         |

## Events

| Event                 | Payload                               | 설명                     |
| --------------------- | ------------------------------------- | ------------------------ |
| `tintoChange`         | `{ page: number; pageSize?: number }` | 페이지 변경 시 발생      |
| `tintoPageSizeChange` | `{ pageSize: number }`                | 페이지 크기 변경 시 발생 |

## Methods

| Method     | 파라미터       | 반환값          | 설명               |
| ---------- | -------------- | --------------- | ------------------ |
| `goToPage` | `page: number` | `Promise<void>` | 특정 페이지로 이동 |

## 사용 예제

### 기본 사용

```html
<tinto-pagination current="1" total="10"></tinto-pagination>
```

### Simple Variant

```html
<tinto-pagination variant="simple" current="5" total="20"></tinto-pagination>
```

### 총 항목 수 표시

```html
<tinto-pagination current="1" total="10" show-total total-items="150"></tinto-pagination>
```

### 페이지 크기 선택기

```html
<tinto-pagination current="1" total="10" page-size="20" show-size-changer></tinto-pagination>
```

### 빠른 이동

```html
<tinto-pagination current="1" total="50" show-quick-jumper></tinto-pagination>
```

### JavaScript API 사용

```javascript
const pagination = document.querySelector('tinto-pagination');

// 특정 페이지로 이동
await pagination.goToPage(5);

// 페이지 변경 이벤트 리스너
pagination.addEventListener('tintoChange', (event) => {
  console.log('페이지 변경:', event.detail.page);
});

// 페이지 크기 변경 이벤트 리스너
pagination.addEventListener('tintoPageSizeChange', (event) => {
  console.log('페이지 크기 변경:', event.detail.pageSize);
});
```

## 스타일링

CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

```css
tinto-pagination {
  --t-pagination-button-bg-active: #111827;
  --t-pagination-button-color-active: #ffffff;
  --t-pagination-button-padding: 8px 16px;
  --t-pagination-button-font-size: 16px;
}
```

### 주요 CSS 변수

- `--t-pagination-button-bg`: 페이지 버튼 배경색
- `--t-pagination-button-bg-active`: 활성 페이지 버튼 배경색
- `--t-pagination-button-color-active`: 활성 페이지 버튼 텍스트 색상
- `--t-pagination-button-padding`: 페이지 버튼 패딩
- `--t-pagination-button-font-size`: 페이지 버튼 폰트 크기
- `--t-pagination-button-min-size`: 페이지 버튼 최소 크기 (기본: 44px)

## 접근성

- ARIA 속성: `aria-label`, `aria-current="page"`
- 키보드 네비게이션:
  - `Tab`: 버튼 간 이동
  - `Enter/Space`: 페이지 이동
- 스크린 리더: "페이지 X of Y" 형식
- 포커스 관리: 페이지 변경 시 포커스 유지

## 반응형 디자인

- **모바일 (< 768px)**: 간단한 모드 (이전/다음만) 또는 페이지 번호 축소
- **데스크탑 (>= 1920px)**: 전체 페이지 번호 표시
- **터치 타겟**: 최소 44x44px (WCAG 2.5.5)

## 버전 정보

- **버전**: 1.0.0
- **최초 추가**: 2025년
