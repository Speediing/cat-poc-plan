import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function Hero() {
  const { meta } = content;

  return (
    <header className="relative overflow-hidden border-b border-hairline">
      <div
        className="tech-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        aria-hidden="true"
      >
        <div className="horizon-line h-px w-full" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">
          <Lockup />
          <p className="inline-flex w-fit items-center border border-hairline bg-surface px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted">
            {meta.badge}
          </p>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-[2.4rem] font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-[3.25rem] lg:text-[3.6rem]">
            {meta.title}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.1rem] leading-relaxed text-ink-muted sm:text-[1.18rem]">
            {meta.thesis}
          </p>
          <p className="mt-9 max-w-xl font-mono text-[11px] leading-relaxed tracking-[0.04em] text-ink-faint">
            {meta.preparedBy}
          </p>
        </div>
      </div>
    </header>
  );
}
