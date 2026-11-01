import { personalInfo } from "@/lib/data";
import { personalInfoZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";

export default function Hero({ locale = "en" }: { locale?: SiteLocale }) {
  const info = locale === "zh" ? personalInfoZh : personalInfo;
  const isZh = locale === "zh";
  return (
    <section id="top">
      <h1>
        {info.name}
        <span className="name-native">
          {" · "}
          {info.nameZh}
        </span>
      </h1>
      <p className="subtitle">
        {info.title} · {info.university}
      </p>

      <p className="bio-text">{info.bio}</p>

      <p className="callout">
        {isZh ? "歡迎實習與研究合作機會。" : "Open to internships & research collaborations."}
      </p>

      <p className="links">
        <a href={`mailto:${info.email}`}>{info.email}</a>
        {"  ·  "}
        <a href={info.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {"  ·  "}
        <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {"  ·  "}
        {info.location}
      </p>
    </section>
  );
}
