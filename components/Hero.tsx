export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/30 via-fuchsia-500/10 to-transparent"
      />
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl dark:from-violet-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-12 md:px-6 md:pb-20 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-white/60 px-3 py-1 text-xs font-medium text-violet-700 backdrop-blur dark:bg-zinc-900/40 dark:text-violet-300">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
              Engineering health, explained in one glance
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl dark:text-zinc-50">
              See how your team actually works.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-zinc-700 md:text-xl dark:text-zinc-300">
              Pulse turns day-to-day work signals into engineering health dashboards
              your team can trust—so you can spot friction before it becomes
              a fire drill.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500/40 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-white"
              >
                Start your free trial
              </a>
              <a
                href="#product"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/60 px-5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-zinc-800/80 dark:bg-white/5 dark:text-zinc-50 dark:hover:bg-white/10"
              >
                See the dashboard
              </a>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              No fake testimonials. The dashboard below is labeled as{" "}
              <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                example data
              </span>
              .
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-zinc-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                      Pulse Demo
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Example dashboard
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                  Live-ish
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-3 dark:border-zinc-800/70 dark:bg-white/5">
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    PR cycle
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    3.2d
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
                </div>

                <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-3 dark:border-zinc-800/70 dark:bg-white/5">
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Focus time
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    4.6h
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-zinc-200/70 dark:bg-zinc-800/70" />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-200/70 bg-white/70 p-3 dark:border-zinc-800/70 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Sprint velocity
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                      Example trend
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20" />
                </div>

                <div className="mt-3 flex items-end gap-2">
                  {[0.35, 0.65, 0.48, 0.8, 0.6, 0.9].map((v, idx) => (
                    <div
                      key={idx}
                      className="w-full rounded-full bg-gradient-to-b from-violet-500/70 to-fuchsia-500/70 dark:from-violet-400/70 dark:to-fuchsia-400/70"
                      style={{ height: `${Math.round(v * 36)}px` }}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                This card is a UI mock—meant to show craft and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

