import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const buttonCss =
  ":host{display:inline-block}:host([block]){display:block}:host([hidden]){display:none !important}.tinto-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:0.5em;cursor:pointer;-webkit-user-select:none;user-select:none;white-space:nowrap;border:var(--t-button-border, 1px solid #111827);background:var(--t-button-bg, #111827);color:var(--t-button-fg, #ffffff);border-radius:var(--t-button-radius, var(--t-button-variant-radius, 10px));padding:var(--t-button-py, 0.55rem) var(--t-button-px, 0.9rem);line-height:1;width:var(--t-button-w, auto);min-width:44px;min-height:44px;transition:transform 0.03s ease,\n    opacity 0.15s ease,\n    background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;position:relative}.tinto-button:focus-visible{outline:var(--t-button-ring, 2px solid #6366f1);outline-offset:2px}:host([pill]) .tinto-button{border-radius:9999px}:host([elevated]) .tinto-button{box-shadow:0 8px 20px rgba(0, 0, 0, 0.12)}:host([block]) .tinto-button{width:100%}.tinto-button[disabled]{cursor:not-allowed;opacity:0.55}.tinto-button:active:not([disabled]){transform:translateY(1px)}:host([variant='primary']) .tinto-button{--t-button-variant-radius:0px;--t-button-bg:#111827;--t-button-fg:#f9fafb;--t-button-border:1px solid transparent}:host([variant='secondary']) .tinto-button{--t-button-variant-radius:12px;--t-button-bg:#e5e7eb;--t-button-fg:#111827;--t-button-border:1px solid transparent}:host([variant='tertiary']) .tinto-button{--t-button-variant-radius:100px;--t-button-bg:#f3f4f6;--t-button-fg:var(--color-fg, #111827);--t-button-border:1px solid transparent}:host([outline]) .tinto-button{--t-button-bg:#ffffff;--t-button-border:1px solid currentColor}:host([variant='primary'][outline]) .tinto-button{--t-button-fg:var(--color-primary, #111827)}:host([variant='secondary'][outline]),:host([variant='tertiary'][outline]) .tinto-button{--t-button-fg:var(--color-fg, #111827)}:host([size='sm']) .tinto-button{font-size:clamp(0.875rem, 2vw, 0.9375rem);--t-button-py:0.4rem;--t-button-px:0.7rem;min-height:44px;min-width:44px}:host([size='md']) .tinto-button{font-size:clamp(1rem, 2.5vw, 1.125rem)}:host([size='lg']) .tinto-button{font-size:clamp(1.125rem, 3vw, 1.25rem);--t-button-py:0.7rem;--t-button-px:1.1rem;min-height:48px;min-width:48px}.prefix,.suffix{display:inline-flex;align-items:center;justify-content:center}::slotted([slot='prefix']),::slotted([slot='suffix']){display:inline-flex}.content{display:inline-flex;align-items:center;justify-content:center}.label{display:inline;font-family:var(--t-button-label-ff, inherit);font-size:var(--t-button-label-fs, inherit);font-weight:var(--t-button-label-fw, inherit);color:var(--t-button-label-color, currentColor);line-height:1.1}:host([loading]) .tinto-button{pointer-events:none}.spinner{display:none;width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:tinto-button-spin 0.8s linear infinite;position:absolute;inset:0;margin:auto;pointer-events:none}:host([loading]) .spinner{display:inline-block}:host([loading]) .content{opacity:0}:host([loading]) .prefix,:host([loading]) .suffix{opacity:0}:host([toggle][pressed]) .tinto-button{background:var(--color-primary, #111827);color:#ffffff;--t-button-border:1px solid transparent}@keyframes tinto-button-spin{to{transform:rotate(360deg)}}@media (hover: none) and (pointer: coarse){.tinto-button{-webkit-tap-highlight-color:rgba(0, 0, 0, 0.1)}.tinto-button:active{transform:scale(0.98)}}@media (hover: hover) and (pointer: fine){.tinto-button:hover:not([disabled]):not([loading]){opacity:0.9}}@media (forced-colors: active){.tinto-button{border:1px solid CanvasText}}";

const FAMILY_MAP$1 = {
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
const SIZE_MAP = {
  sm: '16px',
  md: '20px',
  lg: '40px',
  xl: '64px',
};
const WEIGHT_MAP = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
};
const TintoButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoClick = createEvent(this, 'tintoClick');
    this.tintoToggle = createEvent(this, 'tintoToggle');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Visual & Layout ============================ */
  /** 시각 스타일(틀) – primary / secondary / tertiary */
  variant = 'primary';
  /** 컨테이너 사이즈 토큰 – sm / md / lg */
  size = 'md';
  /** pill 형태 (완전 라운드) */
  pill = false;
  /** 가로 전체폭 사용 여부 */
  block = false;
  /** 살짝 떠 있는 느낌의 그림자 사용 여부 */
  elevated = false;
  /** outline 모드 (배경 투명 + border) */
  outline = false;
  /** border-radius 토큰(숫자만 넣으면 px 처리) */
  radius;
  /* ============================ State & Behavior ============================ */
  /** 비활성화 여부 */
  disabled = false;
  /** 로딩 상태 (스피너 표시 + 클릭 막기) */
  loading = false;
  /** 토글 버튼 모드 (pressed 토글) */
  toggle = false;
  /** 토글 상태 (toggle=true 일 때 사용, mutable) */
  pressed = false;
  /**
   * form 동작 타입
   * - "button": 기본 (아무 것도 안 함)
   * - "submit": 조상 form submit
   * - "reset": 조상 form reset
   */
  type = 'button';
  /** 링크 모드일 때 이동할 href */
  href;
  /** 링크 타겟 (href 지정 시) */
  target;
  /** 텍스트 라벨(슬롯 대신 사용 가능) */
  label;
  /* ============================== Typography =============================== */
  /** 라벨 폰트 패밀리 토큰 */
  textFamily;
  /** 라벨 폰트 크기 토큰 또는 raw 값 (예: "18px") */
  textSize;
  /** 라벨 폰트 두께 토큰 또는 raw 값 */
  textWeight;
  /** 라벨 폰트 컬러 */
  textColor;
  /* ================================ Events ================================= */
  /** 클릭 이벤트 (원본 MouseEvent 전달) */
  tintoClick;
  /** 토글 상태 변경 이벤트 (pressed 값 전달) */
  tintoToggle;
  /* =============================== Lifecycle =============================== */
  componentWillLoad() {
    this.applyStyleTokens();
    this.validateProps();
  }
  /* ============================ Props 검증 ========================= */
  validateProps() {
    // variant 검증
    const validVariants = ['primary', 'secondary', 'tertiary'];
    if (!validVariants.includes(this.variant)) {
      console.warn(`[tinto-button] Invalid variant "${this.variant}", using default "primary"`);
      this.variant = 'primary';
    }
    // size 검증
    const validSizes = ['sm', 'md', 'lg'];
    if (!validSizes.includes(this.size)) {
      console.warn(`[tinto-button] Invalid size "${this.size}", using default "md"`);
      this.size = 'md';
    }
    // type 검증
    const validTypes = ['button', 'submit', 'reset'];
    if (!validTypes.includes(this.type)) {
      console.warn(`[tinto-button] Invalid type "${this.type}", using default "button"`);
      this.type = 'button';
    }
  }
  handleStyleTokenChange() {
    this.applyStyleTokens();
  }
  /* ============================ Style Tokens → CSS ========================= */
  applyStyleTokens() {
    const style = this.el.style;
    // font-family
    if (this.textFamily) {
      style.setProperty('--t-button-label-ff', this.resolveFamily(this.textFamily));
    } else {
      style.removeProperty('--t-button-label-ff');
    }
    // font-size
    if (this.textSize) {
      const key = this.textSize.toString().trim().toLowerCase();
      const mapped = SIZE_MAP[key] ?? this.textSize.toString();
      style.setProperty('--t-button-label-fs', mapped);
    } else {
      style.removeProperty('--t-button-label-fs');
    }
    // font-weight
    if (this.textWeight) {
      const key = this.textWeight.toString().trim().toLowerCase();
      const mapped = WEIGHT_MAP[key] ?? this.textWeight.toString();
      style.setProperty('--t-button-label-fw', mapped);
    } else {
      style.removeProperty('--t-button-label-fw');
    }
    // font-color
    if (this.textColor) {
      style.setProperty('--t-button-label-color', this.textColor);
    } else {
      style.removeProperty('--t-button-label-color');
    }
    // radius → px 처리
    if (this.radius != null && this.radius.trim() !== '') {
      const trimmed = this.radius.trim();
      const value = /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
      style.setProperty('--t-button-radius', value);
    } else {
      style.removeProperty('--t-button-radius');
    }
  }
  resolveFamily(token) {
    const key = token.toString().toLowerCase().trim();
    if (FAMILY_MAP$1[key]) {
      return FAMILY_MAP$1[key];
    }
    if (key === 'clash' || key === 'clashdisplay') {
      return FAMILY_MAP$1['clash-display'];
    }
    if (key === 'climate' || key === 'climatecrisis') {
      return FAMILY_MAP$1['climate-crisis'];
    }
    if (key === 'paper') {
      return FAMILY_MAP$1.paperlogy;
    }
    if (key === 'pretendard') {
      return FAMILY_MAP$1.pretendard;
    }
    return FAMILY_MAP$1.system;
  }
  /* ================================ ARIA =================================== */
  get ariaBusy() {
    return this.loading ? 'true' : undefined;
  }
  get ariaDisabled() {
    return this.disabled ? 'true' : undefined;
  }
  get ariaPressed() {
    if (!this.toggle || this.disabled) return undefined;
    return this.pressed ? 'true' : 'false';
  }
  resolveLabel() {
    if (this.label && this.label.trim().length > 0) {
      return this.label.trim();
    }
    return '';
  }
  /* =============================== Handlers ================================ */
  handleClick = (event) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    // 토글 모드
    if (this.toggle) {
      this.pressed = !this.pressed;
      this.tintoToggle.emit({ pressed: this.pressed });
    }
    // 링크 모드
    if (this.href) {
      const target = this.target ?? '_self';
      window.open(this.href, target);
    }
    // form 모드 (href 없을 때만 동작)
    if (!this.href && this.type) {
      const lower = this.type.toLowerCase();
      const form = this.el.closest('form');
      if (form) {
        if (lower === 'submit') {
          if (typeof form.requestSubmit === 'function') {
            form.requestSubmit();
          } else {
            form.submit();
          }
        } else if (lower === 'reset') {
          form.reset();
        }
      }
    }
    // 커스텀 클릭 이벤트
    this.tintoClick.emit({ originalEvent: event });
  };
  /* ================================= Render ================================ */
  render() {
    const labelText = this.resolveLabel();
    // 호스트 aria-* 전달
    const hostAriaLabel = this.el.getAttribute('aria-label');
    const hostAriaDescribedby = this.el.getAttribute('aria-describedby');
    const a11yProps = {};
    if (hostAriaLabel) a11yProps['aria-label'] = hostAriaLabel;
    if (hostAriaDescribedby) a11yProps['aria-describedby'] = hostAriaDescribedby;
    return h(
      'button',
      {
        key: '8b7b917f6d5aa935baf6092fea82e4e622748cfd',
        class: 'tinto-button',
        part: 'button',
        type: 'button', // 실제 form 동작은 handleClick 내부에서 처리
        disabled: this.disabled,
        'aria-busy': this.ariaBusy,
        'aria-disabled': this.ariaDisabled,
        'aria-pressed': this.ariaPressed,
        onClick: this.handleClick,
        ...a11yProps,
      },
      h('span', {
        key: 'd939437f4cb8eea841080a467a7f9da41fabd608',
        class: 'spinner',
        part: 'spinner',
        'aria-hidden': this.loading ? 'false' : 'true',
      }),
      h(
        'span',
        { key: 'd2a9124ead7b3e662ff6e04ea663c405f98f7768', class: 'prefix', part: 'prefix' },
        h('slot', { key: 'a357d616823a9ec857421ec14b87c35e93a4ad90', name: 'prefix' }),
      ),
      h(
        'span',
        { key: 'cd8db204e75d73ff4f200c354c48fd1b02cabf1e', class: 'content', part: 'label' },
        h(
          'span',
          { key: '2459d46348b1b0e9a4885d66d446181d4070406c', class: 'label' },
          labelText || h('slot', { key: 'ebf6be8d9f5f2cdb643c3dc1f23ae5c3cc2fd934' }),
        ),
      ),
      h(
        'span',
        { key: 'c2c725cfc98f3841c5e72324e501bb393eddc647', class: 'suffix', part: 'suffix' },
        h('slot', { key: '76e13adf36549827d5003f3a7afd60483d133cea', name: 'suffix' }),
      ),
    );
  }
  static get watchers() {
    return {
      textFamily: ['handleStyleTokenChange'],
      textSize: ['handleStyleTokenChange'],
      textWeight: ['handleStyleTokenChange'],
      textColor: ['handleStyleTokenChange'],
      radius: ['handleStyleTokenChange'],
    };
  }
};
TintoButton.style = buttonCss;

/**
 * 컴포넌트 에러 핸들링 유틸리티
 * 표준화된 에러 처리 및 로깅을 제공합니다.
 */
/**
 * 컴포넌트 전용 에러 클래스
 */
class ComponentError extends Error {
  component;
  prop;
  value;
  constructor(component, prop, value, message) {
    super(`[${component}] ${prop}: ${message}`);
    this.component = component;
    this.prop = prop;
    this.value = value;
    this.name = 'ComponentError';
  }
}
/**
 * 에러 경고를 콘솔에 출력 (개발 환경에서만)
 */
function warnComponentError(component, prop, value, message) {
  if (typeof console !== 'undefined' && console.warn) {
    const error = new ComponentError(component, prop, value, message);
    console.warn(error.message, { component, prop, value });
  }
}
/**
 * URL 검증
 */
function validateUrl(component, prop, value, defaultValue) {
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

const imageCss =
  ":host{display:block;inline-size:var(--ti-width, 100%);max-inline-size:100%;max-width:100%;box-sizing:border-box;overflow:hidden;contain:layout paint;--ti-base-scale:1;width:var(--ti-width, 100%);height:var(--ti-height, auto)}:host([hidden]){display:none}:host{--ti-r-soft:8px;--ti-r-oval:max(800px, 213vw);--ti-r-top:max(400px, 106vw);--ti-r-diag:max(200px, 53vw);--ti-focus:#005fcc}[part='link'],[part='button'],[part='plain']{display:block;color:inherit;text-decoration:none;transform-origin:center}[part='button']{display:block;width:100%;border:none;background:none;padding:0;margin:0;font:inherit;text-align:inherit;line-height:0;}[data-clickable]{cursor:pointer}:host(:focus-within) [part='frame']{outline:2px solid var(--ti-focus, #005fcc);outline-offset:2px}@supports selector(:focus-visible){:host(:focus-within) [part='frame']{outline:none}:host(:focus-within) [part='frame']:focus-visible{outline:2px solid var(--ti-focus, #005fcc);outline-offset:2px}}:host([disabled]) [data-clickable]{cursor:not-allowed;filter:grayscale(30%) opacity(0.85)}:host([disabled]) [part='link']{pointer-events:none}.ti-frame[part='frame']{position:relative;width:100%;height:auto;aspect-ratio:var(--ratio-w, 16) / var(--ratio-h, 9);overflow:hidden;border-radius:var(--ti-radius, 0);background:var(--ti-bg, transparent);box-shadow:var(--ti-shadow, none);border:var(--ti-border, none);transform-origin:center;transform:scale(var(--ti-base-scale, 1))}:host([height]) .ti-frame[part='frame']{height:100%;aspect-ratio:auto}[part='spacer']{display:block;width:100%;padding-top:calc(var(--ratio-h, 9) / var(--ratio-w, 16) * 100%);pointer-events:none;user-select:none;-webkit-user-select:none;opacity:0}:host([height]) [part='spacer']{display:none}[part='layer']{position:absolute;inset:0}[part='img'],[part='placeholder']{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:var(--ti-fit, cover);object-position:var(--ti-pos, 50% 50%);-webkit-user-drag:none;user-select:none;-webkit-user-select:none;pointer-events:none}[part='img']{z-index:1;opacity:0;transition:opacity 0.32s ease}[part='placeholder']{z-index:0;filter:blur(12px);transform:scale(1.02);opacity:1;transition:opacity 0.32s ease}.ti-frame[data-state='loaded'] [part='img']{opacity:1}.ti-frame[data-state='loaded'] [part='placeholder']{opacity:0}.ti-frame[data-state='error'] [part='img']{opacity:0}.ti-frame[data-state='error'] [part='placeholder']{opacity:1}.ti-frame[data-skeleton]::before{content:'';position:absolute;inset:0;background:linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.04) 0%,\n    rgba(0, 0, 0, 0.08) 50%,\n    rgba(0, 0, 0, 0.04) 100%\n  );animation:ti-skel 1.3s infinite}@keyframes ti-skel{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@media (prefers-reduced-motion: reduce){.ti-frame[data-skeleton]::before{animation:none}}::slotted([slot='overlay']){position:absolute;inset:0}";

/** Quick viewport check to avoid IO delay for initially visible elements */
function isInViewport(el) {
  try {
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.bottom > 0 && r.right > 0 && r.top < vh && r.left < vw;
  } catch {
    return false;
  }
}
const TintoImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoLoaded = createEvent(this, 'tinto:loaded');
    this.tintoError = createEvent(this, 'tinto:error');
    this.tintoPress = createEvent(this, 'tinto:press');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Image / media ============================ */
  src;
  alt;
  /** "w:h", e.g. "16:9", "1:1" */
  ratio = '16:9';
  fit = 'cover';
  position = '50% 50%';
  /** If radius exists, it overrides rounded preset */
  radius;
  rounded;
  border;
  shadow;
  background;
  /** Host box size (CSS inline/block size) */
  width;
  height;
  /** Loading policy */
  loading;
  /** Priority: eager + inject <link rel="preload" as="image"> */
  priority = false;
  /** Blurred/low-res placeholder URL */
  placeholder;
  /** 에러 발생 시 대체 이미지 URL */
  errorFallback;
  /** Responsive images */
  srcset;
  sizes;
  decoding = 'async';
  crossorigin;
  referrerpolicy;
  /* ============================ Interactivity ============================ */
  /** Wrap with anchor when href provided */
  href;
  target;
  rel;
  download; // "" allowed
  /** as="button" support */
  as;
  disabled = false;
  /* ============================== Animation ============================== */
  /** Base transform scale (1 = original size) */
  scale;
  animation = '';
  play = true;
  rotate = 'right';
  /** seconds (e.g., 20) */
  duration = 20;
  /** optional scale multiplier applied during animation (esp. spin) */
  animationScale;
  /** auto scale threshold (host width / parent width) for spin */
  autoScaleThreshold;
  /** auto scale value applied when threshold exceeded */
  autoScaleValue;
  /** 'infinite' or finite count (string/number) */
  repeat = 'infinite';
  /** pause on hover */
  pauseOnHover = false;
  /** play/pause on viewport */
  startOnViewport = false;
  /* ============================== Events ============================== */
  tintoLoaded;
  tintoError;
  tintoPress;
  /* ============================== Internals ============================== */
  imgEl;
  phEl;
  frameEl;
  io; // for lazy fallback
  wasObserved = false;
  anim; // Web Animations
  animIO; // play/pause on viewport
  effectiveLoading = 'lazy';
  onHoverEnter = () => this.anim?.pause();
  onHoverLeave = () => {
    if (this.anim && this.play !== false) this.anim.play();
  };
  /* ============================== Lifecycle ============================== */
  componentWillLoad() {
    this.syncHostBoxSize();
  }
  handleResize = () => {
    this.syncVhVar();
    if (this.animation) {
      this.applyAnimation();
    }
  };
  componentDidLoad() {
    this.applyFrameStyles();
    this.updateBaseScaleVar();
    this.updateImageAttrs();
    this.setupIOIfNeeded();
    this.applyAnimation();
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.handleResize();
    // 로딩 시작 상태 표시
    this.el.setAttribute('aria-busy', 'true');
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
    this.teardownIO();
    this.teardownAnimation();
  }
  /* ============================== Watchers ============================== */
  applyFrameStyles() {
    const frame = this.frameEl;
    if (!frame) return;
    // ratio
    const [rw, rh] = this.parseRatio(this.ratio);
    frame.style.setProperty('--ratio-w', String(rw));
    frame.style.setProperty('--ratio-h', String(rh));
    // object-fit/position
    frame.style.setProperty('--ti-fit', this.fit || 'cover');
    frame.style.setProperty('--ti-pos', this.position || '50% 50%');
    // reset radius vars
    frame.style.removeProperty('--ti-radius');
    frame.style.removeProperty('border-radius');
    frame.style.removeProperty('border-top-left-radius');
    frame.style.removeProperty('border-top-right-radius');
    frame.style.removeProperty('border-bottom-left-radius');
    frame.style.removeProperty('border-bottom-right-radius');
    if (this.radius != null && String(this.radius).trim() !== '') {
      const raw = String(this.radius).trim();
      const v = /^\d+(\.\d+)?$/.test(raw) ? `${raw}px` : raw;
      frame.style.setProperty('--ti-radius', v);
      frame.style.borderRadius = v;
    } else {
      const map = {
        base: 'soft',
        full: 'oval',
        t: 'top',
        lr: 'diagonal',
      };
      const key =
        map[
          String(this.rounded || '')
            .toLowerCase()
            .trim()
        ] || this.rounded;
      if (key === 'soft') {
        frame.style.setProperty('--ti-radius', 'var(--ti-r-soft)');
        frame.style.borderRadius = 'var(--ti-r-soft)';
      } else if (key === 'oval') {
        frame.style.borderTopLeftRadius = 'var(--ti-r-oval)';
        frame.style.borderTopRightRadius = 'var(--ti-r-oval)';
        frame.style.borderBottomLeftRadius = '0';
        frame.style.borderBottomRightRadius = '0';
      } else if (key === 'top') {
        frame.style.borderTopLeftRadius = 'var(--ti-r-top)';
        frame.style.borderTopRightRadius = 'var(--ti-r-top)';
      } else if (key === 'diagonal') {
        frame.style.borderRadius = 'var(--ti-r-diag) 0 var(--ti-r-diag) 0';
      } else if (key === 'circle') {
        frame.style.setProperty('--ti-radius', '9999px');
        frame.style.borderRadius = '9999px';
      }
    }
    // visuals
    this.setCSSVar('--ti-border', this.border);
    this.setCSSVar('--ti-shadow', this.shadow);
    this.setCSSVar('--ti-bg', this.background);
    this.updateBaseScaleVar();
  }
  syncHostBoxSize() {
    if (this.width) {
      this.el.style.setProperty('inline-size', this.width);
      this.el.style.setProperty('width', this.width); // legacy fallback
    } else {
      this.el.style.removeProperty('inline-size');
      this.el.style.removeProperty('width');
    }
    if (this.height) {
      this.el.style.setProperty('block-size', this.height);
      this.el.style.setProperty('height', this.height);
      if (this.frameEl) {
        this.frameEl.style.aspectRatio = 'auto';
        this.frameEl.style.height = '100%';
      }
    } else {
      this.el.style.removeProperty('block-size');
      this.el.style.removeProperty('height');
      if (this.frameEl) {
        this.frameEl.style.removeProperty('height');
        this.frameEl.style.removeProperty('aspect-ratio');
      }
    }
  }
  handleScaleChange() {
    this.updateBaseScaleVar();
    if (this.animation) {
      this.applyAnimation();
    }
  }
  updateImageAttrs() {
    const img = this.imgEl;
    const ph = this.phEl;
    if (!img || !this.frameEl) return;
    // placeholder handling
    const hasPh = !!this.placeholder;
    if (hasPh) {
      if (ph.src !== this.placeholder) ph.src = this.placeholder;
      ph.style.display = 'block';
      this.frameEl.removeAttribute('data-skeleton');
    } else {
      if (ph.hasAttribute('src')) ph.removeAttribute('src');
      ph.style.display = 'none';
      this.frameEl.setAttribute('data-skeleton', '');
    }
    // core attrs (property + attribute for widest compat)
    const alt = this.alt || '';
    img.alt = alt;
    const decoding = this.decoding || 'async';
    img.decoding = decoding;
    img.setAttribute('decoding', decoding);
    if (this.referrerpolicy) {
      img.referrerPolicy = this.referrerpolicy;
      img.setAttribute('referrerpolicy', this.referrerpolicy);
    } else {
      img.removeAttribute('referrerpolicy');
    }
    if (this.crossorigin) {
      img.crossOrigin = this.crossorigin;
      img.setAttribute('crossorigin', this.crossorigin);
    } else {
      img.removeAttribute('crossorigin');
    }
    if (this.srcset) img.srcset = this.srcset;
    else img.removeAttribute('srcset');
    if (this.sizes) img.sizes = this.sizes;
    else img.removeAttribute('sizes');
    // loading policy: placeholder or priority -> eager by default
    const priority = !!this.priority;
    const loadingAttr = (this.loading || (priority || hasPh ? 'eager' : 'lazy')).toLowerCase();
    this.effectiveLoading = loadingAttr;
    img.loading = loadingAttr;
    img.setAttribute('loading', loadingAttr);
    // fetch priority hint (when eager/placeholder/priority)
    const wantsHigh = priority || hasPh || loadingAttr === 'eager';
    try {
      img.fetchPriority = wantsHigh ? 'high' : 'auto';
    } catch {}
    if (wantsHigh) img.setAttribute('fetchpriority', 'high');
    else img.removeAttribute('fetchpriority');
    // CLS 완화: ratio 기반 width/height 설정
    const [rw, rh] = this.parseRatio(this.ratio);
    if (rw && rh) {
      img.width = rw;
      img.height = rh;
    }
    const nativeLazy = 'loading' in HTMLImageElement.prototype;
    const shouldDelayWithIO = loadingAttr === 'lazy' && !priority && !nativeLazy;
    // 로딩 시작 표시
    this.el.setAttribute('aria-busy', 'true');
    if (!shouldDelayWithIO) {
      if (this.src) {
        const validatedUrl = validateUrl('tinto-image', 'src', this.src);
        if (validatedUrl) {
          img.src = validatedUrl;
        } else {
          // URL이 유효하지 않으면 에러 처리
          this.onImgError();
          return;
        }
      } else {
        img.removeAttribute('src');
      }
    } else {
      // IO fallback: if initially in viewport, load now; otherwise wait for IO
      if (this.src && isInViewport(this.el)) {
        const validatedUrl = validateUrl('tinto-image', 'src', this.src);
        if (validatedUrl) {
          img.src = validatedUrl;
          this.wasObserved = true;
        } else {
          this.onImgError();
        }
      } else if (this.wasObserved && this.src) {
        const validatedUrl = validateUrl('tinto-image', 'src', this.src);
        if (validatedUrl) {
          img.src = validatedUrl;
        } else {
          this.onImgError();
        }
      } else {
        img.removeAttribute('src');
      }
    }
    // priority => inject preload
    if (priority && this.src)
      this.injectPreload(this.src, this.srcset, this.sizes, this.crossorigin, this.referrerpolicy);
    // when loading/priority/src changed → (re)setup IO
    this.setupIOIfNeeded();
  }
  onStructureChanged() {
    // current render is enough; nothing special here
  }
  applyAnimation() {
    this.teardownAnimation();
    if (!this.animation) return;
    const prefersReduce =
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;
    const type = (this.animation || '').toLowerCase().trim();
    if (!type) return;
    const isPlay = this.play !== false;
    const rotateDir = (this.rotate || 'right').toLowerCase();
    let durationSec = Number(this.duration ?? 20);
    if (!isFinite(durationSec) || durationSec <= 0) durationSec = 20;
    const repRaw = String(this.repeat ?? 'infinite').toLowerCase();
    const iterations = repRaw === 'infinite' ? Infinity : Math.max(1, parseInt(repRaw, 10) || 1);
    const scaleValue = this.computeAnimationScale(type);
    const keyframes = this.buildKeyframes(type, rotateDir, scaleValue);
    const timing = {
      duration: durationSec * 1000,
      iterations,
      easing: type === 'float' ? 'ease-in-out' : 'linear',
    };
    const targetEl = this.frameEl ?? this.el;
    if (!targetEl) return;
    // Ensure we don't keep multiple animations around
    this.anim = targetEl.animate(keyframes, timing);
    if (!isPlay) this.anim.pause();
    if (this.startOnViewport) {
      this.anim.pause();
      if (typeof IntersectionObserver !== 'undefined') {
        this.animIO = new IntersectionObserver(
          (ents) => {
            const en = ents?.[0];
            if (!en || !this.anim) return;
            if (en.isIntersecting && isPlay) this.anim.play();
            else this.anim.pause();
          },
          { threshold: 0.25 },
        );
        this.animIO.observe(this.el);
      }
    }
    if (this.pauseOnHover) {
      this.el.addEventListener('mouseenter', this.onHoverEnter);
      this.el.addEventListener('mouseleave', this.onHoverLeave);
    }
  }
  /* ============================== Helpers ============================== */
  parseRatio(raw) {
    const s = String(raw || '16:9').replace(/\s+/g, '');
    if (/^\d+:\d+$/.test(s)) {
      const [a, b] = s.split(':');
      return [parseInt(a, 10) || 16, parseInt(b, 10) || 9];
    }
    const known = {
      '1:1': [1, 1],
      '2:3': [2, 3],
      '3:4': [3, 4],
      '16:9': [16, 9],
      '3:1': [3, 1],
      '1:3': [1, 3],
      '2:1': [2, 1],
      '3:2': [3, 2],
      '4:3': [4, 3],
      '9:16': [9, 16],
      '1:2': [1, 2],
    };
    return known[s] || [16, 9];
  }
  getBaseScale() {
    const raw = Number(this.scale);
    if (!isNaN(raw) && isFinite(raw) && raw > 0) {
      return raw;
    }
    return 1;
  }
  updateBaseScaleVar() {
    if (!this.frameEl) return;
    const base = this.getBaseScale();
    this.frameEl.style.setProperty('--ti-base-scale', String(base));
  }
  setCSSVar(name, value) {
    if (value) this.frameEl?.style.setProperty(name, value);
    else this.frameEl?.style.removeProperty(name);
  }
  injectPreload(src, srcset, sizes, co, rp) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const abs = new URL(src, document.baseURI).href;
    const exists = Array.from(head.querySelectorAll('link[rel="preload"][as="image"]')).some(
      (l) => l.href === abs,
    );
    if (exists) return;
    const l = document.createElement('link');
    l.rel = 'preload';
    l.as = 'image';
    l.href = src;
    if (srcset) l.setAttribute('imagesrcset', srcset);
    if (sizes) l.setAttribute('imagesizes', sizes);
    if (co) l.setAttribute('crossorigin', co);
    if (rp) l.setAttribute('referrerpolicy', rp);
    head.appendChild(l);
  }
  setupIOIfNeeded() {
    const priority = !!this.priority;
    const nativeLazy = 'loading' in HTMLImageElement.prototype;
    if (priority || this.effectiveLoading !== 'lazy' || nativeLazy) {
      this.teardownIO();
      return;
    }
    if (!this.io && typeof IntersectionObserver !== 'undefined') {
      this.io = new IntersectionObserver(
        (entries) => {
          const e = entries?.[0];
          if (e && (e.isIntersecting || e.intersectionRatio > 0)) {
            this.wasObserved = true;
            this.teardownIO();
            this.updateImageAttrs(); // set src now
          }
        },
        { rootMargin: '200px 0px', threshold: 0.01 },
      );
      this.io.observe(this.el);
    }
  }
  teardownIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  measureContainerRatio() {
    try {
      const parent = this.el.parentElement;
      if (!parent) return undefined;
      const parentWidth = parent.clientWidth;
      if (!parentWidth) return undefined;
      const hostWidth = this.el.offsetWidth;
      if (!hostWidth) return undefined;
      return hostWidth / parentWidth;
    } catch {
      return undefined;
    }
  }
  computeAnimationScale(type) {
    const base = this.getBaseScale();
    const custom = Number(this.animationScale);
    if (!isNaN(custom) && isFinite(custom) && custom > 0) return base * custom;
    if (type === 'spin') {
      const threshold = Number(this.autoScaleThreshold);
      const value = Number(this.autoScaleValue);
      const effectiveThreshold = !isNaN(threshold) && isFinite(threshold) ? threshold : 0.8;
      const effectiveValue = !isNaN(value) && isFinite(value) && value > 0 ? value : 0.6;
      const ratio = this.measureContainerRatio();
      if (ratio !== undefined && ratio >= effectiveThreshold) {
        return base * effectiveValue;
      }
      return base;
    }
    return base;
  }
  buildKeyframes(type, rotate, scale = 1) {
    const dir = rotate === 'left' ? -1 : 1;
    switch (type) {
      case 'float':
        return [
          { transform: `translateY(0) scale(${scale})` },
          { transform: `translateY(-10px) scale(${scale})` },
          { transform: `translateY(0) scale(${scale})` },
        ];
      case 'wobble':
        return [
          { transform: `rotate(0deg) scale(${scale})` },
          { transform: `rotate(3deg) scale(${scale})` },
          { transform: `rotate(-3deg) scale(${scale})` },
          { transform: `rotate(0deg) scale(${scale})` },
        ];
      case 'pulse':
        return [
          { transform: `scale(${scale})` },
          { transform: `scale(${(scale * 1.06).toFixed(3)})` },
          { transform: `scale(${scale})` },
        ];
      case 'spin':
      default:
        return [
          { transform: `scale(${scale}) rotate(0deg)` },
          { transform: `scale(${scale}) rotate(${dir * 360}deg)` },
        ];
    }
  }
  teardownAnimation() {
    try {
      this.anim?.cancel();
    } catch {}
    this.anim = undefined;
    if (this.animIO) {
      this.animIO.disconnect();
      this.animIO = undefined;
    }
    this.el.removeEventListener('mouseenter', this.onHoverEnter);
    this.el.removeEventListener('mouseleave', this.onHoverLeave);
  }
  /** Fallback var for old iOS: --ti-vh = innerHeight * 0.01px */
  syncVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--ti-vh', `${vh}px`);
    } catch {}
  };
  /* ============================== Render ============================== */
  onImgLoad = () => {
    this.frameEl?.setAttribute('data-state', 'loaded');
    this.frameEl?.removeAttribute('data-skeleton');
    this.el.removeAttribute('aria-busy');
    this.tintoLoaded.emit({
      width: this.imgEl?.naturalWidth ?? 0,
      height: this.imgEl?.naturalHeight ?? 0,
      src: this.src,
    });
  };
  onImgError = () => {
    // 에러 fallback이 있으면 시도
    if (this.errorFallback && this.imgEl && this.imgEl.src !== this.errorFallback) {
      const validatedUrl = validateUrl('tinto-image', 'errorFallback', this.errorFallback);
      if (validatedUrl) {
        this.imgEl.src = validatedUrl;
        this.frameEl?.setAttribute('data-state', 'loading');
        this.el.setAttribute('aria-busy', 'true');
        return; // fallback 이미지 로드 시도
      }
    }
    // fallback 실패 또는 없으면 에러 상태
    const next = this.placeholder ? 'error' : 'loaded';
    this.frameEl?.setAttribute('data-state', next);
    this.el.removeAttribute('aria-busy');
    warnComponentError('tinto-image', 'src', this.src, 'Image failed to load');
    this.tintoError.emit({ src: this.src });
  };
  onButtonPress = (ev) => {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    const kind = this.href ? 'link' : this.as === 'button' ? 'button' : 'plain';
    this.tintoPress.emit({ kind });
  };
  render() {
    const computedRel = this.rel || (this.target === '_blank' ? 'noopener noreferrer' : undefined);
    const frame = h(
      'div',
      {
        part: 'frame',
        class: 'ti-frame',
        ref: (el) => (this.frameEl = el),
        'data-state': 'loading',
      },
      h('span', { part: 'spacer' }),
      h(
        'div',
        { part: 'layer' },
        h('img', {
          part: 'placeholder',
          alt: '',
          'aria-hidden': 'true',
          ref: (el) => (this.phEl = el),
          draggable: false,
          onDragStart: (e) => e.preventDefault(),
        }),
        h('img', {
          part: 'img',
          ref: (el) => (this.imgEl = el),
          draggable: false,
          alt: this.alt || '',
          role: !this.alt ? 'presentation' : undefined,
          onDragStart: (e) => e.preventDefault(),
          onLoad: this.onImgLoad,
          onError: this.onImgError,
        }),
      ),
      h('slot', { name: 'overlay' }),
    );
    // apply width/height at render too
    this.syncHostBoxSize();
    // pass through host aria-* to wrapper
    const ariaLabel = this.el.getAttribute('aria-label');
    const ariaDescribedby = this.el.getAttribute('aria-describedby');
    const ariaLabelledby = this.el.getAttribute('aria-labelledby');
    const commonA11y = {};
    if (ariaLabel) commonA11y['aria-label'] = ariaLabel;
    if (ariaDescribedby) commonA11y['aria-describedby'] = ariaDescribedby;
    if (ariaLabelledby) commonA11y['aria-labelledby'] = ariaLabelledby;
    // href 변형
    const isDisabled = !!this.disabled;
    if (this.href) {
      if (isDisabled) {
        return h(
          'span',
          {
            part: 'link',
            role: 'link',
            'aria-disabled': 'true',
            tabIndex: -1,
            ...commonA11y,
            style: { pointerEvents: 'none' },
          },
          frame,
        );
      }
      const aProps = {
        part: 'link',
        href: this.href,
        target: this.target,
        rel: computedRel,
        ...commonA11y,
        'data-clickable': true,
        onClick: () => this.tintoPress.emit({ kind: 'link' }),
      };
      if (this.download != null) aProps.download = this.download === '' ? '' : this.download;
      return h('a', { ...aProps }, frame);
    }
    // button 변형
    if (this.as === 'button') {
      return h(
        'button',
        {
          part: 'button',
          type: 'button',
          disabled: !!this.disabled,
          ...commonA11y,
          'data-clickable': true,
          onClick: this.onButtonPress,
        },
        frame,
      );
    }
    // plain
    return h('div', { part: 'plain', ...commonA11y }, frame);
  }
  static get watchers() {
    return {
      ratio: ['applyFrameStyles'],
      fit: ['applyFrameStyles'],
      position: ['applyFrameStyles'],
      radius: ['applyFrameStyles'],
      rounded: ['applyFrameStyles'],
      border: ['applyFrameStyles'],
      shadow: ['applyFrameStyles'],
      background: ['applyFrameStyles'],
      width: ['syncHostBoxSize'],
      height: ['syncHostBoxSize'],
      scale: ['handleScaleChange'],
      src: ['updateImageAttrs'],
      alt: ['updateImageAttrs'],
      srcset: ['updateImageAttrs'],
      sizes: ['updateImageAttrs'],
      loading: ['updateImageAttrs'],
      priority: ['updateImageAttrs'],
      placeholder: ['updateImageAttrs'],
      decoding: ['updateImageAttrs'],
      crossorigin: ['updateImageAttrs'],
      referrerpolicy: ['updateImageAttrs'],
      href: ['onStructureChanged'],
      as: ['onStructureChanged'],
      target: ['onStructureChanged'],
      rel: ['onStructureChanged'],
      download: ['onStructureChanged'],
      disabled: ['onStructureChanged'],
      animation: ['applyAnimation'],
      play: ['applyAnimation'],
      rotate: ['applyAnimation'],
      duration: ['applyAnimation'],
      animationScale: ['applyAnimation'],
      autoScaleThreshold: ['applyAnimation'],
      autoScaleValue: ['applyAnimation'],
      repeat: ['applyAnimation'],
      pauseOnHover: ['applyAnimation'],
      startOnViewport: ['applyAnimation'],
    };
  }
};
TintoImage.style = imageCss;

const sectionCss =
  ":host{display:block;box-sizing:border-box;max-width:100%;width:100%;min-width:0;overflow-x:hidden;min-height:100vh;min-height:100dvh}[part='root']{width:100%;max-width:100%;padding:var(--t-section-padding, 0);margin:var(--t-section-margin, 0);background:var(--t-section-bg, transparent);color:var(--t-section-color, inherit);border-radius:var(--t-section-radius, 0);box-shadow:var(--t-section-shadow, none);display:flex;flex-direction:var(--t-section-direction, column);flex-wrap:var(--t-section-wrap, nowrap);justify-content:var(--t-section-justify, flex-start);align-items:var(--t-section-align, stretch);gap:var(--t-section-gap, 0);box-sizing:border-box;overflow-x:hidden;min-width:0}:host([center]) [part='root'],:host([center='true']) [part='root'],:host([data-center='true']) [part='root']{margin-inline:auto}:host{--t-section-padding:var(--t-section-padding-xs, 0)}@media (min-width: 640px){:host{--t-section-padding:var(--t-section-padding-sm, var(--t-section-padding-xs, 0))}}@media (min-width: 768px){:host{--t-section-padding:var(\n      --t-section-padding-md,\n      var(--t-section-padding-sm, var(--t-section-padding-xs, 0))\n    )}}@media (min-width: 1024px){:host{--t-section-padding:var(\n      --t-section-padding-lg,\n      var(--t-section-padding-md, var(--t-section-padding-sm, var(--t-section-padding-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-section-padding:var(\n      --t-section-padding-xl,\n      var(\n        --t-section-padding-lg,\n        var(--t-section-padding-md, var(--t-section-padding-sm, var(--t-section-padding-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-padding:var(\n      --t-section-padding-2xl,\n      var(\n        --t-section-padding-xl,\n        var(\n          --t-section-padding-lg,\n          var(--t-section-padding-md, var(--t-section-padding-sm, var(--t-section-padding-xs, 0)))\n        )\n      )\n    )}}:host{--t-section-max-width:var(--t-section-max-width-xs, none)}@media (min-width: 640px){:host{--t-section-max-width:var(--t-section-max-width-sm, var(--t-section-max-width-xs, none))}}@media (min-width: 768px){:host{--t-section-max-width:var(\n      --t-section-max-width-md,\n      var(--t-section-max-width-sm, var(--t-section-max-width-xs, none))\n    )}}@media (min-width: 1024px){:host{--t-section-max-width:var(\n      --t-section-max-width-lg,\n      var(\n        --t-section-max-width-md,\n        var(--t-section-max-width-sm, var(--t-section-max-width-xs, none))\n      )\n    )}}@media (min-width: 1280px){:host{--t-section-max-width:var(\n      --t-section-max-width-xl,\n      var(\n        --t-section-max-width-lg,\n        var(\n          --t-section-max-width-md,\n          var(--t-section-max-width-sm, var(--t-section-max-width-xs, none))\n        )\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-max-width:var(\n      --t-section-max-width-2xl,\n      var(\n        --t-section-max-width-xl,\n        var(\n          --t-section-max-width-lg,\n          var(\n            --t-section-max-width-md,\n            var(--t-section-max-width-sm, var(--t-section-max-width-xs, none))\n          )\n        )\n      )\n    )}}:host{--t-section-margin:var(--t-section-margin-xs, 0)}@media (min-width: 640px){:host{--t-section-margin:var(--t-section-margin-sm, var(--t-section-margin-xs, 0))}}@media (min-width: 768px){:host{--t-section-margin:var(\n      --t-section-margin-md,\n      var(--t-section-margin-sm, var(--t-section-margin-xs, 0))\n    )}}@media (min-width: 1024px){:host{--t-section-margin:var(\n      --t-section-margin-lg,\n      var(--t-section-margin-md, var(--t-section-margin-sm, var(--t-section-margin-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-section-margin:var(\n      --t-section-margin-xl,\n      var(\n        --t-section-margin-lg,\n        var(--t-section-margin-md, var(--t-section-margin-sm, var(--t-section-margin-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-margin:var(\n      --t-section-margin-2xl,\n      var(\n        --t-section-margin-xl,\n        var(\n          --t-section-margin-lg,\n          var(--t-section-margin-md, var(--t-section-margin-sm, var(--t-section-margin-xs, 0)))\n        )\n      )\n    )}}:host{--t-section-gap:var(--t-section-gap-xs, 0)}@media (min-width: 640px){:host{--t-section-gap:var(--t-section-gap-sm, var(--t-section-gap-xs, 0))}}@media (min-width: 768px){:host{--t-section-gap:var(--t-section-gap-md, var(--t-section-gap-sm, var(--t-section-gap-xs, 0)))}}@media (min-width: 1024px){:host{--t-section-gap:var(\n      --t-section-gap-lg,\n      var(--t-section-gap-md, var(--t-section-gap-sm, var(--t-section-gap-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-section-gap:var(\n      --t-section-gap-xl,\n      var(\n        --t-section-gap-lg,\n        var(--t-section-gap-md, var(--t-section-gap-sm, var(--t-section-gap-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-gap:var(\n      --t-section-gap-2xl,\n      var(\n        --t-section-gap-xl,\n        var(\n          --t-section-gap-lg,\n          var(--t-section-gap-md, var(--t-section-gap-sm, var(--t-section-gap-xs, 0)))\n        )\n      )\n    )}}:host{--t-section-direction:var(--t-section-direction-xs, column)}@media (min-width: 640px){:host{--t-section-direction:var(--t-section-direction-sm, var(--t-section-direction-xs, column))}}@media (min-width: 768px){:host{--t-section-direction:var(\n      --t-section-direction-md,\n      var(--t-section-direction-sm, var(--t-section-direction-xs, column))\n    )}}@media (min-width: 1024px){:host{--t-section-direction:var(\n      --t-section-direction-lg,\n      var(\n        --t-section-direction-md,\n        var(--t-section-direction-sm, var(--t-section-direction-xs, column))\n      )\n    )}}@media (min-width: 1280px){:host{--t-section-direction:var(\n      --t-section-direction-xl,\n      var(\n        --t-section-direction-lg,\n        var(\n          --t-section-direction-md,\n          var(--t-section-direction-sm, var(--t-section-direction-xs, column))\n        )\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-direction:var(\n      --t-section-direction-2xl,\n      var(\n        --t-section-direction-xl,\n        var(\n          --t-section-direction-lg,\n          var(\n            --t-section-direction-md,\n            var(--t-section-direction-sm, var(--t-section-direction-xs, column))\n          )\n        )\n      )\n    )}}[part='root']{flex-direction:var(--t-section-direction)}:host{--t-section-justify:var(--t-section-justify-xs, flex-start)}@media (min-width: 640px){:host{--t-section-justify:var(--t-section-justify-sm, var(--t-section-justify-xs, flex-start))}}@media (min-width: 768px){:host{--t-section-justify:var(\n      --t-section-justify-md,\n      var(--t-section-justify-sm, var(--t-section-justify-xs, flex-start))\n    )}}@media (min-width: 1024px){:host{--t-section-justify:var(\n      --t-section-justify-lg,\n      var(\n        --t-section-justify-md,\n        var(--t-section-justify-sm, var(--t-section-justify-xs, flex-start))\n      )\n    )}}@media (min-width: 1280px){:host{--t-section-justify:var(\n      --t-section-justify-xl,\n      var(\n        --t-section-justify-lg,\n        var(\n          --t-section-justify-md,\n          var(--t-section-justify-sm, var(--t-section-justify-xs, flex-start))\n        )\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-justify:var(\n      --t-section-justify-2xl,\n      var(\n        --t-section-justify-xl,\n        var(\n          --t-section-justify-lg,\n          var(\n            --t-section-justify-md,\n            var(--t-section-justify-sm, var(--t-section-justify-xs, flex-start))\n          )\n        )\n      )\n    )}}[part='root']{justify-content:var(--t-section-justify)}:host{--t-section-align:var(--t-section-align-xs, stretch)}@media (min-width: 640px){:host{--t-section-align:var(--t-section-align-sm, var(--t-section-align-xs, stretch))}}@media (min-width: 768px){:host{--t-section-align:var(\n      --t-section-align-md,\n      var(--t-section-align-sm, var(--t-section-align-xs, stretch))\n    )}}@media (min-width: 1024px){:host{--t-section-align:var(\n      --t-section-align-lg,\n      var(--t-section-align-md, var(--t-section-align-sm, var(--t-section-align-xs, stretch)))\n    )}}@media (min-width: 1280px){:host{--t-section-align:var(\n      --t-section-align-xl,\n      var(\n        --t-section-align-lg,\n        var(--t-section-align-md, var(--t-section-align-sm, var(--t-section-align-xs, stretch)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-align:var(\n      --t-section-align-2xl,\n      var(\n        --t-section-align-xl,\n        var(\n          --t-section-align-lg,\n          var(--t-section-align-md, var(--t-section-align-sm, var(--t-section-align-xs, stretch)))\n        )\n      )\n    )}}[part='root']{align-items:var(--t-section-align)}:host{--t-section-wrap:var(--t-section-wrap-xs, nowrap)}@media (min-width: 640px){:host{--t-section-wrap:var(--t-section-wrap-sm, var(--t-section-wrap-xs, nowrap))}}@media (min-width: 768px){:host{--t-section-wrap:var(\n      --t-section-wrap-md,\n      var(--t-section-wrap-sm, var(--t-section-wrap-xs, nowrap))\n    )}}@media (min-width: 1024px){:host{--t-section-wrap:var(\n      --t-section-wrap-lg,\n      var(--t-section-wrap-md, var(--t-section-wrap-sm, var(--t-section-wrap-xs, nowrap)))\n    )}}@media (min-width: 1280px){:host{--t-section-wrap:var(\n      --t-section-wrap-xl,\n      var(\n        --t-section-wrap-lg,\n        var(--t-section-wrap-md, var(--t-section-wrap-sm, var(--t-section-wrap-xs, nowrap)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-wrap:var(\n      --t-section-wrap-2xl,\n      var(\n        --t-section-wrap-xl,\n        var(\n          --t-section-wrap-lg,\n          var(--t-section-wrap-md, var(--t-section-wrap-sm, var(--t-section-wrap-xs, nowrap)))\n        )\n      )\n    )}}[part='root']{flex-wrap:var(--t-section-wrap)}:host{--t-section-radius:var(--t-section-radius-xs, 0)}@media (min-width: 640px){:host{--t-section-radius:var(--t-section-radius-sm, var(--t-section-radius-xs, 0))}}@media (min-width: 768px){:host{--t-section-radius:var(\n      --t-section-radius-md,\n      var(--t-section-radius-sm, var(--t-section-radius-xs, 0))\n    )}}@media (min-width: 1024px){:host{--t-section-radius:var(\n      --t-section-radius-lg,\n      var(--t-section-radius-md, var(--t-section-radius-sm, var(--t-section-radius-xs, 0)))\n    )}}@media (min-width: 1280px){:host{--t-section-radius:var(\n      --t-section-radius-xl,\n      var(\n        --t-section-radius-lg,\n        var(--t-section-radius-md, var(--t-section-radius-sm, var(--t-section-radius-xs, 0)))\n      )\n    )}}@media (min-width: 1536px){:host{--t-section-radius:var(\n      --t-section-radius-2xl,\n      var(\n        --t-section-radius-xl,\n        var(\n          --t-section-radius-lg,\n          var(--t-section-radius-md, var(--t-section-radius-sm, var(--t-section-radius-xs, 0)))\n        )\n      )\n    )}}[part='root']{border-radius:var(--t-section-radius)}:host([height-mode='dvh']) [part='root']{min-height:calc(var(--t-vh, 1vh) * 100);min-height:100dvh}:host([height-mode='screen']) [part='root']{height:calc(var(--t-vh, 1vh) * 100);height:100dvh}:host([scrollable]) [part='root']{overflow:auto;-webkit-overflow-scrolling:touch}::slotted(*){margin:0}[part='root']:focus-visible{outline:2px solid var(--t-section-focus, #6366f1);outline-offset:2px}@media (forced-colors: active){[part='root']{border:1px solid CanvasText}}";

const TintoSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /** Flex 레이아웃 (responsive 지원) */
  direction = 'column';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  gap; // e.g. "12px", "1rem" or { xs: "8px", md: "16px" }
  /** 크기/여백/배경 등 토큰 (responsive 지원) */
  maxWidth; // "1200px", "100%", "80ch"...
  padding; // "16px", "24px 12px"...
  margin; // "0 auto"...
  background; // color/gradient
  color;
  radius; // border-radius
  shadow; // box-shadow
  /** 가운데 정렬 (maxWidth 사용 시 margin-inline:auto) */
  center;
  /**
   * 높이 제어
   * - auto: 내용 높이
   * - dvh: 동적 뷰포트 기준 최소/정확 높이
   * - screen: 정확히 100dvh (기본값 - 한 섹션이 전체 뷰포트를 차지)
   */
  heightMode = 'screen';
  /** heightMode가 dvh/screen일 때 내부 스크롤 허용 */
  scrollable = false;
  /** (구형 iOS 대비) window.innerHeight 기반 fallback용 --t-vh 변수 업데이트 */
  updateVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--t-vh', `${vh}px`);
    } catch {
      /* noop */
    }
  };
  componentDidLoad() {
    this.updateVhVar();
    window.addEventListener('resize', this.updateVhVar, { passive: true });
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.updateVhVar);
  }
  /**
   * Breakpoint별 값을 CSS 변수로 변환
   */
  buildResponsiveVars(prop, prefix) {
    if (!prop) return {};
    if (typeof prop === 'string') {
      return { [`--t-section-${prefix}`]: prop };
    }
    const vars = {};
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    breakpoints.forEach((bp) => {
      if (prop && typeof prop === 'object' && prop[bp]) {
        vars[`--t-section-${prefix}-${bp}`] = prop[bp];
      }
    });
    return vars;
  }
  /** undefined/null/빈 문자열은 style에 넣지 않도록 클린업 */
  buildStyleVars() {
    const maxWidthVars = this.buildResponsiveVars(this.maxWidth, 'max-width');
    const paddingVars = this.buildResponsiveVars(this.padding, 'padding');
    const marginVars = this.buildResponsiveVars(this.margin, 'margin');
    const radiusVars = this.buildResponsiveVars(this.radius, 'radius');
    const directionVars = this.buildResponsiveVars(this.direction, 'direction');
    const wrapVars = this.buildResponsiveVars(this.wrap, 'wrap');
    const justifyVars = this.buildResponsiveVars(this.justify, 'justify');
    const alignVars = this.buildResponsiveVars(this.align, 'align');
    const gapVars = this.buildResponsiveVars(this.gap, 'gap');
    const staticVars = {
      '--t-section-bg': this.background,
      '--t-section-color': this.color,
      '--t-section-shadow': this.shadow,
    };
    const vars = {};
    // Static vars
    for (const [k, v] of Object.entries(staticVars)) {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        vars[k] = String(v);
      }
    }
    // Responsive vars
    Object.assign(vars, maxWidthVars, paddingVars, marginVars, radiusVars);
    Object.assign(vars, directionVars, wrapVars, justifyVars, alignVars, gapVars);
    return vars;
  }
  render() {
    const styleVars = this.buildStyleVars();
    // host의 role/aria-* 패스스루
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = this.el.getAttribute('role') ?? 'region';
    // 내부 스크롤 허용 시 키보드 스크롤 가능하게 tabIndex 부여
    const tabIndex = this.scrollable ? 0 : undefined;
    return h(
      'section',
      {
        key: 'f7a4fd07a2d0a3809dbca2eaba08f55fa860440a',
        part: 'root',
        class: 'tinto-section',
        style: styleVars,
        role: role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        tabIndex: tabIndex,
      },
      h('slot', { key: 'dc483b9a6e850873f9aefbd5da4ec70e683b3caa' }),
    );
  }
};
TintoSection.style = sectionCss;

// typography.types.ts
// ===== Font Family Tokens =====
// DsTypography에서 쓰던 FAMILY_MAP 기준으로 토큰 정규화
const FAMILY_MAP = {
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
const FONT_SIZE = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
};

const typographyCss =
  ":host{display:block;box-sizing:border-box;max-width:100%}:host([inline]){display:inline}.tinto-typography{white-space:normal;word-break:keep-all;overflow-wrap:break-word}.tinto-typography.has-typing{display:block;min-height:calc(var(--typing-line-height, 1.4em) * 2)}.tinto-typography.h1{font-size:var(--t-font-size, clamp(1.75rem, 4.5vw, 2.75rem));line-height:1.2;font-weight:700}.tinto-typography.h2{font-size:var(--t-font-size, clamp(1.5rem, 3.5vw, 2.25rem));line-height:1.25;font-weight:600}.tinto-typography.h3{font-size:var(--t-font-size, clamp(1.25rem, 2.8vw, 1.75rem));line-height:1.3;font-weight:500}.tinto-typography.p{line-height:1.6;font-size:var(--t-font-size, clamp(0.95rem, 2.5vw, 1.05rem))}.tinto-typography.span{font-size:var(--t-font-size, clamp(0.85rem, 2.2vw, 0.95rem))}::slotted(a),[part='link']{color:inherit;text-decoration:inherit}[part='link']:focus-visible{outline:var(--t-focus, 2px solid #005fcc);outline-offset:2px}[part='link']:hover{opacity:0.9;text-decoration:underline}@media (min-width: 1920px){.tinto-typography.p{line-height:1.7}}.typing-effect.cursor::after{content:'|';display:inline-block;margin-left:0.1em;animation:typing-cursor 0.7s steps(1) infinite}@keyframes typing-cursor{0%,50%{opacity:1}51%,100%{opacity:0}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@media (prefers-reduced-motion: reduce){.typing-effect.cursor::after{animation:none}}";

/**
 * 슬롯 텍스트에 타이핑 애니메이션을 적용하는 내부 유틸 클래스
 * (외부에서 직접 사용하지 않음)
 */
class InternalTypingEffect {
  el;
  texts;
  speed; // 실제 ms
  eraseSpeed; // 실제 ms
  loop;
  cursor;
  unit;
  textIndex = 0;
  displayText = '';
  isDeleting = false;
  animationFrameId;
  lastUpdateTime = 0;
  constructor(element, options) {
    this.el = element;
    const copies = options.copies && options.copies > 0 ? options.copies : 1;
    const fallback = (options.fallbackText || '').trim() || '';
    if (options.texts && options.texts.length > 0) {
      this.texts = options.texts;
    } else if (fallback) {
      this.texts = Array.from({ length: copies }, () => fallback);
    } else {
      this.texts = [''];
    }
    // ===== duration 토큰(1~10)을 실제 ms로 매핑 =====
    const durationToken = options.duration ?? 5; // 1~10
    const eraseToken = options.eraseDuration ?? durationToken;
    const clamp = (v) => Math.min(10, Math.max(1, v));
    const d = clamp(durationToken);
    const e = clamp(eraseToken);
    const BASE = 40; // 1 → 40ms, 10 → 400ms 정도 느낌
    this.speed = BASE * d;
    this.eraseSpeed = BASE * e;
    this.loop = options.loop ?? false;
    this.cursor = options.cursor ?? false;
    this.unit = options.unit ?? 'char';
    this.textIndex = 0;
    this.displayText = '';
    this.isDeleting = false;
    this.lastUpdateTime = 0;
    this.startTyping();
  }
  startTyping() {
    const now = performance.now();
    const elapsed = now - this.lastUpdateTime;
    const delay = this.isDeleting ? this.eraseSpeed : this.speed;
    // 프레임 타이밍 체크 (너무 빠르게 업데이트 방지)
    if (elapsed < delay) {
      this.animationFrameId = requestAnimationFrame(() => this.startTyping());
      return;
    }
    this.lastUpdateTime = now;
    const currentText = this.texts[this.textIndex] ?? '';
    if (!this.isDeleting) {
      // 추가 (문자 or 단어 단위)
      if (this.unit === 'word') {
        const words = currentText.split(' ');
        const wordCount = this.displayText ? this.displayText.split(' ').length : 0;
        this.displayText = words.slice(0, wordCount + 1).join(' ');
      } else {
        this.displayText = currentText.slice(0, this.displayText.length + 1);
      }
      // 문장이 끝났으면 일정 시간 후 삭제 시작 (loop=true일 때만)
      if (this.displayText === currentText) {
        // requestAnimationFrame으로 타이밍 조절
        this.animationFrameId = requestAnimationFrame(() => {
          const frameStart = performance.now();
          const waitTime = 1000; // 1초 대기
          const checkWait = () => {
            if (performance.now() - frameStart >= waitTime) {
              if (this.loop) {
                this.isDeleting = true;
              }
            } else {
              this.animationFrameId = requestAnimationFrame(checkWait);
            }
          };
          checkWait();
        });
        return;
      }
    } else {
      // 삭제 (문자 or 단어 단위)
      if (this.unit === 'word') {
        const words = this.displayText.split(' ');
        words.pop();
        this.displayText = words.join(' ');
      } else {
        this.displayText = this.displayText.slice(0, -1);
      }
      // 다 지웠으면 다음 문장으로 이동
      if (!this.displayText) {
        this.isDeleting = false;
        if (this.loop && this.texts.length > 0) {
          this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
      }
    }
    this.el.textContent = this.displayText;
    if (this.cursor) {
      this.el.classList.add('cursor');
    } else {
      this.el.classList.remove('cursor');
    }
    // requestAnimationFrame으로 성능 개선
    const typingDelay = this.isDeleting ? this.eraseSpeed : this.speed;
    const targetTime = this.lastUpdateTime + typingDelay;
    const scheduleNext = () => {
      const now = performance.now();
      if (now >= targetTime) {
        this.animationFrameId = requestAnimationFrame(() => this.startTyping());
      } else {
        this.animationFrameId = requestAnimationFrame(scheduleNext);
      }
    };
    this.animationFrameId = requestAnimationFrame(scheduleNext);
  }
  // 정리 메서드 (컴포넌트 언마운트 시 호출)
  destroy() {
    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
  }
}
const TintoTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostEl() {
    return getElement(this);
  }
  typingEl;
  typingInitialized = false;
  typingEffectInstance;
  /** 출력할 HTML 태그 스타일 (시맨틱은 as로 지정 가능) */
  variant = 'p';
  /** 시맨틱 태그 강제 (예: variant="h1" + as="h2") */
  as;
  /** 폰트 패밀리 preset */
  font = 'system';
  /** 폰트 크기 토큰 또는 직접 값 (예: "lg", "32px", "2.5rem") */
  fontSize;
  /** 텍스트 색상 (기본 상속) */
  color = 'inherit';
  /** 정렬 */
  align = 'left';
  /** 두께 (예: 400, 500, 700, 'bold') */
  weight;
  /** 인라인 여부 (기본 block) */
  inline = false;
  /** 밑줄 여부 */
  underline = false;
  /** 하이라이트 배경색 */
  highlight;
  /** 텍스트 가시성 (false → hidden) */
  visible = true;
  /** 하이퍼링크 URL (설정 시 <a>로 감쌈) */
  href;
  /** 링크 타겟 (_blank, _self, _parent, _top) */
  target;
  /** 링크 rel (target이 _blank면 보안 위해 자동 보정됨) */
  rel;
  /** ===== 애니메이션 관련 Props (이름은 그대로 유지) ===== */
  /** rolling=true 이면 타이핑 애니메이션 활성화 */
  rolling = false;
  /** (옵션) 타이핑 duration 토큰 (1~10) – 별도 typingDuration 없으면 fallback */
  rollSpeed = 5;
  /** 아래 props 들은 기존 롤링용 – API 호환용으로 유지 */
  rollAxis = 'x';
  /** 기본 문장 개수 (슬롯 텍스트를 몇 개로 복제할지, 기본 3개) */
  rollClone = 3;
  rollGap = '2rem';
  rollPlay = true;
  rollStartOnViewport = false;
  pauseOnHover = false;
  /** ===== Typing 전용 Props (dataset 대신 props로 제어) ===== */
  /**
   * 타이핑에 사용할 문장 배열.
   * - 문자열 JSON: '["문장1","문장2"]'
   * - 또는 구분자 문자열: '문장1|문장2|문장3'
   * 비워두면 슬롯 텍스트를 rollClone(기본 3)만큼 복제해서 사용.
   */
  typingTexts;
  /** 개별 문자를 찍는 duration 토큰 (1~10) */
  typingDuration;
  /** 삭제 duration 토큰 (1~10, 비우면 typingDuration과 동일) */
  typingEraseDuration;
  /** 마지막까지 끝나면 다시 처음부터 반복할지 여부 */
  typingLoop = true;
  /** 커서( | ) 표시 여부 */
  typingCursor = true;
  /** 문자 단위 / 단어 단위 */
  typingUnit = 'char';
  /** 타이포그래피 크기 (일관성을 위한 별도 prop) */
  size;
  /** 비활성화 여부 */
  disabled = false;
  /** 로딩 상태 */
  loading = false;
  /** 내부에서 렌더링할 태그 결정 */
  resolveTag() {
    if (this.as) return this.as;
    switch (this.variant) {
      case 'h1':
      case 'h2':
      case 'h3':
        return this.variant;
      case 'span':
        return 'span';
      default:
        return 'p';
    }
  }
  /** target/rel 보정: _blank 시 noopener noreferrer 강제 추가 */
  computeRel() {
    if (!this.href) return undefined;
    const baseRel = (this.rel || '').trim();
    if (this.target === '_blank') {
      const parts = new Set(
        (baseRel ? baseRel.split(/\s+/) : []).concat(['noopener', 'noreferrer']),
      );
      return Array.from(parts).join(' ');
    }
    return baseRel || undefined;
  }
  /** typingTexts prop 파싱 (JSON 우선, 실패 시 | / , 로 split) */
  parseTypingTexts() {
    const raw = this.typingTexts;
    if (!raw) return undefined;
    // JSON 배열 우선
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const mapped = parsed.map((v) => String(v).trim()).filter(Boolean);
        if (mapped.length > 0) return mapped;
      }
    } catch {
      // noop – JSON 아니면 아래에서 처리
    }
    const parts = raw
      .split(/[\|,]/g)
      .map((s) => s.trim())
      .filter(Boolean);
    return parts.length ? parts : undefined;
  }
  /** 현재 props 기반으로 타이핑 옵션 구성 */
  buildTypingOptions() {
    const texts = this.parseTypingTexts();
    // 1~10 duration 토큰 (typingDuration 우선, 없으면 rollSpeed → 기본 5)
    const durationToken = this.typingDuration ?? this.rollSpeed ?? 5;
    const eraseDurationToken = this.typingEraseDuration ?? durationToken;
    const duration = durationToken;
    const eraseDuration = eraseDurationToken;
    const loop = this.typingLoop;
    const cursor = this.typingCursor;
    const unit = this.typingUnit;
    // 디폴트 문장은 host의 텍스트 (슬롯 포함) 기준, 없으면 '' 유지
    const fallbackText = (this.hostEl.textContent || '').trim() || '';
    const copies = this.rollClone && this.rollClone > 0 ? this.rollClone : 3;
    return {
      texts,
      duration,
      eraseDuration,
      loop,
      cursor,
      unit,
      fallbackText,
      copies,
    };
  }
  /** rolling=true 일 때 한 번만 타이핑 이펙트 세팅 */
  setupTypingEffect() {
    if (!this.rolling) return;
    if (this.typingInitialized) return;
    if (!this.typingEl) return;
    // prefers-reduced-motion 고려: 애니메이션 비활성화 시 타이핑 효과 건너뛰기
    const prefersReduce =
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      // 애니메이션 없이 정적 텍스트만 표시
      return;
    }
    const options = this.buildTypingOptions();
    this.typingEffectInstance = new InternalTypingEffect(this.typingEl, options);
    this.typingInitialized = true;
  }
  /** 롤링 텍스트일 때 현재 line-height 기반 min-height를 계산 */
  syncTypingMetrics() {
    if (!this.hostEl) return;
    if (!this.rolling) {
      this.hostEl.style.removeProperty('--typing-line-height');
      return;
    }
    let lineHeightValue;
    try {
      if (typeof window !== 'undefined') {
        const computed = window.getComputedStyle(this.hostEl);
        const rawLineHeight = computed?.lineHeight;
        if (rawLineHeight && rawLineHeight !== 'normal') {
          lineHeightValue = rawLineHeight;
        } else {
          const fontSize = computed?.fontSize;
          const numeric = fontSize ? parseFloat(fontSize) : NaN;
          if (!isNaN(numeric) && isFinite(numeric) && numeric > 0) {
            lineHeightValue = `${numeric * 1.4}px`;
          }
        }
      }
    } catch {
      /* noop */
    }
    this.hostEl.style.setProperty('--typing-line-height', lineHeightValue ?? '1.4em');
  }
  /** font-size 토큰/값을 CSS 커스텀 프로퍼티로 투입 */
  applyFontSizeToken() {
    if (!this.hostEl) return;
    const style = this.hostEl.style;
    if (this.fontSize == null || String(this.fontSize).trim() === '') {
      style.removeProperty('--t-font-size');
      return;
    }
    const key = String(this.fontSize).trim();
    const tokenMap = FONT_SIZE;
    const mapped = tokenMap[key] ?? key; // 토큰 없으면 그대로 사용 (ex. "200px", "3rem")
    style.setProperty('--t-font-size', mapped);
  }
  componentWillLoad() {
    this.applyFontSizeToken();
  }
  componentDidLoad() {
    this.setupTypingEffect();
    this.syncTypingMetrics();
  }
  componentDidRender() {
    this.setupTypingEffect();
    this.syncTypingMetrics();
  }
  disconnectedCallback() {
    // 타이핑 애니메이션 정리
    if (this.typingEffectInstance) {
      this.typingEffectInstance.destroy();
      this.typingEffectInstance = undefined;
    }
    this.typingInitialized = false;
  }
  handleFontSizeChange() {
    this.applyFontSizeToken();
  }
  render() {
    const Tag = this.resolveTag();
    const style = {
      fontFamily: FAMILY_MAP[this.font],
      color: this.color,
      textAlign: this.align,
      fontWeight: this.weight != null ? String(this.weight) : undefined,
      display: this.inline ? 'inline' : 'block',
      textDecoration: this.underline ? 'underline' : 'none',
      backgroundColor: this.highlight,
      visibility: this.visible ? 'visible' : 'hidden', // 레이아웃 유지하며 숨김
      margin: '0',
      // ❗ font-size는 여기서 직접 지정하지 않고 CSS var(--t-font-size)를 사용
    };
    const ariaHidden = this.visible ? null : 'true';
    const rel = this.computeRel();
    // 슬롯 + fallback 텍스트
    const slotNode = h('slot', { key: '9862bb7de5b395123d1bb28ef8f5a35c8074e71c' });
    // rolling=true 이면 슬롯 텍스트를 .typing-effect span으로 감싼다
    let typedSpan;
    let staticTextForSR = null; // 스크린 리더용 정적 텍스트
    if (this.rolling) {
      // 스크린 리더용 정적 텍스트 추출 (타이핑 애니메이션과 별도로 제공)
      const staticText =
        this.parseTypingTexts()?.join(' ') || (this.hostEl.textContent || '').trim();
      if (staticText) {
        staticTextForSR = h(
          'span',
          {
            key: '29ec9599c3bbbcb498d74e8b34f3e0b533467378',
            class: 'sr-only',
            'aria-live': 'polite',
          },
          staticText,
        );
      }
      typedSpan = h(
        'span',
        {
          key: 'cf22e7b4482c2e4e0ca016be5eb8f6826d2e04ef',
          class: 'typing-effect',
          ref: (el) => (this.typingEl = el),
          'aria-live': 'polite',
          'aria-atomic': 'true',
        },
        slotNode,
      );
    } else {
      typedSpan = slotNode;
    }
    // href가 있으면 링크로 감싸기 (타이핑 span은 링크 안쪽에 둔다)
    const content = this.href
      ? h(
          'a',
          {
            part: 'link',
            href: this.href,
            target: this.target,
            rel: rel,
            style: { color: 'inherit', textDecoration: 'inherit' },
          },
          typedSpan,
        )
      : typedSpan;
    const sizeClass = this.size ? `size-${this.size}` : '';
    const disabledClass = this.disabled ? 'disabled' : '';
    const loadingClass = this.loading ? 'loading' : '';
    return h(
      Tag,
      {
        key: '4c757a0350e2cd4a75ad2128a7d0b6e67ca9b278',
        part: 'root',
        class: `tinto-typography ${this.variant} ${sizeClass} ${disabledClass} ${loadingClass} ${this.rolling ? 'has-typing' : ''}`,
        style: style,
        'aria-hidden': ariaHidden,
        'aria-disabled': this.disabled,
        'aria-busy': this.loading,
      },
      staticTextForSR,
      content,
    );
  }
  static get watchers() {
    return {
      fontSize: ['handleFontSizeChange'],
    };
  }
};
TintoTypography.style = typographyCss;

export {
  TintoButton as tinto_button,
  TintoImage as tinto_image,
  TintoSection as tinto_section,
  TintoTypography as tinto_typography,
};
//# sourceMappingURL=tinto-button.tinto-image.tinto-section.tinto-typography.entry.js.map
