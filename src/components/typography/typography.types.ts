// typography.types.ts
export type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export type FontFamily = 'system' | 'serif' | 'sans' | 'mono' | 'display';

export const FAMILY_MAP: Record<FontFamily, string> = {
  system: `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji"`,
  serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  sans: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji", sans-serif`,
  mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  display: `"Inter var", Inter, "Pretendard Variable", Pretendard, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`,
};

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const FONT_SIZE: Record<FontSize, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};

export type Align = 'left' | 'center' | 'right' | 'justify';
export type Color = string;
export type HighlightColor = string;
