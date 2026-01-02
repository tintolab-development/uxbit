import { h as n } from './vendor-stencil-dp4AnqGI.js';
const s = {
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
    args: { padding: '0', maxWidth: 'none', center: !1, background: 'transparent' },
    argTypes: {
      padding: { control: 'text', description: '패딩 (기본값: 0)' },
      maxWidth: { control: 'text', description: '최대 너비' },
      center: { control: 'boolean', description: '가운데 정렬' },
      background: { control: 'color', description: '배경색' },
    },
  },
  e = {
    name: 'Basic Content',
    render: (t) =>
      n(
        'tinto-content',
        {
          padding: t.padding,
          maxWidth: t.maxWidth !== 'none' ? t.maxWidth : void 0,
          center: t.center,
          background: t.background,
        },
        n(
          'div',
          { style: { background: '#f0f2f5', padding: '24px', borderRadius: '8px' } },
          n('h2', null, 'Content Area'),
          n(
            'p',
            null,
            'This is the main content area. By default, padding is 0 to match the size of child elements.',
          ),
        ),
      ),
  },
  d = {
    name: 'Content with Padding',
    render: () =>
      n(
        'tinto-content',
        { padding: '24px' },
        n(
          'div',
          { style: { background: '#f0f2f5', padding: '24px', borderRadius: '8px' } },
          n('h2', null, 'Content with Padding'),
          n('p', null, 'This content has padding="24px" applied.'),
        ),
      ),
  },
  o = {
    name: 'Centered Content',
    render: () =>
      n(
        'tinto-content',
        { maxWidth: '1200px', center: !0, padding: '24px' },
        n(
          'div',
          { style: { background: '#f0f2f5', padding: '24px', borderRadius: '8px' } },
          n('h2', null, 'Centered Content'),
          n('p', null, 'This content is centered with max-width="1200px" and center prop.'),
        ),
      ),
  },
  i = {
    name: 'Responsive Content',
    render: () =>
      n(
        'tinto-content',
        {
          padding: { xs: '16px', md: '24px', lg: '32px' },
          maxWidth: { xs: '100%', md: '768px', lg: '1200px' },
          center: !0,
        },
        n(
          'div',
          { style: { background: '#f0f2f5', padding: '24px', borderRadius: '8px' } },
          n('h2', null, 'Responsive Content'),
          n('p', null, 'This content adapts to different screen sizes:'),
          n(
            'ul',
            null,
            n('li', null, 'xs: Mobile (< 640px) - padding: 16px, max-width: 100%'),
            n('li', null, 'md: Desktop (>= 768px) - padding: 24px, max-width: 768px'),
            n('li', null, 'lg: Large Desktop (>= 1024px) - padding: 32px, max-width: 1200px'),
          ),
        ),
      ),
  },
  a = {
    name: 'Multiple Contents in Section',
    render: () =>
      n(
        'tinto-section',
        { gap: '16px', padding: '24px' },
        n(
          'tinto-content',
          null,
          n('h2', null, 'First Content'),
          n('p', null, 'This is the first content block. No padding by default.'),
        ),
        n(
          'tinto-content',
          null,
          n('h2', null, 'Second Content'),
          n(
            'p',
            null,
            'This is the second content block. Gap between contents is controlled by tinto-section.',
          ),
        ),
        n(
          'tinto-content',
          { padding: '16px', background: '#e0e7ff' },
          n('h2', null, 'Third Content with Padding'),
          n('p', null, 'This content has explicit padding and background.'),
        ),
      ),
  },
  r = {
    name: 'Playground',
    render: (t) =>
      n(
        'tinto-content',
        {
          padding: t.padding,
          maxWidth: t.maxWidth !== 'none' ? t.maxWidth : void 0,
          center: t.center,
          background: t.background,
        },
        n(
          'div',
          {
            style: {
              background: '#f0f2f5',
              padding: '24px',
              borderRadius: '8px',
              minHeight: '200px',
            },
          },
          n('h2', null, 'Playground Content'),
          n('p', null, 'Adjust the controls to see how tinto-content behaves.'),
          n(
            'ul',
            null,
            n('li', null, 'Padding: ', t.padding),
            n('li', null, 'Max Width: ', t.maxWidth),
            n('li', null, 'Center: ', t.center ? 'Yes' : 'No'),
            n('li', null, 'Background: ', t.background),
          ),
        ),
      ),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Basic Content',
  render: args => {
    return <tinto-content padding={args.padding} maxWidth={args.maxWidth !== 'none' ? args.maxWidth : undefined} center={args.center} background={args.background}>
        <div style={{
        background: '#f0f2f5',
        padding: '24px',
        borderRadius: '8px'
      } as any}>
          <h2>Content Area</h2>
          <p>
            This is the main content area. By default, padding is 0 to match the size of child
            elements.
          </p>
        </div>
      </tinto-content>;
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Content with Padding',
  render: () => {
    return <tinto-content padding="24px">
        <div style={{
        background: '#f0f2f5',
        padding: '24px',
        borderRadius: '8px'
      } as any}>
          <h2>Content with Padding</h2>
          <p>This content has padding="24px" applied.</p>
        </div>
      </tinto-content>;
  }
}`,
      ...d.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Centered Content',
  render: () => {
    return <tinto-content maxWidth="1200px" center padding="24px">
        <div style={{
        background: '#f0f2f5',
        padding: '24px',
        borderRadius: '8px'
      } as any}>
          <h2>Centered Content</h2>
          <p>This content is centered with max-width="1200px" and center prop.</p>
        </div>
      </tinto-content>;
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
  name: 'Responsive Content',
  render: () => {
    return <tinto-content padding={{
      xs: '16px',
      md: '24px',
      lg: '32px'
    }} maxWidth={{
      xs: '100%',
      md: '768px',
      lg: '1200px'
    }} center>
        <div style={{
        background: '#f0f2f5',
        padding: '24px',
        borderRadius: '8px'
      } as any}>
          <h2>Responsive Content</h2>
          <p>This content adapts to different screen sizes:</p>
          <ul>
            <li>xs: Mobile (&lt; 640px) - padding: 16px, max-width: 100%</li>
            <li>md: Desktop (&gt;= 768px) - padding: 24px, max-width: 768px</li>
            <li>lg: Large Desktop (&gt;= 1024px) - padding: 32px, max-width: 1200px</li>
          </ul>
        </div>
      </tinto-content>;
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Multiple Contents in Section',
  render: () => {
    return <tinto-section gap="16px" padding="24px">
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
      </tinto-section>;
  }
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Playground',
  render: args => {
    return <tinto-content padding={args.padding} maxWidth={args.maxWidth !== 'none' ? args.maxWidth : undefined} center={args.center} background={args.background}>
        <div style={{
        background: '#f0f2f5',
        padding: '24px',
        borderRadius: '8px',
        minHeight: '200px'
      } as any}>
          <h2>Playground Content</h2>
          <p>Adjust the controls to see how tinto-content behaves.</p>
          <ul>
            <li>Padding: {args.padding}</li>
            <li>Max Width: {args.maxWidth}</li>
            <li>Center: {args.center ? 'Yes' : 'No'}</li>
            <li>Background: {args.background}</li>
          </ul>
        </div>
      </tinto-content>;
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const c = ['Basic', 'WithPadding', 'Centered', 'Responsive', 'MultipleContents', 'Playground'];
export {
  e as Basic,
  o as Centered,
  a as MultipleContents,
  r as Playground,
  i as Responsive,
  d as WithPadding,
  c as __namedExportsOrder,
  s as default,
};
