/**
 * 컴포넌트 에러 핸들링 유틸리티
 * 표준화된 에러 처리 및 로깅을 제공합니다.
 */

/**
 * 컴포넌트 전용 에러 클래스
 */
export class ComponentError extends Error {
  constructor(
    public component: string,
    public prop: string,
    public value: unknown,
    message: string,
  ) {
    super(`[${component}] ${prop}: ${message}`);
    this.name = 'ComponentError';
  }
}

/**
 * 에러 경고를 콘솔에 출력 (개발 환경에서만)
 */
export function warnComponentError(
  component: string,
  prop: string,
  value: unknown,
  message: string,
): void {
  if (typeof console !== 'undefined' && console.warn) {
    const error = new ComponentError(component, prop, value, message);
    console.warn(error.message, { component, prop, value });
  }
}

/**
 * Prop 값 검증 및 경고
 */
export function validateProp<T>(
  component: string,
  prop: string,
  value: T | undefined,
  validator: (val: T) => boolean,
  defaultValue: T,
  errorMessage?: string,
): T {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  if (!validator(value)) {
    warnComponentError(
      component,
      prop,
      value,
      errorMessage || `Invalid value, using default: ${String(defaultValue)}`,
    );
    return defaultValue;
  }

  return value;
}

/**
 * 숫자 범위 검증
 */
export function validateNumberRange(
  component: string,
  prop: string,
  value: number | undefined,
  min: number,
  max: number,
  defaultValue: number,
): number {
  return validateProp(
    component,
    prop,
    value,
    (val) => typeof val === 'number' && !isNaN(val) && val >= min && val <= max,
    defaultValue,
    `Value must be between ${min} and ${max}`,
  );
}

/**
 * 문자열 길이 검증
 */
export function validateStringLength(
  component: string,
  prop: string,
  value: string | undefined,
  minLength: number,
  maxLength: number,
  defaultValue: string,
): string {
  return validateProp(
    component,
    prop,
    value,
    (val) => typeof val === 'string' && val.length >= minLength && val.length <= maxLength,
    defaultValue,
    `String length must be between ${minLength} and ${maxLength}`,
  );
}

/**
 * URL 검증
 */
export function validateUrl(
  component: string,
  prop: string,
  value: string | undefined,
  defaultValue?: string,
): string | undefined {
  if (!value) {
    return defaultValue;
  }

  try {
    new URL(value, typeof window !== 'undefined' ? window.location.href : 'http://localhost');
    return value;
  } catch {
    warnComponentError(component, prop, value, 'Invalid URL format');
    return defaultValue;
  }
}
