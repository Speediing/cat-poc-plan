import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
} from "@/components/SectionHeader";

export function WhatWeHeard() {
  const { meta, orgContext, truths, callout } = content.whatWeHeard;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeader meta={meta} />

        <ExhibitTable
          headers={["Dimension", "Fact"]}
          rows={orgContext.map((item) => [item.label, item.text])}
        />

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {truths.map((truth) => (
            <article key={truth.label} className="max-w-2xl py-7">
              <h3 className="text-base font-medium tracking-tight text-ink">
                {truth.label}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {truth.situation}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">
                <span className="text-ink-faint">Implication — </span>
                {truth.meaning}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-12 border border-hairline p-6 sm:p-7">
          <h3 className="text-sm font-medium text-ink">{callout.heading}</h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            {callout.body}
          </p>
        </aside>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
