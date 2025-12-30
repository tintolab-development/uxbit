# tinto-search-bar

검색바 컴포넌트. 검색어 입력 및 자동 완성 기능을 제공합니다. 디바운스 처리 및 결과 목록 표시를 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 검색바 -->
<tinto-search-bar placeholder="검색어를 입력하세요" />

<!-- 자동 완성 포함 -->
<tinto-search-bar
  placeholder="검색..."
  :results='[
    {"id":"1","title":"검색 결과 1","description":"설명"},
    {"id":"2","title":"검색 결과 2"}
  ]'
/>

<!-- 로딩 상태 -->
<tinto-search-bar placeholder="검색..." loading />
```

---

## Props

### 시각/레이아웃

| Prop          | Type                                 | Default     | 설명                |
| ------------- | ------------------------------------ | ----------- | ------------------- |
| `size`        | `'sm' \| 'md' \| 'lg'`               | `'md'`      | 검색바 크기         |
| `variant`     | `'default' \| 'outline' \| 'filled'` | `'default'` | 검색바 variant      |
| `placeholder` | `string`                             | `''`        | 플레이스홀더 텍스트 |

### 동작/상태

| Prop          | Type             | Default | 설명                          |
| ------------- | ---------------- | ------- | ----------------------------- |
| `value`       | `string`         | `''`    | 검색어 값                     |
| `autofocus`   | `boolean`        | `false` | 자동 포커스 여부              |
| `disabled`    | `boolean`        | `false` | 비활성화 여부                 |
| `loading`     | `boolean`        | `false` | 로딩 상태                     |
| `debounce`    | `number`         | `300`   | 디바운스 시간 (ms)            |
| `min-length`  | `number`         | `2`     | 자동 완성 활성화 최소 글자 수 |
| `max-results` | `number`         | `10`    | 최대 결과 개수                |
| `results`     | `SearchResult[]` | `[]`    | 자동 완성 결과 목록           |

---

## Events

| 이벤트             | Payload                   | 설명                                        |
| ------------------ | ------------------------- | ------------------------------------------- |
| `tintoInput`       | `string`                  | 검색어 입력 이벤트 (디바운스 후)            |
| `tintoSubmit`      | `SearchSubmitDetail`      | 검색 제출 이벤트 (엔터 또는 검색 버튼 클릭) |
| `tintoResultClick` | `SearchResultClickDetail` | 검색 결과 클릭 이벤트                       |

---

## Methods

| Method    | 설명                   |
| --------- | ---------------------- |
| `focus()` | 검색바에 포커스 설정   |
| `blur()`  | 검색바에서 포커스 제거 |
| `clear()` | 검색어 초기화          |

---

## 사용 예시

### Variant

```html
<tinto-search-bar variant="default" placeholder="Default" />
<tinto-search-bar variant="outline" placeholder="Outline" />
<tinto-search-bar variant="filled" placeholder="Filled" />
```

### Size

```html
<tinto-search-bar size="sm" placeholder="Small" />
<tinto-search-bar size="md" placeholder="Medium" />
<tinto-search-bar size="lg" placeholder="Large" />
```

### 자동 완성

```html
<tinto-search-bar
  placeholder="검색..."
  :results='[
    {"id":"1","title":"검색 결과 1","description":"설명 1"},
    {"id":"2","title":"검색 결과 2","description":"설명 2"}
  ]'
/>
```

### 이벤트 처리

```html
<tinto-search-bar id="searchBar" placeholder="검색..." />

<script>
  const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('tintoInput', (e) => {
    console.log('검색어:', e.detail);
    // API 호출 등
  });

  searchBar.addEventListener('tintoSubmit', (e) => {
    console.log('검색 제출:', e.detail);
  });

  searchBar.addEventListener('tintoResultClick', (e) => {
    console.log('결과 클릭:', e.detail);
  });
</script>
```

---

## A11y

- 적절한 ARIA 속성 자동 설정
- 키보드 접근성 지원 (화살표 키로 결과 목록 탐색)
- 검색 결과에 대한 접근성 피드백 제공

---

## 품질 평가

> 💡 **참고**: MCP 서버의 `evaluate_component_quality` 도구를 사용하여 평가 결과를 생성하세요.  
> 평가 후 이 섹션을 실제 결과로 업데이트하세요.

### 평가 결과

**평가일**: (평가 실행 후 업데이트)  
**종합 점수**: (평가 실행 후 업데이트)  
**등급**: (평가 실행 후 업데이트)

#### 점수 상세

| 지표                   | 점수  | 가중치   | 가중 점수 |
| ---------------------- | ----- | -------- | --------- |
| 일관성 (Consistency)   | -     | 25%      | -         |
| 재사용성 (Reusability) | -     | 20%      | -         |
| 완성도 (Completeness)  | -     | 20%      | -         |
| 성능 (Performance)     | -     | 15%      | -         |
| 사용성 (Usability)     | -     | 15%      | -         |
| 표준 준수 (Standards)  | -     | 5%       | -         |
| **종합**               | **-** | **100%** | **-**     |

#### 개선 제안

(평가 실행 후 업데이트)

### 평가 방법

1. Cursor에서 MCP 서버가 실행 중인지 확인
2. 다음 명령 실행:
   ```
   "tinto-search-bar 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
