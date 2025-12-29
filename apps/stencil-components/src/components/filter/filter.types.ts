// filter.types.ts

/** 필터 옵션 */
export interface FilterOption {
  /** 옵션 값 (고유 식별자) */
  value: string;
  /** 옵션 라벨 (표시 텍스트) */
  label: string;
  /** 옵션 설명 (선택적) */
  description?: string;
  /** 옵션 아이콘 (선택적) */
  icon?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 선택된 옵션 개수 (배지용, 선택적) */
  count?: number;
}

/** 필터 타입 */
export type FilterType = 'single' | 'multiple' | 'range' | 'search';

/** 필터 variant */
export type FilterVariant = 'default' | 'button' | 'checkbox' | 'radio';

/** 필터 변경 이벤트 상세 */
export interface FilterChangeDetail {
  /** 필터 ID */
  filterId: string;
  /** 선택된 값들 (단일 선택 시 배열의 첫 번째 요소) */
  values: string[];
  /** 모든 옵션 정보 */
  options: FilterOption[];
}
