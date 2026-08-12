import type { SectionMeta } from "@/lib/content";

export function SectionHeader({ meta }: { meta: SectionMeta }) {
  return (
    <header className="mb-10 max-w-3xl md:mb-14">
      <div className="mb-5 flex items-center gap-4">
        <span
          className="inline-flex h-8 min-w-8 items-center justify-center bg-cat-yellow px-2 font-mono text-[13px] font-semibold tracking-[0.06em] text-ink"
          aria-hidden="true"
        >
          {meta.number}
        </span>
        <div className="h-px flex-1 bg-hairline" aria-hidden="true" />
      </div>
      <h2 className="text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">
        {meta.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">
        {meta.kicker}
      </p>
    </header>
  );
}

export function Handoff({ text }: { text: string }) {
  return (
    <p className="mt-14 max-w-2xl border-l-2 border-hairline-strong pl-5 text-[1.05rem] leading-relaxed text-ink-muted md:mt-16">
      {text}
    </p>
  );
}
