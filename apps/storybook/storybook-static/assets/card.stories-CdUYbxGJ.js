import { h as t } from './vendor-stencil-dp4AnqGI.js';
const s = {
    title: 'Uxbit/Card',
    component: 'tinto-card',
    parameters: { layout: 'centered' },
    args: { variant: 'default', direction: 'vertical', clickable: !0, loading: !1 },
    argTypes: {
      variant: { control: 'select', options: ['default', 'compact', 'detailed'] },
      direction: { control: 'select', options: ['vertical', 'horizontal'] },
    },
  },
  e = {
    render: (i) =>
      t(
        'div',
        { style: { width: '300px' } },
        t('tinto-card', {
          variant: i.variant,
          direction: i.direction,
          clickable: i.clickable,
          loading: i.loading,
          'card-title': 'Card Title',
          description: 'This is a card description',
          image:
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        }),
      ),
  },
  a = {
    render: () =>
      t(
        'div',
        { style: { width: '300px' } },
        t(
          'tinto-card',
          null,
          t(
            'div',
            { slot: 'image' },
            t('tinto-image', {
              src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
              ratio: '1:1',
            }),
          ),
          t('div', { slot: 'title' }, t('tinto-typography', { variant: 'h3' }, 'Custom Title')),
          t(
            'div',
            { slot: 'description' },
            t('tinto-typography', { variant: 'p' }, 'Custom description using slots'),
          ),
          t(
            'div',
            { slot: 'content' },
            t('tinto-button', { variant: 'primary', size: 'sm' }, 'Action'),
          ),
        ),
      ),
  },
  r = {
    render: () =>
      t(
        'div',
        { style: { width: '300px' } },
        t('tinto-card', {
          'card-title': 'Product Name',
          description: 'Product description here',
          image:
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
          originalPrice: 5e4,
          salePrice: 35e3,
          discountRate: 30,
          badge: 'New',
          href: '#',
        }),
      ),
  },
  o = {
    render: () =>
      t(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' } },
        t('tinto-card', {
          variant: 'default',
          'card-title': 'Default Card',
          image: 'https://via.placeholder.com/300',
        }),
        t('tinto-card', {
          variant: 'compact',
          'card-title': 'Compact Card',
          image: 'https://via.placeholder.com/300',
        }),
        t('tinto-card', {
          variant: 'detailed',
          'card-title': 'Detailed Card',
          description: 'More detailed description',
          image: 'https://via.placeholder.com/300',
        }),
      ),
  },
  d = {
    render: () =>
      t(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' } },
        t('tinto-card', {
          direction: 'vertical',
          'card-title': 'Vertical Card',
          image: 'https://via.placeholder.com/300',
        }),
        t('tinto-card', {
          direction: 'horizontal',
          'card-title': 'Horizontal Card',
          description: 'Horizontal layout card',
          image: 'https://via.placeholder.com/300',
        }),
      ),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    width: '300px'
  }}>
      <tinto-card variant={args.variant} direction={args.direction} clickable={args.clickable} loading={args.loading} card-title="Card Title" description="This is a card description" image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" />
    </div>
}`,
      ...e.parameters?.docs?.source,
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
      <tinto-card>
        <div slot="image">
          <tinto-image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" ratio="1:1" />
        </div>
        <div slot="title">
          <tinto-typography variant="h3">Custom Title</tinto-typography>
        </div>
        <div slot="description">
          <tinto-typography variant="p">Custom description using slots</tinto-typography>
        </div>
        <div slot="content">
          <tinto-button variant="primary" size="sm">
            Action
          </tinto-button>
        </div>
      </tinto-card>
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
  render: () => <div style={{
    width: '300px'
  }}>
      <tinto-card card-title="Product Name" description="Product description here" image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" originalPrice={50000} salePrice={35000} discountRate={30} badge="New" href="#" />
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
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <tinto-card variant="default" card-title="Default Card" image="https://via.placeholder.com/300" />
      <tinto-card variant="compact" card-title="Compact Card" image="https://via.placeholder.com/300" />
      <tinto-card variant="detailed" card-title="Detailed Card" description="More detailed description" image="https://via.placeholder.com/300" />
    </div>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <tinto-card direction="vertical" card-title="Vertical Card" image="https://via.placeholder.com/300" />
      <tinto-card direction="horizontal" card-title="Horizontal Card" description="Horizontal layout card" image="https://via.placeholder.com/300" />
    </div>
}`,
      ...d.parameters?.docs?.source,
    },
  },
};
const n = ['Default', 'WithSlots', 'Ecommerce', 'Variants', 'Directions'];
export {
  e as Default,
  d as Directions,
  r as Ecommerce,
  o as Variants,
  a as WithSlots,
  n as __namedExportsOrder,
  s as default,
};
