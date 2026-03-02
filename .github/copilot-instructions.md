# Project Guidelines

## Mandatory Development Checklist
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm run test`

## Code Style
- Use strict TypeScript with explicit props interfaces.
- Keep game logic pure in `src/utils/`; keep orchestration in hooks.
- Use `useCallback` for passed handlers and `useMemo` for derived state.
- Use Tailwind utilities and theme tokens from `src/index.css`; follow `./.github/instructions/tailwind-4.instructions.md`.

## Architecture
- `src/hooks/useBingoGame.ts` is the single source of truth for game flow, persistence, and state transitions.
- `src/utils/bingoLogic.ts` contains deterministic board and bingo logic; avoid coupling these functions to React.
- `src/components/` remain presentational; core domain types stay in `src/types/index.ts`.

## Build And Test
- Install: `npm install`
- Dev: `npm run dev`
- Quality gates: `npm run lint`, `npm run build`, `npm run test`

## Conventions
- Preserve free-space behavior: center square starts marked and cannot be toggled.
- Maintain localStorage compatibility in `useBingoGame.ts`; bump storage version when persisted schema changes.
- Keep browser/SSR safety around `window` and `localStorage`; preserve `vite.config.ts` base path logic (`VITE_REPO_NAME`).
