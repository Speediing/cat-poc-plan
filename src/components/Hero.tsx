import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";
import { HaulTruck } from "@/components/HaulTruck";

export function Hero() {
  const { meta } = content;

  return (
    <header className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-panel"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-panel-deep/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-10 sm:px-10 sm:pb-16 sm:pt-12">
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-start sm:justify-between">
          <Lockup />
          <p className="max-w-[16rem] text-[14px] leading-snug text-ink-faint sm:text-right">
            {meta.badge}
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          <div className="relative z-10 lg:pr-4">
            <h1 className="max-w-[16ch] text-[2.75rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.15rem] lg:text-[3.35rem]">
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

          <div className="relative -mx-2 sm:mx-0 lg:-mr-4 xl:-mr-8">
            <HaulTruck className="w-full scale-[1.02] sm:scale-100" />
          </div>
        </div>
      </div>
    </header>
  );
}
