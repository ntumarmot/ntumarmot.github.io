import { experience } from "@/lib/data";
import { experienceZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";

export default function Experience({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const items = isZh ? experienceZh : experience;
  return (
    <section id="experience">
      <h2 className="section-title">{isZh ? "經歷" : "Experience"}</h2>

      {items.map((item) => (
        <div key={item.org} className="experience-item">
          <div className="exp-header">
            <span className="exp-date">{item.period}</span>
            <h3>{item.org}</h3>
          </div>
          <p className="exp-org">
            {item.role} · {item.location}
          </p>
          {item.bullets.length > 0 && (
            <ul className="exp-details">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
