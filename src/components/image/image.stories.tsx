import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import { TintoImage } from './image';

const meta = {
  title: 'Uxbit/Image',
  component: TintoImage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    ratio: {
      control: { type: 'select' },
      options: ['1:1', '2:1', '3:2', '4:3', '16:9', '3:1', '1:2', '2:3', '3:4', '9:16', '1:3'],
    },
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
    },
    rounded: {
      control: { type: 'select' },
      options: ['soft', 'oval', 'top', 'diagonal', 'circle', 'base', 'full'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    placeholder: { control: 'text' },
    animation: {
      control: { type: 'select' },
      options: ['', 'spin', 'float', 'wobble', 'pulse'],
    },
    play: { control: 'boolean' },
    duration: { control: 'number' },
    href: { control: 'text' },
    // as: {
    //   control: { type: 'select' },
    //   options: [undefined, 'button'],
    // },
  },
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Random image',
    ratio: '16:9',
    fit: 'cover',
    width: '300px',
    rounded: 'soft',
    animation: '',
    play: true,
    duration: 3,
  },
} satisfies Meta<TintoImage>;

export default meta;

type Story = StoryObj<TintoImage>;

/**
 * 기본 이미지 스토리
 */
export const Primary: Story = {
  render: (props) => <tinto-image {...props} />,
};

// /**
//  * Placeholder 있는 버전
//  */
// export const WithPlaceholder: Story = {
//   args: {
//     placeholder: 'https://picsum.photos/16/9?blur=10',
//   },
// };

// /**
//  * 링크로 동작하는 버전 (href / target)
//  */
// export const AsLink: Story = {
//   args: {
//     href: 'https://example.com',
//     target: '_blank',
//   },
// };

// /**
//  * overlay 슬롯 사용 예시
//  * (tinto-image 안의 <slot name="overlay">에 들어감)
//  */
// export const WithOverlaySlot: Story = {
//   parameters: {
//     slots: {
//       overlay: (
//         <div
//           style={{
//             position: 'absolute',
//             right: '1rem',
//             bottom: '1rem',
//             padding: '0.25rem 0.5rem',
//             background: 'rgba(0, 0, 0, 0.6)',
//             color: '#fff',
//             borderRadius: '999px',
//             fontSize: '12px',
//           }}
//         >
//           OVERLAY
//         </div>
//       ),
//     },
//   },
// };
