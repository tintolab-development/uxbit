// pagination.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { PaginationVariant, PaginationSize, PaginationAlign } from './pagination.types';

type PaginationStoryProps = {
  variant: PaginationVariant;
  size: PaginationSize;
  align: PaginationAlign;
  current: number;
  total: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  totalItems?: number;
  disabled?: boolean;
};

const meta = {
  title: 'Uxbit/Pagination',
  component: 'tinto-pagination',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'default',
    size: 'md',
    align: 'start',
    current: 1,
    total: 10,
    pageSize: undefined,
    showSizeChanger: false,
    showQuickJumper: false,
    showTotal: false,
    totalItems: undefined,
    disabled: false,
  } satisfies PaginationStoryProps,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'simple', 'compact'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { category: 'appearance' },
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      table: { category: 'layout' },
    },
    current: {
      control: { type: 'number', min: 1 },
      table: { category: 'behavior' },
    },
    total: {
      control: { type: 'number', min: 1 },
      table: { category: 'behavior' },
    },
    pageSize: {
      control: { type: 'number' },
      table: { category: 'behavior' },
    },
    showSizeChanger: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
    showQuickJumper: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
    showTotal: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
    totalItems: {
      control: { type: 'number' },
      table: { category: 'behavior' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'state' },
    },
  },
} satisfies Meta<PaginationStoryProps>;

export default meta;
type Story = StoryObj<PaginationStoryProps>;

export const Default: Story = {
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      size={args.size}
      align={args.align}
      current={args.current}
      total={args.total}
      pageSize={args.pageSize}
      showSizeChanger={args.showSizeChanger}
      showQuickJumper={args.showQuickJumper}
      showTotal={args.showTotal}
      totalItems={args.totalItems}
      disabled={args.disabled}
    />
  ),
};

export const Simple: Story = {
  args: {
    variant: 'simple',
  },
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      current={args.current}
      total={args.total}
      disabled={args.disabled}
    />
  ),
};

export const WithTotal: Story = {
  args: {
    showTotal: true,
    totalItems: 150,
  },
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      current={args.current}
      total={args.total}
      showTotal={args.showTotal}
      totalItems={args.totalItems}
    />
  ),
};

export const WithSizeChanger: Story = {
  args: {
    showSizeChanger: true,
    pageSize: 20,
  },
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      current={args.current}
      total={args.total}
      showSizeChanger={args.showSizeChanger}
      pageSize={args.pageSize}
    />
  ),
};

export const WithQuickJumper: Story = {
  args: {
    showQuickJumper: true,
    total: 50,
  },
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      current={args.current}
      total={args.total}
      showQuickJumper={args.showQuickJumper}
    />
  ),
};

export const LargeDataset: Story = {
  args: {
    current: 25,
    total: 100,
    showTotal: true,
    totalItems: 1000,
  },
  render: (args) => (
    <tinto-pagination
      variant={args.variant}
      current={args.current}
      total={args.total}
      showTotal={args.showTotal}
      totalItems={args.totalItems}
    />
  ),
};
