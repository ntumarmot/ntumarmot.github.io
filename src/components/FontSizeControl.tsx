"use client";

import { useEffect, useState } from "react";
import type { SiteLocale } from "@/lib/i18n";

// Text scale steps. Index 1 (1.0) is the default; matches the pre-paint
// script in layout.tsx which applies the saved value before first render.
const STEPS = [0.9, 1, 1.12, 1.25, 1.4];
const DEFAULT = 1;

function apply(scale: number) {
  document.documentElement.style.setProperty("--font-scale", String(scale));
}

export default function FontSizeControl({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const [idx, setIdx] = useState(DEFAULT);

  // Sync with whatever the pre-paint script already applied.
  useEffect(() => {
    let frame = 0;
    try {
      const saved = parseFloat(localStorage.getItem("fontScale") ?? "");
      const i = STEPS.indexOf(saved);
      if (i !== -1) frame = requestAnimationFrame(() => setIdx(i));
    } catch {}
    return () => cancelAnimationFrame(frame);
  }, []);

  const set = (i: number) => {
    const clamped = Math.max(0, Math.min(STEPS.length - 1, i));
    setIdx(clamped);
    apply(STEPS[clamped]);
    try {
      localStorage.setItem("fontScale", String(STEPS[clamped]));
    } catch {}
  };

  return (
    <div className="font-control" role="group" aria-label={isZh ? "文字大小" : "Text size"}>
      <button
        type="button"
        onClick={() => set(idx - 1)}
        disabled={idx === 0}
        aria-label={isZh ? "縮小文字" : "Smaller text"}
        title={isZh ? "縮小文字" : "Smaller text"}
      >
        A<span className="font-control-minus">−</span>
      </button>
      <button
        type="button"
        onClick={() => set(DEFAULT)}
        disabled={idx === DEFAULT}
        aria-label={isZh ? "重設文字大小" : "Reset text size"}
        title={isZh ? "重設文字大小" : "Reset text size"}
      >
        A
      </button>
      <button
        type="button"
        onClick={() => set(idx + 1)}
        disabled={idx === STEPS.length - 1}
        aria-label={isZh ? "放大文字" : "Larger text"}
        title={isZh ? "放大文字" : "Larger text"}
      >
        A<span className="font-control-plus">+</span>
      </button>
    </div>
  );
}
