// filter.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

const sampleOptions = [
  { value: 'option1', label: 'Option 1', count: 10 },
  { value: 'option2', label: 'Option 2', count: 5 },
  { value: 'option3', label: 'Option 3', description: 'Description for option 3' },
  { value: 'option4', label: 'Option 4', disabled: true },
  { value: 'option5', label: 'Option 5' },
];

type FilterStoryProps = {
  label: string;
  type: 'single' | 'multiple';
  variant: 'default' | 'button' | 'checkbox' | 'radio';
  searchable: boolean;
  showClear: boolean;
  maxSelection: number;
  disabled: boolean;
};

const meta: Meta<FilterStoryProps> = {
  title: 'Uxbit/Filter',
  component: 'tinto-filter',
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Filter',
    type: 'multiple',
    variant: 'default',
    searchable: false,
    showClear: true,
    maxSelection: 0,
    disabled: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'button', 'checkbox', 'radio'],
    },
  },
};

export default meta;
type Story = StoryObj<FilterStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <tinto-filter
        filter-id="filter1"
        label={args.label}
        type={args.type}
        variant={args.variant}
        options={JSON.stringify(sampleOptions)}
        searchable={args.searchable}
        show-clear={args.showClear}
        max-selection={args.maxSelection || undefined}
        disabled={args.disabled}
      />
    </div>
  ),
};

export const MultipleSelection: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-filter
        filter-id="filter2"
        label="카테고리"
        type="multiple"
        variant="checkbox"
        options={JSON.stringify(sampleOptions)}
        searchable
        show-clear
      />
    </div>
  ),
};

export const SingleSelection: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-filter
        filter-id="filter3"
        label="정렬"
        type="single"
        variant="radio"
        options={JSON.stringify([
          { value: 'popular', label: '인기순' },
          { value: 'price-asc', label: '가격 낮은순' },
          { value: 'price-desc', label: '가격 높은순' },
          { value: 'newest', label: '최신순' },
        ])}
      />
    </div>
  ),
};

export const ButtonVariant: Story = {
  render: () => (
    <div>
      <tinto-filter
        filter-id="filter4"
        label="상태"
        type="multiple"
        variant="button"
        options={JSON.stringify([
          { value: 'new', label: '신상품' },
          { value: 'sale', label: '할인중' },
          { value: 'stock', label: '재고있음' },
        ])}
        show-clear
      />
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-filter
        filter-id="filter5"
        label="검색 가능한 필터"
        type="multiple"
        options={JSON.stringify([
          ...sampleOptions,
          { value: 'option6', label: 'Option 6' },
          { value: 'option7', label: 'Option 7' },
          { value: 'option8', label: 'Option 8' },
        ])}
        searchable
        placeholder="옵션 검색..."
      />
    </div>
  ),
};

export const WithMaxSelection: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <tinto-filter
        filter-id="filter6"
        label="최대 3개 선택"
        type="multiple"
        options={JSON.stringify(sampleOptions)}
        max-selection={3}
        show-clear
      />
    </div>
  ),
};
