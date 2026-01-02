import { h as e } from './vendor-stencil-dp4AnqGI.js';
const d = {
    title: 'Uxbit/FormInput',
    component: 'tinto-form-input',
    parameters: { layout: 'centered' },
    args: {
      type: 'text',
      size: 'md',
      variant: 'default',
      state: 'default',
      value: '',
      placeholder: 'Placeholder text',
      label: 'Label',
      helperText: '',
      errorMessage: '',
      successMessage: '',
      required: !1,
      disabled: !1,
      readonly: !1,
      showPasswordToggle: !1,
    },
    argTypes: {
      type: {
        control: 'select',
        options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
      },
      size: { control: 'select', options: ['sm', 'md', 'lg'] },
      variant: { control: 'select', options: ['default', 'outline', 'filled', 'underline'] },
      state: { control: 'select', options: ['default', 'error', 'success', 'warning'] },
    },
  },
  r = {
    render: (t) =>
      e(
        'div',
        { style: { width: '300px' } },
        e('tinto-form-input', {
          type: t.type,
          size: t.size,
          variant: t.variant,
          state: t.state,
          value: t.value,
          placeholder: t.placeholder,
          label: t.label,
          'helper-text': t.helperText,
          'error-message': t.errorMessage,
          'success-message': t.successMessage,
          required: t.required,
          disabled: t.disabled,
          readonly: t.readonly,
          'show-password-toggle': t.showPasswordToggle,
        }),
      ),
  },
  l = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', {
          variant: 'default',
          label: 'Default',
          placeholder: 'Default variant',
        }),
        e('tinto-form-input', {
          variant: 'outline',
          label: 'Outline',
          placeholder: 'Outline variant',
        }),
        e('tinto-form-input', {
          variant: 'filled',
          label: 'Filled',
          placeholder: 'Filled variant',
        }),
        e('tinto-form-input', {
          variant: 'underline',
          label: 'Underline',
          placeholder: 'Underline variant',
        }),
      ),
  },
  a = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', {
          state: 'default',
          label: 'Default',
          placeholder: 'Default state',
          'helper-text': 'Helper text',
        }),
        e('tinto-form-input', {
          state: 'error',
          label: 'Error',
          placeholder: 'Error state',
          'error-message': 'Error message',
        }),
        e('tinto-form-input', {
          state: 'success',
          label: 'Success',
          placeholder: 'Success state',
          'success-message': 'Success message',
        }),
        e('tinto-form-input', {
          state: 'warning',
          label: 'Warning',
          placeholder: 'Warning state',
          'helper-text': 'Warning message',
        }),
      ),
  },
  o = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', { size: 'sm', label: 'Small', placeholder: 'Small size' }),
        e('tinto-form-input', { size: 'md', label: 'Medium', placeholder: 'Medium size' }),
        e('tinto-form-input', { size: 'lg', label: 'Large', placeholder: 'Large size' }),
      ),
  },
  s = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', { type: 'text', label: 'Text', placeholder: 'Enter text' }),
        e('tinto-form-input', { type: 'email', label: 'Email', placeholder: 'Enter email' }),
        e('tinto-form-input', {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          'show-password-toggle': !0,
        }),
        e('tinto-form-input', { type: 'number', label: 'Number', placeholder: 'Enter number' }),
        e('tinto-form-input', { type: 'tel', label: 'Phone', placeholder: 'Enter phone number' }),
        e('tinto-form-input', { type: 'url', label: 'URL', placeholder: 'Enter URL' }),
        e('tinto-form-input', { type: 'search', label: 'Search', placeholder: 'Search...' }),
      ),
  },
  i = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
          required: !0,
          'helper-text': 'Required field',
        }),
        e('tinto-form-input', {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          required: !0,
          minlength: 8,
          'helper-text': 'Minimum 8 characters',
          'show-password-toggle': !0,
        }),
      ),
  },
  n = {
    render: () =>
      e(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' } },
        e('tinto-form-input', {
          label: 'Disabled',
          placeholder: 'Disabled input',
          disabled: !0,
          value: 'Disabled value',
        }),
        e('tinto-form-input', {
          label: 'Readonly',
          placeholder: 'Readonly input',
          readonly: !0,
          value: 'Readonly value',
        }),
      ),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <div style={{
    width: '300px'
  }}>
      <tinto-form-input type={args.type} size={args.size} variant={args.variant} state={args.state} value={args.value} placeholder={args.placeholder} label={args.label} helper-text={args.helperText} error-message={args.errorMessage} success-message={args.successMessage} required={args.required} disabled={args.disabled} readonly={args.readonly} show-password-toggle={args.showPasswordToggle} />
    </div>
}`,
      ...r.parameters?.docs?.source,
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
    flexDirection: 'column',
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input variant="default" label="Default" placeholder="Default variant" />
      <tinto-form-input variant="outline" label="Outline" placeholder="Outline variant" />
      <tinto-form-input variant="filled" label="Filled" placeholder="Filled variant" />
      <tinto-form-input variant="underline" label="Underline" placeholder="Underline variant" />
    </div>
}`,
      ...l.parameters?.docs?.source,
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
    flexDirection: 'column',
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input state="default" label="Default" placeholder="Default state" helper-text="Helper text" />
      <tinto-form-input state="error" label="Error" placeholder="Error state" error-message="Error message" />
      <tinto-form-input state="success" label="Success" placeholder="Success state" success-message="Success message" />
      <tinto-form-input state="warning" label="Warning" placeholder="Warning state" helper-text="Warning message" />
    </div>
}`,
      ...a.parameters?.docs?.source,
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
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input size="sm" label="Small" placeholder="Small size" />
      <tinto-form-input size="md" label="Medium" placeholder="Medium size" />
      <tinto-form-input size="lg" label="Large" placeholder="Large size" />
    </div>
}`,
      ...o.parameters?.docs?.source,
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
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input type="text" label="Text" placeholder="Enter text" />
      <tinto-form-input type="email" label="Email" placeholder="Enter email" />
      <tinto-form-input type="password" label="Password" placeholder="Enter password" show-password-toggle />
      <tinto-form-input type="number" label="Number" placeholder="Enter number" />
      <tinto-form-input type="tel" label="Phone" placeholder="Enter phone number" />
      <tinto-form-input type="url" label="URL" placeholder="Enter URL" />
      <tinto-form-input type="search" label="Search" placeholder="Search..." />
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
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input type="email" label="Email" placeholder="Enter email" required helper-text="Required field" />
      <tinto-form-input type="password" label="Password" placeholder="Enter password" required minlength={8} helper-text="Minimum 8 characters" show-password-toggle />
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
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '300px'
  }}>
      <tinto-form-input label="Disabled" placeholder="Disabled input" disabled value="Disabled value" />
      <tinto-form-input label="Readonly" placeholder="Readonly input" readonly value="Readonly value" />
    </div>
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
const u = [
  'Default',
  'Variants',
  'States',
  'Sizes',
  'Types',
  'WithValidation',
  'DisabledAndReadonly',
];
export {
  r as Default,
  n as DisabledAndReadonly,
  o as Sizes,
  a as States,
  s as Types,
  l as Variants,
  i as WithValidation,
  u as __namedExportsOrder,
  d as default,
};
