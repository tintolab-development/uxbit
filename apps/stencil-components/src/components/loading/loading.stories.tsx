// loading.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type LoadingStoryProps = {
  size: 'sm' | 'md' | 'lg';
  variant: 'spinner' | 'dots' | 'pulse';
  overlay: boolean;
  text?: string;
};

const meta: Meta<LoadingStoryProps> = {
  title: 'Uxbit/Loading',
  component: 'tinto-loading',
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
    variant: 'spinner',
    overlay: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse'],
    },
  },
};

export default meta;
type Story = StoryObj<LoadingStoryProps>;

export const Default: Story = {
  render: (args) => (
    <tinto-loading
      size={args.size}
      variant={args.variant}
      overlay={args.overlay}
      text={args.text}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <tinto-loading variant="spinner" />
      <tinto-loading variant="dots" />
      <tinto-loading variant="pulse" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <tinto-loading size="sm" />
      <tinto-loading size="md" />
      <tinto-loading size="lg" />
    </div>
  ),
};

export const WithText: Story = {
  render: () => <tinto-loading text="로딩 중..." />,
};

export const Overlay: Story = {
  render: () => (
    <div
      style={{ position: 'relative', width: '400px', height: '300px', border: '1px solid #e0e0e0' }}
    >
      <tinto-loading overlay={true} text="로딩 중..." />
    </div>
  ),
};
