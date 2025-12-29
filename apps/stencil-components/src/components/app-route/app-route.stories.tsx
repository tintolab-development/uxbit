import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  HeightMode,
  Justify,
  OverflowMode,
  ScrollSnapType,
  SnapAlign,
} from './app-route.types';

type RouteArgs = {
  direction: FlexDirection;
  wrap: FlexWrap;
  justify: Justify;
  align: AlignItems;
  alignContent: AlignContent;
  gap?: string;

  padding?: string;
  paddingInline?: string;
  paddingBlock?: string;

  background?: string;
  color?: string;
  src?: string;
  overlay?: string;
  overlayOpacity?: number;
  radius?: string;
  shadow?: string;
  border?: string;

  heightMode: HeightMode;
  safeArea: boolean;
  overflowX: OverflowMode;
  overflowY: OverflowMode;
  scrollSnapType?: ScrollSnapType;
  snapAlign?: SnapAlign;
};

const sectionCards = [
  {
    eyebrow: 'Hero / Intro',
    title: 'Route-level body that keeps tokens centralized',
    description:
      'tinto-app-route는 실제 body 처럼 전체 뷰를 덮으면서 gap, 패딩, 배경, Safe Area 등을 토큰으로 통제할 수 있도록 설계했습니다. 모든 섹션은 이 컨테이너 안에서 유기적으로 정렬됩니다.',
  },
  {
    eyebrow: 'Highlights',
    title: 'Bring multiple tinto-section blocks together',
    description:
      '섹션 간 간격, scroll snap, overlay 등도 루트에서 한 번에 조정할 수 있어 페이지 전환/Route 디자인 시스템을 쉽게 구성할 수 있습니다.',
  },
  {
    eyebrow: 'Footer CTA',
    title: 'Keep the viewport filled',
    description:
      '기본 heightMode는 dvh라서 뷰포트 높이에 맞춰 Route가 늘어나며, 필요시 screen 모드로 고정 높이 레이아웃도 만들 수 있습니다.',
  },
];

const meta: Meta<RouteArgs> = {
  title: 'Uxbit/AppRoute',
  component: 'tinto-app-route',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'UXbit Route wrapper. 페이지(body) 단위에서 레이아웃/배경 토큰을 한 번에 제어할 수 있는 상위 컨테이너입니다.',
      },
    },
  },
  args: {
    direction: 'column',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'stretch',
    alignContent: 'stretch',
    gap: '4rem',

    paddingBlock: 'clamp(3rem, 6vw, 6rem)',
    paddingInline: 'clamp(1.5rem, 5vw, 4.5rem)',

    background: 'linear-gradient(135deg, #020617 0%, #0f172a 65%, #1e1b4b 100%)',
    color: '#E2E8F0',
    overlay: 'rgba(2, 6, 23, 0.55)',
    overlayOpacity: 0.85,
    radius: '0',
    shadow: 'inset 0 0 60px rgba(2,6,23,0.45)',

    heightMode: 'dvh',
    safeArea: true,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollSnapType: 'y proximity',
    snapAlign: 'start',
  },
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Route 안에서 섹션을 정렬하는 Flex 방향',
      table: { category: 'layout' },
    },
    wrap: {
      control: { type: 'inline-radio' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap 모드',
      table: { category: 'layout' },
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
      description: '주 축 정렬',
      table: { category: 'layout' },
    },
    align: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
      description: '교차 축 정렬',
      table: { category: 'layout' },
    },
    alignContent: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
      description: '여러 줄이 생겼을 때 콘텐츠 정렬 방식',
      table: { category: 'layout' },
    },
    gap: {
      control: 'text',
      description: '섹션 간 간격',
      table: { category: 'layout' },
    },

    padding: {
      control: 'text',
      description: '전체 패딩 (padding-inline / padding-block보다 우선순위 낮음)',
      table: { category: 'spacing' },
    },
    paddingInline: {
      control: 'text',
      description: '좌우 안전 패딩 (Safe Area 포함)',
      table: { category: 'spacing' },
    },
    paddingBlock: {
      control: 'text',
      description: '상하 패딩',
      table: { category: 'spacing' },
    },

    background: {
      control: 'color',
      description: '배경색 혹은 그라디언트',
      table: { category: 'visual' },
    },
    color: {
      control: 'color',
      description: '기본 텍스트 색상',
      table: { category: 'visual' },
    },
    src: {
      control: 'text',
      description: '배경 이미지 URL (선택)',
      table: { category: 'visual' },
    },
    overlay: {
      control: 'color',
      description: '배경 위 overlay 컬러/그라디언트',
      table: { category: 'visual' },
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'overlay 불투명도',
      table: { category: 'visual' },
    },
    radius: {
      control: 'text',
      description: '모서리 반경',
      table: { category: 'visual' },
    },
    shadow: {
      control: 'text',
      description: 'box-shadow',
      table: { category: 'visual' },
    },
    border: {
      control: 'text',
      description: 'border 전체 정의',
      table: { category: 'visual' },
    },

    heightMode: {
      control: { type: 'inline-radio' },
      options: ['auto', 'dvh', 'screen'],
      description: 'Route 높이 모드',
      table: { category: 'behavior' },
    },
    safeArea: {
      control: 'boolean',
      description: 'env(safe-area-inset-*) 자동 적용',
      table: { category: 'behavior' },
    },
    overflowX: {
      control: { type: 'select' },
      options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      description: 'X축 overflow 제어',
      table: { category: 'behavior' },
    },
    overflowY: {
      control: { type: 'select' },
      options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      description: 'Y축 overflow 제어',
      table: { category: 'behavior' },
    },
    scrollSnapType: {
      control: 'text',
      description: 'scroll-snap-type 지정 (예: "y proximity")',
      table: { category: 'behavior' },
    },
    snapAlign: {
      control: { type: 'inline-radio' },
      options: ['start', 'center', 'end', 'none'],
      description: 'Slot 요소 scroll-snap-align',
      table: { category: 'behavior' },
    },
  },
};

export default meta;

type Story = StoryObj<RouteArgs>;

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const { gap, ...rest } = args;

    return (
      <tinto-app-route {...(rest as any)} gap={gap as any}>
        {sectionCards.map((section) => (
          <tinto-section
            direction="column"
            gap="1.5rem"
            padding="3rem"
            radius="32px"
            background="rgba(15, 23, 42, 0.92)"
            color="#F8FAFC"
            shadow="0 25px 45px rgba(2, 6, 23, 0.55)"
          >
            <p
              style={{
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: '#A5B4FC',
              }}
            >
              {section.eyebrow}
            </p>
            <h2 style={{ fontSize: '2.25rem', margin: '0' }}>{section.title}</h2>
            <p style={{ margin: '0', lineHeight: '1.6', color: '#CBD5F5' }}>
              {section.description}
            </p>
          </tinto-section>
        ))}
      </tinto-app-route>
    );
  },
};
