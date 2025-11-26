import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { ButtonSize, ButtonVariant } from './button.types';

/**
 * Storybook에서 사용할 Args 타입
 * - 실제 컴포넌트 prop(variant, size)
 * - 스토리 전용 필드(label)
 */
type ButtonStoryProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  label: string;
};

const meta = {
  title: 'Uxbit/Button',
  component: 'tinto-button', // ✅ 문자열 태그 이름(중요) – 클래스 X
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
  },
  argTypes: {
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
    label: {
      control: 'text',
      table: { category: 'content' },
    },
  },
} satisfies Meta<ButtonStoryProps>;

export default meta;

type Story = StoryObj<ButtonStoryProps>;

/**
 * Playground – Controls로 variant/size/label 조절 가능
 */
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <tinto-button variant={args.variant} size={args.size}>
      {args.label}
    </tinto-button>
  ),
};

/**
 * 프리셋 예시 – Primary
 */
export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary button',
  },
  render: (args) => (
    <tinto-button variant={args.variant} size={args.size}>
      {args.label}
    </tinto-button>
  ),
};

/**
 * 프리셋 예시 – Secondary
 */
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary button',
  },
  render: (args) => (
    <tinto-button variant={args.variant} size={args.size}>
      {args.label}
    </tinto-button>
  ),
};

/**
 * 사이즈 비교용 스토리
 */
export const Sizes: Story = {
  name: 'Sizes',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <tinto-button variant={args.variant} size="sm">
        Small
      </tinto-button>
      <tinto-button variant={args.variant} size="md">
        Medium
      </tinto-button>
      <tinto-button variant={args.variant} size="lg">
        Large
      </tinto-button>
    </div>
  ),
};
