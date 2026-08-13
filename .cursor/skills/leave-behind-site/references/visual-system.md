# Visual system

Craft target: a Cursor document that acknowledges the customer brand — not a customer-branded brochure, not a generic AI landing page.

**Implement with copy-paste recipes** in [replication-recipes.md](replication-recipes.md) (tokens, nav observer, hero, cards, tables). Public pacing refs: [cursor.com](https://cursor.com), [vercel.com](https://vercel.com), [vercel.com/design](https://vercel.com/design), [Geist](https://vercel.com/font).

## Tokens (start here, then tune)

Use CSS variables on `:root` and map into Tailwind `@theme inline`.

| Token | Role | Example (cat-poc-plan) |
|-------|------|------------------------|
| `--canvas` | Page ground | `#f6f5f2` |
| `--canvas-warm` | Alternating section wash | `#f3f1ec` |
| `--panel` | Soft fill | `#ebe8e1` |
| `--ink` / `--ink-muted` / `--ink-faint` | Text hierarchy | `#26251e` … |
| `--hairline` | Borders | ink @ 10–16% |
| accent (Cursor) | Active nav, emphasis | `#f54e00` |
| partner accent | Scarce signal only | Cat `#ffcd11` |

Quiet fixed grain (`body::before`, ~3–4% opacity, multiply) is welcome. Loud gradients are not.

## Typography

- One sans family with presence (Geist is fine; avoid Inter/Roboto/Arial as the brand voice).
- Display: medium weight, tight tracking (`-0.03em`–`-0.035em`), short measure on the title (`max-w-[14ch]` often works).
- Body ~15–17px, leading ~1.55. Muted for thesis; faint for meta.
- Section eyebrow: 12px uppercase tracked label in accent + number.

## Hero composition

First viewport contains **only**:

1. Brand lockup (partner × Cursor)
2. Optional private/date badge (small, faint)
3. One thesis sentence
4. Prepared-by line
5. One primary + one secondary CTA
6. One dominant real image (product, place, machine, atmosphere)

Tests:

- **Brand test:** strip the nav — would this still read as this leave-behind?
- **Hero budget:** no stats, schedules, address blocks, or promo chips in the first screen.
- **No overlays:** no floating badges/stickers on the image.
- **Full-bleed or edge-strong image** — avoid inset rounded media cards and collages unless a hard design-system constraint says otherwise.

## Sections

- Max width ~`max-w-6xl`, horizontal padding `px-6 sm:px-10`.
- Alternate `canvas` / `canvas-warm` lightly for rhythm.
- Soft panels: `bg-white/80` + 1px hairline shadow, or flat `bg-panel`. Large radius (`rounded-2xl`) OK; avoid multi-layer glam shadows.
- Tables for “today vs with Cursor” style comparisons.
- Sticky nav: blur + hairline; active = ink + 2px accent underline (not a filled pill).

## Motion

Ship 2–3 intentional motions: sticky active indicator, link/button opacity, optional smooth scroll (`scroll-behavior` with `prefers-reduced-motion` opt-out). No scroll-jacking, no parallax heroes.

## Rejected aesthetics

- Purple-on-white / purple→indigo gradients
- Warm cream + terracotta + display serif cliché
- Broadsheet hairline newspaper columns
- Default dark mode
- Glow, neon, glassmorphism stacks
- Pill clusters, icon rows, emoji bullets
- Dashboard card grids in the hero

## Responsive

- Stack hero image below copy on small screens; keep lockup + thesis first.
- Sticky nav must scroll horizontally without wrapping into a tall block.
- Touch targets ≥ ~40px on CTAs.
