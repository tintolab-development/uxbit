// modal.types.ts

/** 모달 크기 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

/** 모달 닫기 이벤트 상세 */
export interface ModalCloseDetail {
  reason: 'backdrop' | 'close-button' | 'escape';
}
