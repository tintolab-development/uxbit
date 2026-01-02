import { h as t } from './vendor-stencil-dp4AnqGI.js';
const b = {
    title: 'Uxbit/Alert',
    component: 'tinto-alert',
    parameters: { layout: 'centered' },
    args: {
      type: 'info',
      variant: 'default',
      size: 'md',
      closable: !1,
      autoClose: !1,
      closeAfter: 5e3,
      showIcon: !0,
      alertTitle: void 0,
    },
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['success', 'error', 'warning', 'info'],
        table: { category: 'appearance' },
      },
      variant: {
        control: { type: 'select' },
        options: ['default', 'filled', 'outlined'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        table: { category: 'appearance' },
      },
      closable: { control: 'boolean', table: { category: 'behavior' } },
      autoClose: { control: 'boolean', table: { category: 'behavior' } },
      closeAfter: { control: { type: 'number', min: 0 }, table: { category: 'behavior' } },
      showIcon: { control: 'boolean', table: { category: 'appearance' } },
      alertTitle: { control: 'text', table: { category: 'content' } },
    },
  },
  a = {
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          size: e.size,
          closable: e.closable,
          autoClose: e.autoClose,
          closeAfter: e.closeAfter,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle,
        },
        '이것은 기본 알림 메시지입니다.',
      ),
  },
  r = {
    args: { type: 'success' },
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          closable: e.closable,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle || '성공',
        },
        '작업이 성공적으로 완료되었습니다.',
      ),
  },
  o = {
    args: { type: 'error' },
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          closable: e.closable,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle || '오류',
        },
        '오류가 발생했습니다. 다시 시도해주세요.',
      ),
  },
  n = {
    args: { type: 'warning' },
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          closable: e.closable,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle || '경고',
        },
        '이 작업은 되돌릴 수 없습니다.',
      ),
  },
  s = {
    args: { type: 'info' },
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          closable: e.closable,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle || '정보',
        },
        '새로운 기능이 추가되었습니다.',
      ),
  },
  l = {
    args: { alertTitle: '알림 제목' },
    render: (e) =>
      t(
        'tinto-alert',
        {
          type: e.type,
          variant: e.variant,
          closable: e.closable,
          showIcon: e.showIcon,
          alertTitle: e.alertTitle,
        },
        '이것은 제목이 있는 알림 메시지입니다.',
      ),
  },
  c = {
    args: { closable: !0 },
    render: (e) =>
      t(
        'tinto-alert',
        { type: e.type, variant: e.variant, closable: e.closable, showIcon: e.showIcon },
        '닫기 버튼이 있는 알림입니다.',
      ),
  },
  i = {
    args: { variant: 'filled' },
    render: (e) =>
      t(
        'tinto-alert',
        { type: e.type, variant: e.variant, closable: e.closable, showIcon: e.showIcon },
        '배경색이 채워진 알림입니다.',
      ),
  },
  p = {
    args: { variant: 'outlined' },
    render: (e) =>
      t(
        'tinto-alert',
        { type: e.type, variant: e.variant, closable: e.closable, showIcon: e.showIcon },
        '테두리만 있는 알림입니다.',
      ),
  },
  d = {
    render: (e) =>
      t(
        'tinto-alert',
        { type: e.type, variant: e.variant, closable: e.closable, showIcon: e.showIcon },
        '액션 버튼이 있는 알림입니다.',
        t('tinto-button', { slot: 'action', size: 'sm', variant: 'primary' }, '확인'),
      ),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-alert type={args.type} variant={args.variant} size={args.size} closable={args.closable} autoClose={args.autoClose} closeAfter={args.closeAfter} showIcon={args.showIcon} alertTitle={args.alertTitle}>
      이것은 기본 알림 메시지입니다.
    </tinto-alert>
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    type: 'success'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon} alertTitle={args.alertTitle || '성공'}>
      작업이 성공적으로 완료되었습니다.
    </tinto-alert>
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
  args: {
    type: 'error'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon} alertTitle={args.alertTitle || '오류'}>
      오류가 발생했습니다. 다시 시도해주세요.
    </tinto-alert>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    type: 'warning'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon} alertTitle={args.alertTitle || '경고'}>
      이 작업은 되돌릴 수 없습니다.
    </tinto-alert>
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    type: 'info'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon} alertTitle={args.alertTitle || '정보'}>
      새로운 기능이 추가되었습니다.
    </tinto-alert>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    alertTitle: '알림 제목'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon} alertTitle={args.alertTitle}>
      이것은 제목이 있는 알림 메시지입니다.
    </tinto-alert>
}`,
      ...l.parameters?.docs?.source,
    },
  },
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    closable: true
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon}>
      닫기 버튼이 있는 알림입니다.
    </tinto-alert>
}`,
      ...c.parameters?.docs?.source,
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'filled'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon}>
      배경색이 채워진 알림입니다.
    </tinto-alert>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    variant: 'outlined'
  },
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon}>
      테두리만 있는 알림입니다.
    </tinto-alert>
}`,
      ...p.parameters?.docs?.source,
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-alert type={args.type} variant={args.variant} closable={args.closable} showIcon={args.showIcon}>
      액션 버튼이 있는 알림입니다.
      <tinto-button slot="action" size="sm" variant="primary">
        확인
      </tinto-button>
    </tinto-alert>
}`,
      ...d.parameters?.docs?.source,
    },
  },
};
const g = [
  'Default',
  'Success',
  'Error',
  'Warning',
  'Info',
  'WithTitle',
  'Closable',
  'Filled',
  'Outlined',
  'WithAction',
];
export {
  c as Closable,
  a as Default,
  o as Error,
  i as Filled,
  s as Info,
  p as Outlined,
  r as Success,
  n as Warning,
  d as WithAction,
  l as WithTitle,
  g as __namedExportsOrder,
  b as default,
};
