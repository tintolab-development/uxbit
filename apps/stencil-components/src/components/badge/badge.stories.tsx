// badge.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type BadgeStoryProps = {
  variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size: 'sm' | 'md' | 'lg';
  shape: 'default' | 'pill' | 'dot';
  label: string;
  count: number;
  max: number;
  dot: boolean;
};

const meta: Meta<BadgeStoryProps> = {
  title: 'Uxbit/Badge',
  component: 'tinto-badge',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'default',
    size: 'md',
    shape: 'default',
    label: 'Badge',
    count: 0,
    max: 99,
    dot: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['default', 'pill', 'dot'],
    },
  },
};

export default meta;
type Story = StoryObj<BadgeStoryProps>;

export const Default: Story = {
  render: (args) => (
    <tinto-badge
      variant={args.variant}
      size={args.size}
      shape={args.shape}
      label={args.label}
      count={args.count || undefined}
      max={args.max}
      dot={args.dot}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <tinto-badge variant="default" label="Default" />
      <tinto-badge variant="primary" label="Primary" />
      <tinto-badge variant="secondary" label="Secondary" />
      <tinto-badge variant="success" label="Success" />
      <tinto-badge variant="warning" label="Warning" />
      <tinto-badge variant="error" label="Error" />
      <tinto-badge variant="info" label="Info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <tinto-badge size="sm" label="Small" />
      <tinto-badge size="md" label="Medium" />
      <tinto-badge size="lg" label="Large" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <tinto-badge shape="default" label="Default" />
      <tinto-badge shape="pill" label="Pill" />
      <tinto-badge shape="dot" />
    </div>
  ),
};

export const WithCount: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <tinto-badge variant="error" count={5} />
      <tinto-badge variant="primary" count={42} />
      <tinto-badge variant="warning" count={150} max={99} />
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <tinto-badge variant="primary">
        <span>Custom</span>
      </tinto-badge>
      <tinto-badge variant="success">
        <span>⭐ New</span>
      </tinto-badge>
    </div>
  ),
};
