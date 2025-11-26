import { h as e } from './iframe-BsxXIOVM.js';
const a = {
    title: 'Uxbit/Section',
    component: 'tinto-section',
    parameters: { layout: 'padded' },
    args: {
      direction: 'column',
      wrap: 'nowrap',
      justify: 'flex-start',
      align: 'stretch',
      gap: '1.5rem',
      maxWidth: '960px',
      padding: '3rem 2rem',
      margin: '0 auto 3rem',
      background: '#F9FAFB',
      color: '#111827',
      radius: '24px',
      shadow: '0 20px 45px rgba(15, 23, 42, 0.12)',
      center: !0,
      heightMode: 'auto',
      scrollable: !1,
      content:
        '레이아웃 토큰(direction, gap, maxWidth, padding, heightMode 등)을 조정하면서 TintoSection이 어떻게 반응하는지 확인해 보세요.',
    },
    argTypes: {
      direction: {
        control: { type: 'inline-radio' },
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
        description: 'Flex 방향 (모바일 우선, 모든 해상도 공통)',
        table: { category: 'layout' },
      },
      wrap: {
        control: { type: 'inline-radio' },
        options: ['nowrap', 'wrap', 'wrap-reverse'],
        description: 'Flex wrap 동작',
        table: { category: 'layout' },
      },
      justify: {
        control: { type: 'select' },
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ],
        description: '주 축 정렬(가로 방향 정렬)',
        table: { category: 'layout' },
      },
      align: {
        control: { type: 'select' },
        options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
        description: '교차 축 정렬(세로 방향 정렬)',
        table: { category: 'layout' },
      },
      gap: {
        control: 'text',
        description: 'children 간 간격 (예: 16px, 1.5rem)',
        table: { category: 'layout' },
      },
      maxWidth: {
        control: 'text',
        description: '섹션 최대 너비 (예: 960px, 80ch, 100%)',
        table: { category: 'sizing' },
      },
      padding: {
        control: 'text',
        description: '내부 패딩 (예: 24px, 32px 16px)',
        table: { category: 'sizing' },
      },
      margin: {
        control: 'text',
        description: '외부 마진 (예: 0 auto, 40px 0)',
        table: { category: 'sizing' },
      },
      background: {
        control: 'color',
        description: '배경색 또는 그라디언트',
        table: { category: 'visual' },
      },
      color: { control: 'color', description: '기본 텍스트 색상', table: { category: 'visual' } },
      radius: {
        control: 'text',
        description: 'border-radius (예: 16px, 9999px)',
        table: { category: 'visual' },
      },
      shadow: { control: 'text', description: 'box-shadow 토큰', table: { category: 'visual' } },
      center: {
        control: 'boolean',
        description: 'true일 때 maxWidth + margin-inline: auto로 가운데 정렬',
        table: { category: 'behavior' },
      },
      heightMode: {
        control: { type: 'inline-radio' },
        options: ['auto', 'dvh', 'screen'],
        description: '섹션 높이 모드 (auto / 최소 100dvh / 정확히 100dvh)',
        table: { category: 'behavior' },
      },
      scrollable: {
        control: 'boolean',
        description: 'heightMode가 dvh/screen일 때 내부 스크롤 허용',
        table: { category: 'behavior' },
      },
      content: { control: 'text', description: '본문/설명 텍스트', table: { category: 'slots' } },
    },
  },
  r = {
    name: 'Primary',
    render: (t) => {
      const { content: n, ...o } = t;
      return e(
        'tinto-section',
        { ...o },
        e(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' } },
          e(
            'h2',
            { style: { fontSize: '1.5rem', fontWeight: '700' } },
            'TintoSection – Layout Playground',
          ),
          e('p', { style: { lineHeight: '1.6' } }, n),
          e(
            'div',
            {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem',
                marginTop: '1.5rem',
              },
            },
            e(
              'div',
              {
                style: {
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  fontSize: '0.875rem',
                },
              },
              'direction / gap',
              e('br', null),
              e('strong', null, '레이아웃 방향과 간격'),
              '을 바꿔보세요.',
            ),
            e(
              'div',
              {
                style: {
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  fontSize: '0.875rem',
                },
              },
              'maxWidth / center',
              e('br', null),
              e('strong', null, '컨테이너 폭과 가운데 정렬'),
              '을 테스트할 수 있습니다.',
            ),
            e(
              'div',
              {
                style: {
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(234, 179, 8, 0.08)',
                  border: '1px solid rgba(234, 179, 8, 0.4)',
                  fontSize: '0.875rem',
                },
              },
              'heightMode / scrollable',
              e('br', null),
              e('strong', null, '뷰포트 높이와 내부 스크롤'),
              ' 조합을 확인해 보세요.',
            ),
          ),
        ),
      );
    },
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  name: 'Primary',
  render: args => {
    const {
      content,
      ...rest
    } = args;
    return <tinto-section {...rest as any}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%'
      }}>
          <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700'
        }}>
            TintoSection – Layout Playground
          </h2>
          <p style={{
          lineHeight: '1.6'
        }}>{content}</p>

          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0.75rem',
          marginTop: '1.5rem'
        }}>
            <div style={{
            padding: '1rem',
            borderRadius: '0.75rem',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            fontSize: '0.875rem'
          }}>
              direction / gap
              <br />
              <strong>레이아웃 방향과 간격</strong>을 바꿔보세요.
            </div>
            <div style={{
            padding: '1rem',
            borderRadius: '0.75rem',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            fontSize: '0.875rem'
          }}>
              maxWidth / center
              <br />
              <strong>컨테이너 폭과 가운데 정렬</strong>을 테스트할 수 있습니다.
            </div>
            <div style={{
            padding: '1rem',
            borderRadius: '0.75rem',
            background: 'rgba(234, 179, 8, 0.08)',
            border: '1px solid rgba(234, 179, 8, 0.4)',
            fontSize: '0.875rem'
          }}>
              heightMode / scrollable
              <br />
              <strong>뷰포트 높이와 내부 스크롤</strong> 조합을 확인해 보세요.
            </div>
          </div>
        </div>
      </tinto-section>;
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const d = ['Primary'];
export { r as Primary, d as __namedExportsOrder, a as default };
