import { r as registerInstance, h } from './index-CgnYPz94.js';

const loadingCss =
  ":host{display:inline-block}:host([style*='position: absolute'],:host[style*='position:absolute']){display:flex;align-items:center;justify-content:center;top:50%;left:50%;transform:translate(-50%, -50%)}:host([hidden]){display:none !important}.loading{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px}.loading.overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:var(--t-loading-overlay-bg, rgba(255, 255, 255, 0.9));backdrop-filter:blur(2px)}.spinner{display:flex;align-items:center;justify-content:center;color:var(--t-loading-color, #007bff)}.spinner svg{width:24px;height:24px}:host([size='sm']) .spinner svg{width:16px;height:16px}:host([size='lg']) .spinner svg{width:32px;height:32px}.dots{display:flex;gap:4px;align-items:center;justify-content:center}.dots span{width:8px;height:8px;border-radius:50%;background:var(--t-loading-color, #007bff);animation:dot-bounce 1.4s infinite ease-in-out both}.dots span:nth-child(1){animation-delay:-0.32s}.dots span:nth-child(2){animation-delay:-0.16s}:host([size='sm']) .dots span{width:6px;height:6px}:host([size='lg']) .dots span{width:12px;height:12px}@keyframes dot-bounce{0%,80%,100%{transform:scale(0);opacity:0.5}40%{transform:scale(1);opacity:1}}.pulse{display:flex;align-items:center;justify-content:center}.pulse span{width:24px;height:24px;border-radius:50%;background:var(--t-loading-color, #007bff);animation:pulse 1.5s infinite}:host([size='sm']) .pulse span{width:16px;height:16px}:host([size='lg']) .pulse span{width:32px;height:32px}@keyframes pulse{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:0}}.loading-text{font-size:14px;color:var(--t-loading-text-color, #666);text-align:center}:host([size='sm']) .loading-text{font-size:12px}:host([size='lg']) .loading-text{font-size:16px}@media (max-width: 375px){.spinner svg{width:20px;height:20px}:host([size='sm']) .spinner svg{width:14px;height:14px}:host([size='lg']) .spinner svg{width:28px;height:28px}.loading-text{font-size:13px}}@media (min-width: 768px){.spinner svg{width:26px;height:26px}:host([size='lg']) .spinner svg{width:36px;height:36px}}@media (prefers-reduced-motion: reduce){.spinner svg,.dots span,.pulse span{animation:none}}";

const TintoLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /* ============================ Props ============================ */
  /** 로딩 크기 */
  size = 'md';
  /** 로딩 variant */
  variant = 'spinner';
  /** 오버레이 모드 (전체 화면 오버레이) */
  overlay = false;
  /** 로딩 텍스트 */
  text;
  /** 비활성화 여부 (시각적으로 비활성화 표시) */
  disabled = false;
  /* ============================ Render ============================ */
  render() {
    return h(
      'div',
      {
        key: 'e8e6058ffcb0bacb85e294fdca84e1cf5faaf6c0',
        class: `loading ${this.overlay ? 'overlay' : ''} ${this.disabled ? 'disabled' : ''}`,
        part: 'loading',
        role: 'status',
        'aria-live': 'polite',
        'aria-disabled': this.disabled,
      },
      this.variant === 'spinner' &&
        h(
          'div',
          { key: '9baab821c7f96c82bc8f8f4ff1e2002b5cd4e93d', class: 'spinner', part: 'spinner' },
          h(
            'svg',
            {
              key: 'ca49a0f232074e7ddaf0c05c62e62c30ebde6911',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            h(
              'circle',
              {
                key: '8143847dfe9d92f15b1459bb5dcac30351a9824a',
                cx: '12',
                cy: '12',
                r: '10',
                stroke: 'currentColor',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-dasharray': '62.83',
                'stroke-dashoffset': '15.71',
              },
              h('animateTransform', {
                key: '994c6ab58b037362ab794b1e2cd6b5e7bf4b0578',
                attributeName: 'transform',
                type: 'rotate',
                values: '0 12 12;360 12 12',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
            ),
          ),
        ),
      this.variant === 'dots' &&
        h(
          'div',
          { key: '3b673120dba2351e9238ed84b634b378b32e4702', class: 'dots', part: 'dots' },
          h('span', { key: '15188d1f14e87325816ad80fe8971ea8158ca9af' }),
          h('span', { key: 'f715814de951bd9f1df8837d45eab6dce1e59a69' }),
          h('span', { key: '399328f7a7801ed9a150b195f6285563d9a166ef' }),
        ),
      this.variant === 'pulse' &&
        h(
          'div',
          { key: '55ea7fd568e8493de25def48d8172683b5444f6b', class: 'pulse', part: 'pulse' },
          h('span', { key: '759cb74441beaffc1980532fcf81ab00f870bc02' }),
        ),
      this.text &&
        h(
          'div',
          { key: '4a57e0936fa00309863afcc7938fab9e634e8858', class: 'loading-text', part: 'text' },
          this.text,
        ),
    );
  }
};
TintoLoading.style = loadingCss;

export { TintoLoading as tinto_loading };
//# sourceMappingURL=tinto-loading.entry.js.map
