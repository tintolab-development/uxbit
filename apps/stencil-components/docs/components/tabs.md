# tinto-tabs

탭 컴포넌트는 콘텐츠를 여러 섹션으로 나누어 표시하는 데 사용됩니다. 사용자는 탭을 클릭하여 다른 콘텐츠 섹션으로 전환할 수 있습니다.

## 주요 기능

- ✅ 탭 전환 (클릭/키보드)
- ✅ 활성 탭 표시
- ✅ 콘텐츠 슬롯 기반 렌더링
- ✅ 키보드 네비게이션 (Arrow keys, Home, End)
- ✅ 접근성 (ARIA)
- ✅ 다양한 variant 지원 (default, underline, pills, enclosed)
- ✅ 수평/수직 방향 지원
- ✅ 반응형 디자인

## Props

| Prop          | 타입                                                | 기본값         | 설명                      |
| ------------- | --------------------------------------------------- | -------------- | ------------------------- |
| `variant`     | `'default' \| 'underline' \| 'pills' \| 'enclosed'` | `'default'`    | 탭 스타일 variant         |
| `size`        | `'sm' \| 'md' \| 'lg'`                              | `'md'`         | 탭 크기                   |
| `orientation` | `'horizontal' \| 'vertical'`                        | `'horizontal'` | 탭 방향                   |
| `position`    | `'start' \| 'center' \| 'end'`                      | `'start'`      | 탭 정렬                   |
| `defaultTab`  | `string`                                            | `undefined`    | 기본 활성 탭 ID           |
| `disabled`    | `boolean`                                           | `false`        | 전체 비활성화             |
| `scrollable`  | `boolean`                                           | `false`        | 스크롤 가능 여부 (모바일) |

## Events

| Event           | Payload                                     | 설명            |
| --------------- | ------------------------------------------- | --------------- |
| `tintoChange`   | `{ tabId: string; previousTabId?: string }` | 탭 변경 시 발생 |
| `tintoTabClick` | `{ tabId: string; event: MouseEvent }`      | 탭 클릭 시 발생 |

## Methods

| Method         | 파라미터        | 반환값                    | 설명                 |
| -------------- | --------------- | ------------------------- | -------------------- |
| `setActiveTab` | `tabId: string` | `Promise<void>`           | 특정 탭 활성화       |
| `getActiveTab` | -               | `Promise<string \| null>` | 현재 활성 탭 ID 반환 |

## 사용 예제

### 기본 사용

```html
<tinto-tabs>
  <tinto-tab-panel tab-id="tab1" label="탭 1">
    <p>탭 1의 콘텐츠입니다.</p>
  </tinto-tab-panel>
  <tinto-tab-panel tab-id="tab2" label="탭 2">
    <p>탭 2의 콘텐츠입니다.</p>
  </tinto-tab-panel>
  <tinto-tab-panel tab-id="tab3" label="탭 3">
    <p>탭 3의 콘텐츠입니다.</p>
  </tinto-tab-panel>
</tinto-tabs>
```

### Underline Variant

```html
<tinto-tabs variant="underline">
  <tinto-tab-panel tab-id="tab1" label="홈">
    <p>홈 콘텐츠</p>
  </tinto-tab-panel>
  <tinto-tab-panel tab-id="tab2" label="검색">
    <p>검색 콘텐츠</p>
  </tinto-tab-panel>
</tinto-tabs>
```

### 수직 방향

```html
<tinto-tabs orientation="vertical" variant="underline">
  <tinto-tab-panel tab-id="tab1" label="설정">
    <p>설정 콘텐츠</p>
  </tinto-tab-panel>
  <tinto-tab-panel tab-id="tab2" label="프로필">
    <p>프로필 콘텐츠</p>
  </tinto-tab-panel>
</tinto-tabs>
```

### JavaScript API 사용

```javascript
const tabs = document.querySelector('tinto-tabs');

// 특정 탭 활성화
await tabs.setActiveTab('tab2');

// 현재 활성 탭 가져오기
const activeTab = await tabs.getActiveTab();
console.log(activeTab); // "tab2"

// 탭 변경 이벤트 리스너
tabs.addEventListener('tintoChange', (event) => {
  console.log('탭 변경:', event.detail.tabId);
});
```

## tinto-tab-panel

탭 패널은 `tinto-tabs` 내부에서 사용되는 개별 탭 콘텐츠 컨테이너입니다.

### Props

| Prop       | 타입      | 기본값   | 설명                |
| ---------- | --------- | -------- | ------------------- |
| `tabId`    | `string`  | **필수** | 탭 ID (고유 식별자) |
| `label`    | `string`  | **필수** | 탭 라벨             |
| `disabled` | `boolean` | `false`  | 비활성화 여부       |

## 스타일링

CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

```css
tinto-tabs {
  --t-tab-bg-active: #f5f5f5;
  --t-tab-color-active: #111827;
  --t-tab-padding: 12px 24px;
  --t-tab-font-size: 16px;
}
```

### 주요 CSS 변수

- `--t-tabs-bg`: 탭 컨테이너 배경색
- `--t-tab-bg-active`: 활성 탭 배경색
- `--t-tab-color-active`: 활성 탭 텍스트 색상
- `--t-tab-padding`: 탭 패딩
- `--t-tab-font-size`: 탭 폰트 크기
- `--t-tab-min-height`: 탭 최소 높이 (기본: 44px)

## 접근성

- ARIA 속성: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- 키보드 네비게이션:
  - `Arrow Left/Right` (수평): 이전/다음 탭
  - `Arrow Up/Down` (수직): 이전/다음 탭
  - `Home`: 첫 번째 탭
  - `End`: 마지막 탭
  - `Enter/Space`: 탭 활성화
- 스크린 리더: 탭 라벨 및 상태 읽기

## 반응형 디자인

- **모바일 (< 768px)**: 가로 스크롤 가능, 탭 최소 너비 80px
- **데스크탑 (>= 1920px)**: 전체 너비 또는 고정 너비
- **터치 타겟**: 최소 44x44px (WCAG 2.5.5)

## 버전 정보

- **버전**: 1.0.0
- **최초 추가**: 2025년
