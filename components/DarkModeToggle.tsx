"use client";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="fill-current"
    >
      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" />
      <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4 11a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm14 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.343 5.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 7.05 7.757l-.707-.707a1 1 0 0 1 0-1.414ZM15.53 14.823a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM5.636 17.657a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM14.823 8.47a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="fill-current"
    >
      <path d="M21 14.5A9 9 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
    </svg>
  );
}

export default function DarkModeToggle() {
  const toggleTheme = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !currentlyDark;
    document.documentElement.classList.toggle("dark", nextDark);

    // Best-effort persistence (don’t break toggling if storage is blocked).
    try {
      localStorage.setItem("pulse_theme", nextDark ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-80)] text-[var(--foreground)] shadow-sm backdrop-blur"
    >
      <span className="pulseIconLight">
        <SunIcon />
      </span>
      <span className="pulseIconDark">
        <MoonIcon />
      </span>
    </button>
  );
}

