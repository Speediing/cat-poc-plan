import { content } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";
import {
  StakeholderMatrix,
  WaveRoadmapExhibit,
} from "@/components/Exhibits";

export function GoForward() {
  const { meta, destination, waves, stakeholders } = content.goForward;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="max-w-2xl">
          <SectionHeader meta={meta} />
          <p className="prose-measure text-[17px] leading-[1.55] text-ink-muted">
            {destination}
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <WaveRoadmapExhibit waves={waves} />
        </div>

        <div className="mt-10 md:mt-12">
          <h3 className="mb-4 text-[1.05rem] font-medium tracking-tight text-ink">
            Who carries what
          </h3>
          <StakeholderMatrix stakeholders={stakeholders} />
        </div>
      </div>
    </section>
  );
}
