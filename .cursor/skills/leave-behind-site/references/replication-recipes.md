# Replication recipes — tokens, classes, components

Concrete patterns that produce the craft bar. Study public pacing on [cursor.com](https://cursor.com), [vercel.com](https://vercel.com), [vercel.com/design](https://vercel.com/design), [Geist](https://vercel.com/font) — then implement with these recipes.

## 1. CSS tokens (`globals.css`)

```css
@import "tailwindcss";

:root {
  --canvas: #f6f5f2;
  --canvas-warm: #f3f1ec;
  --panel: #ebe8e1;
  --panel-deep: #e4e0d7;
  --ink: #26251e;
  --ink-muted: #5c5b54;
  --ink-faint: #8a8982;
  --hairline: rgba(38, 37, 30, 0.1);
  --hairline-strong: rgba(38, 37, 30, 0.16);
  --cursor-orange: #f54e00;
  --partner-accent: #ffcd11; /* replace per account; scarce use */
  --white: #ffffff;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-canvas-warm: var(--canvas-warm);
  --color-panel: var(--panel);
  --color-panel-deep: var(--panel-deep);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-ink-faint: var(--ink-faint);
  --color-hairline: var(--hairline);
  --color-hairline-strong: var(--hairline-strong);
  --color-cursor-orange: var(--cursor-orange);
  --color-partner-accent: var(--partner-accent);
  --color-white: var(--white);
  --font-sans: var(--font-geist-sans);
}

html { scroll-behavior: smooth; color-scheme: light; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

body {
  background: var(--canvas);
  color: var(--ink);
  font-family: var(--font-geist-sans), ui-sans-serif, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

/* Quiet paper grain — ~3.5% opacity, multiply */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  opacity: 0.035;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

::selection {
  background: color-mix(in srgb, var(--cursor-orange) 28%, transparent);
  color: var(--ink);
}

section[id],
[id="next-steps"] {
  scroll-margin-top: 5rem;
}

.prose-measure { max-width: 36rem; }
```

**Accent discipline:** orange = eyebrows, active nav, big stats, timeline “when”. Partner accent = lockup square only (or one other scarce mark). Never flood the page with partner yellow/color.

## 2. Content model (`content.ts`)

```ts
export interface SectionMeta {
  number: string;   // "02"
  id: string;       // kebab anchor
  navLabel: string; // nav + eyebrow
  heading: string;  // argument, sentence case
  kicker: string;   // optional; "" allowed
}

export interface SiteMeta {
  badge: string;
  title: string;
  thesis: string;
  preparedBy: string;
  footer: string;
}

// nextSteps is NOT SectionMeta — closer shape:
// { label: "09 Next steps", heading, steps: {owner, action}[], close, contacts: {name, role}[] }

export const sections: SectionMeta[] = [
  // visible beats only, continuous numbers (hero unnumbered → start at "02")
];

/** HIDDEN until stakeholder confirms — not in content/sections/page. */
export const hiddenGroup = { /* meta + members + ask */ };
```

Components read `content.*`. Zero marketing strings hardcoded in JSX except the lockup brand names.

Cite the source meeting at the top of `content.ts` and `CONTENT.md`.

## 3. Shared shells

### Page column
`mx-auto max-w-6xl px-6 sm:px-10`

### Section shell
```tsx
<section id={id} className={warm ? "bg-canvas-warm/40" : undefined}>
  <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
    {children}
  </div>
</section>
```
Next-steps closer often uses taller pad: `py-20 sm:py-28`.

### Section header
```
eyebrow: text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase
         → "{number} {navLabel}"
h2:      mt-3 text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-[2rem]
kicker:  prose-measure mt-4 text-[17px] leading-[1.55] text-ink-muted
```

### Soft panel
`rounded-2xl bg-panel px-6 py-6 sm:px-7 sm:py-7`

### White/80 card (default unit of meaning)
`rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]`

### Ink callout panel (acceptance checks, etc.)
`rounded-2xl bg-ink px-5 py-5 text-canvas`  
muted label inside: `text-[13px] font-medium text-canvas/55`

## 4. Sticky section nav

Client component. Build items from `sections` + `{ id: "next-steps", label: "Next steps" }`.

```
nav:   sticky top-0 z-40 border-b border-hairline bg-canvas/80 backdrop-blur-md
rail:  mx-auto flex max-w-6xl items-stretch overflow-x-auto px-6 sm:px-10
link:  relative flex shrink-0 items-center px-3 py-3.5 text-[14px] sm:px-4
active: font-medium text-ink
idle:  text-ink-faint hover:text-ink-muted
bar:   absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-cursor-orange sm:inset-x-4
```

**IntersectionObserver** (copy these numbers):
```
rootMargin: "-18% 0px -58% 0px"
threshold: [0, 0.25, 0.5]
```
On intersect, pick the entry with highest `intersectionRatio` and set active id.

## 5. Hero composition

```
shell:   relative bg-canvas
inner:   mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-12
top row: flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between  (Lockup | badge)
grid:    grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16
title:   max-w-[14ch] text-[2.75rem] font-medium leading-[1.05] tracking-[-0.035em]
         text-ink sm:text-[3.2rem] lg:text-[3.45rem]
         (partner × Cursor — × in text-cursor-orange)
thesis:  mt-7 max-w-[34rem] text-[17px] leading-[1.55] text-ink-muted
meta:    mt-8 max-w-md text-[14px] leading-relaxed text-ink-faint
CTAs:    mt-10 flex flex-wrap gap-3
art col: lg:justify-self-end lg:w-[108%] xl:w-[112%]   // slight bleed past column
```

### CTAs
```
primary:   inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px]
           font-medium text-canvas transition-opacity hover:opacity-85
secondary: inline-flex items-center rounded-full bg-panel px-5 py-2.5 text-[14px]
           font-medium text-ink transition-opacity hover:opacity-85
```

### Lockup
```
flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink
mark: h-2 w-2 rounded-[2px] bg-partner-accent
"{Partner}"  text-ink-faint "×"  "Cursor"
```

### Hero art
- `next/image`, real dimensions, `priority`, responsive `sizes`
- Quiet atmospheric fragment on cream — no floating badges/stickers
- Public craft refs for energy (not assets): cursor.com marketing imagery restraint

## 6. Beat layout patterns

| Beat shape | Layout |
|------------|--------|
| Findings / points | `mt-6 grid gap-3 sm:grid-cols-2` of white/80 cards |
| Gap stats | `mt-10 grid gap-3 md:grid-cols-3`; value `text-[1.75rem] font-medium tracking-tight text-cursor-orange` |
| Pilot stats | `sm:grid-cols-2 lg:grid-cols-4`; value `text-[1.35rem] … text-cursor-orange` |
| Today vs Cursor | table in white/80 wrap (below) |
| Acceptance + why | `lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]` — ink panel + why cards |
| Timeline rows | white/80 `sm:grid-cols-[10rem_1fr_8rem]`; when = orange |
| Goals list | `rounded-xl bg-panel px-4 py-3 text-[14px] leading-relaxed text-ink-muted` |
| Pipeline stages | flex wrap chips `rounded-lg bg-panel px-3 py-2` with `→` separators |

### Comparison table
```
wrap:  overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]
table: w-full min-w-[40rem] border-collapse text-left text-[14px]
thead: border-b border-hairline bg-panel/50
th:    px-5 py-3.5 text-[12px] font-medium text-ink-faint
td:    px-5 py-3.5  (+ font-medium text-ink on stage col)
```

### Next steps closer
- Warm band, `id="next-steps"`
- Grid: heading/close | SoftPanel steps (`Step N · owner` faint + action body)
- Contacts: `grid gap-3 sm:grid-cols-3` white/80 cards
- Footer: `border-t border-hairline` + Lockup + `text-[13px] text-ink-faint` footer line

## 7. Password gate (behavior contract)

| Piece | Behavior |
|-------|----------|
| Env | `SITE_PASSWORD`, `SESSION_SECRET` — required in production |
| Cookie | httpOnly, SameSite=Lax, Secure in prod, ~14d max-age, path `/` |
| Token | `exp.<hmac-sha256-base64url>` signed with session secret |
| Compare | timing-safe string equality for password + sig |
| Middleware | allow `/login`, `/api/login`, `/api/logout`, `/_next*`, static, `/illustrations/*` |
| Fail closed | prod missing env → `/login?error=config`; **dev skips** if unset |
| Login UX | Lockup + orange “Private leave-behind” eyebrow + plain headline + full-width ink pill button; honor `?next=` |

Do **not** use HTTP basic auth. Login page must match site craft (same canvas + lockup).

## 8. Motion budget

Only: sticky active underline, CTA/link opacity hover, optional smooth scroll with reduced-motion opt-out. No parallax, no scroll-jacking, no grain animation.

## 9. Replication checklist (implementation)

- [ ] Tokens + grain + prose-measure in globals
- [ ] Geist + noindex layout
- [ ] Typed content.ts + sections[] + optional hidden*
- [ ] Lockup, Hero (budget + art bleed), sticky observer nav
- [ ] SectionHeader / SoftPanel / SectionShell shared
- [ ] One component per beat; page compose order matches arc
- [ ] White/80 + table + ink panel recipes used consistently
- [ ] Middleware + siteAuth + branded /login
- [ ] CONTENT.md mirror; PLAN.md spine written first
- [ ] Build green; prod gate verified; numbering continuous
