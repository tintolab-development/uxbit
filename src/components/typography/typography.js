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
// typography.tsx
import { Component, h, Prop, Element } from '@stencil/core';
import { FAMILY_MAP, FONT_SIZE } from './typography.types';
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
let TintoTypography = class TintoTypography {
  hostEl;
  typingEl;
  typingInitialized = false;
  /** 출력할 HTML 태그 스타일 (시맨틱은 as로 지정 가능) */
  variant = 'p';
  /** 시맨틱 태그 강제 (예: variant="h1" + as="h2") */
  as;
  /** 폰트 패밀리 preset */
  font = 'system';
  /** 폰트 크기 토큰 (지정 시 variant 프리셋 override) */
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
  /** 링크 타겟 (_blank, _self, 등) */
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
    const options = this.buildTypingOptions();
    new InternalTypingEffect(this.typingEl, options);
    this.typingInitialized = true;
  }
  componentDidLoad() {
    this.setupTypingEffect();
  }
  componentDidRender() {
    this.setupTypingEffect();
  }
  render() {
    const Tag = this.resolveTag();
    const style = {
      fontFamily: FAMILY_MAP[this.font],
      fontSize: this.fontSize ? FONT_SIZE[this.fontSize] : undefined, // 지정 없으면 variant 프리셋(clamp) 유지
      color: this.color,
      textAlign: this.align,
      fontWeight: this.weight != null ? String(this.weight) : undefined,
      display: this.inline ? 'inline' : 'block',
      textDecoration: this.underline ? 'underline' : 'none',
      backgroundColor: this.highlight,
      visibility: this.visible ? 'visible' : 'hidden', // 레이아웃 유지하며 숨김
      margin: '0',
    };
    const ariaHidden = this.visible ? null : 'true';
    const rel = this.computeRel();
    // 슬롯 + fallback 텍스트
    const slotNode = h('slot', null);
    // rolling=true 이면 슬롯 텍스트를 .typing-effect span으로 감싼다
    let typedSpan;
    if (this.rolling) {
      typedSpan = h(
        'span',
        { class: 'typing-effect', ref: (el) => (this.typingEl = el) },
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
        part: 'root',
        class: `tinto-typography ${this.variant} ${this.rolling ? 'has-typing' : ''}`,
        style: style,
        'aria-hidden': ariaHidden,
      },
      content,
    );
  }
};
__decorate([Element()], TintoTypography.prototype, 'hostEl', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'variant', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'as', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'font', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'fontSize', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'color', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'align', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'weight', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'inline', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'underline', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'highlight', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'visible', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'href', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'target', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rel', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rolling', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollSpeed', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollAxis', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollClone', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollGap', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollPlay', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'rollStartOnViewport', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'pauseOnHover', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingTexts', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingDuration', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingEraseDuration', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingLoop', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingCursor', void 0);
__decorate([Prop({ reflect: true })], TintoTypography.prototype, 'typingUnit', void 0);
TintoTypography = __decorate(
  [
    Component({
      tag: 'tinto-typography',
      styleUrl: 'typography.css',
      shadow: true,
    }),
  ],
  TintoTypography,
);
export { TintoTypography };
