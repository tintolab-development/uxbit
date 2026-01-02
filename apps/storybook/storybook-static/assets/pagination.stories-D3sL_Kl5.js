import { h as a } from './vendor-stencil-dp4AnqGI.js';
const c = {
    title: 'Uxbit/Pagination',
    component: 'tinto-pagination',
    parameters: { layout: 'centered' },
    args: {
      variant: 'default',
      size: 'md',
      align: 'start',
      current: 1,
      total: 10,
      pageSize: void 0,
      showSizeChanger: !1,
      showQuickJumper: !1,
      showTotal: !1,
      totalItems: void 0,
      disabled: !1,
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'simple', 'compact'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        table: { category: 'appearance' },
      },
      align: {
        control: { type: 'select' },
        options: ['start', 'center', 'end'],
        table: { category: 'layout' },
      },
      current: { control: { type: 'number', min: 1 }, table: { category: 'behavior' } },
      total: { control: { type: 'number', min: 1 }, table: { category: 'behavior' } },
      pageSize: { control: { type: 'number' }, table: { category: 'behavior' } },
      showSizeChanger: { control: 'boolean', table: { category: 'behavior' } },
      showQuickJumper: { control: 'boolean', table: { category: 'behavior' } },
      showTotal: { control: 'boolean', table: { category: 'behavior' } },
      totalItems: { control: { type: 'number' }, table: { category: 'behavior' } },
      disabled: { control: 'boolean', table: { category: 'state' } },
    },
  },
  e = {
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        size: t.size,
        align: t.align,
        current: t.current,
        total: t.total,
        pageSize: t.pageSize,
        showSizeChanger: t.showSizeChanger,
        showQuickJumper: t.showQuickJumper,
        showTotal: t.showTotal,
        totalItems: t.totalItems,
        disabled: t.disabled,
      }),
  },
  r = {
    args: { variant: 'simple' },
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        current: t.current,
        total: t.total,
        disabled: t.disabled,
      }),
  },
  o = {
    args: { showTotal: !0, totalItems: 150 },
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        current: t.current,
        total: t.total,
        showTotal: t.showTotal,
        totalItems: t.totalItems,
      }),
  },
  n = {
    args: { showSizeChanger: !0, pageSize: 20 },
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        current: t.current,
        total: t.total,
        showSizeChanger: t.showSizeChanger,
        pageSize: t.pageSize,
      }),
  },
  s = {
    args: { showQuickJumper: !0, total: 50 },
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        current: t.current,
        total: t.total,
        showQuickJumper: t.showQuickJumper,
      }),
  },
  i = {
    args: { current: 25, total: 100, showTotal: !0, totalItems: 1e3 },
    render: (t) =>
      a('tinto-pagination', {
        variant: t.variant,
        current: t.current,
        total: t.total,
        showTotal: t.showTotal,
        totalItems: t.totalItems,
      }),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-pagination variant={args.variant} size={args.size} align={args.align} current={args.current} total={args.total} pageSize={args.pageSize} showSizeChanger={args.showSizeChanger} showQuickJumper={args.showQuickJumper} showTotal={args.showTotal} totalItems={args.totalItems} disabled={args.disabled} />
}`,
      ...e.parameters?.docs?.source,
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
    variant: 'simple'
  },
  render: args => <tinto-pagination variant={args.variant} current={args.current} total={args.total} disabled={args.disabled} />
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
    showTotal: true,
    totalItems: 150
  },
  render: args => <tinto-pagination variant={args.variant} current={args.current} total={args.total} showTotal={args.showTotal} totalItems={args.totalItems} />
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
    showSizeChanger: true,
    pageSize: 20
  },
  render: args => <tinto-pagination variant={args.variant} current={args.current} total={args.total} showSizeChanger={args.showSizeChanger} pageSize={args.pageSize} />
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
    showQuickJumper: true,
    total: 50
  },
  render: args => <tinto-pagination variant={args.variant} current={args.current} total={args.total} showQuickJumper={args.showQuickJumper} />
}`,
      ...s.parameters?.docs?.source,
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
    current: 25,
    total: 100,
    showTotal: true,
    totalItems: 1000
  },
  render: args => <tinto-pagination variant={args.variant} current={args.current} total={args.total} showTotal={args.showTotal} totalItems={args.totalItems} />
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
const u = ['Default', 'Simple', 'WithTotal', 'WithSizeChanger', 'WithQuickJumper', 'LargeDataset'];
export {
  e as Default,
  i as LargeDataset,
  r as Simple,
  s as WithQuickJumper,
  n as WithSizeChanger,
  o as WithTotal,
  u as __namedExportsOrder,
  c as default,
};
