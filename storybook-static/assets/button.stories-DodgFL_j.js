import { h as t } from './iframe-DU4XJZYZ.js';
const g = {
    title: 'Uxbit/Button',
    component: 'tinto-button',
    parameters: { layout: 'centered' },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary'],
        description: '버튼 색/스타일 프리셋',
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        description: '버튼 크기 프리셋',
        table: { category: 'appearance' },
      },
      pill: {
        control: { type: 'boolean' },
        description: 'pill(완전 라운드) 형태 여부',
        table: { category: 'appearance' },
      },
      outline: {
        control: { type: 'boolean' },
        description: 'filled 대신 outline 스타일 적용',
        table: { category: 'appearance' },
      },
      elevated: {
        control: { type: 'boolean' },
        description: '살짝 떠 있는 느낌의 그림자 사용 여부',
        table: { category: 'appearance' },
      },
      block: {
        control: { type: 'boolean' },
        description: '가로 전체폭(100%) 사용 여부',
        table: { category: 'layout' },
      },
      radius: {
        control: 'text',
        description: 'border-radius 토큰 (숫자만 넣으면 px 처리, 예: "12" → "12px")',
        table: { category: 'layout' },
      },
      disabled: {
        control: { type: 'boolean' },
        description: '비활성화 (클릭 불가, opacity 하락)',
        table: { category: 'state' },
      },
      loading: {
        control: { type: 'boolean' },
        description: '로딩 상태 (센터 스피너 노출 + 클릭 막기)',
        table: { category: 'state' },
      },
      toggle: {
        control: { type: 'boolean' },
        description: '토글 버튼 모드 여부 (pressed 값 토글)',
        table: { category: 'state' },
      },
      pressed: {
        control: { type: 'boolean' },
        description: '토글 모드에서 현재 눌림 상태',
        table: { category: 'state' },
      },
      type: {
        control: { type: 'select' },
        options: ['button', 'submit', 'reset'],
        description: 'form 동작 타입 (href가 없을 때만 적용)',
        table: { category: 'behavior' },
      },
      href: {
        control: 'text',
        description: '설정 시 링크 모드 (window.open 사용)',
        table: { category: 'behavior' },
      },
      target: {
        control: { type: 'select' },
        options: ['_self', '_blank', '_parent', '_top'],
        description: 'href 사용 시 링크 target',
        table: { category: 'behavior' },
      },
      label: {
        control: 'text',
        description: '버튼 내에 표시할 텍스트 (슬롯 대신 사용 가능)',
        table: { category: 'content' },
      },
      textFamily: {
        control: { type: 'select' },
        options: ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
        description: '라벨 폰트 패밀리 토큰',
        table: { category: 'typography' },
      },
      textSize: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg', 'xl'],
        description: '라벨 폰트 크기 토큰 (내부에서 px로 매핑)',
        table: { category: 'typography' },
      },
      textWeight: {
        control: { type: 'select' },
        options: ['regular', 'medium', 'semibold', 'bold', 'black'],
        description: '라벨 폰트 두께 토큰',
        table: { category: 'typography' },
      },
      textColor: {
        control: 'text',
        description: '라벨 텍스트 컬러 (예: "#111827", "rebeccapurple")',
        table: { category: 'typography' },
      },
    },
    args: {
      variant: 'primary',
      size: 'md',
      pill: !1,
      block: !1,
      elevated: !1,
      outline: !1,
      radius: void 0,
      disabled: !1,
      loading: !1,
      toggle: !1,
      pressed: !1,
      type: 'button',
      href: void 0,
      target: '_self',
      label: 'Primary button',
      textFamily: 'system',
      textSize: 'md',
      textWeight: 'medium',
      textColor: void 0,
    },
  },
  a = {
    name: 'Primary',
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
        e.label,
      ),
  },
  r = {
    name: 'Secondary',
    args: { variant: 'secondary', label: 'Secondary button' },
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
        e.label,
      ),
  },
  o = {
    name: 'Tertiary',
    args: { variant: 'tertiary', label: 'Tertiary button' },
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
        e.label,
      ),
  },
  l = {
    name: 'Block (Full width)',
    args: { block: !0, label: 'Full width button' },
    render: (e) =>
      t(
        'div',
        { style: { width: '320px' } },
        t(
          'tinto-button',
          {
            variant: e.variant,
            size: e.size,
            pill: e.pill,
            block: e.block,
            elevated: e.elevated,
            outline: e.outline,
            radius: e.radius,
            disabled: e.disabled,
            loading: e.loading,
            toggle: e.toggle,
            pressed: e.pressed,
            type: e.type,
            href: e.href,
            target: e.target,
            textFamily: e.textFamily,
            textSize: e.textSize,
            textWeight: e.textWeight,
            textColor: e.textColor,
          },
          e.label,
        ),
      ),
  },
  i = {
    name: 'Loading',
    args: { loading: !0, label: 'Loading…' },
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
        e.label,
      ),
  },
  n = {
    name: 'As link',
    args: { href: 'https://example.com', target: '_blank', label: 'Go to example.com' },
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
        e.label,
      ),
  },
  s = {
    name: 'Toggle button',
    args: { toggle: !0, pressed: !1, label: 'Toggle me' },
    render: (e) =>
      t(
        'tinto-button',
        {
          variant: e.variant,
          size: e.size,
          pill: e.pill,
          block: e.block,
          elevated: e.elevated,
          outline: e.outline,
          radius: e.radius,
          disabled: e.disabled,
          loading: e.loading,
          toggle: e.toggle,
          pressed: e.pressed,
          type: e.type,
          href: e.href,
          target: e.target,
          textFamily: e.textFamily,
          textSize: e.textSize,
          textWeight: e.textWeight,
          textColor: e.textColor,
        },
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
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...a.parameters?.docs?.source,
    },
    description: { story: '기본 Primary 버튼', ...a.parameters?.docs?.description },
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
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: 'Secondary 스타일 버튼', ...r.parameters?.docs?.description },
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
    label: 'Tertiary button'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...o.parameters?.docs?.source,
    },
    description: { story: 'Tertiary 스타일 버튼', ...o.parameters?.docs?.description },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
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
      <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
        {args.label}
      </tinto-button>
    </div>
}`,
      ...l.parameters?.docs?.source,
    },
    description: { story: 'Block (가로 전체폭) 버튼', ...l.parameters?.docs?.description },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Loading',
  args: {
    loading: true,
    label: 'Loading…'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...i.parameters?.docs?.source,
    },
    description: { story: '로딩 상태 버튼', ...i.parameters?.docs?.description },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'As link',
  args: {
    href: 'https://example.com',
    target: '_blank',
    label: 'Go to example.com'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...n.parameters?.docs?.source,
    },
    description: { story: '링크 버튼 (href + target)', ...n.parameters?.docs?.description },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Toggle button',
  args: {
    toggle: true,
    pressed: false,
    label: 'Toggle me'
  },
  render: args => <tinto-button variant={args.variant} size={args.size} pill={args.pill} block={args.block} elevated={args.elevated} outline={args.outline} radius={args.radius} disabled={args.disabled} loading={args.loading} toggle={args.toggle} pressed={args.pressed} type={args.type} href={args.href} target={args.target} textFamily={args.textFamily} textSize={args.textSize} textWeight={args.textWeight} textColor={args.textColor}>
      {args.label}
    </tinto-button>
}`,
      ...s.parameters?.docs?.source,
    },
    description: { story: '토글 버튼 예제 (toggle=true)', ...s.parameters?.docs?.description },
  },
};
const p = ['Primary', 'Secondary', 'Tertiary', 'Block', 'Loading', 'AsLink', 'ToggleButton'];
export {
  n as AsLink,
  l as Block,
  i as Loading,
  a as Primary,
  r as Secondary,
  o as Tertiary,
  s as ToggleButton,
  p as __namedExportsOrder,
  g as default,
};
