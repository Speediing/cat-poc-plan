import { content } from "@/lib/content";
import { ExhibitTable, SectionHeader } from "@/components/SectionHeader";

export function GoForward() {
  const { meta, destination, waves, readyToScale, stakeholders } =
    content.goForward;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHeader meta={meta} />

        <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted">
          {destination}
        </p>

        <div className="mt-12">
          <h3 className="mb-4 text-sm font-medium text-ink">Wave roadmap</h3>
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

        <div className="mt-14">
          <h3 className="mb-4 text-sm font-medium text-ink">
            {readyToScale.heading}
          </h3>
          <ol className="max-w-xl space-y-2.5">
            {readyToScale.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] leading-relaxed text-ink-muted"
              >
                <span className="text-ink-faint">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14">
          <h3 className="mb-4 text-sm font-medium text-ink">Stakeholders</h3>
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
