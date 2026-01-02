# tinto-alert

알림 컴포넌트는 사용자에게 중요한 정보, 경고, 오류, 성공 메시지를 표시하는 데 사용됩니다.

## 주요 기능

- ✅ 타입별 스타일 (success, error, warning, info)
- ✅ 아이콘 표시 (선택적)
- ✅ 닫기 버튼 (선택적)
- ✅ 자동 닫기 (선택적, 시간 설정)
- ✅ 제목 지원 (선택적)
- ✅ 액션 버튼 슬롯
- ✅ 접근성 (ARIA)
- ✅ 다양한 variant 지원 (default, filled, outlined)

## Props

| Prop         | 타입                                          | 기본값      | 설명                |
| ------------ | --------------------------------------------- | ----------- | ------------------- |
| `type`       | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'`    | 알림 타입           |
| `variant`    | `'default' \| 'filled' \| 'outlined'`         | `'default'` | 알림 스타일 variant |
| `size`       | `'sm' \| 'md' \| 'lg'`                        | `'md'`      | 크기                |
| `closable`   | `boolean`                                     | `false`     | 닫기 버튼 표시      |
| `autoClose`  | `boolean`                                     | `false`     | 자동 닫기           |
| `closeAfter` | `number`                                      | `5000`      | 자동 닫기 시간 (ms) |
| `showIcon`   | `boolean`                                     | `true`      | 아이콘 표시         |
| `alertTitle` | `string`                                      | `undefined` | 제목 (선택적)       |

## Events

| Event         | Payload              | 설명                   |
| ------------- | -------------------- | ---------------------- |
| `tintoClose`  | -                    | 닫기 버튼 클릭 시 발생 |
| `tintoAction` | `{ action: string }` | 액션 버튼 클릭 시 발생 |

## Methods

| Method  | 파라미터 | 반환값          | 설명      |
| ------- | -------- | --------------- | --------- |
| `close` | -        | `Promise<void>` | 알림 닫기 |
| `show`  | -        | `Promise<void>` | 알림 표시 |

## 사용 예제

### 기본 사용

```html
<tinto-alert type="info"> 이것은 기본 알림 메시지입니다. </tinto-alert>
```

### Success 타입

```html
<tinto-alert type="success" alert-title="성공"> 작업이 성공적으로 완료되었습니다. </tinto-alert>
```

### Error 타입

```html
<tinto-alert type="error" alert-title="오류" closable>
  오류가 발생했습니다. 다시 시도해주세요.
</tinto-alert>
```

### Warning 타입

```html
<tinto-alert type="warning" alert-title="경고"> 이 작업은 되돌릴 수 없습니다. </tinto-alert>
```

### 자동 닫기

```html
<tinto-alert type="success" auto-close close-after="3000">
  작업이 완료되었습니다. 3초 후 자동으로 닫힙니다.
</tinto-alert>
```

### 액션 버튼

```html
<tinto-alert type="info" alert-title="알림">
  액션 버튼이 있는 알림입니다.
  <tinto-button slot="action" size="sm" variant="primary"> 확인 </tinto-button>
</tinto-alert>
```

### Filled Variant

```html
<tinto-alert type="success" variant="filled"> 배경색이 채워진 알림입니다. </tinto-alert>
```

### Outlined Variant

```html
<tinto-alert type="info" variant="outlined"> 테두리만 있는 알림입니다. </tinto-alert>
```

### JavaScript API 사용

```javascript
const alert = document.querySelector('tinto-alert');

// 알림 닫기
await alert.close();

// 알림 표시
await alert.show();

// 닫기 이벤트 리스너
alert.addEventListener('tintoClose', () => {
  console.log('알림이 닫혔습니다.');
});

// 액션 이벤트 리스너
alert.addEventListener('tintoAction', (event) => {
  console.log('액션:', event.detail.action);
});
```

## Slots

| Slot     | 설명                                       |
| -------- | ------------------------------------------ |
| `title`  | 제목 슬롯 (alertTitle prop 대신 사용 가능) |
| `action` | 액션 버튼 슬롯                             |

## 스타일링

CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

```css
tinto-alert {
  --t-alert-success-bg: #f0fdf4;
  --t-alert-success-border: 1px solid #86efac;
  --t-alert-success-color: #166534;
  --t-alert-padding: 16px 24px;
  --t-alert-radius: 12px;
}
```

### 주요 CSS 변수

#### Success 타입

- `--t-alert-success-bg`: 배경색
- `--t-alert-success-border`: 테두리
- `--t-alert-success-color`: 텍스트 색상
- `--t-alert-success-icon-color`: 아이콘 색상

#### Error 타입

- `--t-alert-error-bg`: 배경색
- `--t-alert-error-border`: 테두리
- `--t-alert-error-color`: 텍스트 색상
- `--t-alert-error-icon-color`: 아이콘 색상

#### Warning 타입

- `--t-alert-warning-bg`: 배경색
- `--t-alert-warning-border`: 테두리
- `--t-alert-warning-color`: 텍스트 색상
- `--t-alert-warning-icon-color`: 아이콘 색상

#### Info 타입

- `--t-alert-info-bg`: 배경색
- `--t-alert-info-border`: 테두리
- `--t-alert-info-color`: 텍스트 색상
- `--t-alert-info-icon-color`: 아이콘 색상

#### 공통

- `--t-alert-padding`: 패딩
- `--t-alert-radius`: 테두리 반경
- `--t-alert-icon-size`: 아이콘 크기
- `--t-alert-close-size`: 닫기 버튼 크기
- `--t-alert-close-min-size`: 닫기 버튼 최소 크기 (기본: 44px)

## 접근성

- ARIA 속성:
  - `role="alert"` (error 타입)
  - `role="status"` (기타 타입)
  - `aria-live`: 동적 콘텐츠 업데이트
- 키보드 네비게이션:
  - `ESC`: 닫기 (closable일 때)
- 스크린 리더: 타입 및 메시지 읽기
- 색상 대비: WCAG AA 이상 (4.5:1)

## 반응형 디자인

- **모바일 (< 768px)**: 전체 너비, 적절한 패딩
- **데스크탑 (>= 1920px)**: 최대 너비 제한 (선택적)
- **터치 타겟**: 닫기 버튼 최소 44x44px (WCAG 2.5.5)

## 버전 정보

- **버전**: 1.0.0
- **최초 추가**: 2025년
