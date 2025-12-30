// card.tsx
import { Component, h, Element, Prop, Event, EventEmitter } from '@stencil/core';
import type { CardVariant, CardClickDetail } from './card.types';
import type { AspectRatio } from '../image/image.types';

@Component({
  tag: 'tinto-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class TintoCard {
  @Element() el!: HTMLElement;

  /* ============================ Props ============================ */

  /** 카드 ID (선택적, 클릭 이벤트에서 사용) */
  @Prop({ reflect: true, attribute: 'card-id' }) cardId?: string;

  /** 카드 제목 (선택적, 슬롯으로도 대체 가능) */
  @Prop({ reflect: true, attribute: 'card-title' }) cardTitle?: string;

  /** 카드 설명 (선택적, 슬롯으로도 대체 가능) */
  @Prop({ reflect: true }) description?: string;

  /** 이미지 URL (선택적, 슬롯으로도 대체 가능) */
  @Prop({ reflect: true }) image?: string;

  /** 이미지 alt 텍스트 */
  @Prop({ reflect: true }) imageAlt?: string;

  /** 이미지 비율 (기본 1:1) */
  @Prop({ reflect: true, attribute: 'image-ratio' }) imageRatio: AspectRatio = '1:1';

  /** 링크 URL */
  @Prop({ reflect: true }) href?: string;

  /** 카드 variant */
  @Prop({ reflect: true }) variant: CardVariant = 'default';

  /** 카드 방향 (이미지 위치) */
  @Prop({ reflect: true }) direction: 'vertical' | 'horizontal' = 'vertical';

  /** 로딩 상태 */
  @Prop({ reflect: true }) loading: boolean = false;

  /** 클릭 가능 여부 */
  @Prop({ reflect: true }) clickable: boolean = true;

  /* ============================ 이커머스 전용 Props (선택적) ============================ */

  /** 원가 (이커머스용) */
  @Prop({ reflect: true }) originalPrice?: number;

  /** 할인가 (이커머스용) */
  @Prop({ reflect: true }) salePrice?: number;

  /** 할인율 (%) (이커머스용) */
  @Prop({ reflect: true }) discountRate?: number;

  /** 배지 텍스트 (이커머스용) */
  @Prop({ reflect: true }) badge?: string;

  /** 통화 코드 (가격 표시용, 기본 KRW) */
  @Prop({ reflect: true }) currency: string = 'KRW';

  /** 로케일 (가격 표시용, 기본 ko-KR) */
  @Prop({ reflect: true }) locale: string = 'ko-KR';

  /* ============================ Events ============================ */

  /** 카드 클릭 이벤트 */
  @Event() tintoClick!: EventEmitter<CardClickDetail>;

  /* ============================ Handlers ============================ */

  private handleClick = () => {
    if (this.loading || !this.clickable) return;

    this.tintoClick.emit({
      cardId: this.cardId,
      href: this.href,
    });

    if (this.href) {
      window.location.href = this.href;
    }
  };

  private formatPrice = (
    price: number,
    currency: string = 'KRW',
    locale: string = 'ko-KR',
  ): string => {
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

    return (
      <article
        class={`card ${this.variant} ${this.direction} ${this.loading ? 'loading' : ''} ${!this.clickable ? 'not-clickable' : ''}`}
        part="card"
        role="article"
        aria-label={this.cardTitle || 'Card'}
      >
        <CardWrapper {...wrapperProps} part="button">
          {/* 이미지 영역 */}
          {hasImage && (
            <div class="card-image-wrapper" part="image-wrapper">
              {this.image ? (
                <tinto-image
                  src={this.image}
                  alt={this.imageAlt || this.cardTitle || ''}
                  ratio={this.imageRatio}
                  loading="lazy"
                  part="image"
                />
              ) : (
                <div class="card-image-placeholder" part="image-placeholder">
                  <slot name="image" />
                </div>
              )}

              {/* 배지 */}
              {hasBadge && (
                <div class="card-badge" part="badge">
                  <slot name="badge">
                    {this.badge || (this.discountRate ? `${this.discountRate}%` : '')}
                  </slot>
                </div>
              )}
            </div>
          )}

          {/* 콘텐츠 영역 */}
          <div class="card-content" part="content">
            {/* 제목 */}
            {hasTitle && (
              <div class="card-title" part="title">
                <slot name="title">
                  {this.cardTitle && (
                    <tinto-typography variant="h3" fontSize="md" weight="600">
                      {this.cardTitle}
                    </tinto-typography>
                  )}
                </slot>
              </div>
            )}

            {/* 설명 */}
            {hasDescription && (
              <div class="card-description" part="description">
                <slot name="description">
                  {this.description && (
                    <tinto-typography variant="p" fontSize="sm" color="#666">
                      {this.description}
                    </tinto-typography>
                  )}
                </slot>
              </div>
            )}

            {/* 가격 (이커머스용) */}
            {hasPrice && (
              <div class="card-price" part="price">
                <slot name="price">
                  {hasDiscount && this.originalPrice && (
                    <tinto-typography
                      variant="span"
                      fontSize="sm"
                      color="#999"
                      style={{ textDecoration: 'line-through', marginRight: '8px' }}
                    >
                      {this.formatPrice(this.originalPrice, this.currency, this.locale)}
                    </tinto-typography>
                  )}
                  {(this.salePrice || this.originalPrice) && (
                    <tinto-typography variant="span" fontSize="lg" weight="700" color="#e74c3c">
                      {this.formatPrice(displayPrice, this.currency, this.locale)}
                    </tinto-typography>
                  )}
                </slot>
              </div>
            )}

            {/* 커스텀 콘텐츠 슬롯 */}
            <slot name="content" />
          </div>
        </CardWrapper>

        {/* 로딩 오버레이 (스켈레톤 UI 사용으로 비활성화) */}
      </article>
    );
  }
}
