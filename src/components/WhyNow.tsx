import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";
import {
  FundingPanelsExhibit,
  WhyNowMatrix,
} from "@/components/Exhibits";

export function WhyNow() {
  const { meta, arguments: args, fundingBox } = content.whyNow;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 lg:items-start">
          <SectionHeader meta={meta} />
          <FundingPanelsExhibit
            during={fundingBox.during}
            output={fundingBox.output}
            after={fundingBox.after}
          />
        </div>

        <div className="mt-14 md:mt-16">
          <WhyNowMatrix args={args} />
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
