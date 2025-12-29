import { Component, h, Prop, Element, Watch } from '@stencil/core';
import {
  Align,
  Color,
  FontFamily,
  FontSize,
  Variant,
  HighlightColor,
  FAMILY_MAP,
  FONT_SIZE,
  TypingUnit,
} from './typography.types';

type TypingOptions = {
  texts?: string[];
  duration?: number; // 1 ~ 10 토큰
  eraseDuration?: number; // 1 ~ 10 토큰
  loop?: boolean;
  cursor?: boolean;
  unit?: TypingUnit;
  fallbackText?: string;
  copies?: number;
};

/**
 * 슬롯 텍스트에 타이핑 애니메이션을 적용하는 내부 유틸 클래스
 * (외부에서 직접 사용하지 않음)
 */
class InternalTypingEffect {
  private el: HTMLElement;
  private texts: string[];
  private speed: number; // 실제 ms
  private eraseSpeed: number; // 실제 ms
  private loop: boolean;
  private cursor: boolean;
  private unit: TypingUnit;

  private textIndex = 0;
  private displayText = '';
  private isDeleting = false;
  private animationFrameId?: number;
  private lastUpdateTime = 0;

  constructor(element: HTMLElement, options: TypingOptions) {
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

    const clamp = (v: number) => Math.min(10, Math.max(1, v));
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

  private startTyping() {
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

@Component({
  tag: 'tinto-typography',
  styleUrl: 'typography.css',
  shadow: true,
})
export class TintoTypography {
  @Element() hostEl!: HTMLElement;

  private typingEl?: HTMLElement;
  private typingInitialized = false;
  private typingEffectInstance?: InternalTypingEffect;

  /** 출력할 HTML 태그 스타일 (시맨틱은 as로 지정 가능) */
  @Prop({ reflect: true }) variant: Variant = 'p';

  /** 시맨틱 태그 강제 (예: variant="h1" + as="h2") */
  @Prop({ reflect: true }) as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';

  /** 폰트 패밀리 preset */
  @Prop({ reflect: true }) font: FontFamily = 'system';

  /** 폰트 크기 토큰 또는 직접 값 (예: "lg", "32px", "2.5rem") */
  @Prop({ reflect: true }) fontSize?: FontSize | string;

  /** 텍스트 색상 (기본 상속) */
  @Prop({ reflect: true }) color: Color = 'inherit';

  /** 정렬 */
  @Prop({ reflect: true }) align: Align = 'left';

  /** 두께 (예: 400, 500, 700, 'bold') */
  @Prop({ reflect: true }) weight?: number | string;

  /** 인라인 여부 (기본 block) */
  @Prop({ reflect: true }) inline: boolean = false;

  /** 밑줄 여부 */
  @Prop({ reflect: true }) underline: boolean = false;

  /** 하이라이트 배경색 */
  @Prop({ reflect: true }) highlight?: HighlightColor;

  /** 텍스트 가시성 (false → hidden) */
  @Prop({ reflect: true }) visible: boolean = true;

  /** 하이퍼링크 URL (설정 시 <a>로 감쌈) */
  @Prop({ reflect: true }) href?: string;

  /** 링크 타겟 (_blank, _self, _parent, _top) */
  @Prop({ reflect: true }) target?: '_blank' | '_self' | '_parent' | '_top';

  /** 링크 rel (target이 _blank면 보안 위해 자동 보정됨) */
  @Prop({ reflect: true }) rel?: string;

  /** ===== 애니메이션 관련 Props (이름은 그대로 유지) ===== */

  /** rolling=true 이면 타이핑 애니메이션 활성화 */
  @Prop({ reflect: true }) rolling: boolean = false;

  /** (옵션) 타이핑 duration 토큰 (1~10) – 별도 typingDuration 없으면 fallback */
  @Prop({ reflect: true }) rollSpeed: number = 5;

  /** 아래 props 들은 기존 롤링용 – API 호환용으로 유지 */
  @Prop({ reflect: true }) rollAxis: 'x' | 'y' = 'x';

  /** 기본 문장 개수 (슬롯 텍스트를 몇 개로 복제할지, 기본 3개) */
  @Prop({ reflect: true }) rollClone: number = 3;

  @Prop({ reflect: true }) rollGap: string = '2rem';
  @Prop({ reflect: true }) rollPlay: boolean = true;
  @Prop({ reflect: true }) rollStartOnViewport: boolean = false;
  @Prop({ reflect: true }) pauseOnHover: boolean = false;

  /** ===== Typing 전용 Props (dataset 대신 props로 제어) ===== */

  /**
   * 타이핑에 사용할 문장 배열.
   * - 문자열 JSON: '["문장1","문장2"]'
   * - 또는 구분자 문자열: '문장1|문장2|문장3'
   * 비워두면 슬롯 텍스트를 rollClone(기본 3)만큼 복제해서 사용.
   */
  @Prop({ reflect: true }) typingTexts?: string;

  /** 개별 문자를 찍는 duration 토큰 (1~10) */
  @Prop({ reflect: true }) typingDuration?: number;

  /** 삭제 duration 토큰 (1~10, 비우면 typingDuration과 동일) */
  @Prop({ reflect: true }) typingEraseDuration?: number;

  /** 마지막까지 끝나면 다시 처음부터 반복할지 여부 */
  @Prop({ reflect: true }) typingLoop: boolean = true;

  /** 커서( | ) 표시 여부 */
  @Prop({ reflect: true }) typingCursor: boolean = true;

  /** 문자 단위 / 단어 단위 */
  @Prop({ reflect: true }) typingUnit: TypingUnit = 'char';

  /** 내부에서 렌더링할 태그 결정 */
  private resolveTag(): keyof HTMLElementTagNameMap {
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
  private computeRel(): string | undefined {
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
  private parseTypingTexts(): string[] | undefined {
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
  private buildTypingOptions(): TypingOptions {
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
  private setupTypingEffect() {
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
  private syncTypingMetrics() {
    if (!this.hostEl) return;
    if (!this.rolling) {
      this.hostEl.style.removeProperty('--typing-line-height');
      return;
    }

    let lineHeightValue: string | undefined;
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
  private applyFontSizeToken() {
    if (!this.hostEl) return;

    const style = this.hostEl.style;

    if (this.fontSize == null || String(this.fontSize).trim() === '') {
      style.removeProperty('--t-font-size');
      return;
    }

    const key = String(this.fontSize).trim();
    const tokenMap = FONT_SIZE as unknown as Record<string, string>;
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

  @Watch('fontSize')
  protected handleFontSizeChange() {
    this.applyFontSizeToken();
  }

  render() {
    const Tag = this.resolveTag();

    const style: Partial<CSSStyleDeclaration> = {
      fontFamily: FAMILY_MAP[this.font],
      color: this.color,
      textAlign: this.align,
      fontWeight: this.weight != null ? (String(this.weight) as any) : undefined,
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
    const slotNode = <slot></slot>;

    // rolling=true 이면 슬롯 텍스트를 .typing-effect span으로 감싼다
    let typedSpan: any;
    let staticTextForSR: any = null; // 스크린 리더용 정적 텍스트
    if (this.rolling) {
      // 스크린 리더용 정적 텍스트 추출 (타이핑 애니메이션과 별도로 제공)
      const staticText =
        this.parseTypingTexts()?.join(' ') || (this.hostEl.textContent || '').trim();
      if (staticText) {
        staticTextForSR = (
          <span class="sr-only" aria-live="polite">
            {staticText}
          </span>
        );
      }
      typedSpan = (
        <span
          class="typing-effect"
          ref={(el) => (this.typingEl = el as HTMLElement)}
          aria-live="polite"
          aria-atomic="true"
        >
          {slotNode}
        </span>
      );
    } else {
      typedSpan = slotNode;
    }

    // href가 있으면 링크로 감싸기 (타이핑 span은 링크 안쪽에 둔다)
    const content = this.href ? (
      <a
        part="link"
        href={this.href}
        target={this.target}
        rel={rel}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        {typedSpan}
      </a>
    ) : (
      typedSpan
    );

    return (
      <Tag
        part="root"
        class={`tinto-typography ${this.variant} ${this.rolling ? 'has-typing' : ''}`}
        style={style}
        aria-hidden={ariaHidden as any}
      >
        {staticTextForSR}
        {content}
      </Tag>
    );
  }
}
