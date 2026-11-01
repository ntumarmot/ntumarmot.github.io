import Link from "next/link";
import type { SiteLocale } from "@/lib/i18n";

type SeberonProjectNavProps = {
  active: "overview" | "contributions";
  locale?: SiteLocale;
};

export default function SeberonProjectNav({
  active,
  locale = "zh",
}: SeberonProjectNavProps) {
  const isZh = locale === "zh";
  const base = isZh ? "/projects/seberon" : "/en/projects/seberon";
  const counterpart = isZh ? "/en/projects/seberon" : "/projects/seberon";
  const counterpartHref =
    active === "contributions" ? `${counterpart}/contributions` : counterpart;

  return (
    <nav
      className="seberon-subnav"
      aria-label={isZh ? "華祺排程系統專案頁面" : "Huachi scheduling project pages"}
    >
      <Link
        href={base}
        aria-current={active === "overview" ? "page" : undefined}
      >
        {isZh ? "專案介紹" : "Overview"}
      </Link>
      <Link
        href={`${base}/contributions`}
        aria-current={active === "contributions" ? "page" : undefined}
      >
        {isZh ? "我的貢獻" : "My contributions"}
      </Link>
      <Link href={isZh ? "/zh#projects" : "/#projects"}>
        {isZh ? "回作品列表" : "Back to projects"}
      </Link>
      <Link href={counterpartHref} hrefLang={isZh ? "en" : "zh-Hant"}>
        {isZh ? "English" : "中文"}
      </Link>
    </nav>
  );
}
