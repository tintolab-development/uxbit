// search-bar.types.ts

/** 검색바 크기 */
export type SearchBarSize = 'sm' | 'md' | 'lg';

/** 검색바 variant */
export type SearchBarVariant = 'default' | 'outline' | 'filled';

/** 자동 완성 결과 항목 */
export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  href?: string;
}

/** 검색 이벤트 상세 */
export interface SearchSubmitDetail {
  query: string;
  timestamp: number;
}

/** 검색 결과 클릭 이벤트 상세 */
export interface SearchResultClickDetail {
  result: SearchResult;
  query: string;
}
