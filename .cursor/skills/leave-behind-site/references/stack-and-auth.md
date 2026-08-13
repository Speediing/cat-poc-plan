# Stack and auth

## Recommended stack

- Next.js App Router (current stable), React 19, TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`)
- No CMS, no analytics, no i18n unless requested
- Deploy on Vercel; production domain is the leave-behind URL you share

## File layout

```
PLAN.md                 # IA, readers, cuts, framing rule
CONTENT.md              # human-readable mirror of copy
src/lib/content.ts      # typed source of truth + sections[] + optional hidden*
src/lib/siteAuth.ts     # password verify + signed session cookie (Web Crypto)
src/middleware.ts       # gate all routes except login, api/login, static
src/app/layout.tsx      # font var, metadata title/description, robots noindex
src/app/page.tsx        # <Hero/> <SectionNav/> …sections… <NextSteps/>
src/app/login/page.tsx  # branded password form
src/app/api/login|logout/route.ts
src/app/globals.css     # tokens, grain, selection, scroll-margin
src/components/…
public/…                # real imagery (not stock abstract blobs)
```

## Content model (minimum)

```ts
export interface SectionMeta {
  number: string;    // "02"
  id: string;        // kebab anchor
  navLabel: string;  // nav + eyebrow
  heading: string;   // argument
  kicker: string;    // optional supporting line
}

export const sections: SectionMeta[]; // visible only, continuous numbers
```

Components read `content.*` / `sections`. Do not duplicate strings in JSX.

## Password gate

Goals: private leave-behind, on-brand, shareable password, no basic-auth browser chrome.

| Env | Purpose |
|-----|---------|
| `SITE_PASSWORD` | Shared password |
| `SESSION_SECRET` | HMAC/sign key for httpOnly cookie |

Behavior:

- Production: both required; missing config → fail closed (or login error), never silently public.
- Local dev: if unset, allow through so agents can build without secrets.
- Cookie: httpOnly, Secure in prod, SameSite=Lax, multi-day max-age OK.
- Compare passwords with timing-safe equality.
- Middleware matcher excludes `/login`, `/api/login`, and static assets.
- Login page matches site craft (lockup, cream canvas, plain headline). No “not for public distribution” essays unless the account asks for them.

Document env vars in README + `.env.example` with empty values only.

## Metadata

```ts
robots: { index: false, follow: false }
```

Title = leave-behind title. Description = thesis sentence.

## Ship loop

1. `npm run build`
2. PR → merge to main
3. Confirm Vercel production status green
4. Hit prod: `/` redirects to `/login`; after auth, nav/sections match `sections`
5. Return PR URL + prod URL

## Reuse from an exemplar

When cloning cat-poc-plan (or a sibling):

1. Replace `content.ts` + `CONTENT.md` + `PLAN.md` first
2. Retarget tokens/lockup/imagery second
3. Remount/hide sections third
4. Rotate `SITE_PASSWORD` / `SESSION_SECRET` on the new Vercel project — never copy production secrets into git
