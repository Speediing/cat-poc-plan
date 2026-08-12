import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
  SoftPanel,
} from "@/components/SectionHeader";

export function WhyNow() {
  const { meta, arguments: args, fundingBox } = content.whyNow;

  return (
    <section id={meta.id} className="bg-canvas-warm/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-start">
          <SectionHeader meta={meta} />
          <SoftPanel>
            <h3 className="text-[1.05rem] font-medium tracking-tight text-ink">
              {fundingBox.heading}
            </h3>
            <dl className="mt-5 space-y-5 text-[17px] leading-[1.55] text-ink-muted">
              <div>
                <dt className="text-[14px] font-medium text-ink">During</dt>
                <dd className="mt-1">{fundingBox.during}</dd>
              </div>
              <div>
                <dt className="text-[14px] font-medium text-ink">Output</dt>
                <dd className="mt-1">{fundingBox.output}</dd>
              </div>
              <div>
                <dt className="text-[14px] font-medium text-ink">After</dt>
                <dd className="mt-1">{fundingBox.after}</dd>
              </div>
            </dl>
          </SoftPanel>
        </div>

        <div className="mt-16">
          <ExhibitTable
            headers={["Claim", "What you told us", "So what"]}
            rows={args.map((arg) => [arg.claim, arg.grounding, arg.soWhat])}
          />
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
