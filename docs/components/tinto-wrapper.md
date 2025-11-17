# tinto-wrapper 엘리먼트 가이드라인

1. 개요

tinto-wrapper는 배경·오버레이·보더·섀도우까지 포함한 박스 컨테이너입니다.

내부 [part="inner"]는 flex 레이아웃으로 동작하며, direction, gap, justify 등으로 아이템 배치를 제어합니다.

항상 tinto-section의 하위에서 사용하는 것을 기본 전제로 설계되어 있습니다.

예) <tinto-section> … <tinto-wrapper> … </tinto-wrapper> … </tinto-section>

Shadow DOM 기반이며, part="root", part="inner"를 통해 외부에서 스타일 오버라이드가 가능합니다.

1920px 이상에서는 \*-desktop 토큰으로 별도의 flex 레이아웃을 지정할 수 있고, 지정하지 않으면 모바일 토큰이 그대로 사용됩니다.

2. 주요 Props

대부분 reflect: true라서 HTML 속성으로 직접 제어 가능합니다.

2-1. Flex 레이아웃 (모바일 기본)

direction (기본: "row")

flex-direction

("row" | "row-reverse" | "column" | "column-reverse")

wrap (기본: "nowrap")

flex-wrap

("nowrap" | "wrap" | "wrap-reverse")

justify (기본: "flex-start")

main-axis 정렬

("flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly")

align (기본: "stretch")

cross-axis 정렬

("stretch" | "flex-start" | "center" | "flex-end" | "baseline")

gap?

children 간 간격

예: "16px", "1.5rem"

2-2. Flex 레이아웃 (데스크톱 ≥1920px 오버라이드)

direction-desktop?

wrap-desktop?

justify-desktop?

align-desktop?

gap-desktop?

각 속성을 지정하면 @media (min-width: 1920px)에서만 적용됩니다.
지정하지 않으면 모바일 기본 값(direction, wrap, …) 이 그대로 사용됩니다.

2-3. Box / Visual 토큰

padding?

내부 여백 (예: "24px", "32px 20px")

margin?

바깥 여백 (예: "0 auto", "24px 0 0")

radius?

border-radius (예: "16px", "9999px")

shadow?

box-shadow (예: "0 16px 40px rgba(15,23,42,0.24)")

border?

border (예: "1px solid rgba(148,163,184,0.45)")

color?

내부 텍스트 기본 색상 (예: "#0F172A")

2-4. Background 관련

실제 CSS에서는 background-color / background-image 로 분리됩니다.

background?

배경 색 또는 그라디언트

예: "#0F172A", "linear-gradient(135deg,#0F172A 0%,#020617 50%,#111827 100%)"

src?

배경 이미지 URL (background-image 전용)

내부에서 url("…")로 안전하게 인코딩되어 사용됩니다.

bg-size? (기본: "cover")

background-size

("auto" | "cover" | "contain" | string)

bg-position? (기본: "50% 50%")

background-position (예: "center top", "0 50%")

bg-repeat? (기본: "no-repeat")

background-repeat

("no-repeat" | "repeat" | "repeat-x" | "repeat-y" | string)

bg-attachment? (기본: "scroll")

background-attachment

("scroll" | "fixed" | "local" | string)

bg-blend? (기본: "normal")

background-blend-mode

("normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | string)

2-5. Overlay 관련

overlay?

오버레이 색 또는 그라디언트

예: "rgba(15,23,42,0.6)", "radial-gradient(circle at top left, rgba(59,130,246,0.4), transparent 55%)"

overlay-opacity?

오버레이 투명도 (0~1)

overlay가 지정된 경우에만 의미가 있으며, 값이 없으면 기본 1로 사용됩니다.

2-6. Behavior

fill (boolean, 기본: false)

true:

.tw-root에 position: absolute; inset: 0;가 적용되어 부모 영역 전체를 덮는 모드가 됩니다.

배경/오버레이를 부모 위에 입히는 히어로/배경용으로 사용.

false:

일반적인 block 박스 (width: 100%, margin/padding 기반 레이아웃)

3. CSS 변수 요약

tinto-wrapper는 Shadow DOM 내부에서 다음과 같은 CSS 변수를 사용합니다.

3-1. Root 박스 ([part="root"].tw-root)

Box / Visual

--tw-pad : 내부 패딩

--tw-mar : 외부 마진

--tw-radius : border-radius

--tw-shadow : box-shadow

--tw-border : border

--tw-color : 기본 텍스트 색상

Background

--tw-bg : background-color

--tw-bg-img : background-image

--tw-bg-size : background-size

--tw-bg-pos : background-position

--tw-bg-repeat : background-repeat

--tw-bg-attach : background-attachment

--tw-bg-blend : background-blend-mode

Overlay (.tw-root::before)

--tw-overlay : 오버레이 배경

--tw-overlay-opacity : 오버레이 투명도

3-2. Flex 컨테이너 ([part="inner"])

Mobile (기본)

--tw-dir : flex-direction

--tw-wrap : flex-wrap

--tw-justify : justify-content

--tw-align : align-items

--tw-gap : gap

Desktop (≥1920px)

--tw-dir-desktop

--tw-wrap-desktop

--tw-justify-desktop

--tw-align-desktop

--tw-gap-desktop
→ 각 값이 정의된 경우에만 @media (min-width: 1920px) 안에서 기본값을 덮어씁니다.

4. 간단 사용 예시 HTML

예시는 모두 tinto-section 하위에서 사용되는 것을 전제로 합니다.

4-1. 기본 카드 레이아웃 (배경+섀도우)
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

    <tinto-typography variant="h2" font="system" weight="700">
      TintoWrapper Card
    </tinto-typography>

    <tinto-typography variant="p" font="system" color="#CBD5F5">
      direction, gap, padding, border, background 등을 조합해서 재사용 가능한 카드 레이아웃을
      만들 수 있습니다.
    </tinto-typography>

  </tinto-wrapper>
</tinto-section>

4-2. Background Image + Overlay
<tinto-section center max-width="1200px" padding="32px 20px">
<tinto-wrapper
direction="row"
align="center"
gap="32px"
padding="32px 28px"
radius="24px"
shadow="0 24px 60px rgba(15,23,42,0.24)"
color="#F9FAFB"
src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1200"
bg-size="cover"
bg-position="50% 40%"
bg-repeat="no-repeat"
bg-blend="overlay"
overlay="rgba(15,23,42,0.7)"
overlay-opacity="1"

>

    <tinto-typography variant="h2" font="system" weight="700">
      Hero Wrapper
    </tinto-typography>

    <tinto-typography variant="p" font="system" color="#E5E7EB">
      배경 이미지(src)와 overlay, shadow를 조합해서 히어로 섹션의 카드 영역을 쉽게 구성할 수
      있습니다.
    </tinto-typography>

  </tinto-wrapper>
</tinto-section>

4-3. 1920px 이상에서만 레이아웃 전환 (column → row)
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

    <tinto-image
      src="https://picsum.photos/id/1025/1200/800"
      ratio="4:3"
      rounded="soft"
      fit="cover"
      style="max-width: 320px; flex: 0 0 auto"
    ></tinto-image>

    <tinto-section direction="column" gap="8px" padding="0" margin="0">
      <tinto-typography variant="h3" font="system" weight="700">
        Responsive Wrapper
      </tinto-typography>
      <tinto-typography variant="p" font="system" color="#CBD5F5">
        1919px 이하에서는 column 레이아웃, 1920px 이상에서는 direction-desktop="row"로 가로
        레이아웃으로 전환됩니다.
      </tinto-typography>
    </tinto-section>

  </tinto-wrapper>
</tinto-section>

4-4. fill 모드로 부모 덮기 (배경 전용 레이어)
<tinto-section height-mode="screen" padding="0">

  <!-- 배경 레이어 -->

<tinto-wrapper
fill
src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1600"
bg-size="cover"
bg-position="center center"
overlay="rgba(15,23,42,0.65)"
overlay-opacity="1"

>   </tinto-wrapper>

  <!-- 실제 컨텐츠 레이어 -->

<tinto-section
direction="column"
align="center"
justify="center"
gap="16px"
padding="40px 20px"
heightMode="screen"

>

    <tinto-typography variant="h1" font="system" color="#F9FAFB">
      Fullscreen Background
    </tinto-typography>
    <tinto-typography variant="p" font="system" color="#E5E7EB">
      fill 모드의 tinto-wrapper를 사용하면 부모 섹션 전체를 덮는 배경/오버레이 레이어를 쉽게 만들
      수 있습니다.
    </tinto-typography>

  </tinto-section>
</tinto-section>

5. 자주 겪는 이슈 & 팁
   5-1. 1920px 이상에서 레이아웃이 예상치 않게 바뀌는 경우

direction-desktop, gap-desktop 등 데스크톱 토큰을 전역 CSS에서 --tw-\*-desktop로 설정했는지 확인하세요.

특정 wrapper에서만 모바일 값과 동일하게 고정하고 싶다면:

<tinto-wrapper
direction="column"
direction-desktop="column"
gap="16px"
gap-desktop="16px"

> ...
> </tinto-wrapper>

처럼 명시적으로 지정해 두면, 1920px 이상에서도 절대 바뀌지 않습니다.

5-2. 배경 이미지와 overlay가 동시에 있을 때 색감이 너무 진한 경우

overlay 색은 유지하되, overlay-opacity를 0.3~0.6 정도로 낮추는 걸 추천합니다.

<tinto-wrapper
src="..."
overlay="rgba(15,23,42,1)"
overlay-opacity="0.45"

> ...
> </tinto-wrapper>

5-3. 내부 flex 정렬이 먹지 않는 것처럼 보이는 경우

tinto-wrapper의 flex는 [part="inner"] 아래 직접 자식들에만 적용됩니다.

예:

<!-- ✅ flex 대상이 2개 -->
<tinto-wrapper direction="row" gap="24px">
  <tinto-image ...></tinto-image>
  <tinto-section ...> ... </tinto-section>
</tinto-wrapper>

<!-- ⚠️ flex 대상이 1개라면 direction/gap 변화가 눈에 잘 안 보임 -->
<tinto-wrapper direction="row" gap="24px">
  <tinto-section>
    <!-- 이 안에 이미지/텍스트가 들어있으면 wrapper flex는 느낌이 덜함 -->
  </tinto-section>
</tinto-wrapper>

토큰 동작을 눈에 잘 보이게 하려면, tinto-wrapper 바로 아래에 2개 이상의 자식을 두는 것을 권장합니다.

5-4. 실제 사용 패턴 추천

섹션 레벨 레이아웃:

tinto-section으로 전체 페이지/블록의 레이아웃을 잡고

그 안에서 카드/박스 레벨:

tinto-wrapper로 배경/그림자/오버레이를 관리

컨텐츠 텍스트/타이포:

tinto-typography로 폰트/타입스케일 통일

이미지 카드:

tinto-image를 tinto-wrapper의 자식으로 사용해 히어로 카드/썸네일 카드 등을 구성

이 패턴으로 사용하면, 디자인 토큰과 레이아웃 토큰을 분리해서 재사용 가능한 섹션·카드 컴포넌트를 쉽게 설계할 수 있습니다.
