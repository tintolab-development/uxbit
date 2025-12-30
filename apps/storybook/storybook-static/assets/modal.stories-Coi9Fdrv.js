import { h as o } from './iframe-DeVSbkJr.js';
const i = {
    title: 'Uxbit/Modal',
    component: 'tinto-modal',
    parameters: { layout: 'fullscreen' },
    args: {
      open: !1,
      size: 'md',
      showClose: !0,
      closeOnBackdrop: !0,
      closeOnEscape: !0,
      focusTrap: !0,
      autofocus: !0,
    },
    argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] } },
  },
  e = {
    render: (t) =>
      o(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        o(
          'button',
          {
            onClick: () => {
              document.querySelector('tinto-modal')?.openModal();
            },
          },
          'Open Modal',
        ),
        o(
          'tinto-modal',
          {
            open: t.open,
            size: t.size,
            showClose: t.showClose,
            closeOnBackdrop: t.closeOnBackdrop,
            closeOnEscape: t.closeOnEscape,
            focusTrap: t.focusTrap,
            autofocus: t.autofocus,
          },
          o('div', { slot: 'title' }, 'Modal Title'),
          o('p', null, 'This is modal content.'),
          o(
            'div',
            { slot: 'footer' },
            o(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal')?.closeModal();
                },
              },
              'Cancel',
            ),
            o(
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
      o(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        o(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-size="sm"]')?.openModal();
            },
          },
          'Small Modal',
        ),
        o(
          'tinto-modal',
          { 'data-size': 'sm', size: 'sm' },
          o('div', { slot: 'title' }, 'Small Modal'),
          o('p', null, 'This is a small modal.'),
        ),
      ),
  },
  n = {
    render: () =>
      o(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        o(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-focus-trap]')?.openModal();
            },
          },
          'Open Modal with Focus Trap',
        ),
        o(
          'tinto-modal',
          { 'data-focus-trap': !0, focusTrap: !0, autofocus: !0 },
          o('div', { slot: 'title' }, 'Focus Trap Modal'),
          o('p', null, 'Try pressing Tab to navigate. Focus is trapped inside the modal.'),
          o(
            'div',
            { slot: 'footer' },
            o(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-focus-trap]')?.closeModal();
                },
              },
              'Cancel',
            ),
            o(
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
      o(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          },
        },
        o(
          'tinto-button',
          {
            onClick: () => {
              document.querySelector('tinto-modal[data-no-focus-trap]')?.openModal();
            },
          },
          'Open Modal without Focus Trap',
        ),
        o(
          'tinto-modal',
          { 'data-no-focus-trap': !0, focusTrap: !1 },
          o('div', { slot: 'title' }, 'No Focus Trap Modal'),
          o('p', null, 'Focus is not trapped. You can tab outside the modal.'),
          o(
            'div',
            { slot: 'footer' },
            o(
              'tinto-button',
              {
                variant: 'secondary',
                onClick: () => {
                  document.querySelector('tinto-modal[data-no-focus-trap]')?.closeModal();
                },
              },
              'Cancel',
            ),
            o(
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
      <button onClick={() => {
      const modal = document.querySelector('tinto-modal') as HTMLTintoModalElement;
      modal?.openModal();
    }}>
        Open Modal
      </button>
      <tinto-modal open={args.open} size={args.size} showClose={args.showClose} closeOnBackdrop={args.closeOnBackdrop} closeOnEscape={args.closeOnEscape} focusTrap={args.focusTrap} autofocus={args.autofocus}>
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
const r = ['Default', 'Sizes', 'WithFocusTrap', 'WithoutFocusTrap'];
export {
  e as Default,
  a as Sizes,
  n as WithFocusTrap,
  l as WithoutFocusTrap,
  r as __namedExportsOrder,
  i as default,
};
