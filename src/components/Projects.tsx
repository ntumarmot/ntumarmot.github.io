import { projects } from "@/lib/data";
import { projectsZh } from "@/lib/data-zh";
import type { SiteLocale } from "@/lib/i18n";
import Link from "next/link";

export default function Projects({ locale = "en" }: { locale?: SiteLocale }) {
  const isZh = locale === "zh";
  const items = isZh ? projectsZh : projects;
  return (
    <section id="projects">
      <h2 className="section-title">{isZh ? "精選專案" : "Selected work"}</h2>

      {items.map((project) => (
        <div key={project.id} className="experience-item">
          <div className="exp-header">
            <span className="exp-date">
              {project.period} · {project.status}
            </span>
            <h3>
              {project.icon} {project.title}
            </h3>
          </div>
          <p className="exp-org">{project.subtitle}</p>

          <ul className="exp-details">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <div className="inline-group">
            <ul className="inline-list">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {(project.caseStudy || project.github || project.demo) && (
            <p className="links">
              {project.caseStudy && (
                <Link
                  href={isZh ? project.caseStudy : "/en/projects/seberon"}
                >
                  {isZh ? "查看專案介紹" : "Project case study"}
                </Link>
              )}
              {project.caseStudy && (project.github || project.demo) && "  ·  "}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.github && project.demo && "  ·  "}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  {isZh ? "線上展示" : "Live demo"}
                </a>
              )}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
