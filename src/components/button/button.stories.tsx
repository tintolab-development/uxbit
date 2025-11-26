import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoButton } from './button';

type ButtonStoryProps = TintoButton & {
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

    // ===== Content =====
    label: {
      control: { type: 'text' },
      table: { category: 'content' },
    },

    // ===== Events =====
    tintoClick: {
      action: 'tintoClick',
      table: { category: 'events' },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    block: false,
    disabled: false,
    label: 'Primary button',
  },
} satisfies Meta<ButtonStoryProps>;

export default meta;

type Story = StoryObj<ButtonStoryProps>;

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
      // 스토리북 actions 패널에 tintoClick 이벤트 바인딩
      onTintoClick={props.tintoClick as any}
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
      onTintoClick={props.tintoClick as any}
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
      onTintoClick={props.tintoClick as any}
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
        onTintoClick={props.tintoClick as any}
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
      onTintoClick={props.tintoClick as any}
    >
      {props.label}
    </tinto-button>
  ),
};
