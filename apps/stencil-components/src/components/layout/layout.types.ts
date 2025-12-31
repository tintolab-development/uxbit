/**
 * Layout 컴포넌트 타입 정의
 */

import type { FlexDirection } from '../../types/common.types';

// ===== Breakpoint 타입 =====

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BreakpointValue = {
  xs?: string; // < 640px
  sm?: string; // >= 640px
  md?: string; // >= 768px
  lg?: string; // >= 1024px
  xl?: string; // >= 1280px
  '2xl'?: string; // >= 1536px
};

// ===== Layout Props =====

export interface LayoutProps {
  direction?: FlexDirection;
  gap?: string | BreakpointValue;
  padding?: string | BreakpointValue;
  height?: 'auto' | '100vh' | '100dvh';
  hasSider?: boolean;
}

// ===== Header Props =====

export interface HeaderProps {
  height?: string | BreakpointValue;
  fixed?: boolean;
  zIndex?: number;
  background?: string;
  padding?: string | BreakpointValue;
}

// ===== Content Props =====

export interface ContentProps {
  padding?: string | BreakpointValue;
  maxWidth?: string | BreakpointValue;
  center?: boolean;
  background?: string;
}

// ===== Footer Props =====

export interface FooterProps {
  height?: string | BreakpointValue;
  background?: string;
  padding?: string | BreakpointValue;
}

// ===== Sider Props =====

export interface SiderProps {
  width?: string | BreakpointValue;
  collapsed?: boolean;
  collapsible?: boolean;
  collapsedWidth?: string;
  breakpoint?: Breakpoint; // 이 breakpoint 이하에서 자동 숨김
  background?: string;
  zIndex?: number;
}
