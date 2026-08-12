import type { ReactNode } from "react";
import type { SectionMeta } from "@/lib/content";

export function SectionHeader({ meta }: { meta: SectionMeta }) {
  return (
    <header className="mb-10 max-w-md md:mb-12">
      <h2 className="text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-[1.85rem]">
        {meta.heading}
      </h2>
      <p className="prose-measure mt-4 text-[17px] leading-[1.55] text-ink-muted">
        {meta.kicker}
      </p>
    </header>
  );
}

export function Handoff({ text }: { text: string }) {
  return (
    <p className="prose-measure mt-16 text-[17px] leading-[1.55] text-ink-muted">
      {text}
    </p>
  );
}

export function ExhibitTable({
  headers,
  rows,
  className = "",
}: {
  headers: string[];
  rows: string[][];
  className?: string;
}) {
  return (
    <div
      className={`overflow-x-auto rounded-2xl bg-white/80 shadow-[0_0_0_1px_rgba(38,37,30,0.07)] ${className}`}
    >
      <table className="w-full min-w-[28rem] border-collapse text-left text-[15px]">
        <thead>
          <tr className="border-b border-hairline">
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-3.5 text-[13px] font-medium text-ink-faint"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row[0]}-${i}`}
              className="border-b border-hairline align-top last:border-0"
            >
              {row.map((cell, j) => (
                <td
                  key={`${i}-${j}`}
                  className={`px-5 py-3.5 leading-[1.5] ${
                    j === 0 ? "font-medium text-ink" : "text-ink-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
