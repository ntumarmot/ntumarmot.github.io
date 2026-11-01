"use client";

import { useEffect, useState } from "react";
import type { SiteLocale } from "@/lib/i18n";

export default function ThemeToggle({ locale = "en" }: { locale?: SiteLocale }) {
  const [dark, setDark] = useState(false);

  // Sync with the class set pre-paint in layout.
  useEffect(() => setDark(document.body.classList.contains("dark")), []);

  const toggle = () => {
    const d = document.body.classList.toggle("dark");
    setDark(d);
    localStorage.setItem("theme", d ? "dark" : "light");
  };

  return (
    <label className="toggle" aria-label={locale === "zh" ? "切換深色模式" : "Toggle dark mode"}>
      <input type="checkbox" checked={dark} onChange={toggle} />
      <span className="slider" />
    </label>
  );
}
