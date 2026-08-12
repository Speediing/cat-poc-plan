import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
  SoftPanel,
} from "@/components/SectionHeader";

export function WhatWeHeard() {
  const { meta, orgContext, truths, callout } = content.whatWeHeard;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-start">
          <SectionHeader meta={meta} />
          <ExhibitTable
            headers={["Topic", "Detail"]}
            rows={orgContext.map((item) => [item.label, item.text])}
          />
        </div>

        <div className="mt-16 space-y-0 md:mt-20">
          {truths.map((truth) => (
            <article
              key={truth.label}
              className="grid gap-3 border-t border-hairline py-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12"
            >
              <h3 className="text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-ink">
                {truth.label}
              </h3>
              <div>
                <p className="text-[17px] leading-[1.55] text-ink-muted">
                  {truth.situation}
                </p>
                <p className="mt-3 text-[17px] leading-[1.55] text-ink">
                  {truth.meaning}
                </p>
              </div>
            </article>
          ))}
        </div>

        <SoftPanel className="mt-6 max-w-3xl">
          <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
            {callout.heading}
          </h3>
          <p className="mt-3 text-[17px] leading-[1.55] text-ink-muted">
            {callout.body}
          </p>
        </SoftPanel>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
