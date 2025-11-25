import { h as i } from './iframe-D-gCD29K.js';
const p = {
    title: 'Uxbit/QButton',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
    args: {
      variant: 'primary',
      size: 'md',
      pill: !1,
      block: !1,
      elevated: !1,
      outline: !1,
      disabled: !1,
      loading: !1,
      toggle: !1,
      pressed: !1,
      textFamily: 'system',
      textSize: 'md',
      textWeight: 'medium',
      label: 'Button',
      content: 'Button',
      prefixIcon: '',
      suffixIcon: '',
    },
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
  t = (e) =>
    i(
      'tinto-button',
      { ...e },
      e.prefixIcon && i('span', { slot: 'prefix' }, e.prefixIcon),
      e.content,
      e.suffixIcon && i('span', { slot: 'suffix' }, e.suffixIcon),
    ),
  o = { render: t },
  r = { render: t, args: { variant: 'secondary', label: 'Secondary' } },
  n = { render: t, args: { variant: 'tertiary', outline: !0, label: 'Tertiary outline' } },
  a = { render: t, args: { label: 'With slots', prefixIcon: '🔥', suffixIcon: '→' } },
  l = { render: t, args: { label: 'Loading…', loading: !0 } },
  s = { render: t, args: { label: 'Toggle', toggle: !0, pressed: !0 } };
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
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: Template,
  args: {
    variant: 'secondary',
    label: 'Secondary'
  }
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
  render: Template,
  args: {
    variant: 'tertiary',
    outline: true,
    label: 'Tertiary outline'
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'With slots',
    prefixIcon: '🔥',
    suffixIcon: '→'
  }
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Loading…',
    loading: true
  }
}`,
      ...l.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: Template,
  args: {
    label: 'Toggle',
    toggle: true,
    pressed: true
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const d = [
  'Playground',
  'Secondary',
  'TertiaryOutline',
  'WithPrefixSuffix',
  'Loading',
  'ToggleButton',
];
export {
  l as Loading,
  o as Playground,
  r as Secondary,
  n as TertiaryOutline,
  s as ToggleButton,
  a as WithPrefixSuffix,
  d as __namedExportsOrder,
  p as default,
};
