import Image from "next/image";
import { content } from "@/lib/content";
import { Handoff, SectionHeader, SoftPanel } from "@/components/SectionHeader";

export function UseCase() {
  const { meta, intro, problem, agents, fit } = content.useCase;

  return (
    <section id={meta.id}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:items-end">
          <SectionHeader meta={meta} />
          <p className="prose-measure text-[17px] leading-[1.55] text-ink-muted lg:pb-2">
            {intro}
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
            <p className="mb-5 text-[13px] font-medium text-ink-faint">
              {problem.heading}
            </p>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
              <div>
                <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                  {problem.flow.map((step, i) => (
                    <li
                      key={step.label}
                      className="flex items-stretch gap-2 sm:flex-1"
                    >
                      <div className="flex-1 rounded-xl bg-panel px-4 py-4">
                        <p className="text-[15px] font-medium text-ink">
                          {step.label}
                        </p>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                          {step.text}
                        </p>
                      </div>
                      {i < problem.flow.length - 1 ? (
                        <span
                          className="hidden self-center text-ink-faint sm:inline"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-dashed border-hairline-strong bg-canvas-warm/70 px-4 py-4">
                    <p className="text-[13px] font-medium text-ink-faint">
                      What makes it hard
                    </p>
                    <ul className="mt-3 space-y-2">
                      {problem.blockers.map((b) => (
                        <li
                          key={b}
                          className="text-[14px] leading-relaxed text-ink-muted"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-ink px-4 py-4 text-canvas">
                    <p className="text-[13px] font-medium text-canvas/55">
                      Done looks like
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-canvas/90">
                      {problem.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative -mx-1 overflow-hidden rounded-2xl bg-panel/40 sm:mx-0">
                <Image
                  src="/images/blurry-to-part.png"
                  alt="Blurry part photo becomes a catalog part card"
                  width={1536}
                  height={1024}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14">
          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
            <p className="text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase">
              How agents help
            </p>
            <h3 className="mt-2 text-[1.35rem] font-medium tracking-tight text-ink md:text-[1.5rem]">
              {agents.heading}
            </h3>
            <p className="mt-3 max-w-3xl text-[16px] leading-[1.55] text-ink-muted">
              {agents.intro}
            </p>

            <div className="mt-8">
              <p className="mb-4 text-[13px] font-medium text-ink-faint">
                {agents.factoryLabel}
              </p>
              <ol className="grid gap-2 sm:grid-cols-5">
                {agents.stations.map((station) => (
                  <li key={station.name}>
                    <div
                      className={`h-full rounded-xl px-3 py-4 ${
                        station.name === "Build" ||
                        station.name === "Test" ||
                        station.name === "Fix"
                          ? "bg-ink text-canvas"
                          : station.name === "Review"
                            ? "bg-panel-deep text-ink"
                            : "bg-panel text-ink"
                      }`}
                    >
                      <p className="text-[15px] font-medium">{station.name}</p>
                      <p
                        className={`mt-2 text-[12px] leading-relaxed ${
                          station.name === "Build" ||
                          station.name === "Test" ||
                          station.name === "Fix"
                            ? "text-canvas/70"
                            : "text-ink-muted"
                        }`}
                      >
                        {station.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-[13px] text-ink-faint">
                Dark steps = agent. Scope and Review stay with your team.
              </p>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="rounded-xl bg-ink px-5 py-5 text-canvas">
                <p className="text-[12px] font-medium text-canvas/55">
                  Lead ticket
                </p>
                <p className="mt-2 text-[16px] font-medium leading-snug">
                  {agents.leadTicket}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-canvas/70">
                  Split into child tickets. Agents pick them up in parallel.
                  You review the draft PRs.
                </p>
              </div>
              <div className="rounded-xl bg-panel px-5 py-5">
                <p className="text-[12px] font-medium text-ink-faint">
                  In the background
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {agents.proofPattern}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-[13px] font-medium text-ink-faint">
                On each child ticket
              </p>
              <div className="overflow-x-auto">
                <ol className="flex min-w-[28rem] items-stretch gap-2">
                  {agents.loop.map((step, i) => (
                    <li key={step} className="flex flex-1 items-center gap-2">
                      <div
                        className={`flex-1 rounded-xl px-3 py-4 text-center ${
                          step === "Agent"
                            ? "bg-cursor-orange text-white"
                            : step === "Draft PR"
                              ? "bg-ink text-canvas"
                              : step === "Human review"
                                ? "bg-panel-deep text-ink"
                                : "bg-panel text-ink"
                        }`}
                      >
                        <p className="text-[13px] font-medium leading-snug">
                          {step}
                        </p>
                      </div>
                      {i < agents.loop.length - 1 ? (
                        <span className="text-ink-faint" aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-3 text-[13px] text-ink-faint">{agents.loopNote}</p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[13px] font-medium text-ink-faint">
                {agents.backlogNote}
              </p>
              <div className="overflow-x-auto rounded-xl bg-canvas-warm/50 shadow-[0_0_0_1px_rgba(38,37,30,0.06)]">
                <table className="w-full min-w-[36rem] border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-hairline">
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        ID
                      </th>
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        Area
                      </th>
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        Step
                      </th>
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        Ticket
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {agents.backlog.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-hairline align-top last:border-0"
                      >
                        <td className="px-4 py-3 font-medium text-cursor-orange">
                          {row.id}
                        </td>
                        <td className="px-4 py-3 text-ink">{row.workstream}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.station}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.ticket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-hairline-strong px-5 py-4">
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {agents.success}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14">
          <SoftPanel>
            <p className="mb-5 text-[13px] font-medium text-ink-faint">
              {fit.heading}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {fit.rows.map((row) => (
                <div
                  key={row.dimension}
                  className="rounded-xl bg-white/70 px-4 py-4 shadow-[0_0_0_1px_rgba(38,37,30,0.06)]"
                >
                  <p className="text-[15px] font-medium text-ink">
                    {row.dimension}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    {row.why}
                  </p>
                </div>
              ))}
            </div>
          </SoftPanel>
        </div>

        {meta.handoff ? <Handoff text={meta.handoff} /> : null}
      </div>
    </section>
  );
}
