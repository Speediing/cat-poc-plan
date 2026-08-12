import { content } from "@/lib/content";
import { Handoff, SectionHeader, SoftPanel } from "@/components/SectionHeader";
import {
  CycleChainExhibit,
  FindingsStrip,
  OrgSplitExhibit,
} from "@/components/Exhibits";

export function WhatWeHeard() {
  const { meta, truths, callout } = content.whatWeHeard;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:items-start">
          <SectionHeader meta={meta} />
          <OrgSplitExhibit />
        </div>

        <div className="mt-12 md:mt-16">
          <CycleChainExhibit />
        </div>

        <div className="mt-12 md:mt-14">
          <FindingsStrip
            items={truths.map((t) => ({
              label: t.label,
              meaning: t.meaning,
            }))}
          />
        </div>

        <SoftPanel className="mt-12 max-w-3xl md:mt-14">
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
