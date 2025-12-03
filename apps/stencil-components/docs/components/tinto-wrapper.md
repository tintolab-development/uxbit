# tinto-wrapper

배경·오버레이·보더·섀도우를 포함한 박스 컨테이너 컴포넌트. 내부는 flex 레이아웃으로 동작하며, `tinto-section`의 하위에서 사용하는 것을 기본 전제로 설계되었습니다.

---

## 빠른 시작

```html
<!-- 기본 카드 -->
<tinto-section>
  <tinto-wrapper
    direction="row"
    gap="24px"
    padding="24px"
    radius="18px"
    shadow="0 16px 40px rgba(0,0,0,0.18)"
    background="#0F172A"
    color="#F9FAFB"
  >
    <h2>카드 제목</h2>
    <p>카드 내용</p>
  </tinto-wrapper>
</tinto-section>

<!-- 배경 이미지 + 오버레이 -->
<tinto-section>
  <tinto-wrapper
    src="https://example.com/image.jpg"
    bg-size="cover"
    overlay="rgba(15,23,42,0.7)"
    padding="32px"
    radius="24px"
  >
    <h2>히어로 카드</h2>
  </tinto-wrapper>
</tinto-section>
```

---

## Props

### Flex 레이아웃 (모바일 기본)

| Prop        | Type                                                                                            | Default        | 설명                                        |
| ----------- | ----------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------- |
| `direction` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                        | `'row'`        | Flex 방향                                   |
| `wrap`      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | `'nowrap'`     | Flex wrap                                   |
| `justify`   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | 주 축 정렬                                  |
| `align`     | `'stretch' \| 'flex-start' \| 'center' \| 'flex-end' \| 'baseline'`                             | `'stretch'`    | 교차 축 정렬                                |
| `gap`       | `string`                                                                                        | -              | children 간 간격 (예: `"16px"`, `"1.5rem"`) |

### Flex 레이아웃 (데스크톱 ≥1920px 오버라이드)

| Prop                | Type                                                                                            | Default | 설명                    |
| ------------------- | ----------------------------------------------------------------------------------------------- | ------- | ----------------------- |
| `direction-desktop` | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                                        | -       | 데스크톱 Flex 방향      |
| `wrap-desktop`      | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | -       | 데스크톱 Flex wrap      |
| `justify-desktop`   | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | -       | 데스크톱 주 축 정렬     |
| `align-desktop`     | `'stretch' \| 'flex-start' \| 'center' \| 'flex-end' \| 'baseline'`                             | -       | 데스크톱 교차 축 정렬   |
| `gap-desktop`       | `string`                                                                                        | -       | 데스크톱 아이템 간 간격 |

> **참고**: 데스크톱 오버라이드 props를 지정하지 않으면, 1920px 이상에서도 모바일 설정이 그대로 사용됩니다.

### 박스/비주얼

| Prop      | Type     | Default | 설명                                              |
| --------- | -------- | ------- | ------------------------------------------------- |
| `padding` | `string` | -       | 내부 여백 (예: `"24px"`, `"32px 20px"`)           |
| `margin`  | `string` | -       | 바깥 여백 (예: `"0 auto"`, `"24px 0 0"`)          |
| `radius`  | `string` | -       | border-radius (예: `"16px"`, `"9999px"`)          |
| `shadow`  | `string` | -       | box-shadow                                        |
| `border`  | `string` | -       | border (예: `"1px solid rgba(148,163,184,0.45)"`) |
| `color`   | `string` | -       | 내부 텍스트 기본 색상                             |

### 배경

| Prop            | Type                                                                                 | Default       | 설명                                                                |
| --------------- | ------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------- |
| `background`    | `string`                                                                             | -             | 배경 색 또는 그라디언트 (예: `"#0F172A"`, `"linear-gradient(...)"`) |
| `src`           | `string`                                                                             | -             | 배경 이미지 URL                                                     |
| `bg-size`       | `'auto' \| 'cover' \| 'contain' \| string`                                           | `'cover'`     | background-size                                                     |
| `bg-position`   | `string`                                                                             | `'50% 50%'`   | background-position (예: `"center top"`, `"0 50%"`)                 |
| `bg-repeat`     | `'no-repeat' \| 'repeat' \| 'repeat-x' \| 'repeat-y' \| string`                      | `'no-repeat'` | background-repeat                                                   |
| `bg-attachment` | `'scroll' \| 'fixed' \| 'local' \| string`                                           | `'scroll'`    | background-attachment                                               |
| `bg-blend`      | `'normal' \| 'multiply' \| 'screen' \| 'overlay' \| 'darken' \| 'lighten' \| string` | `'normal'`    | background-blend-mode                                               |

### 오버레이

| Prop              | Type     | Default | 설명                                                     |
| ----------------- | -------- | ------- | -------------------------------------------------------- |
| `overlay`         | `string` | -       | 오버레이 색 또는 그라디언트 (예: `"rgba(15,23,42,0.6)"`) |
| `overlay-opacity` | `number` | `1`     | 오버레이 투명도 (0~1, `overlay` 지정 시에만 의미 있음)   |

### 동작

| Prop   | Type      | Default | 설명                                                         |
| ------ | --------- | ------- | ------------------------------------------------------------ |
| `fill` | `boolean` | `false` | 부모 영역 전체를 덮는 모드 (`position: absolute; inset: 0;`) |

---

## 사용 예시

### 기본 카드 레이아웃

```html
<tinto-section center max-width="960px" padding="32px 20px" gap="20px">
  <tinto-wrapper
    direction="row"
    gap="24px"
    padding="24px"
    radius="18px"
    shadow="0 16px 40px rgba(15,23,42,0.18)"
    border="1px solid rgba(148,163,184,0.35)"
    background="#0F172A"
    color="#F9FAFB"
  >
    <h2>TintoWrapper Card</h2>
    <p>
      direction, gap, padding, border, background 등을 조합해서 재사용 가능한 카드 레이아웃을 만들
      수 있습니다.
    </p>
  </tinto-wrapper>
</tinto-section>
```

### 배경 이미지 + 오버레이

```html
<tinto-section center max-width="1200px" padding="32px 20px">
  <tinto-wrapper
    direction="row"
    align="center"
    gap="32px"
    padding="32px 28px"
    radius="24px"
    shadow="0 24px 60px rgba(15,23,42,0.24)"
    color="#F9FAFB"
    src="https://example.com/image.jpg"
    bg-size="cover"
    bg-position="50% 40%"
    bg-repeat="no-repeat"
    bg-blend="overlay"
    overlay="rgba(15,23,42,0.7)"
    overlay-opacity="1"
  >
    <h2>Hero Wrapper</h2>
    <p>
      배경 이미지(src)와 overlay, shadow를 조합해서 히어로 섹션의 카드 영역을 쉽게 구성할 수
      있습니다.
    </p>
  </tinto-wrapper>
</tinto-section>
```

### 1920px 이상에서만 레이아웃 전환

```html
<tinto-section center max-width="1200px" padding="32px 20px">
  <tinto-wrapper
    direction="column"
    gap="16px"
    direction-desktop="row"
    gap-desktop="32px"
    padding="24px"
    radius="20px"
    background="#0B1220"
    color="#E5E7EB"
  >
    <tinto-image src="..." ratio="4:3" rounded="soft" fit="cover"></tinto-image>
    <tinto-section direction="column" gap="8px" padding="0" margin="0">
      <h3>Responsive Wrapper</h3>
      <p>1919px 이하에서는 column 레이아웃, 1920px 이상에서는 row 레이아웃으로 전환됩니다.</p>
    </tinto-section>
  </tinto-wrapper>
</tinto-section>
```

### fill 모드로 부모 덮기 (배경 전용 레이어)

```html
<tinto-section height-mode="screen" padding="0">
  <!-- 배경 레이어 -->
  <tinto-wrapper
    fill
    src="https://example.com/bg.jpg"
    bg-size="cover"
    bg-position="center center"
    overlay="rgba(15,23,42,0.65)"
    overlay-opacity="1"
  ></tinto-wrapper>

  <!-- 실제 컨텐츠 레이어 -->
  <tinto-section
    direction="column"
    align="center"
    justify="center"
    gap="16px"
    padding="40px 20px"
    height-mode="screen"
  >
    <h1>Fullscreen Background</h1>
    <p>
      fill 모드의 tinto-wrapper를 사용하면 부모 섹션 전체를 덮는 배경/오버레이 레이어를 쉽게 만들 수
      있습니다.
    </p>
  </tinto-section>
</tinto-section>
```

---

## CSS Parts

- `part="root"`: 루트 박스 요소
- `part="inner"`: Flex 컨테이너 요소

```css
tinto-wrapper::part(root) {
  background: #f9fafb;
}

tinto-wrapper::part(inner) {
  gap: 2rem;
}
```

---

## CSS 변수

내부에서 사용하는 주요 CSS 변수:

### Root 박스

- `--tw-pad`: 내부 패딩
- `--tw-mar`: 외부 마진
- `--tw-radius`: border-radius
- `--tw-shadow`: box-shadow
- `--tw-border`: border
- `--tw-color`: 기본 텍스트 색상
- `--tw-bg`: background-color
- `--tw-bg-img`: background-image
- `--tw-bg-size`: background-size
- `--tw-bg-pos`: background-position
- `--tw-bg-repeat`: background-repeat
- `--tw-bg-attach`: background-attachment
- `--tw-bg-blend`: background-blend-mode
- `--tw-overlay`: 오버레이 배경
- `--tw-overlay-opacity`: 오버레이 투명도

### Flex 컨테이너 (모바일)

- `--tw-dir`: flex-direction
- `--tw-wrap`: flex-wrap
- `--tw-justify`: justify-content
- `--tw-align`: align-items
- `--tw-gap`: gap

### Flex 컨테이너 (데스크톱 ≥1920px)

- `--tw-dir-desktop`: flex-direction
- `--tw-wrap-desktop`: flex-wrap
- `--tw-justify-desktop`: justify-content
- `--tw-align-desktop`: align-items
- `--tw-gap-desktop`: gap

> **참고**: 데스크톱 변수는 값이 정의된 경우에만 미디어쿼리 안에서 사용됩니다.

---

## FAQ

**Q: 1920px 이상에서 레이아웃이 예상치 않게 바뀌는 경우**  
A: 전역 CSS에서 `--tw-*-desktop` 변수를 설정했는지 확인하세요. 특정 wrapper에서만 모바일 값과 동일하게 고정하고 싶다면, `direction-desktop="column"`, `gap-desktop="16px"`처럼 명시적으로 지정하세요.

**Q: 배경 이미지와 overlay가 동시에 있을 때 색감이 너무 진한 경우**  
A: `overlay-opacity`를 `0.3~0.6` 정도로 낮추세요.

**Q: 내부 flex 정렬이 먹지 않는 것처럼 보이는 경우**  
A: `tinto-wrapper`의 flex는 `[part="inner"]` 아래 직접 자식들에만 적용됩니다. flex 대상이 2개 이상이어야 direction/gap 변화가 눈에 잘 보입니다.

**Q: 실제 사용 패턴 추천**  
A:

- 섹션 레벨 레이아웃: `tinto-section`으로 전체 페이지/블록의 레이아웃을 잡고
- 카드/박스 레벨: `tinto-wrapper`로 배경/그림자/오버레이를 관리
- 컨텐츠 텍스트/타이포: `tinto-typography`로 폰트/타입스케일 통일
- 이미지 카드: `tinto-image`를 `tinto-wrapper`의 자식으로 사용

---

## TL;DR

- 배경·오버레이·보더·섀도우를 포함한 박스 컨테이너
- 내부는 flex 레이아웃으로 동작
- `tinto-section` 하위에서 사용하는 것을 기본 전제
- 1920px 이상에서도 모바일 값 기본 유지 (오버라이드 가능)
- fill 모드로 부모 덮기 지원
