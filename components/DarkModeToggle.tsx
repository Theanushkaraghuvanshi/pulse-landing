"use client";

import { useCallback } from "react";

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
  const toggleTheme = useCallback(() => {
    const nextTheme: "light" | "dark" =
      document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("pulse_theme", nextTheme);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200/70 bg-white/80 text-zinc-900 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-50"
    >
      <span className="dark:hidden">
        <SunIcon />
      </span>
      <span className="hidden dark:inline-flex">
        <MoonIcon />
      </span>
    </button>
  );
}

