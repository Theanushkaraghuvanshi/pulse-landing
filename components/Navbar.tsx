import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--pulse-border)] bg-[var(--pulse-surface-80)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#top"
          className="group inline-flex items-center gap-2"
          aria-label="Pulse home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              className="fill-current"
            >
              <path d="M3 12c3-7 7-9 9-9s6 2 9 9c-3 7-7 9-9 9s-6-2-9-9Z" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
            Pulse
          </span>
          <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-[var(--pulse-violet-text)]">
            Beta
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#product"
            className="text-sm font-medium text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-0 rounded-lg"
          >
            Product
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-0 rounded-lg"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[var(--pulse-muted)] transition-colors hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-0 rounded-lg"
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-[var(--pulse-cta-bg)] px-4 py-2 text-sm font-semibold text-[var(--pulse-cta-fg)] shadow-sm transition hover:bg-[var(--pulse-cta-hover-bg)] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-0"
          >
            Start free
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="md:hidden rounded-full bg-[var(--pulse-cta-bg)] px-4 py-2 text-sm font-semibold text-[var(--pulse-cta-fg)] shadow-sm transition hover:bg-[var(--pulse-cta-hover-bg)] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:ring-offset-0"
          >
            Start free
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

