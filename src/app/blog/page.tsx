import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "文章 | 黃元翔（Oliver Huang）",
  description: "記錄最佳化、資料科學、學習與實作的文章。",
  alternates: { languages: { en: "/en/blog", "zh-Hant": "/blog" } },
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <section>
      <h1>文章</h1>
      <p className="subtitle">
        記錄我對最佳化、資料科學、學習與實作的想法。
      </p>

      {posts.length === 0 ? (
        <p className="bio-text">目前還沒有文章，之後再回來看看。</p>
      ) : (
        <div className="post-list">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-item">
              <span className="exp-date">{formatDate(p.date)}</span>
              <span className="post-title">{p.title}</span>
              {p.description && (
                <span className="post-desc">{p.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
