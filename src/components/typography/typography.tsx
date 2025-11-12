// typography.tsx
import { Component, h, Prop } from '@stencil/core';
import { Align, Color, FontFamily, FontSize, Variant, HighlightColor, FAMILY_MAP, FONT_SIZE } from './typography.types';

@Component({
  tag: 'tinto-typography',
  styleUrl: 'typography.css',
  shadow: true,
})
export class TintoTypography {
  /** 출력할 HTML 태그 스타일 (시맨틱은 as로 지정 가능) */
  @Prop({ reflect: true }) variant: Variant = 'p';

  /** 시맨틱 태그 강제 (예: variant="h1" + as="h2") */
  @Prop({ reflect: true }) as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';

  /** 폰트 패밀리 preset */
  @Prop({ reflect: true }) font: FontFamily = 'system' as FontFamily;

  /** 폰트 크기 토큰 (지정 시 variant 프리셋 override) */
  @Prop({ reflect: true }) fontSize?: FontSize;

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

  /** 링크 타겟 (_blank, _self, 등) */
  @Prop({ reflect: true }) target?: '_blank' | '_self' | '_parent' | '_top';

  /** 링크 rel (target이 _blank면 보안 위해 자동 보정됨) */
  @Prop({ reflect: true }) rel?: string;

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
      const parts = new Set((baseRel ? baseRel.split(/\s+/) : []).concat(['noopener', 'noreferrer']));
      return Array.from(parts).join(' ');
    }
    return baseRel || undefined;
  }

  render() {
    const Tag = this.resolveTag();

    const style: Partial<CSSStyleDeclaration> = {
      fontFamily: FAMILY_MAP[this.font],
      fontSize: this.fontSize ? FONT_SIZE[this.fontSize] : undefined, // 지정 없으면 variant 프리셋(clamp) 유지
      color: this.color,
      textAlign: this.align,
      fontWeight: this.weight != null ? (String(this.weight) as any) : undefined,
      display: this.inline ? 'inline' : 'block',
      textDecoration: this.underline ? 'underline' : 'none',
      backgroundColor: this.highlight,
      visibility: this.visible ? 'visible' : 'hidden', // 레이아웃 유지하며 숨김
      margin: '0',
    };

    const content = <slot></slot>;

    const rel = this.computeRel();
    const inner = this.href ? (
      <a
        part="link"
        href={this.href}
        target={this.target}
        rel={rel}
        // 링크 색/밑줄은 부모에서 승계
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        {content}
      </a>
    ) : (
      content
    );

    // 보조 접근성: hidden일 때는 스크린리더에도 숨김
    const ariaHidden = this.visible ? null : 'true';

    return (
      <Tag part="root" class={`tinto-typography ${this.variant}`} style={style} aria-hidden={ariaHidden as any}>
        {inner}
      </Tag>
    );
  }
}
