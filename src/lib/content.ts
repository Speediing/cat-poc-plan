/**
 * Content model — Caterpillar Digital × Cursor pilot briefing.
 *
 * Customer-facing leave-behind from Cursor to Caterpillar Digital.
 * Grounding: Jul 28, 2026 "Nate Litton | Cursor - Discovery" + Cursor pilot terms.
 * Destination after a successful pilot: ~7,000-person Caterpillar digital org.
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
    badge: "Prepared for Nate Litton · Caterpillar Digital · August 2026",
    title: "Caterpillar Digital × Cursor — proposed pilot structure",
    thesis:
      "We propose a Cursor-funded 30-day pilot with your Digital AI organization to measure one thing: whether the teams building Caterpillar’s AI products can cut the ~6-month idea-to-production cycle. If it works, we have a pattern to scale across your ~7,000-person digital org.",
    preparedBy:
      "From Jason Wiker, Joe Masello & Sahil Patel, Cursor · Following our July 28 conversation with Nate Litton",
    footer:
      "Confidential — prepared by Cursor for Caterpillar Digital. Please do not redistribute.",
  },

  whatWeHeard: {
    meta: {
      number: "01",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "What we heard",
      kicker:
        "Our synthesis of the July 28 conversation — offered back so we can align before we propose structure.",
      handoff:
        "The bottleneck we heard across every thread: idea to shipped software takes ~6 months. The pilot below is how we’d measure whether Cursor changes that for you.",
    },
    orgContext: [
      {
        label: "Where this plan applies",
        text: "Your Digital org — not CAT Technology (in-cab).",
      },
      {
        label: "Digital covers",
        text: "cat.com, parts.com, digital products, CAT AI assistant (cloud + edge).",
      },
      {
        label: "Your scope (Nate)",
        text: "AI, data, and ML on Digital, including AI R&D. Reports to the Chief Digital Officer.",
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
          "You described handoffs across plan, build, and integration stretching idea-to-production to roughly six months.",
        meaning:
          "That’s a delivery problem — the one we designed Cursor to attack — not an AI research gap.",
      },
      {
        label: "AI product load is heavy and specific",
        situation:
          "Parts identification across 1M+ parts; translation near tens of millions on human translators — CAT vocabulary and safety block generic LLMs.",
        meaning:
          "Your teams build these products. We accelerate those teams; we do not build the products for you.",
      },
      {
        label: "August 1 reorg",
        situation: "ML and AI Ops platform teams moved under Nate.",
        meaning:
          "You now control more of the productionization path — a window to set tooling patterns deliberately.",
      },
    ],
    callout: {
      heading: "How you want to run this",
      body: "We heard a clear preference: self-contained enough to start fast (your AI R&D lead), representative enough to set a pattern — ideally ticket-to-shipped. One area first; then AI workstreams; then the broader org. We are not asking thousands of people to change overnight.",
    },
  },

  thePilot: {
    meta: {
      number: "02",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "The pilot",
      kicker: "What we propose to run with you. 30 days. We cover token costs. Setup under one day.",
      handoff: "That’s the structure we’d run. Here’s why we’d start now.",
    },
    dealParagraph:
      "We fund 30 days of usage — 100% of token costs across all models. Setup takes under a day. Together we produce two outputs: a viability verdict on real Digital work, and a measured token baseline for your budget conversation.",
    shape: {
      intro: "You gave us two constraints. We designed the pilot to hold both:",
      requirements: [
        {
          label: "Self-contained",
          text: "Fewer integrations; lower infosec drag; fast start.",
        },
        {
          label: "Representative",
          text: "Full idea-to-production path preferred, including ticketing — not a corner case you’d have to rebuild later.",
        },
      ],
      recommendation:
        "We propose piloting with AI R&D + ML/AI Ops — the cohort you control post-reorg — on one real initiative you select at Dallas. Ticket-to-shipped inside a self-contained environment. You pick the use case; we propose the shape.",
    },
    weeks: [
      {
        week: "0",
        focus: "Decide",
        detail:
          "At Dallas you select the use case; we name 10–20 developers (AI R&D + ML/AI Ops) with you; infosec sign-off; we co-sign success criteria. Outcome: kickoff-ready.",
      },
      {
        week: "1",
        focus: "Enable",
        detail:
          "We put a Cursor engineer with your cohort; developers in real codebases by day 2–3; map ticket → shipped. Outcome: cohort productive.",
      },
      {
        week: "2–3",
        focus: "Build",
        detail:
          "Your initiative runs ticket-to-production with Cursor in the loop; weekly office hours; usage data accumulates. Outcome: evidence on real work.",
      },
      {
        week: "4",
        focus: "Decide",
        detail:
          "Joint readout: what shipped, cycle time vs ~6 months, developer feedback, token baseline, Wave 1 proposal. Outcome: go / no-go together.",
      },
    ],
    successCriteria: {
      heading: "Success criteria",
      note: "Proposed — we’d co-sign these with you at kickoff.",
      rows: [
        {
          criterion: "Real work, not sandboxes",
          evidence: "Majority of 30 days on your Digital codebases",
          owner: "Your pilot lead",
        },
        {
          criterion: "Ticket-to-shipped completed",
          evidence: "Your developers demo end-to-end at readout",
          owner: "Your pilot lead",
        },
        {
          criterion: "Repeatable playbook",
          evidence: "Written enablement + delivery guide another Digital team can reuse",
          owner: "Cursor + your pilot lead",
        },
        {
          criterion: "Token baseline",
          evidence: "Usage by model, per developer, 30 days",
          owner: "Cursor",
        },
        {
          criterion: "Infosec closed in-window",
          evidence: "Open questions answered before readout",
          owner: "Your infosec + pilot lead",
        },
      ],
    },
    asks: {
      heading: "What we’d need from you",
      items: [
        "Dallas on-site on the calendar (we’ll reach Madison via Joe)",
        "A named pilot lead — natural fit: your AI R&D lead",
        "Use-case selection at Dallas",
        "Infosec sign-off on a self-contained environment",
        "~2 hrs/week from the pilot lead",
        "A readout date set at kickoff",
      ],
    },
  },

  whyNow: {
    meta: {
      number: "03",
      id: "why-now",
      navLabel: "Why now",
      heading: "Why now",
      kicker:
        "The case for moving this quarter — grounded only in what you told us and our standard pilot terms.",
      handoff:
        "The pilot answers the question for one cohort. Below is how we’d scale with you after that.",
    },
    arguments: [
      {
        claim: "The cycle-time tax hits every AI initiative",
        grounding:
          "Parts ID, translation, and the CAT AI assistant each pay the ~6-month toll today.",
        soWhat:
          "A measured cut on one initiative informs the whole Digital AI portfolio — we don’t ask you to take that on faith.",
      },
      {
        claim: "Your reporting lines just changed",
        grounding: "As of August 1, ML and AI Ops report to Nate.",
        soWhat:
          "Patterns you set now stick; retrofitting tooling later costs more.",
      },
      {
        claim: "Smallest honest test before scale",
        grounding:
          "You were clear: don’t force thousands of people to change overnight.",
        soWhat:
          "A 30-day, one-area pilot is the minimum evidence to greenlight or stop expansion.",
      },
      {
        claim: "A token baseline instead of a budget guess",
        grounding: "We’ll cover 100% of token costs for the 30 days.",
        soWhat:
          "Your post-pilot pricing discussion starts from measured Caterpillar usage, with a shared pool and per-developer controls.",
      },
      {
        claim: "Technology side already has a scoped case",
        grounding:
          "Brandon Newman’s org (CAT Technology) has a Cursor use case in motion.",
        soWhat:
          "Caterpillar will have Cursor evidence soon either way. Digital can generate its own — or wait on Technology’s.",
      },
    ],
    fundingBox: {
      heading: "Funding model",
      during:
        "During: 30-day pilot; we pay 100% of token costs (all models); setup under one day.",
      output:
        "Output: viability verdict, token baseline, reusable playbook — yours to keep.",
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
        "How we’d scale with you across the ~7,000-person digital organization — sequenced the way you described.",
    },
    destination:
      "We treat the pilot as Wave 0, not a one-off. Your sequence from the conversation: one area → prove it → AI workstreams → broader org. Everything we measure in 30 days (cycle time, tokens, playbook) gates the waves that follow.",
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
      heading: "What “ready to scale” means to us",
      items: [
        "Wave 0 success criteria met",
        "Token baseline maps to an acceptable per-developer cost for you",
        "Infosec approval for a standing pattern — not a pilot exception",
        "≥2 teams outside the cohort asking to onboard",
        "A Caterpillar champion ran an onboarding from the playbook without Cursor in the room",
      ],
    },
    stakeholders: [
      {
        name: "Nate Litton",
        role: "AI / data / ML — Digital",
        thread: "Executive sponsor, Waves 0–3",
        ask: "Sponsor the pilot; keep the sequencing intact",
      },
      {
        name: "AI R&D lead",
        role: "Nate’s org",
        thread: "Pilot lead; proposed the self-contained shape",
        ask: "Lead Wave 0; ~2 hrs/week",
      },
      {
        name: "Incoming AI/ML Ops lead",
        role: "Nate’s org",
        thread: "Productionization path, Waves 0–2",
        ask: "Join Dallas; own the ops thread",
      },
      {
        name: "Madison Motyl",
        role: "EA to Nate",
        thread: "Dallas scheduling",
        ask: "Confirm the on-site window with Joe",
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
        ask: "None in this plan — reference only",
      },
    ],
  },

  nextSteps: {
    heading: "Next steps",
    steps: [
      {
        owner: "Cursor — Joe Masello",
        action:
          "We’ll reach out to Madison Motyl to schedule the Dallas on-site.",
      },
      {
        owner: "Caterpillar + Cursor — Dallas on-site (within 2–3 weeks)",
        action:
          "With your AI R&D lead and incoming AI/ML Ops lead; coordinated via Madison and your chief of staff.",
      },
      {
        owner: "Shared agenda for Dallas",
        action:
          "Where the team spends time today vs desired state · SDLC bottlenecks · AI maturity · use-case mapping. Week 0 of the pilot starts where this agenda ends.",
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
