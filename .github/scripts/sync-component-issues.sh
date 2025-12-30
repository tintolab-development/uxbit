#!/bin/bash
set -euo pipefail

# 공용 라벨/담당자
LABELS=( "type:docs" "area:components" "priority:normal" )
ASSIGNEES=("leezer94")

for FILE in "$@"; do
  BASENAME="$(basename "$FILE")"
  COMPONENT="${BASENAME%.md}"
  TITLE="[Docs] ${COMPONENT}: Guide"

  echo "Processing $FILE -> Title: $TITLE"

  # 문서 파일 읽기
  DOC_CONTENT="$(cat "$FILE")"

  # 품질 평가 섹션이 있으면 추출 (## 품질 평가 또는 ## Quality Assessment)
  QUALITY_SECTION=""
  if echo "$DOC_CONTENT" | grep -q "## 품질 평가\|## Quality Assessment"; then
    QUALITY_SECTION=$(echo "$DOC_CONTENT" | sed -n '/## 품질 평가\|## Quality Assessment/,/^## /p' | sed '$d')
  fi

  # Issue 본문 생성 (품질 평가 섹션 포함)
  ISSUE_BODY="$DOC_CONTENT"
  if [ -n "$QUALITY_SECTION" ]; then
    ISSUE_BODY="${DOC_CONTENT}

---

## 📊 품질 평가 결과 (MCP 서버)

${QUALITY_SECTION}

> 💡 **참고**: MCP 서버의 \`evaluate_component_quality\` 도구로 평가한 결과입니다.
> 자세한 내용은 [품질 평가 도구 가이드](../../apps/mcp-server/docs/metrics/QUALITY_EVALUATION_TOOL.md)를 참고하세요."
  fi

  # 임시 파일에 Issue 본문 저장
  TEMP_BODY=$(mktemp)
  echo "$ISSUE_BODY" > "$TEMP_BODY"

  # 기존 이슈 검색 (정확한 제목 매칭)
  ISSUE_NUMBER="$(gh issue list \
    --repo "$REPO" \
    --search "in:title \"$TITLE\"" \
    --state all \
    --json number,title \
    --jq ".[] | select(.title==\"$TITLE\") | .number" | head -n1 || true)"

  if [ -n "$ISSUE_NUMBER" ]; then
    echo "Updating existing issue #$ISSUE_NUMBER"
    gh issue edit "$ISSUE_NUMBER" --repo "$REPO" --title "$TITLE" --body-file "$TEMP_BODY"

    # 라벨/담당자 보강
    for L in "${LABELS[@]}"; do
      gh issue edit "$ISSUE_NUMBER" --repo "$REPO" --add-label "$L" || true
    done
    for A in "${ASSIGNEES[@]}"; do
      gh issue edit "$ISSUE_NUMBER" --repo "$REPO" --add-assignee "$A" || true
    done

    # 닫힌 이슈면 자동 재오픈
    gh issue reopen "$ISSUE_NUMBER" --repo "$REPO" || true

  else
    echo "Creating new issue"

    LABEL_FLAGS=()
    for L in "${LABELS[@]}"; do LABEL_FLAGS+=( --label "$L" ); done

    ASSIGNEE_FLAGS=()
    for A in "${ASSIGNEES[@]}"; do ASSIGNEE_FLAGS+=( --assignee "$A" ); done

    gh issue create \
      --repo "$REPO" \
      --title "$TITLE" \
      "${LABEL_FLAGS[@]}" \
      "${ASSIGNEE_FLAGS[@]}" \
      --body-file "$TEMP_BODY"
  fi

  rm "$TEMP_BODY"
done

