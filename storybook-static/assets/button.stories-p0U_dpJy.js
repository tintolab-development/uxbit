import { h as o } from './iframe-B11UetpM.js';
const a = {
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
      tintoClick: { action: 'tintoClick', table: { category: 'events' } },
    },
    args: { variant: 'primary', size: 'md', type: 'button', block: !1, disabled: !1 },
  },
  t = { render: (e) => o('tinto-button', { ...e }, 'Primary button') };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: props => <tinto-button {...props}>Primary button</tinto-button>
}`,
      ...t.parameters?.docs?.source,
    },
    description: { story: '기본 프라이머리 버튼', ...t.parameters?.docs?.description },
  },
};
const n = ['Primary'];
export { t as Primary, n as __namedExportsOrder, a as default };
