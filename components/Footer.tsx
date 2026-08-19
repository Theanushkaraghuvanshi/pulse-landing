"use client";

export default function Footer() {
  return (
    <footer
      id="pricing"
      className="relative border-t border-[var(--pulse-border)] py-16 md:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/15 via-fuchsia-500/8 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] p-6 shadow-sm backdrop-blur md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
                Try Pulse free.
              </h2>
              <p className="mt-3 text-pretty text-[var(--pulse-muted)]">
                Get the dashboard experience in minutes. Everything on this page is a UI mock, but the
                flow is designed like a real product.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--pulse-surface-70)] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Starter (demo)
                  </p>
                  <p className="mt-1 text-xs text-[var(--pulse-muted)]">
                    Includes example dashboards.
                  </p>
                </div>
                <div className="rounded-xl bg-violet-500/10 px-3 py-2 text-xs font-semibold text-[var(--pulse-violet-text)]">
                  No setup
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <a
                  href="#hero"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-80)] px-4 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:bg-[var(--pulse-surface-70)]"
                >
                  Back to top
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-[var(--pulse-cta-bg)] px-5 text-sm font-semibold text-[var(--pulse-cta-fg)] shadow-sm transition hover:bg-[var(--pulse-cta-hover-bg)] focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                  onClick={() => {
                    // This is a landing-page challenge: keep it honest (no fake checkout).
                    alert(
                      "Thanks! This is a UI demo, wire your real signup flow later."
                    );
                  }}
                >
                  Try Pulse free for 14 days
                </button>
              </div>

              <p className="mt-4 text-xs leading-5 text-[var(--pulse-muted-2)]">
                Note: this button shows what the CTA would feel like, without collecting data.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-[var(--pulse-muted)]">
            © {new Date().getFullYear()} Pulse. Example product for an assignment.
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a
              className="text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)]"
              href="#product"
            >
              Dashboard
            </a>
            <a
              className="text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)]"
              href="#how"
            >
              How it works
            </a>
            <a
              className="text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)]"
              href="#top"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

