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

export interface PortfolioItem {
  name: string;
  detail: string;
}

export interface PrototypeTrapStep {
  label: string;
  text: string;
  duration: string;
}

export interface WhatWeHeardContent {
  meta: SectionMeta;
  orgContext: OrgContextItem[];
  truths: TruthCard[];
  /** AI product portfolio Nate owns — parts ID, translation, assistant */
  portfolio: {
    heading: string;
    items: PortfolioItem[];
  };
  /** Operating model: plan/build/integration handoffs */
  operatingModel: {
    heading: string;
    stages: string[];
    pain: string;
  };
  /** 2-week prototype → restart → ~6 months to productionize */
  prototypeTrap: {
    heading: string;
    steps: PrototypeTrapStep[];
    soWhat: string;
  };
  /** Digital vs Technology modernization asymmetry */
  modernization: {
    heading: string;
    digital: string;
    technology: string;
  };
  callout: Callout;
}

export interface UseCaseFlowStep {
  label: string;
  text: string;
}

export interface UseCaseTicket {
  id: string;
  workstream: string;
  ticket: string;
  station: string;
}

export interface UseCaseStation {
  name: string;
  role: string;
}

export interface UseCaseFitRow {
  dimension: string;
  why: string;
}

export interface UseCaseContent {
  meta: SectionMeta;
  intro: string;
  problem: {
    heading: string;
    flow: UseCaseFlowStep[];
    blockers: string[];
    outcome: string;
  };
  agents: {
    heading: string;
    intro: string;
    factoryLabel: string;
    stations: UseCaseStation[];
    leadTicket: string;
    proofPattern: string;
    loop: string[];
    loopNote: string;
    backlogNote: string;
    backlog: UseCaseTicket[];
    success: string;
  };
  fit: {
    heading: string;
    rows: UseCaseFitRow[];
  };
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
  funding: FundingExhibit;
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
  useCase: UseCaseContent;
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
    title: "Caterpillar Digital × Cursor",
    thesis:
      "You briefed us on a modern Digital stack slowed by handoffs — ~6 months for a simple feature, a prototype trap after every exciting two-week demo, and AI products (parts ID, translation, the Cat assistant) paying that tax. Here’s what we heard, how we’d attack visual parts ID with Cloud Agents, and a tight 30-day pilot to prove the pattern before you take it wider.",
    preparedBy:
      "From Jason Wiker, Joe Masello & Sahil Patel, Cursor. Following our July 28 conversation with Nate Litton.",
    footer:
      "Confidential. Prepared by Cursor for Caterpillar Digital. Please do not redistribute.",
  },

  whatWeHeard: {
    meta: {
      number: "01",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "What we heard",
      kicker:
        "Current-state depth from your July 28 briefing — the tech and operating reality we are designing against.",
      handoff:
        "Speed is the shared constraint across parts ID, translation, and the assistant. Next: how we’d attack visual parts ID with Cloud Agents.",
    },
    orgContext: [
      {
        label: "CAT Technology",
        text: "Cab-of-machine software. Brandon Newman / Jamie’s org. Out of scope here — parallel Cursor work already exists on that side.",
      },
      {
        label: "Caterpillar Digital",
        text: "Everything else: cat.com, parts.com, digital products, Cat AI assistant (cloud + edge). This plan.",
      },
      {
        label: "Nate → CDO (Augie)",
        text: "Owns all AI, data, and ML on Digital — including AI R&D. Reports to the Chief Digital Officer.",
      },
      {
        label: "Aug 1 reorg",
        text: "ML + AI Ops platform teams move under Nate so productionization destiny sits with the same owner as the AI product work.",
      },
    ],
    truths: [
      {
        label: "Handoffs, not code quality",
        situation:
          "Plan, build, and integration are separate orgs. No cohesive agile domain teams — sequential routines stretch every feature.",
        meaning:
          "~6 months for a simple feature. Quality is high; speed is not. That is a delivery problem Cursor is built to attack.",
      },
      {
        label: "Prototype trap",
        situation:
          "AI R&D can spark something exciting in ~2 weeks, then restarts the operating model to productionize — another ~6 months. Entitlements and security get missed the first pass.",
        meaning:
          "Aug 1 puts productionization under you. The proof we care about is ticket-to-shipped — not another demo.",
      },
      {
        label: "Change without a big-bang",
        situation:
          "You want AI-forward ways of working without forcing thousands of people to change overnight.",
        meaning:
          "One area → prove → AI workstreams → broader digital (~7k). Sequencing is yours; we operationalize it.",
      },
    ],
    portfolio: {
      heading: "AI product load on your plate",
      items: [
        {
          name: "Visual parts ID",
          detail:
            "Blurry / pixelated photo → part number → parts.com. 1M+ SKU classification; thin imagery on older parts; synthetic image generation required to fill sparse coverage.",
        },
        {
          name: "Translation",
          detail:
            "Still surprisingly unsolved at Cat. CAT-specific vocabulary + safety risk block generic LLM / Google Translate. Manuals can run tens of thousands of pages. Spend close to tens of millions on human translators — on Nate’s AI / digital plate.",
        },
        {
          name: "Cat AI assistant",
          detail:
            "Cloud + edge assistant work inside Digital. Same idea-to-production tax as the rest of the portfolio.",
        },
      ],
    },
    operatingModel: {
      heading: "Operating model today",
      stages: ["Idea", "Plan", "Build", "Integrate", "Ship"],
      pain: "Plan / build / integration orgs with heavy handoffs — not a legacy-code problem on Digital. Every AI product (parts ID, translation, assistant) pays the same ~6-month toll for a simple feature.",
    },
    prototypeTrap: {
      heading: "AI R&D prototype trap",
      steps: [
        {
          label: "Spark",
          text: "AI R&D ships an exciting, self-contained prototype",
          duration: "~2 weeks",
        },
        {
          label: "Restart",
          text: "Work re-enters plan → build → integrate to productionize",
          duration: "Handoff tax",
        },
        {
          label: "Ship",
          text: "Entitlements, security, packaging caught late — another full cycle",
          duration: "~6 months",
        },
      ],
      soWhat:
        "Cursor should compress the productionization path with the incoming AI/ML Ops cohort — not mint another prototype that dies in handoffs.",
    },
    modernization: {
      heading: "Modernization asymmetry",
      digital:
        "5–7 years into transformation — most surfaces built or rebuilt. Far less legacy gnarliness. “Art of the possible”: new capability delivery, not refactoring. Best surface for a representative Cursor pilot.",
      technology:
        "In-cab / Brandon’s world: brutal legacy codebases. Different pilot, already in motion. Not this plan — and not the bottleneck you described for Digital.",
    },
    callout: {
      heading: "How you want to run this",
      body: "Self-contained AI R&D sandbox (+ incoming AI/ML Ops) to start fast with less infosec drag — but meaty and representative enough to set a repeatable pattern, ideally ticket-to-shipped. One area → prove → expand AI workstreams → broader digital org (~7k). We are not asking thousands of people to change overnight.",
    },
  },

  useCase: {
    meta: {
      number: "01b",
      id: "use-case",
      navLabel: "Parts ID",
      heading: "Example use case: visual parts ID from a blurry photo",
      kicker:
        "Centerpiece use case from your briefing — and how Cursor Cloud Agents / a multi-station factory attacks the engineering workstreams.",
      handoff:
        "Same factory pattern applies to translation and the assistant. Next: why acting on this now compounds.",
    },
    intro:
      "You described building visual parts identification: a user captures a photo (often blurry or poorly pixelated), the system returns the part number, and the path continues to parts.com. Your teams build that product. We propose accelerating how you design, evaluate, and productionize it.",
    problem: {
      heading: "The problem",
      flow: [
        {
          label: "Capture",
          text: "Field or dealer takes a blurry / pixelated photo of a part.",
        },
        {
          label: "Identify",
          text: "Map the image to the correct part number among 1M+ SKUs.",
        },
        {
          label: "Transact",
          text: "Correct ID opens the path to buy on parts.com.",
        },
      ],
      blockers: [
        "Thin historical imagery, especially on older parts",
        "Synthetic image generation required to fill sparse coverage",
        "Large classification / retrieval problem at 1M+ parts",
        "Safety and quality bar rules out casual LLM guesses",
      ],
      outcome:
        "Correct part ID on hard inputs → catalog match → parts.com purchase path.",
    },
    agents: {
      heading: "How we’ve designed the Cursor approach",
      intro:
        "We don’t run visual parts ID as one chat thread. We design it as a multi-station software factory: ticketed work, parallel Cloud Agents on their own machines, draft PRs for your humans to review. Agents grind the engineering; your AI R&D and ML/AI Ops stay on acceptance criteria and judgment.",
      factoryLabel: "Software factory · visual parts ID stations",
      stations: [
        {
          name: "Intake",
          role: "Scope the slice, write the lead ticket, split child work",
        },
        {
          name: "Implement",
          role: "Cloud Agent explores the repo and opens a draft PR",
        },
        {
          name: "Validate",
          role: "Agent runs tests / eval hooks against blurry-input cases",
        },
        {
          name: "Fix",
          role: "Follow-up agent tickets close gaps found in validate",
        },
        {
          name: "Review",
          role: "Your engineers review the draft PR and merge or redirect",
        },
      ],
      leadTicket: "Visual Parts ID — blurry photo → part number",
      proofPattern:
        "Pattern we’ve already exercised on Cat demos: label / ticket → automation → Cloud Agent → draft PR on the visual parts ID workstream. Same shape scales into the 30-day pilot — without exposing internal plumbing.",
      loop: [
        "Label / ticket",
        "Automation",
        "Cloud Agent",
        "Draft PR",
        "Human review",
      ],
      loopNote:
        "Each station can trigger its own Cloud Agent. Agents work in parallel; humans stay at Review.",
      backlogNote:
        "Illustrative child tickets under the lead ticket — grounded in the problem you described. Final backlog selected at Dallas.",
      backlog: [
        {
          id: "T-01",
          workstream: "Synthetic data",
          station: "Implement",
          ticket:
            "Scaffold synthetic image generation for sparse / older parts",
        },
        {
          id: "T-02",
          workstream: "Eval harness",
          station: "Validate",
          ticket:
            "Classification / retrieval harness for blurry & pixelated inputs",
        },
        {
          id: "T-03",
          workstream: "Eval set",
          station: "Intake",
          ticket: "Labeling + eval set from thin historical imagery",
        },
        {
          id: "T-04",
          workstream: "Catalog lookup",
          station: "Implement",
          ticket:
            "parts.com / catalog lookup surface in the self-contained sandbox",
        },
        {
          id: "T-05",
          workstream: "API packaging",
          station: "Implement",
          ticket: "Service packaging with basic entitlements / security hooks",
        },
        {
          id: "T-06",
          workstream: "Failure triage",
          station: "Fix",
          ticket: "Failure taxonomy + fix tickets from hard-input eval misses",
        },
      ],
      success:
        "Pilot success: the factory loop is repeatable and faster than the ~6-month handoff path you described — proven on a real slice of blurry-photo parts ID, not a toy demo.",
    },
    fit: {
      heading: "Why this use case fits the pilot",
      rows: [
        {
          dimension: "Meaty + representative",
          why: "Real AI product work: data, ML, services — not a toy sandbox.",
        },
        {
          dimension: "Self-contained start",
          why: "Can begin in AI R&D’s environment with less infosec / integration drag.",
        },
        {
          dimension: "Surfaces idea→production",
          why: "Forces the prototype-to-productionize gap your Aug 1 reorg is meant to close.",
        },
        {
          dimension: "Pattern for scale",
          why: "Ticket→agent→PR loop copies to other Digital AI workstreams, then the ~7k digital org.",
        },
      ],
    },
  },

  whyNow: {
    meta: {
      number: "02",
      id: "why-now",
      navLabel: "Why it matters",
      heading: "Why this matters",
      kicker:
        "Business case rooted in the current-state facts above — not a generic AI pitch.",
      handoff:
        "If that holds, the ask is small: a 30-day, Cursor-funded pilot with the cohort you now own.",
    },
    arguments: [
      {
        claim: "Every AI product pays the same ~6-month tax",
        grounding:
          "Parts ID, translation (near tens of millions in human spend), and the Cat AI assistant each sit behind plan → build → integrate handoffs.",
        soWhat:
          "A measured cut on one meaty initiative informs the whole Digital AI portfolio — we don’t ask you to take that on faith.",
      },
      {
        claim: "The prototype trap wastes the Aug 1 reorg",
        grounding:
          "Exciting ~2-week R&D demos still restart the operating model; entitlements and security get missed. ML + AI Ops now report to you specifically to own productionization.",
        soWhat:
          "Prove ticket-to-shipped with that cohort now, before old habits reassert.",
      },
      {
        claim: "Digital is the right surface — Technology is a different story",
        grounding:
          "Your side is 5–7 years modernized; Brandon’s in-cab world carries the brutal legacy (and a parallel Cursor track).",
        soWhat:
          "A representative Digital pilot proves “art of the possible” on modern stacks — not a legacy-refactor experiment.",
      },
      {
        claim: "Scale only after one area works",
        grounding:
          "You were clear: AI-forward ways of working without changing thousands overnight. Destination is still ~7k digital.",
        soWhat:
          "One area → prove → AI workstreams → broader org. The 30-day pilot is Wave 0 of that sequence — nothing more until evidence.",
      },
    ],
  },

  thePilot: {
    meta: {
      number: "03",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "Proposed pilot",
      kicker:
        "Tight proposal only: 30 days, tokens covered, AI R&D + AI/ML Ops, Dallas next.",
      handoff: "If the readout is green, scale follows the sequence you described.",
    },
    dealParagraph:
      "Cursor-funded 30 days — 100% of token costs, all models. Implement in under a day. Cohort: AI R&D + incoming AI/ML Ops on one real initiative you pick at Dallas. Output: ticket-to-shipped evidence vs the ~6-month path, plus a token baseline for your budget conversation.",
    shape: {
      intro: "Two constraints you set; one proposal that holds both:",
      requirements: [
        {
          label: "Self-contained",
          text: "AI R&D sandbox — fewer integrations, lower infosec drag, fast start.",
        },
        {
          label: "Representative",
          text: "Meaty pattern (ideally ticket-to-shipped) — not a toy you’d rebuild later.",
        },
      ],
      recommendation:
        "Pilot with AI R&D + ML/AI Ops — the cohort you control post–Aug 1 — on one Digital AI initiative (parts ID is the working example). You pick the use case at Dallas; we bring the factory shape.",
    },
    funding: {
      heading: "Commercial",
      during: "30 days · 100% tokens covered · setup < 1 day",
      output: "Viability on real work + measured token baseline you keep",
      after: "Enterprise path: shared token pool + per-developer controls",
    },
    weeks: [
      {
        week: "0",
        focus: "Align",
        detail: "Dallas: pick initiative, name cohort, infosec on sandbox",
      },
      {
        week: "1",
        focus: "Enable",
        detail: "Cursor eng with cohort; real codebases by day 2–3",
      },
      {
        week: "2–3",
        focus: "Ship",
        detail: "Ticket → agent → PR on the chosen initiative",
      },
      {
        week: "4",
        focus: "Decide",
        detail: "Readout vs ~6 months · go / no-go on Wave 1",
      },
    ],
    successCriteria: {
      heading: "What “worked” means",
      note: "Co-signed at Dallas — three bars only.",
      rows: [
        {
          criterion: "Real Digital work",
          evidence: "Majority of days on your codebases — not a disposable sandbox",
          owner: "Pilot lead",
        },
        {
          criterion: "Ticket-to-shipped",
          evidence: "End-to-end demo at readout — faster than the handoff path",
          owner: "Pilot lead",
        },
        {
          criterion: "Reusable pattern",
          evidence: "Short playbook another AI workstream can pick up",
          owner: "Cursor + pilot lead",
        },
      ],
    },
    asks: {
      heading: "What we need",
      items: [
        "Dallas on-site in 2–3 weeks (Joe → Madison) with AI R&D + AI/ML Ops leads",
        "Named pilot lead (natural fit: AI R&D)",
        "Use-case selection + sandbox infosec at Dallas",
        "~2 hrs/week from the pilot lead through readout",
      ],
    },
  },

  goForward: {
    meta: {
      number: "04",
      id: "go-forward",
      navLabel: "Scale",
      heading: "If it works",
      kicker:
        "Your sequence — one area → AI workstreams → ~7k digital. Short version.",
    },
    destination:
      "Pilot is Wave 0. Evidence (cycle time, tokens, playbook) gates everything after — we don’t ask the broader digital org to move on faith.",
    waves: [
      {
        label: "Wave 0",
        name: "Pilot",
        timeframe: "~30 days",
        entry: "Dallas + cohort",
        exit: "Go / no-go on real work",
      },
      {
        label: "Wave 1",
        name: "AI workstreams",
        timeframe: "Post-readout",
        entry: "Wave 0 green",
        exit: "Parts ID / translation / assistant teams on Cursor",
      },
      {
        label: "Wave 2",
        name: "Platform",
        timeframe: "Gated",
        entry: "Wave 1 evidence",
        exit: "Enterprise + standing infosec + Cat-owned enablement",
      },
      {
        label: "Wave 3",
        name: "~7k digital",
        timeframe: "Pull-based",
        entry: "Platform ready",
        exit: "Team-by-team onboarding; spend visible per team",
      },
    ],
    stakeholders: [
      {
        name: "Nate Litton",
        role: "AI / data / ML — Digital",
        thread: "Sponsor",
        ask: "Sponsor Wave 0; keep sequencing intact",
      },
      {
        name: "AI R&D lead",
        role: "Nate’s org",
        thread: "Pilot lead",
        ask: "Lead Wave 0; join Dallas",
      },
      {
        name: "Incoming AI/ML Ops lead",
        role: "Nate’s org",
        thread: "Productionization",
        ask: "Join Dallas; own ops thread",
      },
      {
        name: "Madison Motyl",
        role: "EA to Nate",
        thread: "Scheduling",
        ask: "Confirm Dallas window with Joe",
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
          "Confirm current-state constraints · pick the initiative · name the AI R&D + AI/ML Ops cohort · sandbox infosec. Pilot clock starts when that ends.",
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
  content.useCase.meta,
  content.whyNow.meta,
  content.thePilot.meta,
  content.goForward.meta,
];
