import { h as r } from './iframe-BtP8NOBd.js';
const o = { title: 'Uxbit/Button', component: 'tinto-button', parameters: { layout: 'centered' } },
  t = { name: 'Primary', render: () => r('tinto-button', null, 'Button') };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  render: () => <tinto-button>Button</tinto-button>
}`,
      ...t.parameters?.docs?.source,
    },
    description: {
      story: '그냥 렌더링만 확인하는 최소 스토리',
      ...t.parameters?.docs?.description,
    },
  },
};
const n = ['Primary'];
export { t as Primary, n as __namedExportsOrder, o as default };
