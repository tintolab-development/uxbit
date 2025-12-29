// navigation.types.ts

/** 내비게이션 아이템 */
export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
  badge?: string | number;
}

/** 내비게이션 아이템 클릭 이벤트 상세 */
export interface NavigationItemClickDetail {
  item: NavigationItem;
  index: number;
}
