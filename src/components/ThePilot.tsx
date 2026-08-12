import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";

export function ThePilot() {
  const { meta, dealParagraph, shape, weeks, successCriteria, asks } =
    content.thePilot;

  return (
    <section id={meta.id} className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader meta={meta} />

        <p className="max-w-3xl text-[1.12rem] font-medium leading-relaxed tracking-[-0.02em] text-ink">
          {dealParagraph}
        </p>

        <div className="mt-12 md:mt-14">
          <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ink-muted">
            {shape.intro}
          </p>
          <div className="mt-6 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {shape.requirements.map((req) => (
              <div key={req.label} className="bg-void p-5 sm:p-6">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
                  {req.label}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {req.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-px border border-hairline border-t-0 bg-void p-5 sm:p-6">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-cat-yellow">
              Recommendation
            </p>
            <p className="mt-3 max-w-3xl text-[0.98rem] leading-relaxed text-ink-muted">
              {shape.recommendation}
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
            Timeline
          </h3>
          <ol className="mt-5 divide-y divide-hairline border-y border-hairline">
            {weeks.map((week) => (
              <li
                key={week.week}
                className="grid gap-3 py-6 sm:grid-cols-[7.5rem_1fr] sm:gap-8"
              >
                <div>
                  <p className="font-mono text-[12px] font-semibold tracking-[0.12em] text-cat-yellow">
                    W{week.week}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] font-medium tracking-[-0.015em] text-ink">
                    {week.focus}
                  </p>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                  {week.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
                {successCriteria.heading}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
                {successCriteria.note}
              </span>
            </div>
            <ol className="mt-5 space-y-4">
              {successCriteria.items.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.94rem] leading-relaxed"
                >
                  <span className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-cat-yellow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink">
              {asks.heading}
            </h3>
            <ul className="mt-5 space-y-0 divide-y divide-hairline border-y border-hairline">
              {asks.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 py-3.5 text-[0.94rem] leading-relaxed text-ink-muted"
                >
                  <span
                    className="mt-[0.55rem] h-1 w-1 shrink-0 bg-cat-yellow"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
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
