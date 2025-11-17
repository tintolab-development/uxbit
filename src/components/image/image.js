var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  };
// image.tsx
import { Component, h, Prop, Element, Watch, Event } from '@stencil/core';
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
/**
 * <tinto-image>
 * - Image/media props + simple animations (spin/float/wobble/pulse)
 * - If placeholder exists, main image loads eagerly by default (fast swap)
 * - rounded="oval" => rounds TOP corners only (bottom corners are square)
 */
let TintoImage = class TintoImage {
  el;
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
};
__decorate([Element()], TintoImage.prototype, 'el', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'src', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'alt', void 0);
__decorate([Prop({ attribute: 'ratio', reflect: true })], TintoImage.prototype, 'ratio', void 0);
__decorate([Prop({ attribute: 'fit', reflect: true })], TintoImage.prototype, 'fit', void 0);
__decorate(
  [Prop({ attribute: 'position', reflect: true })],
  TintoImage.prototype,
  'position',
  void 0,
);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'radius', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'rounded', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'border', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'shadow', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'background', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'width', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'height', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'loading', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'priority', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'placeholder', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'srcset', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'sizes', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'decoding', void 0);
__decorate(
  [Prop({ reflect: true, attribute: 'crossorigin' })],
  TintoImage.prototype,
  'crossorigin',
  void 0,
);
__decorate(
  [Prop({ reflect: true, attribute: 'referrerpolicy' })],
  TintoImage.prototype,
  'referrerpolicy',
  void 0,
);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'href', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'target', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'rel', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'download', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'as', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'disabled', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'animation', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'play', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'rotate', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'duration', void 0);
__decorate([Prop({ reflect: true })], TintoImage.prototype, 'repeat', void 0);
__decorate(
  [Prop({ attribute: 'pause-on-hover', reflect: true })],
  TintoImage.prototype,
  'pauseOnHover',
  void 0,
);
__decorate(
  [Prop({ attribute: 'start-on-viewport', reflect: true })],
  TintoImage.prototype,
  'startOnViewport',
  void 0,
);
__decorate([Event({ eventName: 'tinto:loaded' })], TintoImage.prototype, 'tintoLoaded', void 0);
__decorate([Event({ eventName: 'tinto:error' })], TintoImage.prototype, 'tintoError', void 0);
__decorate([Event({ eventName: 'tinto:press' })], TintoImage.prototype, 'tintoPress', void 0);
__decorate(
  [
    Watch('ratio'),
    Watch('fit'),
    Watch('position'),
    Watch('radius'),
    Watch('rounded'),
    Watch('border'),
    Watch('shadow'),
    Watch('background'),
  ],
  TintoImage.prototype,
  'applyFrameStyles',
  null,
);
__decorate([Watch('width'), Watch('height')], TintoImage.prototype, 'syncHostBoxSize', null);
__decorate(
  [
    Watch('src'),
    Watch('alt'),
    Watch('srcset'),
    Watch('sizes'),
    Watch('loading'),
    Watch('priority'),
    Watch('placeholder'),
    Watch('decoding'),
    Watch('crossorigin'),
    Watch('referrerpolicy'),
  ],
  TintoImage.prototype,
  'updateImageAttrs',
  null,
);
__decorate(
  [Watch('href'), Watch('as'), Watch('target'), Watch('rel'), Watch('download'), Watch('disabled')],
  TintoImage.prototype,
  'onStructureChanged',
  null,
);
__decorate(
  [
    Watch('animation'),
    Watch('play'),
    Watch('rotate'),
    Watch('duration'),
    Watch('repeat'),
    Watch('pauseOnHover'),
    Watch('startOnViewport'),
  ],
  TintoImage.prototype,
  'applyAnimation',
  null,
);
TintoImage = __decorate(
  [
    Component({
      tag: 'tinto-image',
      styleUrl: 'image.css',
      shadow: true,
    }),
  ],
  TintoImage,
);
export { TintoImage };
