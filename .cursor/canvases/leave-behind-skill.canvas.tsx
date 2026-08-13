/**
 * Dense, shareable leave-behind-site skill canvas.
 * Public inspiration only — no private / password-gated customer sites.
 * Enough detail to replicate the shell + craft bar, not just the vibe.
 */
import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  Pill,
  Row,
  Spacer,
  Stack,
  Stat,
  Table,
  Text,
  useCanvasState,
} from "cursor/canvas";

type Tab =
  | "start"
  | "spine"
  | "scaffold"
  | "recipes"
  | "auth"
  | "checklist";

const INSPIRATION = [
  {
    name: "cursor.com",
    href: "https://cursor.com",
    why: "Restraint, orange accent, editorial calm — leave-behinds should feel like a Cursor document.",
  },
  {
    name: "vercel.com",
    href: "https://vercel.com",
    why: "Whitespace and type hierarchy without noise. Study pacing, don’t clone marketing blocks.",
  },
  {
    name: "Vercel design",
    href: "https://vercel.com/design",
    why: "When to use density vs air; component craft without decoration.",
  },
  {
    name: "Geist",
    href: "https://vercel.com/font",
    why: "Default type: medium display, tight tracking, quiet body.",
  },
  {
    name: "Next.js App Router",
    href: "https://nextjs.org/docs/app",
    why: "Single-route shell, metadata/robots, middleware for the gate.",
  },
  {
    name: "cursor.com/blog",
    href: "https://cursor.com/blog",
    why: "Voice: plain, specific, short. Steal cadence, not product-page residue.",
  },
];

const ARC = [
  ["What we heard", "Prove we listened; earn the right to propose"],
  ["The gap / tension", "Make the cost of the status quo concrete"],
  ["Who Cursor is", "One-slide primer — only what hits their cycle"],
  ["Where it plugs in", "Same path, less waiting — not a reorg pitch"],
  ["Proposed work", "Self-contained, criteria-ready use case"],
  ["The pilot", "Window / tokens / setup — operational"],
  ["Timeline", "Near-term motion already in flight"],
  ["Next steps", "Owner-stamped verbs; contacts; quiet footer"],
];

const READERS = [
  ["Executive sponsor", "Understood them? Ask small and owned?"],
  ["Builder / R&D", "Self-contained but real?"],
  ["Platform / security", "Path to production, not a sandbox?"],
  ["Budget reviewer", "Funding shape plain; zero invented ROI?"],
];

const TREE = [
  "PLAN.md · CONTENT.md · README.md · .env.example",
  "src/middleware.ts",
  "src/app/layout.tsx · page.tsx · globals.css",
  "src/app/login/page.tsx",
  "src/app/api/login/route.ts · logout/route.ts",
  "src/lib/content.ts · siteAuth.ts",
  "src/components/Lockup · Hero · HeroArt · SectionNav",
  "src/components/SectionHeader · Sections · NextSteps",
  "public/illustrations/hero.png",
];

const RECIPES: { name: string; klass: string }[] = [
  {
    name: "Page column",
    klass: "mx-auto max-w-6xl px-6 sm:px-10",
  },
  {
    name: "Section shell",
    klass: "py-16 sm:py-20 · warm: bg-canvas-warm/40",
  },
  {
    name: "Eyebrow",
    klass:
      "text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase",
  },
  {
    name: "Section h2",
    klass:
      "text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] md:text-[2rem]",
  },
  {
    name: "Soft panel",
    klass: "rounded-2xl bg-panel px-6 py-6 sm:px-7 sm:py-7",
  },
  {
    name: "White/80 card",
    klass:
      "rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]",
  },
  {
    name: "Sticky nav",
    klass:
      "sticky top-0 z-40 border-b border-hairline bg-canvas/80 backdrop-blur-md",
  },
  {
    name: "Active underline",
    klass: "h-[2px] rounded-full bg-cursor-orange (bottom of nav link)",
  },
  {
    name: "Observer",
    klass: 'rootMargin: "-18% 0px -58% 0px" · threshold: [0, 0.25, 0.5]',
  },
  {
    name: "Hero title",
    klass:
      "max-w-[14ch] text-[2.75rem] font-medium leading-[1.05] tracking-[-0.035em] sm:text-[3.2rem] lg:text-[3.45rem]",
  },
  {
    name: "Primary CTA",
    klass:
      "rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-canvas hover:opacity-85",
  },
  {
    name: "Secondary CTA",
    klass:
      "rounded-full bg-panel px-5 py-2.5 text-[14px] font-medium text-ink hover:opacity-85",
  },
  {
    name: "Art bleed",
    klass: "lg:w-[108%] xl:w-[112%] on the hero image column",
  },
  {
    name: "Ink callout",
    klass: "rounded-2xl bg-ink px-5 py-5 text-canvas",
  },
  {
    name: "Table wrap",
    klass:
      "overflow-x-auto rounded-2xl bg-white/80 + hairline shadow · min-w-[40rem]",
  },
  {
    name: "Prose measure",
    klass: ".prose-measure { max-width: 36rem }",
  },
];

const TOKENS = [
  ["--canvas", "#f6f5f2", "Page ground"],
  ["--canvas-warm", "#f3f1ec", "Alternating wash"],
  ["--panel", "#ebe8e1", "Soft fill"],
  ["--ink", "#26251e", "Primary text"],
  ["--ink-muted", "#5c5b54", "Thesis / body"],
  ["--ink-faint", "#8a8982", "Meta / idle nav"],
  ["--cursor-orange", "#f54e00", "Eyebrow, active, stats"],
  ["--partner-accent", "(per account)", "Lockup square only"],
];

const BEAT_LAYOUTS = [
  ["Findings / points", "sm:grid-cols-2 white/80 cards"],
  ["Gap stats", "md:grid-cols-3 · orange value text-[1.75rem]"],
  ["Pilot stats", "lg:grid-cols-4 · orange value text-[1.35rem]"],
  ["Today vs Cursor", "Stage / Today / With Cursor table"],
  ["Acceptance + why", "ink panel + why cards (0.9fr / 1.1fr)"],
  ["Timeline", "sm:grid-cols-[10rem_1fr_8rem] · orange when"],
  ["Goals", "rounded-xl bg-panel list rows"],
  ["Pipeline stages", "bg-panel chips with → separators"],
];

const WORKFLOW = [
  ["1", "Source of truth", "Meeting, framing rule, in/out of scope"],
  ["2", "PLAN.md spine", "Readers, beats, jobs, cuts — before components"],
  ["3", "content.ts", "Typed copy + sections[] + optional hidden*"],
  ["4", "Scaffold shell", "Next/Tailwind/Geist tree from scaffold.md"],
  ["5", "Recipes", "Tokens, nav observer, hero, cards — copy class strings"],
  ["6", "Gate + ship", "Auth env, build, PR, prod verify"],
];

const CHECKLIST = [
  "Source meeting cited in content.ts / CONTENT.md",
  "Every number traceable or labeled proposed",
  "Framing rule held (accelerate teams; don’t own their products)",
  "Sticky nav = visible sections only; continuous numbers",
  "Hidden sections not mounted; no blank gaps",
  "Hero brand test + hero budget (no chips/stats in first viewport)",
  "Tokens + grain + recipes used (not a freestyle palette)",
  "Observer margins match recipe (-18% / -58%)",
  "Password gate works on prod; robots noindex",
  "Desktop + mobile sticky nav scroll; next-step owners named",
  "No feature tour / ROI fanfic / unsigned partnership language",
];

const MUST_INVENT = [
  "Meeting facts (never invent ROI or quotes)",
  "Partner accent (scarce — lockup mark is enough)",
  "Approved hero imagery (quiet atmospheric)",
  "Section spine for this account",
  "SITE_PASSWORD + SESSION_SECRET per Vercel project",
];

export default function LeaveBehindSkillCanvas() {
  const [tab, setTab] = useCanvasState<Tab>("lbs2.tab", "start");

  const tabs: { id: Tab; label: string }[] = [
    { id: "start", label: "Start here" },
    { id: "spine", label: "Story spine" },
    { id: "scaffold", label: "Scaffold" },
    { id: "recipes", label: "UI recipes" },
    { id: "auth", label: "Auth + ship" },
    { id: "checklist", label: "Checklist" },
  ];

  return (
    <Stack gap={20}>
      <Stack gap={8}>
        <Row gap={8} align="center" wrap>
          <Pill tone="info" active>
            Agent skill
          </Pill>
          <Pill tone="neutral">leave-behind-site</Pill>
          <Pill tone="success">Replication kit</Pill>
        </Row>
        <H1>Leave-behind microsite — full craft guide</H1>
        <Text tone="secondary">
          Enough to rebuild a private one-page customer leave-behind at Cursor
          memo quality: content-as-data, sticky observer nav, token CSS, section
          recipes, branded password gate. Not a vibe checklist.
        </Text>
        <Callout tone="info" title="Public inspiration only">
          Links below are public craft references (
          <Link href="https://cursor.com">cursor.com</Link>,{" "}
          <Link href="https://vercel.com">vercel.com</Link>, Geist, Next.js).
          This canvas does not include private or password-gated customer sites.
        </Callout>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="7" label="Non-negotiables" tone="info" />
        <Stat value="16" label="Copy-paste recipes" />
        <Stat value="8" label="CSS tokens" />
        <Stat value="6" label="Public inspo links" tone="success" />
      </Grid>

      <Row gap={8} wrap>
        {tabs.map((t) => (
          <Pill
            key={t.id}
            active={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </Pill>
        ))}
      </Row>

      {tab === "start" && (
        <Stack gap={16}>
          <Stack gap={8}>
            <H2>What you’re building</H2>
            <Text>
              A forwarded, password-gated, single-route scroll memo. Sticky nav.
              Numbered beats. Typed copy in one file. Thin Next.js shell. Looks
              like a Cursor document that acknowledges the customer brand — not a
              brochure, not an AI landing page.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H2>Non-negotiables</H2>
            <Grid columns={2} gap={10}>
              {[
                ["One page + sticky nav", "Forwarded links die if the arc splits across routes."],
                ["Content is data", "content.ts owns copy. Components only render. CONTENT.md mirrors."],
                ["Traceable truth", "Meeting or real pilot terms. Paraphrase. No invented ROI."],
                ["Accelerate, don’t own", "Their teams build products. Cursor accelerates those teams."],
                ["Private by default", "noindex + branded /login — never HTTP basic as the design."],
                ["Plain voice", "Short sentences. No superlatives or feature tours."],
                ["Recipes over vibes", "Copy tokens, observer margins, card shadows — don’t approximate."],
              ].map(([t, b]) => (
                <Card key={t}>
                  <CardHeader>{t}</CardHeader>
                  <CardBody>
                    <Text size="small" tone="secondary">
                      {b}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Stack>

          <Stack gap={8}>
            <H2>Ordered workflow</H2>
            <Table
              headers={["#", "Step", "Output"]}
              rows={WORKFLOW.map((w) => w)}
            />
          </Stack>

          <Stack gap={8}>
            <H2>Public inspiration</H2>
            <Grid columns={2} gap={12}>
              {INSPIRATION.map((s) => (
                <Card key={s.href}>
                  <CardHeader trailing={<Link href={s.href}>Open</Link>}>
                    {s.name}
                  </CardHeader>
                  <CardBody>
                    <Stack gap={4}>
                      <Text size="small" tone="tertiary">
                        {s.href.replace("https://", "")}
                      </Text>
                      <Text size="small" tone="secondary">
                        {s.why}
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Stack>

          <Stack gap={8}>
            <H2>You still invent</H2>
            <Text tone="secondary">
              The skill ships the shell and craft bar. These are account-specific:
            </Text>
            <Grid columns={2} gap={8}>
              {MUST_INVENT.map((x) => (
                <Text key={x} size="small" tone="secondary">
                  · {x}
                </Text>
              ))}
            </Grid>
          </Stack>
        </Stack>
      )}

      {tab === "spine" && (
        <Stack gap={16}>
          <Stack gap={8}>
            <H2>Write PLAN.md before components</H2>
            <Text>
              Order is emotional: earn trust → propose → make next step obvious.
              Next steps ≠ vision — keep the closer this-month and owned.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H3>Four skim paths</H3>
            <Table headers={["Reader", "Needs in under a minute"]} rows={READERS} />
          </Stack>

          <Stack gap={8}>
            <H3>Default arc (adapt labels)</H3>
            <Table headers={["Beat", "Job"]} rows={ARC} />
            <Callout tone="neutral" title="Numbering">
              Hero is unnumbered cover. Visible beats start at 02 and stay
              continuous. Soft-hide unconfirmed content in a named export (e.g.
              hiddenGroup); do not mount; renumber as if absent.
            </Callout>
          </Stack>

          <Stack gap={8}>
            <H3>Voice rules</H3>
            <Text size="small" tone="secondary">
              Sharp colleague memo. We/Cursor for actions; they/customer for
              facts. Sentence-case headings. ≤4 lines per paragraph. Cards/tables
              for parallel items. ≤1 callout per section.
            </Text>
            <Callout tone="warning" title="Banned texture">
              revolutionary · cutting-edge · transformative · seamless · leverage
              · delve · abstract “landscape” · fake ROI % · “not just X but Y”
            </Callout>
            <Text size="small">
              Formula: <Text as="span" weight="semibold">their teams build the
              products; Cursor accelerates the teams that do.</Text> If a sentence
              can be read as Cursor owning their AI product work, rewrite it.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H3>content.ts shape</H3>
            <Text size="small" tone="secondary">
              SectionMeta: number · id · navLabel · heading · kicker. SiteMeta:
              badge · title · thesis · preparedBy · footer. nextSteps uses label /
              heading / steps&#123;owner,action&#125; / close / contacts — not
              SectionMeta. Export sections[] as visible-only. Cite the meeting at
              the file top.
            </Text>
          </Stack>
        </Stack>
      )}

      {tab === "scaffold" && (
        <Stack gap={16}>
          <Stack gap={8}>
            <H2>Stack</H2>
            <Text>
              Next.js 15 App Router · React 19 · TypeScript · Tailwind v4 · Geist ·
              deploy on <Link href="https://vercel.com">Vercel</Link>. No UI kit,
              no CMS, no analytics, no auth SaaS.
            </Text>
            <Row gap={8} wrap>
              <Link href="https://nextjs.org/docs/app">App Router</Link>
              <Link href="https://tailwindcss.com/docs">Tailwind v4</Link>
              <Link href="https://vercel.com/font">Geist</Link>
              <Link href="https://vercel.com/docs">Vercel docs</Link>
            </Row>
          </Stack>

          <Card>
            <CardHeader>Target file tree</CardHeader>
            <CardBody>
              <Stack gap={4}>
                {TREE.map((line) => (
                  <Text key={line} size="small">
                    {line}
                  </Text>
                ))}
              </Stack>
            </CardBody>
          </Card>

          <Stack gap={8}>
            <H3>page.tsx order</H3>
            <Text size="small" tone="secondary">
              main → Hero → SectionNav → one component per visible beat →
              NextSteps (footer inside). Comment the soft-hidden section; don’t
              mount it.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H3>layout.tsx</H3>
            <Text size="small" tone="secondary">
              Geist → --font-geist-sans. metadata title/description from
              content.meta. Always robots index:false follow:false. Body:
              font var + bg-canvas text-ink antialiased.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H3>Docs contract</H3>
            <Table
              headers={["File", "Job"]}
              rows={[
                ["PLAN.md", "Readers, arc, cuts, framing — write first"],
                ["CONTENT.md", "Human mirror; content.ts wins on conflict"],
                ["README.md", "Stack + env + dev/build commands"],
                [".env.example", "SITE_PASSWORD= · SESSION_SECRET= (empty)"],
              ]}
            />
          </Stack>
        </Stack>
      )}

      {tab === "recipes" && (
        <Stack gap={16}>
          <Callout tone="success" title="This is the craft bar">
            Copy these strings. “Looks Cursor-ish” without matching observer
            margins, hairline card shadows, and token CSS will miss.
          </Callout>

          <Stack gap={8}>
            <H2>CSS tokens</H2>
            <Table
              headers={["Token", "Value", "Role"]}
              rows={TOKENS}
            />
            <Text size="small" tone="secondary">
              Map into Tailwind via @theme inline. Add quiet paper grain on
              body::before at ~3.5% opacity, mix-blend multiply. Selection uses
              orange at 28% mix. scroll-margin-top: 5rem on section[id] and
              #next-steps.
            </Text>
            <Text size="small" tone="secondary">
              Accent discipline: orange = eyebrows, active nav, big stats,
              timeline when. Partner accent = lockup square only.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H2>Class recipes</H2>
            <Stack gap={8}>
              {RECIPES.map((r) => (
                <Card key={r.name}>
                  <CardHeader>{r.name}</CardHeader>
                  <CardBody>
                    <Text size="small">
                      <Code>{r.klass}</Code>
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </Stack>

          <Stack gap={8}>
            <H2>Hero budget (first viewport only)</H2>
            <Grid columns={2} gap={12}>
              <Card>
                <CardHeader>Include</CardHeader>
                <CardBody>
                  <Stack gap={4}>
                    {[
                      "Brand lockup (partner × Cursor)",
                      "Optional private/date badge",
                      "One thesis sentence",
                      "Prepared-by line",
                      "Primary + secondary CTA",
                      "One dominant real image",
                    ].map((x) => (
                      <Text key={x} size="small" tone="secondary">
                        · {x}
                      </Text>
                    ))}
                  </Stack>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>Exclude</CardHeader>
                <CardBody>
                  <Stack gap={4}>
                    {[
                      "Stats / schedules / address blocks",
                      "Promo chips / floating badges on art",
                      "Inset media cards / collages",
                      "Dashboard card grids",
                      "Feature tour residue",
                    ].map((x) => (
                      <Text key={x} size="small" tone="secondary">
                        · {x}
                      </Text>
                    ))}
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
            <Text size="small" tone="secondary">
              Brand test: strip the nav — would this still read as this
              leave-behind? Art column slightly overscales (108%/112%) for edge
              energy without leaving the grid.
            </Text>
          </Stack>

          <Stack gap={8}>
            <H2>Beat layout map</H2>
            <Table headers={["Shape", "Layout"]} rows={BEAT_LAYOUTS} />
          </Stack>

          <Stack gap={8}>
            <H2>Reject on sight</H2>
            <Grid columns={2} gap={8}>
              {[
                "Purple → indigo AI gradients",
                "Cream + terracotta + display-serif cliché",
                "Broadsheet hairline newspaper columns",
                "Default dark mode / glow / glass stacks",
                "Hero pill clusters / emoji bullets",
                "HTTP basic auth as the design",
                "Hardcoded marketing strings in components",
                "Blank number gaps after removals",
              ].map((x) => (
                <Text key={x} size="small" tone="secondary">
                  · {x}
                </Text>
              ))}
            </Grid>
          </Stack>

          <Stack gap={8}>
            <H3>Motion budget</H3>
            <Text size="small" tone="secondary">
              Sticky active underline · CTA/link opacity hover · optional smooth
              scroll with prefers-reduced-motion opt-out. No parallax, no
              scroll-jacking.
            </Text>
          </Stack>
        </Stack>
      )}

      {tab === "auth" && (
        <Stack gap={16}>
          <Stack gap={8}>
            <H2>Branded password gate</H2>
            <Text>
              Private leave-behind, on-brand login, shareable password. Same cream
              canvas + lockup as the site — not browser basic-auth chrome.
            </Text>
          </Stack>

          <Table
            headers={["Env", "Purpose"]}
            rows={[
              ["SITE_PASSWORD", "Shared password for /login"],
              ["SESSION_SECRET", "HMAC key for httpOnly session cookie"],
            ]}
          />

          <Grid columns={2} gap={12}>
            <Card>
              <CardHeader>Cookie / token</CardHeader>
              <CardBody>
                <Stack gap={4}>
                  <Text size="small" tone="secondary">
                    · httpOnly · SameSite=Lax · Secure in prod · ~14d
                  </Text>
                  <Text size="small" tone="secondary">
                    · Token shape: exp.&lt;hmac-sha256-base64url&gt;
                  </Text>
                  <Text size="small" tone="secondary">
                    · Timing-safe compare for password + signature
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Middleware</CardHeader>
              <CardBody>
                <Stack gap={4}>
                  <Text size="small" tone="secondary">
                    · Public: /login, /api/login, /api/logout, /_next*, static,
                    /illustrations/*
                  </Text>
                  <Text size="small" tone="secondary">
                    · Prod missing env → /login?error=config (fail closed)
                  </Text>
                  <Text size="small" tone="secondary">
                    · Local/dev may skip auth if unset (agents can build)
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Grid>

          <Stack gap={8}>
            <H3>Login UX</H3>
            <Text size="small" tone="secondary">
              Centered max-w-md: Lockup → orange “Private leave-behind” eyebrow →
              “Enter the password to continue.” → password field → full-width ink
              pill button. Honor ?next= after success. Suspense-wrap
              useSearchParams.
            </Text>
          </Stack>

          <Callout tone="success" title="Ship loop">
            npm run build → PR → merge to main → confirm Vercel production green
            → hit / (redirects to /login) → after auth, nav/sections match
            sections[] → report PR URL + prod URL.
          </Callout>

          <Row gap={8} wrap>
            <Link href="https://vercel.com/docs/environment-variables">
              Vercel env vars
            </Link>
            <Link href="https://nextjs.org/docs/app/building-your-application/routing/middleware">
              Next.js middleware
            </Link>
          </Row>
        </Stack>
      )}

      {tab === "checklist" && (
        <Stack gap={16}>
          <Stack gap={8}>
            <H2>Before you call it done</H2>
            <Text tone="secondary">
              A beautiful page that fails truth, nav continuity, or the gate is
              not done.
            </Text>
          </Stack>

          <Card>
            <CardHeader>Quality checklist</CardHeader>
            <CardBody>
              <Stack gap={8}>
                {CHECKLIST.map((item, i) => (
                  <Row key={item} gap={10} align="start">
                    <Pill size="sm" tone="neutral">
                      {String(i + 1).padStart(2, "0")}
                    </Pill>
                    <Text size="small">{item}</Text>
                  </Row>
                ))}
              </Stack>
            </CardBody>
          </Card>

          <Stack gap={8}>
            <H2>Invoke the skill</H2>
            <Text>
              In Agent chat: ask for a leave-behind / pilot plan microsite, or run{" "}
              <Text as="span" weight="semibold">
                /leave-behind-site
              </Text>
              . Agent should load scaffold + replication-recipes before coding.
            </Text>
            <Text size="small" tone="tertiary">
              Skill path: .cursor/skills/leave-behind-site/ (SKILL.md +
              references/)
            </Text>
          </Stack>

          <Divider />
          <Row gap={12} wrap align="center">
            <Text size="small" tone="tertiary">
              Public inspo
            </Text>
            <Spacer />
            <Link href="https://cursor.com">cursor.com</Link>
            <Link href="https://vercel.com">vercel.com</Link>
            <Link href="https://vercel.com/design">design</Link>
            <Link href="https://vercel.com/font">Geist</Link>
            <Link href="https://nextjs.org">Next.js</Link>
            <Link href="https://cursor.com/blog">blog</Link>
          </Row>
        </Stack>
      )}
    </Stack>
  );
}
