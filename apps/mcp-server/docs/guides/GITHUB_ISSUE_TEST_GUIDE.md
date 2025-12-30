# GitHub Issue 자동 생성 테스트 가이드

이 문서는 컴포넌트 문서가 GitHub Issue로 자동 생성/업데이트되는 워크플로우를 테스트하는 방법을 안내합니다.

## 테스트 방법

### 방법 1: workflow_dispatch를 통한 수동 실행 (권장)

1. GitHub 저장소로 이동
2. **Actions** 탭 클릭
3. **"Sync Component Docs to Issues"** 워크플로우 선택
4. **"Run workflow"** 버튼 클릭
5. 모든 문서 파일이 Issue로 생성/업데이트됨

### 방법 2: 문서 수정 후 자동 실행

1. 문서 파일 수정:

   ```bash
   # 예: tinto-button.md 파일 수정
   echo "## 테스트 업데이트" >> apps/stencil-components/docs/components/tinto-button.md
   ```

2. 커밋 및 푸시:

   ```bash
   git add apps/stencil-components/docs/components/tinto-button.md
   git commit -m "test: GitHub Issue 자동 생성 테스트"
   git push origin uxbit-mcp
   ```

3. GitHub Actions에서 자동으로 워크플로우 실행
4. Issue 생성/업데이트 확인

## 확인 사항

### ✅ 워크플로우 실행 확인

- GitHub Actions 탭에서 워크플로우 실행 상태 확인
- 모든 단계가 성공적으로 완료되었는지 확인

### ✅ Issue 생성 확인

- GitHub 저장소의 **Issues** 탭으로 이동
- 다음 형식의 Issue가 생성되었는지 확인:
  - `[Docs] tinto-button: Guide`
  - `[Docs] tinto-card: Guide`
  - 등등...

### ✅ Issue 내용 확인

각 Issue에 다음이 포함되어 있는지 확인:

1. **컴포넌트 문서 전체 내용**
2. **품질 평가 섹션** (있는 경우)
3. **라벨**: `type:docs`, `area:components`, `priority:normal`
4. **담당자**: `leezer94`

### ✅ Issue 업데이트 확인

1. 기존 Issue가 있는 경우 업데이트되는지 확인
2. 닫힌 Issue는 자동으로 재오픈되는지 확인

## 문제 해결

### 워크플로우가 실행되지 않는 경우

1. **경로 확인**: `apps/stencil-components/docs/components/*.md` 경로가 맞는지 확인
2. **브랜치 확인**: 워크플로우가 해당 브랜치에서 실행되는지 확인
3. **워크플로우 파일 확인**: `.github/workflows/sync-component-docs.yml` 파일이 올바른지 확인

### pnpm 설치 오류

- 워크플로우 파일에서 `pnpm/action-setup`이 `setup-node` 전에 실행되는지 확인
- `version: 9.15.4`가 `package.json`의 `packageManager`와 일치하는지 확인

### Issue 생성 실패

1. **권한 확인**: `issues: write` 권한이 있는지 확인
2. **GitHub CLI 확인**: `gh` CLI가 설치되어 있는지 확인
3. **토큰 확인**: `GITHUB_TOKEN`이 올바르게 설정되어 있는지 확인

### 스크립트 실행 오류

1. **스크립트 권한**: `chmod +x .github/scripts/sync-component-issues.sh` 실행
2. **파일 경로**: 절대 경로가 올바른지 확인
3. **문서 형식**: Markdown 파일이 올바른 형식인지 확인

## 로컬 테스트 (선택적)

로컬에서 스크립트를 직접 실행하여 테스트할 수 있습니다:

```bash
# GitHub CLI 인증 필요
gh auth login

# 테스트 실행
REPO="tintolab-development/uxbit" \
.github/scripts/sync-component-issues.sh \
  apps/stencil-components/docs/components/tinto-button.md
```

**주의**: 로컬 테스트는 실제 Issue를 생성하므로 주의해서 실행하세요.

## 예상 결과

### 성공적인 실행 시

- 모든 컴포넌트 문서(17개)에 대한 Issue 생성/업데이트
- 각 Issue에 품질 평가 결과 포함
- 적절한 라벨 및 담당자 할당

### Issue 예시

```
제목: [Docs] tinto-button: Guide

라벨: type:docs, area:components, priority:normal
담당자: leezer94

본문:
[컴포넌트 문서 전체 내용]

---

## 📊 품질 평가 결과 (MCP 서버)

[품질 평가 섹션 내용]
```

## 다음 단계

테스트가 성공적으로 완료되면:

1. ✅ 워크플로우가 정상 작동함을 확인
2. ✅ 문서 변경 시 자동으로 Issue가 업데이트됨을 확인
3. ✅ 품질 평가 결과가 Issue에 포함됨을 확인

이제 문서를 수정하면 자동으로 GitHub Issue가 업데이트됩니다!
