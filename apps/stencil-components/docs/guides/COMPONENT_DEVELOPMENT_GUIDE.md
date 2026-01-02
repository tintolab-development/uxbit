# 컴포넌트 개발 가이드

> **목적**: Stencil 컴포넌트 개발 시 발생할 수 있는 일반적인 오류를 방지하고, 일관된 개발 패턴을 유지하기 위한 가이드

---

## 🚨 주요 주의사항

### 1. 무한 루프 방지

#### ❌ 잘못된 예시

```typescript
render() {
  // render()에서 직접 prop 변경 → 무한 루프 발생!
  this.tabPanels.forEach((panel) => {
    panel.active = panel.tabId === this.activeTabId; // ❌
  });

  return <div>...</div>;
}
```

#### ✅ 올바른 예시

```typescript
// Lifecycle 메서드에서만 prop 변경
componentDidLoad() {
  this.collectTabPanels();
}

componentDidUpdate() {
  // 조건부 업데이트로 무한 루프 방지
  const currentPanels = Array.from(this.el.querySelectorAll('tinto-tab-panel'));
  if (currentPanels.length !== this.tabPanels.length) {
    this.collectTabPanels();
  }
}

render() {
  // render()에서는 읽기만 수행
  return <div>...</div>;
}
```

**규칙**:

- ✅ `render()` 메서드에서는 **읽기만** 수행
- ✅ Prop 변경은 `componentDidLoad()`, `componentDidUpdate()` 등 Lifecycle 메서드에서만 수행
- ✅ `componentDidUpdate()`에서는 **조건부 업데이트** 필수

---

### 2. Shadow DOM과 자식 요소 접근

#### ❌ 잘못된 예시

```typescript
@Component({
  tag: 'tinto-tabs',
  shadow: true, // Shadow DOM 사용
})
export class TintoTabs {
  render() {
    // Shadow DOM 내부에서 querySelectorAll은 slot 내부 요소를 찾지 못함
    const panels = this.el.querySelectorAll('tinto-tab-panel'); // ❌
    return <div>...</div>;
  }
}
```

#### ✅ 올바른 예시

```typescript
@Component({
  tag: 'tinto-tabs',
  shadow: true,
})
export class TintoTintoTabs {
  @State() private tabPanels: HTMLTintoTabPanelElement[] = [];

  componentDidLoad() {
    // componentDidLoad에서 수집 (DOM이 완전히 렌더링된 후)
    this.tabPanels = Array.from(this.el.querySelectorAll('tinto-tab-panel'));
  }

  render() {
    // render()에서는 수집된 데이터 사용
    return this.tabPanels.map(panel => ...);
  }
}
```

**규칙**:

- ✅ Shadow DOM 사용 시 자식 요소는 `componentDidLoad()`에서 수집
- ✅ `render()`에서는 수집된 데이터만 사용
- ✅ Slot 내부 요소는 부모 컴포넌트에서 `querySelectorAll`로 접근 가능 (Shadow DOM 외부)

---

### 3. State 업데이트 패턴

#### ❌ 잘못된 예시

```typescript
render() {
  // render()에서 State 직접 변경 → 무한 루프
  if (!this.activeTabId) {
    this.activeTabId = 'tab1'; // ❌
  }
  return <div>...</div>;
}
```

#### ✅ 올바른 예시

```typescript
componentWillLoad() {
  // 초기화는 componentWillLoad에서
  if (!this.activeTabId) {
    this.activeTabId = 'tab1';
  }
}

componentDidLoad() {
  // DOM 접근이 필요한 경우 componentDidLoad에서
  this.collectTabPanels();
}

render() {
  // render()에서는 읽기만
  return <div>{this.activeTabId}</div>;
}
```

**규칙**:

- ✅ 초기화: `componentWillLoad()`
- ✅ DOM 접근: `componentDidLoad()`
- ✅ 업데이트: `componentDidUpdate()` (조건부)
- ✅ `render()`: 읽기 전용

---

### 4. 조건부 업데이트 패턴

#### ❌ 잘못된 예시

```typescript
componentDidUpdate() {
  // 항상 업데이트 → 무한 루프 위험
  this.collectTabPanels(); // ❌
}
```

#### ✅ 올바른 예시

```typescript
componentDidUpdate() {
  // 변경 감지 후 조건부 업데이트
  const currentPanels = Array.from(this.el.querySelectorAll('tinto-tab-panel'));

  // 패널 개수가 변경된 경우에만 재수집
  if (currentPanels.length !== this.tabPanels.length) {
    this.collectTabPanels();
  } else {
    // 개수가 같으면 상태만 업데이트
    this.tabPanels.forEach((panel) => {
      panel.active = panel.tabId === this.activeTabId;
    });
  }
}
```

**규칙**:

- ✅ `componentDidUpdate()`에서는 **변경 감지** 필수
- ✅ 실제 변경이 있을 때만 업데이트 수행
- ✅ 불필요한 재렌더링 방지

---

## 📋 개발 체크리스트

컴포넌트 개발 시 다음 항목을 확인하세요:

### Lifecycle 메서드

- [ ] `render()`에서 prop/state 변경하지 않음
- [ ] `componentWillLoad()`에서 초기화 수행
- [ ] `componentDidLoad()`에서 DOM 접근 수행
- [ ] `componentDidUpdate()`에서 조건부 업데이트 수행

### Shadow DOM

- [ ] Shadow DOM 사용 시 자식 요소는 `componentDidLoad()`에서 수집
- [ ] `render()`에서는 수집된 데이터만 사용
- [ ] Slot 내부 요소 접근 방법 확인

### State 관리

- [ ] State 변경은 Lifecycle 메서드에서만 수행
- [ ] `componentDidUpdate()`에서 무한 루프 방지 로직 포함
- [ ] 변경 감지 후 조건부 업데이트

### 테스트

- [ ] 컴포넌트 마운트 시 정상 렌더링 확인
- [ ] Props 변경 시 무한 루프 없음 확인
- [ ] 자식 요소 동적 추가/제거 시 정상 작동 확인

---

## 🔍 디버깅 팁

### 무한 루프 감지

```typescript
componentDidUpdate() {
  console.log('componentDidUpdate 호출됨'); // 디버깅용
  // 조건부 업데이트 로직
}
```

브라우저 콘솔에서 반복적으로 로그가 출력되면 무한 루프 가능성 확인

### Shadow DOM 디버깅

```typescript
componentDidLoad() {
  console.log('자식 요소:', this.el.querySelectorAll('tinto-tab-panel')); // 디버깅용
  this.collectTabPanels();
}
```

---

## 📚 참고 자료

- [Stencil Lifecycle Methods](https://stenciljs.com/docs/component-lifecycle)
- [Shadow DOM Best Practices](https://stenciljs.com/docs/shadow-dom)
- [State Management](https://stenciljs.com/docs/state)

---

**마지막 업데이트**: 2025년
