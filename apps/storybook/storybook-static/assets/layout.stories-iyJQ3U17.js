import { h as t } from './vendor-stencil-dp4AnqGI.js';
const a = {
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
      headerFixed: !1,
      headerBackground: '#001529',
      contentPadding: '0',
      contentMaxWidth: '1200px',
      contentCenter: !0,
      footerHeight: 'auto',
      footerBackground: '#f5f5f5',
      siderWidth: '200px',
      siderCollapsed: !1,
      siderCollapsible: !1,
      siderBreakpoint: void 0,
    },
    argTypes: {
      direction: {
        control: { type: 'inline-radio' },
        options: ['row', 'column'],
        description: 'Layout 방향',
      },
      gap: { control: 'text', description: '자식 요소 간 간격' },
      height: {
        control: { type: 'inline-radio' },
        options: ['auto', '100vh', '100dvh'],
        description: '높이 모드',
      },
      headerHeight: { control: 'text', description: '헤더 높이' },
      headerFixed: { control: 'boolean', description: '고정 헤더' },
      headerBackground: { control: 'color', description: '헤더 배경색' },
      contentPadding: { control: 'text', description: '콘텐츠 패딩' },
      contentMaxWidth: { control: 'text', description: '콘텐츠 최대 너비' },
      contentCenter: { control: 'boolean', description: '콘텐츠 가운데 정렬' },
      footerHeight: { control: 'text', description: '푸터 높이' },
      footerBackground: { control: 'color', description: '푸터 배경색' },
      siderWidth: { control: 'text', description: '사이드바 너비' },
      siderCollapsed: { control: 'boolean', description: '사이드바 접힘 상태' },
      siderCollapsible: { control: 'boolean', description: '사이드바 접힘 가능 여부' },
      siderBreakpoint: {
        control: { type: 'select' },
        options: [void 0, 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        description: '자동 숨김 breakpoint',
      },
    },
  },
  o = {
    name: 'Basic Layout',
    render: (e) =>
      t(
        'tinto-layout',
        { direction: e.direction, gap: e.gap, height: e.height },
        t(
          'tinto-header',
          { height: e.headerHeight, fixed: e.headerFixed, background: e.headerBackground },
          t('div', { style: { color: '#fff', padding: '0 24px' } }, 'Header'),
        ),
        t(
          'tinto-content',
          { padding: e.contentPadding, maxWidth: e.contentMaxWidth, center: e.contentCenter },
          t(
            'div',
            { style: { minHeight: '400px', background: '#f0f2f5', padding: '24px' } },
            t('h2', null, 'Content'),
            t('p', null, 'Main content area (tinto-content padding is 0 by default)'),
          ),
        ),
        t(
          'tinto-footer',
          { height: e.footerHeight, background: e.footerBackground },
          t('div', { style: { padding: '0 24px' } }, 'Footer'),
        ),
      ),
  },
  i = {
    name: 'Layout with Sider',
    render: (e) =>
      t(
        'tinto-layout',
        { direction: 'column', height: '100dvh' },
        t(
          'tinto-header',
          { height: '64px', background: '#001529' },
          t('div', { style: { color: '#fff', padding: '0 24px' } }, 'Header'),
        ),
        t(
          'tinto-layout',
          { direction: 'row' },
          t(
            'tinto-sider',
            {
              width: e.siderWidth,
              collapsed: e.siderCollapsed,
              collapsible: e.siderCollapsible,
              breakpoint: e.siderBreakpoint,
              background: '#001529',
            },
            t(
              'div',
              { style: { color: '#fff', padding: '16px' } },
              t('h3', { style: { color: '#fff', margin: '0 0 16px 0' } }, 'Sidebar'),
              t(
                'ul',
                { style: { listStyle: 'none', padding: '0', margin: '0' } },
                t('li', { style: { padding: '8px 0', color: '#fff' } }, 'Menu Item 1'),
                t('li', { style: { padding: '8px 0', color: '#fff' } }, 'Menu Item 2'),
                t('li', { style: { padding: '8px 0', color: '#fff' } }, 'Menu Item 3'),
              ),
            ),
          ),
          t(
            'tinto-content',
            { padding: '24px', maxWidth: '1200px', center: !0 },
            t(
              'div',
              { style: { minHeight: '400px', background: '#f0f2f5', padding: '24px' } },
              t('h2', null, 'Content'),
              t('p', null, 'Main content area with sidebar (padding="24px" explicitly set)'),
            ),
          ),
        ),
        t(
          'tinto-footer',
          { height: 'auto', background: '#f5f5f5' },
          t('div', { style: { padding: '16px 24px' } }, 'Footer'),
        ),
      ),
  },
  n = {
    name: 'Responsive Layout',
    render: () =>
      t(
        'tinto-layout',
        { direction: 'column', height: '100dvh', gap: { xs: '0', md: '16px', lg: '24px' } },
        t(
          'tinto-header',
          {
            height: { xs: '56px', md: '64px', lg: '72px' },
            background: '#001529',
            padding: { xs: '0 16px', md: '0 24px', lg: '0 32px' },
          },
          t('div', { style: { color: '#fff' } }, 'Responsive Header'),
        ),
        t(
          'tinto-layout',
          { direction: 'row' },
          t(
            'tinto-sider',
            {
              width: { xs: '0', md: '200px', lg: '240px' },
              breakpoint: 'md',
              background: '#001529',
            },
            t(
              'div',
              { style: { color: '#fff', padding: '16px' } },
              t('h3', { style: { color: '#fff' } }, 'Sidebar'),
              t('p', { style: { color: '#fff' } }, 'Visible on md+'),
            ),
          ),
          t(
            'tinto-content',
            {
              padding: { xs: '16px', md: '24px', lg: '32px' },
              maxWidth: { xs: '100%', md: '768px', lg: '1200px' },
              center: !0,
            },
            t(
              'div',
              { style: { minHeight: '400px', background: '#f0f2f5', padding: '24px' } },
              t('h2', null, 'Responsive Content'),
              t('p', null, 'This layout adapts to different screen sizes:'),
              t(
                'ul',
                null,
                t('li', null, 'xs: Mobile (< 640px)'),
                t('li', null, 'sm: Tablet (>= 640px)'),
                t('li', null, 'md: Desktop (>= 768px)'),
                t('li', null, 'lg: Large Desktop (>= 1024px)'),
                t('li', null, 'xl: XL Desktop (>= 1280px)'),
                t('li', null, '2xl: 2XL Desktop (>= 1536px)'),
              ),
            ),
          ),
        ),
        t(
          'tinto-footer',
          { height: 'auto', background: '#f5f5f5', padding: { xs: '16px', md: '24px' } },
          t('div', null, 'Responsive Footer'),
        ),
      ),
  },
  d = {
    name: 'Fixed Header',
    render: () =>
      t(
        'tinto-layout',
        { direction: 'column', height: '100dvh' },
        t(
          'tinto-header',
          { height: '64px', fixed: !0, background: '#001529', zIndex: 1e3 },
          t('div', { style: { color: '#fff', padding: '0 24px' } }, 'Fixed Header'),
        ),
        t(
          'tinto-content',
          { padding: '24px', style: { paddingTop: '88px' } },
          t(
            'div',
            { style: { minHeight: '200vh', background: '#f0f2f5', padding: '24px' } },
            t('h2', null, 'Content with Fixed Header'),
            t('p', null, 'Scroll down to see the fixed header stays at the top.'),
            t('div', { style: { height: '100vh' } }),
            t('p', null, 'More content...'),
          ),
        ),
        t(
          'tinto-footer',
          { height: 'auto', background: '#f5f5f5' },
          t('div', { style: { padding: '16px 24px' } }, 'Footer'),
        ),
      ),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Basic Layout',
  render: args => {
    return <tinto-layout direction={args.direction} gap={args.gap} height={args.height}>
        <tinto-header height={args.headerHeight} fixed={args.headerFixed} background={args.headerBackground}>
          <div style={{
          color: '#fff',
          padding: '0 24px'
        }}>Header</div>
        </tinto-header>
        <tinto-content padding={args.contentPadding} maxWidth={args.contentMaxWidth} center={args.contentCenter}>
          <div style={{
          minHeight: '400px',
          background: '#f0f2f5',
          padding: '24px'
        }}>
            <h2>Content</h2>
            <p>Main content area (tinto-content padding is 0 by default)</p>
          </div>
        </tinto-content>
        <tinto-footer height={args.footerHeight} background={args.footerBackground}>
          <div style={{
          padding: '0 24px'
        }}>Footer</div>
        </tinto-footer>
      </tinto-layout>;
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Layout with Sider',
  render: args => {
    return <tinto-layout direction="column" height="100dvh">
        <tinto-header height="64px" background="#001529">
          <div style={{
          color: '#fff',
          padding: '0 24px'
        }}>Header</div>
        </tinto-header>
        <tinto-layout direction="row">
          <tinto-sider width={args.siderWidth} collapsed={args.siderCollapsed} collapsible={args.siderCollapsible} breakpoint={args.siderBreakpoint} background="#001529">
            <div style={{
            color: '#fff',
            padding: '16px'
          }}>
              <h3 style={{
              color: '#fff',
              margin: '0 0 16px 0'
            } as any}>Sidebar</h3>
              <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            } as any}>
                <li style={{
                padding: '8px 0',
                color: '#fff'
              } as any}>Menu Item 1</li>
                <li style={{
                padding: '8px 0',
                color: '#fff'
              } as any}>Menu Item 2</li>
                <li style={{
                padding: '8px 0',
                color: '#fff'
              } as any}>Menu Item 3</li>
              </ul>
            </div>
          </tinto-sider>
          <tinto-content padding="24px" maxWidth="1200px" center>
            <div style={{
            minHeight: '400px',
            background: '#f0f2f5',
            padding: '24px'
          }}>
              <h2>Content</h2>
              <p>Main content area with sidebar (padding="24px" explicitly set)</p>
            </div>
          </tinto-content>
        </tinto-layout>
        <tinto-footer height="auto" background="#f5f5f5">
          <div style={{
          padding: '16px 24px'
        }}>Footer</div>
        </tinto-footer>
      </tinto-layout>;
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Responsive Layout',
  render: () => {
    return <tinto-layout direction="column" height="100dvh" gap={{
      xs: '0',
      md: '16px',
      lg: '24px'
    }}>
        <tinto-header height={{
        xs: '56px',
        md: '64px',
        lg: '72px'
      }} background="#001529" padding={{
        xs: '0 16px',
        md: '0 24px',
        lg: '0 32px'
      }}>
          <div style={{
          color: '#fff'
        }}>Responsive Header</div>
        </tinto-header>
        <tinto-layout direction="row">
          <tinto-sider width={{
          xs: '0',
          md: '200px',
          lg: '240px'
        }} breakpoint="md" background="#001529">
            <div style={{
            color: '#fff',
            padding: '16px'
          }}>
              <h3 style={{
              color: '#fff'
            }}>Sidebar</h3>
              <p style={{
              color: '#fff'
            }}>Visible on md+</p>
            </div>
          </tinto-sider>
          <tinto-content padding={{
          xs: '16px',
          md: '24px',
          lg: '32px'
        }} maxWidth={{
          xs: '100%',
          md: '768px',
          lg: '1200px'
        }} center>
            <div style={{
            minHeight: '400px',
            background: '#f0f2f5',
            padding: '24px'
          }}>
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
        <tinto-footer height="auto" background="#f5f5f5" padding={{
        xs: '16px',
        md: '24px'
      }}>
          <div>Responsive Footer</div>
        </tinto-footer>
      </tinto-layout>;
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Fixed Header',
  render: () => {
    return <tinto-layout direction="column" height="100dvh">
        <tinto-header height="64px" fixed background="#001529" zIndex={1000}>
          <div style={{
          color: '#fff',
          padding: '0 24px'
        }}>Fixed Header</div>
        </tinto-header>
        <tinto-content padding="24px" style={{
        paddingTop: '88px'
      } as any}>
          <div style={{
          minHeight: '200vh',
          background: '#f0f2f5',
          padding: '24px'
        }}>
            <h2>Content with Fixed Header</h2>
            <p>Scroll down to see the fixed header stays at the top.</p>
            <div style={{
            height: '100vh'
          }}></div>
            <p>More content...</p>
          </div>
        </tinto-content>
        <tinto-footer height="auto" background="#f5f5f5">
          <div style={{
          padding: '16px 24px'
        }}>Footer</div>
        </tinto-footer>
      </tinto-layout>;
  }
}`,
      ...d.parameters?.docs?.source,
    },
  },
};
const p = ['Basic', 'WithSider', 'Responsive', 'FixedHeader'];
export {
  o as Basic,
  d as FixedHeader,
  n as Responsive,
  i as WithSider,
  p as __namedExportsOrder,
  a as default,
};
