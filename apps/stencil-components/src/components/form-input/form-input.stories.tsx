// form-input.stories.tsx
import type { Meta, StoryObj } from '@stencil/storybook-plugin';
import { h } from '@stencil/core';

type FormInputStoryProps = {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'outline' | 'filled' | 'underline';
  state: 'default' | 'error' | 'success' | 'warning';
  value: string;
  placeholder: string;
  label: string;
  helperText: string;
  errorMessage: string;
  successMessage: string;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  showPasswordToggle: boolean;
};

const meta: Meta<FormInputStoryProps> = {
  title: 'Uxbit/FormInput',
  component: 'tinto-form-input',
  parameters: {
    layout: 'centered',
  },
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
    required: false,
    disabled: false,
    readonly: false,
    showPasswordToggle: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'filled', 'underline'],
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<FormInputStoryProps>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <tinto-form-input
        type={args.type}
        size={args.size}
        variant={args.variant}
        state={args.state}
        value={args.value}
        placeholder={args.placeholder}
        label={args.label}
        helper-text={args.helperText}
        error-message={args.errorMessage}
        success-message={args.successMessage}
        required={args.required}
        disabled={args.disabled}
        readonly={args.readonly}
        show-password-toggle={args.showPasswordToggle}
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input variant="default" label="Default" placeholder="Default variant" />
      <tinto-form-input variant="outline" label="Outline" placeholder="Outline variant" />
      <tinto-form-input variant="filled" label="Filled" placeholder="Filled variant" />
      <tinto-form-input variant="underline" label="Underline" placeholder="Underline variant" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input
        state="default"
        label="Default"
        placeholder="Default state"
        helper-text="Helper text"
      />
      <tinto-form-input
        state="error"
        label="Error"
        placeholder="Error state"
        error-message="Error message"
      />
      <tinto-form-input
        state="success"
        label="Success"
        placeholder="Success state"
        success-message="Success message"
      />
      <tinto-form-input
        state="warning"
        label="Warning"
        placeholder="Warning state"
        helper-text="Warning message"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input size="sm" label="Small" placeholder="Small size" />
      <tinto-form-input size="md" label="Medium" placeholder="Medium size" />
      <tinto-form-input size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input type="text" label="Text" placeholder="Enter text" />
      <tinto-form-input type="email" label="Email" placeholder="Enter email" />
      <tinto-form-input
        type="password"
        label="Password"
        placeholder="Enter password"
        show-password-toggle
      />
      <tinto-form-input type="number" label="Number" placeholder="Enter number" />
      <tinto-form-input type="tel" label="Phone" placeholder="Enter phone number" />
      <tinto-form-input type="url" label="URL" placeholder="Enter URL" />
      <tinto-form-input type="search" label="Search" placeholder="Search..." />
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input
        type="email"
        label="Email"
        placeholder="Enter email"
        required
        helper-text="Required field"
      />
      <tinto-form-input
        type="password"
        label="Password"
        placeholder="Enter password"
        required
        minlength={8}
        helper-text="Minimum 8 characters"
        show-password-toggle
      />
    </div>
  ),
};

export const DisabledAndReadonly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <tinto-form-input
        label="Disabled"
        placeholder="Disabled input"
        disabled
        value="Disabled value"
      />
      <tinto-form-input
        label="Readonly"
        placeholder="Readonly input"
        readonly
        value="Readonly value"
      />
    </div>
  ),
};
