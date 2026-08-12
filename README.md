# Caterpillar Digital × Cursor — Pilot Plan

Customer-facing leave-behind from Cursor to Caterpillar Digital (Nate Litton discovery, Jul 28, 2026).

## Stack

- Next.js App Router (static)
- TypeScript
- Tailwind CSS

## Content

All site copy lives in [`src/lib/content.ts`](src/lib/content.ts). Components render that model and do not hardcode marketing copy. [`CONTENT.md`](CONTENT.md) is the human-readable mirror; [`PLAN.md`](PLAN.md) is the IA + design direction.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
