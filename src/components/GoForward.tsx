import { content } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export function GoForward() {
  const { meta, destination, waves, readyToScale, stakeholders } =
    content.goForward;

  return (
    <section id={meta.id} className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <SectionHeader meta={meta} />

        <p className="max-w-3xl text-[1.05rem] leading-relaxed text-ink-muted">
          {destination}
        </p>

        <div className="mt-12 md:mt-14">
          <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-ink">
            Four-wave scale model
          </h3>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {waves.map((wave) => (
              <li
                key={wave.label}
                className="flex flex-col border border-hairline bg-surface/40 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-mono text-[12px] tracking-[0.06em] text-ink-faint">
                    {wave.label}
                  </p>
                  <p className="text-[12px] text-ink-faint">{wave.timeframe}</p>
                </div>
                <h4 className="mt-2 text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
                  {wave.name}
                </h4>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {wave.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-ink">
            {readyToScale.heading}
          </h3>
          <ol className="mt-5 space-y-3.5">
            {readyToScale.items.map((item, i) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
                <span className="mt-0.5 font-mono text-[11px] tracking-[0.06em] text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-muted">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="text-[1.15rem] font-medium tracking-[-0.02em] text-ink">
            Stakeholder map
          </h3>
          <div className="mt-5 overflow-x-auto border border-hairline">
            <table className="w-full min-w-[36rem] border-collapse text-left text-[0.92rem]">
              <thead>
                <tr className="border-b border-hairline bg-cream-deep/50">
                  <th className="px-4 py-3 font-medium tracking-[-0.01em] text-ink sm:px-5">
                    Name
                  </th>
                  <th className="px-4 py-3 font-medium tracking-[-0.01em] text-ink sm:px-5">
                    Role
                  </th>
                  <th className="px-4 py-3 font-medium tracking-[-0.01em] text-ink sm:px-5">
                    Carries
                  </th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map((person) => (
                  <tr
                    key={person.name}
                    className="border-b border-hairline last:border-0"
                  >
                    <td className="px-4 py-3.5 font-medium text-ink sm:px-5">
                      {person.name}
                    </td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">
                      {person.role}
                    </td>
                    <td className="px-4 py-3.5 text-ink-muted sm:px-5">
                      {person.carries}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
