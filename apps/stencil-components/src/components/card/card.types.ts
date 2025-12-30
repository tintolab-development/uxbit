// card.types.ts

/** 카드 variant */
export type CardVariant = 'default' | 'compact' | 'detailed';

/** 카드 크기 */
export type CardSize = 'sm' | 'md' | 'lg';

/** 카드 클릭 이벤트 상세 */
export interface CardClickDetail {
  cardId?: string;
  href?: string;
}
