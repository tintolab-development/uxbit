// image.types.ts
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type ImageAnimation = '' | 'spin' | 'float' | 'wobble' | 'pulse';
export type AnimationRotate = 'left' | 'right';

export type RoundedPreset =
  | 'soft'
  | 'oval'
  | 'top'
  | 'diagonal'
  | 'circle'
  // alias 지원(매핑 목적)
  | 'base'
  | 'full'
  | 't'
  | 'lr';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top' | string;
export type AsKind = 'button';

export type RepeatValue = 'infinite' | number | string;

export interface TintoImageLoadedDetail {
  width: number;
  height: number;
  src?: string;
}

export interface TintoImageErrorDetail {
  src?: string;
}

export type PressKind = 'link' | 'button' | 'plain';
export interface TintoImagePressDetail {
  kind: PressKind;
}
