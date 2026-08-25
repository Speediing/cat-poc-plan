# CONTENT.md · Site copy (mirror of `src/lib/content.ts`)

> **Source of truth:** Aug 11, 2026 Dallas onsite · *Cursor & Cat Digital*  
> Granola: `87ae339d-1c0d-4890-867f-37e9be06d190`  
> Structure / voice sibling of [cat-cursor-followup](https://cat-cursor-followup.vercel.app)  
> Attendees: Jason Wiker, Joe Masello, Sahil Patel, Nate Litton, Shelby Bethea. Olivier carried operating-model depth.  
> If this file and `src/lib/content.ts` diverge, `content.ts` wins.

---

## Hero
- **Badge:** Onsite follow-up · Dallas · August 11, 2026
- **Title:** Caterpillar × Cursor
- **Thesis:** What we heard from your team in Dallas, a plain primer on Cursor, and one work week on photo quality detection in a real Cat repo.
- **Credits:** Jason Wiker, Joe Masello & Sahil Patel, Cursor. With thanks to Olivier and Shelby Bethea.
- **Footer:** Follow-up to the August 11 Dallas onsite · Prepared by Cursor for Caterpillar Digital. Confidential.

## 01 How we run it
**One work week. Real repo. Photo quality detection.**

Path compressed: Intake → Design (HLA + AVT) → Execution → Release → Support.

- Monday through Friday. No weekend build days.
- Work lives in a real Cat repo: same PRs, not a sandbox.
- Cursor covers tokens. Setup under a day. Nate names the small group.
- A 30-day token trial is the commercial envelope around the sprint, not the schedule.

### Day cards
1. **Day 1 · Mon · Intake / requirements**  
   Stand the group up and write the checks before anyone codes.  
   Daniela eng + Kevin MLOps; Charlie aware as observer; Olivier facilitates. Acceptance checks in a real ticket. Compresses incomplete DPM specs.

2. **Day 2 · Tue · Mini HLA / AVT (design)**  
   One-day architecture pressure-test instead of months of HLA + AVT.  
   Shared service path (Cat Inspect, Spotters Guide). Codify review/security/entitlements so day 5 does not start from zero.

3. **Day 3 · Wed · Execution starts**  
   R&D that engineering will keep. Build on the ticket in the same repos/PRs.  
   Agents open PRs. Closes the “random Claude code” gap.

4. **Day 4 · Thu · Engineering handoff + MLOps**  
   Kevin’s path: working check reviewable in context.  
   PR against day-1 checks and day-2 rules. One thread: ticket → agent → PR.

5. **Day 5 · Fri · Reverse-demo and decide**  
   Demo the written checks, not a slide. Copy-paste pattern. Token baseline. Decide.

## 02 What we prove
Outcomes on file. Not features. Not invented dollars.

1. Bad warranty, inspect, and field photos stop entering the vision stack.
2. That unlocks parts ID, visual anomaly, and repair-cost estimate downstream.
3. The path (requirements → prototype → eng handoff) stays in one thread so the next team can copy it. Not another throwaway demo.
4. A real token baseline so cost is a number, not a guess.

## 03 What we heard
**The bottleneck isn't writing the code.**

Operating model: Intake → Design (HLA + AVT) → Execution → Release → Support. DPM ~700 upstream. Design longest pull. Shared eng rotates → context erodes.

Findings: incomplete requirements · prototypes reset the clock (“random Claude code”) · review from zero (dashboard POC stuck on entitlements) · context leaks at the seams.

## 04 The gap
Fast R&D prototype vs months into production vs ~700 DPM upstream.

## 05 Who Cursor is
Cursor in one slide. Model choice, agents on tickets, review, enterprise controls.

## 06 Where it plugs in
Same path (DPM → HLA/AVT → R&D → execution → review → release). Removes waiting. Nothing asks you to reorganize first.

## 07 Proposed POC: photo quality detection
Warranty / inspections / field photos. Self-contained. Reusable into Cat Inspect, Spotters Guide. Unlocks parts ID / anomaly / repair cost downstream.

## 08 The deal
One work week (five working days) · 30-day token envelope · 100% tokens · &lt;1 day setup. Infra: AWS private link / self-hosted agents; GitHub app review; Cat communications for external sharing.

## 09 Next steps
Nate / Joe / Cursor: nominate, align, reconnect, stand up.

---

**Not on page:** The group (Daniela / Kevin / Charlie / Olivier / Shelby) kept in `hiddenGroup` until Nate confirms peeps.
