export default function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      desc: "Bring in your work signals (Git, tickets, standups). This demo uses mock input so the design stays honest.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10.59 13.41a1.99 1.99 0 0 1 0-2.82l1.42-1.41a2 2 0 1 1 2.82 2.82l-1.41 1.41a2 2 0 0 1-2.83 0ZM13 3a9 9 0 0 0-9 9H2l4 4 4-4H7A6 6 0 0 1 13 3Z"
          />
        </svg>
      ),
    },
    {
      title: "Analyze",
      desc: "Pulse looks for patterns: review latency, blocker clusters, and focus interruptions—then turns them into clear signals.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 8a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4Zm-7 8V7a2 2 0 0 1 2-2h4V3H7a4 4 0 0 0-4 4v9a2 2 0 0 0 2 2h3v-2H5Z"
          />
        </svg>
      ),
    },
    {
      title: "Act",
      desc: "Use the dashboard to pick the next best move. Pulse won’t pretend it’s magic—just actionable next steps.",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 2h10v2h2v18H5V4h2V2Zm2 4h6V4h-6v2Zm-1 6h8v2H8v-2Zm0 4h8v2H8v-2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            From signals to decisions.
          </h2>
          <p className="mt-3 text-pretty text-[var(--pulse-muted)]">
            A pipeline that stays understandable: clear inputs, clear analysis, and
            clear next steps.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] p-6 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-500/10 text-[var(--pulse-violet-text)]">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--pulse-muted)]">
                {step.desc}
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-[-18px] text-[72px] font-semibold leading-none text-violet-500/10"
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

