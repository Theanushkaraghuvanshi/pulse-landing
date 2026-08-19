"use client";

import { motion, useReducedMotion } from "framer-motion";

const velocityBars = [0.35, 0.65, 0.48, 0.82, 0.6, 0.9];
const maxBarHeight = 96; // px

export default function ProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="product" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
              A dashboard that looks shipped.
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-[var(--pulse-muted)]">
              This is an interactive UI mock of Pulse. It’s intentionally labeled
              with <span className="font-semibold">example data</span> so the
              design feels real without pretending it’s live.
            </p>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-2xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] px-4 py-2 text-sm text-[var(--pulse-muted)] backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
            Scroll to reveal the chart
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {/* Main chart card */}
          <div className="md:col-span-3">
            <div className="rounded-3xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Sprint velocity
                  </p>
                  <p className="text-xs text-[var(--pulse-muted-2)]">
                    Example data (not live)
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--pulse-muted)]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                    6 weeks
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end gap-2">
                  {velocityBars.map((v, idx) => (
                    <motion.div
                      key={idx}
                      initial={
                        reduceMotion ? { height: maxBarHeight * v } : { height: 0 }
                      }
                      animate={
                        reduceMotion ? { height: maxBarHeight * v } : undefined
                      }
                      whileInView={
                        reduceMotion
                          ? undefined
                          : {
                              height: maxBarHeight * v,
                            }
                      }
                      viewport={{ once: true, amount: 0.6 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              duration: 0.8,
                              delay: idx * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }
                      }
                      className="w-full rounded-full bg-gradient-to-b from-violet-500/90 to-fuchsia-500/80"
                      style={{ maxHeight: maxBarHeight }}
                      aria-label={`Example velocity bar ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--pulse-muted-2)]">
                  <span>Week -6</span>
                  <span>Week 0</span>
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-70)] p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-[var(--pulse-muted-2)]">
                        What this suggests
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                        Fewer blockers, smoother throughput
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side metric tiles */}
          <div className="md:col-span-2">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] p-5 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  PR cycle time
                </p>
                <p className="mt-1 text-xs text-[var(--pulse-muted-2)]">
                  Example: from opened to merged
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <div className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    3.2d
                  </div>
                  <div className="pb-1 text-xs font-medium text-[var(--pulse-emerald-text)]">
                    -12%
                  </div>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[var(--pulse-border)]">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--pulse-border)] bg-[var(--pulse-surface-60)] p-5 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Focus time
                </p>
                <p className="mt-1 text-xs text-[var(--pulse-muted-2)]">
                  Example: uninterrupted work windows
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <div className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    4.6h
                  </div>
                  <div className="pb-1 text-xs font-medium text-[var(--pulse-violet-text)]">
                    stable
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${
                        i % 3 === 0
                          ? "bg-violet-500"
                          : "bg-[var(--pulse-border)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

