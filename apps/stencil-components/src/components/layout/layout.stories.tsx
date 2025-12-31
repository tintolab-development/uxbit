import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type LayoutArgs = {
  direction: 'row' | 'column';
  gap: string;
  height: 'auto' | '100vh' | '100dvh';
  headerHeight: string;
  headerFixed: boolean;
  headerBackground: string;
  contentPadding: string;
  contentMaxWidth: string;
  contentCenter: boolean;
  footerHeight: string;
  footerBackground: string;
  siderWidth: string;
  siderCollapsed: boolean;
  siderCollapsible: boolean;
  siderBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
};

const meta: Meta<LayoutArgs> = {
  title: 'Uxbit/Layout',
  component: 'tinto-layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Ant Design 스타일의 Layout 시스템. Header, Content, Footer, Sider를 포함할 수 있으며, 모든 컴포넌트는 responsive합니다.',
      },
    },
  },
  args: {
    direction: 'column',
    gap: '0',
    height: 'auto',
    headerHeight: '64px',
    headerFixed: false,
    headerBackground: '#001529',
    contentPadding: '0',
    contentMaxWidth: '1200px',
    contentCenter: true,
    footerHeight: 'auto',
    footerBackground: '#f5f5f5',
    siderWidth: '200px',
    siderCollapsed: false,
    siderCollapsible: false,
    siderBreakpoint: undefined,
  },
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['row', 'column'],
      description: 'Layout 방향',
    },
    gap: {
      control: 'text',
      description: '자식 요소 간 간격',
    },
    height: {
      control: { type: 'inline-radio' },
      options: ['auto', '100vh', '100dvh'],
      description: '높이 모드',
    },
    headerHeight: {
      control: 'text',
      description: '헤더 높이',
    },
    headerFixed: {
      control: 'boolean',
      description: '고정 헤더',
    },
    headerBackground: {
      control: 'color',
      description: '헤더 배경색',
    },
    contentPadding: {
      control: 'text',
      description: '콘텐츠 패딩',
    },
    contentMaxWidth: {
      control: 'text',
      description: '콘텐츠 최대 너비',
    },
    contentCenter: {
      control: 'boolean',
      description: '콘텐츠 가운데 정렬',
    },
    footerHeight: {
      control: 'text',
      description: '푸터 높이',
    },
    footerBackground: {
      control: 'color',
      description: '푸터 배경색',
    },
    siderWidth: {
      control: 'text',
      description: '사이드바 너비',
    },
    siderCollapsed: {
      control: 'boolean',
      description: '사이드바 접힘 상태',
    },
    siderCollapsible: {
      control: 'boolean',
      description: '사이드바 접힘 가능 여부',
    },
    siderBreakpoint: {
      control: { type: 'select' },
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: '자동 숨김 breakpoint',
    },
  },
};

export default meta;

type Story = StoryObj<LayoutArgs>;

export const Basic: Story = {
  name: 'Basic Layout',
  render: (args) => {
    return (
      <tinto-layout direction={args.direction} gap={args.gap} height={args.height}>
        <tinto-header
          height={args.headerHeight}
          fixed={args.headerFixed}
          background={args.headerBackground}
        >
          <div style={{ color: '#fff', padding: '0 24px' }}>Header</div>
        </tinto-header>
        <tinto-content
          padding={args.contentPadding}
          maxWidth={args.contentMaxWidth}
          center={args.contentCenter}
        >
          <div style={{ minHeight: '400px', background: '#f0f2f5', padding: '24px' }}>
            <h2>Content</h2>
            <p>Main content area (tinto-content padding is 0 by default)</p>
          </div>
        </tinto-content>
        <tinto-footer height={args.footerHeight} background={args.footerBackground}>
          <div style={{ padding: '0 24px' }}>Footer</div>
        </tinto-footer>
      </tinto-layout>
    );
  },
};

export const WithSider: Story = {
  name: 'Layout with Sider',
  render: (args) => {
    return (
      <tinto-layout direction="column" height="100dvh">
        <tinto-header height="64px" background="#001529">
          <div style={{ color: '#fff', padding: '0 24px' }}>Header</div>
        </tinto-header>
        <tinto-layout direction="row">
          <tinto-sider
            width={args.siderWidth}
            collapsed={args.siderCollapsed}
            collapsible={args.siderCollapsible}
            breakpoint={args.siderBreakpoint}
            background="#001529"
          >
            <div style={{ color: '#fff', padding: '16px' }}>
              <h3 style={{ color: '#fff', margin: '0 0 16px 0' } as any}>Sidebar</h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' } as any}>
                <li style={{ padding: '8px 0', color: '#fff' } as any}>Menu Item 1</li>
                <li style={{ padding: '8px 0', color: '#fff' } as any}>Menu Item 2</li>
                <li style={{ padding: '8px 0', color: '#fff' } as any}>Menu Item 3</li>
              </ul>
            </div>
          </tinto-sider>
          <tinto-content padding="24px" maxWidth="1200px" center>
            <div style={{ minHeight: '400px', background: '#f0f2f5', padding: '24px' }}>
              <h2>Content</h2>
              <p>Main content area with sidebar (padding="24px" explicitly set)</p>
            </div>
          </tinto-content>
        </tinto-layout>
        <tinto-footer height="auto" background="#f5f5f5">
          <div style={{ padding: '16px 24px' }}>Footer</div>
        </tinto-footer>
      </tinto-layout>
    );
  },
};

export const Responsive: Story = {
  name: 'Responsive Layout',
  render: () => {
    return (
      <tinto-layout direction="column" height="100dvh" gap={{ xs: '0', md: '16px', lg: '24px' }}>
        <tinto-header
          height={{ xs: '56px', md: '64px', lg: '72px' }}
          background="#001529"
          padding={{ xs: '0 16px', md: '0 24px', lg: '0 32px' }}
        >
          <div style={{ color: '#fff' }}>Responsive Header</div>
        </tinto-header>
        <tinto-layout direction="row">
          <tinto-sider
            width={{ xs: '0', md: '200px', lg: '240px' }}
            breakpoint="md"
            background="#001529"
          >
            <div style={{ color: '#fff', padding: '16px' }}>
              <h3 style={{ color: '#fff' }}>Sidebar</h3>
              <p style={{ color: '#fff' }}>Visible on md+</p>
            </div>
          </tinto-sider>
          <tinto-content
            padding={{ xs: '16px', md: '24px', lg: '32px' }}
            maxWidth={{ xs: '100%', md: '768px', lg: '1200px' }}
            center
          >
            <div style={{ minHeight: '400px', background: '#f0f2f5', padding: '24px' }}>
              <h2>Responsive Content</h2>
              <p>This layout adapts to different screen sizes:</p>
              <ul>
                <li>xs: Mobile (&lt; 640px)</li>
                <li>sm: Tablet (&gt;= 640px)</li>
                <li>md: Desktop (&gt;= 768px)</li>
                <li>lg: Large Desktop (&gt;= 1024px)</li>
                <li>xl: XL Desktop (&gt;= 1280px)</li>
                <li>2xl: 2XL Desktop (&gt;= 1536px)</li>
              </ul>
            </div>
          </tinto-content>
        </tinto-layout>
        <tinto-footer height="auto" background="#f5f5f5" padding={{ xs: '16px', md: '24px' }}>
          <div>Responsive Footer</div>
        </tinto-footer>
      </tinto-layout>
    );
  },
};

export const FixedHeader: Story = {
  name: 'Fixed Header',
  render: () => {
    return (
      <tinto-layout direction="column" height="100dvh">
        <tinto-header height="64px" fixed background="#001529" zIndex={1000}>
          <div style={{ color: '#fff', padding: '0 24px' }}>Fixed Header</div>
        </tinto-header>
        <tinto-content padding="24px" style={{ paddingTop: '88px' } as any}>
          <div style={{ minHeight: '200vh', background: '#f0f2f5', padding: '24px' }}>
            <h2>Content with Fixed Header</h2>
            <p>Scroll down to see the fixed header stays at the top.</p>
            <div style={{ height: '100vh' }}></div>
            <p>More content...</p>
          </div>
        </tinto-content>
        <tinto-footer height="auto" background="#f5f5f5">
          <div style={{ padding: '16px 24px' }}>Footer</div>
        </tinto-footer>
      </tinto-layout>
    );
  },
};
