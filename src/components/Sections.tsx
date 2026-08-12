import type { ReactNode } from "react";
import { content } from "@/lib/content";
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

export function IdeaWorthTesting() {
  const { meta, quote, attribution, practice } = content.ideaWorthTesting;
  return (
    <Shell id={meta.id}>
      <SectionHeader meta={meta} />
      <blockquote className="mt-8 max-w-3xl rounded-2xl bg-ink px-6 py-6 text-canvas sm:px-8 sm:py-8">
        <p className="text-[1.15rem] font-medium leading-snug tracking-tight">
          “{quote}”
        </p>
        <p className="mt-4 text-[13px] text-canvas/55">{attribution}</p>
      </blockquote>
      <ul className="mt-8 max-w-3xl space-y-3">
        {practice.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-panel px-4 py-3 text-[15px] leading-relaxed text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
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

export function TheGroup() {
  const { meta, ask, members, expectation } = content.theGroup;
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

export function Timeline() {
  const { meta, items } = content.timeline;
  return (
    <Shell id={meta.id}>
      <SectionHeader meta={meta} />
      <ol className="mt-10 space-y-3">
        {items.map((item) => (
          <li
            key={item.when + item.what}
            className="grid gap-2 rounded-2xl bg-white/80 p-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] sm:grid-cols-[10rem_1fr_8rem] sm:items-baseline"
          >
            <p className="text-[13px] font-medium text-cursor-orange">
              {item.when}
            </p>
            <p className="text-[15px] text-ink">{item.what}</p>
            <p className="text-[13px] text-ink-faint sm:text-right">{item.who}</p>
          </li>
        ))}
      </ol>
    </Shell>
  );
}
