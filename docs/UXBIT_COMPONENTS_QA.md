# UXBIT 컴포넌트 프롬프트 질문 답변 문서

이 문서는 실제 대화에서 나온 질문과 답변을 정리한 문서입니다.

---

## Q1: UXBIT 컴포넌트 목록을 보여줘

**질문**: "UXBIT 컴포넌트 목록을 보여줘"

**답변**:

UXBIT 컴포넌트 목록입니다. 총 **17개**의 컴포넌트가 있습니다:

1. **`tinto-app-route`** - 라우팅 컴포넌트 (60개 속성)

2. **`tinto-badge`** - 배지 컴포넌트 (7개 속성)

3. **`tinto-button`** - 버튼 컴포넌트 (19개 속성, 2개 이벤트)

4. **`tinto-card`** - 카드 컴포넌트 (17개 속성, 1개 이벤트)

5. **`tinto-carousel`** - 캐러셀 컴포넌트
   - 터치/스와이프 슬라이드 지원
   - 네비게이션 버튼 (옵션)
   - 인디케이터 (옵션)
   - 자동 재생 (옵션)
   - 키보드 네비게이션 지원
   - (18개 속성, 3개 이벤트, 3개 메서드)

6. **`tinto-filter`** - 필터 컴포넌트 (11개 속성, 2개 이벤트)

7. **`tinto-form-input`** - 폼 입력 컴포넌트 (25개 속성, 4개 이벤트, 3개 메서드)

8. **`tinto-image`** - 이미지 컴포넌트
   - 이미지/미디어 속성 + 간단한 애니메이션 (spin/float/wobble/pulse)
   - 플레이스홀더가 있으면 메인 이미지는 기본적으로 즉시 로드 (빠른 교체)
   - rounded="oval" => 상단 모서리만 둥글게 (하단 모서리는 사각형)
   - (38개 속성, 3개 이벤트)

9. **`tinto-loading`** - 로딩 컴포넌트 (4개 속성)

10. **`tinto-modal`** - 모달 컴포넌트 (8개 속성, 2개 이벤트, 2개 메서드)

11. **`tinto-navigation`** - 네비게이션 컴포넌트 (3개 속성, 1개 이벤트)

12. **`tinto-search-bar`** - 검색 바 컴포넌트 (11개 속성, 3개 이벤트, 2개 메서드)

13. **`tinto-section`** - 섹션 컴포넌트 (15개 속성)

14. **`tinto-sort`** - 정렬 컴포넌트 (5개 속성, 1개 이벤트)

15. **`tinto-toast`** - 토스트 컴포넌트 (6개 속성, 1개 이벤트, 2개 메서드)

16. **`tinto-typography`** - 타이포그래피 컴포넌트 (28개 속성)

17. **`tinto-wrapper`** - 래퍼 컴포넌트 (27개 속성)

---

## Q2: 버튼 컴포넌트를 검색해줘

**질문**: "버튼 컴포넌트를 검색해줘"

**답변**:

`tinto-button` 컴포넌트입니다.

모바일 퍼스트 버튼 컴포넌트. Variant/Size/Token 기반 스타일링과 링크·폼·토글·로딩 모드를 지원합니다.

### 기본 정보

- **태그명**: `tinto-button`
- **캡슐화**: Shadow DOM
- **속성 수**: 19개
- **이벤트 수**: 2개
- **파일 경로**: `src/components/button/button.tsx`

---

## Q3: tinto-button 컴포넌트의 상세 정보를 알려줘

**질문**: "tinto-button 컴포넌트의 상세 정보를 알려줘"

**답변**:

`tinto-button` 컴포넌트 상세 정보입니다.

### 기본 정보

- **태그명**: `tinto-button`
- **캡슐화**: Shadow DOM
- **파일 위치**: `apps/stencil-components/src/components/button/button.tsx`
- **스타일**: `button.css`
- **타입 정의**: `button.types.ts`

### 속성 (Props) 상세

#### 1. 시각/레이아웃 속성

- `variant`: `'primary' | 'secondary' | 'tertiary'` (기본값: `'primary'`) - 버튼 스타일 변형
- `size`: `'sm' | 'md' | 'lg'` (기본값: `'md'`) - 버튼 크기
- `pill`: `boolean` (기본값: `false`) - 완전 라운드 모양
- `block`: `boolean` (기본값: `false`) - 가로 100% 너비
- `elevated`: `boolean` (기본값: `false`) - 그림자 효과
- `outline`: `boolean` (기본값: `false`) - 윤곽선 스타일
- `radius`: `string` (선택) - 커스텀 border-radius (숫자만 입력 시 `px` 자동 추가)

#### 2. 동작/상태 속성

- `disabled`: `boolean` (기본값: `false`) - 비활성화 상태
- `loading`: `boolean` (기본값: `false`) - 로딩 상태 (스피너 표시 + 클릭 막기)
- `toggle`: `boolean` (기본값: `false`) - 토글 버튼 모드
- `pressed`: `boolean` (기본값: `false`, mutable) - 토글 버튼의 눌림 상태
- `type`: `'button' | 'submit' | 'reset'` (기본값: `'button'`) - 폼 제출/리셋 동작
- `href`: `string` (선택) - 링크 모드일 때 이동할 URL
- `target`: `'_self' | '_blank' | '_parent' | '_top'` (선택) - 링크 타겟 (href 지정 시)

#### 3. 타이포그래피 속성

- `text-family`: 폰트 패밀리 토큰 또는 문자열
  - 토큰: `'system' | 'pretendard' | 'paperlogy' | 'clash-display' | 'climate-crisis'`
- `text-size`: 폰트 크기 토큰 또는 문자열
  - 토큰: `'sm' | 'md' | 'lg' | 'xl'` → `sm=16px, md=20px, lg=40px, xl=64px`
- `text-weight`: 폰트 두께 토큰 또는 문자열
  - 토큰: `'regular' | 'medium' | 'semibold' | 'bold' | 'black'` → `400, 500, 600, 700, 900`
- `text-color`: `string` - 텍스트 색상

#### 4. 라벨 속성

- `label`: `string` (선택) - 슬롯 대신 사용 가능

### 이벤트

1. **`tintoClick`** - 클릭 이벤트 (원본 MouseEvent 전달)
   - Payload: `{ originalEvent: MouseEvent }`

2. **`tintoToggle`** - 토글 상태 변경 이벤트 (toggle 모드)
   - Payload: `{ pressed: boolean }`

### Slots

- **`prefix`** - 선행 아이콘/배지
- **(default)** - 라벨 텍스트 (또는 `label` prop 사용)
- **`suffix`** - 후행 아이콘

### CSS Parts

외부에서 `::part()` 선택자로 스타일 오버라이드 가능:

- `part="button"`: 버튼 요소
- `part="spinner"`: 로딩 스피너
- `part="prefix"`: 접두사 슬롯
- `part="label"`: 라벨 텍스트
- `part="suffix"`: 접미사 슬롯

### CSS 변수 (Custom Properties)

#### 컨테이너 변수

- `--t-button-bg`: 배경색
- `--t-button-fg`: 전경색
- `--t-button-border`: 테두리
- `--t-button-radius`: 반경
- `--t-button-px`, `--t-button-py`: 패딩
- `--t-button-w`: 너비
- `--t-button-ring`: 포커스 링
- `--t-button-variant-radius`: Variant별 기본 반경

#### 라벨 변수

- `--t-button-label-ff`: font-family
- `--t-button-label-fs`: font-size
- `--t-button-label-fw`: font-weight
- `--t-button-label-color`: color

### 동작 우선순위

클릭 핸들러는 다음 순서로 동작합니다:

1. `disabled` 또는 `loading` → 이벤트 차단
2. `toggle` 활성 → `pressed` 토글 후 `tintoToggle` 발생
3. `href` 존재 → 링크 모드 (새 창/탭)
4. `href` 없음 + `type="submit|reset"` → 폼 동작
5. 마지막에 `tintoClick` 발생

### 사용 예시

```html
<!-- 기본 버튼 -->
<tinto-button>클릭하세요</tinto-button>

<!-- Primary 버튼, Large 사이즈 -->
<tinto-button variant="primary" size="lg">시작하기</tinto-button>

<!-- 로딩 상태 -->
<tinto-button loading>처리 중...</tinto-button>

<!-- 링크 모드 -->
<tinto-button href="https://example.com" target="_blank">문서 보기</tinto-button>

<!-- 토글 버튼 -->
<tinto-button toggle pressed>즐겨찾기</tinto-button>

<!-- 아이콘과 함께 -->
<tinto-button>
  <span slot="prefix">✔</span>
  계속하기
  <span slot="suffix">→</span>
</tinto-button>
```

### 접근성 (ARIA)

- **자동 ARIA 속성**:
  - `aria-busy`: 로딩 상태
  - `aria-disabled`: 비활성화 상태
  - `aria-pressed`: 토글 상태 (toggle 모드일 때만)

- **접근성 속성 패스스루**: `aria-label`, `aria-describedby` 지원

- **키보드 포커스**: `:focus-visible` 시 포커스 링 표시

- **High Contrast 모드 지원**: `@media (forced-colors: active)` 대응

### 주요 특징

1. **모바일 퍼스트**: 최소 터치 타겟 44x44px (WCAG 2.5.5 준수)
2. **다중 모드 지원**: 버튼/링크/폼/토글을 단일 컴포넌트로 지원
3. **토큰 기반 스타일링**: Variant/Size/Token 체계로 일관된 스타일 관리
4. **접근성 기본 탑재**: ARIA 속성 자동 적용 및 키보드 네비게이션 지원
5. **로딩 상태**: 스피너 오버레이 + 클릭 차단
6. **반응형**: `clamp()` 사용으로 반응형 폰트 크기

### 내부 동작 로직

#### 스타일 토큰 처리

- 토큰 값은 CSS 변수로 변환되어 적용됩니다
- `radius` 속성은 숫자만 입력 시 자동으로 `px` 단위가 추가됩니다
- 폰트 패밀리 토큰은 미리 정의된 폰트 스택으로 매핑됩니다

#### Props 검증

컴포넌트는 다음 속성들을 자동으로 검증합니다:

- `variant`: `'primary' | 'secondary' | 'tertiary'`
- `size`: `'sm' | 'md' | 'lg'`
- `type`: `'button' | 'submit' | 'reset'`

잘못된 값이 전달되면 콘솔 경고를 출력하고 기본값으로 대체합니다.

---

## 참고 자료

- 컴포넌트 소스 코드: `apps/stencil-components/src/components/button/`
- 타입 정의: `apps/stencil-components/src/components/button/button.types.ts`
- 스타일: `apps/stencil-components/src/components/button/button.css`
