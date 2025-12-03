// .storybook/vitest-mocker-stub.ts

// Storybook이 내부적으로 @vitest/mocker 를 로드하려고 할 때
// 깨지지 않도록 최소한의 mockObject만 제공하는 스텁입니다.
// 실제 Vitest 모킹 기능은 여기서 제공하지 않아요.

export function mockObject<T extends object>(obj: T): T {
  return obj;
}

// 혹시 default import를 쓰는 경우도 대비 (안 쓰일 확률이 높긴 함)
export default {
  mockObject,
};
