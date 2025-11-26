var b = Object.defineProperty;
var d = (t, n, o) =>
  n in t ? b(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[n] = o);
var a = (t, n, o) => d(t, typeof n != 'symbol' ? n + '' : n, o);
import { p, H as u, c as y, h as e, a as m } from './iframe-BsxXIOVM.js';
const k = `:host{display:inline-block;font-family:system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Noto Sans KR',
        'Apple SD Gothic Neo',
        'Malgun Gothic',
        sans-serif}:host([hidden]){display:none !important}.tinto-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;cursor:pointer;white-space:nowrap;border-radius:9999px;padding:0.5rem 0.9rem;font-size:0.95rem;line-height:1;border-width:1px;border-style:solid;transition:background-color 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease,
        box-shadow 0.15s ease,
        transform 0.03s ease;--t-button-bg:#111827;--t-button-fg:#ffffff;--t-button-border:#111827}.tinto-button--primary{background-color:var(--t-button-bg, #111827);color:var(--t-button-fg, #ffffff);border-color:var(--t-button-border, #111827)}.tinto-button--primary:hover{background-color:#020617;border-color:#020617}.tinto-button--secondary{background-color:#ffffff;color:#111827;border-color:#d1d5db}.tinto-button--secondary:hover{background-color:#f3f4f6;border-color:#9ca3af}.tinto-button--ghost{background-color:transparent;color:#111827;border-color:transparent}.tinto-button--ghost:hover{background-color:rgba(15, 23, 42, 0.04);border-color:rgba(15, 23, 42, 0.08)}.tinto-button--sm{padding:0.35rem 0.7rem;font-size:0.82rem}.tinto-button--md{padding:0.5rem 0.9rem;font-size:0.95rem}.tinto-button--lg{padding:0.65rem 1.15rem;font-size:1.05rem}.tinto-button--block{width:100%;justify-content:center}.tinto-button--disabled,.tinto-button[disabled]{opacity:0.4;cursor:not-allowed;box-shadow:none}.tinto-button:focus-visible{outline:2px solid #2563eb;outline-offset:2px}.tinto-button:active{transform:translateY(1px)}`,
  g = p(
    class extends u {
      constructor(o) {
        super();
        a(this, 'variant', 'primary');
        a(this, 'size', 'md');
        a(this, 'type', 'button');
        a(this, 'disabled', !1);
        a(this, 'block', !1);
        a(this, 'tintoClick');
        a(this, 'handleClick', (o) => {
          if (this.disabled) {
            (o.preventDefault(), o.stopPropagation());
            return;
          }
          this.tintoClick.emit(o);
        });
        (o !== !1 && this.__registerHost(),
          this.__attachShadow(),
          (this.tintoClick = y(this, 'tintoClick')));
      }
      render() {
        const o = {
          'tinto-button': !0,
          [`tinto-button--${this.variant}`]: !0,
          [`tinto-button--${this.size}`]: !0,
          'tinto-button--block': this.block,
          'tinto-button--disabled': this.disabled,
        };
        return e(
          m,
          { key: 'cfa57608fde84d44d3a1e04fc5ccc34cd5abe6f7' },
          e(
            'button',
            {
              key: '1d19cd2ad268637c47e077539974ec75bdeb9515',
              class: o,
              type: this.type,
              disabled: this.disabled,
              onClick: this.handleClick,
            },
            e('slot', { key: '71635a1f7cb95da1ed258235594f03321bb41fb5' }, 'Button'),
          ),
        );
      }
      static get style() {
        return k;
      }
    },
    [
      769,
      'tinto-button',
      { variant: [513], size: [513], type: [513], disabled: [516], block: [516] },
    ],
  ),
  f = g,
  z = {
    title: 'Uxbit/Button',
    component: f,
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
      tintoClick: { action: 'tintoClick', table: { category: 'events' } },
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
  r = {
    name: 'Primary',
    args: { variant: 'primary', label: 'Primary button' },
    render: (t) =>
      e(
        'tinto-button',
        {
          variant: t.variant,
          size: t.size,
          type: t.type,
          block: t.block,
          disabled: t.disabled,
          onTintoClick: t.tintoClick,
        },
        t.label,
      ),
  },
  i = {
    name: 'Secondary',
    args: { variant: 'secondary', label: 'Secondary button' },
    render: (t) => e('tinto-button', { ...t }, t.label),
  },
  s = {
    name: 'Ghost',
    args: { variant: 'ghost', label: 'Ghost button' },
    render: (t) =>
      e(
        'tinto-button',
        {
          variant: t.variant,
          size: t.size,
          type: t.type,
          block: t.block,
          disabled: t.disabled,
          onTintoClick: t.tintoClick,
        },
        t.label,
      ),
  },
  l = {
    name: 'Block (Full width)',
    args: { block: !0, label: 'Full width button' },
    render: (t) =>
      e(
        'div',
        { style: { width: '320px' } },
        e(
          'tinto-button',
          {
            variant: t.variant,
            size: t.size,
            type: t.type,
            block: t.block,
            disabled: t.disabled,
            onTintoClick: t.tintoClick,
          },
          t.label,
        ),
      ),
  },
  c = {
    name: 'Disabled',
    args: { disabled: !0, label: 'Disabled button' },
    render: (t) =>
      e(
        'tinto-button',
        {
          variant: t.variant,
          size: t.size,
          type: t.type,
          block: t.block,
          disabled: t.disabled,
          onTintoClick: t.tintoClick,
        },
        t.label,
      ),
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
    label: 'Primary button'
  },
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled}
  // Storybook action panel로 이벤트 전달
  onTintoClick={props.tintoClick as any}>
      {props.label}
    </tinto-button>
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: '기본 프라이머리 버튼', ...r.parameters?.docs?.description },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    label: 'Secondary button'
  },
  render: props => <tinto-button {...props}>{props.label}</tinto-button>
}`,
      ...i.parameters?.docs?.source,
    },
    description: { story: '세컨더리 스타일 버튼', ...i.parameters?.docs?.description },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    label: 'Ghost button'
  },
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled} onTintoClick={props.tintoClick as any}>
      {props.label}
    </tinto-button>
}`,
      ...s.parameters?.docs?.source,
    },
    description: { story: 'Ghost 스타일 버튼', ...s.parameters?.docs?.description },
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
  render: props => <div style={{
    width: '320px'
  }}>
      <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled} onTintoClick={props.tintoClick as any}>
        {props.label}
      </tinto-button>
    </div>
}`,
      ...l.parameters?.docs?.source,
    },
    description: { story: '가로 전체 폭 버튼 (block)', ...l.parameters?.docs?.description },
  },
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Disabled button'
  },
  render: props => <tinto-button variant={props.variant} size={props.size} type={props.type} block={props.block} disabled={props.disabled} onTintoClick={props.tintoClick as any}>
      {props.label}
    </tinto-button>
}`,
      ...c.parameters?.docs?.source,
    },
    description: { story: '비활성화 버튼', ...c.parameters?.docs?.description },
  },
};
const x = ['Primary', 'Secondary', 'Ghost', 'Block', 'Disabled'];
export {
  l as Block,
  c as Disabled,
  s as Ghost,
  r as Primary,
  i as Secondary,
  x as __namedExportsOrder,
  z as default,
};
