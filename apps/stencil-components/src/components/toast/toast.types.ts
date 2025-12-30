// toast.types.ts

/** 토스트 variant */
export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

/** 토스트 크기 */
export type ToastSize = 'sm' | 'md' | 'lg';

/** 토스트 위치 */
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
