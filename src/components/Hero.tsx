import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function Hero() {
  const { meta } = content;

  return (
    <header className="relative overflow-hidden border-b border-hairline">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(38,37,30,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-center sm:justify-between">
          <Lockup />
          <p className="inline-flex w-fit items-center rounded-full border border-hairline bg-surface/70 px-3 py-1 text-[12px] font-medium tracking-[-0.01em] text-ink-muted">
            {meta.badge}
          </p>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-[2.35rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.15rem] lg:text-[3.5rem]">
            {meta.title}
          </h1>
          <p className="mt-7 max-w-2xl text-[1.125rem] leading-relaxed text-ink-muted sm:text-[1.2rem]">
            {meta.thesis}
          </p>
          <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-ink-faint">
            {meta.preparedBy}
          </p>
        </div>
      </div>
    </header>
  );
}
