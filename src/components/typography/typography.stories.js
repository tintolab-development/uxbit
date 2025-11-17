import { h } from '@stencil/core';
import { FONT_FAMILY, FONT_SIZE_KEYS, TYPING_UNIT } from './typography.types';
const meta = {
  title: 'Foundation/TintoTypography',
  component: 'tinto-typography',
  parameters: {
    layout: 'centered',
  },
  args: {
    // 기본 타이포 설정
    variant: 'p',
    font: 'system',
    align: 'left',
    color: '#333',
    underline: false,
    inline: false,
    visible: true,
    content: '텍스트를 입력해 주세요.',
    // 기본 애니메이션 설정
    rolling: false,
    rollSpeed: 5, // 1~10 토큰 (typingDuration 없을 때 fallback)
    rollAxis: 'x',
    rollClone: 3,
    rollGap: '2rem',
    rollPlay: true,
    rollStartOnViewport: false,
    pauseOnHover: false,
    // Typing 기본값 (토큰)
    typingTexts: '',
    typingDuration: 5, // 1~10 (중간 정도)
    typingEraseDuration: 3, // 1~10 (조금 더 빠르게 지우기)
    typingLoop: true,
    typingCursor: true,
    typingUnit: 'char',
  },
  argTypes: {
    // ===== 기본 타입 =====
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
    // 폰트 토큰 (system / pretendard / paperlogy / clash-display / climate-crisis)
    font: {
      control: { type: 'select' },
      options: FONT_FAMILY,
    },
    // fontSize 토큰 (variant 기본 clamp 사용 시 비워두면 됨)
    fontSize: {
      control: { type: 'inline-radio' },
      options: [...FONT_SIZE_KEYS],
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right', 'justify'],
    },
    color: {
      control: 'color',
    },
    weight: {
      control: { type: 'inline-radio' },
      options: ['400', '500', '600', '700', '800'],
    },
    inline: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
    highlight: {
      control: 'color',
    },
    visible: {
      control: 'boolean',
    },
    // ===== 링크 관련 =====
    href: {
      control: 'text',
    },
    target: {
      control: { type: 'inline-radio' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    rel: {
      control: 'text',
      description: 'target="_blank"일 때 noopener noreferrer 자동 추가',
    },
    // ===== 애니메이션(rolling) 관련 =====
    rolling: {
      control: 'boolean',
      description: 'true로 설정하면 타이핑 애니메이션이 활성화됩니다.',
    },
    rollSpeed: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      description:
        'typingDuration이 비어 있을 때 사용하는 duration 토큰 (1: 매우 빠름 ~ 10: 매우 느림)',
    },
    rollAxis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y'],
      description: '이전 롤링용 – 현재는 API 호환용',
    },
    rollClone: {
      control: { type: 'number' },
      description: '슬롯 기본 문장을 몇 개로 복제할지 (기본 3개)',
    },
    rollGap: {
      control: 'text',
      description: '이전 롤링용 – 현재는 사용하지 않음',
    },
    rollPlay: {
      control: 'boolean',
      description: '이전 롤링용 – 현재는 사용하지 않음',
    },
    rollStartOnViewport: {
      control: 'boolean',
      description: '이전 롤링용 – 현재는 사용하지 않음',
    },
    pauseOnHover: {
      control: 'boolean',
      description: '이전 롤링용 – 현재는 사용하지 않음',
    },
    // ===== Typing Effect 관련 =====
    typingTexts: {
      control: 'text',
      description:
        'JSON 배열 문자열 또는 "문장1|문장2|문장3" 형태. 비우면 content를 rollClone만큼 반복.',
      table: { category: 'typing' },
    },
    typingDuration: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      description: '타이핑 duration 토큰 (1: 매우 빠름 ~ 10: 매우 느림)',
      table: { category: 'typing' },
    },
    typingEraseDuration: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      description: '삭제 duration 토큰 (기본: typingDuration과 동일)',
      table: { category: 'typing' },
    },
    typingLoop: {
      control: 'boolean',
      description: '마지막 문장 이후 다시 처음으로 루프할지',
      table: { category: 'typing' },
    },
    typingCursor: {
      control: 'boolean',
      description: '커서( | ) 표시 여부',
      table: { category: 'typing' },
    },
    typingUnit: {
      control: { type: 'inline-radio' },
      options: TYPING_UNIT,
      description: 'char: 문자 단위, word: 단어 단위',
      table: { category: 'typing' },
    },
    // ===== 슬롯 컨텐츠 =====
    content: {
      control: 'text',
      table: { category: 'slots' },
    },
  },
};
export default meta;
export const Primary = {
  name: 'Primary',
  render: (args) => {
    const { content, ...rest } = args;
    return h('tinto-typography', { ...rest }, content ?? '');
  },
};
export const Rolling = {
  name: 'Rolling / Typing',
  args: {
    variant: 'p',
    font: 'pretendard',
    color: '#111827',
    align: 'left',
    rolling: true,
    rollSpeed: 4,
    rollAxis: 'x',
    rollClone: 3,
    rollGap: '3rem',
    rollPlay: true,
    rollStartOnViewport: false,
    pauseOnHover: true,
    underline: false,
    inline: false,
    visible: true,
    content: '롤링 애니메이션 텍스트 – 사람들 사이에서 UXbit가 흐릅니다',
    typingTexts: '',
    typingDuration: 4,
    typingEraseDuration: 2,
    typingLoop: true,
    typingCursor: true,
    typingUnit: 'char',
  },
  render: (args) => {
    const { content, ...rest } = args;
    return h('tinto-typography', { ...rest }, content);
  },
};
