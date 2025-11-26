import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

const meta: Meta = {
  title: 'Uxbit/Button',
  component: 'tinto-button',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  name: 'Primary',
  render: () => <tinto-button>Primary button</tinto-button>,
};
