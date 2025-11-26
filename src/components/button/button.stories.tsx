// src/components/button/button.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type {
  ButtonVariant,
  ButtonSize,
  ButtonNativeType,
  ButtonTextFamilyToken,
  ButtonTextSizeToken,
  ButtonTextWeightToken,
} from './button.types';

/**
 * Storybook에서 사용할 Button args 타입
 * (실제 컴포넌트 클래스 타입과 분리해서, 스토리에서 조작할 prop만 정의)
 */
type ButtonArgs = {
  // ===== Appearance / Layout =====
  variant: ButtonVariant;
  size: ButtonSize;
  pill: boolean;
  block: boolean;
  elevated: boolean;
  outline: boolean;
  radius?: string;

  // ===== State / Behavior =====
  disabled: boolean;
  loading: boolean;
  toggle: boolean;
  pressed: boolean;
  type: ButtonNativeType;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';

  // ===== Content =====
  label: string;

  // ===== Typography tokens =====
  textFamily?: ButtonTextFamilyToken | string;
  textSize?: ButtonTextSizeToken | string;
  textWeight?: ButtonTextWeightToken | string;
  textColor?: string;
};

const meta = {
  title: 'Uxbit/Button',
  component: 'tinto-button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // ===== Appearance / Layout =====
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼 색/스타일 프리셋',
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기 프리셋',
      table: { category: 'appearance' },
    },
    pill: {
      control: { type: 'boolean' },
      description: 'pill(완전 라운드) 형태 여부',
      table: { category: 'appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'filled 대신 outline 스타일 적용',
      table: { category: 'appearance' },
    },
    elevated: {
      control: { type: 'boolean' },
      description: '살짝 떠 있는 느낌의 그림자 사용 여부',
      table: { category: 'appearance' },
    },
    block: {
      control: { type: 'boolean' },
      description: '가로 전체폭(100%) 사용 여부',
      table: { category: 'layout' },
    },
    radius: {
      control: 'text',
      description: 'border-radius 토큰 (숫자만 넣으면 px 처리, 예: "12" → "12px")',
      table: { category: 'layout' },
    },

    // ===== State / Behavior =====
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 (클릭 불가, opacity 하락)',
      table: { category: 'state' },
    },
    loading: {
      control: { type: 'boolean' },
      description: '로딩 상태 (센터 스피너 노출 + 클릭 막기)',
      table: { category: 'state' },
    },
    toggle: {
      control: { type: 'boolean' },
      description: '토글 버튼 모드 여부 (pressed 값 토글)',
      table: { category: 'state' },
    },
    pressed: {
      control: { type: 'boolean' },
      description: '토글 모드에서 현재 눌림 상태',
      table: { category: 'state' },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'form 동작 타입 (href가 없을 때만 적용)',
      table: { category: 'behavior' },
    },
    href: {
      control: 'text',
      description: '설정 시 링크 모드 (window.open 사용)',
      table: { category: 'behavior' },
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'href 사용 시 링크 target',
      table: { category: 'behavior' },
    },

    // ===== Content =====
    label: {
      control: 'text',
      description: '버튼 내에 표시할 텍스트 (슬롯 대신 사용 가능)',
      table: { category: 'content' },
    },

    // ===== Typography tokens =====
    textFamily: {
      control: { type: 'select' },
      options: ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
      description: '라벨 폰트 패밀리 토큰',
      table: { category: 'typography' },
    },
    textSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '라벨 폰트 크기 토큰 (내부에서 px로 매핑)',
      table: { category: 'typography' },
    },
    textWeight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold', 'black'],
      description: '라벨 폰트 두께 토큰',
      table: { category: 'typography' },
    },
    textColor: {
      control: 'text',
      description: '라벨 텍스트 컬러 (예: "#111827", "rebeccapurple")',
      table: { category: 'typography' },
    },
  },
  args: {
    // Appearance / layout 기본값
    variant: 'primary',
    size: 'md',
    pill: false,
    block: false,
    elevated: false,
    outline: false,
    radius: undefined,

    // State / behavior 기본값
    disabled: false,
    loading: false,
    toggle: false,
    pressed: false,
    type: 'button',
    href: undefined,
    target: '_self',

    // Content 기본값
    label: 'Primary button',

    // Typography 기본값
    textFamily: 'system',
    textSize: 'md',
    textWeight: 'medium',
    textColor: undefined,
  },
} satisfies Meta<ButtonArgs>;

export default meta;

type Story = StoryObj<ButtonArgs>;

/**
 * 기본 Primary 버튼
 */
export const Primary: Story = {
  name: 'Primary',
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Secondary 스타일 버튼
 */
export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Tertiary 스타일 버튼
 */
export const Tertiary: Story = {
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    label: 'Tertiary button',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * Block (가로 전체폭) 버튼
 */
export const Block: Story = {
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button',
  },
  render: (args) => (
    <div style={{ width: '320px' }}>
      <tinto-button
        variant={args.variant}
        size={args.size}
        pill={args.pill}
        block={args.block}
        elevated={args.elevated}
        outline={args.outline}
        radius={args.radius}
        disabled={args.disabled}
        loading={args.loading}
        toggle={args.toggle}
        pressed={args.pressed}
        type={args.type}
        href={args.href}
        target={args.target}
        textFamily={args.textFamily}
        textSize={args.textSize}
        textWeight={args.textWeight}
        textColor={args.textColor}
      >
        {args.label}
      </tinto-button>
    </div>
  ),
};

/**
 * 로딩 상태 버튼
 */
export const Loading: Story = {
  name: 'Loading',
  args: {
    loading: true,
    label: 'Loading…',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * 링크 버튼 (href + target)
 */
export const AsLink: Story = {
  name: 'As link',
  args: {
    href: 'https://example.com',
    target: '_blank',
    label: 'Go to example.com',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};

/**
 * 토글 버튼 예제 (toggle=true)
 */
export const ToggleButton: Story = {
  name: 'Toggle button',
  args: {
    toggle: true,
    pressed: false,
    label: 'Toggle me',
  },
  render: (args) => (
    <tinto-button
      variant={args.variant}
      size={args.size}
      pill={args.pill}
      block={args.block}
      elevated={args.elevated}
      outline={args.outline}
      radius={args.radius}
      disabled={args.disabled}
      loading={args.loading}
      toggle={args.toggle}
      pressed={args.pressed}
      type={args.type}
      href={args.href}
      target={args.target}
      textFamily={args.textFamily}
      textSize={args.textSize}
      textWeight={args.textWeight}
      textColor={args.textColor}
    >
      {args.label}
    </tinto-button>
  ),
};
