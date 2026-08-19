"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const COLORS = ["#a855f7", "#f472b6", "#60a5fa", "#34d399", "#f59e0b"];

function startConfetti(container: HTMLDivElement) {
  container.innerHTML = "";

  const pieces = 90;
  const width = container.clientWidth || window.innerWidth;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("div");
    piece.className = "confettiPiece";

    const x = Math.random() * width;
    const dx = (Math.random() - 0.5) * 220; // px drift
    const w = 5 + Math.random() * 7;
    const h = 8 + Math.random() * 10;
    const dur = 700 + Math.random() * 900;
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];

    const rot = Math.floor(Math.random() * 180);

    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--dx", `${dx}px`);
    piece.style.setProperty("--w", `${w}px`);
    piece.style.setProperty("--h", `${h}px`);
    piece.style.setProperty("--dur", `${dur}ms`);
    piece.style.setProperty("--c", c);
    piece.style.transform = `translate(0px, 0px) rotate(${rot}deg)`;

    container.appendChild(piece);
  }
}

export default function EasterEgg() {
  const [unlocked, setUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const normalizedSequence = useMemo(() => KONAMI_SEQUENCE, []);

  useEffect(() => {
    let pos = 0;

    const handler = (e: KeyboardEvent) => {
      const key =
        e.key.length === 1 ? e.key.toLowerCase() : e.key; // normalize 'B'/'b'

      const expected = normalizedSequence[pos];
      if (key === expected) {
        pos += 1;
      } else {
        pos = key === normalizedSequence[0] ? 1 : 0;
      }

      if (pos === normalizedSequence.length) {
        pos = 0;
        setUnlocked(true);
        if (containerRef.current) startConfetti(containerRef.current);
        window.setTimeout(() => setUnlocked(false), 2600);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [normalizedSequence]);

  return (
    <>
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 z-[60] pointer-events-none"
      />
      {unlocked ? (
        <div className="fixed left-1/2 top-5 z-[70] w-[min(92vw,560px)] -translate-x-1/2 rounded-2xl border border-violet-500/30 bg-[var(--pulse-surface-80)] px-4 py-3 text-center text-sm font-semibold text-[var(--foreground)] shadow-sm backdrop-blur">
          Secret unlocked. Nice engineering instincts.
        </div>
      ) : null}
    </>
  );
}

