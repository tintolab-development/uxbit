import { h as t } from './iframe-DeVSbkJr.js';
const h = {
    title: 'Uxbit/Carousel',
    component: 'tinto-carousel',
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: {
          component:
            '터치/스와이프 슬라이드가 가능한 Carousel 컴포넌트. 네비게이션 버튼, 인디케이터, 자동 재생 등을 지원합니다.',
        },
      },
    },
    argTypes: {
      current: {
        control: { type: 'number', min: 0 },
        description: '현재 슬라이드 인덱스 (0부터 시작)',
        table: { category: 'state' },
      },
      showNavigation: {
        control: 'boolean',
        description: '네비게이션 버튼 표시',
        table: { category: 'navigation' },
      },
      navigationPosition: {
        control: 'select',
        options: ['inside', 'outside', 'overlay'],
        description: '네비게이션 버튼 위치',
        table: { category: 'navigation' },
      },
      navigationStyle: {
        control: 'select',
        options: ['circle', 'arrow', 'text'],
        description: '네비게이션 버튼 스타일',
        table: { category: 'navigation' },
      },
      navigationDisplay: {
        control: 'select',
        options: ['always', 'hover', 'auto'],
        description: '네비게이션 버튼 표시 조건',
        table: { category: 'navigation' },
      },
      showIndicator: {
        control: 'boolean',
        description: '인디케이터 표시',
        table: { category: 'indicator' },
      },
      indicatorType: {
        control: 'select',
        options: ['dot', 'bar', 'number'],
        description: '인디케이터 타입',
        table: { category: 'indicator' },
      },
      indicatorPosition: {
        control: 'select',
        options: ['bottom', 'top', 'left', 'right'],
        description: '인디케이터 위치',
        table: { category: 'indicator' },
      },
      autoplay: { control: 'boolean', description: '자동 재생', table: { category: 'behavior' } },
      autoplayInterval: {
        control: { type: 'number', min: 1e3, step: 500 },
        description: '자동 재생 간격 (ms)',
        table: { category: 'behavior' },
      },
      loop: { control: 'boolean', description: '무한 루프', table: { category: 'behavior' } },
      slidesPerView: {
        control: { type: 'number', min: 1, max: 5 },
        description: '한 번에 표시할 슬라이드 개수',
        table: { category: 'layout' },
      },
      spaceBetween: {
        control: 'text',
        description: '슬라이드 간격',
        table: { category: 'layout' },
      },
      transition: {
        control: 'select',
        options: ['slide', 'fade'],
        description: '전환 효과',
        table: { category: 'animation' },
      },
      transitionDuration: {
        control: { type: 'number', min: 100, max: 1e3, step: 50 },
        description: '전환 시간 (ms)',
        table: { category: 'animation' },
      },
      touchEnabled: {
        control: 'boolean',
        description: '터치 활성화',
        table: { category: 'behavior' },
      },
    },
  },
  i = (o = 3) => {
    const n = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    return Array.from({ length: o }, (y, d) => {
      const g = n[d % n.length];
      return t(
        'div',
        {
          style: {
            width: '100%',
            height: '400px',
            background: g,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: '700',
          },
        },
        'Slide ',
        d + 1,
      );
    });
  },
  u = () =>
    [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80',
    ].map((n) => t('tinto-image', { src: n, 'aspect-ratio': '16:9', fit: 'cover', radius: '0' })),
  a = {
    args: {
      showNavigation: !0,
      navigationPosition: 'overlay',
      navigationStyle: 'circle',
      navigationDisplay: 'hover',
      showIndicator: !0,
      indicatorType: 'dot',
      indicatorPosition: 'bottom',
      autoplay: !1,
      loop: !1,
      slidesPerView: 1,
      spaceBetween: '16px',
      transition: 'slide',
      transitionDuration: 300,
      touchEnabled: !0,
    },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          current: o.current,
          'show-navigation': o.showNavigation,
          'navigation-position': o.navigationPosition,
          'navigation-style': o.navigationStyle,
          'navigation-display': o.navigationDisplay,
          'show-indicator': o.showIndicator,
          'indicator-type': o.indicatorType,
          'indicator-position': o.indicatorPosition,
          autoplay: o.autoplay,
          'autoplay-interval': o.autoplayInterval,
          loop: o.loop,
          'slides-per-view': o.slidesPerView,
          'space-between': o.spaceBetween,
          transition: o.transition,
          'transition-duration': o.transitionDuration,
          'touch-enabled': o.touchEnabled,
        },
        i(3),
      ),
  },
  e = {
    args: { ...a.args },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          'show-navigation': o.showNavigation,
          'navigation-position': o.navigationPosition,
          'show-indicator': o.showIndicator,
          'indicator-type': o.indicatorType,
          autoplay: o.autoplay,
          loop: o.loop,
        },
        u(),
      ),
  },
  r = {
    args: { ...a.args, autoplay: !0, autoplayInterval: 3e3, loop: !0 },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          autoplay: o.autoplay,
          'autoplay-interval': o.autoplayInterval,
          loop: o.loop,
          'show-navigation': o.showNavigation,
          'show-indicator': o.showIndicator,
        },
        i(5),
      ),
  },
  s = {
    args: { ...a.args, slidesPerView: 3, spaceBetween: '24px' },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          'slides-per-view': o.slidesPerView,
          'space-between': o.spaceBetween,
          'show-navigation': o.showNavigation,
          'show-indicator': o.showIndicator,
        },
        i(6),
      ),
  },
  c = {
    args: { ...a.args, transition: 'fade', transitionDuration: 500 },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          transition: o.transition,
          'transition-duration': o.transitionDuration,
          'show-navigation': o.showNavigation,
          'show-indicator': o.showIndicator,
        },
        i(3),
      ),
  },
  l = {
    args: { ...a.args, indicatorType: 'number' },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          'indicator-type': o.indicatorType,
          'show-navigation': o.showNavigation,
          'show-indicator': o.showIndicator,
        },
        i(5),
      ),
  },
  p = {
    args: { ...a.args, navigationDisplay: 'always' },
    render: (o) =>
      t(
        'tinto-carousel',
        {
          'navigation-display': o.navigationDisplay,
          'show-navigation': o.showNavigation,
          'show-indicator': o.showIndicator,
        },
        i(3),
      ),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    showNavigation: true,
    navigationPosition: 'overlay',
    navigationStyle: 'circle',
    navigationDisplay: 'hover',
    showIndicator: true,
    indicatorType: 'dot',
    indicatorPosition: 'bottom',
    autoplay: false,
    loop: false,
    slidesPerView: 1,
    spaceBetween: '16px',
    transition: 'slide',
    transitionDuration: 300,
    touchEnabled: true
  },
  render: args => <tinto-carousel current={args.current} show-navigation={args.showNavigation} navigation-position={args.navigationPosition} navigation-style={args.navigationStyle} navigation-display={args.navigationDisplay} show-indicator={args.showIndicator} indicator-type={args.indicatorType} indicator-position={args.indicatorPosition} autoplay={args.autoplay} autoplay-interval={args.autoplayInterval} loop={args.loop} slides-per-view={args.slidesPerView} space-between={args.spaceBetween} transition={args.transition} transition-duration={args.transitionDuration} touch-enabled={args.touchEnabled}>
      {createSlides(3)}
    </tinto-carousel>
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args
  },
  render: args => <tinto-carousel show-navigation={args.showNavigation} navigation-position={args.navigationPosition} show-indicator={args.showIndicator} indicator-type={args.indicatorType} autoplay={args.autoplay} loop={args.loop}>
      {createImageSlides()}
    </tinto-carousel>
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args,
    autoplay: true,
    autoplayInterval: 3000,
    loop: true
  },
  render: args => <tinto-carousel autoplay={args.autoplay} autoplay-interval={args.autoplayInterval} loop={args.loop} show-navigation={args.showNavigation} show-indicator={args.showIndicator}>
      {createSlides(5)}
    </tinto-carousel>
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args,
    slidesPerView: 3,
    spaceBetween: '24px'
  },
  render: args => <tinto-carousel slides-per-view={args.slidesPerView} space-between={args.spaceBetween} show-navigation={args.showNavigation} show-indicator={args.showIndicator}>
      {createSlides(6)}
    </tinto-carousel>
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args,
    transition: 'fade',
    transitionDuration: 500
  },
  render: args => <tinto-carousel transition={args.transition} transition-duration={args.transitionDuration} show-navigation={args.showNavigation} show-indicator={args.showIndicator}>
      {createSlides(3)}
    </tinto-carousel>
}`,
      ...c.parameters?.docs?.source,
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args,
    indicatorType: 'number'
  },
  render: args => <tinto-carousel indicator-type={args.indicatorType} show-navigation={args.showNavigation} show-indicator={args.showIndicator}>
      {createSlides(5)}
    </tinto-carousel>
}`,
      ...l.parameters?.docs?.source,
    },
  },
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...Default.args,
    navigationDisplay: 'always'
  },
  render: args => <tinto-carousel navigation-display={args.navigationDisplay} show-navigation={args.showNavigation} show-indicator={args.showIndicator}>
      {createSlides(3)}
    </tinto-carousel>
}`,
      ...p.parameters?.docs?.source,
    },
  },
};
const v = [
  'Default',
  'WithImages',
  'Autoplay',
  'MultipleSlides',
  'FadeTransition',
  'NumberIndicator',
  'NavigationAlways',
];
export {
  r as Autoplay,
  a as Default,
  c as FadeTransition,
  s as MultipleSlides,
  p as NavigationAlways,
  l as NumberIndicator,
  e as WithImages,
  v as __namedExportsOrder,
  h as default,
};
