// pagination.types.ts

/** 페이지네이션 스타일 variant */
export type PaginationVariant = 'default' | 'simple' | 'compact';

/** 페이지네이션 크기 */
export type PaginationSize = 'sm' | 'md' | 'lg';

/** 페이지네이션 정렬 */
export type PaginationAlign = 'start' | 'center' | 'end';

/** 페이지 변경 이벤트 상세 */
export interface PaginationChangeDetail {
  page: number;
  pageSize?: number;
}

/** 페이지 크기 변경 이벤트 상세 */
export interface PaginationPageSizeChangeDetail {
  pageSize: number;
}
