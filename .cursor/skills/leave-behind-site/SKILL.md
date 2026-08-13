---
name: leave-behind-site
description: >-
  Build a Cursor-quality private customer leave-behind microsite (single-page
  scroll memo). Use when creating or rewriting a pilot plan, onsite follow-up,
  discovery leave-behind, or similar sales/CS artifact for a named account —
  especially when the user mentions leave-behind, pilot plan, onsite follow-up,
  private microsite, or points at cat-poc-plan / cat-cursor-followup as the bar.
---

# Leave-behind microsite

Ship a private one-page site that reads like a sharp internal memo, not marketing.
Gold standard in this lineage: Speediing/cat-poc-plan (`https://cat-poc-plan.vercel.app`)
and its voice sibling `https://cat-cursor-followup.vercel.app`.

## When this skill applies

- New account leave-behind / pilot plan / onsite follow-up
- Rewrite after a better source meeting surfaces
- Raising craft on an existing leave-behind to match the gold standard

Do **not** use for public marketing sites, docs portals, dashboards, or app UI.

## Non-negotiables

1. **One page, scroll-driven, sticky section nav.** No multi-route story. Forwarded links die when the arc is fragmented.
2. **Content is data.** All copy lives in `src/lib/content.ts`. Components only render. `CONTENT.md` mirrors for humans; `content.ts` wins on conflict.
3. **Traceable truth.** Every customer fact traces to a named meeting (prefer Granola) or Cursor’s standard pilot terms. Paraphrase; never invent quotes or metrics.
4. **Cursor accelerates their teams.** Never imply Cursor builds their AI products or owns their roadmap.
5. **Private by default.** `robots: noindex`. Password gate in production (branded `/login`, not HTTP basic).
6. **Plain voice.** Short sentences. No superlatives, feature tours, testimonial walls, or cursor.com residue.

## Workflow (do in order)

### 1. Lock the source of truth

- Identify the canonical meeting(s). Use Granola (`query_granola_meetings` / `get_meeting_transcript`) when available.
- Name attendees, date, and what is *in* vs *out* of scope (other calls, parallel orgs).
- Write a one-line framing rule for this account (what must never be blurred).
- If a sibling leave-behind exists, steal structure/voice — not stale facts.

### 2. Write the story spine before components

Create or update `PLAN.md` with:

- Who reads it and what each person needs in under a minute
- Numbered beats (usually 5–8) + a separate **Next steps** closer
- Section jobs in one line each
- Explicit cuts (transcript logistics, feature lists, invented ROI)

Default arc (adapt; don’t cargo-cult labels):

| Beat | Job |
|------|-----|
| What we heard | Prove we listened; earn the right to propose |
| The gap / tension | Make the cost of the status quo concrete |
| Who Cursor is | One-slide primer — only what matters to *their* cycle |
| Where it plugs in | Same path, less waiting — not a reorg pitch |
| Proposed work | One self-contained, real, criteria-ready use case |
| The pilot | 30 days / tokens / setup — operational, not salesy |
| Timeline | Near-term motion already in flight |
| Next steps | Owner-stamped actions; contacts; confidential footer |

Principles over templates:

- **Listen → propose → make the next step obvious.**
- Next steps ≠ vision. Keep the closer this-month and owned.
- Hidden sections: keep content in a clearly marked export (e.g. `hiddenGroup`) until stakeholders confirm; do not leave gaps in visible numbering.

Load [references/story-and-ia.md](references/story-and-ia.md) when shaping beats or stakeholder skim paths.

### 3. Draft copy in `content.ts`

- Section meta shape: `number`, `id`, `navLabel`, `heading`, `kicker`.
- Export `sections` as **visible nav only**, continuous numbering (no holes for removed/hidden beats).
- Numbers are part of the product (`02 What we heard`), not decoration.
- Scannability: ≤4 rendered lines per paragraph; cards/tables for parallel items; ≤1 callout box per section.
- Apply unslop: cut puffery, AI vocabulary, fake ranges, em-dash crutches.

Load [references/voice-and-truth.md](references/voice-and-truth.md) while writing or editing copy.

### 4. Build the thin Next.js shell

Stack: Next.js App Router, TypeScript, Tailwind v4, single `/` route.

```
src/
  app/page.tsx          # compose sections only
  app/layout.tsx        # font, metadata, noindex
  app/globals.css       # CSS variables + quiet atmosphere
  app/login/page.tsx    # branded gate
  lib/content.ts        # source of truth
  lib/siteAuth.ts       # cookie session helpers
  middleware.ts         # protect all but login/api/static
  components/           # Hero, SectionNav, SectionHeader, section bodies
CONTENT.md              # human mirror
PLAN.md                 # IA + design direction
```

- `SectionNav` derives from `sections` (+ Next steps).
- One component per beat; shared `SectionHeader` / shell.
- Soft panels over heavy card chrome. Hairline borders, not dashboard tiles.

Load [references/stack-and-auth.md](references/stack-and-auth.md) for auth, env, and file layout detail.

### 5. Visual system (craft bar)

Read [references/visual-system.md](references/visual-system.md) before inventing styles.

Hard rules:

- **One composition** in the first viewport: brand lockup, one thesis, one short meta line, one CTA group, one dominant real image.
- **Brand first** — product/partner names are the hero signal; headline must not overpower the lockup.
- **Atmosphere without slop** — cream/paper canvas, quiet grain OK; no purple gradients, no glow, no emoji, no dark-mode default, no pill clusters/stat strips in the hero.
- **Partner color scarce** (e.g. Cat yellow) — accent only. Cursor orange for active/nav/emphasis.
- **Expressive but calm type** — Geist or equivalent; tight tracking on display; `prose-measure` ~36rem.
- **Motion:** 2–3 intentional touches max (sticky nav indicator, opacity hovers). Prefer reduced-motion respect.
- Cards only when they group a real unit of meaning; never in the hero.

### 6. Password gate + ship

- Env: `SITE_PASSWORD`, `SESSION_SECRET` (Vercel Production + Preview). Never commit secrets.
- Branded `/login`; httpOnly signed cookie; timing-safe compare; skip auth in local dev if unset.
- `npm run build` clean before PR.
- Verify in browser after login: nav labels, numbering continuity, no hidden/removed sections leaking, mobile sticky nav scroll.
- Report PR URL + prod URL when asked to ship.

## Quality checklist (before calling it done)

- [ ] Source meeting cited at top of `content.ts` / `CONTENT.md`
- [ ] Every number on the page is traceable or labeled proposed
- [ ] Sticky nav matches visible sections only; numbers continuous
- [ ] Hero passes the brand test (remove nav — still obviously this leave-behind)
- [ ] No feature tour, no ROI fanfic, no “partnership” language if nothing is signed
- [ ] Password gate works on prod; `noindex` set
- [ ] Desktop + mobile skim both work; next-steps owners are named

## Anti-patterns (reject on sight)

- Multi-page IA or blog layout for a leave-behind
- Hardcoded marketing strings inside components
- Dashboard-of-cards hero, inset media cards, floating badges on imagery
- Purple/indigo AI aesthetic, cream+terracotta cliché, broadsheet hairline newspaper look
- HTTP basic auth interstitial as the “design”
- Leaving removed sections as blank number gaps in nav
- Asking the user to paste a transcript when Granola (or the repo) already has it
