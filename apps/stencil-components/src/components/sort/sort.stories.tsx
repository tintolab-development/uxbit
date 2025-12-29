// sort.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

const sampleOptions = [
  { value: 'popular', label: '인기순', direction: 'desc' },
  { value: 'price-asc', label: '가격 낮은순', direction: 'asc' },
  { value: 'price-desc', label: '가격 높은순', direction: 'desc' },
  { value: 'newest', label: '최신순', direction: 'desc' },
  { value: 'name', label: '이름순', direction: 'asc' },
];

type SortStoryProps = {
  label: string;
  variant: 'default' | 'button' | 'select';
  disabled: boolean;
};

const meta: Meta<SortStoryProps> = {
  title: 'Uxbit/Sort',
  component: 'tinto-sort',
  parameters: {
    layout: 'centered',
  },
  args: {
    label: '정렬',
    variant: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'button', 'select'],
    },
  },
};

export default meta;
type Story = StoryObj<SortStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div>
      <tinto-sort
        label={args.label}
        variant={args.variant}
        options={JSON.stringify(sampleOptions)}
        disabled={args.disabled}
      />
    </div>
  ),
};

export const DefaultVariant: Story = {
  render: () => (
    <div>
      <tinto-sort label="정렬" variant="default" options={JSON.stringify(sampleOptions)} />
    </div>
  ),
};

export const ButtonVariant: Story = {
  render: () => (
    <div>
      <tinto-sort label="정렬" variant="button" options={JSON.stringify(sampleOptions)} />
    </div>
  ),
};

export const SelectVariant: Story = {
  render: () => (
    <div>
      <tinto-sort label="정렬" variant="select" options={JSON.stringify(sampleOptions)} />
    </div>
  ),
};

export const EcommerceExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <tinto-sort
        label="정렬"
        variant="default"
        options={JSON.stringify([
          { value: 'popular', label: '인기순' },
          { value: 'price-asc', label: '가격 낮은순' },
          { value: 'price-desc', label: '가격 높은순' },
          { value: 'newest', label: '최신순' },
          { value: 'rating', label: '평점순' },
        ])}
      />
    </div>
  ),
};
