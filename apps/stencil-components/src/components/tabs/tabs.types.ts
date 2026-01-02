// tabs.types.ts

/** 탭 스타일 variant */
export type TabsVariant = 'default' | 'underline' | 'pills' | 'enclosed';

/** 탭 크기 */
export type TabsSize = 'sm' | 'md' | 'lg';

/** 탭 방향 */
export type TabsOrientation = 'horizontal' | 'vertical';

/** 탭 정렬 */
export type TabsPosition = 'start' | 'center' | 'end';

/** 탭 변경 이벤트 상세 */
export interface TabsChangeDetail {
  tabId: string;
  previousTabId?: string;
}

/** 탭 클릭 이벤트 상세 */
export interface TabsClickDetail {
  tabId: string;
  event: MouseEvent;
}
