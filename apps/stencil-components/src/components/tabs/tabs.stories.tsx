// tabs.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TabsVariant, TabsSize, TabsOrientation, TabsPosition } from './tabs.types';

type TabsStoryProps = {
  variant: TabsVariant;
  size: TabsSize;
  orientation: TabsOrientation;
  position: TabsPosition;
  defaultTab?: string;
  disabled?: boolean;
  scrollable?: boolean;
};

const meta = {
  title: 'Uxbit/Tabs',
  component: 'tinto-tabs',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    position: 'start',
    defaultTab: undefined,
    disabled: false,
    scrollable: false,
  } satisfies TabsStoryProps,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'underline', 'pills', 'enclosed'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { category: 'appearance' },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: { category: 'layout' },
    },
    position: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      table: { category: 'layout' },
    },
    defaultTab: {
      control: 'text',
      table: { category: 'behavior' },
    },
    disabled: {
      control: 'boolean',
      table: { category: 'state' },
    },
    scrollable: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
  },
} satisfies Meta<TabsStoryProps>;

export default meta;
type Story = StoryObj<TabsStoryProps>;

export const Default: Story = {
  render: (args) => (
    <tinto-tabs
      variant={args.variant}
      size={args.size}
      orientation={args.orientation}
      position={args.position}
      defaultTab={args.defaultTab}
      disabled={args.disabled}
      scrollable={args.scrollable}
    >
      <tinto-tab-panel tabId="tab1" label="탭 1">
        <p>탭 1의 콘텐츠입니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="탭 2">
        <p>탭 2의 콘텐츠입니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="탭 3">
        <p>탭 3의 콘텐츠입니다.</p>
      </tinto-tab-panel>
    </tinto-tabs>
  ),
};

export const Underline: Story = {
  args: {
    variant: 'underline',
  },
  render: (args) => (
    <tinto-tabs
      variant={args.variant}
      size={args.size}
      orientation={args.orientation}
      position={args.position}
    >
      <tinto-tab-panel tabId="tab1" label="홈">
        <p>홈 콘텐츠</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="검색">
        <p>검색 콘텐츠</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="프로필">
        <p>프로필 콘텐츠</p>
      </tinto-tab-panel>
    </tinto-tabs>
  ),
};

export const Pills: Story = {
  args: {
    variant: 'pills',
  },
  render: (args) => (
    <tinto-tabs variant={args.variant} size={args.size}>
      <tinto-tab-panel tabId="tab1" label="전체">
        <p>전체 항목</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="진행중">
        <p>진행중 항목</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="완료">
        <p>완료 항목</p>
      </tinto-tab-panel>
    </tinto-tabs>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'underline',
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '400px' }}>
      <tinto-tabs variant={args.variant} orientation={args.orientation} size={args.size}>
        <tinto-tab-panel tabId="tab1" label="설정">
          <p>설정 콘텐츠</p>
        </tinto-tab-panel>
        <tinto-tab-panel tabId="tab2" label="프로필">
          <p>프로필 콘텐츠</p>
        </tinto-tab-panel>
        <tinto-tab-panel tabId="tab3" label="보안">
          <p>보안 콘텐츠</p>
        </tinto-tab-panel>
      </tinto-tabs>
    </div>
  ),
};

export const WithDisabledTab: Story = {
  render: (args) => (
    <tinto-tabs variant={args.variant} size={args.size}>
      <tinto-tab-panel tabId="tab1" label="활성 탭">
        <p>이 탭은 활성화되어 있습니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="비활성 탭" disabled>
        <p>이 탭은 비활성화되어 있습니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="일반 탭">
        <p>일반 탭입니다.</p>
      </tinto-tab-panel>
    </tinto-tabs>
  ),
};
