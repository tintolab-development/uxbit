import {
  r as registerInstance,
  c as createEvent,
  h,
  H as Host,
  g as getElement,
} from './index-3CssInHd.js';

const buttonCss =
  ":host{display:inline-block;font-family:system-ui,\n        -apple-system,\n        BlinkMacSystemFont,\n        'Segoe UI',\n        Roboto,\n        'Noto Sans KR',\n        'Apple SD Gothic Neo',\n        'Malgun Gothic',\n        sans-serif}:host([hidden]){display:none !important}.tinto-button{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;cursor:pointer;white-space:nowrap;border-radius:9999px;padding:0.5rem 0.9rem;font-size:0.95rem;line-height:1;border-width:1px;border-style:solid;transition:background-color 0.15s ease,\n        color 0.15s ease,\n        border-color 0.15s ease,\n        box-shadow 0.15s ease,\n        transform 0.03s ease;--t-button-bg:#111827;--t-button-fg:#ffffff;--t-button-border:#111827}.tinto-button--primary{background-color:var(--t-button-bg, #111827);color:var(--t-button-fg, #ffffff);border-color:var(--t-button-border, #111827)}.tinto-button--primary:hover{background-color:#020617;border-color:#020617}.tinto-button--secondary{background-color:#ffffff;color:#111827;border-color:#d1d5db}.tinto-button--secondary:hover{background-color:#f3f4f6;border-color:#9ca3af}.tinto-button--ghost{background-color:transparent;color:#111827;border-color:transparent}.tinto-button--ghost:hover{background-color:rgba(15, 23, 42, 0.04);border-color:rgba(15, 23, 42, 0.08)}.tinto-button--sm{padding:0.35rem 0.7rem;font-size:0.82rem}.tinto-button--md{padding:0.5rem 0.9rem;font-size:0.95rem}.tinto-button--lg{padding:0.65rem 1.15rem;font-size:1.05rem}.tinto-button--block{width:100%;justify-content:center}.tinto-button--disabled,.tinto-button[disabled]{opacity:0.4;cursor:not-allowed;box-shadow:none}.tinto-button:focus-visible{outline:2px solid #2563eb;outline-offset:2px}.tinto-button:active{transform:translateY(1px)}";

const TintoButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoClick = createEvent(this, 'tintoClick');
  }
  /**
   * 시각 스타일(색 계열)
   */
  variant = 'primary';
  /**
   * 버튼 크기
   */
  size = 'md';
  /**
   * HTML button type
   */
  type = 'button';
  /**
   * 비활성화 여부
   */
  disabled = false;
  /**
   * 가로 전체폭 사용 여부
   */
  block = false;
  /**
   * 클릭 이벤트 (기본 click 외에 Stencil 커스텀 이벤트)
   */
  tintoClick;
  handleClick = (event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.tintoClick.emit(event);
  };
  render() {
    const classes = {
      'tinto-button': true,
      [`tinto-button--${this.variant}`]: true,
      [`tinto-button--${this.size}`]: true,
      'tinto-button--block': this.block,
      'tinto-button--disabled': this.disabled,
    };
    return h(
      Host,
      { key: 'cfa57608fde84d44d3a1e04fc5ccc34cd5abe6f7' },
      h(
        'button',
        {
          key: '1d19cd2ad268637c47e077539974ec75bdeb9515',
          class: classes,
          type: this.type,
          disabled: this.disabled,
          onClick: this.handleClick,
        },
        h('slot', { key: '71635a1f7cb95da1ed258235594f03321bb41fb5' }, 'Button'),
      ),
    );
  }
};
TintoButton.style = buttonCss;

const imageCss =
  ":host{display:block;inline-size:var(--ti-width, 100%)}:host([hidden]){display:none}:host{--ti-r-soft:8px;--ti-r-oval:max(800px, 213vw);--ti-r-top:max(400px, 106vw);--ti-r-diag:max(200px, 53vw);--ti-focus:#005fcc}[part='link'],[part='button'],[part='plain']{display:block;color:inherit;text-decoration:none}[part='button']{display:block;width:100%;border:none;background:none;padding:0;margin:0;font:inherit;text-align:inherit;line-height:0;}[data-clickable]{cursor:pointer}:host(:focus-within) [part='frame']{outline:2px solid var(--ti-focus, #005fcc);outline-offset:2px}@supports selector(:focus-visible){:host(:focus-within) [part='frame']{outline:none}:host(:focus-within) [part='frame']:focus-visible{outline:2px solid var(--ti-focus, #005fcc);outline-offset:2px}}:host([disabled]) [data-clickable]{cursor:not-allowed;filter:grayscale(30%) opacity(0.85)}:host([disabled]) [part='link']{pointer-events:none}.ti-frame[part='frame']{position:relative;width:100%;height:auto;aspect-ratio:var(--ratio-w, 16) / var(--ratio-h, 9);overflow:hidden;border-radius:var(--ti-radius, 0);background:var(--ti-bg, transparent);box-shadow:var(--ti-shadow, none);border:var(--ti-border, none)}:host([height]) .ti-frame[part='frame']{height:100%;aspect-ratio:auto}[part='spacer']{display:block;width:100%;padding-top:calc(var(--ratio-h, 9) / var(--ratio-w, 16) * 100%);pointer-events:none;user-select:none;-webkit-user-select:none;opacity:0}:host([height]) [part='spacer']{display:none}[part='layer']{position:absolute;inset:0}[part='img'],[part='placeholder']{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:var(--ti-fit, cover);object-position:var(--ti-pos, 50% 50%);-webkit-user-drag:none;user-select:none;-webkit-user-select:none;pointer-events:none}[part='img']{z-index:1;opacity:0;transition:opacity 0.32s ease}[part='placeholder']{z-index:0;filter:blur(12px);transform:scale(1.02);opacity:1;transition:opacity 0.32s ease}.ti-frame[data-state='loaded'] [part='img']{opacity:1}.ti-frame[data-state='loaded'] [part='placeholder']{opacity:0}.ti-frame[data-state='error'] [part='img']{opacity:0}.ti-frame[data-state='error'] [part='placeholder']{opacity:1}.ti-frame[data-skeleton]::before{content:'';position:absolute;inset:0;background:linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.04) 0%,\n    rgba(0, 0, 0, 0.08) 50%,\n    rgba(0, 0, 0, 0.04) 100%\n  );animation:ti-skel 1.3s infinite}@keyframes ti-skel{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@media (prefers-reduced-motion: reduce){.ti-frame[data-skeleton]::before{animation:none}}::slotted([slot='overlay']){position:absolute;inset:0}";

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
  animation = '';
  play = true;
  rotate = 'right';
  /** seconds (e.g., 20) */
  duration = 20;
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
  componentDidLoad() {
    this.applyFrameStyles();
    this.updateImageAttrs();
    this.setupIOIfNeeded();
    this.applyAnimation();
    window.addEventListener('resize', this.syncVhVar, { passive: true });
    this.syncVhVar();
    // 로딩 시작 상태 표시
    this.el.setAttribute('aria-busy', 'true');
  }
  disconnectedCallback() {
    window.removeEventListener('resize', this.syncVhVar);
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
      if (this.src) img.src = this.src;
      else img.removeAttribute('src');
    } else {
      // IO fallback: if initially in viewport, load now; otherwise wait for IO
      if (this.src && isInViewport(this.el)) {
        img.src = this.src;
        this.wasObserved = true;
      } else if (this.wasObserved && this.src) {
        img.src = this.src;
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
    const keyframes = this.buildKeyframes(type, rotateDir);
    const timing = {
      duration: durationSec * 1000,
      iterations,
      easing: type === 'float' ? 'ease-in-out' : 'linear',
    };
    this.anim = this.el.animate(keyframes, timing);
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
  buildKeyframes(type, rotate) {
    const dir = rotate === 'left' ? -1 : 1;
    switch (type) {
      case 'float':
        return [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0)' },
        ];
      case 'wobble':
        return [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(3deg)' },
          { transform: 'rotate(-3deg)' },
          { transform: 'rotate(0deg)' },
        ];
      case 'pulse':
        return [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }];
      case 'spin':
      default:
        return [{ transform: 'rotate(0deg)' }, { transform: `rotate(${dir * 360}deg)` }];
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
    const next = this.placeholder ? 'error' : 'loaded';
    this.frameEl?.setAttribute('data-state', next);
    this.el.removeAttribute('aria-busy');
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
          alt: '',
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
      repeat: ['applyAnimation'],
      pauseOnHover: ['applyAnimation'],
      startOnViewport: ['applyAnimation'],
    };
  }
};
TintoImage.style = imageCss;

const sectionCss =
  ":host{display:block;box-sizing:border-box;max-width:100%}[part='root']{width:100%;max-width:var(--t-max-w, none);padding:var(--t-pad, 0);margin:var(--t-mar, 0);background:var(--t-bg, transparent);color:var(--t-color, inherit);border-radius:var(--t-radius, 0);box-shadow:var(--t-shadow, none);display:flex;flex-direction:var(--t-dir, column);flex-wrap:var(--t-wrap, nowrap);justify-content:var(--t-justify, flex-start);align-items:var(--t-align, stretch);gap:var(--t-gap, 0);box-sizing:border-box}:host([center]) [part='root']{margin-inline:auto}:host([height-mode='dvh']) [part='root']{min-height:calc(var(--t-vh, 1vh) * 100);min-height:100dvh}:host([height-mode='screen']) [part='root']{height:calc(var(--t-vh, 1vh) * 100);height:100dvh}:host([scrollable]) [part='root']{overflow:auto;-webkit-overflow-scrolling:touch}::slotted(*){margin:0}";

const TintoSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /** Flex 레이아웃 기본값(모바일 우선, 모든 해상도에 동일 적용) */
  direction = 'column';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  gap; // e.g. "12px", "1rem"
  /** 크기/여백/배경 등 토큰 */
  maxWidth; // "1200px", "100%", "80ch"...
  padding; // "16px", "24px 12px"...
  margin; // "0 auto"...
  background; // color/gradient
  color;
  radius; // border-radius
  shadow; // box-shadow
  /** 가운데 정렬 (maxWidth 사용 시 margin-inline:auto) */
  center = false;
  /**
   * 높이 제어
   * - auto: 내용 높이(기본)
   * - dvh: 동적 뷰포트 기준 최소/정확 높이
   * - screen: 정확히 100dvh
   */
  heightMode = 'auto';
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
  /** undefined/null/빈 문자열은 style에 넣지 않도록 클린업 */
  buildStyleVars() {
    const entries = [
      ['--t-max-w', this.maxWidth],
      ['--t-pad', this.padding],
      ['--t-mar', this.margin],
      ['--t-bg', this.background],
      ['--t-color', this.color],
      ['--t-radius', this.radius],
      ['--t-shadow', this.shadow],
      // Flex (모든 해상도 동일)
      ['--t-dir', this.direction],
      ['--t-wrap', this.wrap],
      ['--t-justify', this.justify],
      ['--t-align', this.align],
      ['--t-gap', this.gap],
    ];
    const vars = {};
    for (const [k, v] of entries) {
      if (v !== undefined && v !== null && String(v).trim() !== '') {
        vars[k] = String(v);
      }
    }
    return vars;
  }
  render() {
    const styleVars = this.buildStyleVars();
    // host의 role/aria-* 패스스루
    const ariaLabel = this.el.getAttribute('aria-label') ?? undefined;
    const ariaLabelledby = this.el.getAttribute('aria-labelledby') ?? undefined;
    const ariaDescribedby = this.el.getAttribute('aria-describedby') ?? undefined;
    const role = this.el.getAttribute('role') ?? undefined;
    // 내부 스크롤 허용 시 키보드 스크롤 가능하게 tabIndex 부여
    const tabIndex = this.scrollable ? 0 : undefined;
    return h(
      'section',
      {
        key: 'df22583e7e0139434b0f6123412d4efe269bd683',
        part: 'root',
        class: 'tinto-section',
        style: styleVars,
        role: role,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby,
        tabIndex: tabIndex,
      },
      h('slot', { key: '7ff35beaf5d860ab841c4dbda8845a2b1a78110c' }),
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
  ":host{display:block;box-sizing:border-box;max-width:100%}:host([inline]){display:inline}.tinto-typography{white-space:normal;word-break:keep-all;overflow-wrap:break-word}.tinto-typography.h1{font-size:var(--t-font-size, clamp(1.75rem, 4.5vw, 2.75rem));line-height:1.2;font-weight:700}.tinto-typography.h2{font-size:var(--t-font-size, clamp(1.5rem, 3.5vw, 2.25rem));line-height:1.25;font-weight:600}.tinto-typography.h3{font-size:var(--t-font-size, clamp(1.25rem, 2.8vw, 1.75rem));line-height:1.3;font-weight:500}.tinto-typography.p{line-height:1.6;font-size:var(--t-font-size, clamp(0.95rem, 2.5vw, 1.05rem))}.tinto-typography.span{font-size:var(--t-font-size, clamp(0.85rem, 2.2vw, 0.95rem))}::slotted(a),[part='link']{color:inherit;text-decoration:inherit}[part='link']:focus-visible{outline:var(--t-focus, 2px solid #005fcc);outline-offset:2px}[part='link']:hover{opacity:0.9;text-decoration:underline}@media (min-width: 1920px){.tinto-typography.p{line-height:1.7}}.typing-effect.cursor::after{content:'|';display:inline-block;margin-left:0.1em;animation:typing-cursor 0.7s steps(1) infinite}@keyframes typing-cursor{0%,50%{opacity:1}51%,100%{opacity:0}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@media (prefers-reduced-motion: reduce){.typing-effect.cursor::after{animation:none}}";

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
    this.startTyping();
  }
  startTyping() {
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
        setTimeout(() => {
          if (this.loop) {
            this.isDeleting = true;
          }
        }, 1000);
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
    const delay = this.isDeleting ? this.eraseSpeed : this.speed;
    setTimeout(() => this.startTyping(), delay);
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
    new InternalTypingEffect(this.typingEl, options);
    this.typingInitialized = true;
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
  }
  componentDidRender() {
    this.setupTypingEffect();
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
    const slotNode = h('slot', { key: 'c3a1a74d17398726eb110ef98643e2a2a9ebc5c0' });
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
            key: 'b527ea0c13c7d36fd07d1cda4e7b0f3a81f68443',
            class: 'sr-only',
            'aria-live': 'polite',
          },
          staticText,
        );
      }
      typedSpan = h(
        'span',
        {
          key: 'dd76c156a1672e05f50d23991f79df3a9b28c52e',
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
    return h(
      Tag,
      {
        key: '592eb33c828c1ef88b702439aa8f64a46e876554',
        part: 'root',
        class: `tinto-typography ${this.variant} ${this.rolling ? 'has-typing' : ''}`,
        style: style,
        'aria-hidden': ariaHidden,
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

const wrapperCss =
  ":host{display:block}.tw-root{position:relative;box-sizing:border-box;width:100%;min-width:0;padding:var(--tw-pad, 0);margin:var(--tw-mar, 0);color:var(--tw-color, inherit);border-radius:var(--tw-radius, 0);box-shadow:var(--tw-shadow, none);border:var(--tw-border, none);background-color:var(--tw-bg, transparent);background-image:var(--tw-bg-img, none);background-size:var(--tw-bg-size, cover);background-position:var(--tw-bg-pos, 50% 50%);background-repeat:var(--tw-bg-repeat, no-repeat);background-attachment:var(--tw-bg-attach, scroll);background-blend-mode:var(--tw-bg-blend, normal)}.tw-root::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:var(--tw-overlay, transparent);opacity:var(--tw-overlay-opacity, 0)}.tw-root.tw-fill{position:absolute;inset:0}[part='inner']{position:relative;z-index:1;display:flex;flex-direction:var(--tw-dir, row);flex-wrap:var(--tw-wrap, nowrap);justify-content:var(--tw-justify, flex-start);align-items:var(--tw-align, stretch);gap:var(--tw-gap, 0)}@media (min-width: 1920px){[part='inner']{flex-direction:var(--tw-dir-desktop, var(--tw-dir, row));flex-wrap:var(--tw-wrap-desktop, var(--tw-wrap, nowrap));justify-content:var(--tw-justify-desktop, var(--tw-justify, flex-start));align-items:var(--tw-align-desktop, var(--tw-align, stretch));gap:var(--tw-gap-desktop, var(--tw-gap, 0))}}";

const TintoWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get el() {
    return getElement(this);
  }
  /** Flex (모바일 기본) */
  direction = 'row';
  wrap = 'nowrap';
  justify = 'flex-start';
  align = 'stretch';
  gap; // ex) "24px", "1rem"
  /** Flex (데스크탑 오버라이드, >=1920px) */
  directionDesktop;
  wrapDesktop;
  justifyDesktop;
  alignDesktop;
  gapDesktop;
  /** Box / Visual */
  padding;
  margin;
  radius;
  shadow;
  border;
  color;
  /** 배경(색/그라디언트) + 배경 이미지 */
  background; // color/gradient → background-color 로 매핑
  src; // background-image url
  bgSize = 'cover';
  bgPosition = '50% 50%';
  bgRepeat = 'no-repeat';
  bgAttachment = 'scroll';
  bgBlend = 'normal';
  /** 오버레이 */
  overlay; // rgba/hex-with-alpha 권장
  overlayOpacity;
  /** 부모를 덮는 모드 (absolute; inset:0) */
  fill = false;
  render() {
    // CSS var 값 준비: url("…") 형태로 넣을 때 따옴표/괄호 안전화
    const safeUrl = this.src ? this.src.replace(/"/g, '%22').replace(/\)/g, '%29') : undefined;
    const bgImg = safeUrl ? `url("${safeUrl}")` : undefined;
    const ovOpacity = this.overlay ? String(this.overlayOpacity ?? 1) : '0';
    const styleVars = {
      // Flex (mobile)
      '--tw-dir': this.direction,
      '--tw-wrap': this.wrap,
      '--tw-justify': this.justify,
      '--tw-align': this.align,
      '--tw-gap': this.gap,
      // Flex (desktop overrides, 1920+)
      '--tw-dir-desktop': this.directionDesktop,
      '--tw-wrap-desktop': this.wrapDesktop,
      '--tw-justify-desktop': this.justifyDesktop,
      '--tw-align-desktop': this.alignDesktop,
      '--tw-gap-desktop': this.gapDesktop,
      // Box
      '--tw-pad': this.padding,
      '--tw-mar': this.margin,
      '--tw-radius': this.radius,
      '--tw-shadow': this.shadow,
      '--tw-border': this.border,
      '--tw-color': this.color,
      // Background
      '--tw-bg': this.background,
      '--tw-bg-img': bgImg,
      '--tw-bg-size': this.bgSize,
      '--tw-bg-pos': this.bgPosition,
      '--tw-bg-repeat': this.bgRepeat,
      '--tw-bg-attach': this.bgAttachment,
      '--tw-bg-blend': this.bgBlend,
      // Overlay
      '--tw-overlay': this.overlay,
      '--tw-overlay-opacity': ovOpacity,
    };
    return h(
      'div',
      {
        key: 'a8b0429f8adeb905d1b6b7dbfa2087d3df14a6be',
        part: 'root',
        class: { 'tw-root': true, 'tw-fill': this.fill },
        style: styleVars,
      },
      h(
        'div',
        { key: 'bdc71c83793932533f2fe7459ddb654f7243fd61', part: 'inner' },
        h('slot', { key: 'f18106c31e5766b9c1ba420ec942b52c9760a3b8' }),
      ),
    );
  }
};
TintoWrapper.style = wrapperCss;

export {
  TintoButton as tinto_button,
  TintoImage as tinto_image,
  TintoSection as tinto_section,
  TintoTypography as tinto_typography,
  TintoWrapper as tinto_wrapper,
};
//# sourceMappingURL=tinto-button.tinto-image.tinto-section.tinto-typography.tinto-wrapper.entry.js.map
