/**
 * Content model — Caterpillar Digital × Cursor pilot briefing.
 *
 * Source of truth for site copy. CONTENT.md mirrors this file; content.ts wins.
 * Grounding: Jul 28, 2026 "Nate Litton | Cursor - Discovery" + Cursor pilot terms.
 * Go-forward destination: ~7,000-person Caterpillar digital organization.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SiteMeta {
  badge: string;
  title: string;
  thesis: string;
  preparedBy: string;
  footer: string;
}

export interface SectionMeta {
  number: string;
  id: string;
  navLabel: string;
  heading: string;
  kicker: string;
  handoff?: string;
}

export interface OrgContextItem {
  label: string;
  text: string;
}

export interface TruthCard {
  label: string;
  situation: string;
  meaning: string;
}

export interface Callout {
  heading: string;
  body: string;
}

export interface WhatWeHeardContent {
  meta: SectionMeta;
  orgContext: OrgContextItem[];
  truths: TruthCard[];
  callout: Callout;
}

export interface PilotShapeRequirement {
  label: string;
  text: string;
}

export interface PilotWeek {
  week: string;
  focus: string;
  detail: string;
}

export interface CriteriaRow {
  criterion: string;
  evidence: string;
  owner: string;
}

export interface ThePilotContent {
  meta: SectionMeta;
  dealParagraph: string;
  shape: {
    intro: string;
    requirements: PilotShapeRequirement[];
    recommendation: string;
  };
  weeks: PilotWeek[];
  successCriteria: {
    heading: string;
    note: string;
    rows: CriteriaRow[];
  };
  asks: {
    heading: string;
    items: string[];
  };
}

export interface ArgumentBlock {
  claim: string;
  grounding: string;
  soWhat: string;
}

export interface FundingExhibit {
  heading: string;
  during: string;
  output: string;
  after: string;
}

export interface WhyNowContent {
  meta: SectionMeta;
  arguments: ArgumentBlock[];
  fundingBox: FundingExhibit;
}

export interface Wave {
  label: string;
  name: string;
  timeframe: string;
  entry: string;
  exit: string;
}

export interface Stakeholder {
  name: string;
  role: string;
  thread: string;
  ask: string;
}

export interface GoForwardContent {
  meta: SectionMeta;
  destination: string;
  waves: Wave[];
  readyToScale: {
    heading: string;
    items: string[];
  };
  stakeholders: Stakeholder[];
}

export interface NextStep {
  owner: string;
  action: string;
}

export interface Contact {
  name: string;
  role: string;
  email: string;
}

export interface NextStepsContent {
  heading: string;
  steps: NextStep[];
  contacts: Contact[];
}

export interface SiteContent {
  meta: SiteMeta;
  whatWeHeard: WhatWeHeardContent;
  thePilot: ThePilotContent;
  whyNow: WhyNowContent;
  goForward: GoForwardContent;
  nextSteps: NextStepsContent;
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const content: SiteContent = {
  meta: {
    badge: "Private · Caterpillar Digital · August 2026",
    title: "30-day Cursor pilot for Caterpillar Digital",
    thesis:
      "Recommendation: run a Cursor-funded 30-day pilot in Nate Litton’s organization to measure whether Digital’s AI product teams can cut the ~6-month idea-to-production cycle. Success creates a repeatable pattern for the ~7,000-person digital org.",
    preparedBy:
      "Jason Wiker, Joe Masello, Sahil Patel · Source: July 28 discovery with Nate Litton",
    footer: "Private — prepared for Caterpillar. Not for redistribution.",
  },

  whatWeHeard: {
    meta: {
      number: "01",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "What we heard",
      kicker: "Facts from the July 28 discovery. Implications in italics.",
      handoff:
        "Shared constraint: idea-to-shipped software takes ~6 months. The pilot measures whether Cursor changes that.",
    },
    orgContext: [
      {
        label: "Scope of this plan",
        text: "Caterpillar Digital only — not CAT Technology (in-cab).",
      },
      {
        label: "Digital covers",
        text: "cat.com, parts.com, digital products, CAT AI assistant (cloud + edge).",
      },
      {
        label: "Nate Litton",
        text: "Owns AI, data, and ML on Digital, including AI R&D. Reports to the Chief Digital Officer.",
      },
      {
        label: "Org posture",
        text: "5–7 years into modernization; less legacy than Technology.",
      },
    ],
    truths: [
      {
        label: "~6 months to ship a simple feature",
        situation:
          "Handoffs across plan, build, and integration stretch idea-to-production to roughly six months.",
        meaning: "Delivery problem, not an AI research problem. Direct fit for Cursor.",
      },
      {
        label: "AI product load is heavy and specific",
        situation:
          "Parts identification across 1M+ parts; translation near tens of millions on human translators — CAT vocabulary and safety block generic LLMs.",
        meaning:
          "Nate’s teams build these products. Cursor accelerates those teams; it does not build the products.",
      },
      {
        label: "August 1 reorg",
        situation: "ML and AI Ops platform teams moved under Nate.",
        meaning: "He now controls more of the productionization path.",
      },
    ],
    callout: {
      heading: "Nate’s stated sequencing",
      body: "Self-contained enough to start fast (AI R&D lead); representative enough to set a pattern — ideally ticket-to-shipped. One area first; then AI workstreams; then the broader org. Do not force thousands to change overnight.",
    },
  },

  thePilot: {
    meta: {
      number: "02",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "The pilot",
      kicker: "30 days. Cursor pays token costs. Setup under one day.",
      handoff: "Structure above. Case for timing below.",
    },
    dealParagraph:
      "Cursor funds 30 days of usage (100% of token costs, all models). Setup takes under a day. Two deliverables: a viability verdict on real Digital work, and a measured token baseline for the budget conversation.",
    shape: {
      intro: "Hold two constraints from the call at once:",
      requirements: [
        {
          label: "Self-contained",
          text: "Fewer integrations; lower infosec drag; fast start.",
        },
        {
          label: "Representative",
          text: "Full idea-to-production path preferred, including ticketing — not a corner case.",
        },
      ],
      recommendation:
        "Cohort: AI R&D + ML/AI Ops (under Nate post-reorg). One real initiative, selected at Dallas. Ticket-to-shipped inside a self-contained environment. Dallas picks the use case; this brief fixes the shape.",
    },
    weeks: [
      {
        week: "0",
        focus: "Decide",
        detail:
          "Dallas selects use case; name 10–20 developers (AI R&D + ML/AI Ops); infosec sign-off; co-sign success criteria. Outcome: kickoff-ready.",
      },
      {
        week: "1",
        focus: "Enable",
        detail:
          "Cursor engineer onboarding; developers in real codebase by day 2–3; map ticket → shipped. Outcome: cohort productive.",
      },
      {
        week: "2–3",
        focus: "Build",
        detail:
          "Initiative runs ticket-to-production with Cursor in the loop; weekly office hours; usage data accumulates. Outcome: evidence on real work.",
      },
      {
        week: "4",
        focus: "Decide",
        detail:
          "Readout: what shipped, cycle time vs ~6 months, developer feedback, token baseline, Wave 1 proposal. Outcome: go / no-go.",
      },
    ],
    successCriteria: {
      heading: "Success criteria",
      note: "Proposed — co-signed at kickoff.",
      rows: [
        {
          criterion: "Real work, not sandboxes",
          evidence: "Majority of 30 days on Digital codebases",
          owner: "Pilot lead",
        },
        {
          criterion: "Ticket-to-shipped completed",
          evidence: "Cat developers demo end-to-end at readout",
          owner: "Pilot lead",
        },
        {
          criterion: "Repeatable playbook",
          evidence: "Written enablement + delivery guide another team can reuse",
          owner: "Cursor + pilot lead",
        },
        {
          criterion: "Token baseline",
          evidence: "Usage by model, per developer, 30 days",
          owner: "Cursor",
        },
        {
          criterion: "Infosec closed in-window",
          evidence: "Open questions answered before readout",
          owner: "Infosec + pilot lead",
        },
      ],
    },
    asks: {
      heading: "Asks of Caterpillar",
      items: [
        "Dallas on-site scheduled (Joe → Madison)",
        "Named pilot lead (AI R&D lead)",
        "Use case selected at Dallas",
        "Infosec sign-off on self-contained environment",
        "~2 hrs/week from pilot lead",
        "Readout date set at kickoff",
      ],
    },
  },

  whyNow: {
    meta: {
      number: "03",
      id: "why-now",
      navLabel: "Why now",
      heading: "Why now",
      kicker: "Only claims grounded in the July 28 call or Cursor pilot terms.",
      handoff: "Pilot proves one cohort. Scale path follows.",
    },
    arguments: [
      {
        claim: "Cycle-time tax hits every AI initiative",
        grounding:
          "Parts ID, translation, and the CAT AI assistant each pay the ~6-month toll.",
        soWhat: "A measured cut on one initiative informs the whole Digital AI portfolio.",
      },
      {
        claim: "Reporting lines just changed",
        grounding: "August 1: ML and AI Ops report to Nate.",
        soWhat: "Tooling patterns set now stick; retrofits cost more later.",
      },
      {
        claim: "Smallest honest test before scale",
        grounding:
          "Nate’s constraint: do not force thousands to change overnight.",
        soWhat: "A 30-day, one-area pilot is the minimum evidence to greenlight or kill expansion.",
      },
      {
        claim: "Replace budget guesses with a baseline",
        grounding: "Cursor covers 100% of token costs for 30 days.",
        soWhat: "Post-pilot pricing discussion starts from measured Caterpillar usage.",
      },
      {
        claim: "Technology side already has a scoped case",
        grounding: "Brandon Newman’s org (CAT Technology) has a Cursor use case in motion.",
        soWhat: "Digital can generate its own evidence, or wait for Technology’s.",
      },
    ],
    fundingBox: {
      heading: "Funding model",
      during:
        "During: 30-day pilot; Cursor pays 100% of token costs (all models); setup under one day.",
      output:
        "Output: viability verdict, token baseline, reusable playbook.",
      after:
        "After: enterprise agreement — shared token pool with per-developer spend controls.",
    },
  },

  goForward: {
    meta: {
      number: "04",
      id: "go-forward",
      navLabel: "Go forward",
      heading: "Go forward",
      kicker:
        "Destination: ~7,000-person Caterpillar digital organization. Sequence is Nate’s.",
    },
    destination:
      "Pilot = Wave 0. Sequence from the call: one area → prove → AI workstreams → broader org. Pilot metrics (cycle time, tokens, playbook) gate every later wave.",
    waves: [
      {
        label: "Wave 0",
        name: "Pilot",
        timeframe: "Now → ~30 days",
        entry: "Dallas use case + infosec sign-off + named cohort",
        exit: "Success criteria met; Wave 1 proposal at readout",
      },
      {
        label: "Wave 1",
        name: "AI workstreams",
        timeframe: "Post-readout",
        entry: "Wave 0 go decision; playbook ready",
        exit: "Parts ID / translation / CAT AI assistant teams productive on Cursor",
      },
      {
        label: "Wave 2",
        name: "Platform enablement",
        timeframe: "Gated on Wave 1",
        entry: "Wave 1 evidence; budget path clear",
        exit: "Enterprise agreement, standing infosec approval, Cat-owned enablement, shared token pool",
      },
      {
        label: "Wave 3",
        name: "Digital org at scale",
        timeframe: "Unscheduled",
        entry: "Wave 2 platform ready; pull from teams",
        exit: "Team-by-team onboarding across ~7,000; usage and spend visible per team",
      },
    ],
    readyToScale: {
      heading: "Gate to scale (beyond Wave 0)",
      items: [
        "Wave 0 success criteria met",
        "Token baseline maps to acceptable per-developer cost",
        "Infosec approval for a standing pattern (not a pilot exception)",
        "≥2 teams outside the cohort requesting access",
        "Cat champion ran an onboarding from the playbook without Cursor staff",
      ],
    },
    stakeholders: [
      {
        name: "Nate Litton",
        role: "AI / data / ML — Digital",
        thread: "Executive sponsor, Waves 0–3",
        ask: "Sponsor pilot; protect sequencing",
      },
      {
        name: "AI R&D lead",
        role: "Nate’s org",
        thread: "Pilot lead; proposed self-contained shape",
        ask: "Lead Wave 0; ~2 hrs/week",
      },
      {
        name: "Incoming AI/ML Ops lead",
        role: "Nate’s org",
        thread: "Productionization path, Waves 0–2",
        ask: "Join Dallas; own ops thread",
      },
      {
        name: "Madison Motyl",
        role: "EA to Nate",
        thread: "Dallas scheduling",
        ask: "Confirm on-site window",
      },
      {
        name: "Chief of staff (incoming)",
        role: "Nate’s org",
        thread: "Coordination",
        ask: "Align attendees and follow-ups",
      },
      {
        name: "Brandon Newman",
        role: "CAT Technology",
        thread: "Parallel Cursor track",
        ask: "None in this plan (reference only)",
      },
    ],
  },

  nextSteps: {
    heading: "Next steps",
    steps: [
      {
        owner: "Joe Masello (Cursor)",
        action: "Contact Madison Motyl; schedule Dallas on-site.",
      },
      {
        owner: "Dallas on-site (≤2–3 weeks)",
        action:
          "Attendees: AI R&D lead, incoming AI/ML Ops lead; coordinated via Madison and chief of staff.",
      },
      {
        owner: "Dallas agenda",
        action:
          "Time today vs desired state · SDLC bottlenecks · AI maturity · use-case mapping. Week 0 starts at the end of this agenda.",
      },
    ],
    contacts: [
      { name: "Jason Wiker", role: "Cursor", email: "TBD" },
      { name: "Joe Masello", role: "Cursor", email: "TBD" },
      { name: "Sahil Patel", role: "Cursor", email: "TBD" },
    ],
  },
};

export const sections: SectionMeta[] = [
  content.whatWeHeard.meta,
  content.thePilot.meta,
  content.whyNow.meta,
  content.goForward.meta,
];
