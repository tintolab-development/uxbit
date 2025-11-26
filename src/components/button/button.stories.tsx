// src/components/button/button.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

/**
 * 스토리에서 사용할 Props 타입
 * - Stencil 컴포넌트 클래스(TintoButton)를 직접 상속하지 않고
 *   필요한 prop만 명시적으로 선언
 * - 이벤트(tintoClick)는 여기 타입에 넣지 않는다 (argTypes에서만 action으로 정의)
 */
type ButtonStoryProps = {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  type: 'button' | 'submit' | 'reset';
  block: boolean;
  disabled: boolean;
  /** 슬롯 텍스트 */
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
 * 내부적으로 공통 렌더 함수 (image story 패턴과 동일)
 * - props 중 label은 슬롯으로, 나머지는 모두 속성으로 전달
 * - tintoClick 같은 이벤트 핸들러는 여기서 직접 넘기지 않는다.
 */
const renderButton = (props: ButtonStoryProps) => {
  const { label, ...rest } = props;

  return <tinto-button {...rest}>{label}</tinto-button>;
};

/** 기본 프라이머리 버튼 */
export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary',
    label: 'Primary button',
  },
  render: renderButton,
};

/** 세컨더리 스타일 버튼 */
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button',
  },
  render: renderButton,
};

/** Ghost 스타일 버튼 */
export const Ghost: Story = {
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button',
  },
  render: renderButton,
};

/** 가로 전체 폭 버튼 (block) */
export const Block: Story = {
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button',
  },
  render: (props) => <div style={{ width: '320px' }}>{renderButton(props)}</div>,
};

/** 비활성화 버튼 */
export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Disabled button',
  },
  render: renderButton,
};
