import { personalInfo } from "@/lib/data";
import { personalInfoZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";

export default function Contact({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const info = isZh ? personalInfoZh : personalInfo;
  return (
    <section id="contact">
      <h2 className="section-title">{isZh ? "聯絡方式" : "Contact"}</h2>
      <p className="bio-text">
        {isZh
          ? "歡迎實習、研究合作，以及最佳化、資料科學或相關主題的交流。可以寄信到 "
          : "Open to internship opportunities, research collaborations, and conversations about optimization, data science, or related work. Reach me at "}
        <a href={`mailto:${info.email}`}>{info.email}</a>{isZh ? "。" : "."}
      </p>
      <p className="links">
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
