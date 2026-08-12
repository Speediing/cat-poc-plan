import type {
  PilotWeek,
  Wave,
  ArgumentBlock,
  Stakeholder,
  OrgContextItem,
  PortfolioItem,
  PrototypeTrapStep,
} from "@/lib/content";

/** Digital vs Technology split + Nate’s scope */
export function OrgSplitExhibit({ items }: { items: OrgContextItem[] }) {
  const tech = items.find((i) => i.label.includes("Technology"));
  const digital = items.find((i) => i.label.includes("Digital"));
  const nate = items.find((i) => i.label.includes("Nate"));
  const reorg = items.find((i) => i.label.includes("Aug"));

  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">
        Where this plan applies
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-panel px-4 py-4">
          <p className="text-[13px] font-medium text-ink-faint">
            {tech?.label ?? "CAT Technology"}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
            {tech?.text}
          </p>
        </div>
        <div className="relative rounded-xl bg-ink px-4 py-4 text-canvas">
          <span
            className="absolute -left-1.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-ink sm:block"
            aria-hidden="true"
          />
          <p className="text-[13px] font-medium text-canvas/60">
            {digital?.label ?? "Caterpillar Digital"}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-canvas/75">
            {digital?.text}
          </p>
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-dashed border-hairline-strong bg-canvas-warm/60 px-4 py-4">
          <p className="text-[13px] font-medium text-ink-faint">
            {nate?.label ?? "Nate’s scope"}
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-ink">
            {nate?.text}
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-hairline-strong bg-canvas-warm/60 px-4 py-4">
          <p className="text-[13px] font-medium text-cursor-orange">
            {reorg?.label ?? "Aug 1 reorg"}
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-ink">
            {reorg?.text}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Digital modernized vs Technology legacy */
export function ModernizationExhibit({
  heading,
  digital,
  technology,
}: {
  heading: string;
  digital: string;
  technology: string;
}) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">{heading}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-ink px-4 py-5 text-canvas">
          <p className="text-[13px] font-medium text-canvas/55">Digital</p>
          <p className="mt-2 text-[15px] leading-relaxed text-canvas/90">
            {digital}
          </p>
        </div>
        <div className="rounded-xl bg-panel px-4 py-5">
          <p className="text-[13px] font-medium text-ink-faint">Technology</p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            {technology}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Idea → production ~6-month chain */
export function CycleChainExhibit({
  heading,
  stages,
  pain,
}: {
  heading: string;
  stages: string[];
  pain: string;
}) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[13px] font-medium text-ink-faint">{heading}</p>
        <p className="text-[13px] font-medium text-cursor-orange">
          ~6 months
        </p>
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
      <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">{pain}</p>
    </div>
  );
}

/** 2-week prototype → restart → ~6 months */
export function PrototypeTrapExhibit({
  heading,
  steps,
  soWhat,
}: {
  heading: string;
  steps: PrototypeTrapStep[];
  soWhat: string;
}) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-5 text-[13px] font-medium text-ink-faint">{heading}</p>
      <ol className="grid gap-3 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.label} className="relative">
            <div
              className={`h-full rounded-xl px-4 py-4 ${
                i === 0
                  ? "bg-panel text-ink"
                  : i === 1
                    ? "border border-dashed border-hairline-strong bg-canvas-warm/70 text-ink"
                    : "bg-ink text-canvas"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p
                  className={`text-[13px] font-medium ${
                    i === 2 ? "text-canvas/55" : "text-ink-faint"
                  }`}
                >
                  {step.label}
                </p>
                <p
                  className={`text-[12px] font-medium ${
                    i === 2 ? "text-canvas/70" : "text-cursor-orange"
                  }`}
                >
                  {step.duration}
                </p>
              </div>
              <p
                className={`mt-2 text-[14px] leading-relaxed ${
                  i === 2 ? "text-canvas/85" : "text-ink-muted"
                }`}
              >
                {step.text}
              </p>
            </div>
            {i < steps.length - 1 ? (
              <span
                className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-ink-faint md:block"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[14px] leading-relaxed text-ink">{soWhat}</p>
    </div>
  );
}

/** AI portfolio with translation spend callout */
export function PortfolioExhibit({
  heading,
  items,
}: {
  heading: string;
  items: PortfolioItem[];
}) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-5 text-[13px] font-medium text-ink-faint">{heading}</p>
      <div className="grid gap-3 lg:grid-cols-3">
        {items.map((item) => {
          const isTranslation = item.name.toLowerCase().includes("translation");
          return (
            <div
              key={item.name}
              className={`rounded-xl px-4 py-4 ${
                isTranslation
                  ? "bg-ink text-canvas"
                  : "bg-panel text-ink"
              }`}
            >
              <p
                className={`text-[13px] font-medium ${
                  isTranslation ? "text-canvas/55" : "text-ink-faint"
                }`}
              >
                {isTranslation ? "Unsolved. High spend." : "On your plate"}
              </p>
              <p className="mt-1 text-[16px] font-medium">{item.name}</p>
              <p
                className={`mt-2 text-[14px] leading-relaxed ${
                  isTranslation ? "text-canvas/80" : "text-ink-muted"
                }`}
              >
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Three findings as an exhibit strip */
export function FindingsStrip({
  items,
}: {
  items: { label: string; meaning: string; soWhat?: string }[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
        >
          <p className="text-[15px] font-medium leading-snug tracking-tight text-ink">
            {item.label}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
            {item.meaning}
          </p>
          {item.soWhat ? (
            <p className="mt-3 border-t border-hairline pt-3 text-[14px] leading-relaxed text-ink">
              {item.soWhat}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Compact 30-day arc — not week-by-week theater */
export function CompactPilotArc({ weeks }: { weeks: PilotWeek[] }) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">
        Thirty days
      </p>
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
        {weeks.map((week, i) => (
          <li key={week.week} className="flex flex-1 items-stretch gap-2">
            <div className="flex-1 rounded-xl bg-panel px-4 py-3">
              <p className="text-[12px] font-medium text-cursor-orange">
                {week.week === "0" ? "Before" : `Week ${week.week}`}
              </p>
              <p className="mt-1 text-[15px] font-medium text-ink">
                {week.focus}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-ink-muted">
                {week.detail}
              </p>
            </div>
            {i < weeks.length - 1 ? (
              <span
                className="hidden self-center text-ink-faint sm:inline"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
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
          <div key={req.label} className="rounded-2xl bg-panel px-5 py-5">
            <p className="text-[13px] font-medium text-ink-faint">You asked for</p>
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
        <p className="text-[13px] font-medium text-canvas/55">What we propose</p>
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
        Thirty days
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

/** Why-this-matters matrix rooted in current-state facts */
export function WhyNowMatrix({ args }: { args: ArgumentBlock[] }) {
  return (
    <div className="space-y-3">
      <p className="text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase">
        From what your team described
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {args.map((arg) => (
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
    </div>
  );
}

/** Compact scale roadmap */
export function WaveRoadmapExhibit({ waves }: { waves: Wave[] }) {
  return (
    <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
      <p className="mb-4 text-[13px] font-medium text-ink-faint">
        One area → AI teams → ~7k digital
      </p>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {waves.map((wave) => (
          <li key={wave.label} className="rounded-xl bg-panel px-4 py-4">
            <p className="text-[12px] font-medium text-ink-faint">
              Step {wave.label}
            </p>
            <p className="mt-1 text-[15px] font-medium text-ink">{wave.name}</p>
            <p className="mt-1 text-[12px] text-ink-faint">{wave.timeframe}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
              {wave.exit}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Stakeholder matrix — keep short */
export function StakeholderMatrix({
  stakeholders,
}: {
  stakeholders: Stakeholder[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-b border-hairline bg-panel/50">
            {["Who", "Thread", "Ask"].map((h) => (
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
              <td className="px-5 py-3.5">
                <p className="font-medium text-ink">{person.name}</p>
                <p className="mt-0.5 text-[13px] text-ink-faint">{person.role}</p>
              </td>
              <td className="px-5 py-3.5 text-ink-muted">{person.thread}</td>
              <td className="px-5 py-3.5 text-ink">{person.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
