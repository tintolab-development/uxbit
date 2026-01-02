import { h as e } from './vendor-stencil-dp4AnqGI.js';
const d = {
    title: 'Uxbit/Badge',
    component: 'tinto-badge',
    parameters: { layout: 'centered' },
    args: {
      variant: 'default',
      size: 'md',
      shape: 'default',
      label: 'Badge',
      count: 0,
      max: 99,
      dot: !1,
    },
    argTypes: {
      variant: {
        control: 'select',
        options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
      },
      size: { control: 'select', options: ['sm', 'md', 'lg'] },
      shape: { control: 'select', options: ['default', 'pill', 'dot'] },
    },
  },
  t = {
    render: (a) =>
      e('tinto-badge', {
        variant: a.variant,
        size: a.size,
        shape: a.shape,
        label: a.label,
        count: a.count || void 0,
        max: a.max,
        dot: a.dot,
      }),
  },
  r = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' } },
        e('tinto-badge', { variant: 'default', label: 'Default' }),
        e('tinto-badge', { variant: 'primary', label: 'Primary' }),
        e('tinto-badge', { variant: 'secondary', label: 'Secondary' }),
        e('tinto-badge', { variant: 'success', label: 'Success' }),
        e('tinto-badge', { variant: 'warning', label: 'Warning' }),
        e('tinto-badge', { variant: 'error', label: 'Error' }),
        e('tinto-badge', { variant: 'info', label: 'Info' }),
      ),
  },
  n = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
        e('tinto-badge', { size: 'sm', label: 'Small' }),
        e('tinto-badge', { size: 'md', label: 'Medium' }),
        e('tinto-badge', { size: 'lg', label: 'Large' }),
      ),
  },
  i = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
        e('tinto-badge', { shape: 'default', label: 'Default' }),
        e('tinto-badge', { shape: 'pill', label: 'Pill' }),
        e('tinto-badge', { shape: 'dot' }),
      ),
  },
  s = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
        e('tinto-badge', { variant: 'error', count: 5 }),
        e('tinto-badge', { variant: 'primary', count: 42 }),
        e('tinto-badge', { variant: 'warning', count: 150, max: 99 }),
      ),
  },
  o = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '12px', alignItems: 'center' } },
        e('tinto-badge', { variant: 'primary' }, e('span', null, 'Custom')),
        e('tinto-badge', { variant: 'success' }, e('span', null, '⭐ New')),
      ),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-badge variant={args.variant} size={args.size} shape={args.shape} label={args.label} count={args.count || undefined} max={args.max} dot={args.dot} />
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <tinto-badge variant="default" label="Default" />
      <tinto-badge variant="primary" label="Primary" />
      <tinto-badge variant="secondary" label="Secondary" />
      <tinto-badge variant="success" label="Success" />
      <tinto-badge variant="warning" label="Warning" />
      <tinto-badge variant="error" label="Error" />
      <tinto-badge variant="info" label="Info" />
    </div>
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <tinto-badge size="sm" label="Small" />
      <tinto-badge size="md" label="Medium" />
      <tinto-badge size="lg" label="Large" />
    </div>
}`,
      ...n.parameters?.docs?.source,
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
    gap: '12px',
    alignItems: 'center'
  }}>
      <tinto-badge shape="default" label="Default" />
      <tinto-badge shape="pill" label="Pill" />
      <tinto-badge shape="dot" />
    </div>
}`,
      ...i.parameters?.docs?.source,
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
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <tinto-badge variant="error" count={5} />
      <tinto-badge variant="primary" count={42} />
      <tinto-badge variant="warning" count={150} max={99} />
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <tinto-badge variant="primary">
        <span>Custom</span>
      </tinto-badge>
      <tinto-badge variant="success">
        <span>⭐ New</span>
      </tinto-badge>
    </div>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const p = ['Default', 'Variants', 'Sizes', 'Shapes', 'WithCount', 'WithCustomContent'];
export {
  t as Default,
  i as Shapes,
  n as Sizes,
  r as Variants,
  s as WithCount,
  o as WithCustomContent,
  p as __namedExportsOrder,
  d as default,
};
