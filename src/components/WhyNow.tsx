import { content } from "@/lib/content";
import {
  ExhibitTable,
  Handoff,
  SectionHeader,
} from "@/components/SectionHeader";

export function WhyNow() {
  const { meta, arguments: args, fundingBox } = content.whyNow;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeader meta={meta} />

        <ExhibitTable
          headers={["Claim", "Fact", "So what"]}
          rows={args.map((arg) => [arg.claim, arg.grounding, arg.soWhat])}
        />

        <aside
          className="mt-12 border border-cat-yellow p-6 sm:p-7"
          aria-labelledby="funding-model-heading"
        >
          <h3
            id="funding-model-heading"
            className="text-sm font-medium text-ink"
          >
            {fundingBox.heading}
          </h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-relaxed">
            <div>
              <dt className="sr-only">During</dt>
              <dd className="text-ink-muted">{fundingBox.during}</dd>
            </div>
            <div>
              <dt className="sr-only">Output</dt>
              <dd className="text-ink-muted">{fundingBox.output}</dd>
            </div>
            <div>
              <dt className="sr-only">After</dt>
              <dd className="text-ink-muted">{fundingBox.after}</dd>
            </div>
          </dl>
        </aside>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
