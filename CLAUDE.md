# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Clear** is a chat-first academic Q&A platform where teachers answer student questions. Thai/English bilingual. Three-panel inbox layout (ticket list / chat / metadata) adapted for education.

The product design spec is in [DESIGN.md](DESIGN.md) — it defines the full design system (colors, typography, spacing, components, Tailwind v4 tokens). The PRD is in [docs/prd/clear-prd.md](docs/prd/clear-prd.md).

## Monorepo Structure

```
clear/
├── apps/backend/    — AdonisJS 7 API (TypeScript)
├── apps/frontend/   — TanStack Start + React 19 (TypeScript)
├── turbo.json       — Turborepo task config
└── pnpm-workspace.yaml
```

Package manager: **pnpm** (v10+). Node >= 24.

## Commands

All commands run from repo root via Turborepo:

```bash
pnpm dev          # Start all apps in dev mode
pnpm build        # Production build
pnpm test         # Run all tests
pnpm lint         # ESLint all apps
pnpm format       # Prettier format all apps
pnpm typecheck    # TypeScript check all apps
```

### Backend only (from `apps/backend/`)

```bash
node ace serve --hmr    # Dev server (port 3333)
node ace test           # Run Japa tests (unit + functional suites)
node ace test --files=tests/unit/foo.spec.ts   # Single test file
node ace build          # Production build
```

### Frontend only (from `apps/frontend/`)

```bash
pnpm dev          # Vite dev server (port 3000)
pnpm test         # Vitest (run once)
pnpm test -- --watch   # Vitest watch mode
pnpm check        # Prettier check
```

## Backend Architecture (AdonisJS 7)

- **Auth**: Dual strategy — API tokens (default) + sessions. Guards configured in `config/auth.ts`.
- **Routes**: Versioned under `/api/v1`. Defined in `start/routes.ts` using controller references from `#generated/controllers`.
- **Response serialization**: Custom `ApiSerializer` in `providers/api_provider.ts` wraps all responses in `{ data: ... }`. Use `ctx.serialize(data)` in controllers.
- **Path aliases**: `#controllers/*`, `#models/*`, `#middleware/*`, `#validators/*`, `#services/*`, etc. (see `package.json` imports).
- **Database**: Lucid ORM with SQLite (dev). Migrations in `database/migrations/`.
- **Testing**: Japa with `@japa/assert` + `@japa/plugin-adonisjs`. Two suites: `tests/unit/` and `tests/functional/`.
- **Type-safe API**: Tuyau generates client types in `.adonisjs/client/` — frontend imports `@api-starter-kit/backend/registry` for type-safe API calls.

## Frontend Architecture (TanStack Start + React 19)

- **Routing**: File-based via TanStack Router. Routes in `src/routes/`. Root layout in `src/routes/__root.tsx`.
- **Styling**: Tailwind CSS v4 (CSS-first config in `src/styles.css`). Shadcn components added via `pnpm dlx shadcn@latest add <component>`.
- **Theme**: Light/dark mode toggled via `.dark` class on `<html>`. Persisted in localStorage.
- **Server functions**: TanStack Start `createServerFn` for server-side logic.

## Design System

The DESIGN.md contains the canonical design tokens. Key points:

- **Font**: Sarabun (Thai + Latin at same optical weight). The current frontend uses Manrope/Fraunces — this will need to migrate to Sarabun for the actual Clear product.
- **Colors**: Primary = Indigo (#4F46E5) for teachers, Tertiary = Emerald (#10B981) for students.
- **Layout**: Three-panel inbox (240px sidebar / 320px list / flex chat / 300px detail). Responsive breakpoints at 768px, 1024px, 1280px.
- **Dark mode**: Tonal surface layering (background → surface → surface-raised), no heavy shadows.

## Reference Docs

`ai-knowledges/adonisjs7/` contains AdonisJS 7 reference docs (auth, testing, routing, controllers, ORM, etc.). Read these when working on the backend — they cover patterns and APIs specific to AdonisJS 7 that may differ from earlier versions.

## Cursor Rules

From `apps/frontend/.cursorrules`: Use latest Shadcn for new components: `pnpm dlx shadcn@latest add <component>`.
