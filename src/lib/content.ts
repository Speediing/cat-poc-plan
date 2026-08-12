/**
 * Content model for the Caterpillar Digital × Cursor pilot microsite.
 *
 * Single source of truth for all site copy. Components render this data and
 * never hardcode copy. CONTENT.md mirrors this file for human review; if the
 * two diverge, this file wins.
 *
 * Grounding: Jul 28, 2026 discovery call ("Nate Litton | Cursor - Discovery")
 * plus Cursor's standard pilot terms. No fabricated Caterpillar metrics.
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
  /** Two-digit display number ("01"–"04"); rendered prominently per the plan. */
  number: string;
  /** Anchor id for the sticky nav. */
  id: string;
  navLabel: string;
  heading: string;
  /** One-line framing under the heading. */
  kicker: string;
  /** Linking sentence to the next beat; omitted on the last section. */
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
  /** e.g. "0", "1", "2–3", "4" */
  week: string;
  focus: string;
  detail: string;
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
    items: string[];
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

export interface WhyNowContent {
  meta: SectionMeta;
  arguments: ArgumentBlock[];
  fundingBox: {
    heading: string;
    items: string[];
  };
}

export interface Wave {
  /** e.g. "Wave 0" */
  label: string;
  name: string;
  timeframe: string;
  detail: string;
}

export interface Stakeholder {
  name: string;
  role: string;
  carries: string;
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
    badge: "Private · Prepared for Caterpillar Digital · August 2026",
    title: "A 30-day plan to prove Cursor inside Caterpillar Digital",
    thesis:
      "Cursor funds a 30-day pilot with Nate Litton's organization to answer one question with evidence: can the teams building Caterpillar's AI products ship dramatically faster — starting with the six-month idea-to-production cycle.",
    preparedBy:
      "Prepared by Jason Wiker, Joe Masello & Sahil Patel, Cursor · Following the July 28 conversation with Nate Litton",
    footer: "Private — prepared for Caterpillar. Not for redistribution.",
  },

  whatWeHeard: {
    meta: {
      number: "01",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "What we heard",
      kicker:
        "Customer truth from the July 28 conversation — synthesized, not transcribed.",
      handoff:
        "Every problem above shares a bottleneck: how fast an idea becomes shipped software. The pilot is built to test exactly that.",
    },
    orgContext: [
      {
        label: "The split",
        text: "In-cab software is CAT Technology. Everything else — cat.com, parts.com, digital products, the CAT AI assistant (cloud + edge) — is Digital.",
      },
      {
        label: "Nate's scope",
        text: "All AI, data, and ML on the digital side, including an AI R&D team. Reports to the Chief Digital Officer.",
      },
      {
        label: "The posture",
        text: "5–7 years into modernization — far less legacy code than the technology side.",
      },
    ],
    truths: [
      {
        label: "Six months to ship a simple feature",
        situation:
          "Fragmented handoffs across plan, build, and integration organizations stretch the idea-to-production cycle to roughly six months — independent of how good the idea is.",
        meaning:
          "This is a software delivery problem, not an AI research problem. It's the pain Cursor attacks most directly.",
      },
      {
        label: "The AI product load is heavy and specific",
        situation:
          "Visual parts identification across more than a million parts, with thin imagery on older parts and synthetic image generation on the roadmap. Translation spend running close to tens of millions on human translators, because CAT-specific vocabulary and safety risk rule out generic LLMs.",
        meaning:
          "These are hard builds owned by Nate's teams — and every one of them pays the six-month tax. Cursor's role is accelerating the teams that build them, not building them.",
      },
      {
        label: "August 1 changed what Nate controls",
        situation:
          "The reorg moved the ML and AI Ops platform teams under Nate, giving his organization more control over productionizing AI solutions.",
        meaning:
          "The delivery pipeline his teams depend on is, for the first time, largely his to shape.",
      },
    ],
    callout: {
      heading: "How Nate wants to run this",
      body: "His AI R&D lead suggested a self-contained pilot environment: fewer integration dependencies, less infosec overhead. Nate wants it meaty and representative enough to establish a repeatable pattern — ideally the full idea-to-production flow end to end, including ticketing — without isolating to a corner that has to be rebuilt elsewhere. And his hard constraint: don't require thousands of people to change how they work overnight. Pick one area, prove it, expand to AI-focused workstreams, then the broader org.",
    },
  },

  thePilot: {
    meta: {
      number: "02",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "The pilot",
      kicker:
        "Thirty days, Cursor-funded, built around the constraints from the call.",
      handoff: "Thirty days is the how. Here's the why-now.",
    },
    dealParagraph:
      "Thirty days. Cursor covers 100% of token costs across all models. Implementation takes less than a day. Two outputs: a viability verdict on real Caterpillar Digital work, and a token consumption baseline that makes post-pilot costs a measurement instead of an estimate.",
    shape: {
      intro:
        "The call surfaced two requirements that pull against each other. The pilot shape has to satisfy both.",
      requirements: [
        {
          label: "Self-contained",
          text: "Fewer integration dependencies, less infosec overhead, fast start. (The AI R&D lead's suggestion.)",
        },
        {
          label: "Representative",
          text: "Meaty enough to establish a repeatable pattern — not an isolated corner that has to be rebuilt elsewhere. Ideally the full idea-to-production flow, ticketing included.",
        },
      ],
      recommendation:
        "Pilot with the AI R&D team plus the newly arrived ML/AI Ops platform teams — a cohort Nate fully controls post-reorg — on one real initiative selected at the Dallas on-site. Structure it so the initiative travels the entire idea-to-production path, ticket to shipped, inside a self-contained environment. Contained in blast radius; representative in shape. The specific use case is a Dallas decision — this page proposes the shape, not the pick.",
    },
    weeks: [
      {
        week: "0",
        focus: "Dallas outcomes → kickoff",
        detail:
          "Use case selected at the on-site. Pilot cohort named (suggest 10–20 developers across AI R&D + ML/AI Ops). Self-contained environment agreed with infosec. Seats provisioned — implementation takes less than a day, so Week 0 is about decisions, not installation. Success criteria co-signed before anyone writes code.",
      },
      {
        week: "1",
        focus: "Enablement",
        detail:
          "Hands-on onboarding with a Cursor engineer. Developers working in their real codebase by day 2–3. The end-to-end flow mapped: where the ticket enters, what \u201cshipped\u201d means for the pilot initiative.",
      },
      {
        week: "2–3",
        focus: "Build & prove",
        detail:
          "Heads-down on the selected initiative, ticket to production, with Cursor in the loop at every stage the cohort touches. Weekly office hours. Usage and token data accumulating in the background.",
      },
      {
        week: "4",
        focus: "Readout",
        detail:
          "Joint session: what shipped, elapsed idea-to-production time versus the ~6-month norm, what the developers said, the token consumption baseline, and a concrete Wave 1 proposal. Decision-ready.",
      },
    ],
    successCriteria: {
      heading: "Done means",
      note: "Proposed — co-signed at kickoff.",
      items: [
        "Pilot developers used Cursor on real Caterpillar Digital work — not sandboxes — for the majority of the 30 days.",
        "The selected initiative demonstrably moved through the full idea-to-production flow, ticketing included, inside the pilot window — shown by Caterpillar's own developers at the readout.",
        "The pattern is written down: an enablement-and-delivery playbook another digital team could pick up without rebuilding from scratch.",
        "Token consumption baseline delivered: actual usage by model, per developer, over 30 days.",
        "Infosec questions surfaced and answered during the pilot window, not after it.",
      ],
    },
    asks: {
      heading: "What we need from Caterpillar",
      items: [
        "The Dallas on-site on the calendar (Joe → Madison, already in motion)",
        "A named pilot lead — natural fit: the AI R&D lead",
        "Use-case selection at Dallas",
        "Self-contained environment sign-off from infosec",
        "~2 hours/week from the pilot lead",
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
        "The case for running the experiment this quarter — grounded only in what was said, plus our pilot terms.",
      handoff:
        "The pilot answers the question for one cohort. This is what the answer unlocks.",
    },
    arguments: [
      {
        claim: "The six-month tax compounds across every initiative.",
        grounding:
          "Parts identification, translation, the CAT AI assistant — each pays the same idea-to-production toll.",
        soWhat:
          "Cutting the cycle isn't one project's win; it's a multiplier on the whole digital AI portfolio. The pilot measures the cut on one real initiative instead of asserting it.",
      },
      {
        claim: "The reorg window is open.",
        grounding: "As of August 1, ML and AI Ops sit under Nate.",
        soWhat:
          "New reporting lines are when delivery patterns get set. A pilot now means the tooling pattern is established while the concrete is wet, not retrofitted after teams settle.",
      },
      {
        claim: "Pattern before scale is the cheap sequencing.",
        grounding:
          "Nate's own constraint — don't make thousands of people change overnight — is also the fiscally conservative one.",
        soWhat:
          "A 30-day, one-area pilot is the smallest unit of evidence that can honestly justify or kill a broader rollout. The alternative isn't \u201cno decision\u201d; it's a slower decision made with less data.",
      },
      {
        claim: "A token baseline instead of a budget guess.",
        grounding:
          "Cursor covers 100% of token costs across all models for the 30 days; the exhaust is a real consumption baseline from Caterpillar's own usage.",
        soWhat:
          "Post-pilot enterprise pricing follows Cursor's standard shape — a shared token pool with per-developer spend controls — so the budget conversation starts from measured data, with caps.",
      },
      {
        claim: "The technology side is already moving.",
        grounding:
          "Brandon Newman's organization has a scoped use case on the technology side.",
        soWhat:
          "A reference point, not a race — but Caterpillar will have Cursor evidence soon regardless. The question is whether Digital generates its own or reads someone else's.",
      },
    ],
    fundingBox: {
      heading: "Funding model",
      items: [
        "30-day pilot",
        "Cursor covers 100% of token costs across all models",
        "Implementation in under a day",
        "Outputs: viability verdict + token consumption baseline + repeatable-pattern playbook",
        "Post-pilot: enterprise agreement — shared token pool, per-developer spend controls",
      ],
    },
  },

  goForward: {
    meta: {
      number: "04",
      id: "go-forward",
      navLabel: "Go forward",
      heading: "Go forward",
      kicker:
        "The pilot is Wave 0 of a rollout across the ~7,000-person digital organization — sequenced the way Nate described it.",
    },
    destination:
      "This isn't a one-off experiment. The rollout sequence is the one Nate laid out on the call — one area, prove it, AI-focused workstreams, then the broader org — and everything the pilot measures (enablement time, cycle-time evidence, token consumption, the written playbook) is the operating data for the waves that follow.",
    waves: [
      {
        label: "Wave 0",
        name: "Pilot",
        timeframe: "Now → ~30 days",
        detail:
          "AI R&D + ML/AI Ops cohort, one initiative, end to end. Output: viability verdict, token baseline, the playbook, and a concrete Wave 1 proposal.",
      },
      {
        label: "Wave 1",
        name: "AI-focused workstreams",
        timeframe: "Post-readout",
        detail:
          "Expand across Nate's own scope — the teams building parts identification, translation, and the CAT AI assistant. Pilot developers become internal references; the Wave 0 playbook is reused, not reinvented. This is the wave the readout must earn.",
      },
      {
        label: "Wave 2",
        name: "Platform enablement",
        timeframe: "Gated on Wave 1 evidence",
        detail:
          "The unglamorous middle that makes Wave 3 possible: enterprise agreement in place; infosec posture hardened from pilot findings into a standing approval (self-contained exception → sanctioned pattern); shared token pool with per-developer spend controls live; enablement owned by Caterpillar champions rather than Cursor staff; ticketing/SDLC integration generalized beyond the pilot environment.",
      },
      {
        label: "Wave 3",
        name: "Digital org at scale",
        timeframe: "Deliberately unscheduled",
        detail:
          "Standard onboarding motion across the ~7,000-person digital organization, team by team, with usage and spend visible per team. Wave 3's pace is set by Wave 1–2 evidence. Teams onboard on evidence and pull, not mandate — which is how the \u201cdon't force thousands to change overnight\u201d constraint stays honored at scale.",
      },
    ],
    readyToScale: {
      heading: "Ready to scale means",
      items: [
        "Pilot met its co-signed success criteria.",
        "Token economics validated: the measured baseline maps to an acceptable per-developer cost under the shared-pool model.",
        "Infosec cleared for a standing rollout pattern, not just a pilot exception.",
        "At least two teams beyond the pilot cohort asking to onboard — pull, not push.",
        "The playbook works without Cursor staff in the room: a Caterpillar champion has run an onboarding using it.",
      ],
    },
    stakeholders: [
      {
        name: "Nate Litton",
        role: "AI, data & ML — Caterpillar Digital",
        carries: "Executive sponsor, Waves 0–3",
      },
      {
        name: "AI R&D lead",
        role: "Nate's org",
        carries: "Pilot lead, Wave 0; proposed the self-contained shape",
      },
      {
        name: "Incoming AI/ML Ops lead",
        role: "Nate's org (post-reorg)",
        carries: "Productionization path, Waves 0–2",
      },
      {
        name: "Madison Motyl",
        role: "EA to Nate",
        carries: "Dallas on-site scheduling",
      },
      {
        name: "Chief of staff (incoming)",
        role: "Nate's org",
        carries: "Coordination",
      },
      {
        name: "Brandon Newman",
        role: "CAT Technology",
        carries:
          "Parallel technology-side track — reference point, out of scope here",
      },
    ],
  },

  nextSteps: {
    heading: "Next steps",
    steps: [
      {
        owner: "Joe Masello (Cursor)",
        action:
          "Reach out to Madison Motyl to schedule the Dallas on-site.",
      },
      {
        owner: "Dallas on-site — target within 2–3 weeks",
        action:
          "With Nate's AI R&D lead and incoming AI/ML Ops lead; coordinated via Madison and Nate's new chief of staff.",
      },
      {
        owner: "Dallas agenda (set on the call)",
        action:
          "Where the team spends time today vs. desired state · SDLC bottlenecks · AI maturity · use case / value case mapping. The pilot's Week 0 begins where this agenda ends.",
      },
    ],
    contacts: [
      { name: "Jason Wiker", role: "Cursor", email: "TBD" },
      { name: "Joe Masello", role: "Cursor", email: "TBD" },
      { name: "Sahil Patel", role: "Cursor", email: "TBD" },
    ],
  },
};

/**
 * Ordered section metadata for the sticky nav and section numbering.
 * "Next steps" is a closer, not a numbered beat — it gets a nav entry
 * but no section number.
 */
export const sections: SectionMeta[] = [
  content.whatWeHeard.meta,
  content.thePilot.meta,
  content.whyNow.meta,
  content.goForward.meta,
];
