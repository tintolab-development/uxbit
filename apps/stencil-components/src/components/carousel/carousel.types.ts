/**
 * tinto-carousel 컴포넌트 타입 정의
 */

/** 네비게이션 버튼 위치 */
export type NavigationPosition = 'inside' | 'outside' | 'overlay';

/** 네비게이션 버튼 스타일 */
export type NavigationStyle = 'circle' | 'arrow' | 'text';

/** 인디케이터 타입 */
export type IndicatorType = 'dot' | 'bar' | 'number';

/** 인디케이터 위치 */
export type IndicatorPosition = 'bottom' | 'top' | 'left' | 'right';

/** 전환 효과 */
export type TransitionType = 'slide' | 'fade';

/** 네비게이션 버튼 표시 조건 */
export type NavigationDisplay = 'always' | 'hover' | 'auto';

/** 슬라이드 변경 이벤트 상세 정보 */
export interface TintoCarouselSlideChangeDetail {
  /** 현재 슬라이드 인덱스 (0부터 시작) */
  current: number;
  /** 이전 슬라이드 인덱스 */
  previous: number;
  /** 총 슬라이드 개수 */
  total: number;
}

/** 슬라이드 시작 이벤트 상세 정보 */
export interface TintoCarouselSlideStartDetail {
  /** 슬라이드 인덱스 */
  index: number;
}

/** 슬라이드 종료 이벤트 상세 정보 */
export interface TintoCarouselSlideEndDetail {
  /** 슬라이드 인덱스 */
  index: number;
}
