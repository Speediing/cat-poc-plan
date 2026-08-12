import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";
import { HaulTruck } from "@/components/HaulTruck";

export function Hero() {
  const { meta } = content;

  return (
    <header className="relative overflow-hidden">
      {/* Soft paper washes — quiet atmosphere, not glow soup */}
      <div
        className="pointer-events-none absolute -right-32 top-8 h-[22rem] w-[22rem] rounded-full bg-panel"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-8rem] bottom-[-4rem] h-72 w-72 rounded-full bg-panel-deep/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-12">
        <div className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-start sm:justify-between">
          <Lockup />
          <p className="max-w-[16rem] text-[14px] leading-snug text-ink-faint sm:text-right">
            {meta.badge}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-12">
          <div className="relative z-10">
            <h1 className="max-w-[18ch] text-[2.75rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.15rem] lg:text-[3.35rem]">
              {meta.title}
            </h1>
            <p className="prose-measure mt-7 text-[17px] leading-[1.55] text-ink-muted">
              {meta.thesis}
            </p>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-ink-faint">
              {meta.preparedBy}
            </p>
            <p className="mt-9">
              <a
                href="#the-pilot"
                className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-canvas transition-opacity hover:opacity-85"
              >
                See the proposed pilot
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:translate-x-2 lg:translate-y-4 xl:translate-x-6">
            <div
              className="pointer-events-none absolute inset-x-8 bottom-4 top-10 rounded-[2rem] bg-panel/80"
              aria-hidden="true"
            />
            <HaulTruck className="relative w-full drop-shadow-[0_18px_40px_rgba(38,37,30,0.08)]" />
          </div>
        </div>
      </div>
    </header>
  );
}
