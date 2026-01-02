# Tabs, Pagination, Alert 컴포넌트 기획서

> **기획자**: UXBIT 디자인 시스템  
> **작성일**: 2025년  
> **우선순위**: High

---

## 1. Tabs 컴포넌트 기획

### 1.1 비즈니스 가치

- **개발 효율성**: 콘텐츠 분리 및 네비게이션 구현 시간 단축
- **사용자 경험**: 복잡한 콘텐츠를 구조화하여 정보 탐색 용이성 향상
- **재사용성**: 설정 페이지, 프로필, 상세 정보 등 다양한 시나리오에서 활용
- **일관성**: 모든 프로젝트에서 동일한 탭 인터페이스 제공

### 1.2 사용 시나리오

1. **설정 페이지**: 계정 설정, 알림 설정, 보안 설정 등
2. **상품 상세**: 상품 정보, 리뷰, Q&A, 배송 정보
3. **프로필 페이지**: 개인 정보, 주문 내역, 찜 목록
4. **대시보드**: 통계, 차트, 리포트 등 데이터 분리
5. **문서/도움말**: FAQ, 가이드, API 문서

### 1.3 기능 요구사항

#### 필수 기능

- ✅ 탭 전환 (클릭/키보드)
- ✅ 활성 탭 표시
- ✅ 콘텐츠 슬롯 기반 렌더링
- ✅ 키보드 네비게이션 (Arrow keys, Home, End)
- ✅ 접근성 (ARIA)

#### 선택 기능

- ⚠️ 스크롤 가능한 탭 (모바일)
- ⚠️ 아이콘 지원
- ⚠️ 비활성 탭
- ⚠️ 탭 추가/제거 (동적)

### 1.4 Props 설계

```typescript
// 시각/레이아웃 Props
variant: 'default' | 'underline' | 'pills' | 'enclosed'; // 탭 스타일
size: 'sm' | 'md' | 'lg'; // 탭 크기
orientation: 'horizontal' | 'vertical'; // 탭 방향
position: 'start' | 'center' | 'end'; // 탭 정렬

// 동작 Props
defaultTab: string; // 기본 활성 탭 ID
disabled: boolean; // 전체 비활성화
scrollable: boolean; // 스크롤 가능 여부 (모바일)

// 타이포 Props
textFamily: TextFamilyToken; // 폰트 패밀리
textSize: TextSizeToken; // 폰트 크기
textWeight: TextWeightToken; // 폰트 두께
```

### 1.5 Events

```typescript
tintoChange: EventEmitter<{ tabId: string; previousTabId?: string }>;
tintoTabClick: EventEmitter<{ tabId: string; event: MouseEvent }>;
```

### 1.6 Slots

```html
<tinto-tabs>
  <tinto-tab-panel tab-id="tab1" label="탭 1"> 콘텐츠 1 </tinto-tab-panel>
  <tinto-tab-panel tab-id="tab2" label="탭 2"> 콘텐츠 2 </tinto-tab-panel>
</tinto-tabs>
```

### 1.7 접근성 요구사항

- ARIA: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- 키보드: Arrow keys, Home, End, Enter/Space
- 포커스 관리: 활성 탭에 포커스
- 스크린 리더: 탭 라벨 및 상태 읽기

### 1.8 반응형 요구사항

- **모바일**: 스크롤 가능한 탭 (가로 스크롤)
- **데스크탑**: 고정 너비 또는 전체 너비
- **터치 타겟**: 최소 44x44px
- **브레이크포인트**: 기본 1920px

---

## 2. Pagination 컴포넌트 기획

### 2.1 비즈니스 가치

- **데이터 탐색**: 대량 데이터를 효율적으로 탐색
- **성능 최적화**: 필요한 데이터만 로드 (페이지네이션)
- **사용자 경험**: 명확한 현재 위치 및 네비게이션 제공
- **재사용성**: 테이블, 리스트, 검색 결과 등 다양한 시나리오

### 2.2 사용 시나리오

1. **데이터 테이블**: 사용자 목록, 주문 내역, 상품 목록
2. **검색 결과**: 검색 결과 페이지네이션
3. **게시판**: 게시글 목록
4. **앨범/갤러리**: 이미지 갤러리
5. **대시보드**: 통계 데이터 페이지네이션

### 2.3 기능 요구사항

#### 필수 기능

- ✅ 페이지 번호 표시
- ✅ 이전/다음 버튼
- ✅ 첫 페이지/마지막 페이지 이동
- ✅ 현재 페이지 표시
- ✅ 총 페이지 수 표시
- ✅ 페이지 변경 이벤트

#### 선택 기능

- ⚠️ 페이지 크기 선택 (10, 20, 50, 100)
- ⚠️ 점프 투 페이지 (입력 필드)
- ⚠️ 간단한 모드 (이전/다음만)
- ⚠️ 총 항목 수 표시

### 2.4 Props 설계

```typescript
// 시각/레이아웃 Props
variant: 'default' | 'simple' | 'compact'                // 페이지네이션 스타일
size: 'sm' | 'md' | 'lg'                                 // 버튼 크기
align: 'start' | 'center' | 'end'                       // 정렬

// 동작 Props
current: number                                           // 현재 페이지 (1부터 시작)
total: number                                            // 총 페이지 수
pageSize?: number                                        // 페이지 크기 (선택적)
showSizeChanger?: boolean                                 // 페이지 크기 선택기 표시
showQuickJumper?: boolean                                // 빠른 이동 입력 필드
showTotal?: boolean                                      // 총 항목 수 표시

// 동작 Props
disabled: boolean                                        // 비활성화
```

### 2.5 Events

```typescript
tintoChange: EventEmitter<{ page: number; pageSize?: number }>;
tintoPageSizeChange: EventEmitter<{ pageSize: number }>;
```

### 2.6 접근성 요구사항

- ARIA: `aria-label`, `aria-current="page"`
- 키보드: Tab, Enter/Space
- 스크린 리더: "페이지 X of Y" 형식
- 포커스 관리: 페이지 변경 시 포커스 유지

### 2.7 반응형 요구사항

- **모바일**: 간단한 모드 (이전/다음만) 또는 페이지 번호 축소
- **데스크탑**: 전체 페이지 번호 표시
- **터치 타겟**: 최소 44x44px
- **브레이크포인트**: 기본 1920px

---

## 3. Alert 컴포넌트 기획

### 3.1 비즈니스 가치

- **사용자 피드백**: 명확한 상태 메시지 제공
- **오류 처리**: 에러 상황을 사용자에게 명확히 전달
- **성공 확인**: 작업 완료 시 즉각적인 피드백
- **재사용성**: 폼, 작업 결과, 시스템 알림 등 다양한 시나리오

### 3.2 사용 시나리오

1. **폼 검증**: 입력 오류, 성공 메시지
2. **작업 결과**: 저장 성공, 삭제 확인
3. **시스템 알림**: 서비스 점검, 업데이트 알림
4. **경고 메시지**: 중요한 작업 전 확인
5. **정보 제공**: 도움말, 팁, 안내

### 3.3 기능 요구사항

#### 필수 기능

- ✅ 타입별 스타일 (success, error, warning, info)
- ✅ 아이콘 표시 (선택적)
- ✅ 닫기 버튼 (선택적)
- ✅ 자동 닫기 (선택적, 시간 설정)
- ✅ 접근성 (ARIA)

#### 선택 기능

- ⚠️ 액션 버튼 (확인, 취소 등)
- ⚠️ 링크 포함
- ⚠️ 애니메이션 (등장/퇴장)

### 3.4 Props 설계

```typescript
// 시각/레이아웃 Props
type: 'success' | 'error' | 'warning' | 'info'          // 알림 타입
variant: 'default' | 'filled' | 'outlined'               // 스타일 변형
size: 'sm' | 'md' | 'lg'                                 // 크기

// 동작 Props
closable: boolean                                        // 닫기 버튼 표시
autoClose: boolean                                       // 자동 닫기
closeAfter?: number                                      // 자동 닫기 시간 (ms)
showIcon: boolean                                        // 아이콘 표시

// 타이포 Props
title?: string                                           // 제목 (선택적)
textFamily: TextFamilyToken                              // 폰트 패밀리
textSize: TextSizeToken                                  // 폰트 크기
```

### 3.5 Events

```typescript
tintoClose: EventEmitter<void>;
tintoAction: EventEmitter<{ action: string }>;
```

### 3.6 Slots

```html
<tinto-alert type="success" closable>
  <div slot="title">성공</div>
  작업이 완료되었습니다.
  <div slot="action">
    <tinto-button>확인</tinto-button>
  </div>
</tinto-alert>
```

### 3.7 접근성 요구사항

- ARIA: `role="alert"` 또는 `role="status"`
- `aria-live`: 동적 콘텐츠 업데이트
- 키보드: ESC로 닫기 (closable일 때)
- 스크린 리더: 타입 및 메시지 읽기
- 색상 대비: WCAG AA 이상

### 3.8 반응형 요구사항

- **모바일**: 전체 너비, 적절한 패딩
- **데스크탑**: 최대 너비 제한 (선택적)
- **터치 타겟**: 닫기 버튼 최소 44x44px
- **브레이크포인트**: 기본 1920px

---

## 4. 구현 우선순위

### Phase 1: 핵심 기능 (필수)

1. **Tabs**: 기본 탭 전환, 키보드 네비게이션
2. **Pagination**: 기본 페이지네이션, 이전/다음
3. **Alert**: 4가지 타입, 기본 스타일

### Phase 2: 고급 기능 (선택)

1. **Tabs**: 스크롤, 아이콘, 동적 탭
2. **Pagination**: 페이지 크기 선택, 빠른 이동
3. **Alert**: 자동 닫기, 액션 버튼

---

## 5. 성공 지표

- **재사용률**: 각 컴포넌트가 3개 이상의 프로젝트에서 사용
- **접근성**: a11y 테스트 100% 통과
- **성능**: 번들 크기 각 5KB 이하
- **문서화**: Storybook 스토리 5개 이상

---

## 6. 의존성

- **Tabs**: 기존 컴포넌트 없음 (독립적)
- **Pagination**: `tinto-button` 사용
- **Alert**: `tinto-button` 사용 (액션 버튼)

---

**다음 단계**: 시니어 개발자와 협업하여 상세 설계 및 구현 시작
