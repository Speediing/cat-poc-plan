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

        {/* Exhibit A — The problem */}
        <div className="mt-14 md:mt-16">
          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
            <p className="mb-5 text-[13px] font-medium text-ink-faint">
              Exhibit A · {problem.heading}
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
                        <p className="text-[12px] font-medium text-ink-faint">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-[15px] font-medium text-ink">
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
                      Blockers you named
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
                      Desired outcome
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
                  alt="Painted illustration: blurry part photo becomes a catalog part card"
                  width={1536}
                  height={1024}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Exhibit B — Cloud Agents factory */}
        <div className="mt-12 md:mt-14">
          <div className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-7">
            <p className="mb-2 text-[13px] font-medium text-ink-faint">
              Exhibit B · {agents.heading}
            </p>
            <p className="max-w-3xl text-[16px] leading-[1.55] text-ink-muted">
              {agents.intro}
            </p>

            {/* Factory stations */}
            <div className="mt-8">
              <p className="mb-4 text-[13px] font-medium text-ink-faint">
                {agents.factoryLabel}
              </p>
              <ol className="grid gap-2 sm:grid-cols-5">
                {agents.stations.map((station, i) => (
                  <li key={station.name} className="relative">
                    <div
                      className={`h-full rounded-xl px-3 py-4 ${
                        station.name === "Implement" ||
                        station.name === "Validate" ||
                        station.name === "Fix"
                          ? "bg-ink text-canvas"
                          : station.name === "Review"
                            ? "bg-panel-deep text-ink"
                            : "bg-panel text-ink"
                      }`}
                    >
                      <p className="text-[11px] font-medium opacity-55">
                        Station {i + 1}
                      </p>
                      <p className="mt-1 text-[15px] font-medium">
                        {station.name}
                      </p>
                      <p
                        className={`mt-2 text-[12px] leading-relaxed ${
                          station.name === "Implement" ||
                          station.name === "Validate" ||
                          station.name === "Fix"
                            ? "text-canvas/70"
                            : "text-ink-muted"
                        }`}
                      >
                        {station.role}
                      </p>
                    </div>
                    {i < agents.stations.length - 1 ? (
                      <span
                        className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-ink-faint sm:block"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-[13px] text-ink-faint">
                Dark stations = Cloud Agent primary. Intake + Review stay with your team.
              </p>
            </div>

            {/* Lead ticket hierarchy */}
            <div className="mt-8 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="rounded-xl bg-ink px-5 py-5 text-canvas">
                <p className="text-[12px] font-medium text-canvas/55">
                  Lead ticket
                </p>
                <p className="mt-2 text-[16px] font-medium leading-snug">
                  {agents.leadTicket}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-canvas/70">
                  Broken into scoped child tickets below. Agents pick up children
                  in parallel; you review the draft PRs.
                </p>
              </div>
              <div className="rounded-xl bg-panel px-5 py-5">
                <p className="text-[12px] font-medium text-ink-faint">
                  Live proof pattern
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {agents.proofPattern}
                </p>
              </div>
            </div>

            {/* Ticket → PR loop */}
            <div className="mt-8">
              <p className="mb-4 text-[13px] font-medium text-ink-faint">
                Runtime loop · every child ticket
              </p>
              <div className="overflow-x-auto">
                <ol className="flex min-w-[40rem] items-stretch gap-2">
                  {agents.loop.map((step, i) => (
                    <li key={step} className="flex flex-1 items-center gap-2">
                      <div
                        className={`flex-1 rounded-xl px-3 py-4 text-center ${
                          step === "Cloud Agent"
                            ? "bg-cursor-orange text-white"
                            : step === "Draft PR"
                              ? "bg-ink text-canvas"
                              : step === "Human review"
                                ? "bg-panel-deep text-ink"
                                : "bg-panel text-ink"
                        }`}
                      >
                        <p className="text-[11px] font-medium opacity-60">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-[13px] font-medium leading-snug">
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

            {/* Backlog table */}
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
                        Workstream
                      </th>
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        Station
                      </th>
                      <th className="px-4 py-3 text-[12px] font-medium text-ink-faint">
                        Child ticket
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
              <p className="text-[13px] font-medium text-ink">Pilot success</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {agents.success}
              </p>
            </div>
          </div>
        </div>

        {/* Exhibit C — Fit */}
        <div className="mt-12 md:mt-14">
          <SoftPanel>
            <p className="mb-5 text-[13px] font-medium text-ink-faint">
              Exhibit C · {fit.heading}
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
