// button.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type {
  ButtonSize,
  ButtonVariant,
  ButtonNativeType,
  ButtonTextFamilyToken,
} from './button.types';

/**
 * Storybook에서 사용할 Args 타입
 * - 실제 컴포넌트 prop(variant, size, disabled, loading, block, pill, outline, elevated, type, href, target, textFamily)
 * - 스토리 전용 필드(label)
 * (컴포넌트 클래스 TintoButton 과는 완전히 분리)
 */
type ButtonStoryProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  label: string;

  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  pill?: boolean;
  outline?: boolean;
  elevated?: boolean;

  type?: ButtonNativeType;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';

  /** 라벨 폰트 패밀리 토큰 (Controls용) */
  textFamily?: ButtonTextFamilyToken;
};

const meta = {
  title: 'Uxbit/Button',
  // ✅ 문자열 태그 이름 사용 (중요) – 컴포넌트 클래스를 직접 넘기지 않음
  component: 'tinto-button',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    disabled: false,
    loading: false,
    block: false,
    pill: false,
    outline: false,
    elevated: false,
    type: 'button',
    href: undefined,
    target: '_self',
    textFamily: 'system', // ✅ 기본 폰트 패밀리
  } satisfies ButtonStoryProps,
  argTypes: {
    // ===== Appearance =====
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { category: 'appearance' },
    },

    // ===== State / Layout =====
    disabled: {
      control: 'boolean',
      table: { category: 'state' },
    },
    loading: {
      control: 'boolean',
      table: { category: 'state' },
    },
    block: {
      control: 'boolean',
      table: { category: 'layout' },
    },
    pill: {
      control: 'boolean',
      table: { category: 'layout' },
    },
    outline: {
      control: 'boolean',
      table: { category: 'appearance' },
    },
    elevated: {
      control: 'boolean',
      table: { category: 'appearance' },
    },

    // ===== Behavior =====
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      table: { category: 'behavior' },
    },
    href: {
      control: 'text',
      table: { category: 'behavior' },
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      table: { category: 'behavior' },
    },

    // ===== Typography =====
    textFamily: {
      control: { type: 'select' },
      options: ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
      table: { category: 'typography' },
    },

    // ===== Content =====
    label: {
      control: 'text',
      table: { category: 'content' },
    },

    // ✅ 이벤트(tintoClick, tintoToggle)는 argTypes/action에 올리지 않는다
  },
} satisfies Meta<ButtonStoryProps>;

export default meta;

type Story = StoryObj<ButtonStoryProps>;

/**
 * Playground – Controls로 대부분의 prop을 다뤄볼 수 있는 스토리
 */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      loading={args.loading}
      block={args.block}
      pill={args.pill}
      outline={args.outline}
      elevated={args.elevated}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily} // ✅ 여기서 내려줌
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Primary 버튼 프리셋
 */
export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary button',
    disabled: false,
    loading: false,
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Secondary 버튼 프리셋
 */
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary button',
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Tertiary 버튼 프리셋
 */
export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    size: 'md',
    label: 'Tertiary button',
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Disabled 상태 예시
 */
export const Disabled: Story = {
  name: 'Disabled',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled button',
    disabled: true,
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Loading 상태 예시
 */
export const Loading: Story = {
  name: 'Loading',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Loading...',
    loading: true,
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      loading={args.loading}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * 사이즈 비교용 – 같은 variant 로 sm / md / lg 한 번에 보기
 */
export const Sizes: Story = {
  name: 'Sizes',
  args: {
    variant: 'primary',
    label: 'Button',
    textFamily: 'system',
  } as ButtonStoryProps,
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <tinto-button variant={args.variant} size="sm" textFamily={args.textFamily}>
        Small
      </tinto-button>
      <tinto-button variant={args.variant} size="md" textFamily={args.textFamily}>
        Medium
      </tinto-button>
      <tinto-button variant={args.variant} size="lg" textFamily={args.textFamily}>
        Large
      </tinto-button>
    </div>
  ),
};

/**
 * 링크 모드 예시 – href / target 사용
 */
export const AsLink: Story = {
  name: 'As link',
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Go to example.com',
    href: 'https://example.com',
    target: '_blank',
    textFamily: 'system',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
    >
      {args.label}
    </tinto-button>
  ),
};
