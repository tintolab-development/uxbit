import { h as t } from './vendor-stencil-dp4AnqGI.js';
const b = {
    title: 'Uxbit/Tabs',
    component: 'tinto-tabs',
    parameters: { layout: 'centered' },
    args: {
      variant: 'default',
      size: 'md',
      orientation: 'horizontal',
      position: 'start',
      defaultTab: void 0,
      disabled: !1,
      scrollable: !1,
    },
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'underline', 'pills', 'enclosed'],
        table: { category: 'appearance' },
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
        table: { category: 'appearance' },
      },
      orientation: {
        control: { type: 'select' },
        options: ['horizontal', 'vertical'],
        table: { category: 'layout' },
      },
      position: {
        control: { type: 'select' },
        options: ['start', 'center', 'end'],
        table: { category: 'layout' },
      },
      defaultTab: { control: 'text', table: { category: 'behavior' } },
      disabled: { control: 'boolean', table: { category: 'state' } },
      scrollable: { control: 'boolean', table: { category: 'behavior' } },
    },
  },
  e = {
    render: (a) =>
      t(
        'tinto-tabs',
        {
          variant: a.variant,
          size: a.size,
          orientation: a.orientation,
          position: a.position,
          defaultTab: a.defaultTab,
          disabled: a.disabled,
          scrollable: a.scrollable,
        },
        t(
          'tinto-tab-panel',
          { tabId: 'tab1', label: '탭 1' },
          t('p', null, '탭 1의 콘텐츠입니다.'),
        ),
        t(
          'tinto-tab-panel',
          { tabId: 'tab2', label: '탭 2' },
          t('p', null, '탭 2의 콘텐츠입니다.'),
        ),
        t(
          'tinto-tab-panel',
          { tabId: 'tab3', label: '탭 3' },
          t('p', null, '탭 3의 콘텐츠입니다.'),
        ),
      ),
  },
  n = {
    args: { variant: 'underline' },
    render: (a) =>
      t(
        'tinto-tabs',
        { variant: a.variant, size: a.size, orientation: a.orientation, position: a.position },
        t('tinto-tab-panel', { tabId: 'tab1', label: '홈' }, t('p', null, '홈 콘텐츠')),
        t('tinto-tab-panel', { tabId: 'tab2', label: '검색' }, t('p', null, '검색 콘텐츠')),
        t('tinto-tab-panel', { tabId: 'tab3', label: '프로필' }, t('p', null, '프로필 콘텐츠')),
      ),
  },
  l = {
    args: { variant: 'pills' },
    render: (a) =>
      t(
        'tinto-tabs',
        { variant: a.variant, size: a.size },
        t('tinto-tab-panel', { tabId: 'tab1', label: '전체' }, t('p', null, '전체 항목')),
        t('tinto-tab-panel', { tabId: 'tab2', label: '진행중' }, t('p', null, '진행중 항목')),
        t('tinto-tab-panel', { tabId: 'tab3', label: '완료' }, t('p', null, '완료 항목')),
      ),
  },
  i = {
    args: { orientation: 'vertical', variant: 'underline' },
    render: (a) =>
      t(
        'div',
        { style: { display: 'flex', height: '400px' } },
        t(
          'tinto-tabs',
          { variant: a.variant, orientation: a.orientation, size: a.size },
          t('tinto-tab-panel', { tabId: 'tab1', label: '설정' }, t('p', null, '설정 콘텐츠')),
          t('tinto-tab-panel', { tabId: 'tab2', label: '프로필' }, t('p', null, '프로필 콘텐츠')),
          t('tinto-tab-panel', { tabId: 'tab3', label: '보안' }, t('p', null, '보안 콘텐츠')),
        ),
      ),
  },
  o = {
    render: (a) =>
      t(
        'tinto-tabs',
        { variant: a.variant, size: a.size },
        t(
          'tinto-tab-panel',
          { tabId: 'tab1', label: '활성 탭' },
          t('p', null, '이 탭은 활성화되어 있습니다.'),
        ),
        t(
          'tinto-tab-panel',
          { tabId: 'tab2', label: '비활성 탭', disabled: !0 },
          t('p', null, '이 탭은 비활성화되어 있습니다.'),
        ),
        t('tinto-tab-panel', { tabId: 'tab3', label: '일반 탭' }, t('p', null, '일반 탭입니다.')),
      ),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-tabs variant={args.variant} size={args.size} orientation={args.orientation} position={args.position} defaultTab={args.defaultTab} disabled={args.disabled} scrollable={args.scrollable}>
      <tinto-tab-panel tabId="tab1" label="탭 1">
        <p>탭 1의 콘텐츠입니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="탭 2">
        <p>탭 2의 콘텐츠입니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="탭 3">
        <p>탭 3의 콘텐츠입니다.</p>
      </tinto-tab-panel>
    </tinto-tabs>
}`,
      ...e.parameters?.docs?.source,
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
    variant: 'underline'
  },
  render: args => <tinto-tabs variant={args.variant} size={args.size} orientation={args.orientation} position={args.position}>
      <tinto-tab-panel tabId="tab1" label="홈">
        <p>홈 콘텐츠</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="검색">
        <p>검색 콘텐츠</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="프로필">
        <p>프로필 콘텐츠</p>
      </tinto-tab-panel>
    </tinto-tabs>
}`,
      ...n.parameters?.docs?.source,
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
    variant: 'pills'
  },
  render: args => <tinto-tabs variant={args.variant} size={args.size}>
      <tinto-tab-panel tabId="tab1" label="전체">
        <p>전체 항목</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="진행중">
        <p>진행중 항목</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="완료">
        <p>완료 항목</p>
      </tinto-tab-panel>
    </tinto-tabs>
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
  args: {
    orientation: 'vertical',
    variant: 'underline'
  },
  render: args => <div style={{
    display: 'flex',
    height: '400px'
  }}>
      <tinto-tabs variant={args.variant} orientation={args.orientation} size={args.size}>
        <tinto-tab-panel tabId="tab1" label="설정">
          <p>설정 콘텐츠</p>
        </tinto-tab-panel>
        <tinto-tab-panel tabId="tab2" label="프로필">
          <p>프로필 콘텐츠</p>
        </tinto-tab-panel>
        <tinto-tab-panel tabId="tab3" label="보안">
          <p>보안 콘텐츠</p>
        </tinto-tab-panel>
      </tinto-tabs>
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <tinto-tabs variant={args.variant} size={args.size}>
      <tinto-tab-panel tabId="tab1" label="활성 탭">
        <p>이 탭은 활성화되어 있습니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab2" label="비활성 탭" disabled>
        <p>이 탭은 비활성화되어 있습니다.</p>
      </tinto-tab-panel>
      <tinto-tab-panel tabId="tab3" label="일반 탭">
        <p>일반 탭입니다.</p>
      </tinto-tab-panel>
    </tinto-tabs>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const s = ['Default', 'Underline', 'Pills', 'Vertical', 'WithDisabledTab'];
export {
  e as Default,
  l as Pills,
  n as Underline,
  i as Vertical,
  o as WithDisabledTab,
  s as __namedExportsOrder,
  b as default,
};
