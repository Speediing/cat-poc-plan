import { content } from "@/lib/content";
import { Handoff, SectionHeader } from "@/components/SectionHeader";

export function WhyNow() {
  const { meta, arguments: args, fundingBox } = content.whyNow;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader meta={meta} />

        <div className="space-y-0 divide-y divide-hairline border-y border-hairline">
          {args.map((arg, index) => (
            <article
              key={arg.claim}
              className="grid gap-4 py-7 sm:grid-cols-[2.5rem_1fr] sm:gap-6 md:py-8"
            >
              <span className="font-mono text-[12px] tracking-[0.06em] text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="max-w-3xl">
                <h3 className="text-[1.1rem] font-medium leading-snug tracking-[-0.02em] text-ink">
                  {arg.claim}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
                  {arg.grounding}
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">
                  {arg.soWhat}
                </p>
              </div>
            </article>
          ))}
        </div>

        <aside
          className="mt-12 border-2 border-cat-yellow bg-surface p-6 sm:mt-14 sm:p-8"
          aria-labelledby="funding-model-heading"
        >
          <h3
            id="funding-model-heading"
            className="text-[1.15rem] font-medium tracking-[-0.02em] text-ink"
          >
            {fundingBox.heading}
          </h3>
          <ul className="mt-5 space-y-3">
            {fundingBox.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.98rem] leading-relaxed text-ink"
              >
                <span
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
