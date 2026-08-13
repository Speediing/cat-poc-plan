---
name: leave-behind-site
description: >-
  Build a Cursor-quality private customer leave-behind microsite you can
  actually replicate (single-page scroll memo): content-as-data, sticky nav,
  token CSS, branded password gate, hero/section recipes. Use for pilot plans,
  onsite follow-ups, discovery leave-behinds, or when the user asks to match
  leave-behind craft / Cursor×customer memo quality.
---

# Leave-behind microsite

Ship a private one-page site that reads like a sharp internal memo, not marketing.

**This skill is a replication kit**, not a vibe checklist. After reading this file, load the references — especially [replication-recipes.md](references/replication-recipes.md) and [scaffold.md](references/scaffold.md) — before writing code.

Public craft inspiration (share these, never paste private customer URLs into shared artifacts):

- [cursor.com](https://cursor.com) — restraint, orange accent, editorial calm
- [vercel.com](https://vercel.com) / [vercel.com/design](https://vercel.com/design) — whitespace, hierarchy, when not to decorate
- [Geist](https://vercel.com/font) — default type
- [Next.js App Router](https://nextjs.org/docs/app) — shell + middleware + metadata

## When this skill applies

- New account leave-behind / pilot plan / onsite follow-up
- Rewrite after a better source meeting surfaces
- Raising craft on an existing leave-behind to match the gold standard

Do **not** use for public marketing sites, docs portals, dashboards, or app UI.

## Non-negotiables

1. **One page, scroll-driven, sticky section nav.** No multi-route story.
2. **Content is data.** All copy in `src/lib/content.ts`. Components only render. `CONTENT.md` mirrors; `content.ts` wins.
3. **Traceable truth.** Every customer fact → named meeting (prefer Granola) or real pilot terms. Paraphrase; never invent quotes/ROI.
4. **Cursor accelerates their teams.** Never imply Cursor builds their AI products.
5. **Private by default.** `robots: noindex`. Branded `/login` gate (not HTTP basic).
6. **Plain voice.** Short sentences. No superlatives, feature tours, testimonial walls.
7. **Recipes over vibes.** Use the token CSS, class strings, observer margins, and component shells in the references — don’t “approximate Cursor.”

## Workflow (do in order)

### 1. Lock the source of truth

- Canonical meeting(s), attendees, date, in vs out of scope
- One-line framing rule (what must never be blurred)
- Steal structure/voice from a sibling leave-behind — not stale facts

### 2. Write the story spine (`PLAN.md`) before components

Readers + numbered beats + section jobs + explicit cuts.

Default arc (adapt labels):

| Beat | Job |
|------|-----|
| What we heard | Prove we listened |
| The gap / tension | Cost of status quo |
| Who Cursor is | One-slide primer for *their* cycle |
| Where it plugs in | Same path, less waiting |
| Proposed work | Self-contained, criteria-ready use case |
| The pilot | Window / tokens / setup — operational |
| Timeline | Near-term motion |
| Next steps | Owner-stamped verbs (separate from vision) |

Principles: **listen → propose → make the next step obvious.** Soft-hide unconfirmed peeps/sections via a named export; renumber visible sections with no gaps.

→ [story-and-ia.md](references/story-and-ia.md)

### 3. Draft copy in `content.ts`

- `SectionMeta`: `number`, `id`, `navLabel`, `heading`, `kicker`
- `sections[]` = visible only, continuous numbers (hero unnumbered → start at `02`)
- Scannability: ≤4 lines/paragraph; cards/tables for parallel items; ≤1 callout/section
- Unslop pass before ship

→ [voice-and-truth.md](references/voice-and-truth.md)

### 4. Scaffold the thin Next shell

Stack: Next.js App Router, TypeScript, Tailwind v4, Geist, single `/`.

```
PLAN.md  CONTENT.md  README.md  .env.example
src/middleware.ts
src/app/{layout,page,globals.css,login/page.tsx,api/login,api/logout}
src/lib/{content.ts,siteAuth.ts}
src/components/{Lockup,Hero,HeroArt,SectionNav,SectionHeader,Sections,NextSteps}
public/illustrations/hero.png
```

`page.tsx` order: Hero → SectionNav → beats → NextSteps (footer inside).

→ [scaffold.md](references/scaffold.md)

### 5. Implement craft from recipes (mandatory)

Do not freestyle spacing/type. Copy:

- Token CSS + paper grain + `.prose-measure`
- Sticky nav + IntersectionObserver (`rootMargin: "-18% 0px -58% 0px"`)
- Section shell / header eyebrow / SoftPanel / white/80 card / table / CTA pills
- Hero budget + art column bleed (`lg:w-[108%]`)
- Orange for emphasis; partner accent scarce (lockup square)

→ [replication-recipes.md](references/replication-recipes.md)  
→ [visual-system.md](references/visual-system.md)

### 6. Password gate + ship

- `SITE_PASSWORD` + `SESSION_SECRET` on Vercel (Production + Preview)
- HMAC session cookie; timing-safe compare; fail closed in prod; skip in local if unset
- `npm run build` → PR → merge → confirm prod green → verify gate + nav + numbering
- Report PR URL + prod URL

→ [stack-and-auth.md](references/stack-and-auth.md)

## Quality checklist

**Story / truth**
- [ ] Source meeting cited at top of `content.ts` / `CONTENT.md`
- [ ] Every number traceable or labeled proposed
- [ ] Framing rule held (Cursor accelerates; doesn’t own their products)

**IA / nav**
- [ ] Sticky nav matches visible sections only; numbers continuous
- [ ] Hidden sections not mounted; no blank number gaps
- [ ] Next-step owners named

**Craft**
- [ ] Hero passes brand test (strip nav — still this leave-behind)
- [ ] Hero budget respected (no stats/chips in first viewport)
- [ ] Tokens + grain + recipes used (not a one-off palette)
- [ ] Desktop + mobile sticky nav scroll works

**Ship**
- [ ] Password gate works on prod; `noindex` set
- [ ] No feature tour / ROI fanfic / unsigned “partnership” language

## Anti-patterns

- Multi-page IA for a forwarded leave-behind
- Hardcoded marketing strings inside components
- Dashboard-of-cards hero, inset media cards, floating badges on imagery
- Purple/indigo AI aesthetic, cream+terracotta cliché, broadsheet newspaper look
- HTTP basic auth interstitial as the “design”
- “Looks Cursor-ish” without copying observer margins / token CSS / card shadow recipe
- Asking the user to paste a transcript when Granola (or the repo) already has it

## Reference map

| File | Load when |
|------|-----------|
| [scaffold.md](references/scaffold.md) | Bootstrapping a new repo / file tree |
| [replication-recipes.md](references/replication-recipes.md) | Implementing UI — **required before coding sections** |
| [visual-system.md](references/visual-system.md) | Hero/composition/reject aesthetics |
| [story-and-ia.md](references/story-and-ia.md) | Beats, readers, hide/renumber rules |
| [voice-and-truth.md](references/voice-and-truth.md) | Copy pass |
| [stack-and-auth.md](references/stack-and-auth.md) | Middleware, cookie, env, ship loop |
