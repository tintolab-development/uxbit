import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoBadge } from './badge';

type BadgeStoryProps = TintoBadge & {
  /**
   * 슬롯에 들어가는 텍스트
   */
  label: string;
};

const meta = {
  title: 'Uxbit/Badge',
  component: 'tinto-badge',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // ===== Appearance =====
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'success', 'warning', 'danger'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      table: { category: 'appearance' },
    },
    pill: {
      control: { type: 'boolean' },
      table: { category: 'appearance' },
    },
    soft: {
      control: { type: 'boolean' },
      table: { category: 'appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      table: { category: 'appearance' },
    },

    // ===== Content =====
    label: {
      control: { type: 'text' },
      table: { category: 'content' },
    },
  },
  args: {
    variant: 'neutral',
    size: 'md',
    pill: true,
    soft: true,
    outline: false,
    label: 'Badge',
  },
} satisfies Meta<BadgeStoryProps>;

export default meta;

type Story = StoryObj<BadgeStoryProps>;

/**
 * 기본 뱃지
 */
export const Primary: Story = {
  name: 'Default (Neutral)',
  args: {
    variant: 'neutral',
    label: 'Neutral',
  },
  render: (props) => (
    <tinto-badge
      variant={props.variant}
      size={props.size}
      pill={props.pill}
      soft={props.soft}
      outline={props.outline}
    >
      {props.label}
    </tinto-badge>
  ),
};

/**
 * 상태/의미 별 뱃지 예제들
 */
export const StatusVariants: Story = {
  name: 'Status variants',
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <tinto-badge variant="neutral">Neutral</tinto-badge>
      <tinto-badge variant="primary">Primary</tinto-badge>
      <tinto-badge variant="success">Success</tinto-badge>
      <tinto-badge variant="warning">Warning</tinto-badge>
      <tinto-badge variant="danger">Danger</tinto-badge>
    </div>
  ),
};

/**
 * soft / outline 조합
 */
export const SoftVsOutline: Story = {
  name: 'Soft vs Outline',
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <tinto-badge variant="primary" soft pill>
          Soft
        </tinto-badge>
        <tinto-badge variant="primary" outline pill>
          Outline
        </tinto-badge>
        <tinto-badge variant="primary" soft outline pill>
          Soft + Outline
        </tinto-badge>
        <tinto-badge variant="primary" soft={false} outline={false} pill>
          Solid
        </tinto-badge>
      </div>
    </div>
  ),
};

/**
 * 작은 사이즈(badge처럼 조밀하게)
 */
export const SmallSize: Story = {
  name: 'Small size',
  args: {
    size: 'sm',
    label: 'Small badge',
  },
  render: (props) => (
    <tinto-badge
      variant={props.variant}
      size={props.size}
      pill={props.pill}
      soft={props.soft}
      outline={props.outline}
    >
      {props.label}
    </tinto-badge>
  ),
};
