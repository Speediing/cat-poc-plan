import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
  SoftPanel,
} from "@/components/SectionHeader";

export function ThePilot() {
  const { meta, dealParagraph, shape, weeks, successCriteria, asks } =
    content.thePilot;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">
          <div>
            <SectionHeader meta={meta} />
            <p className="prose-measure text-[17px] font-medium leading-[1.55] tracking-tight text-ink">
              {dealParagraph}
            </p>
          </div>

          <div className="space-y-4 lg:pt-2">
            <p className="text-[17px] leading-[1.55] text-ink-muted">
              {shape.intro}
            </p>
            <ExhibitTable
              headers={["Constraint", "What it means"]}
              rows={shape.requirements.map((req) => [req.label, req.text])}
            />
            <SoftPanel>
              <p className="text-[14px] font-medium text-ink">What we propose</p>
              <p className="mt-2 text-[17px] leading-[1.55] text-ink-muted">
                {shape.recommendation}
              </p>
            </SoftPanel>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
            Week by week
          </h3>
          <ExhibitTable
            headers={["Week", "Focus", "Outcome"]}
            rows={weeks.map((week) => [
              `Week ${week.week}`,
              week.focus,
              week.detail,
            ])}
          />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-14">
          <div>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
                {successCriteria.heading}
              </h3>
              <span className="text-[14px] text-ink-faint">
                {successCriteria.note}
              </span>
            </div>
            <ExhibitTable
              headers={["Criterion", "Evidence", "Owner"]}
              rows={successCriteria.rows.map((row) => [
                row.criterion,
                row.evidence,
                row.owner,
              ])}
            />
          </div>

          <div>
            <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
              {asks.heading}
            </h3>
            <ul className="space-y-2.5">
              {asks.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-panel px-4 py-3 text-[15px] leading-[1.5] text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
