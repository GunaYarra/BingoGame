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

## Design Guide
**Theme:** Cozy Coffee Shop — Dark Espresso Bar

### Color Tokens (defined in `src/index.css` `@theme`)
| Token | Role |
|---|---|
| `espresso` | Main background — near-black deep brown |
| `roast` | Card / surface background — mid-dark brown |
| `caramel` | Accent — golden-brown for buttons, borders, highlights |
| `cream` | Primary text — warm off-white |
| `foam` | Unmarked bingo square background — very light cream |
| `marked` | Marked square fill — dark roast brown |
| `bingo` | Winning line highlight — honey gold |

### Typography
- **Display / Headings:** `Playfair Display` (serif) — applied via `style={{ fontFamily: 'var(--font-display)' }}` on `<h1>`, `<h2>`, and modal headings.
- **Body / UI text:** `Lora` (serif) — set as the global `body` font in `index.css`.
- Avoid system-ui, Inter, Roboto, or other sans-serif fonts; the warm serif pairing is intentional.

### UI Patterns
- **Backgrounds:** Always `bg-espresso` at the page level; `bg-roast` for cards, headers, and the board wrapper.
- **Buttons (primary):** `bg-caramel text-espresso` — warm gold with dark text. Active state: `active:opacity-80`.
- **Borders:** Use `border-caramel/20`–`border-caramel/40` for subtle definition; avoid gray borders.
- **Muted text:** `text-cream/50`–`text-cream/70` for instructions and secondary copy.
- **Bingo indicator / banners:** `bg-caramel text-espresso` — keep the warm gold, never amber or yellow.
- **Shadows:** `shadow-black/40`–`shadow-black/70` to preserve depth on the dark background.
- **Icons:** Use ☕ for free space and celebration moments; keep the coffee motif consistent.

### Don'ts
- Do not introduce blue, green, or gray color tokens — all UI should stay within the coffee palette.
- Do not use `bg-white`, `text-gray-*`, or `border-gray-*` Tailwind utilities anywhere.
- Do not swap the serif fonts for sans-serif alternatives.
