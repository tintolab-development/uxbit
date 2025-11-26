import { h as c } from './iframe-C0-Jn-bg.js';
const p = {
    title: 'Uxbit/Button',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
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
      label: { control: { type: 'text' }, table: { category: 'content' } },
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
  n = (s) => {
    const { label: d, ...l } = s;
    return c('tinto-button', { ...l }, d);
  },
  e = { name: 'Primary', args: { variant: 'primary', label: 'Primary button' }, render: n },
  r = { name: 'Secondary', args: { variant: 'secondary', label: 'Secondary button' }, render: n },
  t = { name: 'Ghost', args: { variant: 'ghost', label: 'Ghost button' }, render: n },
  a = {
    name: 'Block (Full width)',
    args: { block: !0, label: 'Full width button' },
    render: (s) => c('div', { style: { width: '320px' } }, n(s)),
  },
  o = { name: 'Disabled', args: { disabled: !0, label: 'Disabled button' }, render: n };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  args: {
    variant: 'primary',
    label: 'Primary button'
  },
  render: renderButton
}`,
      ...e.parameters?.docs?.source,
    },
    description: { story: '기본 프라이머리 버튼', ...e.parameters?.docs?.description },
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
  render: renderButton
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: '세컨더리 스타일 버튼', ...r.parameters?.docs?.description },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button'
  },
  render: renderButton
}`,
      ...t.parameters?.docs?.source,
    },
    description: { story: 'Ghost 스타일 버튼', ...t.parameters?.docs?.description },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Block (Full width)',
  args: {
    block: true,
    label: 'Full width button'
  },
  render: props => <div style={{
    width: '320px'
  }}>{renderButton(props)}</div>
}`,
      ...a.parameters?.docs?.source,
    },
    description: { story: '가로 전체 폭 버튼 (block)', ...a.parameters?.docs?.description },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Disabled button'
  },
  render: renderButton
}`,
      ...o.parameters?.docs?.source,
    },
    description: { story: '비활성화 버튼', ...o.parameters?.docs?.description },
  },
};
const m = ['Primary', 'Secondary', 'Ghost', 'Block', 'Disabled'];
export {
  a as Block,
  o as Disabled,
  t as Ghost,
  e as Primary,
  r as Secondary,
  m as __namedExportsOrder,
  p as default,
};
