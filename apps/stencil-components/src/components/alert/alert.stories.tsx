// alert.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { AlertType, AlertVariant, AlertSize } from './alert.types';

type AlertStoryProps = {
  type: AlertType;
  variant: AlertVariant;
  size: AlertSize;
  closable: boolean;
  autoClose: boolean;
  closeAfter: number;
  showIcon: boolean;
  alertTitle?: string;
};

const meta = {
  title: 'Uxbit/Alert',
  component: 'tinto-alert',
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'info',
    variant: 'default',
    size: 'md',
    closable: false,
    autoClose: false,
    closeAfter: 5000,
    showIcon: true,
    alertTitle: undefined,
  } satisfies AlertStoryProps,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      table: { category: 'appearance' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
      table: { category: 'appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { category: 'appearance' },
    },
    closable: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
    autoClose: {
      control: 'boolean',
      table: { category: 'behavior' },
    },
    closeAfter: {
      control: { type: 'number', min: 0 },
      table: { category: 'behavior' },
    },
    showIcon: {
      control: 'boolean',
      table: { category: 'appearance' },
    },
    alertTitle: {
      control: 'text',
      table: { category: 'content' },
    },
  },
} satisfies Meta<AlertStoryProps>;

export default meta;
type Story = StoryObj<AlertStoryProps>;

export const Default: Story = {
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      size={args.size}
      closable={args.closable}
      autoClose={args.autoClose}
      closeAfter={args.closeAfter}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle}
    >
      이것은 기본 알림 메시지입니다.
    </tinto-alert>
  ),
};

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle || '성공'}
    >
      작업이 성공적으로 완료되었습니다.
    </tinto-alert>
  ),
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle || '오류'}
    >
      오류가 발생했습니다. 다시 시도해주세요.
    </tinto-alert>
  ),
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle || '경고'}
    >
      이 작업은 되돌릴 수 없습니다.
    </tinto-alert>
  ),
};

export const Info: Story = {
  args: {
    type: 'info',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle || '정보'}
    >
      새로운 기능이 추가되었습니다.
    </tinto-alert>
  ),
};

export const WithTitle: Story = {
  args: {
    alertTitle: '알림 제목',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
      alertTitle={args.alertTitle}
    >
      이것은 제목이 있는 알림 메시지입니다.
    </tinto-alert>
  ),
};

export const Closable: Story = {
  args: {
    closable: true,
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
    >
      닫기 버튼이 있는 알림입니다.
    </tinto-alert>
  ),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
    >
      배경색이 채워진 알림입니다.
    </tinto-alert>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
    >
      테두리만 있는 알림입니다.
    </tinto-alert>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <tinto-alert
      type={args.type}
      variant={args.variant}
      closable={args.closable}
      showIcon={args.showIcon}
    >
      액션 버튼이 있는 알림입니다.
      <tinto-button slot="action" size="sm" variant="primary">
        확인
      </tinto-button>
    </tinto-alert>
  ),
};
