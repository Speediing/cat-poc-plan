import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";
import { WhyNowMatrix } from "@/components/Exhibits";

export function WhyNow() {
  const { meta, arguments: args } = content.whyNow;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <SectionHeader meta={meta} />

        <div className="mt-10 md:mt-12">
          <WhyNowMatrix args={args} />
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
