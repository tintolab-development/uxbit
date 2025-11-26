import { h as e } from './iframe-D1JDASlP.js';
const l = {
    title: 'Uxbit/Button',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
    args: { variant: 'primary', size: 'md', label: 'Button', content: 'Button' },
    argTypes: {
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
      pill: { control: 'boolean' },
      block: { control: 'boolean' },
      elevated: { control: 'boolean' },
      outline: { control: 'boolean' },
      disabled: { control: 'boolean' },
      loading: { control: 'boolean' },
      toggle: { control: 'boolean' },
      pressed: { control: 'boolean' },
      type: { control: { type: 'select' }, options: ['button', 'submit', 'reset'] },
      href: { control: 'text' },
      target: { control: { type: 'select' }, options: ['_self', '_blank', '_parent', '_top'] },
      radius: { control: 'text', description: 'border-radius 토큰 (예: "8px", "1.25rem", "50%")' },
      label: { control: 'text', description: 'label prop (비어 있으면 슬롯 content 사용)' },
      textFamily: {
        control: { type: 'select' },
        options: ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
      },
      textSize: { control: { type: 'select' }, options: ['sm', 'md', 'lg', 'xl'] },
      textWeight: {
        control: { type: 'select' },
        options: ['regular', 'medium', 'semibold', 'bold', 'black'],
      },
      textColor: { control: 'color' },
      content: { control: 'text', description: 'default 슬롯 텍스트 (label 미사용 시)' },
      prefixIcon: { control: 'text', description: 'prefix 슬롯에 들어갈 텍스트/아이콘' },
      suffixIcon: { control: 'text', description: 'suffix 슬롯에 들어갈 텍스트/아이콘' },
      tintoClick: { action: 'tintoClick' },
      tintoToggle: { action: 'tintoToggle' },
    },
  },
  n = (t) =>
    e(
      'tinto-button',
      { ...t },
      t.prefixIcon && e('span', { slot: 'prefix' }, t.prefixIcon),
      t.content,
      t.suffixIcon && e('span', { slot: 'suffix' }, t.suffixIcon),
    ),
  o = { render: n };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: Template
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const c = ['Primary'];
export { o as Primary, c as __namedExportsOrder, l as default };
