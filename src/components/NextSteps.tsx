import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function NextSteps() {
  const { heading, steps, contacts } = content.nextSteps;
  const { footer } = content.meta;

  return (
    <>
      <section id="next-steps" className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <header className="mb-10 max-w-3xl md:mb-12">
            <div className="mb-5 flex items-baseline gap-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                Closer
              </span>
              <div className="h-px flex-1 bg-hairline" aria-hidden="true" />
            </div>
            <h2 className="text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              {heading}
            </h2>
          </header>

          <ol className="divide-y divide-hairline border-y border-hairline">
            {steps.map((step, index) => (
              <li
                key={step.owner}
                className="grid gap-2 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-[12px] tracking-[0.06em] text-ink-faint">
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
            <h3 className="text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
              Contacts
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {contacts.map((contact) => (
                <li
                  key={contact.name}
                  className="border border-hairline bg-surface/40 px-5 py-4"
                >
                  <p className="font-medium tracking-[-0.015em] text-ink">
                    {contact.name}
                  </p>
                  <p className="mt-1 text-[13px] text-ink-muted">{contact.role}</p>
                  <p className="mt-2 font-mono text-[12px] text-ink-faint">
                    {contact.email}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-cream-deep/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Lockup />
          <p className="text-[12px] leading-relaxed text-ink-faint">{footer}</p>
        </div>
      </footer>
    </>
  );
}
