import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoButton } from './button';

const meta = {
  title: 'Uxbit/Button',
  component: 'tinto-button',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<TintoButton>;

export default meta;

type Story = StoryObj<TintoButton>;

/**
 * 그냥 렌더링만 확인하는 최소 스토리
 */
export const Primary: Story = {
  name: 'Primary',
  render: () => <tinto-button>Button</tinto-button>,
};
