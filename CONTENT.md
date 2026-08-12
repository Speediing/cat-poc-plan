# CONTENT.md — Site copy (mirror of `src/lib/content.ts`)

> Customer-facing leave-behind from Cursor → Caterpillar Digital. If this file and `src/lib/content.ts` diverge, `content.ts` wins.  
> Grounding: Jul 28, 2026 — *Nate Litton | Cursor - Discovery* — plus Cursor pilot terms. Destination: ~7,000-person digital org.

---

## Hero

- **Badge:** Prepared for Nate Litton · Caterpillar Digital · August 2026
- **Title:** Caterpillar Digital × Cursor: proposed pilot structure
- **Thesis:** We propose a Cursor-funded 30-day pilot with your Digital AI organization to measure one thing: whether the teams building Caterpillar’s AI products can cut the ~6-month idea-to-production cycle. If it works, we have a pattern to scale across your ~7,000-person digital org.
- **Meta:** From Jason Wiker, Joe Masello & Sahil Patel, Cursor. Following our July 28 conversation with Nate Litton.

---

## 01 — What we heard

**Kicker:** Our synthesis of the July 28 conversation — offered back so we can align before we propose structure.

### Org context
| Label | Fact |
|-------|------|
| Where this plan applies | Your Digital org — not CAT Technology (in-cab). |
| Digital covers | cat.com, parts.com, digital products, CAT AI assistant (cloud + edge). |
| Your scope (Nate) | AI, data, and ML on Digital, including AI R&D. Reports to the Chief Digital Officer. |
| Org posture | 5–7 years into modernization; less legacy than Technology. |

### Findings
1. **~6 months to ship a simple feature** — You described handoffs across plan, build, and integration stretching idea-to-production to roughly six months. *Implication:* That’s a delivery problem — the one we designed Cursor to attack — not an AI research gap.
2. **AI product load is heavy and specific** — Parts identification across 1M+ parts; translation near tens of millions on human translators — CAT vocabulary and safety block generic LLMs. *Implication:* Your teams build these products. We accelerate those teams; we do not build the products for you.
3. **August 1 reorg** — ML and AI Ops platform teams moved under Nate. *Implication:* You now control more of the productionization path — a window to set tooling patterns deliberately.

### How you want to run this
We heard a clear preference: self-contained enough to start fast (your AI R&D lead), representative enough to set a pattern — ideally ticket-to-shipped. One area first; then AI workstreams; then the broader org. We are not asking thousands of people to change overnight.

**Handoff:** The bottleneck we heard across every thread: idea to shipped software takes ~6 months. Next we show how that plays on visual parts ID — and how Cloud Agents would attack it.

---

## Parts ID — Example use case

**Heading:** Example use case: visual parts ID from a blurry photo  
**Kicker:** A meaty slice of the AI product work you described — and how we’d run it with Cursor Cloud Agents in a 30-day pilot.

**Intro:** You described building visual parts identification: a user captures a photo (often blurry or poorly pixelated), the system returns the part number, and the path continues to parts.com. Your teams build that product. We propose accelerating how you design, evaluate, and productionize it.

### Exhibit A — The problem
Flow: Capture (blurry / pixelated photo) → Identify (map among 1M+ SKUs) → Transact (parts.com path).

Blockers: thin historical imagery (esp. older parts); synthetic image generation required; large classification/retrieval at 1M+ parts; safety/quality bar rules out casual LLM guesses.

Outcome: Correct part ID on hard inputs → catalog match → parts.com purchase path.

### Exhibit B — How we’ve designed the Cursor approach
Multi-station software factory (not one chat thread).

**Stations:** Intake → Implement → Validate → Fix → Review  
(Implement / Validate / Fix = Cloud Agent primary; Intake + Review = your team)

**Lead ticket:** Visual Parts ID — blurry photo → part number  
Broken into scoped child tickets. Agents work in parallel; humans review draft PRs.

**Proof pattern:** label / ticket → automation → Cloud Agent → draft PR on the visual parts ID workstream (shape exercised in Cat demos; no internal plumbing exposed).

**Runtime loop:** Label / ticket → Automation → Cloud Agent → Draft PR → Human review

**Illustrative child backlog** (Dallas selects final set):
| ID | Workstream | Station | Child ticket |
|----|------------|---------|--------------|
| T-01 | Synthetic data | Implement | Scaffold synthetic image generation for sparse / older parts |
| T-02 | Eval harness | Validate | Classification / retrieval harness for blurry & pixelated inputs |
| T-03 | Eval set | Intake | Labeling + eval set from thin historical imagery |
| T-04 | Catalog lookup | Implement | parts.com / catalog lookup surface in the sandbox |
| T-05 | API packaging | Implement | Service packaging with basic entitlements / security hooks |
| T-06 | Failure triage | Fix | Failure taxonomy + fix tickets from hard-input eval misses |

**Pilot success:** Factory loop is repeatable and faster than the ~6-month handoff path — on a real slice of blurry-photo parts ID.

### Exhibit C — Why this fits the pilot
| Dimension | Why |
|-----------|-----|
| Meaty + representative | Real AI product work: data, ML, services — not a toy sandbox. |
| Self-contained start | Can begin in AI R&D’s environment with less infosec / integration drag. |
| Surfaces idea→production | Forces the prototype-to-productionize gap your Aug 1 reorg is meant to close. |
| Pattern for scale | Ticket→agent→PR loop copies to other Digital AI workstreams, then the ~7k digital org. |

**Handoff:** Dallas picks the exact initiative. Below is the pilot structure we’d wrap around it.

---

## 02 — The pilot

**Kicker:** What we propose to run with you. 30 days. We cover token costs. Setup under one day.

### Deal
We fund 30 days of usage — 100% of token costs across all models. Setup takes under a day. Together we produce two outputs: a viability verdict on real Digital work, and a measured token baseline for your budget conversation.

### Shape
You gave us two constraints. We designed the pilot to hold both:
- **Self-contained:** Fewer integrations; lower infosec drag; fast start.
- **Representative:** Full idea-to-production path preferred, including ticketing — not a corner case you’d have to rebuild later.

**Recommendation:** We propose piloting with AI R&D + ML/AI Ops — the cohort you control post-reorg — on one real initiative you select at Dallas. Ticket-to-shipped inside a self-contained environment. You pick the use case; we propose the shape.

### Week timeline
| Week | Focus | Outcome |
|------|-------|---------|
| W0 | Decide | At Dallas you select the use case; we name 10–20 developers with you; infosec sign-off; we co-sign success criteria. Kickoff-ready. |
| W1 | Enable | We put a Cursor engineer with your cohort; real codebases by day 2–3; map ticket → shipped. Cohort productive. |
| W2–3 | Build | Your initiative runs ticket-to-production; weekly office hours; usage data accumulates. Evidence on real work. |
| W4 | Decide | Joint readout: shipped work, cycle time vs ~6 months, feedback, token baseline, Wave 1 proposal. Go / no-go together. |

### Success criteria
*Proposed — we’d co-sign these with you at kickoff.*

| Criterion | Evidence | Owner |
|-----------|----------|-------|
| Real work, not sandboxes | Majority of 30 days on your Digital codebases | Your pilot lead |
| Ticket-to-shipped completed | Your developers demo end-to-end at readout | Your pilot lead |
| Repeatable playbook | Written enablement + delivery guide another Digital team can reuse | Cursor + your pilot lead |
| Token baseline | Usage by model, per developer, 30 days | Cursor |
| Infosec closed in-window | Open questions answered before readout | Your infosec + pilot lead |

### What we’d need from you
- Dallas on-site on the calendar (we’ll reach Madison via Joe)
- A named pilot lead — natural fit: your AI R&D lead
- Use-case selection at Dallas
- Infosec sign-off on a self-contained environment
- ~2 hrs/week from the pilot lead
- A readout date set at kickoff

**Handoff:** That’s the structure we’d run. Here’s why we’d start now.

---

## 03 — Why now

**Kicker:** The case for moving this quarter — grounded only in what you told us and our standard pilot terms.

| Claim | Fact | So what |
|-------|------|---------|
| The cycle-time tax hits every AI initiative | Parts ID, translation, and the CAT AI assistant each pay the ~6-month toll today. | A measured cut on one initiative informs the whole Digital AI portfolio — we don’t ask you to take that on faith. |
| Your reporting lines just changed | As of August 1, ML and AI Ops report to Nate. | Patterns you set now stick; retrofitting tooling later costs more. |
| Smallest honest test before scale | You were clear: don’t force thousands of people to change overnight. | A 30-day, one-area pilot is the minimum evidence to greenlight or stop expansion. |
| A token baseline instead of a budget guess | We’ll cover 100% of token costs for the 30 days. | Your post-pilot pricing discussion starts from measured Caterpillar usage, with a shared pool and per-developer controls. |
| Technology side already has a scoped case | Brandon Newman’s org (CAT Technology) has a Cursor use case in motion. | Caterpillar will have Cursor evidence soon either way. Digital can generate its own — or wait on Technology’s. |

### Funding model
- **During:** 30-day pilot; we pay 100% of token costs (all models); setup under one day.
- **Output:** Viability verdict, token baseline, and a reusable playbook you keep.
- **After:** Enterprise agreement with a shared token pool and per-developer spend controls.

**Handoff:** The pilot answers the question for one cohort. Below is how we’d scale with you after that.

---

## 04 — Go forward

**Kicker:** How we’d scale with you across the ~7,000-person digital organization — sequenced the way you described.

**Destination:** We treat the pilot as Wave 0, not a one-off. Your sequence from the conversation: one area → prove it → AI workstreams → broader org. Everything we measure in 30 days (cycle time, tokens, playbook) gates the waves that follow.

### Wave roadmap
| Wave | Name | Timing | Entry | Exit |
|------|------|--------|-------|------|
| Wave 0 | Pilot | Now → ~30 days | Dallas use case + infosec sign-off + named cohort | Success criteria met; Wave 1 proposal at readout |
| Wave 1 | AI workstreams | Post-readout | Wave 0 go decision; playbook ready | Parts ID / translation / CAT AI assistant teams productive on Cursor |
| Wave 2 | Platform enablement | Gated on Wave 1 | Wave 1 evidence; budget path clear | Enterprise agreement, standing infosec approval, Cat-owned enablement, shared token pool |
| Wave 3 | Digital org at scale | Unscheduled | Wave 2 platform ready; pull from teams | Team-by-team onboarding across ~7,000; usage and spend visible per team |

### What “ready to scale” means to us
1. Wave 0 success criteria met
2. Token baseline maps to an acceptable per-developer cost for you
3. Infosec approval for a standing pattern — not a pilot exception
4. ≥2 teams outside the cohort asking to onboard
5. A Caterpillar champion ran an onboarding from the playbook without Cursor in the room

### Stakeholders
| Name | Role | Thread | Ask |
|------|------|--------|-----|
| Nate Litton | AI / data / ML — Digital | Executive sponsor, Waves 0–3 | Sponsor the pilot; keep the sequencing intact |
| AI R&D lead | Nate’s org | Pilot lead; proposed the self-contained shape | Lead Wave 0; ~2 hrs/week |
| Incoming AI/ML Ops lead | Nate’s org | Productionization path, Waves 0–2 | Join Dallas; own the ops thread |
| Madison Motyl | EA to Nate | Dallas scheduling | Confirm the on-site window with Joe |
| Chief of staff (incoming) | Nate’s org | Coordination | Align attendees and follow-ups |
| Brandon Newman | CAT Technology | Parallel Cursor track | None in this plan — reference only |

---

## Next steps

1. **Cursor — Joe Masello** — We’ll reach out to Madison Motyl to schedule the Dallas on-site.
2. **Caterpillar + Cursor — Dallas on-site (within 2–3 weeks)** — With your AI R&D lead and incoming AI/ML Ops lead; coordinated via Madison and your chief of staff.
3. **Shared agenda for Dallas** — Where the team spends time today vs desired state · SDLC bottlenecks · AI maturity · use-case mapping. Week 0 of the pilot starts where this agenda ends.

### Contacts
- Jason Wiker, Cursor — TBD
- Joe Masello, Cursor — TBD
- Sahil Patel, Cursor — TBD

**Footer:** Confidential. Prepared by Cursor for Caterpillar Digital. Please do not redistribute.
