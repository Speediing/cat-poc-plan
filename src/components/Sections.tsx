import type { ReactNode } from "react";
import { content, hiddenGroup } from "@/lib/content";
import { SectionHeader, SoftPanel } from "@/components/SectionHeader";

function Shell({
  id,
  warm,
  children,
}: {
  id: string;
  warm?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={warm ? "bg-canvas-warm/40" : undefined}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        {children}
      </div>
    </section>
  );
}

/** Exec skim: how the one-work-week sprint runs. Large and plain. */
export function HowWeRunIt() {
  const { meta, headline, facts, days } = content.howWeRunIt;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <p className="max-w-3xl text-[1.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:text-[2.15rem]">
        {headline}
      </p>
      <ul className="mt-8 max-w-3xl space-y-3">
        {facts.map((fact) => (
          <li
            key={fact}
            className="text-[17px] leading-[1.55] text-ink-muted"
          >
            {fact}
          </li>
        ))}
      </ul>
      <ol className="mt-10 space-y-4">
        {days.map((day) => (
          <li
            key={day.when}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="text-[13px] font-medium tracking-[0.04em] text-cursor-orange uppercase">
                {day.when}
              </p>
              <p className="text-[13px] font-medium text-ink-faint">
                {day.stage}
              </p>
            </div>
            <p className="mt-3 text-[1.05rem] font-medium leading-snug tracking-[-0.01em] text-ink md:text-[1.15rem]">
              {day.headline}
            </p>
            <ul className="mt-4 space-y-2">
              {day.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-[15px] leading-relaxed text-ink-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Shell>
  );
}

/** Exec skim: business outcomes on file. */
export function WhatWeProve() {
  const { meta, outcomes } = content.whatWeProve;
  return (
    <Shell id={meta.id}>
      <SectionHeader meta={meta} />
      <ol className="mt-2 space-y-4">
        {outcomes.map((outcome, index) => (
          <li
            key={outcome}
            className="grid gap-3 border-b border-hairline pb-5 last:border-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:items-baseline"
          >
            <p className="text-[13px] font-medium text-cursor-orange">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-[1.2rem] font-medium leading-[1.35] tracking-[-0.01em] text-ink md:text-[1.35rem]">
              {outcome}
            </p>
          </li>
        ))}
      </ol>
    </Shell>
  );
}

export function WhatWeHeard() {
  const { meta, operatingModel, findings } = content.whatWeHeard;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <div className="mt-10 rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:p-6">
        <p className="text-[13px] font-medium text-ink-faint">
          {operatingModel.heading}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {operatingModel.stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <div className="rounded-lg bg-panel px-3 py-2 text-[14px] font-medium text-ink">
                {stage}
              </div>
              {i < operatingModel.stages.length - 1 ? (
                <span className="text-ink-faint" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-muted">
          {operatingModel.body}
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {findings.map((f) => (
          <div
            key={f.label}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
          >
            <p className="text-[15px] font-medium text-ink">{f.label}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function TheGap() {
  const { meta, stats, close } = content.theGap;
  return (
    <Shell id={meta.id}>
      <SectionHeader meta={meta} />
      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
          >
            <p className="text-[1.75rem] font-medium tracking-tight text-cursor-orange">
              {s.value}
            </p>
            <p className="mt-2 text-[15px] font-medium text-ink">{s.label}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {s.detail}
            </p>
          </div>
        ))}
      </div>
      <p className="prose-measure mt-10 text-[17px] leading-[1.55] text-ink">
        {close}
      </p>
    </Shell>
  );
}

export function WhoCursorIs() {
  const { meta, body, points } = content.whoCursorIs;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <p className="mt-2 text-[14px] text-ink-faint">{body}</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {points.map((p) => (
          <div
            key={p.label}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
          >
            <p className="text-[15px] font-medium text-ink">{p.label}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function WhereItPlugsIn() {
  const { meta, rows, close } = content.whereItPlugsIn;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <div className="mt-10 overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]">
        <table className="w-full min-w-[40rem] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-hairline bg-panel/50">
              {["Stage", "Today", "With Cursor"].map((h) => (
                <th
                  key={h}
                  className="px-5 py-3.5 text-[12px] font-medium text-ink-faint"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.stage}
                className="border-b border-hairline align-top last:border-0"
              >
                <td className="px-5 py-3.5 font-medium text-ink">{row.stage}</td>
                <td className="px-5 py-3.5 text-ink-muted">{row.today}</td>
                <td className="px-5 py-3.5 text-ink">{row.withCursor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="prose-measure mt-8 text-[17px] leading-[1.55] text-ink">
        {close}
      </p>
    </Shell>
  );
}

export function ProposedPoc() {
  const { meta, intro, checks, why } = content.proposedPoc;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <p className="prose-measure mt-2 text-[17px] leading-[1.55] text-ink-muted">
        {intro}
      </p>
      <div className="mt-8 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-2xl bg-ink px-5 py-5 text-canvas">
          <p className="text-[13px] font-medium text-canvas/55">
            Acceptance checks
          </p>
          <ul className="mt-4 space-y-2">
            {checks.map((c) => (
              <li key={c} className="text-[15px] leading-relaxed text-canvas/90">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3">
          {why.map((w) => (
            <div
              key={w.label}
              className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
            >
              <p className="text-[15px] font-medium text-ink">{w.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/** Not mounted on the page until Nate confirms peeps. Uses `hiddenGroup`. */
export function TheGroup() {
  const { meta, ask, members, expectation } = hiddenGroup;
  return (
    <Shell id={meta.id}>
      <SectionHeader meta={meta} />
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
        {ask}
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]">
        <table className="w-full min-w-[28rem] border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-hairline bg-panel/50">
              {["Who", "Role"].map((h) => (
                <th
                  key={h}
                  className="px-5 py-3.5 text-[12px] font-medium text-ink-faint"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr
                key={m.name}
                className="border-b border-hairline align-top last:border-0"
              >
                <td className="px-5 py-3.5 font-medium text-ink">{m.name}</td>
                <td className="px-5 py-3.5 text-ink-muted">{m.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
        {expectation}
      </p>
    </Shell>
  );
}

export function ThePilot() {
  const { meta, stats, goals, infra } = content.thePilot;
  return (
    <Shell id={meta.id} warm>
      <SectionHeader meta={meta} />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
          >
            <p className="text-[1.35rem] font-medium tracking-tight text-cursor-orange">
              {s.value}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-medium text-ink-faint">What success means</p>
          <ul className="mt-3 space-y-2">
            {goals.map((g) => (
              <li
                key={g}
                className="rounded-xl bg-panel px-4 py-3 text-[14px] leading-relaxed text-ink-muted"
              >
                {g}
              </li>
            ))}
          </ul>
        </div>
        <SoftPanel>
          <p className="text-[13px] font-medium text-ink-faint">Infra, briefly</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{infra}</p>
        </SoftPanel>
      </div>
    </Shell>
  );
}
