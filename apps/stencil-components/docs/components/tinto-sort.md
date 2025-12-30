# tinto-sort

정렬 컴포넌트. 데이터 정렬 옵션을 제공하며, 단일 선택 및 정렬 방향(asc/desc)을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 정렬 -->
<tinto-sort
  label="정렬"
  :options='[
    {"value":"newest","label":"최신순"},
    {"value":"oldest","label":"오래된순"},
    {"value":"popular","label":"인기순"}
  ]'
/>

<!-- 정렬 방향 포함 -->
<tinto-sort
  label="정렬"
  :options='[
    {"value":"price","label":"가격","direction":"asc"},
    {"value":"name","label":"이름","direction":"desc"}
  ]'
/>

<!-- Button variant -->
<tinto-sort variant="button" label="정렬" :options="[...]" />
```

---

## Props

| Prop       | Type                                | Default     | 설명                                |
| ---------- | ----------------------------------- | ----------- | ----------------------------------- |
| `label`    | `string`                            | -           | 정렬 라벨                           |
| `variant`  | `'default' \| 'button' \| 'select'` | `'default'` | 정렬 variant                        |
| `options`  | `SortOption[] \| string`            | `[]`        | 정렬 옵션들 (JSON 문자열 또는 객체) |
| `value`    | `string`                            | `''`        | 선택된 정렬 값                      |
| `disabled` | `boolean`                           | `false`     | 비활성화 여부                       |

---

## Events

| 이벤트            | Payload            | 설명             |
| ----------------- | ------------------ | ---------------- |
| `tintoSortChange` | `SortChangeDetail` | 정렬 변경 이벤트 |

---

## 사용 예시

### Variant

```html
<tinto-sort variant="default" label="정렬" :options="[...]" />
<tinto-sort variant="button" label="정렬" :options="[...]" />
<tinto-sort variant="select" label="정렬" :options="[...]" />
```

### 정렬 옵션

```html
<tinto-sort
  label="정렬"
  :options='[
    {"value":"newest","label":"최신순"},
    {"value":"oldest","label":"오래된순"},
    {"value":"popular","label":"인기순"},
    {"value":"price-asc","label":"가격 낮은순","direction":"asc"},
    {"value":"price-desc","label":"가격 높은순","direction":"desc"}
  ]'
/>
```

### 이벤트 처리

```html
<tinto-sort id="sortComponent" label="정렬" :options="[...]" />

<script>
  const sort = document.getElementById('sortComponent');

  sort.addEventListener('tintoSortChange', (e) => {
    const { value, direction, option } = e.detail;
    console.log('정렬 변경:', value, direction);
    // 정렬 로직 실행
  });
</script>
```

---

## A11y

- 키보드 접근성 지원
- ARIA 속성 자동 설정

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
   "tinto-sort 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
