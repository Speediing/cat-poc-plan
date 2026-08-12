import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";
import { HaulTruck } from "@/components/HaulTruck";

export function Hero() {
  const { meta } = content;

  return (
    <header className="relative bg-canvas">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-12">
        <div className="mb-16 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-start sm:justify-between">
          <Lockup />
          <p className="max-w-[16rem] text-[14px] leading-snug text-ink-faint sm:text-right">
            {meta.badge}
          </p>
        </div>

        {/* cursor.com rhythm: type on plain bone, painting as quiet fragment */}
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-xl">
            <h1 className="max-w-[15ch] text-[2.75rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.2rem] lg:text-[3.45rem]">
              {meta.title}
            </h1>
            <p className="mt-7 max-w-[34rem] text-[17px] leading-[1.55] text-ink-muted">
              {meta.thesis}
            </p>
            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-ink-faint">
              {meta.preparedBy}
            </p>
            <p className="mt-10 flex flex-wrap gap-3">
              <a
                href="#what-we-heard"
                className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-canvas transition-opacity hover:opacity-85"
              >
                What we heard
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
              <a
                href="#use-case"
                className="inline-flex items-center rounded-full bg-panel px-5 py-2.5 text-[14px] font-medium text-ink transition-opacity hover:opacity-85"
              >
                Parts ID + agents
              </a>
            </p>
          </div>

          <div className="relative lg:justify-self-end lg:w-[108%] lg:max-w-none xl:w-[112%]">
            <HaulTruck className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
