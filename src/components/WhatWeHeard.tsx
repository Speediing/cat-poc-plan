import { content } from "@/lib/content";
import { Handoff, SectionHeader, SoftPanel } from "@/components/SectionHeader";
import {
  CycleChainExhibit,
  FindingsStrip,
  ModernizationExhibit,
  OrgSplitExhibit,
  PortfolioExhibit,
  PrototypeTrapExhibit,
} from "@/components/Exhibits";

export function WhatWeHeard() {
  const {
    meta,
    orgContext,
    truths,
    callout,
    portfolio,
    operatingModel,
    prototypeTrap,
    modernization,
  } = content.whatWeHeard;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:items-start">
          <SectionHeader meta={meta} />
          <OrgSplitExhibit items={orgContext} />
        </div>

        <div className="mt-10 md:mt-12">
          <ModernizationExhibit
            heading={modernization.heading}
            digital={modernization.digital}
            technology={modernization.technology}
          />
        </div>

        <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-6">
          <CycleChainExhibit
            heading={operatingModel.heading}
            stages={operatingModel.stages}
            pain={operatingModel.pain}
          />
          <PrototypeTrapExhibit
            heading={prototypeTrap.heading}
            steps={prototypeTrap.steps}
            soWhat={prototypeTrap.soWhat}
          />
        </div>

        <div className="mt-10 md:mt-12">
          <PortfolioExhibit
            heading={portfolio.heading}
            items={portfolio.items}
          />
        </div>

        <div className="mt-10 md:mt-12">
          <FindingsStrip
            items={truths.map((t) => ({
              label: t.label,
              meaning: t.meaning,
            }))}
          />
        </div>

        <SoftPanel className="mt-10 max-w-3xl md:mt-12">
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
