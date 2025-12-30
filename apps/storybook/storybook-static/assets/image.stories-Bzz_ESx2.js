import { h as c } from './iframe-DeVSbkJr.js';
const p = {
    title: 'Uxbit/Image',
    component: 'tinto-image',
    parameters: { layout: 'centered' },
    argTypes: {
      src: { control: 'text', table: { category: 'image' } },
      alt: { control: 'text', table: { category: 'image' } },
      ratio: {
        control: { type: 'select' },
        options: ['1:1', '2:1', '3:2', '4:3', '16:9', '3:1', '1:2', '2:3', '3:4', '9:16', '1:3'],
        table: { category: 'image' },
      },
      fit: {
        control: { type: 'select' },
        options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
        table: { category: 'image' },
      },
      position: {
        control: 'text',
        description: 'object-position (예: 50% 50%, center top)',
        table: { category: 'image' },
      },
      radius: {
        control: 'text',
        description: 'border-radius (예: 8px, 50%)',
        table: { category: 'image' },
      },
      rounded: {
        control: { type: 'select' },
        options: ['soft', 'oval', 'top', 'diagonal', 'circle', 'base', 'full', 't', 'lr'],
        table: { category: 'image' },
      },
      border: {
        control: 'text',
        description: 'border 토큰 (예: 1px solid #000)',
        table: { category: 'visual' },
      },
      shadow: { control: 'text', description: 'box-shadow 토큰', table: { category: 'visual' } },
      background: {
        control: 'text',
        description: '배경색/그라디언트',
        table: { category: 'visual' },
      },
      width: { control: 'text', table: { category: 'sizing' } },
      height: { control: 'text', table: { category: 'sizing' } },
      scale: {
        control: { type: 'number', min: 0.1, max: 2, step: 0.05 },
        description: '기본 transform scale (1 = 원본)',
        table: { category: 'sizing' },
      },
      loading: {
        control: { type: 'select' },
        options: ['lazy', 'eager'],
        table: { category: 'loading' },
      },
      priority: {
        control: 'boolean',
        description: 'true일 때 fetchpriority="high" + preload',
        table: { category: 'loading' },
      },
      placeholder: {
        control: 'text',
        description: '블러/저해상도 플레이스홀더 URL',
        table: { category: 'loading' },
      },
      srcset: { control: 'text', table: { category: 'loading' } },
      sizes: { control: 'text', table: { category: 'loading' } },
      decoding: {
        control: { type: 'select' },
        options: ['async', 'sync', 'auto'],
        table: { category: 'loading' },
      },
      crossorigin: { control: 'text', table: { category: 'loading' } },
      referrerpolicy: { control: 'text', table: { category: 'loading' } },
      href: { control: 'text', table: { category: 'interactivity' } },
      target: {
        control: { type: 'select' },
        options: ['_self', '_blank', '_parent', '_top'],
        table: { category: 'interactivity' },
      },
      rel: { control: 'text', table: { category: 'interactivity' } },
      download: { control: 'text', table: { category: 'interactivity' } },
      as: {
        control: { type: 'select' },
        options: [void 0, 'button'],
        table: { category: 'interactivity' },
      },
      disabled: { control: 'boolean', table: { category: 'interactivity' } },
      animation: {
        control: { type: 'select' },
        options: ['', 'spin', 'float', 'wobble', 'pulse'],
        table: { category: 'animation' },
      },
      play: { control: 'boolean', table: { category: 'animation' } },
      rotate: {
        control: { type: 'select' },
        options: ['left', 'right'],
        table: { category: 'animation' },
      },
      duration: {
        control: { type: 'number', min: 1, max: 100 },
        description: '애니메이션 지속 시간 (초)',
        table: { category: 'animation' },
      },
      animationScale: {
        control: { type: 'number', min: 0.1, max: 2, step: 0.05 },
        description: '애니메이션 시 강제로 적용할 scale 배수',
        table: { category: 'animation' },
      },
      autoScaleThreshold: {
        control: { type: 'number', min: 0, max: 1, step: 0.05 },
        description: 'spin일 때 부모 대비 폭 비율이 이 값 이상이면 자동 축소',
        table: { category: 'animation' },
      },
      autoScaleValue: {
        control: { type: 'number', min: 0.1, max: 1, step: 0.05 },
        description: 'autoScaleThreshold 만족 시 적용될 scale 값',
        table: { category: 'animation' },
      },
      repeat: {
        control: 'text',
        description: "'infinite' 또는 숫자 (반복 횟수)",
        table: { category: 'animation' },
      },
      pauseOnHover: {
        control: 'boolean',
        description: 'hover 시 애니메이션 일시정지',
        table: { category: 'animation' },
      },
      startOnViewport: {
        control: 'boolean',
        description: '뷰포트 진입 시 애니메이션 시작',
        table: { category: 'animation' },
      },
      tintoLoaded: { action: 'tintoLoaded', table: { category: 'events' } },
      tintoError: { action: 'tintoError', table: { category: 'events' } },
      tintoPress: { action: 'tintoPress', table: { category: 'events' } },
    },
    args: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      alt: 'Random image',
      ratio: '16:9',
      fit: 'cover',
      position: '50% 50%',
      width: '300px',
      rounded: 'soft',
      animation: '',
      scale: 1,
      play: !0,
      rotate: 'right',
      duration: 20,
      repeat: 'infinite',
      pauseOnHover: !1,
      startOnViewport: !1,
      loading: 'lazy',
      priority: !1,
      disabled: !1,
    },
  },
  e = { render: (t) => c('tinto-image', { ...t }) },
  o = {
    args: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      alt: 'Image with placeholder',
      placeholder:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=45&fit=crop&blur=10',
      ratio: '16:9',
      width: '300px',
    },
  },
  a = {
    args: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      alt: 'Clickable image link',
      href: 'https://example.com',
      target: '_blank',
      ratio: '16:9',
      width: '300px',
    },
  },
  r = {
    args: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      alt: 'Button image',
      as: 'button',
      ratio: '16:9',
      width: '300px',
    },
    render: (t) => c('tinto-image', { ...t }),
  },
  i = {
    args: {
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
      alt: 'Spinning image',
      ratio: '1:1',
      width: '200px',
      animation: 'spin',
      play: !0,
      duration: 3,
      rotate: 'right',
    },
  },
  n = {
    args: {
      src: 'https://images.pexels.com/photos/3826675/pexels-photo-3826675.jpeg',
      alt: 'Auto scaled spinning image',
      ratio: '3:4',
      width: '100%',
      animation: 'spin',
      duration: 10,
      repeat: 'infinite',
      pauseOnHover: !0,
      autoScaleThreshold: 0.85,
      autoScaleValue: 0.6,
    },
  },
  s = {
    args: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      alt: 'Image with overlay',
      ratio: '16:9',
      width: '300px',
    },
    render: (t) =>
      c(
        'tinto-image',
        { ...t },
        c(
          'div',
          {
            slot: 'overlay',
            style: {
              position: 'absolute',
              right: '1rem',
              bottom: '1rem',
              padding: '0.25rem 0.5rem',
              background: 'rgba(0, 0, 0, 0.6)',
              color: '#fff',
              borderRadius: '999px',
              fontSize: '12px',
            },
          },
          'OVERLAY',
        ),
      ),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  render: props => <tinto-image {...props} />
}`,
      ...e.parameters?.docs?.source,
    },
    description: { story: '기본 이미지 스토리', ...e.parameters?.docs?.description },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    alt: 'Image with placeholder',
    placeholder: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=45&fit=crop&blur=10',
    ratio: '16:9',
    width: '300px'
  }
}`,
      ...o.parameters?.docs?.source,
    },
    description: { story: 'Placeholder 있는 버전', ...o.parameters?.docs?.description },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    alt: 'Clickable image link',
    href: 'https://example.com',
    target: '_blank',
    ratio: '16:9',
    width: '300px'
  }
}`,
      ...a.parameters?.docs?.source,
    },
    description: {
      story: '링크로 동작하는 버전 (href / target)',
      ...a.parameters?.docs?.description,
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
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    alt: 'Button image',
    as: 'button',
    ratio: '16:9',
    width: '300px'
  },
  render: props => <tinto-image {...props} />
}`,
      ...r.parameters?.docs?.source,
    },
    description: { story: '버튼 모드 (as="button")', ...r.parameters?.docs?.description },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    alt: 'Spinning image',
    ratio: '1:1',
    width: '200px',
    animation: 'spin',
    play: true,
    duration: 3,
    rotate: 'right'
  }
}`,
      ...i.parameters?.docs?.source,
    },
    description: { story: '애니메이션 예제 (spin)', ...i.parameters?.docs?.description },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    src: 'https://images.pexels.com/photos/3826675/pexels-photo-3826675.jpeg',
    alt: 'Auto scaled spinning image',
    ratio: '3:4',
    width: '100%',
    animation: 'spin',
    duration: 10,
    repeat: 'infinite',
    pauseOnHover: true,
    autoScaleThreshold: 0.85,
    autoScaleValue: 0.6
  }
}`,
      ...n.parameters?.docs?.source,
    },
    description: { story: 'Spin + auto scale demo', ...n.parameters?.docs?.description },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
    alt: 'Image with overlay',
    ratio: '16:9',
    width: '300px'
  },
  render: props => <tinto-image {...props}>
      <div slot="overlay" style={{
      position: 'absolute',
      right: '1rem',
      bottom: '1rem',
      padding: '0.25rem 0.5rem',
      background: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      borderRadius: '999px',
      fontSize: '12px'
    }}>
        OVERLAY
      </div>
    </tinto-image>
}`,
      ...s.parameters?.docs?.source,
    },
    description: { story: 'overlay 슬롯 사용 예시', ...s.parameters?.docs?.description },
  },
};
const d = [
  'Primary',
  'WithPlaceholder',
  'AsLink',
  'AsButton',
  'WithAnimation',
  'SpinAutoScale',
  'WithOverlaySlot',
];
export {
  r as AsButton,
  a as AsLink,
  e as Primary,
  n as SpinAutoScale,
  i as WithAnimation,
  s as WithOverlaySlot,
  o as WithPlaceholder,
  d as __namedExportsOrder,
  p as default,
};
