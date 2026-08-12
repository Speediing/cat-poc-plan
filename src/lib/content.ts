/**
 * Content model — Caterpillar Digital × Cursor pilot briefing.
 *
 * Customer-facing leave-behind from Cursor to Caterpillar Digital.
 * Grounding: Jul 28, 2026 "Nate Litton | Cursor - Discovery" + Cursor pilot terms.
 * Destination after a successful pilot: ~7,000-person Caterpillar digital org.
 *
 * Voice bar: plain and short, matching cat-cursor-followup.vercel.app.
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
  portfolio: {
    heading: string;
    items: PortfolioItem[];
  };
  operatingModel: {
    heading: string;
    stages: string[];
    pain: string;
  };
  prototypeTrap: {
    heading: string;
    steps: PrototypeTrapStep[];
    soWhat: string;
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
    badge: "Discovery follow-up · July 28, 2026",
    title: "Caterpillar Digital × Cursor",
    thesis:
      "What we heard from your team, how agents would help on the blurry-photo parts ID work you described, and a thirty-day pilot small enough to start without a procurement conversation.",
    preparedBy:
      "Prepared for Nate Litton. Jason Wiker, Joe Masello & Sahil Patel, Cursor. Draft for your review before it goes wider.",
    footer:
      "Confidential. Prepared by Cursor for Caterpillar Digital. Please do not redistribute.",
  },

  whatWeHeard: {
    meta: {
      number: "01",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "The bottleneck isn't writing the code.",
      kicker:
        "Every constraint your team described sits between the idea and production — not inside the editor.",
      handoff:
        "Parts ID, translation, and the assistant all pay that toll. Next: the blurry-photo case.",
    },
    orgContext: [
      {
        label: "CAT Technology",
        text: "Software in the cab (Brandon Newman / Jamie). Hard legacy. Already scoping a Cursor pilot. Nate wants both tracks coordinated — this page is Digital only.",
      },
      {
        label: "Caterpillar Digital",
        text: "Everything else: cat.com, parts.com, digital products, Cat AI assistant (cloud and edge). 5–7 years into a rebuild. This plan.",
      },
      {
        label: "Nate → CDO (Augie)",
        text: "Owns AI, data, and ML on Digital, including AI R&D.",
      },
      {
        label: "Aug 1 reorg",
        text: "ML and AI Ops move under Nate. Same owner for the product and for getting it into production.",
      },
    ],
    truths: [
      {
        label: "Six months to ship",
        situation:
          "Plan is one big org. Build sits across about two or three engineering orgs. Then integration. Lots of routines and handoffs. The right people are in the loop — output quality is high. The tax is time.",
        meaning:
          "Your team wants speed without giving up that quality bar. That is a delivery problem, not a research gap.",
      },
      {
        label: "Prototypes reset the clock",
        situation:
          "AI R&D can stand something up in two weeks. Then it stalls on entitlements, security, or something nobody thought about — and the work goes back to the drawing board through the full cycle.",
        meaning:
          "Closing that gap is the whole point of the pilot. Not more prototypes — the same prototype, through the whole path, faster.",
      },
      {
        label: "Nothing here asks you to reorganize first",
        situation:
          "You do not have a thin agile domain team that carries an idea all the way to ship as one unit. And you do not want to change thousands of people overnight. The digital org is still ~7,000.",
        meaning:
          "One area first. Prove it. Expand to AI-focused work. Then wider.",
      },
    ],
    portfolio: {
      heading: "What sits on your plate",
      items: [
        {
          name: "Visual parts ID",
          detail:
            "Blurry or pixelated photo → part number → parts.com. Over a million parts. Thin photos on older parts. You need synthetic images to fill the gaps.",
        },
        {
          name: "Translation",
          detail:
            "You thought this was solved. It isn't. Manuals can run tens of thousands of pages. Cat-specific vocabulary plus safety rules block generic translate tools. Spend is close to tens of millions on human translators.",
        },
        {
          name: "Cat AI assistant",
          detail:
            "Cloud and edge. Same six-month path from idea to production as everything else.",
        },
      ],
    },
    operatingModel: {
      heading: "Six months to ship",
      stages: ["Plan (1 org)", "Build (~2–3 orgs)", "Integrate", "Ship"],
      pain: "Not a thin domain team that owns idea to ship. Separate orgs, heavy handoffs, lots of routines. Quality stays high because the right people are involved. A simple feature still takes about six months. When vendors ask for a gnarly codebase, that is not Digital's bottleneck — yours is the production path.",
    },
    prototypeTrap: {
      heading: "Prototypes reset the clock",
      steps: [
        {
          label: "Prototype",
          text: "AI R&D stands something up in about two weeks",
          duration: "~2 weeks",
        },
        {
          label: "Stuck",
          text: "Entitlements, security, or “we didn’t think about X”",
          duration: "Daily failure",
        },
        {
          label: "Restart",
          text: "Back to the drawing board through plan → build → integrate",
          duration: "~6 months",
        },
      ],
      soWhat:
        "Closing that gap is the whole point of the pilot. Not more prototypes — the same prototype, through the whole path, faster.",
    },
    callout: {
      heading: "How your team wants to start",
      body: "Your AI R&D lead's note: a self-contained sandbox avoids the usual infosec and integration tax just to stand a tool up. Bring incoming AI/ML Ops into the room. Real enough to matter. Contained enough to move. One area → prove it → expand to AI-focused work → then wider. Nothing here asks you to reorganize first.",
    },
  },

  useCase: {
    meta: {
      number: "02",
      id: "use-case",
      navLabel: "Parts ID",
      heading: "Blurry photo → part number.",
      kicker:
        "Your team builds this product. Same repositories, same pull requests, same review gates — with agents on the tickets behind it.",
      handoff:
        "Same idea applies to translation and the assistant. Next: why a thirty-day test is enough.",
    },
    intro:
      "A dealer or tech takes a blurry photo of a part. The system returns the part number. That opens the path to parts.com. Your team builds that product. We help them ship the pieces faster.",
    problem: {
      heading: "The job",
      flow: [
        {
          label: "Capture",
          text: "Someone shoots a blurry or pixelated photo of a part.",
        },
        {
          label: "Identify",
          text: "Match it to the right part among 1M+ SKUs.",
        },
        {
          label: "Buy",
          text: "Correct ID opens the buy path on parts.com.",
        },
      ],
      blockers: [
        "Thin photo history, especially on older parts",
        "Need synthetic images to fill sparse coverage",
        "1M+ parts — a hard matching problem",
        "Safety bar rules out casual guesses",
      ],
      outcome: "Hard photo in. Correct part out. Path to parts.com.",
    },
    agents: {
      heading: "Four ways your team would use it.",
      intro:
        "Same repositories, same pull requests, same review gates. The change is how much of the work an engineer has to type themselves.",
      factoryLabel: "Steps on a ticket",
      stations: [
        {
          name: "Scope",
          role: "Write the lead ticket. Split child work.",
        },
        {
          name: "Build",
          role: "Agent reads the repo and opens a draft PR.",
        },
        {
          name: "Test",
          role: "Agent runs tests on blurry-input cases.",
        },
        {
          name: "Fix",
          role: "Follow-up tickets close gaps the tests find.",
        },
        {
          name: "Review",
          role: "Your engineers review the PR and merge or send it back.",
        },
      ],
      leadTicket: "Visual Parts ID — blurry photo → part number",
      proofPattern:
        "Hand a ticket to an agent. Get a pull request back. People review. We have already run this shape on Cat demos for this use case.",
      loop: [
        "Ticket",
        "Agent",
        "Draft PR",
        "Human review",
      ],
      loopNote:
        "Agents work in parallel on child tickets. Humans stay on review.",
      backlogNote:
        "Example child tickets under the lead. Final set picked at Dallas.",
      backlog: [
        {
          id: "T-01",
          workstream: "Synthetic data",
          station: "Build",
          ticket: "Scaffold synthetic images for sparse / older parts",
        },
        {
          id: "T-02",
          workstream: "Eval",
          station: "Test",
          ticket: "Harness for blurry and pixelated inputs",
        },
        {
          id: "T-03",
          workstream: "Eval set",
          station: "Scope",
          ticket: "Labeling + eval set from thin historical photos",
        },
        {
          id: "T-04",
          workstream: "Catalog",
          station: "Build",
          ticket: "parts.com / catalog lookup in the sandbox",
        },
        {
          id: "T-05",
          workstream: "Packaging",
          station: "Build",
          ticket: "Service packaging with basic entitlements and security hooks",
        },
        {
          id: "T-06",
          workstream: "Triage",
          station: "Fix",
          ticket: "Failure taxonomy + fix tickets from hard misses",
        },
      ],
      success:
        "Success looks like real tickets moving to merged pull requests on a slice of this work — faster than the six-month handoff path. Not a toy demo.",
    },
    fit: {
      heading: "Why start here.",
      rows: [
        {
          dimension: "Real product work.",
          why: "Data, models, services. Not a disposable sandbox.",
        },
        {
          dimension: "Contained start.",
          why: "Can begin in AI R&D's environment with less infosec drag.",
        },
        {
          dimension: "Full path.",
          why: "Hits the prototype-to-production gap the Aug 1 reorg is meant to close.",
        },
        {
          dimension: "Copies elsewhere.",
          why: "What works here transfers to translation, the assistant, then other digital teams.",
        },
      ],
    },
  },

  whyNow: {
    meta: {
      number: "03",
      id: "why-now",
      navLabel: "Why it matters",
      heading: "Closing that gap is the whole point.",
      kicker:
        "Not more prototypes. The same work, through the whole path, faster.",
      handoff:
        "If that holds, the ask is small: thirty days, tokens covered, with the team you now own.",
    },
    arguments: [
      {
        claim: "Every AI product pays the same six-month tax.",
        grounding:
          "Parts ID, translation (near tens of millions on human spend), and the Cat AI assistant all sit behind the same handoffs.",
        soWhat:
          "Prove a cut on one real initiative. That informs the rest of the portfolio.",
      },
      {
        claim: "Aug 1 only helps if production gets faster.",
        grounding:
          "Two-week demos still restart the cycle. Security and entitlements get re-litigated. ML and AI Ops now sit with the same owner as the AI product work.",
        soWhat:
          "Test tickets through pull requests with that group now, before old habits settle back in.",
      },
      {
        claim: "Start small. The digital org is still ~7k.",
        grounding:
          "You were clear: do not force thousands of people overnight.",
        soWhat:
          "One area. Prove it. Then AI teams. Then the broader digital org. Nothing more until evidence.",
      },
    ],
  },

  thePilot: {
    meta: {
      number: "04",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "Thirty days, no procurement conversation to start.",
      kicker:
        "You were open to six or eight weeks. Longer cycles lose focus. We proposed thirty days. Tokens covered. Setup under a day.",
      handoff: "If the readout is green, scale follows the sequence you set.",
    },
    dealParagraph:
      "Thirty days. Cursor covers 100% of token costs across every model. Setup under a day. Group: AI R&D plus incoming AI/ML Ops, on one real initiative you pick at Dallas. You leave with evidence against the six-month path, and a real token number for the budget talk.",
    shape: {
      intro: "Two constraints your team set. One proposal that holds both.",
      requirements: [
        {
          label: "Self-contained",
          text: "AI R&D sandbox — avoids the usual infosec and integration tax to stand a tool up.",
        },
        {
          label: "Real enough",
          text: "Full path preferred — tickets through pull requests. Not a corner case you'd rebuild later.",
        },
      ],
      recommendation:
        "Run it with AI R&D and ML/AI Ops — the group you control after Aug 1 — on one Digital AI initiative. Parts ID is the working example. You pick at Dallas.",
    },
    funding: {
      heading: "The commercial deal",
      during: "30 days. 100% of tokens covered. Setup under a day.",
      output: "Evidence on real work. A measured token baseline you keep.",
      after: "If you continue: shared token pool and per-developer spend caps.",
    },
    weeks: [
      {
        week: "0",
        focus: "Dallas",
        detail: "Pick the initiative. Name the group. Sandbox infosec.",
      },
      {
        week: "1",
        focus: "Stand up",
        detail: "Cursor eng with the group. Real repositories by day 2–3.",
      },
      {
        week: "2–3",
        focus: "Build",
        detail: "Tickets to draft pull requests on the chosen work.",
      },
      {
        week: "4",
        focus: "Decide",
        detail: "Readout vs six months. Go or no-go.",
      },
    ],
    successCriteria: {
      heading: "What comes out of it",
      note: "Three bars. Co-signed at Dallas.",
      rows: [
        {
          criterion: "Real Digital work",
          evidence: "Most days on your repositories — not a throwaway sandbox",
          owner: "Pilot lead",
        },
        {
          criterion: "Ticket to shipped",
          evidence: "End-to-end demo at readout, faster than the handoff path",
          owner: "Pilot lead",
        },
        {
          criterion: "Something others can copy",
          evidence: "Short write-up another AI team can pick up",
          owner: "Cursor + pilot lead",
        },
      ],
    },
    asks: {
      heading: "What we need",
      items: [
        "Dallas in 2–3 weeks (Joe → Madison) with AI R&D and AI/ML Ops leads",
        "A named pilot lead (natural fit: AI R&D)",
        "Use case + sandbox infosec decided at Dallas",
        "About two hours a week from the pilot lead through readout",
      ],
    },
  },

  goForward: {
    meta: {
      number: "05",
      id: "go-forward",
      navLabel: "If it works",
      heading: "One area. Prove it. Then AI work. Then wider.",
      kicker:
        "Your sequence. Evidence gates everything after. Nothing asks thousands of people to change overnight.",
    },
    destination:
      "Start in one area. Prove it. Expand to AI-focused work. Then the broader digital org. We do not ask ~7,000 people to move on faith.",
    waves: [
      {
        label: "0",
        name: "Pilot",
        timeframe: "~30 days",
        entry: "Dallas + group",
        exit: "Go or no-go on real work",
      },
      {
        label: "1",
        name: "AI teams",
        timeframe: "After readout",
        entry: "Pilot green",
        exit: "Parts ID, translation, assistant teams on Cursor",
      },
      {
        label: "2",
        name: "Platform",
        timeframe: "Gated",
        entry: "Step 1 evidence",
        exit: "Enterprise deal, standing infosec, Cat-owned enablement",
      },
      {
        label: "3",
        name: "~7k digital",
        timeframe: "Pull-based",
        entry: "Platform ready",
        exit: "Team by team. Spend visible per team.",
      },
    ],
    stakeholders: [
      {
        name: "Nate Litton",
        role: "AI / data / ML — Digital",
        thread: "Sponsor",
        ask: "Sponsor the pilot. Keep the sequence intact.",
      },
      {
        name: "AI R&D lead",
        role: "Nate's org",
        thread: "Pilot lead",
        ask: "Lead the pilot. Join Dallas.",
      },
      {
        name: "Incoming AI/ML Ops lead",
        role: "Nate's org",
        thread: "Path to production",
        ask: "Join Dallas. Own the ops thread.",
      },
      {
        name: "Madison Motyl",
        role: "EA to Nate",
        thread: "Scheduling",
        ask: "Confirm Dallas with Joe.",
      },
      {
        name: "Chief of staff (incoming)",
        role: "Nate's org",
        thread: "Coordination",
        ask: "Help Madison land the Dallas window and attendees.",
      },
    ],
  },

  nextSteps: {
    heading: "Three things, then we start.",
    steps: [
      {
        owner: "Joe → Madison + chief of staff",
        action:
          "Schedule Dallas in 2–3 weeks. Madison (EA) and the new chief of staff coordinate.",
      },
      {
        owner: "Who is in the room",
        action:
          "AI R&D lead and incoming AI/ML Ops lead. Same group that will run the pilot.",
      },
      {
        owner: "Dallas agenda",
        action:
          "Where time goes today vs desired. SDLC bottlenecks. AI maturity. Use cases, the value case, and how we measure. Then pick the initiative and start the clock.",
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
