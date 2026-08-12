import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
} from "@/components/SectionHeader";

export function ThePilot() {
  const { meta, dealParagraph, shape, weeks, successCriteria, asks } =
    content.thePilot;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeader meta={meta} />

        <p className="max-w-2xl text-[17px] font-medium leading-relaxed tracking-tight text-ink">
          {dealParagraph}
        </p>

        <div className="mt-12">
          <p className="mb-4 text-[15px] text-ink-muted">{shape.intro}</p>
          <ExhibitTable
            headers={["Constraint", "Definition"]}
            rows={shape.requirements.map((req) => [req.label, req.text])}
          />
          <p className="mt-5 max-w-2xl border border-hairline p-5 text-[15px] leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">Recommendation — </span>
            {shape.recommendation}
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-4 text-sm font-medium text-ink">Week timeline</h3>
          <ExhibitTable
            headers={["Week", "Focus", "Outcome"]}
            rows={weeks.map((week) => [
              `W${week.week}`,
              week.focus,
              week.detail,
            ])}
          />
        </div>

        <div className="mt-14">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-sm font-medium text-ink">
              {successCriteria.heading}
            </h3>
            <span className="text-sm text-ink-faint">{successCriteria.note}</span>
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

        <div className="mt-14">
          <h3 className="mb-4 text-sm font-medium text-ink">{asks.heading}</h3>
          <ul className="max-w-xl space-y-2.5">
            {asks.items.map((item) => (
              <li
                key={item}
                className="border-b border-hairline pb-2.5 text-[15px] leading-relaxed text-ink-muted last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
