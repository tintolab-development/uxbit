// src/components/button/button.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoButton } from './button';

/**
 * Story에서 사용할 Args 타입
 * - 실제 컴포넌트 props + label (슬롯용 텍스트)
 * - 이벤트(tintoClick)는 Args에 넣지 않는다.
 */
type ButtonArgs = TintoButton & {
  /**
   * 슬롯에 들어갈 텍스트
   */
  label: string;
};

const meta = {
  title: 'Uxbit/Button',
  component: 'tinto-button',

  parameters: {
    layout: 'centered',
    // ✅ Web Components 이벤트 → Storybook Actions 패널로 연결
    actions: {
      handles: ['tintoClick'],
    },
  },

  argTypes: {
    // ===== Appearance =====
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { category: 'appearance' },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      table: { category: 'appearance' },
    },

    // ===== Layout / State =====
    block: {
      control: { type: 'boolean' },
      table: { category: 'layout' },
    },
    disabled: {
      control: { type: 'boolean' },
      table: { category: 'state' },
    },

    // ❌ 여기에는 더 이상 tintoClick을 넣지 않는다
  },

  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    block: false,
    disabled: false,
  },
} satisfies Meta<TintoButton>; // ✅ image.stories.tsx와 동일한 패턴

export default meta;

type Story = StoryObj<ButtonArgs>;

/**
 * 기본 프라이머리 버튼
 */
export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    label: 'Primary button',
  },
  render: (props) => (
    <tinto-button
      variant={props.variant}
      size={props.size}
      type={props.type}
      block={props.block}
      disabled={props.disabled}
    >
      {props.label}
    </tinto-button>
  ),
};

/**
 * 세컨더리 스타일 버튼
 */
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button',
  },
  render: (props) => (
    <tinto-button
      variant={props.variant}
      size={props.size}
      type={props.type}
      block={props.block}
      disabled={props.disabled}
    >
      {props.label}
    </tinto-button>
  ),
};

/**
 * Ghost 스타일 버튼
 */
export const Ghost: Story = {
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button',
  },
  render: (props) => (
    <tinto-button
      variant={props.variant}
      size={props.size}
      type={props.type}
      block={props.block}
      disabled={props.disabled}
    >
      {props.label}
    </tinto-button>
  ),
};

/**
 * 가로 전체 폭 버튼 (block)
 */
export const Block: Story = {
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button',
  },
  render: (props) => (
    <div style={{ width: '320px' }}>
      <tinto-button
        variant={props.variant}
        size={props.size}
        type={props.type}
        block={props.block}
        disabled={props.disabled}
      >
        {props.label}
      </tinto-button>
    </div>
  ),
};

/**
 * 비활성화 버튼
 */
export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Disabled button',
  },
  render: (props) => (
    <tinto-button
      variant={props.variant}
      size={props.size}
      type={props.type}
      block={props.block}
      disabled={props.disabled}
    >
      {props.label}
    </tinto-button>
  ),
};
