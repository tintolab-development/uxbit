/* eslint-env browser */
// Mock 데이터
export const mockData = {
  // 홈 화면 배너 데이터
  banners: [
    {
      id: 'banner-1',
      image: 'https://via.placeholder.com/800x450/FF6B6B/FFFFFF?text=Banner+1',
      title: '신상품 출시',
      description: '새로운 상품을 만나보세요',
      ctaText: '지금 확인하기',
      ctaLink: 'https://example.com/banner-1',
      type: 'external',
    },
    {
      id: 'banner-2',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1400&h=600&fit=crop',
      title: '특가 할인',
      description: '최대 50% 할인',
      ctaText: '할인 상품 보기',
      ctaLink: '/products/sale',
      type: 'internal',
    },
    {
      id: 'banner-3',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop',
      title: '이벤트 진행중',
      description: '선착순 100명 특별 혜택',
      ctaText: '이벤트 참여하기',
      ctaLink: 'https://example.com/event',
      type: 'external',
    },
    {
      id: 'banner-4',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400&h=600&fit=crop',
      title: '봄맞이 세일',
      description: '봄 신상품 특별 할인',
      ctaText: '세일 보기',
      ctaLink: '/products/spring-sale',
      type: 'internal',
    },
    {
      id: 'banner-5',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400&h=600&fit=crop',
      title: '프리미엄 컬렉션',
      description: '프리미엄 제품 한정 출시',
      ctaText: '컬렉션 보기',
      ctaLink: 'https://example.com/premium',
      type: 'external',
    },
    {
      id: 'banner-6',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=600&fit=crop',
      title: '무료배송 이벤트',
      description: '5만원 이상 구매 시 무료배송',
      ctaText: '지금 쇼핑하기',
      ctaLink: '/products',
      type: 'internal',
    },
    {
      id: 'banner-7',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=600&fit=crop',
      title: '주말 특가',
      description: '주말 한정 특가 상품',
      ctaText: '특가 보기',
      ctaLink: '/products/weekend-sale',
      type: 'internal',
    },
    {
      id: 'banner-8',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&h=600&fit=crop',
      title: '신규 회원 혜택',
      description: '신규 회원 10% 할인 쿠폰',
      ctaText: '회원가입하기',
      ctaLink: 'https://example.com/signup',
      type: 'external',
    },
    {
      id: 'banner-9',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1400&h=600&fit=crop',
      title: '리뷰 이벤트',
      description: '리뷰 작성 시 적립금 지급',
      ctaText: '이벤트 참여',
      ctaLink: '/events/review',
      type: 'internal',
    },
    {
      id: 'banner-10',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=600&fit=crop',
      title: '환경 친화 제품',
      description: '친환경 제품 특별 전시',
      ctaText: '전시 보기',
      ctaLink: '/products/eco-friendly',
      type: 'internal',
    },
    {
      id: 'banner-11',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1400&h=600&fit=crop',
      title: '한정 수량 특가',
      description: '한정 수량 특가 진행중',
      ctaText: '특가 상품 보기',
      ctaLink: '/products/limited',
      type: 'internal',
    },
    {
      id: 'banner-12',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1400&h=600&fit=crop',
      title: '브랜드 위크',
      description: '인기 브랜드 특별 할인',
      ctaText: '브랜드 보기',
      ctaLink: '/brands',
      type: 'internal',
    },
    {
      id: 'banner-13',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1400&h=600&fit=crop',
      title: '추천 상품',
      description: '고객이 선택한 베스트 상품',
      ctaText: '추천 상품 보기',
      ctaLink: '/products/recommended',
      type: 'internal',
    },
    {
      id: 'banner-14',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400&h=600&fit=crop',
      title: '새해 맞이 세일',
      description: '새해를 맞이하는 특별 할인',
      ctaText: '세일 보기',
      ctaLink: '/products/new-year',
      type: 'internal',
    },
    {
      id: 'banner-15',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1400&h=600&fit=crop',
      title: 'VIP 회원 혜택',
      description: 'VIP 회원 전용 특별 혜택',
      ctaText: 'VIP 혜택 보기',
      ctaLink: '/vip',
      type: 'internal',
    },
  ],

  // 검색 결과 데이터
  searchResults: {
    노트북: [
      {
        id: 'product-1',
        title: '맥북 프로 16인치',
        description: '최신 M3 프로세서 탑재',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
        price: 3500000,
        discountPrice: 3200000,
        discountRate: 9,
      },
      {
        id: 'product-2',
        title: 'LG 그램 17인치',
        description: '가벼운 무게, 강력한 성능',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
        price: 1800000,
        discountPrice: 1600000,
        discountRate: 11,
      },
      {
        id: 'product-5',
        title: '삼성 갤럭시북 프로 360',
        description: '360도 회전 가능한 2-in-1 노트북',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
        price: 2200000,
        discountPrice: 2000000,
        discountRate: 9,
      },
      {
        id: 'product-6',
        title: '레노버 ThinkPad X1 Carbon',
        description: '비즈니스용 프리미엄 노트북',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
        price: 2800000,
        discountPrice: 2500000,
        discountRate: 11,
      },
      {
        id: 'product-7',
        title: '델 XPS 15',
        description: '고성능 크리에이터 노트북',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 3200000,
        discountPrice: null,
        discountRate: 0,
      },
      {
        id: 'product-8',
        title: 'HP 엔비 x360',
        description: '터치스크린 2-in-1 노트북',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 1900000,
        discountPrice: 1700000,
        discountRate: 11,
      },
      {
        id: 'product-9',
        title: '아수스 젠북 14',
        description: '슬림하고 가벼운 울트라북',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 1600000,
        discountPrice: 1400000,
        discountRate: 13,
      },
      {
        id: 'product-10',
        title: '맥북 에어 15인치',
        description: 'M3 칩 탑재 슬림 노트북',
        image:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop+Air',
        price: 2400000,
        discountPrice: 2200000,
        discountRate: 8,
      },
      {
        id: 'product-11',
        title: 'MSI 게이밍 노트북',
        description: '고성능 게이밍 노트북',
        image: 'https://images.unsplash.com/photo-1603302576837-3756b7d0d176?w=400&h=400&fit=crop',
        price: 3800000,
        discountPrice: 3500000,
        discountRate: 8,
      },
      {
        id: 'product-12',
        title: '레이저 블레이드 15',
        description: '프리미엄 게이밍 노트북',
        image: 'https://images.unsplash.com/photo-1603302576837-3756b7d0d176?w=400&h=400&fit=crop',
        price: 4200000,
        discountPrice: 3900000,
        discountRate: 7,
      },
      {
        id: 'product-13',
        title: 'LG 울트라PC',
        description: '슬림한 디자인의 울트라북',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
        price: 1500000,
        discountPrice: 1300000,
        discountRate: 13,
      },
      {
        id: 'product-14',
        title: '아이맥 24인치',
        description: '올인원 데스크톱 컴퓨터',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 2800000,
        discountPrice: 2600000,
        discountRate: 7,
      },
      {
        id: 'product-15',
        title: '서피스 랩탑 스튜디오',
        description: '크리에이터용 고성능 노트북',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 3400000,
        discountPrice: 3100000,
        discountRate: 9,
      },
      {
        id: 'product-16',
        title: '에이서 스위프트 3',
        description: '가성비 좋은 울트라북',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
        price: 1200000,
        discountPrice: 1000000,
        discountRate: 17,
      },
      {
        id: 'product-17',
        title: '화웨이 메이트북 X Pro',
        description: '슬림한 프리미엄 노트북',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        price: 2100000,
        discountPrice: 1900000,
        discountRate: 10,
      },
    ],
    스마트폰: [
      {
        id: 'product-3',
        title: '아이폰 15 프로',
        description: '프로급 카메라 시스템',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1500000,
        discountPrice: null,
        discountRate: 0,
      },
      {
        id: 'product-18',
        title: '아이폰 15',
        description: '최신 아이폰 기본 모델',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+15',
        price: 1200000,
        discountPrice: 1100000,
        discountRate: 8,
      },
      {
        id: 'product-19',
        title: '삼성 갤럭시 S24 울트라',
        description: '최고 사양 안드로이드 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1600000,
        discountPrice: 1450000,
        discountRate: 9,
      },
      {
        id: 'product-20',
        title: '삼성 갤럭시 Z 폴드5',
        description: '접이식 폴더블 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 2200000,
        discountPrice: 2000000,
        discountRate: 9,
      },
      {
        id: 'product-21',
        title: '구글 픽셀 8 프로',
        description: 'AI 기능 강화 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1300000,
        discountPrice: 1150000,
        discountRate: 12,
      },
      {
        id: 'product-22',
        title: '원플러스 12',
        description: '고성능 플래그십 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1400000,
        discountPrice: 1250000,
        discountRate: 11,
      },
      {
        id: 'product-23',
        title: '샤오미 14 프로',
        description: '가성비 프리미엄 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1100000,
        discountPrice: 950000,
        discountRate: 14,
      },
      {
        id: 'product-24',
        title: '화웨이 P60 프로',
        description: '카메라 성능 특화 스마트폰',
        image:
          'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop+P60',
        price: 1200000,
        discountPrice: 1050000,
        discountRate: 13,
      },
      {
        id: 'product-25',
        title: '아이폰 14 프로',
        description: '이전 세대 프로 모델',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+14',
        price: 1300000,
        discountPrice: 1100000,
        discountRate: 15,
      },
      {
        id: 'product-26',
        title: '삼성 갤럭시 A54',
        description: '중급형 가성비 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 600000,
        discountPrice: 520000,
        discountRate: 13,
      },
      {
        id: 'product-27',
        title: '아이폰 SE',
        description: '컴팩트한 아이폰',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+SE',
        price: 700000,
        discountPrice: 600000,
        discountRate: 14,
      },
      {
        id: 'product-28',
        title: '삼성 갤럭시 노트',
        description: 'S펜 지원 대화면 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1500000,
        discountPrice: 1350000,
        discountRate: 10,
      },
      {
        id: 'product-29',
        title: '소니 엑스페리아 1 V',
        description: '카메라 전문가용 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 1400000,
        discountPrice: 1250000,
        discountRate: 11,
      },
      {
        id: 'product-30',
        title: '레드미 노트 13',
        description: '대용량 배터리 스마트폰',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        price: 500000,
        discountPrice: 420000,
        discountRate: 16,
      },
      {
        id: 'product-31',
        title: '아이폰 13 미니',
        description: '소형 아이폰',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+13',
        price: 900000,
        discountPrice: 750000,
        discountRate: 17,
      },
    ],
    태블릿: [
      {
        id: 'product-4',
        title: '아이패드 프로 12.9인치',
        description: 'M2 칩셋 탑재',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 1200000,
        discountPrice: 1100000,
        discountRate: 8,
      },
      {
        id: 'product-32',
        title: '아이패드 에어',
        description: 'M1 칩 탑재 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop+Air',
        price: 900000,
        discountPrice: 800000,
        discountRate: 11,
      },
      {
        id: 'product-33',
        title: '아이패드 미니',
        description: '컴팩트한 태블릿',
        image:
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop+Mini',
        price: 700000,
        discountPrice: 620000,
        discountRate: 11,
      },
      {
        id: 'product-34',
        title: '삼성 갤럭시 탭 S9 울트라',
        description: '대형 화면 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 1300000,
        discountPrice: 1150000,
        discountRate: 12,
      },
      {
        id: 'product-35',
        title: '삼성 갤럭시 탭 S9',
        description: 'S펜 지원 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 1000000,
        discountPrice: 880000,
        discountRate: 12,
      },
      {
        id: 'product-36',
        title: '레노버 탭 P12',
        description: '가성비 안드로이드 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 500000,
        discountPrice: 420000,
        discountRate: 16,
      },
      {
        id: 'product-37',
        title: '화웨이 메이트패드 프로',
        description: '프리미엄 안드로이드 태블릿',
        image:
          'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop+Tab',
        price: 800000,
        discountPrice: 700000,
        discountRate: 13,
      },
      {
        id: 'product-38',
        title: '아마존 파이어 태블릿',
        description: '저렴한 가격의 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 300000,
        discountPrice: 250000,
        discountRate: 17,
      },
      {
        id: 'product-39',
        title: '마이크로소프트 서피스 프로 9',
        description: '2-in-1 태블릿 PC',
        image:
          'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop+Pro',
        price: 1500000,
        discountPrice: 1350000,
        discountRate: 10,
      },
      {
        id: 'product-40',
        title: '아이패드 10세대',
        description: '기본형 아이패드',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop+10',
        price: 600000,
        discountPrice: 520000,
        discountRate: 13,
      },
      {
        id: 'product-41',
        title: '삼성 갤럭시 탭 A9',
        description: '경제적인 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 400000,
        discountPrice: 340000,
        discountRate: 15,
      },
      {
        id: 'product-42',
        title: '레노버 요가 탭',
        description: '스탠드 내장 태블릿',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        price: 700000,
        discountPrice: 600000,
        discountRate: 14,
      },
      {
        id: 'product-43',
        title: '아이패드 프로 11인치',
        description: '컴팩트한 프로 모델',
        image:
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop+Pro+11',
        price: 1100000,
        discountPrice: 1000000,
        discountRate: 9,
      },
      {
        id: 'product-44',
        title: '구글 픽셀 태블릿',
        description: '구글 최신 태블릿',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+Tab',
        price: 900000,
        discountPrice: 800000,
        discountRate: 11,
      },
      {
        id: 'product-45',
        title: '원플러스 패드',
        description: '프리미엄 안드로이드 태블릿',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop+Pad',
        price: 850000,
        discountPrice: 750000,
        discountRate: 12,
      },
    ],
  },

  // 인기 상품 목록 (홈 화면 기본 노출)
  popularProducts: [
    {
      id: 'product-1',
      title: '맥북 프로 16인치',
      description: '최신 M3 프로세서 탑재',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
      price: 3500000,
      discountPrice: 3200000,
      discountRate: 9,
    },
    {
      id: 'product-3',
      title: '아이폰 15 프로',
      description: '프로급 카메라 시스템',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      price: 1500000,
      discountPrice: null,
      discountRate: 0,
    },
    {
      id: 'product-4',
      title: '아이패드 프로 12.9인치',
      description: 'M2 칩셋 탑재',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      price: 1200000,
      discountPrice: 1100000,
      discountRate: 8,
    },
    {
      id: 'product-2',
      title: 'LG 그램 17인치',
      description: '가벼운 무게, 강력한 성능',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
      price: 1800000,
      discountPrice: 1600000,
      discountRate: 11,
    },
    {
      id: 'product-19',
      title: '삼성 갤럭시 S24 울트라',
      description: '최고 사양 안드로이드 스마트폰',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      price: 1600000,
      discountPrice: 1450000,
      discountRate: 9,
    },
    {
      id: 'product-5',
      title: '삼성 갤럭시북 프로 360',
      description: '360도 회전 가능한 2-in-1 노트북',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      price: 2200000,
      discountPrice: 2000000,
      discountRate: 9,
    },
    {
      id: 'product-21',
      title: '구글 픽셀 8 프로',
      description: 'AI 기능 강화 스마트폰',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      price: 1300000,
      discountPrice: 1150000,
      discountRate: 12,
    },
    {
      id: 'product-34',
      title: '삼성 갤럭시 탭 S9 울트라',
      description: '대형 화면 태블릿',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      price: 1300000,
      discountPrice: 1150000,
      discountRate: 12,
    },
    {
      id: 'product-7',
      title: '델 XPS 15',
      description: '고성능 크리에이터 노트북',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
      price: 3200000,
      discountPrice: null,
      discountRate: 0,
    },
    {
      id: 'product-20',
      title: '삼성 갤럭시 Z 폴드5',
      description: '접이식 폴더블 스마트폰',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      price: 2200000,
      discountPrice: 2000000,
      discountRate: 9,
    },
    {
      id: 'product-10',
      title: '맥북 에어 15인치',
      description: 'M3 칩 탑재 슬림 노트북',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop+Air',
      price: 2400000,
      discountPrice: 2200000,
      discountRate: 8,
    },
    {
      id: 'product-32',
      title: '아이패드 에어',
      description: 'M1 칩 탑재 태블릿',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop+Air',
      price: 900000,
      discountPrice: 800000,
      discountRate: 11,
    },
    {
      id: 'product-22',
      title: '원플러스 12',
      description: '고성능 플래그십 스마트폰',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      price: 1400000,
      discountPrice: 1250000,
      discountRate: 11,
    },
    {
      id: 'product-6',
      title: '레노버 ThinkPad X1 Carbon',
      description: '비즈니스용 프리미엄 노트북',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
      price: 2800000,
      discountPrice: 2500000,
      discountRate: 11,
    },
    {
      id: 'product-39',
      title: '마이크로소프트 서피스 프로 9',
      description: '2-in-1 태블릿 PC',
      image:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop+Pro',
      price: 1500000,
      discountPrice: 1350000,
      discountRate: 10,
    },
  ],

  // 상품 상세 데이터
  productDetails: {
    'product-1': {
      id: 'product-1',
      title: '맥북 프로 16인치',
      description:
        '최신 M3 프로세서를 탑재한 맥북 프로 16인치입니다. 강력한 성능과 뛰어난 배터리 수명을 자랑합니다.',
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
      ],
      price: 3500000,
      discountPrice: 3200000,
      discountRate: 9,
      stock: 10,
      rating: 4.5,
      reviewCount: 128,
    },
    'product-2': {
      id: 'product-2',
      title: 'LG 그램 17인치',
      description: '가벼운 무게와 강력한 성능을 갖춘 LG 그램 17인치 노트북입니다.',
      images: [
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
      ],
      price: 1800000,
      discountPrice: 1600000,
      discountRate: 11,
      stock: 5,
      rating: 4.2,
      reviewCount: 89,
    },
    'product-3': {
      id: 'product-3',
      title: '아이폰 15 프로',
      description: '프로급 카메라 시스템과 A17 프로 칩을 탑재한 최신 아이폰입니다.',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      ],
      price: 1500000,
      discountPrice: null,
      discountRate: 0,
      stock: 20,
      rating: 4.8,
      reviewCount: 256,
    },
    'product-4': {
      id: 'product-4',
      title: '아이패드 프로 12.9인치',
      description: 'M2 칩셋을 탑재한 아이패드 프로로 창작 작업에 최적화되었습니다.',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      ],
      price: 1200000,
      discountPrice: 1100000,
      discountRate: 8,
      stock: 15,
      rating: 4.6,
      reviewCount: 142,
    },
    'product-5': {
      id: 'product-5',
      title: '삼성 갤럭시북 프로 360',
      description: '360도 회전이 가능한 2-in-1 노트북으로 다양한 작업 환경에 최적화되어 있습니다.',
      images: [
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop',
      ],
      price: 2200000,
      discountPrice: 2000000,
      discountRate: 9,
      stock: 8,
      rating: 4.4,
      reviewCount: 95,
    },
    'product-6': {
      id: 'product-6',
      title: '레노버 ThinkPad X1 Carbon',
      description: '비즈니스 환경에 최적화된 프리미엄 노트북으로 내구성과 성능을 겸비했습니다.',
      images: [
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
      ],
      price: 2800000,
      discountPrice: 2500000,
      discountRate: 11,
      stock: 6,
      rating: 4.7,
      reviewCount: 112,
    },
    'product-7': {
      id: 'product-7',
      title: '델 XPS 15',
      description: '크리에이터를 위한 고성능 노트북으로 강력한 그래픽 성능을 제공합니다.',
      images: [
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop',
      ],
      price: 3200000,
      discountPrice: null,
      discountRate: 0,
      stock: 12,
      rating: 4.6,
      reviewCount: 178,
    },
    'product-19': {
      id: 'product-19',
      title: '삼성 갤럭시 S24 울트라',
      description: '최고 사양의 안드로이드 스마트폰으로 AI 기능과 카메라 성능이 뛰어납니다.',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      ],
      price: 1600000,
      discountPrice: 1450000,
      discountRate: 9,
      stock: 25,
      rating: 4.9,
      reviewCount: 342,
    },
    'product-20': {
      id: 'product-20',
      title: '삼성 갤럭시 Z 폴드5',
      description: '접이식 폴더블 스마트폰으로 큰 화면과 컴팩트한 크기를 동시에 제공합니다.',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      ],
      price: 2200000,
      discountPrice: 2000000,
      discountRate: 9,
      stock: 15,
      rating: 4.7,
      reviewCount: 198,
    },
    'product-21': {
      id: 'product-21',
      title: '구글 픽셀 8 프로',
      description: 'AI 기능이 강화된 구글의 최신 스마트폰으로 뛰어난 사진 처리 능력을 자랑합니다.',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      ],
      price: 1300000,
      discountPrice: 1150000,
      discountRate: 12,
      stock: 18,
      rating: 4.6,
      reviewCount: 167,
    },
    'product-32': {
      id: 'product-32',
      title: '아이패드 에어',
      description: 'M1 칩을 탑재한 아이패드 에어로 가벼우면서도 강력한 성능을 제공합니다.',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      ],
      price: 900000,
      discountPrice: 800000,
      discountRate: 11,
      stock: 22,
      rating: 4.5,
      reviewCount: 203,
    },
    'product-34': {
      id: 'product-34',
      title: '삼성 갤럭시 탭 S9 울트라',
      description: '대형 화면의 프리미엄 태블릿으로 멀티태스킹과 엔터테인먼트에 최적화되었습니다.',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      ],
      price: 1300000,
      discountPrice: 1150000,
      discountRate: 12,
      stock: 14,
      rating: 4.8,
      reviewCount: 189,
    },
    'product-39': {
      id: 'product-39',
      title: '마이크로소프트 서피스 프로 9',
      description: '2-in-1 태블릿 PC로 노트북과 태블릿의 장점을 모두 갖춘 제품입니다.',
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop',
      ],
      price: 1500000,
      discountPrice: 1350000,
      discountRate: 10,
      stock: 9,
      rating: 4.4,
      reviewCount: 134,
    },
    'product-10': {
      id: 'product-10',
      title: '맥북 에어 15인치',
      description: 'M3 칩을 탑재한 슬림한 맥북 에어로 휴대성과 성능의 완벽한 균형을 제공합니다.',
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
      ],
      price: 2400000,
      discountPrice: 2200000,
      discountRate: 8,
      stock: 16,
      rating: 4.6,
      reviewCount: 156,
    },
    'product-22': {
      id: 'product-22',
      title: '원플러스 12',
      description: '고성능 플래그십 스마트폰으로 빠른 충전과 뛰어난 성능을 자랑합니다.',
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      ],
      price: 1400000,
      discountPrice: 1250000,
      discountRate: 11,
      stock: 19,
      rating: 4.7,
      reviewCount: 221,
    },
  },
};

// Mock API 함수
export async function getHomeBanners() {
  // 1초 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    data: mockData.banners,
  };
}

// 인기 상품 목록 가져오기
export async function getPopularProducts() {
  // 500ms 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    data: mockData.popularProducts,
  };
}

// 검색 결과 가져오기
export async function searchProducts(query) {
  // 300ms 디바운스 후 500ms 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 500));

  const normalizedQuery = query.toLowerCase().trim();
  const results = mockData.searchResults[normalizedQuery] || [];

  return {
    success: true,
    data: results.slice(0, 10), // 최대 10개
  };
}

// 배너 상세 정보 가져오기
export async function getBannerDetail(bannerId) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const banner = mockData.banners.find((b) => b.id === bannerId);

  if (!banner) {
    return {
      success: false,
      error: 'Banner not found',
    };
  }

  return {
    success: true,
    data: banner,
  };
}

// 상품 상세 정보 가져오기
export async function getProductDetail(productId) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = mockData.productDetails[productId];

  if (!product) {
    return {
      success: false,
      error: 'Product not found',
    };
  }

  return {
    success: true,
    data: product,
  };
}

// GA4 이벤트 추적 함수 (Mock)
export function trackEvent(eventName, params = {}) {
  // 개발 환경에서는 console.log로 대체
  console.log('[GA4 Event]', eventName, params);
  // 프로덕션에서는 실제 GA4 연동
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', eventName, params);
  // }
}
