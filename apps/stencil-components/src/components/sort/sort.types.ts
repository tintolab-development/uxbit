// sort.types.ts

/** 정렬 옵션 */
export interface SortOption {
  /** 정렬 값 (고유 식별자) */
  value: string;
  /** 정렬 라벨 (표시 텍스트) */
  label: string;
  /** 정렬 방향 (ascending, descending) */
  direction?: 'asc' | 'desc';
  /** 비활성화 여부 */
  disabled?: boolean;
}

/** 정렬 variant */
export type SortVariant = 'default' | 'button' | 'select';

/** 정렬 크기 */
export type SortSize = 'sm' | 'md' | 'lg';

/** 정렬 변경 이벤트 상세 */
export interface SortChangeDetail {
  /** 선택된 정렬 값 */
  value: string;
  /** 선택된 정렬 방향 */
  direction?: 'asc' | 'desc';
  /** 선택된 정렬 옵션 */
  option: SortOption;
}
