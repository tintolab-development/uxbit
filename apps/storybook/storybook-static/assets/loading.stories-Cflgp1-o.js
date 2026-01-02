import { h as e } from './vendor-stencil-dp4AnqGI.js';
const d = {
    title: 'Uxbit/Loading',
    component: 'tinto-loading',
    parameters: { layout: 'centered' },
    args: { size: 'md', variant: 'spinner', overlay: !1 },
    argTypes: {
      size: { control: 'select', options: ['sm', 'md', 'lg'] },
      variant: { control: 'select', options: ['spinner', 'dots', 'pulse'] },
    },
  },
  r = {
    render: (t) =>
      e('tinto-loading', { size: t.size, variant: t.variant, overlay: t.overlay, text: t.text }),
  },
  a = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' } },
        e('tinto-loading', { variant: 'spinner' }),
        e('tinto-loading', { variant: 'dots' }),
        e('tinto-loading', { variant: 'pulse' }),
      ),
  },
  i = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '24px', alignItems: 'center' } },
        e('tinto-loading', { size: 'sm' }),
        e('tinto-loading', { size: 'md' }),
        e('tinto-loading', { size: 'lg' }),
      ),
  },
  o = { render: () => e('tinto-loading', { text: '로딩 중...' }) },
  s = {
    render: () =>
      e(
        'div',
        {
          style: {
            position: 'relative',
            width: '400px',
            height: '300px',
            border: '1px solid #e0e0e0',
          },
        },
        e('tinto-loading', { overlay: !0, text: '로딩 중...' }),
      ),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-loading size={args.size} variant={args.variant} overlay={args.overlay} text={args.text} />
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center'
  }}>
      <tinto-loading variant="spinner" />
      <tinto-loading variant="dots" />
      <tinto-loading variant="pulse" />
    </div>
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <tinto-loading size="sm" />
      <tinto-loading size="md" />
      <tinto-loading size="lg" />
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <tinto-loading text="로딩 중..." />
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    position: 'relative',
    width: '400px',
    height: '300px',
    border: '1px solid #e0e0e0'
  }}>
      <tinto-loading overlay={true} text="로딩 중..." />
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const l = ['Default', 'Variants', 'Sizes', 'WithText', 'Overlay'];
export {
  r as Default,
  s as Overlay,
  i as Sizes,
  a as Variants,
  o as WithText,
  l as __namedExportsOrder,
  d as default,
};
