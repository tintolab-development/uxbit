# UXBIT Monorepo

Turborepo 기반으로 Stencil 컴포넌트, Storybook, 템플릿 앱을 한 저장소에서 관리합니다.

## 앱 구조

- `apps/stencil-components` – 재사용 가능한 UXBIT 웹 컴포넌트의 소스. `@uxbit/stencil-components` 패키지로 배포되며 loader/custom-elements.json까지 포함되는 **프로젝트 앱**입니다.
- `apps/storybook` – `@stencil/storybook-plugin` 기반의 문서/프리뷰 앱. 상위 앱 패키지를 workspace 종속성으로 가져와 스토리를 로딩합니다.
- `apps/templates` – Vite 기반 템플릿 조립용 앱. 컴포넌트 패키지를 loader로 등록해 실제 마케팅/제품 템플릿을 실험합니다.

## 공통 도구

- ESLint / Prettier 설정은 루트(`eslint.config.mjs`, `.prettierrc`)에서 공유하며 `turbo run lint`, `pnpm lint-staged`로 실행합니다.
- `tsconfig.base.json`의 컴파일러 옵션을 모든 워크스페이스에서 상속합니다.
- Husky 훅은 `.husky/`에 있으며 루트 스크립트(`pnpm typecheck`, `pnpm build` 등)를 호출합니다.

## 유용한 스크립트

```bash
pnpm install                                # 전체 프로젝트/워크스페이스 의존성 설치
pnpm dev                                    # dev 스크립트를 가진 모든 워크스페이스 병렬 실행
pnpm --filter @uxbit/stencil-components dev # Stencil 앱 개발 서버
pnpm --filter storybook dev                 # Storybook 앱 개발 서버
pnpm --filter templates dev                 # 템플릿 앱 개발 서버
pnpm build                                  # 터보 파이프라인 전체 빌드
pnpm storybook:build:gh-pages               # Storybook 정적 빌드 + GH Pages 준비
```

> 새 브랜치를 받았거나 구조가 변경되었을 때는 반드시 `pnpm install`을 먼저 실행해 루트 `pnpm-lock.yaml`을 최신 상태로 맞춰 주세요.
