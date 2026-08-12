/**
 * Content — Caterpillar Digital × Cursor leave-behind.
 *
 * Source of truth: Aug 11, 2026 "Cursor & Cat Digital" onsite
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

export interface TimelineItem {
  when: string;
  what: string;
  who: string;
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
  ideaWorthTesting: {
    meta: SectionMeta;
    quote: string;
    attribution: string;
    practice: string[];
  };
  proposedPoc: {
    meta: SectionMeta;
    intro: string;
    checks: string[];
    why: Finding[];
  };
  theGroup: {
    meta: SectionMeta;
    ask: string;
    members: GroupMember[];
    expectation: string;
  };
  thePilot: {
    meta: SectionMeta;
    stats: PilotStat[];
    goals: string[];
    infra: string;
  };
  timeline: {
    meta: SectionMeta;
    items: TimelineItem[];
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
    badge: "Onsite follow-up · Chicago · August 11, 2026",
    title: "Caterpillar × Cursor",
    thesis:
      "What we heard from your team in Chicago, a plain primer on Cursor, and the smallest cross-functional group that could prove an end-to-end pattern inside digital — starting with photo quality detection.",
    preparedBy:
      "Jason Wiker, Joe Masello & Sahil Patel, Cursor. With thanks to Olivier and Shelby Bethea.",
    footer:
      "Follow-up to the August 11 onsite · Prepared by Cursor for Caterpillar Digital. Confidential.",
  },

  whatWeHeard: {
    meta: {
      number: "02",
      id: "what-we-heard",
      navLabel: "What we heard",
      heading: "The bottleneck isn't writing the code.",
      kicker:
        "Every constraint your team described sits between the idea and production — not inside the editor.",
    },
    operatingModel: {
      heading: "How work moves today",
      stages: ["Intake", "Design (HLA + AVT)", "Execution", "Release", "Support"],
      body: "R&D sits inside a broader digital engineering org — pipeline, data modelers, UI, AI. Upstream, a DPM org of about 700 people owns backlog, scoping, and requirements. Design (HLA + AVT) is the longest pull and can take months. Twenty or more epics often lock together even when they do not depend on each other. Shared engineering resources rotate, so context and ownership erode.",
    },
    findings: [
      {
        label: "Incomplete requirements create weeks of churn",
        body: "Engineering often gets incomplete specs from DPM. That churn can run weeks or months before build even starts.",
      },
      {
        label: "Prototypes reset the clock",
        body: "R&D can stand something up fast. Engineering often ignores the prototype code — “random Claude code” — and rebuilds from raw requirements. There are no shared resources for the transition.",
      },
      {
        label: "Review starts from zero",
        body: "Security and entitlements get re-litigated. The conversational dashboard POC shipped, then stuck because those questions were never settled.",
      },
      {
        label: "Context leaks at the seams",
        body: "Each handoff drops the reasoning. Tribal knowledge lives in people, recordings, and Confluence — not in a system agents or the next team can reuse.",
      },
    ],
  },

  theGap: {
    meta: {
      number: "03",
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
      "Closing that gap is the whole point of the pilot. Not more prototypes — the same work, through the whole path, as a pattern other teams can copy.",
  },

  whoCursorIs: {
    meta: {
      number: "04",
      id: "who-cursor-is",
      navLabel: "Who Cursor is",
      heading: "Cursor, in one slide.",
      kicker:
        "Cursor is where engineers write software with AI: the environment they already know, plus agents that can read, change, test, and review code across a repository.",
    },
    body: "Plain differences that matter to your delivery cycle — not a feature list.",
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
        body: "Pull requests checked against your standards — the same rules for people and agents. AI review stops being ad hoc model-picking.",
      },
      {
        label: "Enterprise controls included",
        body: "SSO and SCIM, privacy mode with zero data retention, audit logging, and per-team spend limits.",
      },
    ],
  },

  whereItPlugsIn: {
    meta: {
      number: "05",
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
        withCursor: "Same repos and pull requests — prototype work stays reviewable.",
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
      "Nothing here asks you to reorganize first. The pilot tests whether this is true on real Cat Digital work — end to end enough to show at a town hall or Augie offsite.",
  },

  ideaWorthTesting: {
    meta: {
      number: "06",
      id: "idea-worth-testing",
      navLabel: "The idea",
      heading: "The idea worth testing.",
      kicker: "",
    },
    quote:
      "Standard patterns should be modular enough that agents can reach for them upstream — not rebuilt from scratch in every architecture review.",
    attribution: "Paraphrased from the August 11 session",
    practice: [
      "Security, entitlements, and compliance written down once as reusable rules and context.",
      "Agents pull those patterns in at build time, so the first draft already reflects them.",
      "Review starts ahead of zero — people argue about the interesting part, not the basics.",
      "The outcome is a reusable skill other teams can copy — not an ad hoc demo leaders cannot replicate.",
    ],
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
      "Assess image quality for warranty claims, inspections, and field submissions — before those photos feed parts ID, anomaly detection, or repair cost estimation downstream.",
    checks: [
      "Resolution is good enough",
      "The right component is visible",
      "No finger on the lens or other obstruction",
      "Acceptance criteria written upfront",
    ],
    why: [
      {
        label: "Self-contained",
        body: "No dependency on platform data sources or a long integration chain. Fits a thirty-day window.",
      },
      {
        label: "End-to-end path",
        body: "Requirements → R&D prototype → engineering handoff — the exact path that breaks today.",
      },
      {
        label: "Copy-paste later",
        body: "Once mature, a shared service other apps call. Presentable as a pattern, not a one-off hack.",
      },
    ],
  },

  theGroup: {
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
        role: "Engineering — the build side of the handoff",
      },
      {
        name: "One rep from Kevin's space",
        role: "MLOps — production path",
      },
      {
        name: "Charlie (DPM AI)",
        role: "Friendly observer on requirements — not a hard dependency",
      },
      {
        name: "Olivier",
        role: "Facilitates end-to-end across the flow",
      },
      {
        name: "Shelby Bethea",
        role: "On the Aug 11 session — looped for continuity",
      },
    ],
    expectation:
      "What we ask: build real work during the window, and give us about an hour a week of honest feedback.",
  },

  thePilot: {
    meta: {
      number: "09",
      id: "the-pilot",
      navLabel: "The pilot",
      heading: "Thirty days, no procurement conversation to start.",
      kicker: "",
    },
    stats: [
      { value: "30 days", label: "Short enough to hold focus" },
      { value: "100%", label: "Of token costs covered by Cursor, every model" },
      { value: "< 1 day", label: "To stand the team up end to end" },
      {
        value: "Real work",
        label: "Photo quality detection — not a throwaway sandbox",
      },
    ],
    goals: [
      "Show an AI-forward end-to-end way of working — not only faster typing.",
      "Keep it self-contained and as end-to-end as possible: requirements → prototype → eng handoff.",
      "Leave a reusable pattern other Cat Digital teams can copy — presentable at a town hall or Augie offsite.",
      "Produce a real token baseline so budget is a known number, not a guess.",
    ],
    infra:
      "You are on AWS. We can private-link into a VPC or run self-hosted agents so work can start while a formal security review runs in parallel. GitHub app install and IP whitelist may need review. External sharing goes through Cat communications and compliance — Olivier's flag from the session.",
  },

  timeline: {
    meta: {
      number: "10",
      id: "timeline",
      navLabel: "Timeline",
      heading: "The next few weeks.",
      kicker: "",
    },
    items: [
      {
        when: "In 2–3 days",
        what: "Nominate reps from Daniela's and Kevin's teams; make Charlie aware",
        who: "Nate",
      },
      {
        when: "Before next week",
        what: "Align internally on leads and scope",
        who: "Nate + Olivier",
      },
      {
        when: "Early next week",
        what: "Short reconnect to lock the group and use case",
        who: "Joe + Nate",
      },
      {
        when: "ASAP",
        what: "Cursor account credits to Olivier and Shelby; short overview deck (Olivier introduced Cursor ~2 years ago)",
        who: "Jason + Joe",
      },
      {
        when: "Pilot window",
        what: "Thirty days on photo quality detection against agreed success criteria",
        who: "Both",
      },
    ],
  },

  nextSteps: {
    label: "11 Next steps",
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
          "Reconnect early next week. Lock the group and confirm photo quality detection as the pilot work.",
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

export const sections: SectionMeta[] = [
  content.whatWeHeard.meta,
  content.theGap.meta,
  content.whoCursorIs.meta,
  content.whereItPlugsIn.meta,
  content.ideaWorthTesting.meta,
  content.proposedPoc.meta,
  content.theGroup.meta,
  content.thePilot.meta,
  content.timeline.meta,
];
