import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type ContentArgs = {
  padding: string;
  maxWidth: string;
  center: boolean;
  background: string;
};

const meta: Meta<ContentArgs> = {
  title: 'Uxbit/Layout/Content',
  component: 'tinto-content',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '페이지 메인 콘텐츠 영역을 담당합니다. 기본 padding은 0이며, 하위 요소 크기에 맞춰 자동으로 조정됩니다.',
      },
    },
  },
  args: {
    padding: '0',
    maxWidth: 'none',
    center: false,
    background: 'transparent',
  },
  argTypes: {
    padding: {
      control: 'text',
      description: '패딩 (기본값: 0)',
    },
    maxWidth: {
      control: 'text',
      description: '최대 너비',
    },
    center: {
      control: 'boolean',
      description: '가운데 정렬',
    },
    background: {
      control: 'color',
      description: '배경색',
    },
  },
};

export default meta;

type Story = StoryObj<ContentArgs>;

export const Basic: Story = {
  name: 'Basic Content',
  render: (args) => {
    return (
      <tinto-content
        padding={args.padding}
        maxWidth={args.maxWidth !== 'none' ? args.maxWidth : undefined}
        center={args.center}
        background={args.background}
      >
        <div style={{ background: '#f0f2f5', padding: '24px', borderRadius: '8px' } as any}>
          <h2>Content Area</h2>
          <p>
            This is the main content area. By default, padding is 0 to match the size of child
            elements.
          </p>
        </div>
      </tinto-content>
    );
  },
};

export const WithPadding: Story = {
  name: 'Content with Padding',
  render: () => {
    return (
      <tinto-content padding="24px">
        <div style={{ background: '#f0f2f5', padding: '24px', borderRadius: '8px' } as any}>
          <h2>Content with Padding</h2>
          <p>This content has padding="24px" applied.</p>
        </div>
      </tinto-content>
    );
  },
};

export const Centered: Story = {
  name: 'Centered Content',
  render: () => {
    return (
      <tinto-content maxWidth="1200px" center padding="24px">
        <div style={{ background: '#f0f2f5', padding: '24px', borderRadius: '8px' } as any}>
          <h2>Centered Content</h2>
          <p>This content is centered with max-width="1200px" and center prop.</p>
        </div>
      </tinto-content>
    );
  },
};

export const Responsive: Story = {
  name: 'Responsive Content',
  render: () => {
    return (
      <tinto-content
        padding={{ xs: '16px', md: '24px', lg: '32px' }}
        maxWidth={{ xs: '100%', md: '768px', lg: '1200px' }}
        center
      >
        <div style={{ background: '#f0f2f5', padding: '24px', borderRadius: '8px' } as any}>
          <h2>Responsive Content</h2>
          <p>This content adapts to different screen sizes:</p>
          <ul>
            <li>xs: Mobile (&lt; 640px) - padding: 16px, max-width: 100%</li>
            <li>md: Desktop (&gt;= 768px) - padding: 24px, max-width: 768px</li>
            <li>lg: Large Desktop (&gt;= 1024px) - padding: 32px, max-width: 1200px</li>
          </ul>
        </div>
      </tinto-content>
    );
  },
};

export const MultipleContents: Story = {
  name: 'Multiple Contents in Section',
  render: () => {
    return (
      <tinto-section gap="16px" padding="24px">
        <tinto-content>
          <h2>First Content</h2>
          <p>This is the first content block. No padding by default.</p>
        </tinto-content>
        <tinto-content>
          <h2>Second Content</h2>
          <p>
            This is the second content block. Gap between contents is controlled by tinto-section.
          </p>
        </tinto-content>
        <tinto-content padding="16px" background="#e0e7ff">
          <h2>Third Content with Padding</h2>
          <p>This content has explicit padding and background.</p>
        </tinto-content>
      </tinto-section>
    );
  },
};

export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    return (
      <tinto-content
        padding={args.padding}
        maxWidth={args.maxWidth !== 'none' ? args.maxWidth : undefined}
        center={args.center}
        background={args.background}
      >
        <div
          style={
            {
              background: '#f0f2f5',
              padding: '24px',
              borderRadius: '8px',
              minHeight: '200px',
            } as any
          }
        >
          <h2>Playground Content</h2>
          <p>Adjust the controls to see how tinto-content behaves.</p>
          <ul>
            <li>Padding: {args.padding}</li>
            <li>Max Width: {args.maxWidth}</li>
            <li>Center: {args.center ? 'Yes' : 'No'}</li>
            <li>Background: {args.background}</li>
          </ul>
        </div>
      </tinto-content>
    );
  },
};
