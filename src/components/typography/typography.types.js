// typography.types.ts
// ===== Font Family Tokens =====
// DsTypography에서 쓰던 FAMILY_MAP 기준으로 토큰 정규화
export const FONT_FAMILY = ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'];
export const FAMILY_MAP = {
  paperlogy:
    '"Paperlogy", Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  'clash-display':
    '"Clash Display", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  'climate-crisis':
    '"Climate Crisis", Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  pretendard:
    'Pretendard, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
  system:
    'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
};
// ===== Font Size Tokens =====
// Stencil 컴포넌트에서 사용하는 fontSize 토큰
export const FONT_SIZE_KEYS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const FONT_SIZE = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};
// ===== Typing Effect Tokens =====
export const TYPING_UNIT = ['char', 'word'];
