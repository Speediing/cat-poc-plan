import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function NextSteps() {
  const { heading, steps, contacts } = content.nextSteps;
  const { footer } = content.meta;

  return (
    <>
      <section id="next-steps" className="border-b border-hairline bg-void">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <header className="mb-10 max-w-3xl md:mb-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                Closer
              </span>
              <div className="h-px flex-1 bg-hairline" aria-hidden="true" />
            </div>
            <h2 className="text-[2rem] font-medium leading-[1.05] tracking-[-0.035em] text-ink md:text-[2.65rem]">
              {heading}
            </h2>
          </header>

          <ol className="divide-y divide-hairline border-y border-hairline">
            {steps.map((step, index) => (
              <li
                key={step.owner}
                className="grid gap-2 py-6 sm:grid-cols-[2.75rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-[12px] tracking-[0.12em] text-cat-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[1rem] font-medium tracking-[-0.015em] text-ink">
                    {step.owner}
                  </p>
                  <p className="mt-1.5 max-w-3xl text-[0.95rem] leading-relaxed text-ink-muted">
                    {step.action}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 md:mt-14">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint">
              Contacts
            </h3>
            <ul className="mt-5 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
              {contacts.map((contact) => (
                <li key={contact.name} className="bg-surface px-5 py-5">
                  <p className="font-medium tracking-[-0.015em] text-ink">
                    {contact.name}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                    {contact.role}
                  </p>
                  <p className="mt-3 font-mono text-[12px] text-ink-muted">
                    {contact.email}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Lockup />
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
            {footer}
          </p>
        </div>
      </footer>
    </>
  );
}
