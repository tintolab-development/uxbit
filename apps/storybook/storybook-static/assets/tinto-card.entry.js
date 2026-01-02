import { r as registerInstance, c as createEvent, g as getElement, h } from './index-CgnYPz94.js';

const cardCss =
  ":host{display:block;width:100%}:host([hidden]){display:none !important}.card{position:relative;display:flex;flex-direction:column;width:100%;background:var(--t-card-bg, #ffffff);border:var(--t-card-border, 1px solid #e0e0e0);border-radius:var(--t-card-radius, 12px);overflow:hidden;transition:transform 0.2s ease,\n    box-shadow 0.2s ease}.card.horizontal{flex-direction:row}.card:hover{transform:translateY(-2px);box-shadow:var(--t-card-hover-shadow, 0 4px 12px rgba(0, 0, 0, 0.1))}.card.loading{pointer-events:none;opacity:0.7}.card-button,.card-wrapper{all:unset;display:flex;flex-direction:column;width:100%;text-align:left;-webkit-tap-highlight-color:transparent}.card-button{cursor:pointer}.card-button:disabled{cursor:not-allowed}.card.not-clickable .card-wrapper{cursor:default}.card-image-wrapper{position:relative;width:100%;aspect-ratio:1 / 1;overflow:hidden;background:var(--t-card-image-bg, #f5f5f5);flex-shrink:0}.card-image-wrapper ::slotted([slot='image']){width:100%;height:100%;display:block;object-fit:cover}.card-image-wrapper ::slotted(tinto-image[slot='image']){width:100% !important;height:100% !important;display:block;--ti-width:100%;--ti-height:100%}.card-image-wrapper ::slotted(tinto-image[slot='image']){min-height:100%}.card.horizontal .card-image-wrapper{width:40%;max-width:200px}.card-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--t-card-image-placeholder-bg, #e0e0e0);color:var(--t-card-image-placeholder-color, #999)}.card-badge{position:absolute;top:8px;left:8px;display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:24px;padding:0 8px;font-size:12px;font-weight:600;color:var(--t-card-badge-text, #ffffff);background:var(--t-card-badge-bg, #e74c3c);border-radius:4px;z-index:1}.card-content{display:flex;flex-direction:column;gap:8px;padding:12px;flex:1;min-width:0}.card-title{margin:0;font-size:16px;font-weight:600;color:var(--t-card-title-color, #333);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-description{margin:0;font-size:14px;color:var(--t-card-desc-color, #666);line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-price{display:flex;align-items:baseline;gap:4px;margin-top:auto}.card.compact .card-content{padding:8px;gap:4px}.card.compact .card-title{font-size:14px;-webkit-line-clamp:1}.card.compact .card-price{font-size:14px}.card.detailed .card-content{padding:16px;gap:12px}.card.detailed .card-title{font-size:18px;-webkit-line-clamp:2}.card.sm .card-content{padding:8px;gap:4px}.card.sm .card-title{font-size:14px}.card.sm .card-description{font-size:12px}.card.md .card-content{padding:12px;gap:8px}.card.md .card-title{font-size:16px}.card.md .card-description{font-size:14px}.card.lg .card-content{padding:16px;gap:12px}.card.lg .card-title{font-size:18px}.card.lg .card-description{font-size:16px}.loading-overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(255, 255, 255, 0.8);z-index:10}.card.loading .card-image-wrapper::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:skeleton-loading 1.5s ease-in-out infinite;z-index:1}.card.loading .card-title::before,.card.loading .card-description::before,.card.loading .card-price::before{content:'';display:block;width:100%;height:16px;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:skeleton-loading 1.5s ease-in-out infinite;border-radius:4px}.card.loading .card-title::before{height:20px;margin-bottom:8px}.card.loading .card-description::before{height:14px;width:80%;margin-bottom:8px}.card.loading .card-price::before{height:18px;width:60%}.card.loading .card-title,.card.loading .card-description,.card.loading .card-price{color:transparent;position:relative}@keyframes skeleton-loading{0%{background-position:200% 0}100%{background-position:-200% 0}}@media (max-width: 375px){.card-content{padding:8px;gap:6px}.card-title{font-size:14px}.card-description{font-size:12px}}@media (min-width: 768px){.card-content{padding:14px;gap:10px}.card-title{font-size:17px}}@media (min-width: 1920px){.card{border-radius:var(--t-card-radius-desktop, 14px)}.card-content{padding:var(--t-card-content-py-desktop, 14px)}.card-title{font-size:var(--t-card-title-size-desktop, 17px)}}";

const TintoCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tintoClick = createEvent(this, 'tintoClick');
  }
  get el() {
    return getElement(this);
  }
  /* ============================ Props ============================ */
  /** 카드 ID (선택적, 클릭 이벤트에서 사용) */
  cardId;
  /** 카드 제목 (선택적, 슬롯으로도 대체 가능) */
  cardTitle;
  /** 카드 설명 (선택적, 슬롯으로도 대체 가능) */
  description;
  /** 이미지 URL (선택적, 슬롯으로도 대체 가능) */
  image;
  /** 이미지 alt 텍스트 */
  imageAlt;
  /** 이미지 비율 (기본 1:1) */
  imageRatio = '1:1';
  /** 링크 URL */
  href;
  /** 카드 variant */
  variant = 'default';
  /** 카드 크기 */
  size = 'md';
  /** 카드 방향 (이미지 위치) */
  direction = 'vertical';
  /** 로딩 상태 */
  loading = false;
  /** 클릭 가능 여부 */
  clickable = true;
  /* ============================ 이커머스 전용 Props (선택적) ============================ */
  /** 원가 (이커머스용) */
  originalPrice;
  /** 할인가 (이커머스용) */
  salePrice;
  /** 할인율 (%) (이커머스용) */
  discountRate;
  /** 배지 텍스트 (이커머스용) */
  badge;
  /** 통화 코드 (가격 표시용, 기본 KRW) */
  currency = 'KRW';
  /** 로케일 (가격 표시용, 기본 ko-KR) */
  locale = 'ko-KR';
  /* ============================ Events ============================ */
  /** 카드 클릭 이벤트 */
  tintoClick;
  /* ============================ Handlers ============================ */
  handleClick = () => {
    if (this.loading || !this.clickable) return;
    this.tintoClick.emit({
      cardId: this.cardId,
      href: this.href,
    });
    if (this.href) {
      window.location.href = this.href;
    }
  };
  formatPrice = (price, currency = 'KRW', locale = 'ko-KR') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(price);
  };
  /* ============================ Render ============================ */
  render() {
    const hasImage = this.image || this.el.querySelector('[slot="image"]');
    const hasTitle = this.cardTitle || this.el.querySelector('[slot="title"]');
    const hasDescription = this.description || this.el.querySelector('[slot="description"]');
    const hasPrice =
      this.salePrice || this.originalPrice || this.el.querySelector('[slot="price"]');
    const hasBadge = this.badge || this.discountRate || this.el.querySelector('[slot="badge"]');
    const hasDiscount = this.salePrice && this.originalPrice && this.salePrice < this.originalPrice;
    const displayPrice = this.salePrice || this.originalPrice || 0;
    const CardWrapper = this.clickable ? 'button' : 'div';
    const wrapperProps = this.clickable
      ? {
          type: 'button',
          disabled: this.loading,
          onClick: this.handleClick,
          class: 'card-button',
        }
      : {
          class: 'card-wrapper',
        };
    return h(
      'article',
      {
        key: '21bea614123771f19e26b28949a54c17235fcaf6',
        class: `card ${this.variant} ${this.size} ${this.direction} ${this.loading ? 'loading' : ''} ${!this.clickable ? 'not-clickable' : ''}`,
        part: 'card',
        role: 'article',
        'aria-label': this.cardTitle || 'Card',
      },
      h(
        CardWrapper,
        { key: '7db984c2df84a412c86ec132e018172f4be7483c', ...wrapperProps, part: 'button' },
        hasImage &&
          h(
            'div',
            {
              key: 'ef9362f6c8a58fb12d8080f334fffbba7c1770e6',
              class: 'card-image-wrapper',
              part: 'image-wrapper',
            },
            this.image
              ? h('tinto-image', {
                  src: this.image,
                  alt: this.imageAlt || this.cardTitle || '',
                  ratio: this.imageRatio,
                  loading: 'lazy',
                  part: 'image',
                })
              : h(
                  'div',
                  { class: 'card-image-placeholder', part: 'image-placeholder' },
                  h('slot', { name: 'image' }),
                ),
            hasBadge &&
              h(
                'div',
                {
                  key: '17c98c8ae0bca67ab92ebc485635204072684561',
                  class: 'card-badge',
                  part: 'badge',
                },
                h(
                  'slot',
                  { key: '01d4c6d23754f0ec9412593f734b18c927d85482', name: 'badge' },
                  this.badge || (this.discountRate ? `${this.discountRate}%` : ''),
                ),
              ),
          ),
        h(
          'div',
          {
            key: '643ab2137f7c91947758e0b99c546d1ff108b999',
            class: 'card-content',
            part: 'content',
          },
          hasTitle &&
            h(
              'div',
              {
                key: 'ad5964b893a41bc140ade9e236a4724726bf8ca7',
                class: 'card-title',
                part: 'title',
              },
              h(
                'slot',
                { key: '6ce42f67a48d7ea3d804e17e301381911b73ab9c', name: 'title' },
                this.cardTitle &&
                  h(
                    'tinto-typography',
                    {
                      key: 'bbc774b5010b24c1289503256a5af70811ccd466',
                      variant: 'h3',
                      fontSize: 'md',
                      weight: '600',
                    },
                    this.cardTitle,
                  ),
              ),
            ),
          hasDescription &&
            h(
              'div',
              {
                key: '18d048f5f4590f537b07aab01d7005c5130e161a',
                class: 'card-description',
                part: 'description',
              },
              h(
                'slot',
                { key: 'd1e2fd82f7f35706e2c0a9da227903256fcd3c24', name: 'description' },
                this.description &&
                  h(
                    'tinto-typography',
                    {
                      key: '1023bde2b35f4a0622aac8d27467769acb02357b',
                      variant: 'p',
                      fontSize: 'sm',
                      color: '#666',
                    },
                    this.description,
                  ),
              ),
            ),
          hasPrice &&
            h(
              'div',
              {
                key: '1b61c919bdaacdb8666efca35c3922878426ceda',
                class: 'card-price',
                part: 'price',
              },
              h(
                'slot',
                { key: '11e5c8ec73ecc375583f775ffb9446cc817df0cf', name: 'price' },
                hasDiscount &&
                  this.originalPrice &&
                  h(
                    'tinto-typography',
                    {
                      key: '6503888a4e19bd7e984521dd23e0270acfb92cd3',
                      variant: 'span',
                      fontSize: 'sm',
                      color: '#999',
                      style: { textDecoration: 'line-through', marginRight: '8px' },
                    },
                    this.formatPrice(this.originalPrice, this.currency, this.locale),
                  ),
                (this.salePrice || this.originalPrice) &&
                  h(
                    'tinto-typography',
                    {
                      key: '3618b75d03733a570cdedd5bc8bacf1739986a40',
                      variant: 'span',
                      fontSize: 'lg',
                      weight: '700',
                      color: '#e74c3c',
                    },
                    this.formatPrice(displayPrice, this.currency, this.locale),
                  ),
              ),
            ),
          h('slot', { key: 'a4e68cfedc5c6556099b7cbed190d224bed2a7fa', name: 'content' }),
        ),
      ),
    );
  }
};
TintoCard.style = cardCss;

export { TintoCard as tinto_card };
//# sourceMappingURL=tinto-card.entry.js.map
