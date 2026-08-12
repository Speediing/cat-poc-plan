import type { ReactNode } from "react";
import type { SectionMeta } from "@/lib/content";

/** Follow-up pattern: short plain label + large sentence-case argument. */
export function SectionHeader({ meta }: { meta: SectionMeta }) {
  return (
    <header className="mb-10 max-w-2xl md:mb-12">
      <p className="text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase">
        {meta.number} {meta.navLabel}
      </p>
      <h2 className="mt-3 text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-[2rem]">
        {meta.heading}
      </h2>
      {meta.kicker ? (
        <p className="prose-measure mt-4 text-[17px] leading-[1.55] text-ink-muted">
          {meta.kicker}
        </p>
      ) : null}
    </header>
  );
}

export function SoftPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-panel px-6 py-6 sm:px-7 sm:py-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionShell({
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
