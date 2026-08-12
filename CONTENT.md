# CONTENT.md — Site copy (mirror of `src/lib/content.ts`)

> Customer-facing leave-behind from Cursor → Caterpillar Digital. If this file and `src/lib/content.ts` diverge, `content.ts` wins.  
> Grounding: Jul 28, 2026 — *Nate Litton | Cursor - Discovery* — plus Cursor pilot terms. Destination: ~7,000-person digital org.  
> Page balance: **expand** current-state + parts ID factory; **shrink** generic POC theater.

---

## Hero

- **Badge:** Prepared for Nate Litton · Caterpillar Digital · August 2026
- **Title:** Caterpillar Digital × Cursor
- **Thesis:** You briefed us on a modern Digital stack slowed by handoffs — ~6 months for a simple feature, a prototype trap after every exciting two-week demo, and AI products (parts ID, translation, the Cat assistant) paying that tax. Here’s what we heard, how we’d attack visual parts ID with Cloud Agents, and a tight 30-day pilot to prove the pattern before you take it wider.
- **Meta:** From Jason Wiker, Joe Masello & Sahil Patel, Cursor. Following our July 28 conversation with Nate Litton.
- **CTAs:** What we heard → · Parts ID + agents

---

## 01 — What we heard (PRIMARY REAL ESTATE)

**Kicker:** Current-state depth from your July 28 briefing — the tech and operating reality we are designing against.

### Org split
| Label | Fact |
|-------|------|
| CAT Technology | Cab-of-machine software. Brandon Newman / Jamie’s org. Out of scope — parallel Cursor work exists. |
| Caterpillar Digital | Everything else: cat.com, parts.com, digital products, Cat AI assistant (cloud + edge). This plan. |
| Nate → CDO (Augie) | Owns all AI, data, and ML on Digital — including AI R&D. |
| Aug 1 reorg | ML + AI Ops platform teams move under Nate — productionization destiny with the same owner as AI product work. |

### Modernization asymmetry
- **Digital:** 5–7 years into transformation — most surfaces built or rebuilt. Far less legacy. “Art of the possible.” Best surface for a representative Cursor pilot.
- **Technology:** Brutal legacy codebases (Brandon’s world). Different pilot, already in motion. Not this plan.

### Operating model
Idea → Plan → Build → Integrate → Ship. Plan / build / integration orgs with heavy handoffs. **~6 months for a simple feature.** Quality high; speed not. Every AI product pays the same toll.

### AI R&D prototype trap
1. **Spark (~2 weeks)** — Exciting self-contained prototype  
2. **Restart (handoff tax)** — Re-enters plan → build → integrate  
3. **Ship (~6 months)** — Entitlements / security / packaging caught late  

So what: Compress productionization with incoming AI/ML Ops — don’t mint another prototype that dies in handoffs.

### AI product portfolio
| Product | Depth |
|---------|-------|
| Visual parts ID | Blurry / pixelated photo → part number → parts.com. 1M+ SKUs; thin imagery on older parts; synthetic image gen required. |
| Translation | Surprisingly unsolved. CAT vocab + safety block generic LLM / Google Translate. Manuals tens of thousands of pages. Spend **close to tens of millions** on human translators. |
| Cat AI assistant | Cloud + edge. Same idea-to-production tax. |

### Findings
1. **Handoffs, not code quality** — Separate plan/build/integration orgs; no cohesive agile domain teams.
2. **Prototype trap** — ~2-week spark → restart → ~6 months; Aug 1 puts productionization under Nate.
3. **Change without a big-bang** — One area → prove → AI workstreams → ~7k digital.

### How you want to run this
Self-contained AI R&D sandbox (+ incoming AI/ML Ops), meaty/representative, ideally ticket-to-shipped. One area → prove → expand → broader digital. Not a thousands-overnight change.

**Handoff:** Speed is the shared constraint. Next: Cloud Agents on visual parts ID.

---

## Parts ID — Example use case (PRIMARY REAL ESTATE)

**Heading:** Example use case: visual parts ID from a blurry photo  
**Kicker:** Centerpiece use case — and how Cursor Cloud Agents / a multi-station factory attacks the engineering workstreams.

**Intro:** Blurry / poorly pixelated photo → part number → parts.com. Your teams build that product. We accelerate design, eval, and productionization.

### Exhibit A — The problem
Flow: Capture → Identify (1M+ SKUs) → Transact (parts.com).

Blockers: thin historical imagery (esp. older parts); synthetic image generation; large classification/retrieval; safety bar rules out casual LLM guesses.

### Exhibit B — Cloud Agents multi-station factory
**Stations:** Intake → Implement → Validate → Fix → Review  
(Implement / Validate / Fix = Cloud Agent primary; Intake + Review = your team)

**Lead ticket:** Visual Parts ID — blurry photo → part number  

**Runtime loop:** Label / ticket → Automation → Cloud Agent → Draft PR → Human review

**Illustrative child backlog** (Dallas selects final):
| ID | Workstream | Station | Child ticket |
|----|------------|---------|--------------|
| T-01 | Synthetic data | Implement | Scaffold synthetic image generation for sparse / older parts |
| T-02 | Eval harness | Validate | Classification / retrieval harness for blurry & pixelated inputs |
| T-03 | Eval set | Intake | Labeling + eval set from thin historical imagery |
| T-04 | Catalog lookup | Implement | parts.com / catalog lookup surface in the sandbox |
| T-05 | API packaging | Implement | Service packaging with basic entitlements / security hooks |
| T-06 | Failure triage | Fix | Failure taxonomy + fix tickets from hard-input eval misses |

**Pilot success:** Factory loop repeatable and faster than the ~6-month handoff path — on a real blurry-photo parts ID slice.

### Exhibit C — Fit
Meaty + representative · Self-contained start · Surfaces idea→production · Pattern for scale

**Handoff:** Same factory pattern applies to translation and the assistant. Next: why acting now compounds.

---

## Why this matters (rooted in facts above)

| Claim | Grounding | So what |
|-------|-----------|---------|
| Every AI product pays the ~6-month tax | Parts ID, translation (near tens of millions), Cat assistant behind handoffs | One measured cut informs the portfolio |
| Prototype trap wastes the Aug 1 reorg | ~2-week demos restart operating model; ML + AI Ops now under Nate | Prove ticket-to-shipped with that cohort now |
| Digital is the right surface | 5–7 years modernized; Technology = different (legacy) pilot | Representative Digital pilot, not legacy-refactor experiment |
| Scale only after one area works | No thousands-overnight; destination still ~7k | Pilot = Wave 0 of your sequence |

**Handoff:** If that holds → tight 30-day Cursor-funded pilot with the cohort you now own.

---

## Proposed pilot (TIGHT — not playbook theater)

**Kicker:** 30 days, tokens covered, AI R&D + AI/ML Ops, Dallas next.

**Deal:** Cursor-funded 30 days — 100% tokens, all models. Implement &lt; 1 day. Cohort: AI R&D + incoming AI/ML Ops. Output: ticket-to-shipped evidence vs ~6 months + token baseline.

**Shape:** Self-contained + Representative → Pilot with AI R&D + ML/AI Ops on one Digital AI initiative (parts ID working example). You pick at Dallas.

**Commercial:** During 30d / 100% tokens / &lt;1 day setup · Output viability + token baseline · After enterprise path with shared pool + per-dev controls.

**30-day arc (compact):** Dallas Align → Wk1 Enable → Wk2–3 Ship → Wk4 Decide

**What “worked” means (3 bars):** Real Digital work · Ticket-to-shipped · Reusable pattern

**What we need:** Dallas in 2–3 weeks (Joe → Madison) with AI R&D + AI/ML Ops leads · Named pilot lead · Use-case + sandbox infosec at Dallas · ~2 hrs/week

---

## If it works (short scale)

Pilot = Wave 0. Evidence gates everything after.

| Wave | Name | Exit |
|------|------|------|
| 0 | Pilot (~30d) | Go / no-go on real work |
| 1 | AI workstreams | Parts ID / translation / assistant on Cursor |
| 2 | Platform | Enterprise + standing infosec + Cat-owned enablement |
| 3 | ~7k digital | Team-by-team; spend visible per team |

**Who:** Nate (sponsor) · AI R&D lead · Incoming AI/ML Ops lead · Madison (Dallas scheduling)

---

## Next steps

1. **Cursor — Joe Masello:** Reach Madison Motyl to schedule Dallas on-site.
2. **Caterpillar + Cursor — Dallas (2–3 weeks):** With AI R&D lead and incoming AI/ML Ops lead.
3. **Shared agenda:** Confirm current-state constraints · pick initiative · name cohort · sandbox infosec.
