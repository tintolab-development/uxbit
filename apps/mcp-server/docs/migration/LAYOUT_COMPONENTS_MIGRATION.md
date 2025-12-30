# 레이아웃 컴포넌트 마이그레이션 완료

**완료일:** 2025년 12월 30일 (KST)

## 개선된 컴포넌트 (3개)

### 1. tinto-app-route

**역할:** body 태그 하위 최상단 래퍼 태그

**개선 사항:**

- ✅ `heightMode` 기본값을 `'screen'`으로 변경 (전체 화면 차지)
- ✅ CSS에 `min-height: 100vh; min-height: 100dvh;` 추가
- ✅ body 하위 최상단 래퍼로서 전체 뷰포트를 차지하도록 개선

**변경 내용:**

```typescript
// Before
@Prop({ reflect: true, attribute: 'height-mode' }) heightMode: HeightMode = 'auto';

// After
@Prop({ reflect: true, attribute: 'height-mode' }) heightMode: HeightMode = 'screen';
```

```css
/* Before */
:host {
  display: block;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

/* After */
:host {
  display: block;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  /* body 하위 최상단 래퍼: 기본적으로 전체 뷰포트 차지 */
  min-height: 100vh;
  min-height: 100dvh;
}
```

### 2. tinto-section

**역할:** section 컴포넌트 - 크로스플랫폼 모바일 반응형 환경에서 한 섹션만 차지 (100vw, 100vh)

**개선 사항:**

- ✅ `heightMode` 기본값을 `'screen'`으로 변경 (전체 뷰포트 차지)
- ✅ CSS에 `min-height: 100vh; min-height: 100dvh;` 추가
- ✅ 한 섹션이 전체 뷰포트를 차지하도록 개선

**변경 내용:**

```typescript
// Before
@Prop({ reflect: true }) heightMode: HeightMode = 'auto';

// After
@Prop({ reflect: true }) heightMode: HeightMode = 'screen';
```

```css
/* Before */
:host {
  display: block;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  min-width: 0;
}

/* After */
:host {
  display: block;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  min-width: 0;
  /* section 컴포넌트: 기본적으로 전체 뷰포트 차지 (100vw, 100vh) */
  min-height: 100vh;
  min-height: 100dvh;
}
```

### 3. tinto-wrapper

**역할:** flexible 래퍼 컴포넌트

**검증 결과:**

- ✅ 이미 적절한 구조로 구현됨
- ✅ Flex 기반 레이아웃 지원
- ✅ 모바일/데스크탑 오버라이드 지원 (>=1920px)
- ✅ fill 모드 지원 (absolute; inset:0)
- ✅ 배경 이미지, 오버레이 등 유연한 스타일링 지원
- ✅ 문서에 명시된 대로 잘 구현됨

**현재 구조:**

- Flex 레이아웃 (모바일 기본)
- 데스크탑 오버라이드 (>=1920px)
- 배경 이미지 및 오버레이 지원
- 반응형 스타일 지원

## 전체 개선 요약

| 컴포넌트        | 역할                            | 개선 사항                                | 상태    |
| --------------- | ------------------------------- | ---------------------------------------- | ------- |
| tinto-app-route | body 하위 최상단 래퍼           | heightMode 기본값 변경, 전체 뷰포트 차지 | ✅ 완료 |
| tinto-section   | section 컴포넌트 (100vw, 100vh) | heightMode 기본값 변경, 전체 뷰포트 차지 | ✅ 완료 |
| tinto-wrapper   | flexible 래퍼                   | 구조 검증 완료 (이미 적절)               | ✅ 완료 |

## 빌드 상태

✅ 모든 컴포넌트 빌드 성공
✅ 린터 오류 없음

## 사용 예시

### tinto-app-route

```html
<!-- body 하위 최상단 래퍼 -->
<tinto-app-route>
  <!-- 앱 전체 컨텐츠 -->
</tinto-app-route>
```

### tinto-section

```html
<!-- 한 섹션이 전체 뷰포트를 차지 -->
<tinto-section>
  <!-- 섹션 컨텐츠 -->
</tinto-section>

<!-- 내용 높이만 차지하려면 -->
<tinto-section height-mode="auto">
  <!-- 섹션 컨텐츠 -->
</tinto-section>
```

### tinto-wrapper

```html
<!-- flexible 래퍼 -->
<tinto-wrapper direction="row" gap="24px">
  <!-- 컨텐츠 -->
</tinto-wrapper>

<!-- 데스크탑 오버라이드 -->
<tinto-wrapper direction="column" direction-desktop="row" gap="16px" gap-desktop="32px">
  <!-- 컨텐츠 -->
</tinto-wrapper>
```
