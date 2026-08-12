import type { SectionMeta } from "@/lib/content";

export function SectionHeader({ meta }: { meta: SectionMeta }) {
  return (
    <header className="mb-10 max-w-2xl md:mb-12">
      <p className="mb-3 text-sm text-cat-yellow">{meta.number}</p>
      <h2 className="text-3xl font-medium tracking-tight text-ink md:text-[2.5rem]">
        {meta.heading}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
        {meta.kicker}
      </p>
    </header>
  );
}

export function Handoff({ text }: { text: string }) {
  return (
    <p className="mt-14 max-w-xl border-l border-hairline-strong pl-4 text-[15px] leading-relaxed text-ink-muted">
      {text}
    </p>
  );
}

export function ExhibitTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto border border-hairline">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-hairline">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-medium text-ink-faint"
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
                  className={`px-4 py-3 leading-relaxed ${
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
