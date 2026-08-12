import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";

export function NextSteps() {
  const { heading, steps, contacts } = content.nextSteps;
  const { footer } = content.meta;

  return (
    <>
      <section id="next-steps" className="border-b border-hairline">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-24">
          <header className="mb-10 max-w-2xl md:mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-ink md:text-[2.5rem]">
              {heading}
            </h2>
          </header>

          <ol className="divide-y divide-hairline border-y border-hairline">
            {steps.map((step, index) => (
              <li
                key={step.owner}
                className="grid gap-2 py-5 sm:grid-cols-[1.5rem_1fr] sm:gap-5"
              >
                <span className="text-sm text-ink-faint">{index + 1}.</span>
                <div>
                  <p className="text-[15px] font-medium text-ink">
                    {step.owner}
                  </p>
                  <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                    {step.action}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <h3 className="mb-4 text-sm font-medium text-ink">Contacts</h3>
            <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
              {contacts.map((contact) => (
                <li key={contact.name} className="bg-void px-4 py-4">
                  <p className="text-sm font-medium text-ink">{contact.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{contact.role}</p>
                  <p className="mt-2 text-sm text-ink-faint">{contact.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Lockup />
          <p className="text-sm text-ink-faint">{footer}</p>
        </div>
      </footer>
    </>
  );
}
