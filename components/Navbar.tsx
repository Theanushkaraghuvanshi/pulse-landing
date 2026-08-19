import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-black/40">
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
          <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Pulse
          </span>
          <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-700 dark:text-violet-300">
            Beta
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#product"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
          >
            Product
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Start free
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="md:hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Start free
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

