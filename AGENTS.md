# Agents.md

## 1. Project Overview

cur8d is a production-ready Next.js starter optimized for data integration and scalability.

## 2. Tech Stack

- Next.js 16.2.6: App Router, Server Components.
- HeroUI v3.0.5: Compound components with dot notation.
- Tailwind CSS v4: CSS-first configuration.
- Vitest 4.1.6 & Playwright 1.59.1: Testing.
- Supabase & Vercel Blob: Data and storage stubs.

## 3. Directory Structure

- `app`: Routes, layouts, components (`app/components`), hooks (`app/hooks`), data (`app/data`), and types (`app/types`).
- `tests`: Unit tests (`tests/unit`) and E2E tests (`tests/e2e`).
- `docs`: Nextra v4 documentation.

## 4. Toolchain Management

Managed via `mise`. Update `.mise.toml` to change Node.js or pnpm versions.

## 5. TypeScript Rules

- Strict mode enabled.
- No `any` types allowed.
- Explicit interfaces for all component props.

## 6. Coding Conventions

- Named imports for icons.
- Barrel exports (`index.ts`) in component folders.
- Server Components by default.

## 7. How to add a new page

Add directory to `app/` with `page.tsx`.

## 8. How to add a new component

Create folder in `app/components/` with `index.tsx` and types, and add test in `tests/unit/components/`.

## 9. How to add a keyboard shortcut

Register in `app/config/shortcuts.ts`, use `useShortcuts` hook, add UI hint.

## 10. Testing Guide

- Unit: `pnpm test`
- E2E: `pnpm test:e2e`
- 80% coverage required.

## 11. Environment Variables

Validate via Zod in `app/lib/env.ts` when required.

## 12. Local Development Commands

- `pnpm dev`: Start dev server.
- `pnpm build`: Production build.
- `pnpm lint`: Run linting.

## 13. Deployment

Vercel for SSR, GitHub Pages for static export.

## 14. HeroUI v3 usage

Use compound component pattern (e.g., `<Table.Header>`).

## 15. Dark mode

Wiring via `next-themes` and Tailwind v4 variables.

## 16. Icon usage

`lucide-react` named imports with Tailwind `size-*` utilities.

## 17. Data layer

Mock data in `app/data/templates.ts`, migration path to Supabase documented in `app/data/README.md`.
