import { content } from "@/lib/content";
import { SectionHeader, SoftPanel } from "@/components/SectionHeader";
import {
  StakeholderMatrix,
  WaveRoadmapExhibit,
} from "@/components/Exhibits";

export function GoForward() {
  const { meta, destination, waves, readyToScale, stakeholders } =
    content.goForward;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:items-start">
          <div>
            <SectionHeader meta={meta} />
            <p className="prose-measure text-[17px] leading-[1.55] text-ink-muted">
              {destination}
            </p>
          </div>
          <SoftPanel>
            <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
              {readyToScale.heading}
            </h3>
            <ol className="mt-5 space-y-3">
              {readyToScale.items.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-[1.5] text-ink-muted"
                >
                  <span className="shrink-0 text-ink-faint">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </SoftPanel>
        </div>

        <div className="mt-14 md:mt-16">
          <WaveRoadmapExhibit waves={waves} />
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
            Who carries what
          </h3>
          <StakeholderMatrix stakeholders={stakeholders} />
        </div>
      </div>
    </section>
  );
}
