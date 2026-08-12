import { content } from "@/lib/content";
import {
  ExhibitTable,
  SectionHeader,
  SoftPanel,
} from "@/components/SectionHeader";

export function GoForward() {
  const { meta, destination, waves, readyToScale, stakeholders } =
    content.goForward;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">
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

        <div className="mt-16">
          <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
            Wave roadmap
          </h3>
          <ExhibitTable
            headers={["Wave", "Name", "Timing", "Entry", "Exit"]}
            rows={waves.map((wave) => [
              wave.label,
              wave.name,
              wave.timeframe,
              wave.entry,
              wave.exit,
            ])}
          />
        </div>

        <div className="mt-16">
          <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
            Who carries what
          </h3>
          <ExhibitTable
            headers={["Name", "Role", "Thread", "Ask"]}
            rows={stakeholders.map((person) => [
              person.name,
              person.role,
              person.thread,
              person.ask,
            ])}
          />
        </div>
      </div>
    </section>
  );
}
