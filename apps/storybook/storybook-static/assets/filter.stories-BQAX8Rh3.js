import { h as e } from './vendor-stencil-dp4AnqGI.js';
const n = [
    { value: 'option1', label: 'Option 1', count: 10 },
    { value: 'option2', label: 'Option 2', count: 5 },
    { value: 'option3', label: 'Option 3', description: 'Description for option 3' },
    { value: 'option4', label: 'Option 4', disabled: !0 },
    { value: 'option5', label: 'Option 5' },
  ],
  c = {
    title: 'Uxbit/Filter',
    component: 'tinto-filter',
    parameters: { layout: 'centered' },
    args: {
      label: 'Filter',
      type: 'multiple',
      variant: 'default',
      searchable: !1,
      showClear: !0,
      maxSelection: 0,
      disabled: !1,
    },
    argTypes: {
      type: { control: 'select', options: ['single', 'multiple'] },
      variant: { control: 'select', options: ['default', 'button', 'checkbox', 'radio'] },
    },
  },
  l = {
    render: (t) =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-filter', {
          'filter-id': 'filter1',
          label: t.label,
          type: t.type,
          variant: t.variant,
          options: JSON.stringify(n),
          searchable: t.searchable,
          'show-clear': t.showClear,
          'max-selection': t.maxSelection || void 0,
          disabled: t.disabled,
        }),
      ),
  },
  i = {
    render: () =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-filter', {
          'filter-id': 'filter2',
          label: '카테고리',
          type: 'multiple',
          variant: 'checkbox',
          options: JSON.stringify(n),
          searchable: !0,
          'show-clear': !0,
        }),
      ),
  },
  a = {
    render: () =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-filter', {
          'filter-id': 'filter3',
          label: '정렬',
          type: 'single',
          variant: 'radio',
          options: JSON.stringify([
            { value: 'popular', label: '인기순' },
            { value: 'price-asc', label: '가격 낮은순' },
            { value: 'price-desc', label: '가격 높은순' },
            { value: 'newest', label: '최신순' },
          ]),
        }),
      ),
  },
  r = {
    render: () =>
      e(
        'div',
        null,
        e('tinto-filter', {
          'filter-id': 'filter4',
          label: '상태',
          type: 'multiple',
          variant: 'button',
          options: JSON.stringify([
            { value: 'new', label: '신상품' },
            { value: 'sale', label: '할인중' },
            { value: 'stock', label: '재고있음' },
          ]),
          'show-clear': !0,
        }),
      ),
  },
  o = {
    render: () =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-filter', {
          'filter-id': 'filter5',
          label: '검색 가능한 필터',
          type: 'multiple',
          options: JSON.stringify([
            ...n,
            { value: 'option6', label: 'Option 6' },
            { value: 'option7', label: 'Option 7' },
            { value: 'option8', label: 'Option 8' },
          ]),
          searchable: !0,
          placeholder: '옵션 검색...',
        }),
      ),
  },
  s = {
    render: () =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-filter', {
          'filter-id': 'filter6',
          label: '최대 3개 선택',
          type: 'multiple',
          options: JSON.stringify(n),
          'max-selection': 3,
          'show-clear': !0,
        }),
      ),
  };
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    width: '300px'
  }}>
      <tinto-filter filter-id="filter1" label={args.label} type={args.type} variant={args.variant} options={JSON.stringify(sampleOptions)} searchable={args.searchable} show-clear={args.showClear} max-selection={args.maxSelection || undefined} disabled={args.disabled} />
    </div>
}`,
      ...l.parameters?.docs?.source,
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    width: '300px'
  }}>
      <tinto-filter filter-id="filter2" label="카테고리" type="multiple" variant="checkbox" options={JSON.stringify(sampleOptions)} searchable show-clear />
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    width: '300px'
  }}>
      <tinto-filter filter-id="filter3" label="정렬" type="single" variant="radio" options={JSON.stringify([{
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
    }])} />
    </div>
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
  render: () => <div>
      <tinto-filter filter-id="filter4" label="상태" type="multiple" variant="button" options={JSON.stringify([{
      value: 'new',
      label: '신상품'
    }, {
      value: 'sale',
      label: '할인중'
    }, {
      value: 'stock',
      label: '재고있음'
    }])} show-clear />
    </div>
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
  render: () => <div style={{
    width: '300px'
  }}>
      <tinto-filter filter-id="filter5" label="검색 가능한 필터" type="multiple" options={JSON.stringify([...sampleOptions, {
      value: 'option6',
      label: 'Option 6'
    }, {
      value: 'option7',
      label: 'Option 7'
    }, {
      value: 'option8',
      label: 'Option 8'
    }])} searchable placeholder="옵션 검색..." />
    </div>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    width: '300px'
  }}>
      <tinto-filter filter-id="filter6" label="최대 3개 선택" type="multiple" options={JSON.stringify(sampleOptions)} max-selection={3} show-clear />
    </div>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const d = [
  'Default',
  'MultipleSelection',
  'SingleSelection',
  'ButtonVariant',
  'WithSearch',
  'WithMaxSelection',
];
export {
  r as ButtonVariant,
  l as Default,
  i as MultipleSelection,
  a as SingleSelection,
  s as WithMaxSelection,
  o as WithSearch,
  d as __namedExportsOrder,
  c as default,
};
