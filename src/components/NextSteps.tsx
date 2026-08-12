import { content } from "@/lib/content";
import { Lockup } from "@/components/Lockup";
import { SoftPanel } from "@/components/SectionHeader";

export function NextSteps() {
  const { heading, steps, contacts } = content.nextSteps;
  const { footer } = content.meta;

  return (
    <>
      <section id="next-steps" className="bg-canvas-warm/40">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <header className="max-w-sm">
              <h2 className="text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-[1.85rem]">
                {heading}
              </h2>
            </header>

            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={step.owner}>
                  <SoftPanel>
                    <p className="text-[13px] text-ink-faint">
                      Step {index + 1}
                    </p>
                    <p className="mt-1 text-[1.05rem] font-medium tracking-tight text-ink">
                      {step.owner}
                    </p>
                    <p className="mt-2 text-[17px] leading-[1.55] text-ink-muted">
                      {step.action}
                    </p>
                  </SoftPanel>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16">
            <h3 className="mb-5 text-[1.05rem] font-medium tracking-tight text-ink">
              Contacts
            </h3>
            <ul className="grid gap-3 sm:grid-cols-3">
              {contacts.map((contact) => (
                <li
                  key={contact.name}
                  className="rounded-2xl bg-white/80 px-5 py-5 shadow-[0_0_0_1px_rgba(38,37,30,0.07)]"
                >
                  <p className="text-[15px] font-medium text-ink">
                    {contact.name}
                  </p>
                  <p className="mt-1 text-[14px] text-ink-muted">
                    {contact.role}
                  </p>
                  <p className="mt-3 text-[14px] text-ink-faint">
                    {contact.email}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <Lockup />
          <p className="text-[13px] leading-relaxed text-ink-faint">{footer}</p>
        </div>
      </footer>
    </>
  );
}
