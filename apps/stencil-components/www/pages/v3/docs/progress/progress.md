# 싱글페이지 이커머스 랜딩페이지 구현 계획

본 문서는 v3/docs 내의 문서를 참고하여 싱글페이지 이커머스 랜딩페이지를 구현하기 위한 MVP 및 Phase 정의, 그리고 각 롤별로 필요한 컴포넌트를 제시합니다.

---

## 📋 현재 구현된 컴포넌트

### ✅ 기존 컴포넌트 (7개) - 구현 완료

다음 컴포넌트들은 이미 구현되어 있으며, 이커머스 랜딩페이지에서 활용 가능합니다:

- **tinto-app-route**: 페이지 레이아웃 (Safe area, Scroll snap 지원)
- **tinto-button**: 버튼 컴포넌트 (링크/폼/토글/로딩 모드)
- **tinto-carousel**: 캐러셀 컴포넌트 (프로모션 슬라이드)
- **tinto-image**: 이미지 컴포넌트 (Lazy loading, placeholder, 애니메이션)
- **tinto-section**: 섹션 컴포넌트 (Flex 레이아웃)
- **tinto-typography**: 타이포그래피 컴포넌트 (타이핑 애니메이션 지원)
- **tinto-wrapper**: 래퍼 컴포넌트 (배경 이미지, 오버레이)

### ✅ Phase 1 필수 컴포넌트 (6개) - 구현 완료

- **tinto-search-bar**: 검색바 컴포넌트
- **tinto-navigation**: 하단 내비게이션 바
- **tinto-card**: 카드 컴포넌트
- **tinto-modal**: 모달 컴포넌트
- **tinto-toast**: 토스트 메시지 컴포넌트
- **tinto-loading**: 로딩 스피너 컴포넌트

### 🔄 Phase 2 필수 컴포넌트 (4개) - 구현 필요 (다음 단계)

- **tinto-form-input**: 폼 입력 필드 컴포넌트
- **tinto-badge**: 배지 컴포넌트 (할인율, 신상품 등)
- **tinto-filter**: 필터 컴포넌트
- **tinto-sort**: 정렬 컴포넌트

---

## 🎯 MVP 정의

### MVP 목표

싱글페이지 이커머스 랜딩페이지의 핵심 기능을 최소한으로 구현하여 사용자가 상품을 탐색하고 검색할 수 있는 기본 경험을 제공합니다.

### MVP 핵심 기능

1. **홈 화면 (HOME_001)**
   - 프로모션 배너 슬라이드 (자동 재생 5초 간격)
   - 검색바 (화면 상단 15% 내 위치)
   - 하단 내비게이션 바 (홈/검색/프로필/설정)

2. **검색 화면 (SEARCH_002)**
   - 실시간 검색 (debounce 300ms)
   - 검색 결과 목록 (최대 10개)
   - 검색 결과 클릭 시 상세 페이지 이동

3. **프로모션 배너 상세 (PROMO_BANNER_003)**
   - 배너 상세 이미지
   - 설명 텍스트
   - CTA 버튼

4. **오류 처리 (ERROR_404_004)**
   - 404 오류 UI
   - 홈으로 돌아가기 버튼

### MVP 성공 지표

- 검색바 가시성: 화면 상단 15% 내 위치, 5초 이내 인식률 90%
- 프로모션 클릭률: 15% 이상
- 터치 타겟 크기: 모든 클릭 영역 44x44px 이상
- WCAG 2.1 AA 준수

---

## 📅 Phase별 구현 계획

### Phase 1: 핵심 UX 구현 (MVP)

**기간**: 4주

**목표**: 기본 이커머스 랜딩페이지 기능 구현

**주요 작업**:

1. **홈 화면 구현**
   - 프로모션 배너 슬라이드 (tinto-carousel 활용)
   - 검색바 컴포넌트 구현
   - 하단 내비게이션 바 구현
   - GA4 이벤트 연동 (`home_view`, `banner_click`)

2. **검색 화면 구현**
   - 검색 입력 필드 (실시간 자동 완성)
   - 검색 결과 리스트
   - 검색 결과 클릭 이벤트 처리
   - GA4 이벤트 연동 (`search_submit`, `search_result_view`)

3. **프로모션 배너 상세 구현**
   - 배너 상세 이미지 표시
   - 설명 텍스트 및 CTA 버튼
   - GA4 이벤트 연동

4. **오류 처리 구현**
   - 404 오류 UI
   - 홈으로 돌아가기 버튼
   - GA4 이벤트 연동 (`error_404`)

**필수 컴포넌트**: ✅ **완료**

- ✅ tinto-search-bar (검색바) - 구현 완료
- ✅ tinto-navigation (하단 내비게이션) - 구현 완료
- ✅ tinto-card (카드) - 검색 결과용, 구현 완료
- ✅ tinto-modal (상품 상세 모달) - 구현 완료
- ✅ tinto-toast (사용자 피드백) - 구현 완료
- ✅ tinto-loading (로딩 상태) - 구현 완료

**검증 항목**:

- 모든 화면 정상 연결
- 터치 타겟 크기 44x44px 이상
- GA4 이벤트 정상 기록
- 반응형 디자인 (375px, 414px, 768px)

**상태**: ✅ **Phase 1 컴포넌트 개발 완료** (페이지 구현 진행 중 또는 예정)

---

### Phase 2: 상품 탐색 및 필터링

**상태**: 🔄 **다음 단계 - 컴포넌트 개발 필요**

**기간**: 3주

**목표**: 상품 탐색 및 필터링 기능 확장

**주요 작업**:

1. **상품 목록 화면**
   - 상품 그리드 레이아웃
   - 무한 스크롤 또는 페이지네이션
   - 상품 카드 상세 정보 표시

2. **필터 및 정렬**
   - 카테고리 필터
   - 가격 범위 필터
   - 정렬 옵션 (가격, 인기순, 최신순)

3. **상품 상세 화면**
   - 상품 이미지 갤러리
   - 상품 정보 (가격, 설명, 리뷰)
   - 장바구니 추가 버튼

**필수 컴포넌트**: 🔄 **구현 필요**

- ❌ tinto-filter (필터 컴포넌트) - **구현 필요**
- ❌ tinto-sort (정렬 컴포넌트) - **구현 필요**
- ❌ tinto-badge (배지 - 할인율, 신상품 등) - **구현 필요**
- ❌ tinto-form-input (폼 입력 필드) - **구현 필요**
- ✅ tinto-modal (모달 - 상품 상세) - Phase 1에서 완료
- ✅ **가격 표시**: tinto-typography 활용 (원가/할인가 스타일링) - 기존 컴포넌트 사용

**검증 항목**:

- 필터 및 정렬 기능 정상 동작
- 상품 상세 화면 정상 표시
- 성능 최적화 (이미지 lazy loading, 무한 스크롤)

---

### Phase 3: 장바구니 및 결제 프로세스

**기간**: 3주

**목표**: 장바구니 및 결제 프로세스 구현

**주요 작업**:

1. **장바구니 기능**
   - 장바구니 아이콘 및 배지 (상품 개수 표시)
   - 장바구니 모달/사이드바
   - 수량 조절 기능
   - 상품 삭제 기능

2. **결제 프로세스**
   - 주문 정보 입력 폼
   - 결제 수단 선택
   - 주문 확인 화면

3. **주문 완료**
   - 주문 완료 화면
   - 주문 내역 확인

**필수 컴포넌트**:

- tinto-cart-icon (장바구니 아이콘)
- tinto-sidebar (장바구니 사이드바)
- tinto-form-input (폼 입력 필드)
- tinto-form-select (셀렉트 박스)

**검증 항목**:

- 장바구니 기능 정상 동작
- 결제 프로세스 완료
- 폼 유효성 검사

---

### Phase 4: 개인화 및 최적화

**기간**: 2주

**목표**: 개인화 기능 및 성능 최적화

**주요 작업**:

1. **개인화 기능**
   - 추천 상품 섹션
   - 최근 본 상품
   - 관심 상품

2. **성능 최적화**
   - 이미지 최적화 (WebP, srcset)
   - 캐시 전략 구현
   - 코드 스플리팅

3. **A/B 테스트**
   - 프로모션 배치 위치 테스트
   - 검색바 디자인 테스트

**필수 컴포넌트**: 없음 (기존 컴포넌트 조합으로 구현)

**구현 방법**:

- 추천 상품: tinto-card 조합
- 최근 본 상품: tinto-card 조합
- 관심 상품: tinto-button + 아이콘 조합

**검증 항목**:

- 개인화 기능 정상 동작
- 성능 지표 개선 (LCP, FID, CLS)
- A/B 테스트 결과 분석

---

## 👥 롤별 필요한 컴포넌트 제시

### 🎨 디자이너 관점

디자이너는 시각적 일관성과 사용자 경험을 위해 다음 컴포넌트가 필요합니다:

#### 필수 컴포넌트

1. **tinto-search-bar**
   - 검색 입력 필드
   - 검색 아이콘
   - 자동 완성 드롭다운
   - 디바운스 처리 (300ms)
   - 터치 타겟 44x44px 이상

2. **tinto-navigation**
   - 하단 내비게이션 바
   - 4개 아이콘 (홈/검색/프로필/설정)
   - 활성 상태 표시
   - 아이콘 간 간격 24px

3. **tinto-card**
   - 이미지
   - 제목
   - 설명
   - 가격 정보 (이커머스용, 선택적)
   - 배지 (선택적)
   - 터치 타겟 44x44px 이상
   - 슬롯 기반 범용 구조

4. **tinto-badge**
   - 할인율 표시
   - 신상품 표시
   - 재고 부족 표시
   - 다양한 variant (primary, secondary, danger 등)
   - **재사용성**: ⭐⭐⭐⭐⭐ (다양한 화면에서 활용)

#### 선택적 컴포넌트

5. **tinto-skeleton**
   - 로딩 상태 스켈레톤 UI
   - 상품 카드 스켈레톤
   - 검색 결과 스켈레톤
   - **재사용성**: ⭐⭐⭐⭐ (로딩 상태 공통 사용)

6. **tinto-rating**
   - 별점 표시
   - 리뷰 개수 표시
   - 읽기 전용/편집 가능 모드
   - **재사용성**: ⭐⭐⭐ (상품 상세, 리뷰 섹션)

**제거된 컴포넌트 (기존 컴포넌트로 대체 가능)**:

- ~~tinto-price~~ → **tinto-typography로 대체** (폰트 크기, 색상, 정렬 모두 지원)
- ~~tinto-divider~~ → **CSS border 또는 tinto-section의 border prop으로 대체**

---

### 📊 PM (Product Manager) 관점

PM은 비즈니스 목표 달성과 사용자 행동 분석을 위해 다음 컴포넌트가 필요합니다:

#### 필수 컴포넌트

1. **tinto-analytics** (또는 유틸리티 함수)
   - GA4 이벤트 자동 기록
   - 사용자 행동 추적
   - 이벤트 파라미터 설정
   - **재사용성**: ⭐⭐⭐⭐⭐ (모든 화면에서 필수)
   - **참고**: 컴포넌트보다는 유틸리티 함수로 구현 고려

#### 선택적 컴포넌트

2. **tinto-ab-test** (또는 유틸리티 함수)
   - A/B 테스트 그룹 분기
   - 실험 ID 관리
   - 결과 추적
   - **재사용성**: ⭐⭐⭐ (Phase 4에서 필요)
   - **참고**: 컴포넌트보다는 유틸리티 함수로 구현 고려

3. **tinto-conversion-tracking** (또는 유틸리티 함수)
   - 전환 이벤트 추적
   - 목표 달성 측정
   - 퍼널 분석
   - **재사용성**: ⭐⭐⭐ (Phase 3-4에서 필요)
   - **참고**: tinto-analytics와 통합 가능

#### 선택적 컴포넌트

4. **tinto-heatmap**
   - 사용자 클릭 히트맵
   - 스크롤 히트맵
   - 검색바 인식률 측정

5. **tinto-feedback**
   - 사용자 피드백 수집
   - 별점 평가
   - 텍스트 리뷰

---

### 🛠️ 기획자 관점

기획자는 기능 요구사항과 사용자 플로우를 위해 다음 컴포넌트가 필요합니다:

#### 필수 컴포넌트

1. **tinto-filter**
   - 카테고리 필터
   - 가격 범위 필터
   - 다중 선택 필터
   - 필터 초기화 기능

2. **tinto-sort**
   - 정렬 옵션 (가격, 인기순, 최신순)
   - 드롭다운 또는 버튼 그룹
   - 현재 정렬 상태 표시

3. **tinto-modal**
   - 상품 상세 모달
   - 장바구니 모달
   - 확인/취소 버튼
   - 배경 오버레이

4. **tinto-sidebar**
   - 장바구니 사이드바
   - 필터 사이드바
   - 슬라이드 인/아웃 애니메이션

5. **tinto-toast**
   - 성공 메시지
   - 에러 메시지
   - 정보 메시지
   - 자동 사라짐 (3초)

#### 선택적 컴포넌트

6. **tinto-tabs**
   - 상품 상세 탭 (설명, 리뷰, Q&A)
   - 카테고리 탭

7. **tinto-accordion**
   - FAQ 섹션
   - 필터 옵션 확장/축소

8. **tinto-pagination**
   - 페이지 번호 표시
   - 이전/다음 버튼
   - 무한 스크롤 옵션

---

### 💻 개발자 관점

개발자는 기술적 구현과 유지보수를 위해 다음 컴포넌트가 필요합니다:

#### 필수 컴포넌트

1. **tinto-form-input**
   - 텍스트 입력 필드
   - 유효성 검사
   - 에러 메시지 표시
   - 플레이스홀더
   - **재사용성**: ⭐⭐⭐⭐⭐ (검색, 폼 입력 등 모든 곳에서 사용)

2. **tinto-form-select**
   - 셀렉트 박스
   - 다중 선택 옵션
   - 검색 가능한 셀렉트
   - **재사용성**: ⭐⭐⭐⭐ (필터, 정렬, 폼 입력)

3. **tinto-loading**
   - 로딩 스피너
   - 로딩 오버레이
   - 스켈레톤 UI (또는 별도 tinto-skeleton)
   - **재사용성**: ⭐⭐⭐⭐⭐ (모든 비동기 작업에서 사용)

#### 선택적 컴포넌트

4. **tinto-form-checkbox**
   - 체크박스
   - 라디오 버튼
   - 스위치 토글
   - **재사용성**: ⭐⭐⭐ (필터, 폼 입력)

**제거된 컴포넌트 (유틸리티 레벨 또는 기존 컴포넌트로 대체)**:

- ~~tinto-error-boundary~~ → **JavaScript 레벨에서 처리** (컴포넌트 불필요)
- ~~tinto-lazy-load~~ → **tinto-image에 이미 lazy loading 지원**
- ~~tinto-cache~~ → **유틸리티 함수로 구현** (컴포넌트 아님)
- ~~tinto-api-client~~ → **유틸리티 함수로 구현** (컴포넌트 아님)

---

## 📝 컴포넌트 우선순위 (재사용성 기준 재정립)

### 🔴 최우선순위 (Phase 1 필수, 재사용성 ⭐⭐⭐⭐⭐)

**범용적으로 모든 화면에서 사용되는 핵심 컴포넌트**

1. **tinto-search-bar**
   - 검색 기능 핵심
   - 재사용성: ⭐⭐⭐⭐⭐ (홈, 검색 화면 필수)
   - Phase 1 필수

2. **tinto-navigation**
   - 하단 내비게이션 바
   - 재사용성: ⭐⭐⭐⭐⭐ (모든 화면에서 공통 사용)
   - Phase 1 필수

3. **tinto-card**
   - 카드 표시 필수 (범용)
   - 재사용성: ⭐⭐⭐⭐⭐ (홈, 검색, 목록 등 모든 곳)
   - Phase 1 필수

4. **tinto-modal**
   - 상품 상세, 장바구니 등 모달 표시
   - 재사용성: ⭐⭐⭐⭐⭐ (다양한 화면에서 모달 필요)
   - Phase 1 필수

5. **tinto-toast**
   - 사용자 피드백 (성공/에러/정보 메시지)
   - 재사용성: ⭐⭐⭐⭐⭐ (모든 액션에 피드백 필요)
   - Phase 1 필수

6. **tinto-loading**
   - 로딩 스피너/오버레이
   - 재사용성: ⭐⭐⭐⭐⭐ (모든 비동기 작업)
   - Phase 1 필수

### 🟡 높은 우선순위 (Phase 2-3, 재사용성 ⭐⭐⭐⭐)

**여러 화면에서 공통으로 사용되는 컴포넌트**

7. **tinto-form-input**
   - 텍스트 입력 필드
   - 재사용성: ⭐⭐⭐⭐⭐ (검색, 폼 입력 등)
   - Phase 2 필수

8. **tinto-badge**
   - 배지 표시 (할인율, 신상품 등)
   - 재사용성: ⭐⭐⭐⭐ (상품 카드, 상세 등)
   - Phase 2 필수

9. **tinto-filter**
   - 상품 필터링
   - 재사용성: ⭐⭐⭐⭐ (상품 목록, 검색 결과)
   - Phase 2 필수

10. **tinto-sort**
    - 정렬 기능
    - 재사용성: ⭐⭐⭐⭐ (상품 목록, 검색 결과)
    - Phase 2 필수

11. **tinto-sidebar**
    - 장바구니 사이드바, 필터 사이드바
    - 재사용성: ⭐⭐⭐⭐ (장바구니, 필터)
    - Phase 3 필수

12. **tinto-form-select**
    - 셀렉트 박스
    - 재사용성: ⭐⭐⭐⭐ (필터, 정렬, 폼 입력)
    - Phase 3 필수

### 🟢 중간 우선순위 (Phase 3-4, 재사용성 ⭐⭐⭐)

**특정 기능에서 사용되는 컴포넌트**

13. **tinto-cart-icon**
    - 장바구니 아이콘 및 배지
    - 재사용성: ⭐⭐⭐ (헤더/내비게이션)
    - Phase 3 필수

14. **tinto-skeleton**
    - 스켈레톤 UI
    - 재사용성: ⭐⭐⭐ (로딩 상태)
    - Phase 2 선택

15. **tinto-rating**
    - 별점 표시
    - 재사용성: ⭐⭐⭐ (상품 상세, 리뷰)
    - Phase 2 선택

16. **tinto-tabs**
    - 탭 컴포넌트
    - 재사용성: ⭐⭐⭐ (상품 상세)
    - Phase 2 선택

### 🔵 낮은 우선순위 (Phase 4 또는 선택적, 재사용성 ⭐⭐)

**특정 화면에서만 사용되거나 선택적 컴포넌트**

17. **tinto-accordion**
    - 아코디언 (FAQ 등)
    - 재사용성: ⭐⭐ (FAQ 섹션)
    - Phase 4 선택

18. **tinto-pagination**
    - 페이지네이션
    - 재사용성: ⭐⭐ (상품 목록 - 무한 스크롤 대체 가능)
    - Phase 2 선택

19. **tinto-form-checkbox**
    - 체크박스/라디오/스위치
    - 재사용성: ⭐⭐⭐ (필터, 폼)
    - Phase 2 선택

### ❌ 제거된 컴포넌트 (기존 컴포넌트 또는 유틸리티로 대체)

- ~~tinto-price~~ → **tinto-typography로 대체** (폰트 크기, 색상, 정렬 모두 지원)
- ~~tinto-divider~~ → **CSS border 또는 tinto-section의 border prop으로 대체**
- ~~tinto-error-boundary~~ → **JavaScript 레벨에서 처리** (컴포넌트 불필요)
- ~~tinto-lazy-load~~ → **tinto-image에 이미 lazy loading 지원**
- ~~tinto-cache~~ → **유틸리티 함수로 구현** (컴포넌트 아님)
- ~~tinto-api-client~~ → **유틸리티 함수로 구현** (컴포넌트 아님)
- ~~tinto-analytics~~ → **유틸리티 함수로 구현 권장** (컴포넌트보다 함수가 적합)
- ~~tinto-ab-test~~ → **유틸리티 함수로 구현 권장**
- ~~tinto-conversion-tracking~~ → **tinto-analytics와 통합 또는 유틸리티 함수**
- ~~tinto-recommendation~~ → **tinto-card 조합으로 구현**
- ~~tinto-recent-viewed~~ → **tinto-card 조합으로 구현**
- ~~tinto-favorite~~ → **tinto-button 또는 아이콘으로 구현**

---

## 🎯 최종 필수 컴포넌트 목록 (재사용성 기준)

### Phase 1 필수 (6개) - ✅ **완료**

1. ✅ tinto-search-bar
2. ✅ tinto-navigation
3. ✅ tinto-card
4. ✅ tinto-modal
5. ✅ tinto-toast
6. ✅ tinto-loading

### Phase 2 필수 (4개) - 🔄 **구현 필요 (다음 단계)**

7. ❌ tinto-form-input - **구현 필요**
8. ❌ tinto-badge - **구현 필요**
9. ❌ tinto-filter - **구현 필요**
10. ❌ tinto-sort - **구현 필요**

### Phase 3 필수 (3개)

11. tinto-sidebar
12. tinto-form-select
13. tinto-cart-icon

**총 13개 필수 컴포넌트** (기존 7개 + 신규 13개 = 총 20개 컴포넌트)

---

## 🔄 다음 단계

### ✅ Phase 1 완료

- Phase 1 필수 컴포넌트 6개 모두 구현 완료

### 🔄 Phase 2 진행 중 (다음 우선순위)

1. **Phase 2 필수 컴포넌트 개발** (4개)
   - tinto-form-input: 폼 입력 필드 컴포넌트
   - tinto-badge: 배지 컴포넌트
   - tinto-filter: 필터 컴포넌트
   - tinto-sort: 정렬 컴포넌트

2. **컴포넌트 스펙 정의**: Phase 2 컴포넌트별 상세 스펙 문서 작성

3. **디자인 시스템 통합**: 기존 디자인 토큰과의 일관성 확보

4. **테스트 계획**: Phase 2 컴포넌트 테스트 항목 정의

5. **문서화**: Phase 2 컴포넌트 사용 가이드 및 예제 작성

---

---

## 💡 컴포넌트 대체 가이드

### 가격 표시 (tinto-price → tinto-typography)

**기존 제안**: tinto-price 컴포넌트  
**대체 방안**: tinto-typography 활용

```html
<!-- 원가 + 할인가 표시 -->
<tinto-section direction="row" align="center" gap="8px">
  <!-- 원가 (취소선) -->
  <tinto-typography
    variant="span"
    fontSize="sm"
    color="#999"
    style="text-decoration: line-through;"
  >
    50,000원
  </tinto-typography>

  <!-- 할인가 -->
  <tinto-typography variant="span" fontSize="lg" weight="700" color="#e74c3c">
    35,000원
  </tinto-typography>
</tinto-section>

<!-- 통화 기호 포함 -->
<tinto-typography variant="span" fontSize="xl" weight="700"> ₩35,000 </tinto-typography>
```

**장점**:

- 기존 컴포넌트 재사용으로 일관성 유지
- 추가 컴포넌트 개발 비용 절감
- 유연한 스타일링 가능

### 구분선 (tinto-divider → CSS/tinto-section)

**기존 제안**: tinto-divider 컴포넌트  
**대체 방안**: CSS border 또는 tinto-section 활용

```html
<!-- CSS border 사용 -->
<tinto-section style="border-top: 1px solid #e0e0e0; padding-top: 24px;"> 콘텐츠 </tinto-section>

<!-- 또는 tinto-section에 border prop 추가 고려 -->
<tinto-section border="top" border-style="solid" border-color="#e0e0e0"> 콘텐츠 </tinto-section>
```

### 분석/추적 기능 (컴포넌트 → 유틸리티 함수)

**기존 제안**: tinto-analytics, tinto-ab-test 등  
**대체 방안**: 유틸리티 함수로 구현

```javascript
// utils/analytics.ts
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
}

export function trackPageView(pagePath: string) {
  trackEvent('page_view', { page_path: pagePath });
}

// 사용 예시
trackEvent('banner_click', { banner_id: '123' });
trackPageView('/home');
```

**장점**:

- 컴포넌트보다 가볍고 유연함
- 모든 컴포넌트에서 쉽게 호출 가능
- 테스트 용이

---

## 📊 최종 요약

### 컴포넌트 통계

- **기존 컴포넌트**: 7개 ✅ (tinto-app-route, tinto-button, tinto-carousel, tinto-image, tinto-section, tinto-typography, tinto-wrapper)
- **Phase 1 필수 컴포넌트**: 6개 ✅ (tinto-search-bar, tinto-navigation, tinto-card, tinto-modal, tinto-toast, tinto-loading)
- **Phase 2 필수 컴포넌트**: 4개 🔄 (tinto-form-input, tinto-badge, tinto-filter, tinto-sort) - **구현 필요**
- **Phase 3 필수 컴포넌트**: 3개 ⏳ (tinto-sidebar, tinto-form-select, tinto-cart-icon)
- **제거된 컴포넌트**: 12개 (기존 컴포넌트 또는 유틸리티로 대체)
- **총 완료된 컴포넌트**: 13개 (기존 7개 + Phase 1 필수 6개)
- **총 예정 컴포넌트**: 20개 (기존 7개 + 신규 13개)

### Phase별 개발 계획

- **Phase 1**: ✅ 6개 컴포넌트 완료 (검색바, 내비게이션, 상품 카드, 모달, 토스트, 로딩)
- **Phase 2**: 🔄 4개 컴포넌트 구현 필요 (폼 입력, 배지, 필터, 정렬) - **현재 단계**
- **Phase 3**: ⏳ 3개 컴포넌트 (사이드바, 셀렉트, 장바구니 아이콘)

### 재사용성 기준

- ⭐⭐⭐⭐⭐: 6개 (모든 화면에서 공통 사용)
- ⭐⭐⭐⭐: 7개 (여러 화면에서 사용)
- ⭐⭐⭐: 7개 (특정 기능에서 사용)

---

**마지막 업데이트**: 2024년

**작성자**: 기획자 / PM / 디자이너 협업

**검토 사항**:

- ✅ 기존 컴포넌트와의 중복 제거
- ✅ 재사용성 기준 우선순위 재정립
- ✅ 유틸리티 함수로 대체 가능한 컴포넌트 제거
- ✅ 컴포넌트 대체 가이드 추가
