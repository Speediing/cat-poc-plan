import type { PilotWeek, Wave, ArgumentBlock, Stakeholder } from "@/lib/content";

/** Digital vs Technology split + Nate’s scope */
export function OrgSplitExhibit() {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">
        Situation · where this plan applies
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-panel px-4 py-4">
          <p className="text-[13px] font-medium text-ink-faint">CAT Technology</p>
          <p className="mt-1 text-[15px] font-medium text-ink">In-cab software</p>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
            Out of scope for this plan. Parallel Cursor work exists under Brandon Newman.
          </p>
        </div>
        <div className="relative rounded-xl bg-ink px-4 py-4 text-canvas">
          <span
            className="absolute -left-1.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-ink sm:block"
            aria-hidden="true"
          />
          <p className="text-[13px] font-medium text-canvas/60">Caterpillar Digital</p>
          <p className="mt-1 text-[15px] font-medium">This plan</p>
          <p className="mt-2 text-[14px] leading-relaxed text-canvas/75">
            cat.com · parts.com · digital products · CAT AI assistant
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-dashed border-hairline-strong bg-canvas-warm/60 px-4 py-4">
        <p className="text-[13px] font-medium text-ink-faint">Nate’s scope inside Digital</p>
        <p className="mt-1 text-[15px] leading-relaxed text-ink">
          All AI, data, and ML — including AI R&D. Reports to the Chief Digital Officer.
          August 1: ML + AI Ops platform teams moved under Nate.
        </p>
      </div>
    </div>
  );
}

/** Idea → production ~6-month chain */
export function CycleChainExhibit() {
  const stages = ["Idea", "Plan", "Build", "Integrate", "Ship"];

  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[13px] font-medium text-ink-faint">
          Pain · idea to production today
        </p>
        <p className="text-[13px] font-medium text-cursor-orange">~6 months</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-2">
            <div className="rounded-lg bg-panel px-3 py-2 text-[14px] font-medium text-ink">
              {stage}
            </div>
            {i < stages.length - 1 ? (
              <span className="text-ink-faint" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">
        Fragmented handoffs across plan, build, and integration stretch every initiative —
        parts ID, translation, CAT AI assistant included.
      </p>
    </div>
  );
}

/** Three findings as an exhibit strip */
export function FindingsStrip({
  items,
}: {
  items: { label: string; meaning: string }[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
        >
          <p className="text-[13px] font-medium text-ink-faint">
            Finding {i + 1}
          </p>
          <p className="mt-2 text-[15px] font-medium leading-snug tracking-tight text-ink">
            {item.label}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
            {item.meaning}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Strong visual week timeline */
export function WeekTimelineExhibit({ weeks }: { weeks: PilotWeek[] }) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
      <p className="mb-6 text-[13px] font-medium text-ink-faint">
        Pilot · 30-day structure
      </p>
      <ol className="grid gap-0 md:grid-cols-4">
        {weeks.map((week, i) => (
          <li
            key={week.week}
            className={`relative px-0 py-5 md:px-4 md:py-0 ${
              i < weeks.length - 1
                ? "border-b border-hairline md:border-b-0 md:border-r"
                : ""
            }`}
          >
            <p className="text-[13px] font-medium text-cursor-orange">
              Week {week.week}
            </p>
            <p className="mt-2 text-[16px] font-medium tracking-tight text-ink">
              {week.focus}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
              {week.detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Tension → recommendation diagram */
export function PilotShapeExhibit({
  requirements,
  recommendation,
}: {
  requirements: { label: string; text: string }[];
  recommendation: string;
}) {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {requirements.map((req) => (
          <div
            key={req.label}
            className="rounded-2xl bg-panel px-5 py-5"
          >
            <p className="text-[13px] font-medium text-ink-faint">Constraint</p>
            <p className="mt-1 text-[16px] font-medium text-ink">{req.label}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {req.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center" aria-hidden="true">
        <span className="text-ink-faint">↓</span>
      </div>
      <div className="rounded-2xl bg-ink px-5 py-5 text-canvas">
        <p className="text-[13px] font-medium text-canvas/55">Our proposal</p>
        <p className="mt-2 text-[15px] leading-relaxed text-canvas/90">
          {recommendation}
        </p>
      </div>
    </div>
  );
}

/** Funding as 3-panel graphic */
export function FundingPanelsExhibit({
  during,
  output,
  after,
}: {
  during: string;
  output: string;
  after: string;
}) {
  const panels = [
    { label: "During", body: during },
    { label: "Output", body: output },
    { label: "After", body: after },
  ];

  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">
        Funding model
      </p>
      <div className="grid gap-3 md:grid-cols-3">
        {panels.map((panel, i) => (
          <div
            key={panel.label}
            className={`rounded-xl px-4 py-4 ${
              i === 1 ? "bg-ink text-canvas" : "bg-panel text-ink"
            }`}
          >
            <p
              className={`text-[13px] font-medium ${
                i === 1 ? "text-canvas/55" : "text-ink-faint"
              }`}
            >
              {panel.label}
            </p>
            <p
              className={`mt-2 text-[14px] leading-relaxed ${
                i === 1 ? "text-canvas/90" : "text-ink-muted"
              }`}
            >
              {panel.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Why-now as a 2×2 + one full-width */
export function WhyNowMatrix({ args }: { args: ArgumentBlock[] }) {
  const [a, b, c, d, e] = args;

  return (
    <div className="space-y-3">
      <p className="text-[13px] font-medium text-ink-faint">
        Why now · five arguments
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {[a, b, c, d].filter(Boolean).map((arg) => (
          <div
            key={arg.claim}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
          >
            <p className="text-[15px] font-medium leading-snug text-ink">
              {arg.claim}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {arg.grounding}
            </p>
            <p className="mt-3 border-t border-hairline pt-3 text-[14px] leading-relaxed text-ink">
              {arg.soWhat}
            </p>
          </div>
        ))}
      </div>
      {e ? (
        <div className="rounded-2xl bg-panel px-5 py-5">
          <p className="text-[15px] font-medium leading-snug text-ink">
            {e.claim}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
            {e.grounding} {e.soWhat}
          </p>
        </div>
      ) : null}
    </div>
  );
}

/** Four-wave scale roadmap graphic */
export function WaveRoadmapExhibit({ waves }: { waves: Wave[] }) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[13px] font-medium text-ink-faint">
          Scale path · ~7,000-person digital org
        </p>
        <p className="text-[13px] text-ink-faint">Gated on evidence</p>
      </div>
      <ol className="space-y-0">
        {waves.map((wave, i) => (
          <li key={wave.label} className="relative flex gap-4 pb-8 last:pb-0">
            {i < waves.length - 1 ? (
              <span
                className="absolute bottom-0 left-[15px] top-8 w-px bg-hairline-strong"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-medium text-canvas">
              {i}
            </div>
            <div className="min-w-0 flex-1 rounded-xl bg-panel px-4 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[15px] font-medium text-ink">
                  {wave.label} · {wave.name}
                </p>
                <p className="text-[13px] text-ink-faint">{wave.timeframe}</p>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-medium text-ink-faint">Entry</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">
                    {wave.entry}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-ink-faint">Exit</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">
                    {wave.exit}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Stakeholder matrix */
export function StakeholderMatrix({
  stakeholders,
}: {
  stakeholders: Stakeholder[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]">
      <table className="w-full min-w-[36rem] border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-b border-hairline bg-panel/50">
            {["Name", "Role", "Thread", "Ask"].map((h) => (
              <th
                key={h}
                className="px-5 py-3.5 text-[12px] font-medium text-ink-faint"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((person) => (
            <tr
              key={person.name}
              className="border-b border-hairline align-top last:border-0"
            >
              <td className="px-5 py-3.5 font-medium text-ink">{person.name}</td>
              <td className="px-5 py-3.5 text-ink-muted">{person.role}</td>
              <td className="px-5 py-3.5 text-ink-muted">{person.thread}</td>
              <td className="px-5 py-3.5 text-ink">{person.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
