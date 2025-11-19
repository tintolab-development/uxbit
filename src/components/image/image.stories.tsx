import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoImage } from './image';

const meta = {
  title: 'Uxbit/Image',
  component: 'tinto-image',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // ===== Image / Media =====
    src: { control: 'text', table: { category: 'image' } },
    alt: { control: 'text', table: { category: 'image' } },
    ratio: {
      control: { type: 'select' },
      options: ['1:1', '2:1', '3:2', '4:3', '16:9', '3:1', '1:2', '2:3', '3:4', '9:16', '1:3'],
      table: { category: 'image' },
    },
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      table: { category: 'image' },
    },
    position: {
      control: 'text',
      description: 'object-position (예: 50% 50%, center top)',
      table: { category: 'image' },
    },
    radius: {
      control: 'text',
      description: 'border-radius (예: 8px, 50%)',
      table: { category: 'image' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['soft', 'oval', 'top', 'diagonal', 'circle', 'base', 'full', 't', 'lr'],
      table: { category: 'image' },
    },
    border: {
      control: 'text',
      description: 'border 토큰 (예: 1px solid #000)',
      table: { category: 'visual' },
    },
    shadow: {
      control: 'text',
      description: 'box-shadow 토큰',
      table: { category: 'visual' },
    },
    background: {
      control: 'text',
      description: '배경색/그라디언트',
      table: { category: 'visual' },
    },
    width: { control: 'text', table: { category: 'sizing' } },
    height: { control: 'text', table: { category: 'sizing' } },

    // ===== Loading =====
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      table: { category: 'loading' },
    },
    priority: {
      control: 'boolean',
      description: 'true일 때 fetchpriority="high" + preload',
      table: { category: 'loading' },
    },
    placeholder: {
      control: 'text',
      description: '블러/저해상도 플레이스홀더 URL',
      table: { category: 'loading' },
    },
    srcset: { control: 'text', table: { category: 'loading' } },
    sizes: { control: 'text', table: { category: 'loading' } },
    decoding: {
      control: { type: 'select' },
      options: ['async', 'sync', 'auto'],
      table: { category: 'loading' },
    },
    crossorigin: { control: 'text', table: { category: 'loading' } },
    referrerpolicy: { control: 'text', table: { category: 'loading' } },

    // ===== Interactivity =====
    href: { control: 'text', table: { category: 'interactivity' } },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      table: { category: 'interactivity' },
    },
    rel: { control: 'text', table: { category: 'interactivity' } },
    download: { control: 'text', table: { category: 'interactivity' } },
    as: {
      control: { type: 'select' },
      options: [undefined, 'button'],
      table: { category: 'interactivity' },
    },
    disabled: { control: 'boolean', table: { category: 'interactivity' } },

    // ===== Animation =====
    animation: {
      control: { type: 'select' },
      options: ['', 'spin', 'float', 'wobble', 'pulse'],
      table: { category: 'animation' },
    },
    play: { control: 'boolean', table: { category: 'animation' } },
    rotate: {
      control: { type: 'select' },
      options: ['left', 'right'],
      table: { category: 'animation' },
    },
    duration: {
      control: { type: 'number', min: 1, max: 100 },
      description: '애니메이션 지속 시간 (초)',
      table: { category: 'animation' },
    },
    repeat: {
      control: 'text',
      description: "'infinite' 또는 숫자 (반복 횟수)",
      table: { category: 'animation' },
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'hover 시 애니메이션 일시정지',
      table: { category: 'animation' },
    },
    startOnViewport: {
      control: 'boolean',
      description: '뷰포트 진입 시 애니메이션 시작',
      table: { category: 'animation' },
    },

    // ===== Events =====
    tintoLoaded: { action: 'tintoLoaded', table: { category: 'events' } },
    tintoError: { action: 'tintoError', table: { category: 'events' } },
    tintoPress: { action: 'tintoPress', table: { category: 'events' } },
  },
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Random image',
    ratio: '16:9',
    fit: 'cover',
    position: '50% 50%',
    width: '300px',
    rounded: 'soft',
    animation: '',
    play: true,
    rotate: 'right',
    duration: 20,
    repeat: 'infinite',
    pauseOnHover: false,
    startOnViewport: false,
    loading: 'lazy',
    priority: false,
    disabled: false,
  },
} satisfies Meta<TintoImage>;

export default meta;

type Story = StoryObj<TintoImage>;

/**
 * 기본 이미지 스토리
 */
export const Primary: Story = {
  render: (props) => <tinto-image {...props} />,
};

/**
 * Placeholder 있는 버전
 */
export const WithPlaceholder: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Image with placeholder',
    placeholder: 'https://picsum.photos/80/45?blur=10',
    ratio: '16:9',
    width: '300px',
  },
};

/**
 * 링크로 동작하는 버전 (href / target)
 */
export const AsLink: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Clickable image link',
    href: 'https://example.com',
    target: '_blank',
    ratio: '16:9',
    width: '300px',
  },
};

/**
 * 버튼 모드 (as="button")
 */
export const AsButton: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Button image',
    as: 'button',
    ratio: '16:9',
    width: '300px',
  },
};

/**
 * 애니메이션 예제 (spin)
 */
export const WithAnimation: Story = {
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Spinning image',
    ratio: '1:1',
    width: '200px',
    animation: 'spin',
    play: true,
    duration: 3,
    rotate: 'right',
  },
};

/**
 * overlay 슬롯 사용 예시
 */
export const WithOverlaySlot: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Image with overlay',
    ratio: '16:9',
    width: '300px',
  },
  render: (props) => (
    <tinto-image {...props}>
      <div
        slot="overlay"
        style={{
          position: 'absolute',
          right: '1rem',
          bottom: '1rem',
          padding: '0.25rem 0.5rem',
          background: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          borderRadius: '999px',
          fontSize: '12px',
        }}
      >
        OVERLAY
      </div>
    </tinto-image>
  ),
};
