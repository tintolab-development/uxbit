import { h as r } from './iframe-DeVSbkJr.js';
const d = {
    title: 'Uxbit/SearchBar',
    component: 'tinto-search-bar',
    parameters: { layout: 'centered' },
    args: {
      size: 'md',
      variant: 'default',
      placeholder: 'Search...',
      value: '',
      autofocus: !1,
      disabled: !1,
      loading: !1,
      debounce: 300,
      minLength: 2,
      maxResults: 10,
    },
    argTypes: {
      size: { control: 'select', options: ['sm', 'md', 'lg'] },
      variant: { control: 'select', options: ['default', 'outline', 'filled'] },
      debounce: { control: { type: 'number', min: 0, max: 1e3, step: 50 } },
      minLength: { control: { type: 'number', min: 0, max: 10, step: 1 } },
      maxResults: { control: { type: 'number', min: 1, max: 20, step: 1 } },
    },
  },
  t = {
    render: (e) =>
      r(
        'div',
        { style: { width: '400px' } },
        r('tinto-search-bar', {
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          value: e.value,
          autofocus: e.autofocus,
          disabled: e.disabled,
          loading: e.loading,
          debounce: e.debounce,
          minLength: e.minLength,
          maxResults: e.maxResults,
        }),
      ),
  },
  a = {
    render: (e) => {
      const l = [
        { id: '1', title: 'Product 1', description: 'Product description 1', href: '#' },
        { id: '2', title: 'Product 2', description: 'Product description 2', href: '#' },
        { id: '3', title: 'Product 3', description: 'Product description 3', href: '#' },
      ];
      return r(
        'div',
        { style: { width: '400px' } },
        r(
          'tinto-search-bar',
          {
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            value: 'product',
            debounce: e.debounce,
            minLength: e.minLength,
            maxResults: e.maxResults,
          },
          r(
            'script',
            null,
            `
              const searchBar = document.querySelector('tinto-search-bar');
              searchBar.results = ${JSON.stringify(l)};
              searchBar.addEventListener('tintoInput', (e) => {
                console.log('Search input:', e.detail);
              });
              searchBar.addEventListener('tintoSubmit', (e) => {
                console.log('Search submit:', e.detail);
              });
              searchBar.addEventListener('tintoResultClick', (e) => {
                console.log('Result click:', e.detail);
              });
            `,
          ),
        ),
      );
    },
  },
  s = {
    render: () =>
      r(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' } },
        r('tinto-search-bar', { size: 'sm', placeholder: 'Small size' }),
        r('tinto-search-bar', { size: 'md', placeholder: 'Medium size' }),
        r('tinto-search-bar', { size: 'lg', placeholder: 'Large size' }),
      ),
  },
  i = {
    render: () =>
      r(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' } },
        r('tinto-search-bar', { variant: 'default', placeholder: 'Default style' }),
        r('tinto-search-bar', { variant: 'outline', placeholder: 'Outline style' }),
        r('tinto-search-bar', { variant: 'filled', placeholder: 'Filled style' }),
      ),
  },
  n = {
    render: () =>
      r(
        'div',
        { style: { width: '400px' } },
        r('tinto-search-bar', { placeholder: 'Searching...', loading: !0, value: 'search query' }),
      ),
  },
  o = {
    render: () =>
      r(
        'div',
        { style: { width: '400px' } },
        r('tinto-search-bar', { placeholder: 'Disabled search bar', disabled: !0 }),
      ),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    width: '400px'
  }}>
      <tinto-search-bar size={args.size} variant={args.variant} placeholder={args.placeholder} value={args.value} autofocus={args.autofocus} disabled={args.disabled} loading={args.loading} debounce={args.debounce} minLength={args.minLength} maxResults={args.maxResults} />
    </div>
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: args => {
    const mockResults: SearchResult[] = [{
      id: '1',
      title: 'Product 1',
      description: 'Product description 1',
      href: '#'
    }, {
      id: '2',
      title: 'Product 2',
      description: 'Product description 2',
      href: '#'
    }, {
      id: '3',
      title: 'Product 3',
      description: 'Product description 3',
      href: '#'
    }];
    return <div style={{
      width: '400px'
    }}>
        <tinto-search-bar size={args.size} variant={args.variant} placeholder={args.placeholder} value="product" debounce={args.debounce} minLength={args.minLength} maxResults={args.maxResults}>
          <script>
            {\`
              const searchBar = document.querySelector('tinto-search-bar');
              searchBar.results = \${JSON.stringify(mockResults)};
              searchBar.addEventListener('tintoInput', (e) => {
                console.log('Search input:', e.detail);
              });
              searchBar.addEventListener('tintoSubmit', (e) => {
                console.log('Search submit:', e.detail);
              });
              searchBar.addEventListener('tintoResultClick', (e) => {
                console.log('Result click:', e.detail);
              });
            \`}
          <\/script>
        </tinto-search-bar>
      </div>;
  }
}`,
      ...a.parameters?.docs?.source,
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
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <tinto-search-bar size="sm" placeholder="Small size" />
      <tinto-search-bar size="md" placeholder="Medium size" />
      <tinto-search-bar size="lg" placeholder="Large size" />
    </div>
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
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <tinto-search-bar variant="default" placeholder="Default style" />
      <tinto-search-bar variant="outline" placeholder="Outline style" />
      <tinto-search-bar variant="filled" placeholder="Filled style" />
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    width: '400px'
  }}>
      <tinto-search-bar placeholder="Searching..." loading={true} value="search query" />
    </div>
}`,
      ...n.parameters?.docs?.source,
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
    width: '400px'
  }}>
      <tinto-search-bar placeholder="Disabled search bar" disabled={true} />
    </div>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const u = ['Default', 'WithResults', 'Sizes', 'Variants', 'Loading', 'Disabled'];
export {
  t as Default,
  o as Disabled,
  n as Loading,
  s as Sizes,
  i as Variants,
  a as WithResults,
  u as __namedExportsOrder,
  d as default,
};
