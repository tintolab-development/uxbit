/**
 * Layout 컴포넌트 모듈
 *
 * Ant Design 스타일의 Layout 시스템을 제공합니다.
 *
 * @example
 * ```html
 * <tinto-layout>
 *   <tinto-header>Header</tinto-header>
 *   <tinto-layout direction="row">
 *     <tinto-sider>Sidebar</tinto-sider>
 *     <tinto-content>Content</tinto-content>
 *   </tinto-layout>
 *   <tinto-footer>Footer</tinto-footer>
 * </tinto-layout>
 * ```
 */

export { TintoLayout } from './layout';
export { TintoHeader } from './header/header';
export { TintoContent } from './content/content';
export { TintoFooter } from './footer/footer';
export { TintoSider } from './sider/sider';

export type {
  LayoutProps,
  HeaderProps,
  ContentProps,
  FooterProps,
  SiderProps,
  Breakpoint,
  BreakpointValue,
} from './layout.types';
