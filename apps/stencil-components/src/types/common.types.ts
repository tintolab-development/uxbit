/**
 * 공통 타입 정의
 * 여러 컴포넌트에서 공유되는 타입들을 중앙에서 관리합니다.
 */

// ===== Flexbox 레이아웃 타입 =====

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';

export type AlignContent =
  | 'stretch'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

// ===== 높이 모드 타입 =====

export type HeightMode = 'auto' | 'dvh' | 'screen';

// ===== 배경 이미지 타입 =====

export type BgSize = 'auto' | 'cover' | 'contain' | string;

export type BgRepeat = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | string;

export type BgAttachment = 'scroll' | 'fixed' | 'local' | string;

export type BgBlend = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | string;

// ===== 스크롤 타입 =====

export type OverflowMode = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export type ScrollBehavior = 'auto' | 'smooth';

export type ScrollSnapType =
  | 'none'
  | 'x mandatory'
  | 'x proximity'
  | 'y mandatory'
  | 'y proximity'
  | 'block mandatory'
  | 'block proximity'
  | 'inline mandatory'
  | 'inline proximity'
  | 'both mandatory'
  | 'both proximity';

export type SnapAlign = 'start' | 'center' | 'end' | 'none';

// ===== 텍스트 타입 =====

export type TextAlign = 'start' | 'end' | 'left' | 'center' | 'right' | 'justify';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
