import { h as t } from './vendor-stencil-dp4AnqGI.js';
const r = {
    title: 'Uxbit/Modal',
    component: 'tinto-modal',
    parameters: { layout: 'fullscreen' },
    args: {
      open: !1,
      size: 'md',
      variant: 'default',
      showClose: !0,
      closeOnBackdrop: !0,
      closeOnEscape: !0,
      focusTrap: !0,
      autofocus: !0,
    },
    argTypes: {
      size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
      variant: {
        control: 'select',
        options: ['default', 'centered', 'bottom-sheet', 'drawer'],
        description: '모바일에서 bottom-sheet는 하단에서 올라오는 스타일',
      },
    },
  },
  e = {
    render: (o) =>
      t(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        t(
          'tinto-button',
          {
            variant: 'primary',
            onClick: () => {
              document.querySelector('tinto-modal')?.openModal();
            },
          },
          'Open Modal',
        ),
        t(
          'tinto-modal',
          {
            open: o.open,
            size: o.size,
            variant: o.variant,
            showClose: o.showClose,
            closeOnBackdrop: o.closeOnBackdrop,
            closeOnEscape: o.closeOnEscape,
            focusTrap: o.focusTrap,
            autofocus: o.autofocus,
          },
          t('div', { slot: 'title' }, 'Modal Title'),
          t('p', null, 'This is modal content.'),
          t(
            'div',
            { slot: 'footer' },
            t(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal')?.closeModal();
                },
              },
              'Cancel',
            ),
            t(
              'tinto-button',
              {
                variant: 'primary',
                onClick: () => {
                  document.querySelector('tinto-modal')?.closeModal();
                },
              },
              'Confirm',
            ),
          ),
        ),
      ),
  },
  a = {
    render: () =>
      t(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        t(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-size="sm"]')?.openModal();
            },
          },
          'Small Modal',
        ),
        t(
          'tinto-modal',
          { 'data-size': 'sm', size: 'sm' },
          t('div', { slot: 'title' }, 'Small Modal'),
          t('p', null, 'This is a small modal.'),
        ),
      ),
  },
  n = {
    render: () =>
      t(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        t(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-focus-trap]')?.openModal();
            },
          },
          'Open Modal with Focus Trap',
        ),
        t(
          'tinto-modal',
          { 'data-focus-trap': !0, focusTrap: !0, autofocus: !0 },
          t('div', { slot: 'title' }, 'Focus Trap Modal'),
          t('p', null, 'Try pressing Tab to navigate. Focus is trapped inside the modal.'),
          t(
            'div',
            { slot: 'footer' },
            t(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-focus-trap]')?.closeModal();
                },
              },
              'Cancel',
            ),
            t(
              'tinto-button',
              {
                variant: 'primary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-focus-trap]')?.closeModal();
                },
              },
              'Confirm',
            ),
          ),
        ),
      ),
  },
  l = {
    render: () =>
      t(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        t(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-no-focus-trap]')?.openModal();
            },
          },
          'Open Modal without Focus Trap',
        ),
        t(
          'tinto-modal',
          { 'data-no-focus-trap': !0, focusTrap: !1 },
          t('div', { slot: 'title' }, 'No Focus Trap Modal'),
          t('p', null, 'Focus is not trapped. You can tab outside the modal.'),
          t(
            'div',
            { slot: 'footer' },
            t(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-no-focus-trap]')?.closeModal();
                },
              },
              'Cancel',
            ),
            t(
              'tinto-button',
              {
                variant: 'primary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-no-focus-trap]')?.closeModal();
                },
              },
              'Confirm',
            ),
          ),
        ),
      ),
  },
  i = {
    render: () =>
      t(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        t(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-variant="bottom-sheet"]')?.openModal();
            },
          },
          'Open Bottom Sheet (모바일 최적화)',
        ),
        t(
          'tinto-modal',
          { 'data-variant': 'bottom-sheet', variant: 'bottom-sheet', size: 'md' },
          t('div', { slot: 'title' }, 'Bottom Sheet Modal'),
          t('p', null, '모바일에서 하단에서 올라오는 스타일의 모달입니다.'),
          t('p', null, '터치 친화적인 인터페이스를 제공합니다.'),
          t(
            'div',
            { slot: 'footer' },
            t(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-variant="bottom-sheet"]')?.closeModal();
                },
              },
              '취소',
            ),
            t(
              'tinto-button',
              {
                variant: 'primary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-variant="bottom-sheet"]')?.closeModal();
                },
              },
              '확인',
            ),
          ),
        ),
      ),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
      <tinto-button variant="primary" onClick={() => {
      const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Open Modal
      </tinto-button>
      <tinto-modal open={args.open} size={args.size} variant={args.variant} showClose={args.showClose} closeOnBackdrop={args.closeOnBackdrop} closeOnEscape={args.closeOnEscape} focusTrap={args.focusTrap} autofocus={args.autofocus}>
        <div slot="title">Modal Title</div>
        <p>This is modal content.</p>
        <div slot="footer">
          <tinto-button variant="secondary" onClick={() => {
          const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Cancel
          </tinto-button>
          <tinto-button variant="primary" onClick={() => {
          const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
      <tinto-button onClick={() => {
      const modal = document.querySelector('tinto-modal[data-size="sm"]') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Small Modal
      </tinto-button>
      <tinto-modal data-size="sm" size="sm">
        <div slot="title">Small Modal</div>
        <p>This is a small modal.</p>
      </tinto-modal>
    </div>
}`,
      ...a.parameters?.docs?.source,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
      <tinto-button onClick={() => {
      const modal = document.querySelector('tinto-modal[data-focus-trap]') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Open Modal with Focus Trap
      </tinto-button>
      <tinto-modal data-focus-trap focusTrap={true} autofocus={true}>
        <div slot="title">Focus Trap Modal</div>
        <p>Try pressing Tab to navigate. Focus is trapped inside the modal.</p>
        <div slot="footer">
          <tinto-button variant="secondary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-focus-trap]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Cancel
          </tinto-button>
          <tinto-button variant="primary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-focus-trap]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
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
  render: () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
      <tinto-button onClick={() => {
      const modal = document.querySelector('tinto-modal[data-no-focus-trap]') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Open Modal without Focus Trap
      </tinto-button>
      <tinto-modal data-no-focus-trap focusTrap={false}>
        <div slot="title">No Focus Trap Modal</div>
        <p>Focus is not trapped. You can tab outside the modal.</p>
        <div slot="footer">
          <tinto-button variant="secondary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-no-focus-trap]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Cancel
          </tinto-button>
          <tinto-button variant="primary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-no-focus-trap]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            Confirm
          </tinto-button>
        </div>
      </tinto-modal>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }}>
      <tinto-button onClick={() => {
      const modal = document.querySelector('tinto-modal[data-variant="bottom-sheet"]') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Open Bottom Sheet (모바일 최적화)
      </tinto-button>
      <tinto-modal data-variant="bottom-sheet" variant="bottom-sheet" size="md">
        <div slot="title">Bottom Sheet Modal</div>
        <p>모바일에서 하단에서 올라오는 스타일의 모달입니다.</p>
        <p>터치 친화적인 인터페이스를 제공합니다.</p>
        <div slot="footer">
          <tinto-button variant="secondary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-variant="bottom-sheet"]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            취소
          </tinto-button>
          <tinto-button variant="primary" onClick={() => {
          const modal = document.querySelector('tinto-modal[data-variant="bottom-sheet"]') as HTMLTintoModalElement;
          modal?.closeModal();
        }}>
            확인
          </tinto-button>
        </div>
      </tinto-modal>
    </div>
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
const c = ['Default', 'Sizes', 'WithFocusTrap', 'WithoutFocusTrap', 'BottomSheet'];
export {
  i as BottomSheet,
  e as Default,
  a as Sizes,
  n as WithFocusTrap,
  l as WithoutFocusTrap,
  c as __namedExportsOrder,
  r as default,
};
