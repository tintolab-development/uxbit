// modal.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type ModalStoryProps = {
  open: boolean;
  size: 'sm' | 'md' | 'lg' | 'full';
  showClose: boolean;
  closeOnBackdrop: boolean;
  closeOnEscape: boolean;
  focusTrap: boolean;
  autofocus: boolean;
};

const meta: Meta<ModalStoryProps> = {
  title: 'Uxbit/Modal',
  component: 'tinto-modal',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    open: false,
    size: 'md',
    showClose: true,
    closeOnBackdrop: true,
    closeOnEscape: true,
    focusTrap: true,
    autofocus: true,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<ModalStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <button
        onClick={() => {
          const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Open Modal
      </button>
      <tinto-modal
        open={args.open}
        size={args.size}
        showClose={args.showClose}
        closeOnBackdrop={args.closeOnBackdrop}
        closeOnEscape={args.closeOnEscape}
        focusTrap={args.focusTrap}
        autofocus={args.autofocus}
      >
        <div slot="title">Modal Title</div>
        <p>This is modal content.</p>
        <div slot="footer">
          <tinto-button
            variant="secondary"
            onClick={() => {
              const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Cancel
          </tinto-button>
          <tinto-button
            variant="primary"
            onClick={() => {
              const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <tinto-button
        onClick={() => {
          const modal = document.querySelector(
            'tinto-modal[data-size="sm"]',
          ) as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Small Modal
      </tinto-button>
      <tinto-modal data-size="sm" size="sm">
        <div slot="title">Small Modal</div>
        <p>This is a small modal.</p>
      </tinto-modal>
    </div>
  ),
};

export const WithFocusTrap: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <tinto-button
        onClick={() => {
          const modal = document.querySelector(
            'tinto-modal[data-focus-trap]',
          ) as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Open Modal with Focus Trap
      </tinto-button>
      <tinto-modal data-focus-trap focusTrap={true} autofocus={true}>
        <div slot="title">Focus Trap Modal</div>
        <p>Try pressing Tab to navigate. Focus is trapped inside the modal.</p>
        <div slot="footer">
          <tinto-button
            variant="secondary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-focus-trap]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Cancel
          </tinto-button>
          <tinto-button
            variant="primary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-focus-trap]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
  ),
};

export const WithoutFocusTrap: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <tinto-button
        onClick={() => {
          const modal = document.querySelector(
            'tinto-modal[data-no-focus-trap]',
          ) as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Open Modal without Focus Trap
      </tinto-button>
      <tinto-modal data-no-focus-trap focusTrap={false}>
        <div slot="title">No Focus Trap Modal</div>
        <p>Focus is not trapped. You can tab outside the modal.</p>
        <div slot="footer">
          <tinto-button
            variant="secondary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-no-focus-trap]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Cancel
          </tinto-button>
          <tinto-button
            variant="primary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-no-focus-trap]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
  ),
};
