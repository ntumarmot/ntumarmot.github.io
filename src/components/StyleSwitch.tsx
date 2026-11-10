"use client";

import { useEffect, useState } from "react";
import type { SiteLocale } from "@/lib/i18n";

// Visual style: "modern" (warm-humanist sans) is the default and needs no
// class; "classic" (Cinzel / Cormorant, parchment) adds body.theme-classic.
// The pre-paint script in layout.tsx applies the saved choice before
// first render.
type Style = "classic" | "modern";

export default function StyleSwitch({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const [style, setStyle] = useState<Style>("modern");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setStyle(document.body.classList.contains("theme-classic") ? "classic" : "modern");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const set = (s: Style) => {
    document.body.classList.toggle("theme-classic", s === "classic");
    setStyle(s);
    try {
      localStorage.setItem("style", s);
    } catch {}
  };

  return (
    <div className="style-switch" role="group" aria-label={isZh ? "視覺風格" : "Visual style"}>
      <button
        type="button"
        onClick={() => set("modern")}
        aria-pressed={style === "modern"}
        title={isZh ? "手帖風格" : "Notebook style"}
      >
        {isZh ? "手帖" : "Notebook"}
      </button>
      <button
        type="button"
        onClick={() => set("classic")}
        aria-pressed={style === "classic"}
        title={isZh ? "經典襯線風格" : "Classic serif style"}
      >
        {isZh ? "經典" : "Classic"}
      </button>
    </div>
  );
}
