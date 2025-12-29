/**
 * 컴포넌트 성능 모니터링 유틸리티
 * 개발 환경에서 성능 병목을 감지하고 경고합니다.
 */

/**
 * 성능 측정 결과
 */
export interface PerformanceMeasurement {
  component: string;
  operation: string;
  duration: number;
  timestamp: number;
}

/**
 * 성능 임계값 설정
 */
const PERFORMANCE_THRESHOLDS = {
  /** 60fps 기준 (16.67ms) */
  FRAME_BUDGET: 16,
  /** 경고 임계값 (50ms) */
  WARNING_THRESHOLD: 50,
  /** 에러 임계값 (100ms) */
  ERROR_THRESHOLD: 100,
} as const;

/**
 * 성능 측정 및 경고
 */
export function measureComponentPerformance(
  componentName: string,
  operation: string,
  fn: () => void,
): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;

  // 개발 환경에서만 경고
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    if (duration > PERFORMANCE_THRESHOLDS.ERROR_THRESHOLD) {
      console.error(
        `[Performance Error] [${componentName}] ${operation} took ${duration.toFixed(2)}ms (>${PERFORMANCE_THRESHOLDS.ERROR_THRESHOLD}ms)`,
      );
    } else if (duration > PERFORMANCE_THRESHOLDS.WARNING_THRESHOLD) {
      console.warn(
        `[Performance Warning] [${componentName}] ${operation} took ${duration.toFixed(2)}ms (>${PERFORMANCE_THRESHOLDS.WARNING_THRESHOLD}ms)`,
      );
    } else if (duration > PERFORMANCE_THRESHOLDS.FRAME_BUDGET) {
      console.info(
        `[Performance Info] [${componentName}] ${operation} took ${duration.toFixed(2)}ms (>${PERFORMANCE_THRESHOLDS.FRAME_BUDGET}ms frame budget)`,
      );
    }
  }

  return duration;
}

/**
 * 비동기 성능 측정
 */
export async function measureComponentPerformanceAsync(
  componentName: string,
  operation: string,
  fn: () => Promise<void>,
): Promise<number> {
  const start = performance.now();
  await fn();
  const end = performance.now();
  const duration = end - start;

  // 개발 환경에서만 경고
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    if (duration > PERFORMANCE_THRESHOLDS.ERROR_THRESHOLD) {
      console.error(
        `[Performance Error] [${componentName}] ${operation} took ${duration.toFixed(2)}ms (>${PERFORMANCE_THRESHOLDS.ERROR_THRESHOLD}ms)`,
      );
    } else if (duration > PERFORMANCE_THRESHOLDS.WARNING_THRESHOLD) {
      console.warn(
        `[Performance Warning] [${componentName}] ${operation} took ${duration.toFixed(2)}ms (>${PERFORMANCE_THRESHOLDS.WARNING_THRESHOLD}ms)`,
      );
    }
  }

  return duration;
}

/**
 * 성능 메트릭 수집 (선택적)
 */
const performanceMetrics: PerformanceMeasurement[] = [];

/**
 * 성능 메트릭 기록
 */
export function recordPerformanceMetric(
  component: string,
  operation: string,
  duration: number,
): void {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    performanceMetrics.push({
      component,
      operation,
      duration,
      timestamp: Date.now(),
    });

    // 메트릭이 너무 많아지지 않도록 제한 (최근 100개만 유지)
    if (performanceMetrics.length > 100) {
      performanceMetrics.shift();
    }
  }
}

/**
 * 성능 메트릭 조회
 */
export function getPerformanceMetrics(): readonly PerformanceMeasurement[] {
  return performanceMetrics;
}

/**
 * 성능 메트릭 초기화
 */
export function clearPerformanceMetrics(): void {
  performanceMetrics.length = 0;
}

/**
 * 평균 성능 계산
 */
export function getAveragePerformance(component?: string, operation?: string): number | null {
  const filtered = performanceMetrics.filter((m) => {
    if (component && m.component !== component) return false;
    if (operation && m.operation !== operation) return false;
    return true;
  });

  if (filtered.length === 0) return null;

  const sum = filtered.reduce((acc, m) => acc + m.duration, 0);
  return sum / filtered.length;
}
