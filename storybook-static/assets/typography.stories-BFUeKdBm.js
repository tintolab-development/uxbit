import { h as i } from './iframe-DjJ2w16v.js';
const l = ['system', 'pretendard', 'paperlogy', 'clash-display', 'climate-crisis'],
  a = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  p = ['char', 'word'],
  c = {
    title: 'Uxbit/Typography',
    component: 'tinto-typography',
    parameters: { layout: 'centered' },
    args: {
      variant: 'p',
      font: 'system',
      align: 'left',
      color: '#333',
      underline: !1,
      inline: !1,
      visible: !0,
      content: '텍스트를 입력해 주세요.',
      rolling: !1,
      rollSpeed: 5,
      rollAxis: 'x',
      rollClone: 3,
      rollGap: '2rem',
      rollPlay: !0,
      rollStartOnViewport: !1,
      pauseOnHover: !1,
      typingTexts: '',
      typingDuration: 5,
      typingEraseDuration: 3,
      typingLoop: !0,
      typingCursor: !0,
      typingUnit: 'char',
    },
    argTypes: {
      variant: { control: { type: 'select' }, options: ['h1', 'h2', 'h3', 'p', 'span'] },
      as: { control: { type: 'select' }, options: ['h1', 'h2', 'h3', 'p', 'span'] },
      font: { control: { type: 'select' }, options: l },
      fontSize: { control: { type: 'inline-radio' }, options: [...a] },
      align: { control: { type: 'inline-radio' }, options: ['left', 'center', 'right', 'justify'] },
      color: { control: 'color' },
      weight: { control: { type: 'inline-radio' }, options: ['400', '500', '600', '700', '800'] },
      inline: { control: 'boolean' },
      underline: { control: 'boolean' },
      highlight: { control: 'color' },
      visible: { control: 'boolean' },
      href: { control: 'text' },
      target: {
        control: { type: 'inline-radio' },
        options: ['_self', '_blank', '_parent', '_top'],
      },
      rel: { control: 'text', description: 'target="_blank"일 때 noopener noreferrer 자동 추가' },
      rolling: {
        control: 'boolean',
        description: 'true로 설정하면 타이핑 애니메이션이 활성화됩니다.',
      },
      rollSpeed: {
        control: { type: 'range', min: 1, max: 10, step: 1 },
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
      rollGap: { control: 'text', description: '이전 롤링용 – 현재는 사용하지 않음' },
      rollPlay: { control: 'boolean', description: '이전 롤링용 – 현재는 사용하지 않음' },
      rollStartOnViewport: {
        control: 'boolean',
        description: '이전 롤링용 – 현재는 사용하지 않음',
      },
      pauseOnHover: { control: 'boolean', description: '이전 롤링용 – 현재는 사용하지 않음' },
      typingTexts: {
        control: 'text',
        description:
          'JSON 배열 문자열 또는 "문장1|문장2|문장3" 형태. 비우면 content를 rollClone만큼 반복.',
        table: { category: 'typing' },
      },
      typingDuration: {
        control: { type: 'range', min: 1, max: 10, step: 1 },
        description: '타이핑 duration 토큰 (1: 매우 빠름 ~ 10: 매우 느림)',
        table: { category: 'typing' },
      },
      typingEraseDuration: {
        control: { type: 'range', min: 1, max: 10, step: 1 },
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
        options: p,
        description: 'char: 문자 단위, word: 단어 단위',
        table: { category: 'typing' },
      },
      content: { control: 'text', table: { category: 'slots' } },
    },
  },
  n = {
    name: 'Primary',
    render: (o) => {
      const { content: r, ...e } = o;
      return i('tinto-typography', { ...e }, r ?? '');
    },
  },
  t = {
    name: 'Rolling / Typing',
    args: {
      variant: 'p',
      font: 'pretendard',
      color: '#111827',
      align: 'left',
      rolling: !0,
      rollSpeed: 4,
      rollAxis: 'x',
      rollClone: 3,
      rollGap: '3rem',
      rollPlay: !0,
      rollStartOnViewport: !1,
      pauseOnHover: !0,
      underline: !1,
      inline: !1,
      visible: !0,
      content: '롤링 애니메이션 텍스트 – 사람들 사이에서 UXbit가 흐릅니다',
      typingTexts: '',
      typingDuration: 4,
      typingEraseDuration: 2,
      typingLoop: !0,
      typingCursor: !0,
      typingUnit: 'char',
    },
    render: (o) => {
      const { content: r, ...e } = o;
      return i('tinto-typography', { ...e }, r);
    },
  };
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  render: args => {
    const {
      content,
      ...rest
    } = args;
    return <tinto-typography {...rest as any}>{content ?? ''}</tinto-typography>;
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
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
    typingUnit: 'char'
  },
  render: args => {
    const {
      content,
      ...rest
    } = args;
    return <tinto-typography {...rest as any}>{content}</tinto-typography>;
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
const y = ['Primary', 'Rolling'];
export { n as Primary, t as Rolling, y as __namedExportsOrder, c as default };
