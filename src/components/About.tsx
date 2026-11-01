import { education } from "@/lib/data";
import { educationZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";

export default function About({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const edu = (isZh ? educationZh : education)[0];

  return (
    <section id="education">
      <h2 className="section-title">{isZh ? "學歷" : "Education"}</h2>

      <div className="experience-item">
        <div className="exp-header">
          <span className="exp-date">{edu.period}</span>
          <h3>{edu.school}</h3>
        </div>
        <p className="exp-org">
          {edu.degree} · {edu.location}
        </p>
        <ul className="exp-details">
          <li>GPA：{edu.gpa}</li>
          <li>{edu.highlight}</li>
        </ul>

        <div className="inline-group">
          <h3>{isZh ? "修習課程" : "Coursework"}</h3>
          <ul className="inline-list">
            {edu.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
