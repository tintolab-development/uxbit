import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { TintoButton } from './button';

type ExtraArgs = {
  content: string;
  prefixIcon?: string;
  suffixIcon?: string;
};

const meta: Meta<TintoButton & ExtraArgs> = {
  title: 'Uxbit/Button',
  component: 'tinto-button',
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    content: 'Button',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    pill: { control: 'boolean' },
    block: { control: 'boolean' },
    elevated: { control: 'boolean' },
    outline: { control: 'boolean' },

    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    toggle: { control: 'boolean' },
    pressed: { control: 'boolean' },

    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    href: { control: 'text' },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    radius: {
      control: 'text',
      description: 'border-radius 토큰 (예: "8px", "1.25rem", "50%")',
    },

    label: {
      control: 'text',
      description: 'label prop (비어 있으면 슬롯 content 사용)',
    },

    textFamily: {
      control: { type: 'select' },
      options: ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
    },
    textSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    textWeight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold', 'black'],
    },
    textColor: {
      control: 'color',
    },

    content: {
      control: 'text',
      description: 'default 슬롯 텍스트 (label 미사용 시)',
    },
    prefixIcon: {
      control: 'text',
      description: 'prefix 슬롯에 들어갈 텍스트/아이콘',
    },
    suffixIcon: {
      control: 'text',
      description: 'suffix 슬롯에 들어갈 텍스트/아이콘',
    },

    // 이벤트 → actions
    tintoClick: { action: 'tintoClick' },
    tintoToggle: { action: 'tintoToggle' },
  },
};

export default meta;

type Story = StoryObj<TintoButton & ExtraArgs>;

const Template: Story['render'] = (args) => (
  <tinto-button {...args}>
    {args.prefixIcon && <span slot="prefix">{args.prefixIcon}</span>}
    {args.content}
    {args.suffixIcon && <span slot="suffix">{args.suffixIcon}</span>}
  </tinto-button>
);

export const Primary: Story = {
  render: Template,
};

// export const Secondary: Story = {
//   render: Template,
//   args: {
//     variant: 'secondary',
//     label: 'Secondary',
//   },
// };

// export const TertiaryOutline: Story = {
//   render: Template,
//   args: {
//     variant: 'tertiary',
//     outline: true,
//     label: 'Tertiary outline',
//   },
// };

// export const WithPrefixSuffix: Story = {
//   render: Template,
//   args: {
//     label: 'With slots',
//     prefixIcon: '🔥',
//     suffixIcon: '→',
//   },
// };

// export const Loading: Story = {
//   render: Template,
//   args: {
//     label: 'Loading…',
//     loading: true,
//   },
// };

// export const ToggleButton: Story = {
//   render: Template,
//   args: {
//     label: 'Toggle',
//     toggle: true,
//     pressed: true,
//   },
// };
