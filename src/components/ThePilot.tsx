import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";
import {
  CompactPilotArc,
  FundingPanelsExhibit,
  PilotShapeExhibit,
} from "@/components/Exhibits";

export function ThePilot() {
  const { meta, dealParagraph, shape, weeks, successCriteria, asks, funding } =
    content.thePilot;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:items-start">
          <div>
            <SectionHeader meta={meta} />
            <p className="prose-measure text-[17px] font-medium leading-[1.55] tracking-tight text-ink">
              {dealParagraph}
            </p>
          </div>
          <PilotShapeExhibit
            requirements={shape.requirements}
            recommendation={shape.recommendation}
          />
        </div>

        <div className="mt-10 md:mt-12">
          <FundingPanelsExhibit
            during={funding.during}
            output={funding.output}
            after={funding.after}
          />
        </div>

        <div className="mt-10 md:mt-12">
          <CompactPilotArc weeks={weeks} />
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
            <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
              {successCriteria.heading}
            </h3>
            <p className="mt-1 text-[13px] text-ink-faint">
              {successCriteria.note}
            </p>
            <ul className="mt-4 space-y-2.5">
              {successCriteria.rows.map((row) => (
                <li
                  key={row.criterion}
                  className="rounded-xl bg-panel px-4 py-3"
                >
                  <p className="text-[15px] font-medium text-ink">
                    {row.criterion}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                    {row.evidence}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
            <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
              {asks.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
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
