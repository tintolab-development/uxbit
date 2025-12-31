# Cursor에서 MCP 서버 테스트 가이드

## 사전 확인

### 1. Cursor 설정 확인

설정 파일 위치:

```
~/Library/Application Support/Cursor/User/globalStorage/rooveterinaryinc.roo-cline/settings/cline_mcp_settings.json
```

설정 내용 확인:

```json
{
  "mcpServers": {
    "uxbit": {
      "command": "node",
      "args": ["/Users/tintolab/Desktop/uxbit/apps/mcp-server/dist/index.js"]
    }
  }
}
```

**중요:** 경로가 정확한지 확인하세요!

### 2. Cursor 재시작

- Cursor를 완전히 종료
- 다시 시작
- MCP 서버 연결 확인

---

## 테스트 시나리오

### 기본 기능 테스트

#### 1. 컴포넌트 목록 조회

**요청:**

```
UXBIT 컴포넌트 목록을 보여줘
```

**또는:**

```
List all UXBIT components
```

**예상 결과:**

- JSON 형식으로 컴포넌트 목록 반환
- 17개 컴포넌트 포함
- 각 컴포넌트의 태그명, 설명, Props/Events/Methods 개수

**확인 사항:**

- [ ] 목록이 반환되는가?
- [ ] 모든 컴포넌트가 포함되어 있는가?
- [ ] 정보가 정확한가?

---

#### 2. 컴포넌트 검색

**요청:**

```
버튼 컴포넌트를 검색해줘
```

**또는:**

```
Search for button components in UXBIT
```

**예상 결과:**

- `tinto-button` 컴포넌트가 검색 결과에 포함
- 컴포넌트 정보 반환

**확인 사항:**

- [ ] 검색 결과가 반환되는가?
- [ ] `tinto-button`이 포함되어 있는가?
- [ ] 검색 결과가 정확한가?

---

#### 3. 컴포넌트 상세 정보

**요청:**

```
tinto-button 컴포넌트의 상세 정보를 알려줘
```

**또는:**

```
Get detailed information about tinto-button component
```

**예상 결과:**

- Props 목록 (타입, 기본값, 설명)
- Events 목록
- Methods 목록
- 문서 내용

**확인 사항:**

- [ ] 상세 정보가 반환되는가?
- [ ] Props 정보가 정확한가?
- [ ] Events 정보가 정확한가?
- [ ] 문서가 포함되어 있는가?

---

#### 4. Props 검색

**요청:**

```
variant prop을 가진 컴포넌트를 찾아줘
```

**또는:**

```
Find components that have a "variant" prop
```

**예상 결과:**

- `variant` prop을 가진 모든 컴포넌트 목록
- 각 컴포넌트의 해당 prop 정보

**확인 사항:**

- [ ] 검색 결과가 반환되는가?
- [ ] `variant` prop을 가진 컴포넌트들이 포함되어 있는가?
- [ ] prop 정보가 정확한가?

---

#### 5. Events 검색

**요청:**

```
click 이벤트를 발생시키는 컴포넌트를 찾아줘
```

**또는:**

```
Find components that emit "click" events
```

**예상 결과:**

- click 관련 이벤트를 가진 컴포넌트 목록
- 각 컴포넌트의 이벤트 정보

**확인 사항:**

- [ ] 검색 결과가 반환되는가?
- [ ] click 이벤트를 가진 컴포넌트들이 포함되어 있는가?
- [ ] 이벤트 정보가 정확한가?

---

#### 6. Methods 검색

**요청:**

```
show 메서드를 가진 컴포넌트를 찾아줘
```

**또는:**

```
Find components that have a "show" method
```

**예상 결과:**

- `show` 메서드를 가진 컴포넌트 목록
- 각 컴포넌트의 메서드 정보

**확인 사항:**

- [ ] 검색 결과가 반환되는가?
- [ ] `show` 메서드를 가진 컴포넌트들이 포함되어 있는가?
- [ ] 메서드 정보가 정확한가?

---

#### 7. 통계 정보

**요청:**

```
UXBIT 컴포넌트 라이브러리 통계를 보여줘
```

**또는:**

```
Get statistics about UXBIT component library
```

**예상 결과:**

- 전체 컴포넌트 수 (17개)
- Props/Events/Methods 통계
- 가장 많이 사용되는 Props
- 성능 메트릭

**확인 사항:**

- [ ] 통계 정보가 반환되는가?
- [ ] 통계가 정확한가?
- [ ] 성능 메트릭이 포함되어 있는가?

---

#### 8. 헬스 체크

**요청:**

```
서버 상태를 확인해줘
```

**또는:**

```
Check the health status of the MCP server
```

**예상 결과:**

- 상태: "healthy" | "degraded" | "unhealthy"
- 파일 접근성 체크
- 캐시 상태
- 성능 메트릭
- 메모리 사용량

**확인 사항:**

- [ ] 헬스 체크 결과가 반환되는가?
- [ ] 상태가 "healthy"인가?
- [ ] 모든 파일이 접근 가능한가?

---

### 에러 처리 테스트

#### 9. 존재하지 않는 컴포넌트

**요청:**

```
존재하지않는-컴포넌트의 정보를 알려줘
```

**또는:**

```
Get information about non-existent-component
```

**예상 결과:**

- 명확한 에러 메시지
- "Component not found" 또는 유사한 메시지

**확인 사항:**

- [ ] 에러 메시지가 반환되는가?
- [ ] 메시지가 명확한가?

---

#### 10. 잘못된 파라미터

**요청:**

```
컴포넌트를 검색해줘
```

(query 파라미터 없음)

**예상 결과:**

- 파라미터 필요 에러 메시지
- "Query parameter is required" 또는 유사한 메시지

**확인 사항:**

- [ ] 에러 메시지가 반환되는가?
- [ ] 메시지가 명확한가?

---

### 성능 테스트

#### 11. 첫 요청 응답 시간

**요청:**

```
UXBIT 컴포넌트 목록을 보여줘
```

(첫 요청)

**확인 사항:**

- [ ] 응답 시간 측정
- [ ] 1초 이내인가? (권장)

---

#### 12. 두 번째 요청 응답 시간

**요청:**

```
UXBIT 컴포넌트 목록을 보여줘
```

(같은 요청 반복)

**확인 사항:**

- [ ] 응답 시간 측정
- [ ] 100ms 이내인가? (캐시 히트, 권장)

---

## 테스트 결과 기록

각 테스트 항목에 대해:

- [ ] 통과
- [ ] 실패 (문제 설명: \***\*\_\_\_\*\***)

---

## 문제 발생 시

### 문제 1: MCP 서버가 연결되지 않음

**해결:**

1. 설정 파일 경로 확인
2. 빌드된 파일 존재 확인: `ls -la apps/mcp-server/dist/index.js`
3. Cursor 재시작
4. Cursor 개발자 도구에서 에러 로그 확인

### 문제 2: 응답이 없음

**해결:**

1. 서버가 정상 시작되었는지 확인
2. 로그 확인 (stderr)
3. 파일 경로 확인

### 문제 3: 에러 메시지가 불명확함

**해결:**

1. 로그 확인
2. 문제 재현
3. 이슈 기록

---

## 테스트 완료 후

모든 테스트가 통과하면:

- [ ] Phase 2: 컴포넌트 품질 평가 도구 구현 시작

일부 테스트가 실패하면:

- [ ] 문제 수정
- [ ] 재테스트
- [ ] 모든 테스트 통과 확인

---

**참고:**

- [TEST_CHECKLIST.md](./TEST_CHECKLIST.md) - 체크리스트
- [TESTING.md](./TESTING.md) - 상세 테스트 가이드
- [PHASE1_TEST_RESULTS.md](./PHASE1_TEST_RESULTS.md) - 테스트 결과 기록
