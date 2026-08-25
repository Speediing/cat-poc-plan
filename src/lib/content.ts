/**
 * Content: Caterpillar Digital × Cursor leave-behind.
 *
 * Source of truth: Aug 11, 2026 "Cursor & Cat Digital" Dallas onsite
 * (Granola 87ae339d-1c0d-4890-867f-37e9be06d190) + structure/voice of
 * https://cat-cursor-followup.vercel.app
 *
 * Attendees: Jason Wiker, Joe Masello, Sahil Patel, Nate Litton, Shelby Bethea.
 * Olivier carried deep operating-model / SDLC context on the call.
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
}

export interface Finding {
  label: string;
  body: string;
}

export interface GapStat {
  value: string;
  label: string;
  detail: string;
}

export interface PathRow {
  stage: string;
  today: string;
  withCursor: string;
}

export interface GroupMember {
  name: string;
  role: string;
}

export interface PilotStat {
  value: string;
  label: string;
}

export interface SprintDay {
  when: string;
  stage: string;
  headline: string;
  bullets: string[];
}

export interface NextStep {
  owner: string;
  action: string;
}

export interface Contact {
  name: string;
  role: string;
}

export interface SiteContent {
  meta: SiteMeta;
  howWeRunIt: {
    meta: SectionMeta;
    headline: string;
    facts: string[];
    days: SprintDay[];
  };
  whatWeProve: {
    meta: SectionMeta;
    outcomes: string[];
  };
  whatWeHeard: {
    meta: SectionMeta;
    operatingModel: {
      heading: string;
      stages: string[];
      body: string;
    };
    findings: Finding[];
  };
  theGap: {
    meta: SectionMeta;
    stats: GapStat[];
    close: string;
  };
  whoCursorIs: {
    meta: SectionMeta;
    body: string;
    points: Finding[];
  };
  whereItPlugsIn: {
    meta: SectionMeta;
    rows: PathRow[];
    close: string;
  };
  proposedPoc: {
    meta: SectionMeta;
    intro: string;
    checks: string[];
    why: Finding[];
  };
  thePilot: {
    meta: SectionMeta;
    stats: PilotStat[];
    goals: string[];
    infra: string;
  };
  nextSteps: {
    label: string;
    heading: string;
    steps: NextStep[];
    close: string;
    contacts: Contact[];
  };
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const content: SiteContent = {
  meta: {
    badge: "Onsite follow-up · Dallas · August 11, 2026",
    title: "Caterpillar × Cursor",
    thesis:
      "What we heard from your team in Dallas, a plain primer on Cursor, and one work week on photo quality detection in a real Cat repo.",
    preparedBy:
      "Jason Wiker, Joe Masello & Sahil Patel, Cursor. With thanks to Olivier and Shelby Bethea.",
    footer:
      "Follow-up to the August 11 Dallas onsite · Prepared by Cursor for Caterpillar Digital. Confidential.",
  },

  howWeRunIt: {
    meta: {
      number: "01",
      id: "how-we-run-it",
      navLabel: "How we run it",
      heading: "How we run it.",
      kicker:
        "Five working days against your path: Intake → Design (HLA + AVT) → Execution → Release → Support.",
    },
    headline: "One work week. Real repo. Photo quality detection.",
    facts: [
      "Monday through Friday. No weekend build days.",
      "Work lives in a real Cat repo: same PRs, not a sandbox.",
      "Cursor covers tokens. Setup under a day. Nate names the small group.",
      "A 30-day token trial is the commercial envelope around the sprint, not the schedule.",
    ],
    days: [
      {
        when: "Day 1 · Mon",
        stage: "Intake / requirements",
        headline:
          "Stand the group up and write the checks before anyone codes.",
        bullets: [
          "Daniela eng rep + Kevin MLOps rep. Charlie (DPM AI) aware as observer. Olivier facilitates the path.",
          "Workspaces live. Credits in. Hours, not a program.",
          "Write acceptance checks upfront: resolution good enough, right component visible, no finger on the lens.",
          "Put that in a real ticket in a real Cat repo so the sprint does not start with an incomplete DPM spec.",
          "Compresses Intake. Proves against weeks of churn from incomplete requirements.",
        ],
      },
      {
        when: "Day 2 · Tue",
        stage: "Mini HLA / AVT (design)",
        headline:
          "One-day architecture pressure-test instead of months of HLA + AVT.",
        bullets: [
          "How photo quality detection ships as a shared service later (Cat Inspect, Spotters Guide) without a platform-data dependency.",
          "Codify review, security, and entitlement rules on day 2 so review does not start from zero on day 5.",
          "Same repo. No sandbox. Design context stays with the ticket.",
          "Compresses Design (HLA + AVT), the longest pull today. Proves against the dashboard POC that stuck on entitlements after the demo.",
        ],
      },
      {
        when: "Day 3 · Wed",
        stage: "Execution starts",
        headline:
          "R&D that engineering will keep. Build the quality check on the ticket.",
        bullets: [
          "Same repos and PRs Daniela’s team already uses. This is the prototype that is not discarded.",
          "Agents pick up the ticket, open PRs, leave a reviewable trail.",
          "Prove the “random Claude code” gap is closed because the code lives where engineering reviews.",
          "Compresses Execution start. Proves against prototypes that reset the clock at the handoff.",
        ],
      },
      {
        when: "Day 4 · Thu",
        stage: "Engineering handoff + MLOps",
        headline:
          "Kevin’s path: a working check that is reviewable in context, not a demo zip.",
        bullets: [
          "PR review against the day-1 checks and the day-2 rules.",
          "One thread: ticket → agent → PR. Context does not reset at the R&D / eng seam.",
          "MLOps sees the production path early, while the work is still warm.",
          "Compresses the engineering handoff. Proves against shared eng rotating and context dying at the seams.",
        ],
      },
      {
        when: "Day 5 · Fri",
        stage: "Reverse-demo and decide",
        headline: "Demo the written checks, not a slide. Then decide.",
        bullets: [
          "Reverse-demo against day-1 acceptance checks: resolution, component visible, no obstruction.",
          "Show the copy-paste pattern (shared service, not a one-off hack) so it can be told at a town hall or Augie offsite.",
          "Token baseline is a number, not a guess.",
          "Decide whether the path is real enough to copy across digital.",
          "Compresses Release / Support storytelling. Proves the pattern travels, not just the demo.",
        ],
      },
    ],
  },

  whatWeProve: {
    meta: {
      number: "02",
      id: "what-we-prove",
      navLabel: "What we prove",
      heading: "What we prove.",
      kicker: "Outcomes on file. Not features. Not invented dollars.",
    },
    outcomes: [
      "Bad warranty, inspect, and field photos stop entering the vision stack.",
      "That unlocks parts ID, visual anomaly, and repair-cost estimate downstream.",
      "The path (requirements → prototype → eng handoff) stays in one thread so the next team can copy it. Not another throwaway demo.",
      "A real token baseline so cost is a number, not a guess.",
    ],
  },

  whatWeHeard: {
    meta: {
      number: "03",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "The bottleneck isn't writing the code.",
      kicker:
        "Every constraint your team described sits between the idea and production, not inside the editor.",
    },
    operatingModel: {
      heading: "How work moves today",
      stages: ["Intake", "Design (HLA + AVT)", "Execution", "Release", "Support"],
      body: "R&D sits inside a broader digital engineering org: pipeline, data modelers, UI, AI. Upstream, a DPM org of about 700 people owns backlog, scoping, and requirements. Design (HLA + AVT) is the longest pull and can take months. Twenty or more epics often lock together even when they do not depend on each other. Shared engineering resources rotate, so context and ownership erode.",
    },
    findings: [
      {
        label: "Incomplete requirements create weeks of churn",
        body: "Engineering often gets incomplete specs from DPM. That churn can run weeks or months before build even starts.",
      },
      {
        label: "Prototypes reset the clock",
        body: "R&D can stand something up fast. Engineering often ignores the prototype code (“random Claude code”) and rebuilds from raw requirements. There are no shared resources for the transition.",
      },
      {
        label: "Review starts from zero",
        body: "Security and entitlements get re-litigated. The conversational dashboard POC shipped, then stuck because those questions were never settled.",
      },
      {
        label: "Context leaks at the seams",
        body: "Each handoff drops the reasoning. Tribal knowledge lives in people, recordings, and Confluence, not in a system agents or the next team can reuse.",
      },
    ],
  },

  theGap: {
    meta: {
      number: "04",
      id: "the-gap",
      navLabel: "The gap",
      heading: "The distance between what your team can do and what it can ship.",
      kicker: "",
    },
    stats: [
      {
        value: "Fast",
        label: "R&D prototype",
        detail: "What AI R&D can already stand up on its own.",
      },
      {
        value: "Months",
        label: "Same idea into production",
        detail: "Design pull, handoffs, and a rebuild from requirements.",
      },
      {
        value: "~700",
        label: "People in DPM upstream",
        detail: "Plus shared engineering rotating across products.",
      },
    ],
    close:
      "Closing that gap is the whole point of the sprint. Not more prototypes: the same work, through the whole path, as a pattern other teams can copy.",
  },

  whoCursorIs: {
    meta: {
      number: "05",
      id: "who-cursor-is",
      navLabel: "Who Cursor is",
      heading: "Cursor, in one slide.",
      kicker:
        "Cursor is where engineers write software with AI: the environment they already know, plus agents that can read, change, test, and review code across a repository.",
    },
    body: "Plain differences that matter to your delivery cycle, not a feature list.",
    points: [
      {
        label: "Model choice without the homework",
        body: "A router picks the model for the task. You are not locked to one provider, and you are not paying frontier prices for every line.",
      },
      {
        label: "Agents on tickets",
        body: "Cloud agents pick up work from your backlog, open pull requests, and leave a trail your humans can review.",
      },
      {
        label: "Review before a person spends time",
        body: "Pull requests checked against your standards: the same rules for people and agents. AI review stops being ad hoc model-picking.",
      },
      {
        label: "Enterprise controls included",
        body: "SSO and SCIM, privacy mode with zero data retention, audit logging, and per-team spend controls.",
      },
    ],
  },

  whereItPlugsIn: {
    meta: {
      number: "06",
      id: "where-it-plugs-in",
      navLabel: "Where it plugs in",
      heading: "It does not change your path. It removes the waiting on it.",
      kicker: "",
    },
    rows: [
      {
        stage: "Intake / DPM",
        today: "Incomplete requirements. Weeks of churn before build.",
        withCursor: "Agents draft against the real codebase and expose gaps early.",
      },
      {
        stage: "Design (HLA + AVT)",
        today: "Months of pull. Epics locked together without real dependencies.",
        withCursor: "Standards and context sit upstream so design is not rebuilt every time.",
      },
      {
        stage: "R&D prototype",
        today: "Exciting demo. Engineering does not trust the code.",
        withCursor: "Same repos and pull requests. Prototype work stays reviewable.",
      },
      {
        stage: "Execution",
        today: "Rebuild from raw requirements. Shared resources rotate. Context dies.",
        withCursor: "One thread of tickets → agents → PRs. Ownership stays visible.",
      },
      {
        stage: "Review / security",
        today: "Entitlements re-litigated. POCs stall after the demo.",
        withCursor: "Codified rules applied from the first draft. Review starts ahead.",
      },
      {
        stage: "Release / support",
        today: "Tribal knowledge in Confluence and people.",
        withCursor: "Patterns other digital teams can copy without starting over.",
      },
    ],
    close:
      "Nothing here asks you to reorganize first. The sprint tests whether this is true on real Cat Digital work, end to end enough to show at a town hall or Augie offsite.",
  },

  proposedPoc: {
    meta: {
      number: "07",
      id: "proposed-poc",
      navLabel: "Photo quality",
      heading: "Proposed work: photo quality detection.",
      kicker:
        "Self-contained. Real. Definable acceptance criteria. Reusable into Cat Inspect, Spotters Guide, and more.",
    },
    intro:
      "Assess image quality for warranty claims, inspections, and field submissions, before those photos feed parts ID, anomaly detection, or repair cost estimation downstream.",
    checks: [
      "Resolution is good enough",
      "The right component is visible",
      "No finger on the lens or other obstruction",
      "Acceptance criteria written upfront",
    ],
    why: [
      {
        label: "Self-contained",
        body: "No dependency on platform data sources or a long integration chain. Fits one work week.",
      },
      {
        label: "End-to-end path",
        body: "Requirements → R&D prototype → engineering handoff: the exact path that breaks today.",
      },
      {
        label: "Copy-paste later",
        body: "Once mature, a shared service other apps call. Presentable as a pattern, not a one-off hack.",
      },
    ],
  },

  thePilot: {
    meta: {
      number: "08",
      id: "the-pilot",
      navLabel: "The deal",
      heading: "One work week. Thirty-day token envelope.",
      kicker: "Five working days. No procurement conversation to start.",
    },
    stats: [
      {
        value: "5 days",
        label: "Working days against your path, Mon through Fri",
      },
      {
        value: "30 days",
        label: "Token trial envelope around the sprint, not the schedule",
      },
      { value: "100%", label: "Of token costs covered by Cursor, every model" },
      { value: "< 1 day", label: "To stand the team up end to end" },
    ],
    goals: [
      "Show an AI-forward end-to-end way of working, not only faster typing.",
      "Keep it self-contained and as end-to-end as possible: requirements → prototype → eng handoff.",
      "Leave a reusable pattern other Cat Digital teams can copy, presentable at a town hall or Augie offsite.",
      "Produce a real token baseline so budget is a known number, not a guess.",
    ],
    infra:
      "You are on AWS. We can private-link into a VPC or run self-hosted agents so work can start while a formal security review runs in parallel. GitHub app install and IP whitelist may need review. External sharing goes through Cat communications and compliance. Olivier's flag from the session.",
  },

  nextSteps: {
    label: "09 Next steps",
    heading: "Four things, then we start.",
    steps: [
      {
        owner: "Nate",
        action:
          "Nominate one person from Daniela's engineering space and one from Kevin's MLOps space. Make Charlie aware. Two to three days.",
      },
      {
        owner: "Nate + Olivier",
        action:
          "Align on leads and scope before the reconnect. Olivier facilitates the end-to-end path.",
      },
      {
        owner: "Joe",
        action:
          "Reconnect early next week. Lock the group and confirm photo quality detection as the sprint work.",
      },
      {
        owner: "Cursor",
        action:
          "Send credits to Olivier and Shelby. Stand workspaces and intro sessions once names are in. Short overview deck for internal socialization.",
      },
    ],
    close: "Pick the group. Start building.",
    contacts: [
      { name: "Joe Masello", role: "Cursor" },
      { name: "Jason Wiker", role: "Cursor" },
      { name: "Sahil Patel", role: "Cursor" },
    ],
  },
};

/** Visible nav / page sections only (continuous numbering). */
export const sections: SectionMeta[] = [
  content.howWeRunIt.meta,
  content.whatWeProve.meta,
  content.whatWeHeard.meta,
  content.theGap.meta,
  content.whoCursorIs.meta,
  content.whereItPlugsIn.meta,
  content.proposedPoc.meta,
  content.thePilot.meta,
];

/**
 * HIDDEN until Nate confirms peeps.
 * Not in `content` / `sections` / page render. Re-wire via TheGroup when ready.
 */
export const hiddenGroup = {
  meta: {
    number: "08",
    id: "the-group",
    navLabel: "The group",
    heading: "Small, cross-functional, end to end.",
    kicker:
      "Enough people to represent the whole path to production. Few enough to move without a program plan.",
  },
  ask: "Nominate reps within two to three days. Then a short reconnect to confirm the group and the use case.",
  members: [
    {
      name: "One rep from Daniela's space",
      role: "Engineering: the build side of the handoff",
    },
    {
      name: "One rep from Kevin's space",
      role: "MLOps: production path",
    },
    {
      name: "Charlie (DPM AI)",
      role: "Friendly observer on requirements, not a hard dependency",
    },
    {
      name: "Olivier",
      role: "Facilitates end-to-end across the flow",
    },
    {
      name: "Shelby Bethea",
      role: "On the Aug 11 Dallas session, looped for continuity",
    },
  ],
  expectation:
    "What we ask: build real work during the window, and give us about an hour a week of honest feedback.",
};
