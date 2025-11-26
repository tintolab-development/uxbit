import { h as e } from './iframe-DKF8m9xq.js';
const b = {
    title: 'Uxbit/Button',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
    args: {
      variant: 'primary',
      size: 'md',
      label: 'Button',
      disabled: !1,
      loading: !1,
      block: !1,
      pill: !1,
      outline: !1,
      elevated: !1,
      type: 'button',
      href: void 0,
      target: '_self',
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        table: { category: 'appearance' },
      },
      disabled: { control: 'boolean', table: { category: 'state' } },
      loading: { control: 'boolean', table: { category: 'state' } },
      block: { control: 'boolean', table: { category: 'layout' } },
      pill: { control: 'boolean', table: { category: 'layout' } },
      outline: { control: 'boolean', table: { category: 'appearance' } },
      elevated: { control: 'boolean', table: { category: 'appearance' } },
      type: {
        control: { type: 'select' },
        options: ['button', 'submit', 'reset'],
        table: { category: 'behavior' },
      },
      href: { control: 'text', table: { category: 'behavior' } },
      target: {
        control: { type: 'select' },
        options: ['_self', '_blank', '_parent', '_top'],
        table: { category: 'behavior' },
      },
      label: { control: 'text', table: { category: 'content' } },
    },
  },
  t = {
    name: 'Playground',
    render: (a) =>
      e(
        'tinto-button',
        {
          variant: a.variant,
          size: a.size,
          disabled: a.disabled,
          loading: a.loading,
          block: a.block,
          pill: a.pill,
          outline: a.outline,
          elevated: a.elevated,
          type: a.type,
          href: a.href,
          target: a.target,
        },
        a.label,
      ),
  },
  r = {
    name: 'Primary',
    args: { variant: 'primary', size: 'md', label: 'Primary button', disabled: !1, loading: !1 },
    render: (a) =>
      e('tinto-button', { variant: a.variant, size: a.size, disabled: a.disabled }, a.label),
  },
  n = {
    name: 'Secondary',
    args: { variant: 'secondary', size: 'md', label: 'Secondary button' },
    render: (a) =>
      e('tinto-button', { variant: a.variant, size: a.size, disabled: a.disabled }, a.label),
  },
  o = {
    name: 'Tertiary',
    args: { variant: 'tertiary', size: 'md', label: 'Tertiary button' },
    render: (a) =>
      e('tinto-button', { variant: a.variant, size: a.size, disabled: a.disabled }, a.label),
  },
  i = {
    name: 'Disabled',
    args: { variant: 'primary', size: 'md', label: 'Disabled button', disabled: !0 },
    render: (a) =>
      e('tinto-button', { variant: a.variant, size: a.size, disabled: a.disabled }, a.label),
  },
  s = {
    name: 'Loading',
    args: { variant: 'primary', size: 'md', label: 'Loading...', loading: !0 },
    render: (a) =>
      e('tinto-button', { variant: a.variant, size: a.size, loading: a.loading }, a.label),
  },
  l = {
    name: 'Sizes',
    args: { variant: 'primary', label: 'Button' },
    render: (a) =>
      e(
        'div',
        { style: { display: 'flex', gap: '0.75rem' } },
        e('tinto-button', { variant: a.variant, size: 'sm' }, 'Small'),
        e('tinto-button', { variant: a.variant, size: 'md' }, 'Medium'),
        e('tinto-button', { variant: a.variant, size: 'lg' }, 'Large'),
      ),
  },
  d = {
    name: 'As link',
    args: {
      variant: 'secondary',
      size: 'md',
      label: 'Go to example.com',
      href: 'https://example.com',
      target: '_blank',
    },
    render: (a) =>
      e(
        'tinto-button',
        { variant: a.variant, size: a.size, href: a.href, target: a.target },
        a.label,
      ),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Playground',
  render: args => <tinto-button variant={args.variant} size={args.size} disabled={args.disabled} loading={args.loading} block={args.block} pill={args.pill} outline={args.outline} elevated={args.elevated} type={args.type} href={args.href} target={args.target}>
      {args.label}
    </tinto-button>
}`,
      ...t.parameters?.docs?.source,
    },
    description: {
      story: 'Playground – Controls로 대부분의 prop을 다뤄볼 수 있는 스토리',
      ...t.parameters?.docs?.description,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary button',
    disabled: false,
    loading: false
  },
  render: args => <tinto-button variant={args.variant} size={args.size} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: 'Primary 버튼 프리셋', ...r.parameters?.docs?.description },
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
    size: 'md',
    label: 'Secondary button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...n.parameters?.docs?.source,
    },
    description: { story: 'Secondary 버튼 프리셋', ...n.parameters?.docs?.description },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    size: 'md',
    label: 'Tertiary button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...o.parameters?.docs?.source,
    },
    description: { story: 'Tertiary 버튼 프리셋', ...o.parameters?.docs?.description },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Disabled',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Disabled button',
    disabled: true
  },
  render: args => <tinto-button variant={args.variant} size={args.size} disabled={args.disabled}>
      {args.label}
    </tinto-button>
}`,
      ...i.parameters?.docs?.source,
    },
    description: { story: 'Disabled 상태 예시', ...i.parameters?.docs?.description },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Loading',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Loading...',
    loading: true
  },
  render: args => <tinto-button variant={args.variant} size={args.size} loading={args.loading}>
      {args.label}
    </tinto-button>
}`,
      ...s.parameters?.docs?.source,
    },
    description: { story: 'Loading 상태 예시', ...s.parameters?.docs?.description },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Sizes',
  args: {
    variant: 'primary',
    label: 'Button'
  } as ButtonStoryProps,
  render: args => <div style={{
    display: 'flex',
    gap: '0.75rem'
  }}>
      <tinto-button variant={args.variant} size="sm">
        Small
      </tinto-button>
      <tinto-button variant={args.variant} size="md">
        Medium
      </tinto-button>
      <tinto-button variant={args.variant} size="lg">
        Large
      </tinto-button>
    </div>
}`,
      ...l.parameters?.docs?.source,
    },
    description: {
      story: '사이즈 비교용 – 같은 variant 로 sm / md / lg 한 번에 보기',
      ...l.parameters?.docs?.description,
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  name: 'As link',
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Go to example.com',
    href: 'https://example.com',
    target: '_blank'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} href={args.href} target={args.target}>
      {args.label}
    </tinto-button>
}`,
      ...d.parameters?.docs?.source,
    },
    description: {
      story: '링크 모드 예시 – href / target 사용',
      ...d.parameters?.docs?.description,
    },
  },
};
const m = [
  'Playground',
  'Primary',
  'Secondary',
  'Tertiary',
  'Disabled',
  'Loading',
  'Sizes',
  'AsLink',
];
export {
  d as AsLink,
  i as Disabled,
  s as Loading,
  t as Playground,
  r as Primary,
  n as Secondary,
  l as Sizes,
  o as Tertiary,
  m as __namedExportsOrder,
  b as default,
};
