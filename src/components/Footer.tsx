"use client";

import { personalInfo } from "@/lib/data";
import type { SiteLocale } from "@/lib/i18n";

export default function Footer({ locale = "en" }: { locale?: SiteLocale }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {personalInfo.name}.{" "}
        <a
          href="#"
          className="party-link"
          onClick={(e) => {
            e.preventDefault();
            document.body.classList.toggle("party");
          }}
        >
          {locale === "zh" ? "彩蛋？" : "party?"}
        </a>
      </p>
    </footer>
  );
}
