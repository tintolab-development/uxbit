// badge.types.ts

/** 배지 variant */
export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

/** 배지 크기 */
export type BadgeSize = 'sm' | 'md' | 'lg';

/** 배지 형태 */
export type BadgeShape = 'default' | 'pill' | 'dot';
