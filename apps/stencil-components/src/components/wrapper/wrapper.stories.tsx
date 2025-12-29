import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type {
  AlignItems,
  FlexDirection,
  FlexWrap,
  Justify,
  BgSize,
  BgRepeat,
  BgAttachment,
  BgBlend,
} from './wrapper.types';

type ExtraArgs = {
  heading: string;
  body: string;
  eyebrow: string;
  mediaSrc: string;
  mediaAlt: string;
};

type WrapperArgs = ExtraArgs & {
  // Flex (mobile)
  direction: FlexDirection;
  wrap: FlexWrap;
  justify: Justify;
  align: AlignItems;
  gap?: string;

  // Flex (desktop override)
  directionDesktop?: FlexDirection;
  wrapDesktop?: FlexWrap;
  justifyDesktop?: Justify;
  alignDesktop?: AlignItems;
  gapDesktop?: string;

  // Box / Visual
  padding?: string;
  margin?: string;
  radius?: string;
  shadow?: string;
  border?: string;
  color?: string;

  // Background
  background?: string;
  src?: string;
  bgSize?: BgSize;
  bgPosition?: string;
  bgRepeat?: BgRepeat;
  bgAttachment?: BgAttachment;
  bgBlend?: BgBlend;

  // Overlay
  overlay?: string;
  overlayOpacity?: number;

  // Behavior
  fill: boolean;
};

const meta: Meta<WrapperArgs> = {
  title: 'Uxbit/Wrapper',
  component: 'tinto-wrapper',
  parameters: {
    layout: 'padded',
  },
  args: {
    // Flex (mobile)
    direction: 'row',
    wrap: 'nowrap',
    justify: 'space-between',
    align: 'center',
    gap: '2rem',

    // Flex (desktop override)
    directionDesktop: 'row',
    wrapDesktop: 'nowrap',
    justifyDesktop: 'space-between',
    alignDesktop: 'center',
    gapDesktop: '3rem',

    // Box / Visual
    padding: '2.5rem 2.25rem',
    margin: '0 auto 3rem',
    radius: '24px',
    shadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
    border: '1px solid rgba(148, 163, 184, 0.35)',
    color: '#0F172A',

    // Background
    background: 'linear-gradient(135deg, #0F172A 0%, #020617 45%, #111827 100%)',
    src: '',
    bgSize: 'cover',
    bgPosition: '50% 50%',
    bgRepeat: 'no-repeat',
    bgAttachment: 'scroll',
    bgBlend: 'normal',

    // Overlay
    overlay: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.4), transparent 55%)',
    overlayOpacity: 1,

    // Behavior
    fill: false,

    // Content (for inner section / typography / image)
    eyebrow: 'Layout · Background · Overlay',
    heading: 'TintoWrapper Layout Playground',
    body: 'direction, gap, background, overlay, desktop overrides 등 토큰들을 조정하면서 Wrapper가 어떻게 반응하는지 확인해 보세요. 아래 컨텐츠는 모두 UXbit 컴포넌트(tinto-section / tinto-image / tinto-typography)만 사용하여 구성했습니다.',
    mediaSrc:
      'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaAlt: 'Abstract gradient light photo',
  },
  argTypes: {
    // ===== Flex (mobile) =====
    direction: {
      control: { type: 'inline-radio' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: '모바일 기준 기본 Flex 방향',
      table: { category: 'layout / mobile' },
    },
    wrap: {
      control: { type: 'inline-radio' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap 동작',
      table: { category: 'layout / mobile' },
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: '주 축 정렬 (가로 방향)',
      table: { category: 'layout / mobile' },
    },
    align: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
      description: '교차 축 정렬 (세로 방향)',
      table: { category: 'layout / mobile' },
    },
    gap: {
      control: 'text',
      description: 'children 간 간격 (예: 16px, 2rem)',
      table: { category: 'layout / mobile' },
    },

    // ===== Flex (desktop override) =====
    directionDesktop: {
      control: { type: 'inline-radio' },
      options: ['row', 'row-reverse', 'column', 'column-reverse', undefined],
      description: '>=1920px에서 Flex 방향 오버라이드',
      table: { category: 'layout / desktop' },
    },
    wrapDesktop: {
      control: { type: 'inline-radio' },
      options: ['nowrap', 'wrap', 'wrap-reverse', undefined],
      description: '>=1920px에서 wrap 오버라이드',
      table: { category: 'layout / desktop' },
    },
    justifyDesktop: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
        undefined,
      ],
      description: '>=1920px에서 주 축 정렬 오버라이드',
      table: { category: 'layout / desktop' },
    },
    alignDesktop: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline', undefined],
      description: '>=1920px에서 교차 축 정렬 오버라이드',
      table: { category: 'layout / desktop' },
    },
    gapDesktop: {
      control: 'text',
      description: '>=1920px에서 gap 오버라이드',
      table: { category: 'layout / desktop' },
    },

    // ===== Box / Visual =====
    padding: {
      control: 'text',
      description: '내부 패딩 (예: 32px, 40px 24px)',
      table: { category: 'box' },
    },
    margin: {
      control: 'text',
      description: '외부 마진 (예: 0 auto, 48px 0)',
      table: { category: 'box' },
    },
    radius: {
      control: 'text',
      description: 'border-radius 토큰 (예: 24px, 9999px)',
      table: { category: 'box' },
    },
    shadow: {
      control: 'text',
      description: 'box-shadow 토큰',
      table: { category: 'box' },
    },
    border: {
      control: 'text',
      description: 'border 토큰 (예: 1px solid rgba(148,163,184,0.45))',
      table: { category: 'box' },
    },
    color: {
      control: 'color',
      description: '자식 텍스트 기본 색상',
      table: { category: 'box' },
    },

    // ===== Background =====
    background: {
      control: 'text',
      description: '배경색 또는 그라디언트 (background-color로 매핑)',
      table: { category: 'background' },
    },
    src: {
      control: 'text',
      description: 'background-image용 URL (wrapper 배경으로 사용)',
      table: { category: 'background' },
    },
    bgSize: {
      control: { type: 'inline-radio' },
      options: ['auto', 'cover', 'contain'],
      description: 'background-size 토큰',
      table: { category: 'background' },
    },
    bgPosition: {
      control: 'text',
      description: 'background-position (예: 50% 50%, center top)',
      table: { category: 'background' },
    },
    bgRepeat: {
      control: { type: 'inline-radio' },
      options: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'],
      description: 'background-repeat',
      table: { category: 'background' },
    },
    bgAttachment: {
      control: { type: 'inline-radio' },
      options: ['scroll', 'fixed', 'local'],
      description: 'background-attachment',
      table: { category: 'background' },
    },
    bgBlend: {
      control: { type: 'inline-radio' },
      options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'],
      description: 'background-blend-mode',
      table: { category: 'background' },
    },

    // ===== Overlay =====
    overlay: {
      control: 'text',
      description: '오버레이 색/그라디언트 (before 레이어)',
      table: { category: 'overlay' },
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: '오버레이 투명도 (0~1)',
      table: { category: 'overlay' },
    },

    // ===== Behavior =====
    fill: {
      control: 'boolean',
      description: 'true일 때 부모를 absolute로 덮는 fill 모드',
      table: { category: 'behavior' },
    },

    // ===== Content (inner UXbit components) =====
    eyebrow: {
      control: 'text',
      table: { category: 'content' },
    },
    heading: {
      control: 'text',
      table: { category: 'content' },
    },
    body: {
      control: 'text',
      table: { category: 'content' },
    },
    mediaSrc: {
      control: 'text',
      table: { category: 'content' },
    },
    mediaAlt: {
      control: 'text',
      table: { category: 'content' },
    },
  },
};

export default meta;

type Story = StoryObj<WrapperArgs>;
export const Primary: Story = {
  name: 'Primary',
  render: (args) => {
    const { heading, body, eyebrow, mediaSrc, mediaAlt, ...rest } = args;

    return (
      <tinto-section
        maxWidth="1200px"
        padding="3rem 1.5rem"
        margin="0 auto"
        center
        direction="column"
        gap="2rem"
        heightMode="auto"
      >
        <tinto-wrapper {...(rest as any)}>
          {/* 1번 flex item: 이미지 */}
          <tinto-image
            src={mediaSrc}
            alt={mediaAlt}
            ratio="4:3"
            fit="cover"
            rounded="soft"
            style={{ maxWidth: '320px', flex: '0 0 auto' } as any}
          ></tinto-image>

          {/* 2번 flex item: 텍스트 블록 */}
          <tinto-section direction="column" gap="0.75rem" padding="0" margin="0" heightMode="auto">
            <tinto-typography
              variant="span"
              font="system"
              color="rgba(148, 163, 184, 1)"
              font-size="sm"
            >
              {eyebrow}
            </tinto-typography>

            <tinto-typography variant="h2" font="system" color="#E5E7EB">
              {heading}
            </tinto-typography>

            <tinto-typography variant="p" font="system" color="#CBD5F5">
              {body}
            </tinto-typography>
          </tinto-section>
        </tinto-wrapper>
      </tinto-section>
    );
  },
};
