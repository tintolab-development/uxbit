# tinto-navigation

내비게이션 컴포넌트. 하단 고정 내비게이션 바를 제공하며, 아이콘, 라벨, 배지 등을 지원합니다.

---

## 빠른 시작

```html
<!-- 기본 내비게이션 -->
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home","href":"/"},
    {"id":"search","label":"검색","icon":"search","href":"/search"},
    {"id":"profile","label":"프로필","icon":"user","href":"/profile"}
  ]'
/>

<!-- 활성 아이템 지정 -->
<tinto-navigation active-id="home" :items="[...]" />

<!-- 배지 포함 -->
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home"},
    {"id":"notifications","label":"알림","icon":"bell","badge":"5"}
  ]'
/>
```

---

## Props

| Prop        | Type               | Default | 설명                   |
| ----------- | ------------------ | ------- | ---------------------- |
| `items`     | `NavigationItem[]` | `[]`    | 내비게이션 아이템 목록 |
| `active-id` | `string`           | -       | 활성 아이템 ID         |
| `fixed`     | `boolean`          | `true`  | 고정 여부 (하단 고정)  |

---

## Events

| 이벤트           | Payload                     | 설명               |
| ---------------- | --------------------------- | ------------------ |
| `tintoItemClick` | `NavigationItemClickDetail` | 아이템 클릭 이벤트 |

---

## 사용 예시

### 기본 내비게이션

```html
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home","href":"/"},
    {"id":"search","label":"검색","icon":"search","href":"/search"},
    {"id":"profile","label":"프로필","icon":"user","href":"/profile"}
  ]'
/>
```

### 활성 아이템 지정

```html
<tinto-navigation active-id="search" :items="[...]" />
```

### 배지 포함

```html
<tinto-navigation
  :items='[
    {"id":"home","label":"홈","icon":"home"},
    {"id":"notifications","label":"알림","icon":"bell","badge":"5"},
    {"id":"messages","label":"메시지","icon":"message","badge":10}
  ]'
/>
```

### 고정 해제

```html
<tinto-navigation fixed="{false}" :items="[...]" />
```

---

## A11y

- `role="navigation"` 자동 설정
- `aria-label` 자동 설정
- `aria-current="page"` 활성 아이템에 자동 설정
- 키보드 접근성 지원

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
   "tinto-navigation 컴포넌트의 품질을 평가해줘"
   ```
3. 평가 결과를 이 섹션에 업데이트
