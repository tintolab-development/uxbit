// modal.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type ModalStoryProps = {
  open: boolean;
  size: 'sm' | 'md' | 'lg' | 'full';
  variant: 'default' | 'centered' | 'bottom-sheet' | 'drawer';
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
    variant: 'default',
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
    variant: {
      control: 'select',
      options: ['default', 'centered', 'bottom-sheet', 'drawer'],
      description: '모바일에서 bottom-sheet는 하단에서 올라오는 스타일',
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
      <tinto-button
        variant="primary"
        onClick={() => {
          const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Open Modal
      </tinto-button>
      <tinto-modal
        open={args.open}
        size={args.size}
        variant={args.variant}
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

export const BottomSheet: Story = {
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
            'tinto-modal[data-variant="bottom-sheet"]',
          ) as HTMLTintoModalElement;
          modal?.openModal();
        }}
      >
        Open Bottom Sheet (모바일 최적화)
      </tinto-button>
      <tinto-modal data-variant="bottom-sheet" variant="bottom-sheet" size="md">
        <div slot="title">Bottom Sheet Modal</div>
        <p>모바일에서 하단에서 올라오는 스타일의 모달입니다.</p>
        <p>터치 친화적인 인터페이스를 제공합니다.</p>
        <div slot="footer">
          <tinto-button
            variant="secondary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-variant="bottom-sheet"]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            취소
          </tinto-button>
          <tinto-button
            variant="primary"
            onClick={() => {
              const modal = document.querySelector(
                'tinto-modal[data-variant="bottom-sheet"]',
              ) as HTMLTintoModalElement;
              modal?.closeModal();
            }}
          >
            확인
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
  ),
};
