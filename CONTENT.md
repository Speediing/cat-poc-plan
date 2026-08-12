# CONTENT.md — Site copy (human-readable mirror of `src/lib/content.ts`)

> This file mirrors the content model for review. If this file and `src/lib/content.ts` diverge, `content.ts` wins. Grounding: Jul 28, 2026 discovery call — *Nate Litton | Cursor - Discovery* — plus Cursor's standard pilot terms. No other sources.

---

## Hero

- **Badge:** Private · Prepared for Caterpillar Digital · August 2026
- **Title:** A 30-day plan to prove Cursor inside Caterpillar Digital
- **Thesis:** Cursor funds a 30-day pilot with Nate Litton's organization to answer one question with evidence: can the teams building Caterpillar's AI products ship dramatically faster — starting with the six-month idea-to-production cycle.
- **Meta:** Prepared by Jason Wiker, Joe Masello & Sahil Patel, Cursor · Following the July 28 conversation with Nate Litton

---

## 01 — What we heard

**Kicker:** Customer truth from the July 28 conversation — synthesized, not transcribed.

### Org context strip
- **The split:** In-cab software is CAT Technology. Everything else — cat.com, parts.com, digital products, the CAT AI assistant (cloud + edge) — is Digital.
- **Nate's scope:** All AI, data, and ML on the digital side, including an AI R&D team. Reports to the Chief Digital Officer.
- **The posture:** 5–7 years into modernization — far less legacy code than the technology side.

### Truth cards

**1. Six months to ship a simple feature.**
Fragmented handoffs across plan, build, and integration organizations stretch the idea-to-production cycle to roughly six months — independent of how good the idea is.
*What it means:* this is a software delivery problem, not an AI research problem. It's the pain Cursor attacks most directly.

**2. The AI product load is heavy and specific.**
Visual parts identification across more than a million parts, with thin imagery on older parts and synthetic image generation on the roadmap. Translation spend running close to tens of millions on human translators, because CAT-specific vocabulary and safety risk rule out generic LLMs.
*What it means:* these are hard builds owned by Nate's teams — and every one of them pays the six-month tax. Cursor's role is accelerating the teams that build them, not building them.

**3. August 1 changed what Nate controls.**
The reorg moved the ML and AI Ops platform teams under Nate, giving his organization more control over productionizing AI solutions.
*What it means:* the delivery pipeline his teams depend on is, for the first time, largely his to shape.

### Callout — How Nate wants to run this
His AI R&D lead suggested a self-contained pilot environment: fewer integration dependencies, less infosec overhead. Nate wants it meaty and representative enough to establish a repeatable pattern — ideally the full idea-to-production flow end to end, including ticketing — without isolating to a corner that has to be rebuilt elsewhere. And his hard constraint: don't require thousands of people to change how they work overnight. Pick one area, prove it, expand to AI-focused workstreams, then the broader org.

**Handoff:** Every problem above shares a bottleneck: how fast an idea becomes shipped software. The pilot is built to test exactly that.

---

## 02 — The pilot

**Kicker:** Thirty days, Cursor-funded, built around the constraints from the call.

### The deal, in one paragraph
Thirty days. Cursor covers 100% of token costs across all models. Implementation takes less than a day. Two outputs: a viability verdict on real Caterpillar Digital work, and a token consumption baseline that makes post-pilot costs a measurement instead of an estimate.

### Pilot shape — two requirements, held in tension
- **Self-contained.** Fewer integration dependencies, less infosec overhead, fast start. (The AI R&D lead's suggestion.)
- **Representative.** Meaty enough to establish a repeatable pattern — not an isolated corner that has to be rebuilt elsewhere. Ideally the full idea-to-production flow, ticketing included.

**Our recommendation:** pilot with the AI R&D team plus the newly arrived ML/AI Ops platform teams — a cohort Nate fully controls post-reorg — on one real initiative selected at the Dallas on-site. Structure it so the initiative travels the entire idea-to-production path, ticket to shipped, inside a self-contained environment. Contained in blast radius; representative in shape. The specific use case is a Dallas decision — this page proposes the shape, not the pick.

### Week by week

| Week | Focus | What happens |
|------|-------|--------------|
| 0 | Dallas outcomes → kickoff | Use case selected at the on-site. Pilot cohort named (suggest 10–20 developers across AI R&D + ML/AI Ops). Self-contained environment agreed with infosec. Seats provisioned — implementation takes less than a day, so Week 0 is about decisions, not installation. Success criteria co-signed before anyone writes code. |
| 1 | Enablement | Hands-on onboarding with a Cursor engineer. Developers working in their real codebase by day 2–3. The end-to-end flow mapped: where the ticket enters, what "shipped" means for the pilot initiative. |
| 2–3 | Build & prove | Heads-down on the selected initiative, ticket to production, with Cursor in the loop at every stage the cohort touches. Weekly office hours. Usage and token data accumulating in the background. |
| 4 | Readout | Joint session: what shipped, elapsed idea-to-production time versus the ~6-month norm, what the developers said, the token consumption baseline, and a concrete Wave 1 proposal. Decision-ready. |

### Done means (proposed, co-signed at kickoff)
1. Pilot developers used Cursor on real Caterpillar Digital work — not sandboxes — for the majority of the 30 days.
2. The selected initiative demonstrably moved through the full idea-to-production flow, ticketing included, inside the pilot window — shown by Caterpillar's own developers at the readout.
3. The pattern is written down: an enablement-and-delivery playbook another digital team could pick up without rebuilding from scratch.
4. Token consumption baseline delivered: actual usage by model, per developer, over 30 days.
5. Infosec questions surfaced and answered during the pilot window, not after it.

### What we need from Caterpillar
- The Dallas on-site on the calendar (Joe → Madison, already in motion)
- A named pilot lead — natural fit: the AI R&D lead
- Use-case selection at Dallas
- Self-contained environment sign-off from infosec
- ~2 hours/week from the pilot lead
- A readout date set at kickoff

**Handoff:** Thirty days is the how. Here's the why-now.

---

## 03 — Why now

**Kicker:** The case for running the experiment this quarter — grounded only in what was said, plus our pilot terms.

**1. The six-month tax compounds across every initiative.**
Parts identification, translation, the CAT AI assistant — each pays the same idea-to-production toll.
*So what:* cutting the cycle isn't one project's win; it's a multiplier on the whole digital AI portfolio. The pilot measures the cut on one real initiative instead of asserting it.

**2. The reorg window is open.**
As of August 1, ML and AI Ops sit under Nate.
*So what:* new reporting lines are when delivery patterns get set. A pilot now means the tooling pattern is established while the concrete is wet, not retrofitted after teams settle.

**3. Pattern before scale is the cheap sequencing.**
Nate's own constraint — don't make thousands of people change overnight — is also the fiscally conservative one.
*So what:* a 30-day, one-area pilot is the smallest unit of evidence that can honestly justify or kill a broader rollout. The alternative isn't "no decision"; it's a slower decision made with less data.

**4. A token baseline instead of a budget guess.**
Cursor covers 100% of token costs across all models for the 30 days; the exhaust is a real consumption baseline from Caterpillar's own usage.
*So what:* post-pilot enterprise pricing follows Cursor's standard shape — a shared token pool with per-developer spend controls — so the budget conversation starts from measured data, with caps.

**5. The technology side is already moving.**
Brandon Newman's organization has a scoped use case on the technology side.
*So what:* a reference point, not a race — but Caterpillar will have Cursor evidence soon regardless. The question is whether Digital generates its own or reads someone else's.

### Funding model (the quotable box)
- 30-day pilot
- Cursor covers 100% of token costs across all models
- Implementation in under a day
- Outputs: viability verdict + token consumption baseline + repeatable-pattern playbook
- Post-pilot: enterprise agreement — shared token pool, per-developer spend controls

**Handoff:** The pilot answers the question for one cohort. This is what the answer unlocks.

---

## 04 — Go forward

**Kicker:** The pilot is Wave 0 of a rollout across the ~7,000-person digital organization — sequenced the way Nate described it.

### Destination statement
This isn't a one-off experiment. The rollout sequence is the one Nate laid out on the call — one area, prove it, AI-focused workstreams, then the broader org — and everything the pilot measures (enablement time, cycle-time evidence, token consumption, the written playbook) is the operating data for the waves that follow.

### The waves

**Wave 0 — Pilot (now → ~30 days).**
AI R&D + ML/AI Ops cohort, one initiative, end to end. Output: viability verdict, token baseline, the playbook, and a concrete Wave 1 proposal.

**Wave 1 — AI-focused workstreams (post-readout).**
Expand across Nate's own scope — the teams building parts identification, translation, and the CAT AI assistant. Pilot developers become internal references; the Wave 0 playbook is reused, not reinvented. This is the wave the readout must earn.

**Wave 2 — Platform enablement.**
The unglamorous middle that makes Wave 3 possible: enterprise agreement in place; infosec posture hardened from pilot findings into a standing approval (self-contained exception → sanctioned pattern); shared token pool with per-developer spend controls live; enablement owned by Caterpillar champions rather than Cursor staff; ticketing/SDLC integration generalized beyond the pilot environment.

**Wave 3 — Digital org at scale.**
Standard onboarding motion across the ~7,000-person digital organization, team by team, with usage and spend visible per team. Deliberately unscheduled: Wave 3's pace is set by Wave 1–2 evidence. Teams onboard on evidence and pull, not mandate — which is how the "don't force thousands to change overnight" constraint stays honored at scale.

### Ready to scale means
1. Pilot met its co-signed success criteria.
2. Token economics validated: the measured baseline maps to an acceptable per-developer cost under the shared-pool model.
3. Infosec cleared for a standing rollout pattern, not just a pilot exception.
4. At least two teams beyond the pilot cohort asking to onboard — pull, not push.
5. The playbook works without Cursor staff in the room: a Caterpillar champion has run an onboarding using it.

### Who carries what

| Person | Role | Carries |
|--------|------|---------|
| Nate Litton | AI, data & ML — Caterpillar Digital | Executive sponsor, Waves 0–3 |
| AI R&D lead | Nate's org | Pilot lead, Wave 0; proposed the self-contained shape |
| Incoming AI/ML Ops lead | Nate's org (post-reorg) | Productionization path, Waves 0–2 |
| Madison Motyl | EA to Nate | Dallas on-site scheduling |
| Chief of staff (incoming) | Nate's org | Coordination |
| Brandon Newman | CAT Technology | Parallel technology-side track — reference point, out of scope here |

---

## Next steps

1. **Joe Masello (Cursor)** → reach out to Madison Motyl to schedule the Dallas on-site.
2. **Dallas on-site — target within 2–3 weeks** → with Nate's AI R&D lead and incoming AI/ML Ops lead; coordinated via Madison and Nate's new chief of staff.
3. **Dallas agenda (set on the call):** where the team spends time today vs. desired state · SDLC bottlenecks · AI maturity · use case / value case mapping. The pilot's Week 0 begins where this agenda ends.

### Contacts
- Jason Wiker — Cursor (email TBD)
- Joe Masello — Cursor (email TBD)
- Sahil Patel — Cursor (email TBD)

### Footer
Private — prepared for Caterpillar. Not for redistribution.
