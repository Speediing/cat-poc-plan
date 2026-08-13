# Scaffold — replicate the shell

Bootstrap a new leave-behind that can reach this craft bar. Public stack refs: [Next.js App Router](https://nextjs.org/docs/app), [Tailwind v4](https://tailwindcss.com/docs), [Vercel](https://vercel.com/docs), [Geist](https://vercel.com/font).

## Create the app

```bash
npx create-next-app@15 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
# Align to React 19 + Next 15.x + Tailwind 4 (postcss plugin) as in a current leave-behind
npm i react@19 react-dom@19 next@15
npm i -D tailwindcss@4 @tailwindcss/postcss@4 typescript @types/node @types/react @types/react-dom
```

Keep deps minimal. No UI kit, no CMS, no analytics SDK, no auth SaaS — password gate is ~150 lines of Web Crypto.

## Target file tree

```
PLAN.md
CONTENT.md
README.md
.env.example          # SITE_PASSWORD=  SESSION_SECRET=
next.config.ts        # can be empty options
postcss.config.mjs    # plugins: { "@tailwindcss/postcss": {} }
tsconfig.json         # strict, paths @/* -> ./src/*
src/
  middleware.ts
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
    login/page.tsx
    api/login/route.ts
    api/logout/route.ts
  lib/
    content.ts
    siteAuth.ts
  components/
    Lockup.tsx
    Hero.tsx
    HeroArt.tsx           # rename per asset
    SectionNav.tsx
    SectionHeader.tsx     # SectionHeader + SoftPanel + SectionShell
    Sections.tsx          # one export per beat
    NextSteps.tsx
public/
  illustrations/hero.png  # approved atmospheric art
```

## `page.tsx` composition (order matters)

```tsx
<main>
  <Hero />
  <SectionNav />
  {/* one component per visible beat, in arc order */}
  <NextSteps />   {/* includes footer */}
</main>
```

Do not mount soft-hidden sections. Leave a one-line comment pointing at the hidden export.

## `layout.tsx` pattern

- Load Geist → `--font-geist-sans`
- `metadata.title` / `description` from `content.meta`
- Always `robots: { index: false, follow: false }`
- Body: `` `${geist.variable} bg-canvas text-ink antialiased` ``

## Docs contract

| File | Job |
|------|-----|
| `PLAN.md` | Readers, arc, cuts, framing rule — write **before** components |
| `CONTENT.md` | Human mirror of copy; if conflict, `content.ts` wins |
| `README.md` | Stack + env vars + `npm run dev/build` |

## What you must invent (skill cannot supply)

1. Meeting facts (Granola / transcript) — never invent ROI or quotes
2. Partner accent color (scarce — lockup mark only is enough)
3. Approved hero imagery (quiet atmospheric, not stock collage)
4. Section spine for *this* account (adapt the default arc)
5. `SITE_PASSWORD` + `SESSION_SECRET` per Vercel project
