import Link from "next/link";
import type { SiteLocale } from "@/lib/i18n";

type NavbarProps = {
  locale?: SiteLocale;
  languageHref?: string;
};

export default function Navbar({ locale = "en", languageHref }: NavbarProps) {
  const isZh = locale === "zh";
  const home = isZh ? "/zh" : "/";
  const navLinks = [
    { href: `${home}#education`, label: isZh ? "學歷" : "Education" },
    { href: `${home}#projects`, label: isZh ? "專案" : "Projects" },
    { href: `${home}#experience`, label: isZh ? "經歷" : "Experience" },
    { href: `${home}#skills`, label: isZh ? "技能" : "Skills" },
    { href: isZh ? "/courses" : "/en/courses", label: isZh ? "課程" : "Courses" },
    { href: isZh ? "/hobbies" : "/en/hobbies", label: isZh ? "興趣" : "Hobbies" },
    { href: isZh ? "/blog" : "/en/blog", label: isZh ? "文章" : "Blog" },
  ];

  return (
    <header>
      <nav>
        <Link href={home} className="logo">
          Oliver Huang
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            href={languageHref ?? (isZh ? "/" : "/zh")}
            className="language-link"
            hrefLang={isZh ? "en" : "zh-Hant"}
            aria-label={isZh ? "切換至英文版" : "Switch to Chinese"}
          >
            {isZh ? "EN" : "中文"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
