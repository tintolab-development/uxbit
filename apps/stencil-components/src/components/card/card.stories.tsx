// card.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type CardStoryProps = {
  variant: 'default' | 'compact' | 'detailed';
  direction: 'vertical' | 'horizontal';
  clickable: boolean;
  loading: boolean;
};

const meta: Meta<CardStoryProps> = {
  title: 'Uxbit/Card',
  component: 'tinto-card',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'default',
    direction: 'vertical',
    clickable: true,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed'],
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;
type Story = StoryObj<CardStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <tinto-card
        variant={args.variant}
        direction={args.direction}
        clickable={args.clickable}
        loading={args.loading}
        card-title="Card Title"
        description="This is a card description"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
      />
    </div>
  ),
};

export const WithSlots: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-card>
        <div slot="image">
          <tinto-image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
            ratio="1:1"
          />
        </div>
        <div slot="title">
          <tinto-typography variant="h3">Custom Title</tinto-typography>
        </div>
        <div slot="description">
          <tinto-typography variant="p">Custom description using slots</tinto-typography>
        </div>
        <div slot="content">
          <tinto-button variant="primary" size="sm">
            Action
          </tinto-button>
        </div>
      </tinto-card>
    </div>
  ),
};

export const Ecommerce: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-card
        card-title="Product Name"
        description="Product description here"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop"
        originalPrice={50000}
        salePrice={35000}
        discountRate={30}
        badge="New"
        href="#"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <tinto-card
        variant="default"
        card-title="Default Card"
        image="https://via.placeholder.com/300"
      />
      <tinto-card
        variant="compact"
        card-title="Compact Card"
        image="https://via.placeholder.com/300"
      />
      <tinto-card
        variant="detailed"
        card-title="Detailed Card"
        description="More detailed description"
        image="https://via.placeholder.com/300"
      />
    </div>
  ),
};

export const Directions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <tinto-card
        direction="vertical"
        card-title="Vertical Card"
        image="https://via.placeholder.com/300"
      />
      <tinto-card
        direction="horizontal"
        card-title="Horizontal Card"
        description="Horizontal layout card"
        image="https://via.placeholder.com/300"
      />
    </div>
  ),
};
