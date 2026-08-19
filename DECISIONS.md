# DECISIONS (Pulse — Frontend Challenge Part 2)

## 1) Why this approach (instead of the obvious alternatives)
I chose **Next.js (App Router) + Tailwind + Framer Motion** because it lets me ship a “Product Hunt / wow” landing page quickly *with real implementation detail*:
- **Tailwind** made it fast to achieve consistent spacing, typography, and responsive layouts without fighting custom CSS.
- **Framer Motion** was used for a single, tasteful micro-interaction (the animated chart bars) so the page feels engineered rather than static.
- **Next.js** provided a clean project structure and deployment-friendly setup (Vercel-ready).

Alternative considered: “plain HTML/CSS”. That would be faster to write for a single page, but I would likely lose iteration speed on responsive styling and micro-interactions (and it’s harder to keep the codebase organized as components grow).

## 2) One trade-off (and what I’d do in a real week)
**Trade-off:** The dashboard and metrics are **explicitly labeled as “example data”** and the interactions are UI-mock only.
- This avoids inventing “real” user metrics or making claims that the assignment rules discourage.
- It also keeps the demo resilient and finishable under time constraints.

**In a real week,** I would connect the mock dashboard to either:
- a small, deterministic demo dataset (so the numbers are honest but still dynamic), or
- a simple API-backed “demo mode” (so the charts update without pretending they come from a real company backend).

## 3) Where AI tools were used (and what I personally verified)
I used AI assistance to speed up:
- initial component scaffolding and layout ideas (Hero, dashboard card structure, and copy variants),
- selecting appropriate Tailwind patterns for consistent dark-mode styling.

Afterward, I personally verified:
- **dark mode is all-or-nothing** by switching the theme via `html.dark` (not a partially-applied approach),
- the page renders without layout overflow (mobile + desktop),
- the only motion interaction is the chart bar reveal, and
- the dashboard copy consistently labels values as **example data**.

