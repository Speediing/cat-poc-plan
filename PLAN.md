# PLAN.md · Caterpillar Digital × Cursor Pilot Microsite (Nate Litton)

> **Live frame (Aug 2026 leave-behind):** Aug 11 Dallas onsite. Customer-facing plan is **one work week / five working days** on photo quality detection, mapped to Cat's path (Intake → HLA/AVT → Execution → Release → Support): Mon intake/requirements · Tue mini HLA/AVT · Wed execution that eng keeps · Thu eng handoff + MLOps · Fri reverse-demo and decide. A 30-day token trial is the commercial envelope, not the schedule. HOW WE RUN IT + WHAT WE PROVE sit high on the page. See `CONTENT.md` / `src/lib/content.ts`. Sections below are earlier IA notes and may lag the live site.

**What this is:** a private leave-behind microsite for Caterpillar Digital stakeholders - Nate Litton and the people he forwards it to (his AI R&D lead, the incoming AI/ML Ops lead, his chief of staff, possibly Augie's office or a CFO reviewer). Not public marketing. It should read like a well-prepared internal memo that happens to be a website.

**Source of truth:** the Jul 28, 2026 discovery call — *Nate Litton | Cursor - Discovery* (Jason Wiker, Joe Masello, Sahil Patel / Nate Litton, Madison Motyl). Every factual claim on the site traces to that call or to Cursor's standard pilot terms. No other Caterpillar conversations are referenced.

**Who reads it and why:**
- **Nate** — wants to see we understood his org, his constraints, and his sequencing instinct (prove one area, then expand).
- **The AI R&D lead** — wants to know the pilot is self-contained (low integration/infosec drag) but still representative.
- **The incoming AI/ML Ops lead** — wants to know how this touches productionization, the thing the Aug 1 reorg put under Nate.
- **A CFO/budget reviewer** — wants the funding model in plain terms, fast.

The site must work for all four without any of them reading the whole thing. That drives every IA decision below.

**One framing rule that governs all copy:** parts identification, translation, and the CAT AI assistant are AI *products* Nate's teams build. Cursor is not pitching to build them — Cursor accelerates the teams that do, and attacks the 6-month idea-to-production cycle directly. The site must never blur this line; blurring it is the fastest way to lose the AI R&D lead.

---

## 1. The story arc (non-negotiable spine)

Four beats, in order. These are the four top-level sections of the site, each with a persistent number and short name used in nav:

| # | Nav label | Beat | One-line job |
|---|-----------|------|--------------|
| 01 | What we heard | Customer truth | Prove we listened; earn the right to propose |
| 02 | The pilot | Pilot plan | Show the 30 days are operationally real, not a sales motion |
| 03 | Why now | Business case | Give the budget reviewer everything, invent nothing |
| 04 | Go forward | Scale path | Make the ~7,000-person digital org the destination, pilot the first step |

The arc is deliberately: *you told us this → here's the contained experiment → here's why the experiment is worth running now → here's what it unlocks.* Each section ends with a one-sentence handoff to the next (see §4, "Section handoffs").

A structural gift in this account: Nate's own stated rollout preference — *pick one area, prove it works, expand to AI-focused workstreams, then the broader org* — **is** the go-forward wave model. Beat 04 doesn't propose Cursor's scale plan to Nate; it hands Nate's plan back to him with operational scaffolding. The copy should make that explicit.

---

## 2. Page architecture

**One page, scroll-driven, with a sticky mini-nav.** No sub-pages. A leave-behind gets forwarded and skimmed; a multi-page site fragments the arc and dies in a forwarded link. The sticky nav (01–04 + "Next steps") gives each stakeholder a direct jump to their section.

```
┌──────────────────────────────────────────────┐
│ HERO / COVER                                 │
│ - "Private — prepared for Caterpillar" badge │
│ - Title + one-sentence thesis                │
│ - Date + prepared-by (Jason, Joe, Sahil)     │
├──────────────────────────────────────────────┤
│ 01 WHAT WE HEARD                             │
│   - Org context strip (digital vs technology │
│     split; Nate's scope; Aug 1 reorg)        │
│   - 3 truth cards: the 6-month cycle /       │
│     the AI product load / the reorg moment   │
│   - "How Nate wants to run this" callout     │
│     (self-contained but representative;      │
│     one area → prove → expand)               │
├──────────────────────────────────────────────┤
│ 02 THE PILOT                                 │
│   - Deal in one paragraph (30 days, 100%     │
│     token costs, <1 day implementation)      │
│   - Pilot shape: the two requirements held   │
│     in tension + our recommendation          │
│   - Week-by-week skeleton (W0–W4)            │
│   - "Done means" — pilot success criteria    │
│   - What we need from Caterpillar            │
├──────────────────────────────────────────────┤
│ 03 WHY NOW                                   │
│   - 5 argument blocks (6-month tax, reorg    │
│     window, pattern-before-scale, token      │
│     baseline, parallel technology track)     │
│   - Funding model box (budget-ready framing) │
├──────────────────────────────────────────────┤
│ 04 GO FORWARD                                │
│   - The destination statement (~7,000 org)   │
│   - 4-wave scale model (Nate's sequence,     │
│     operationalized)                         │
│   - "Ready to scale means" criteria          │
│   - Stakeholder map (who carries what)       │
├──────────────────────────────────────────────┤
│ NEXT STEPS (closer, not a beat)              │
│   - Dallas on-site: owner, window, agenda    │
│   - Contacts (Jason, Joe, Sahil)             │
│   - Confidentiality footer                   │
└──────────────────────────────────────────────┘
```

**Why "Next steps" is separate from beat 04:** Go Forward is the *vision* (multi-wave, org-wide). Next Steps is the *this-month* motion already agreed on the call — the Dallas on-site. Mixing them shrinks the vision to a to-do list. Keeping them apart lets 04 end big and the page end concrete.

---

## 3. Section-by-section content spec

### Hero / Cover
- **Badge:** `Private · Prepared for Caterpillar Digital · August 2026`
- **Title:** "A 30-day plan to prove Cursor inside Caterpillar Digital" (working — direct, no cleverness)
- **Thesis (one sentence):** Cursor funds a 30-day pilot with Nate Litton's organization to answer one question with evidence: can the teams building Caterpillar's AI products ship dramatically faster — starting with the six-month idea-to-production cycle.
- **Meta line:** Prepared by Jason Wiker, Joe Masello & Sahil Patel, Cursor · Following the July 28 conversation with Nate Litton
- **Cut:** logo lockup theatrics, any "partnership" language (nothing is signed).

### 01 — What we heard
**Job:** synthesized customer truth, not a transcript. Opens with a compact **org context strip** (three short facts, rendered as a labeled row, not prose): Digital vs Technology split (in-cab = CAT Technology under Brandon; everything else — cat.com, parts.com, digital products, the CAT AI assistant cloud + edge — is Digital); Nate's scope (all AI, data, and ML on the digital side, including an AI R&D team; reports to the Chief Digital Officer); modernization posture (5–7 years in, far less legacy code than the technology side). This strip exists so a forwarded reader instantly knows *which* Caterpillar this page is about.

Then three truth cards, each with a *label → situation → what it means* shape. Everything traceable to the Jul 28 call; no invented quotes (paraphrase, never quotation marks).

1. **Six months to ship a simple feature.** Fragmented handoffs across plan, build, and integration organizations stretch the idea-to-production cycle to ~6 months, independent of how good the idea is. This is the pain Cursor attacks most directly — it's a software delivery problem, not an AI research problem.
2. **The AI product load is heavy and specific.** Visual parts identification across 1M+ parts with thin imagery on older parts (synthetic image generation needed). Translation running close to tens of millions on human translators, because CAT-specific vocabulary plus safety risk rules out generic LLMs. These are hard builds owned by Nate's teams — every one of them pays the six-month tax.
3. **August 1 changed what Nate controls.** The reorg moved the ML and AI Ops platform teams under him, giving his org more control over productionizing AI solutions. The delivery pipeline his teams depend on is, for the first time, largely his to shape.

**Callout — "How Nate wants to run this":** his AI R&D lead suggested a self-contained pilot environment (fewer integration dependencies, less infosec overhead) — but Nate wants it meaty and representative enough to establish a repeatable pattern, ideally demonstrating the full idea-to-production flow end to end, including ticketing integration. And his hard constraint: don't require thousands of people to change how they work overnight — pick one area, prove it, expand to AI-focused workstreams, then the broader org. Stated plainly as his stated preference, not our spin.

**Cut:** attendee lists, call logistics, anything that reads like meeting minutes. Do not name Jamie or Augie beyond the org-context strip's reporting line; this page may travel.

### 02 — The pilot (operational heart — most space on the page)
**Opens with the deal in one paragraph:** 30 days. Cursor covers 100% of token costs across all models. Implementation takes less than a day. Two outputs: (1) a viability verdict on real Caterpillar Digital work, (2) a token consumption baseline that makes post-pilot costs a measurement, not an estimate.

**Pilot shape — name the tension, then resolve it.** The call surfaced two requirements that pull against each other, and the site should say so honestly (it builds trust and shows we listened):

- *Self-contained* — fewer integration dependencies, less infosec overhead, fast start.
- *Representative* — meaty enough to establish a repeatable pattern; not an isolated corner that has to be rebuilt elsewhere; ideally the full idea-to-production flow end to end, including ticketing.

**Our recommendation:** pilot with the **AI R&D team plus the newly arrived ML/AI Ops platform teams** — a cohort Nate fully controls post-reorg — on **one real initiative selected at the Dallas on-site** (the digital use case is deliberately still open; Dallas exists to pick it). Structure the pilot so the selected initiative travels the *entire* idea-to-production path — ticket to shipped — inside a self-contained environment. That satisfies both requirements: contained in blast radius, representative in shape. The specific use case is a Dallas decision, not a website decision; the site proposes the *shape*, and says so.

**Week-by-week skeleton** (standard Cursor POC shape, adapted to this account — rendered as a five-row timeline, W0 through W4):

- **Week 0 — Dallas outcomes → kickoff.** Use case selected at the on-site; pilot cohort named (suggest 10–20 developers across AI R&D + ML/AI Ops); self-contained environment agreed with infosec; seats provisioned — implementation takes less than a day, so Week 0 is about decisions, not installation. Success criteria co-signed before anyone writes code.
- **Week 1 — Enablement.** Hands-on onboarding with a Cursor engineer; developers working in their real codebase by day 2–3; the end-to-end flow mapped: where the ticket enters, what "shipped" means for the pilot initiative.
- **Weeks 2–3 — Build & prove.** Heads-down on the selected initiative, ticket to production, with Cursor in the loop at every stage the cohort touches. Weekly office hours; usage and token data accumulating in the background.
- **Week 4 — Readout.** Joint session: what shipped, elapsed idea-to-production time for the pilot initiative vs. the ~6-month norm, what the developers said, the token consumption baseline, and a concrete proposal for Wave 1 (Section 04). Decision-ready, not a feelings recap.

**"Done means" — pilot success criteria (proposed, to be co-signed at kickoff):**
1. Pilot developers used Cursor on real Caterpillar Digital work — not sandboxes — for the majority of the 30 days.
2. The selected initiative demonstrably moved through the full idea-to-production flow (including ticketing) inside the pilot window, shown by Cat's own developers at the readout.
3. The pattern is written down: an enablement-and-delivery playbook another digital team could pick up without rebuilding from scratch — Nate's "repeatable pattern" test.
4. Token consumption baseline delivered: actual usage by model, per developer, over 30 days — the number the budget conversation needs.
5. Infosec questions surfaced and answered during the pilot window, not after it.

**What we need from Caterpillar (keep short — signals low friction):** the Dallas on-site on the calendar (Joe → Madison, already in motion); a named pilot lead (natural fit: the AI R&D lead); use-case selection at Dallas; a self-contained environment sign-off from infosec; ~2 hrs/week from the pilot lead; a readout date set at kickoff.

**Cut:** feature tours, model comparisons, anything resembling a product datasheet. The pilot section sells the *process*, not the product.

### 03 — Why now (business case)
**Job:** budget-ready without fluff. Five argument blocks, each *claim → grounding → so-what*. All grounding comes from the call or Cursor's pilot terms — **zero invented metrics** (no ROI %, no projected savings, no made-up productivity multipliers). The only numbers on the page: 6 months, 1M+ parts, "close to tens of millions" (translation spend, as stated), 30 days, 100% of token costs, <1 day implementation, ~7,000-person digital org.

1. **The six-month tax compounds across every initiative.** Parts identification, translation, the CAT AI assistant — each pays the same idea-to-production toll. Cutting the cycle isn't one project's win; it's a multiplier on the whole digital AI portfolio. The pilot measures the cut on one real initiative instead of asserting it.
2. **The reorg window is open.** As of August 1, ML and AI Ops sit under Nate. New reporting lines are when delivery patterns get set; a pilot now means the tooling pattern is established while the concrete is wet, not retrofitted after teams have settled.
3. **Pattern before scale is the cheap sequencing.** Nate's own constraint — don't make thousands of people change overnight — is also the fiscally conservative one. A 30-day, one-area pilot is the smallest unit of evidence that can honestly justify (or kill) a broader rollout. The alternative isn't "no decision"; it's a slower decision made with less data.
4. **A token baseline instead of a budget guess.** Cursor covers 100% of token costs across all models for the 30 days; the exhaust is a real consumption baseline from Caterpillar's own usage. Post-pilot enterprise pricing follows Cursor's standard shape — a shared token pool with per-developer spend controls — so the budget conversation starts from measured data, with caps. Presented as the shape of the model, not a quote.
5. **The technology side is already moving.** Brandon Newman's org has a scoped use case on the technology side. That's a reference point, not a race — but it means Caterpillar will have Cursor evidence soon regardless; the question is whether Digital generates its own or reads someone else's.

**Funding model box (visually distinct, quotable — the screenshot that gets forwarded to a budget reviewer):** 30-day pilot · Cursor covers 100% of token costs across all models · Implementation in under a day · Outputs: viability verdict + token consumption baseline + repeatable-pattern playbook · Post-pilot: enterprise agreement, shared token pool, per-developer spend controls.

**Cut:** competitor comparisons, industry stat dumps, analyst quotes. Grounded-in-their-facts beats impressive-sounding. Do not editorialize the translation spend beyond what was said ("close to tens of millions").

### 04 — Go forward
**Job:** make scale feel like the destination. Nate's AI cohort is the beachhead; the addressable population is the **~7,000-person Caterpillar digital organization**.

**Opens with the destination statement:** the pilot is designed as Wave 0 of a rollout, not a one-off experiment — and the rollout sequence is Nate's, from the call: one area → prove it → AI-focused workstreams → broader org. Everything measured in the 30 days (enablement time, cycle-time evidence, token consumption, the written playbook) is the operating data for the waves that follow.

**Four-wave model (honest and high-level — waves gated on evidence, no fake org charts, no dates beyond Wave 1, no invented team counts):**

- **Wave 0 — Pilot (now → ~30 days).** AI R&D + ML/AI Ops cohort, one initiative, end-to-end. Output: viability verdict + token baseline + the playbook + this scale proposal made concrete.
- **Wave 1 — AI-focused workstreams (post-readout).** Expand across Nate's own scope — the teams building parts identification, translation, and the CAT AI assistant. Pilot developers become internal references; the Wave 0 playbook is reused, not reinvented. This is the wave the readout must earn.
- **Wave 2 — Platform enablement.** The unglamorous middle that makes Wave 3 possible: enterprise agreement in place, infosec posture hardened from pilot findings into standard approval (self-contained exception → sanctioned pattern), shared token pool with per-developer spend controls live, enablement owned by Caterpillar champions rather than Cursor staff, ticketing/SDLC integration generalized beyond the pilot environment.
- **Wave 3 — Digital org at scale.** Standard onboarding motion across the ~7,000-person digital organization, team by team, with usage and spend visible per team. Deliberately not scheduled here — the honest position is that Wave 3's pace is set by Wave 1–2 evidence. This is also the wave where Nate's "don't force thousands to change overnight" constraint is honored by design: teams onboard on evidence and pull, not mandate.

**"Ready to scale means" (distinct from pilot success — this is the org-level bar):**
1. Pilot met its co-signed success criteria (Section 02).
2. Token economics validated: the measured baseline maps to an acceptable per-developer cost under the shared-pool model.
3. Infosec cleared for a standing rollout pattern, not just a pilot exception.
4. At least two teams beyond the pilot cohort asking to onboard (pull, not push).
5. The playbook works without Cursor staff in the room — a Caterpillar champion has run an onboarding using it.

**Stakeholder map (compact table — who carries what into which wave):** Nate Litton (AI/data/ML, digital — executive sponsor, Waves 0–3), AI R&D lead (pilot lead, Wave 0; suggested the self-contained shape), incoming AI/ML Ops lead (productionization path, Waves 0–2), Madison Motyl (EA — Dallas scheduling), Nate's chief of staff (coordination), Brandon Newman (CAT Technology — parallel track, reference point only, out of scope for this plan).

**Cut:** revenue projections, seat-count projections, org charts, hiring implications, any date past Wave 1, anything implying authority over the technology side.

### Next steps (closer)
Owner-stamped, verbatim from the call — this section proves motion already exists:
1. **Joe Masello (Cursor)** → reach out to Madison Motyl to schedule the Dallas on-site.
2. **Dallas on-site (target: within 2–3 weeks)** → with Nate's AI R&D lead and incoming AI/ML Ops lead; coordinated via Madison and Nate's new chief of staff.
3. **Dallas agenda (set on the call):** where the team spends time today vs. desired state · SDLC bottlenecks · AI maturity · use case / value case mapping. The pilot's Week 0 begins where this agenda ends.

Then contacts (Jason Wiker, Joe Masello, Sahil Patel — name, role, email placeholder) and the confidentiality footer: `Private — prepared for Caterpillar. Not for redistribution.`

---

## 4. Copy direction

- **Voice:** a sharp colleague's memo. Short declarative sentences. First person plural for Cursor ("we cover token costs"), third person for Cat facts ("Nate's teams have been…"). Zero superlatives — no "revolutionary," "cutting-edge," "transformative."
- **Truth discipline:** every factual claim traces to the Jul 28 call or Cursor's standard pilot terms. Paraphrase Nate; never fabricate quotes. Anything forward-looking is explicitly labeled proposed/recommended. The only org-size number anywhere is ~7,000. Translation spend is only ever "close to tens of millions," as stated.
- **The product/tooling line:** never imply Cursor builds parts identification or translation. The formula, used consistently: *Nate's teams build the AI products; Cursor accelerates the teams.* If a sentence can be misread as Cursor doing the AI product work, rewrite it.
- **Section handoffs:** each beat ends with one linking sentence — 01→02: *"Every problem above shares a bottleneck: how fast an idea becomes shipped software. The pilot is built to test exactly that."* 02→03: *"Thirty days is the how. Here's the why-now."* 03→04: *"The pilot answers the question for one cohort. This is what the answer unlocks."*
- **Scannability rules:** no paragraph over 4 lines rendered; every section skimmable from headings + bold lead-ins alone; tables/cards over prose wherever content is parallel; one callout box max per section.
- **What to cut globally:** product feature lists, editor screenshots, testimonials from other customers, security certification walls (one line + "available on request" suffices), anything that makes it read like cursor.com.

---

## 5. Implementation notes for the build agent

- **Stack:** Next.js (App Router), single route `/`, static — no CMS, no API routes. All copy imported from `src/lib/content.ts`; components render content, never hardcode it. `CONTENT.md` mirrors the same content for human review — if they diverge, `content.ts` wins.
- **Section → component mapping** (one component per beat, composed in `page.tsx`): `Hero`, `WhatWeHeard` (`OrgContextStrip` + 3 `TruthCard`s + callout), `ThePilot` (`DealParagraph`, `PilotShape`, `WeekTimeline`, `CriteriaList`, `AsksList`), `WhyNow` (5 `ArgumentBlock`s + `FundingBox`), `GoForward` (`WaveTimeline`, `CriteriaList` reused, `StakeholderTable`), `NextSteps` + footer. Sticky `SectionNav` derived from the `sections` export.
- **Numbered sections:** 01–04 numbering is part of the content model (`Section.number`) and should render prominently — it reinforces the arc.
- **Design tone (brief — full art direction is a later PR):** Cursor cream background, ink-black text, generous whitespace, editorial typography. Caterpillar yellow (#FFCD11) used *scarcely* — section numbers, the funding-box border, active nav state, and nothing else. It should feel like a Cursor document acknowledging Cat, not a Cat-branded page.
- **Non-goals for the build:** no animation-heavy scroll effects, no dark mode, no mobile-first heroics beyond sane responsive stacking, no analytics.
