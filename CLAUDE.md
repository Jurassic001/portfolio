# CLAUDE.md

## Commands

```bash
pnpm dev         # Vite dev server on http://localhost:5173
pnpm build       # Type-check (tsc -b) then Vite production build
pnpm preview     # Serve the production build locally
```

There is no test runner or linter configured. TypeScript errors surface during `pnpm build`.

## Architecture Overview

Single-page React 19 + TypeScript portfolio built with Vite 6. No router — all sections render in `src/App.tsx` with anchor-based scroll navigation.

**Data flow:** `src/data/resume.ts` is the single source of truth for all content. Section components import `resumeData` from it; never hardcode text in components. Types live in `src/types/resume.ts`.

**Component tiers** under `src/components/`:
- `layout/` — `Navbar`, `Footer`, `Section` (Section adds Framer Motion fade-in-up via `useInView`)
- `ui/` — reusable primitives (`Button`, `Card`, `Badge`, `SocialLinks`)
- `sections/` — page sections (`Hero`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`)

**Styling:** Tailwind CSS v4 with `@theme` tokens defined in `src/index.css` (no `tailwind.config` file). Design tokens use `brand-*` (deep oxblood, `#6e2c36` at 500) over warm cream surfaces (`--color-surface-light`/`--color-surface-card-light`). Semantic vars (`--color-text-primary`, `--color-border`, etc.) are defined once on `:root` and consumed via `text-[var(--color-text-secondary)]`-style classes.

**The site is light-only.** There is no dark mode, no theme toggle, and no `dark:` variants — do not add them. Prefer flat fills and hairline borders over shadows and gradients; the visual target is formal and restrained.

**Animations:** Framer Motion only — no CSS `@keyframes`. Use `useInView` with `once: true` for scroll-triggered animations.

**Utilities:**
- `cn()` in `src/utils/cn.ts` (`clsx` + `tailwind-merge`) — use for all conditional/merged class strings
- `useScrollSpy.ts` — IntersectionObserver hook for active nav link highlighting

## Key Conventions

- Function components only, `export default function ComponentName()`. No class components, no named exports for components.
- `ui/` components accept a `className` prop for external overrides.
- Custom CSS utility: `.bg-glass` (translucent backdrop-blur, used by the scrolled navbar dock).
- Deployed on Cloudflare Workers; `wrangler.jsonc` configures static-asset serving and SPA fallback, and `public/_headers` sets security headers. `.node-version` pins the build image's Node version.
