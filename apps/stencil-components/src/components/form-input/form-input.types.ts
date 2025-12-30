// form-input.types.ts

/** 입력 필드 타입 */
export type FormInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week';

/** 입력 필드 크기 */
export type FormInputSize = 'sm' | 'md' | 'lg';

/** 입력 필드 variant */
export type FormInputVariant = 'default' | 'outline' | 'filled' | 'underline';

/** 입력 필드 상태 */
export type FormInputState = 'default' | 'error' | 'success' | 'warning';

/** 입력 필드 변경 이벤트 상세 */
export interface FormInputChangeDetail {
  value: string;
  name?: string;
  type: FormInputType;
}

/** 입력 필드 포커스 이벤트 상세 */
export interface FormInputFocusDetail {
  value: string;
  name?: string;
}
