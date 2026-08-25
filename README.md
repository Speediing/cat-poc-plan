# Caterpillar Digital × Cursor · Pilot Plan

Customer-facing leave-behind from Cursor to Caterpillar Digital.  
**Source:** Aug 11, 2026 Dallas onsite (*Cursor & Cat Digital*) + [cat-cursor-followup](https://cat-cursor-followup.vercel.app) structure/voice.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Content

All site copy lives in [`src/lib/content.ts`](src/lib/content.ts). Components render that model and do not hardcode marketing copy. [`CONTENT.md`](CONTENT.md) is the human-readable mirror; [`PLAN.md`](PLAN.md) is the IA + design direction.

## Password gate

The site is protected by a custom branded login page (Next.js middleware + httpOnly session cookie). Not HTTP basic auth.

Set these on Vercel (Production + Preview). Do not commit real values.

| Variable | Purpose |
|----------|---------|
| `SITE_PASSWORD` | Shared password shown on `/login` |
| `SESSION_SECRET` | Long random string used to sign the session cookie |

```bash
# Local (optional: without both vars, auth is skipped in development)
cp .env.example .env.local
# fill SITE_PASSWORD and SESSION_SECRET
```

Generate a session secret:

```bash
openssl rand -base64 32
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
