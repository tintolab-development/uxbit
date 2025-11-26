import { h as t } from './iframe-YqQtUz0I.js';
const l = {
    title: 'Uxbit/Button',
    component: 'tinto-button',
    parameters: { layout: 'centered', actions: { handles: ['tintoClick'] } },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'ghost'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        table: { category: 'appearance' },
      },
      type: {
        control: { type: 'select' },
        options: ['button', 'submit', 'reset'],
        table: { category: 'appearance' },
      },
      block: { control: { type: 'boolean' }, table: { category: 'layout' } },
      disabled: { control: { type: 'boolean' }, table: { category: 'state' } },
    },
    args: { variant: 'primary', size: 'md', type: 'button', block: !1, disabled: !1 },
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
  r = {
    name: 'Secondary',
    args: { variant: 'secondary', label: 'Secondary button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  },
  o = {
    name: 'Ghost',
    args: { variant: 'ghost', label: 'Ghost button' },
    render: (e) =>
      t(
        'tinto-button',
        { variant: e.variant, size: e.size, type: e.type, block: e.block, disabled: e.disabled },
        e.label,
      ),
  },
  n = {
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
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}>
      {props.label}
    </tinto-button>
}`,
      ...a.parameters?.docs?.source,
    },
    description: { story: '기본 프라이머리 버튼', ...a.parameters?.docs?.description },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button'
  },
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}>
      {props.label}
    </tinto-button>
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: '세컨더리 스타일 버튼', ...r.parameters?.docs?.description },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button'
  },
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}>
      {props.label}
    </tinto-button>
}`,
      ...o.parameters?.docs?.source,
    },
    description: { story: 'Ghost 스타일 버튼', ...o.parameters?.docs?.description },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button'
  },
  render: props => <div style={{
    width: '320px'
  }}>
      <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}>
        {props.label}
      </tinto-button>
    </div>
}`,
      ...n.parameters?.docs?.source,
    },
    description: { story: '가로 전체 폭 버튼 (block)', ...n.parameters?.docs?.description },
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
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}>
      {props.label}
    </tinto-button>
}`,
      ...s.parameters?.docs?.source,
    },
    description: { story: '비활성화 버튼', ...s.parameters?.docs?.description },
  },
};
const d = ['Primary', 'Secondary', 'Ghost', 'Block', 'Disabled'];
export {
  n as Block,
  s as Disabled,
  o as Ghost,
  a as Primary,
  r as Secondary,
  d as __namedExportsOrder,
  l as default,
};
