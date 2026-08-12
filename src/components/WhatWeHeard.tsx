import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";

export function WhatWeHeard() {
  const { meta, orgContext, truths, callout } = content.whatWeHeard;

  return (
    <section id={meta.id} className="border-b border-hairline bg-void">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader meta={meta} />

        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
          {orgContext.map((item) => (
            <div
              key={item.label}
              className="bg-surface px-5 py-5 sm:px-6 sm:py-6"
            >
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                {item.label}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-px border border-hairline bg-hairline md:mt-12 md:grid-cols-3">
          {truths.map((truth, index) => (
            <article
              key={truth.label}
              className="flex flex-col bg-surface p-5 sm:p-6"
            >
              <span className="font-mono text-[11px] tracking-[0.12em] text-cat-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[1.05rem] font-medium leading-snug tracking-[-0.025em] text-ink">
                {truth.label}
              </h3>
              <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-muted">
                {truth.situation}
              </p>
              <p className="mt-auto border-t border-hairline pt-4 text-[0.9rem] leading-relaxed text-ink">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  Meaning
                </span>
                <span className="mt-2 block">{truth.meaning}</span>
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-10 border border-hairline border-l-2 border-l-cat-yellow bg-surface-raised p-6 sm:mt-12 sm:p-8">
          <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-cat-yellow">
            {callout.heading}
          </h3>
          <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-ink-muted">
            {callout.body}
          </p>
        </aside>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
