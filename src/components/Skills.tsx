import { skills } from "@/lib/data";
import { skillsZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";

export default function Skills({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const skillSet = isZh ? skillsZh : skills;
  return (
    <section id="skills">
      <h2 className="section-title">{isZh ? "技能與工具" : "Toolkit"}</h2>

      <div className="interests-grid">
        <div className="inline-group">
          <h3>{isZh ? "程式語言" : "Programming"}</h3>
          <ul className="inline-list">
            {skillSet.programming.map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>{isZh ? "工具與平台" : "Tools & platforms"}</h3>
          <ul className="inline-list">
            {skillSet.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>{isZh ? "AI 輔助開發" : "AI-Assisted Development"}</h3>
          <ul className="inline-list">
            {skillSet.aiTools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>Python</h3>
          <ul className="inline-list">
            {skillSet.packages.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="inline-group">
          <h3>{isZh ? "語言能力" : "Languages"}</h3>
          <ul className="inline-list">
            {skillSet.languages.map((l) => (
              <li key={l.lang}>
                {l.flag} {l.lang} — {l.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
