# CONTENT.md — Site copy (mirror of `src/lib/content.ts`)

> If this file and `src/lib/content.ts` diverge, `content.ts` wins.  
> Grounding: Jul 28, 2026 — *Nate Litton | Cursor - Discovery* — plus Cursor pilot terms. Destination: ~7,000-person digital org.

---

## Hero

- **Badge:** Private · Caterpillar Digital · August 2026
- **Title:** 30-day Cursor pilot for Caterpillar Digital
- **Thesis:** Recommendation: run a Cursor-funded 30-day pilot in Nate Litton’s organization to measure whether Digital’s AI product teams can cut the ~6-month idea-to-production cycle. Success creates a repeatable pattern for the ~7,000-person digital org.
- **Meta:** Jason Wiker, Joe Masello, Sahil Patel · Source: July 28 discovery with Nate Litton

---

## 01 — What we heard

**Kicker:** Facts from the July 28 discovery. Implications in italics.

### Org context
| Label | Fact |
|-------|------|
| Scope of this plan | Caterpillar Digital only — not CAT Technology (in-cab). |
| Digital covers | cat.com, parts.com, digital products, CAT AI assistant (cloud + edge). |
| Nate Litton | Owns AI, data, and ML on Digital, including AI R&D. Reports to the Chief Digital Officer. |
| Org posture | 5–7 years into modernization; less legacy than Technology. |

### Findings
1. **~6 months to ship a simple feature** — Handoffs across plan, build, and integration stretch idea-to-production to roughly six months. *So what:* Delivery problem, not an AI research problem. Direct fit for Cursor.
2. **AI product load is heavy and specific** — Parts identification across 1M+ parts; translation near tens of millions on human translators — CAT vocabulary and safety block generic LLMs. *So what:* Nate’s teams build these products. Cursor accelerates those teams; it does not build the products.
3. **August 1 reorg** — ML and AI Ops platform teams moved under Nate. *So what:* He now controls more of the productionization path.

### Nate’s stated sequencing
Self-contained enough to start fast (AI R&D lead); representative enough to set a pattern — ideally ticket-to-shipped. One area first; then AI workstreams; then the broader org. Do not force thousands to change overnight.

**Handoff:** Shared constraint: idea-to-shipped software takes ~6 months. The pilot measures whether Cursor changes that.

---

## 02 — The pilot

**Kicker:** 30 days. Cursor pays token costs. Setup under one day.

### Deal
Cursor funds 30 days of usage (100% of token costs, all models). Setup takes under a day. Two deliverables: a viability verdict on real Digital work, and a measured token baseline for the budget conversation.

### Shape
Hold two constraints from the call at once:
- **Self-contained:** Fewer integrations; lower infosec drag; fast start.
- **Representative:** Full idea-to-production path preferred, including ticketing — not a corner case.

**Recommendation:** Cohort: AI R&D + ML/AI Ops (under Nate post-reorg). One real initiative, selected at Dallas. Ticket-to-shipped inside a self-contained environment. Dallas picks the use case; this brief fixes the shape.

### Week timeline
| Week | Focus | Outcome |
|------|-------|---------|
| W0 | Decide | Dallas selects use case; name 10–20 developers; infosec sign-off; co-sign success criteria. Kickoff-ready. |
| W1 | Enable | Cursor engineer onboarding; real codebase by day 2–3; map ticket → shipped. Cohort productive. |
| W2–3 | Build | Ticket-to-production; weekly office hours; usage data accumulates. Evidence on real work. |
| W4 | Decide | Readout: shipped work, cycle time vs ~6 months, feedback, token baseline, Wave 1 proposal. Go / no-go. |

### Success criteria
*Proposed — co-signed at kickoff.*

| Criterion | Evidence | Owner |
|-----------|----------|-------|
| Real work, not sandboxes | Majority of 30 days on Digital codebases | Pilot lead |
| Ticket-to-shipped completed | Cat developers demo end-to-end at readout | Pilot lead |
| Repeatable playbook | Written enablement + delivery guide another team can reuse | Cursor + pilot lead |
| Token baseline | Usage by model, per developer, 30 days | Cursor |
| Infosec closed in-window | Open questions answered before readout | Infosec + pilot lead |

### Asks of Caterpillar
- Dallas on-site scheduled (Joe → Madison)
- Named pilot lead (AI R&D lead)
- Use case selected at Dallas
- Infosec sign-off on self-contained environment
- ~2 hrs/week from pilot lead
- Readout date set at kickoff

**Handoff:** Structure above. Case for timing below.

---

## 03 — Why now

**Kicker:** Only claims grounded in the July 28 call or Cursor pilot terms.

| Claim | Fact | So what |
|-------|------|---------|
| Cycle-time tax hits every AI initiative | Parts ID, translation, and the CAT AI assistant each pay the ~6-month toll. | A measured cut on one initiative informs the whole Digital AI portfolio. |
| Reporting lines just changed | August 1: ML and AI Ops report to Nate. | Tooling patterns set now stick; retrofits cost more later. |
| Smallest honest test before scale | Nate’s constraint: do not force thousands to change overnight. | A 30-day, one-area pilot is the minimum evidence to greenlight or kill expansion. |
| Replace budget guesses with a baseline | Cursor covers 100% of token costs for 30 days. | Post-pilot pricing discussion starts from measured Caterpillar usage. |
| Technology side already has a scoped case | Brandon Newman’s org (CAT Technology) has a Cursor use case in motion. | Digital can generate its own evidence, or wait for Technology’s. |

### Funding model
- **During:** 30-day pilot; Cursor pays 100% of token costs (all models); setup under one day.
- **Output:** viability verdict, token baseline, reusable playbook.
- **After:** enterprise agreement — shared token pool with per-developer spend controls.

**Handoff:** Pilot proves one cohort. Scale path follows.

---

## 04 — Go forward

**Kicker:** Destination: ~7,000-person Caterpillar digital organization. Sequence is Nate’s.

**Destination:** Pilot = Wave 0. Sequence from the call: one area → prove → AI workstreams → broader org. Pilot metrics (cycle time, tokens, playbook) gate every later wave.

### Wave roadmap
| Wave | Name | Timing | Entry | Exit |
|------|------|--------|-------|------|
| Wave 0 | Pilot | Now → ~30 days | Dallas use case + infosec sign-off + named cohort | Success criteria met; Wave 1 proposal at readout |
| Wave 1 | AI workstreams | Post-readout | Wave 0 go decision; playbook ready | Parts ID / translation / CAT AI assistant teams productive on Cursor |
| Wave 2 | Platform enablement | Gated on Wave 1 | Wave 1 evidence; budget path clear | Enterprise agreement, standing infosec approval, Cat-owned enablement, shared token pool |
| Wave 3 | Digital org at scale | Unscheduled | Wave 2 platform ready; pull from teams | Team-by-team onboarding across ~7,000; usage and spend visible per team |

### Gate to scale (beyond Wave 0)
1. Wave 0 success criteria met
2. Token baseline maps to acceptable per-developer cost
3. Infosec approval for a standing pattern (not a pilot exception)
4. ≥2 teams outside the cohort requesting access
5. Cat champion ran an onboarding from the playbook without Cursor staff

### Stakeholders
| Name | Role | Thread | Ask |
|------|------|--------|-----|
| Nate Litton | AI / data / ML — Digital | Executive sponsor, Waves 0–3 | Sponsor pilot; protect sequencing |
| AI R&D lead | Nate’s org | Pilot lead; proposed self-contained shape | Lead Wave 0; ~2 hrs/week |
| Incoming AI/ML Ops lead | Nate’s org | Productionization path, Waves 0–2 | Join Dallas; own ops thread |
| Madison Motyl | EA to Nate | Dallas scheduling | Confirm on-site window |
| Chief of staff (incoming) | Nate’s org | Coordination | Align attendees and follow-ups |
| Brandon Newman | CAT Technology | Parallel Cursor track | None in this plan (reference only) |

---

## Next steps

1. **Joe Masello (Cursor)** — Contact Madison Motyl; schedule Dallas on-site.
2. **Dallas on-site (≤2–3 weeks)** — Attendees: AI R&D lead, incoming AI/ML Ops lead; coordinated via Madison and chief of staff.
3. **Dallas agenda** — Time today vs desired state · SDLC bottlenecks · AI maturity · use-case mapping. Week 0 starts at the end of this agenda.

### Contacts
- Jason Wiker, Cursor — TBD
- Joe Masello, Cursor — TBD
- Sahil Patel, Cursor — TBD

**Footer:** Private — prepared for Caterpillar. Not for redistribution.
