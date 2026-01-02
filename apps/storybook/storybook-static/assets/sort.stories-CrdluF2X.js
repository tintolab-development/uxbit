import { h as e } from './vendor-stencil-dp4AnqGI.js';
const n = [
    { value: 'popular', label: '인기순', direction: 'desc' },
    { value: 'price-asc', label: '가격 낮은순', direction: 'asc' },
    { value: 'price-desc', label: '가격 높은순', direction: 'desc' },
    { value: 'newest', label: '최신순', direction: 'desc' },
    { value: 'name', label: '이름순', direction: 'asc' },
  ],
  c = {
    title: 'Uxbit/Sort',
    component: 'tinto-sort',
    parameters: { layout: 'centered' },
    args: { label: '정렬', variant: 'default', disabled: !1 },
    argTypes: { variant: { control: 'select', options: ['default', 'button', 'select'] } },
  },
  a = {
    render: (i) =>
      e(
        'div',
        null,
        e('tinto-sort', {
          label: i.label,
          variant: i.variant,
          options: JSON.stringify(n),
          disabled: i.disabled,
        }),
      ),
  },
  t = {
    render: () =>
      e(
        'div',
        null,
        e('tinto-sort', { label: '정렬', variant: 'default', options: JSON.stringify(n) }),
      ),
  },
  r = {
    render: () =>
      e(
        'div',
        null,
        e('tinto-sort', { label: '정렬', variant: 'button', options: JSON.stringify(n) }),
      ),
  },
  s = {
    render: () =>
      e(
        'div',
        null,
        e('tinto-sort', { label: '정렬', variant: 'select', options: JSON.stringify(n) }),
      ),
  },
  l = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', gap: '16px', alignItems: 'center' } },
        e('tinto-sort', {
          label: '정렬',
          variant: 'default',
          options: JSON.stringify([
            { value: 'popular', label: '인기순' },
            { value: 'price-asc', label: '가격 낮은순' },
            { value: 'price-desc', label: '가격 높은순' },
            { value: 'newest', label: '최신순' },
            { value: 'rating', label: '평점순' },
          ]),
        }),
      ),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div>
      <tinto-sort label={args.label} variant={args.variant} options={JSON.stringify(sampleOptions)} disabled={args.disabled} />
    </div>
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <tinto-sort label="정렬" variant="default" options={JSON.stringify(sampleOptions)} />
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <tinto-sort label="정렬" variant="button" options={JSON.stringify(sampleOptions)} />
    </div>
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div>
      <tinto-sort label="정렬" variant="select" options={JSON.stringify(sampleOptions)} />
    </div>
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
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <tinto-sort label="정렬" variant="default" options={JSON.stringify([{
      value: 'popular',
      label: '인기순'
    }, {
      value: 'price-asc',
      label: '가격 낮은순'
    }, {
      value: 'price-desc',
      label: '가격 높은순'
    }, {
      value: 'newest',
      label: '최신순'
    }, {
      value: 'rating',
      label: '평점순'
    }])} />
    </div>
}`,
      ...l.parameters?.docs?.source,
    },
  },
};
const d = ['Default', 'DefaultVariant', 'ButtonVariant', 'SelectVariant', 'EcommerceExample'];
export {
  r as ButtonVariant,
  a as Default,
  t as DefaultVariant,
  l as EcommerceExample,
  s as SelectVariant,
  d as __namedExportsOrder,
  c as default,
};
