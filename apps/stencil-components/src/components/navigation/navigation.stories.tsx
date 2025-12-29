// navigation.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';
import type { NavigationItem } from './navigation.types';

type NavigationStoryProps = {
  fixed: boolean;
  activeId?: string;
  items?: NavigationItem[];
};

const meta: Meta<NavigationStoryProps> = {
  title: 'Uxbit/Navigation',
  component: 'tinto-navigation',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    fixed: true,
    activeId: 'home',
  },
  argTypes: {
    fixed: {
      control: 'boolean',
    },
    activeId: {
      control: 'select',
      options: ['home', 'search', 'profile', 'settings', undefined],
    },
  },
};

export default meta;
type Story = StoryObj<NavigationStoryProps>;

export const Default: Story = {
  render: (args) => {
    const items: NavigationItem[] = [
      { id: 'home', label: 'Home', icon: '🏠', href: '#' },
      { id: 'search', label: 'Search', icon: '🔍', href: '#' },
      { id: 'profile', label: 'Profile', icon: '👤', href: '#' },
      { id: 'settings', label: 'Settings', icon: '⚙️', href: '#' },
    ];

    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <p>Navigation is fixed at the bottom.</p>
        </div>
        <tinto-navigation fixed={args.fixed} activeId={args.activeId} items={items} />
      </div>
    );
  },
};

export const CustomItems: Story = {
  render: () => {
    const customItems: NavigationItem[] = [
      { id: 'home', label: 'Home', icon: '🏠', href: '#', active: true },
      { id: 'search', label: 'Search', icon: '🔍', href: '#', badge: '3' },
      { id: 'cart', label: 'Cart', icon: '🛒', href: '#', badge: '5' },
      { id: 'profile', label: 'Profile', icon: '👤', href: '#' },
    ];

    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <p>Navigation with custom items and badges</p>
        </div>
        <tinto-navigation fixed={true} items={customItems} />
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const items: NavigationItem[] = [
      { id: 'home', label: 'Home', href: '#' },
      { id: 'search', label: 'Search', href: '#' },
      { id: 'profile', label: 'Profile', href: '#' },
    ];

    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <p>Navigation with custom icon slots</p>
        </div>
        <tinto-navigation fixed={true} items={items}>
          <svg
            slot="icon-home"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </tinto-navigation>
      </div>
    );
  },
};
