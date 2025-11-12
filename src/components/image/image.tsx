// image.tsx
import { Component, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';
import {
  AsKind,
  ImageAnimation,
  ImageFit,
  LinkTarget,
  RoundedPreset,
  AnimationRotate,
  RepeatValue,
  TintoImageLoadedDetail,
  TintoImageErrorDetail,
  TintoImagePressDetail,
} from './image.types';

/** Quick viewport check to avoid IO delay for initially visible elements */
function isInViewport(el: HTMLElement) {
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
@Component({
  tag: 'tinto-image',
  styleUrl: 'image.css',
  shadow: true,
})
export class TintoImage {
  @Element() el!: HTMLElement;

  /* ============================ Image / media ============================ */
  @Prop({ reflect: true }) src?: string;
  @Prop({ reflect: true }) alt?: string;
  /** "w:h", e.g. "16:9", "1:1" */
  @Prop({ attribute: 'ratio', reflect: true }) ratio: string = '16:9';
  @Prop({ attribute: 'fit', reflect: true }) fit: ImageFit = 'cover';
  @Prop({ attribute: 'position', reflect: true }) position: string = '50% 50%';

  /** If radius exists, it overrides rounded preset */
  @Prop({ reflect: true }) radius?: string;
  @Prop({ reflect: true }) rounded?: RoundedPreset;

  @Prop({ reflect: true }) border?: string;
  @Prop({ reflect: true }) shadow?: string;
  @Prop({ reflect: true }) background?: string;

  /** Host box size (CSS inline/block size) */
  @Prop({ reflect: true }) width?: string;
  @Prop({ reflect: true }) height?: string;

  /** Loading policy */
  @Prop({ reflect: true }) loading?: 'lazy' | 'eager';
  /** Priority: eager + inject <link rel="preload" as="image"> */
  @Prop({ reflect: true }) priority?: boolean = false;
  /** Blurred/low-res placeholder URL */
  @Prop({ reflect: true }) placeholder?: string;

  /** Responsive images */
  @Prop({ reflect: true }) srcset?: string;
  @Prop({ reflect: true }) sizes?: string;

  @Prop({ reflect: true }) decoding?: 'async' | 'sync' | 'auto' = 'async';
  @Prop({ reflect: true, attribute: 'crossorigin' }) crossorigin?: string;
  @Prop({ reflect: true, attribute: 'referrerpolicy' }) referrerpolicy?: string;

  /* ============================ Interactivity ============================ */
  /** Wrap with anchor when href provided */
  @Prop({ reflect: true }) href?: string;
  @Prop({ reflect: true }) target?: LinkTarget;
  @Prop({ reflect: true }) rel?: string;
  @Prop({ reflect: true }) download?: string; // "" allowed

  /** as="button" support */
  @Prop({ reflect: true }) as?: AsKind;
  @Prop({ reflect: true }) disabled?: boolean = false;

  /* ============================== Animation ============================== */
  @Prop({ reflect: true }) animation?: ImageAnimation = '';
  @Prop({ reflect: true }) play?: boolean = true;
  @Prop({ reflect: true }) rotate?: AnimationRotate = 'right';
  /** seconds (e.g., 20) */
  @Prop({ reflect: true }) duration?: number = 20;
  /** 'infinite' or finite count (string/number) */
  @Prop({ reflect: true }) repeat?: RepeatValue = 'infinite';
  /** pause on hover */
  @Prop({ attribute: 'pause-on-hover', reflect: true }) pauseOnHover?: boolean = false;
  /** play/pause on viewport */
  @Prop({ attribute: 'start-on-viewport', reflect: true }) startOnViewport?: boolean = false;

  /* ============================== Events ============================== */
  @Event({ eventName: 'tinto:loaded' }) tintoLoaded!: EventEmitter<TintoImageLoadedDetail>;
  @Event({ eventName: 'tinto:error' }) tintoError!: EventEmitter<TintoImageErrorDetail>;
  @Event({ eventName: 'tinto:press' }) tintoPress!: EventEmitter<TintoImagePressDetail>;

  /* ============================== Internals ============================== */
  private imgEl?: HTMLImageElement;
  private phEl?: HTMLImageElement;
  private frameEl?: HTMLDivElement;

  private io?: IntersectionObserver; // for lazy fallback
  private wasObserved = false;
  private anim?: Animation; // Web Animations
  private animIO?: IntersectionObserver; // play/pause on viewport
  private effectiveLoading: 'lazy' | 'eager' = 'lazy';

  private onHoverEnter = () => this.anim?.pause();
  private onHoverLeave = () => {
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
  @Watch('ratio')
  @Watch('fit')
  @Watch('position')
  @Watch('radius')
  @Watch('rounded')
  @Watch('border')
  @Watch('shadow')
  @Watch('background')
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
      const map: Record<string, RoundedPreset> = { base: 'soft', full: 'oval', t: 'top', lr: 'diagonal' };
      const key =
        map[
          String(this.rounded || '')
            .toLowerCase()
            .trim()
        ] || (this.rounded as any);

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

  @Watch('width')
  @Watch('height')
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

  @Watch('src')
  @Watch('alt')
  @Watch('srcset')
  @Watch('sizes')
  @Watch('loading')
  @Watch('priority')
  @Watch('placeholder')
  @Watch('decoding')
  @Watch('crossorigin')
  @Watch('referrerpolicy')
  updateImageAttrs() {
    const img = this.imgEl;
    const ph = this.phEl;
    if (!img || !this.frameEl) return;

    // placeholder handling
    const hasPh = !!this.placeholder;
    if (hasPh) {
      if (ph!.src !== this.placeholder) ph!.src = this.placeholder!;
      ph!.style.display = 'block';
      this.frameEl.removeAttribute('data-skeleton');
    } else {
      if (ph!.hasAttribute('src')) ph!.removeAttribute('src');
      ph!.style.display = 'none';
      this.frameEl.setAttribute('data-skeleton', '');
    }

    // core attrs (property + attribute for widest compat)
    const alt = this.alt || '';
    img.alt = alt;

    const decoding = this.decoding || 'async';
    img.decoding = decoding as any;
    img.setAttribute('decoding', decoding);

    if (this.referrerpolicy) {
      img.referrerPolicy = this.referrerpolicy as any;
      img.setAttribute('referrerpolicy', this.referrerpolicy);
    } else {
      img.removeAttribute('referrerpolicy');
    }

    if (this.crossorigin) {
      img.crossOrigin = this.crossorigin as any;
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
    const loadingAttr = (this.loading || (priority || hasPh ? 'eager' : 'lazy')).toLowerCase() as 'eager' | 'lazy';
    this.effectiveLoading = loadingAttr;

    img.loading = loadingAttr as any;
    img.setAttribute('loading', loadingAttr);

    // fetch priority hint (when eager/placeholder/priority)
    const wantsHigh = priority || hasPh || loadingAttr === 'eager';
    try {
      (img as any).fetchPriority = wantsHigh ? 'high' : 'auto';
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
    if (priority && this.src) this.injectPreload(this.src, this.srcset, this.sizes, this.crossorigin, this.referrerpolicy);

    // when loading/priority/src changed → (re)setup IO
    this.setupIOIfNeeded();
  }

  @Watch('href')
  @Watch('as')
  @Watch('target')
  @Watch('rel')
  @Watch('download')
  @Watch('disabled')
  onStructureChanged() {
    // current render is enough; nothing special here
  }

  @Watch('animation')
  @Watch('play')
  @Watch('rotate')
  @Watch('duration')
  @Watch('repeat')
  @Watch('pauseOnHover')
  @Watch('startOnViewport')
  applyAnimation() {
    this.teardownAnimation();
    if (!this.animation) return;

    const prefersReduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;

    const type = (this.animation || '').toLowerCase().trim() as ImageAnimation;
    if (!type) return;

    const isPlay = this.play !== false;
    const rotateDir = (this.rotate || 'right').toLowerCase() as AnimationRotate;
    let durationSec = Number(this.duration ?? 20);
    if (!isFinite(durationSec) || durationSec <= 0) durationSec = 20;

    const repRaw = String(this.repeat ?? 'infinite').toLowerCase();
    const iterations = repRaw === 'infinite' ? Infinity : Math.max(1, parseInt(repRaw, 10) || 1);

    const keyframes = this.buildKeyframes(type, rotateDir);
    const timing: KeyframeAnimationOptions = {
      duration: durationSec * 1000,
      iterations,
      easing: type === 'float' ? 'ease-in-out' : 'linear',
    };

    this.anim = (this.el as any).animate(keyframes, timing);
    if (!isPlay) this.anim.pause();

    if (this.startOnViewport) {
      this.anim.pause();
      if (typeof IntersectionObserver !== 'undefined') {
        this.animIO = new IntersectionObserver(
          ents => {
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
  private parseRatio(raw: string): [number, number] {
    const s = String(raw || '16:9').replace(/\s+/g, '');
    if (/^\d+:\d+$/.test(s)) {
      const [a, b] = s.split(':');
      return [parseInt(a, 10) || 16, parseInt(b, 10) || 9];
    }
    const known: Record<string, [number, number]> = {
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

  private setCSSVar(name: string, value?: string) {
    if (value) this.frameEl?.style.setProperty(name, value);
    else this.frameEl?.style.removeProperty(name);
  }

  private injectPreload(src: string, srcset?: string, sizes?: string, co?: string, rp?: string) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const abs = new URL(src, document.baseURI).href;
    const exists = Array.from(head.querySelectorAll<HTMLLinkElement>('link[rel="preload"][as="image"]')).some(l => l.href === abs);
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

  private setupIOIfNeeded() {
    const priority = !!this.priority;
    const nativeLazy = 'loading' in HTMLImageElement.prototype;
    if (priority || this.effectiveLoading !== 'lazy' || nativeLazy) {
      this.teardownIO();
      return;
    }
    if (!this.io && typeof IntersectionObserver !== 'undefined') {
      this.io = new IntersectionObserver(
        entries => {
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

  private teardownIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private buildKeyframes(type: ImageAnimation, rotate: AnimationRotate): Keyframe[] {
    const dir = rotate === 'left' ? -1 : 1;
    switch (type) {
      case 'float':
        return [{ transform: 'translateY(0)' }, { transform: 'translateY(-10px)' }, { transform: 'translateY(0)' }];
      case 'wobble':
        return [{ transform: 'rotate(0deg)' }, { transform: 'rotate(3deg)' }, { transform: 'rotate(-3deg)' }, { transform: 'rotate(0deg)' }];
      case 'pulse':
        return [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }];
      case 'spin':
      default:
        return [{ transform: 'rotate(0deg)' }, { transform: `rotate(${dir * 360}deg)` }];
    }
  }

  private teardownAnimation() {
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
  private syncVhVar = () => {
    try {
      const vh = window.innerHeight * 0.01;
      this.el.style.setProperty('--ti-vh', `${vh}px`);
    } catch {}
  };

  /* ============================== Render ============================== */
  private onImgLoad = () => {
    this.frameEl?.setAttribute('data-state', 'loaded');
    this.frameEl?.removeAttribute('data-skeleton');
    this.el.removeAttribute('aria-busy');
    this.tintoLoaded.emit({
      width: this.imgEl?.naturalWidth ?? 0,
      height: this.imgEl?.naturalHeight ?? 0,
      src: this.src,
    });
  };

  private onImgError = () => {
    const next = this.placeholder ? 'error' : 'loaded';
    this.frameEl?.setAttribute('data-state', next);
    this.el.removeAttribute('aria-busy');
    this.tintoError.emit({ src: this.src });
  };

  private onButtonPress = (ev: Event) => {
    if (this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    const kind: TintoImagePressDetail['kind'] = this.href ? 'link' : this.as === 'button' ? 'button' : 'plain';
    this.tintoPress.emit({ kind });
  };

  render() {
    const computedRel = this.rel || (this.target === '_blank' ? 'noopener noreferrer' : undefined);

    const frame = (
      <div part="frame" class="ti-frame" ref={el => (this.frameEl = el as HTMLDivElement)} data-state="loading">
        <span part="spacer"></span>
        <div part="layer">
          {/* Placeholder should not be read by SR → alt="" + aria-hidden */}
          <img part="placeholder" alt="" aria-hidden="true" ref={el => (this.phEl = el as HTMLImageElement)} draggable={false} onDragStart={e => e.preventDefault()} />
          {/* Real image; alt is applied in updateImageAttrs */}
          <img
            part="img"
            ref={el => (this.imgEl = el as HTMLImageElement)}
            draggable={false}
            alt=""
            onDragStart={e => e.preventDefault()}
            onLoad={this.onImgLoad}
            onError={this.onImgError}
          />
        </div>
        <slot name="overlay"></slot>
      </div>
    );

    // apply width/height at render too
    this.syncHostBoxSize();

    // pass through host aria-* to wrapper
    const ariaLabel = this.el.getAttribute('aria-label');
    const ariaDescribedby = this.el.getAttribute('aria-describedby');
    const ariaLabelledby = this.el.getAttribute('aria-labelledby');

    const commonA11y: any = {};
    if (ariaLabel) commonA11y['aria-label'] = ariaLabel;
    if (ariaDescribedby) commonA11y['aria-describedby'] = ariaDescribedby;
    if (ariaLabelledby) commonA11y['aria-labelledby'] = ariaLabelledby;

    // href 변형
    const isDisabled = !!this.disabled;
    if (this.href) {
      if (isDisabled) {
        return (
          <span part="link" role="link" aria-disabled="true" tabIndex={-1} {...commonA11y} style={{ pointerEvents: 'none' }}>
            {frame}
          </span>
        );
      }
      const aProps: any = {
        'part': 'link',
        'href': this.href,
        'target': this.target,
        'rel': computedRel,
        ...commonA11y,
        'data-clickable': true,
        'onClick': () => this.tintoPress.emit({ kind: 'link' }),
      };
      if (this.download != null) aProps.download = this.download === '' ? '' : this.download;
      return <a {...aProps}>{frame}</a>;
    }

    // button 변형
    if (this.as === 'button') {
      return (
        <button part="button" type="button" disabled={!!this.disabled} {...commonA11y} data-clickable onClick={this.onButtonPress}>
          {frame}
        </button>
      );
    }

    // plain
    return (
      <div part="plain" {...commonA11y}>
        {frame}
      </div>
    );
  }
}
