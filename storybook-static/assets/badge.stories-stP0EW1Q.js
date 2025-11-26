import { h as a } from './iframe-DsOjZ1Kg.js';
const l = {
    title: 'Uxbit/Badge',
    component: 'tinto-badge',
    parameters: { layout: 'centered' },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['neutral', 'primary', 'success', 'warning', 'danger'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md'],
        table: { category: 'appearance' },
      },
      pill: { control: { type: 'boolean' }, table: { category: 'appearance' } },
      soft: { control: { type: 'boolean' }, table: { category: 'appearance' } },
      outline: { control: { type: 'boolean' }, table: { category: 'appearance' } },
      label: { control: { type: 'text' }, table: { category: 'content' } },
    },
    args: { variant: 'neutral', size: 'md', pill: !0, soft: !0, outline: !1, label: 'Badge' },
  },
  t = {
    name: 'Default (Neutral)',
    args: { variant: 'neutral', label: 'Neutral' },
    render: (e) =>
      a(
        'tinto-badge',
        { variant: e.variant, size: e.size, pill: e.pill, soft: e.soft, outline: e.outline },
        e.label,
      ),
  },
  r = {
    name: 'Status variants',
    args: {},
    render: () =>
      a(
        'div',
        { style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } },
        a('tinto-badge', { variant: 'neutral' }, 'Neutral'),
        a('tinto-badge', { variant: 'primary' }, 'Primary'),
        a('tinto-badge', { variant: 'success' }, 'Success'),
        a('tinto-badge', { variant: 'warning' }, 'Warning'),
        a('tinto-badge', { variant: 'danger' }, 'Danger'),
      ),
  },
  i = {
    name: 'Soft vs Outline',
    args: {},
    render: () =>
      a(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' } },
        a(
          'div',
          { style: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' } },
          a('tinto-badge', { variant: 'primary', soft: !0, pill: !0 }, 'Soft'),
          a('tinto-badge', { variant: 'primary', outline: !0, pill: !0 }, 'Outline'),
          a(
            'tinto-badge',
            { variant: 'primary', soft: !0, outline: !0, pill: !0 },
            'Soft + Outline',
          ),
          a('tinto-badge', { variant: 'primary', soft: !1, outline: !1, pill: !0 }, 'Solid'),
        ),
      ),
  },
  n = {
    name: 'Small size',
    args: { size: 'sm', label: 'Small badge' },
    render: (e) =>
      a(
        'tinto-badge',
        { variant: e.variant, size: e.size, pill: e.pill, soft: e.soft, outline: e.outline },
        e.label,
      ),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Default (Neutral)',
  args: {
    variant: 'neutral',
    label: 'Neutral'
  },
  render: props => <tinto-badge variant={props.variant} size={props.size} pill={props.pill} soft={props.soft} outline={props.outline}>
      {props.label}
    </tinto-badge>
}`,
      ...t.parameters?.docs?.source,
    },
    description: { story: '기본 뱃지', ...t.parameters?.docs?.description },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Status variants',
  args: {},
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <tinto-badge variant="neutral">Neutral</tinto-badge>
      <tinto-badge variant="primary">Primary</tinto-badge>
      <tinto-badge variant="success">Success</tinto-badge>
      <tinto-badge variant="warning">Warning</tinto-badge>
      <tinto-badge variant="danger">Danger</tinto-badge>
    </div>
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: '상태/의미 별 뱃지 예제들', ...r.parameters?.docs?.description },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Soft vs Outline',
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }}>
        <tinto-badge variant="primary" soft pill>
          Soft
        </tinto-badge>
        <tinto-badge variant="primary" outline pill>
          Outline
        </tinto-badge>
        <tinto-badge variant="primary" soft outline pill>
          Soft + Outline
        </tinto-badge>
        <tinto-badge variant="primary" soft={false} outline={false} pill>
          Solid
        </tinto-badge>
      </div>
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
    description: { story: 'soft / outline 조합', ...i.parameters?.docs?.description },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Small size',
  args: {
    size: 'sm',
    label: 'Small badge'
  },
  render: props => <tinto-badge variant={props.variant} size={props.size} pill={props.pill} soft={props.soft} outline={props.outline}>
      {props.label}
    </tinto-badge>
}`,
      ...n.parameters?.docs?.source,
    },
    description: { story: '작은 사이즈(badge처럼 조밀하게)', ...n.parameters?.docs?.description },
  },
};
const s = ['Primary', 'StatusVariants', 'SoftVsOutline', 'SmallSize'];
export {
  t as Primary,
  n as SmallSize,
  i as SoftVsOutline,
  r as StatusVariants,
  s as __namedExportsOrder,
  l as default,
};
