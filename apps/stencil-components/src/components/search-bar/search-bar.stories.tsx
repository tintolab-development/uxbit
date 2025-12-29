// search-bar.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { SearchBarSize, SearchBarVariant, SearchResult } from './search-bar.types';

type SearchBarStoryProps = {
  size: SearchBarSize;
  variant: SearchBarVariant;
  placeholder: string;
  value: string;
  autofocus: boolean;
  disabled: boolean;
  loading: boolean;
  debounce: number;
  minLength: number;
  maxResults: number;
};

const meta: Meta<SearchBarStoryProps> = {
  title: 'Uxbit/SearchBar',
  component: 'tinto-search-bar',
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
    variant: 'default',
    placeholder: 'Search...',
    value: '',
    autofocus: false,
    disabled: false,
    loading: false,
    debounce: 300,
    minLength: 2,
    maxResults: 10,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled'],
    },
    debounce: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
    },
    minLength: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    maxResults: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<SearchBarStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '400px' }}>
      <tinto-search-bar
        size={args.size}
        variant={args.variant}
        placeholder={args.placeholder}
        value={args.value}
        autofocus={args.autofocus}
        disabled={args.disabled}
        loading={args.loading}
        debounce={args.debounce}
        minLength={args.minLength}
        maxResults={args.maxResults}
      />
    </div>
  ),
};

export const WithResults: Story = {
  render: (args) => {
    const mockResults: SearchResult[] = [
      { id: '1', title: 'Product 1', description: 'Product description 1', href: '#' },
      { id: '2', title: 'Product 2', description: 'Product description 2', href: '#' },
      { id: '3', title: 'Product 3', description: 'Product description 3', href: '#' },
    ];

    return (
      <div style={{ width: '400px' }}>
        <tinto-search-bar
          size={args.size}
          variant={args.variant}
          placeholder={args.placeholder}
          value="product"
          debounce={args.debounce}
          minLength={args.minLength}
          maxResults={args.maxResults}
        >
          <script>
            {`
              const searchBar = document.querySelector('tinto-search-bar');
              searchBar.results = ${JSON.stringify(mockResults)};
              searchBar.addEventListener('tintoInput', (e) => {
                console.log('Search input:', e.detail);
              });
              searchBar.addEventListener('tintoSubmit', (e) => {
                console.log('Search submit:', e.detail);
              });
              searchBar.addEventListener('tintoResultClick', (e) => {
                console.log('Result click:', e.detail);
              });
            `}
          </script>
        </tinto-search-bar>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <tinto-search-bar size="sm" placeholder="Small size" />
      <tinto-search-bar size="md" placeholder="Medium size" />
      <tinto-search-bar size="lg" placeholder="Large size" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <tinto-search-bar variant="default" placeholder="Default style" />
      <tinto-search-bar variant="outline" placeholder="Outline style" />
      <tinto-search-bar variant="filled" placeholder="Filled style" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <tinto-search-bar placeholder="Searching..." loading={true} value="search query" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <tinto-search-bar placeholder="Disabled search bar" disabled={true} />
    </div>
  ),
};
