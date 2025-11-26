import { h as t } from './iframe-BkCIRl57.js';
const i = {
    title: 'Components/TintoButton',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
    argTypes: {
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost'] },
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      type: { control: { type: 'select' }, options: ['button', 'submit', 'reset'] },
      block: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
      label: { control: { type: 'text' } },
    },
    args: {
      variant: 'primary',
      size: 'md',
      type: 'button',
      block: !1,
      disabled: !1,
      label: 'Primary button',
    },
  },
  a = {
    name: 'Primary',
    args: { variant: 'primary', label: 'Primary button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  },
  n = {
    name: 'Secondary',
    args: { variant: 'secondary', label: 'Secondary button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  },
  r = {
    name: 'Ghost',
    args: { variant: 'ghost', label: 'Ghost button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  },
  o = {
    name: 'Block (Full width)',
    args: { block: !0, label: 'Full width button' },
    render: (e) =>
      t(
        'div',
        { style: { width: '320px' } },
        t(
          'tinto-button',
          { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
          e.label,
        ),
      ),
  },
  s = {
    name: 'Disabled',
    args: { disabled: !0, label: 'Disabled button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  args: {
    variant: 'primary',
    label: 'Primary button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} type={args.type} block={args.block} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} type={args.type} block={args.block} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} type={args.type} block={args.block} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button'
  },
  render: args => <div style={{
    width: '320px'
  }}>
      <tinto-button variant={args.variant} size={args.size} type={args.type} block={args.block} disabled={args.disabled}>
        {args.label}
      </tinto-button>
    </div>
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
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Disabled button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} type={args.type} block={args.block} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const b = ['Primary', 'Secondary', 'Ghost', 'Block', 'Disabled'];
export {
  o as Block,
  s as Disabled,
  r as Ghost,
  a as Primary,
  n as Secondary,
  b as __namedExportsOrder,
  i as default,
};
