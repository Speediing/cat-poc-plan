import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function Hero() {
  const { meta } = content;

  return (
    <header className="border-b border-hairline">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12">
        <div className="mb-14 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:items-center sm:justify-between">
          <Lockup />
          <p className="text-sm text-ink-muted">{meta.badge}</p>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-[2.75rem]">
            {meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {meta.thesis}
          </p>
          <p className="mt-8 text-sm text-ink-faint">{meta.preparedBy}</p>
        </div>
      </div>
    </header>
  );
}
