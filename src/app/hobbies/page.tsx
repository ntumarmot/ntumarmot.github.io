import type { Metadata } from "next";
import Link from "next/link";
import { formatHobbyDate, getHobbyPosts } from "@/lib/hobbies";

export const metadata: Metadata = {
  title: "興趣 | 黃元翔",
  description: "課業與工作以外的興趣與生活記錄。",
  alternates: { languages: { en: "/en/hobbies", "zh-Hant": "/hobbies" } },
};

export default function HobbiesPage() {
  const posts = getHobbyPosts();

  return (
    <section aria-labelledby="hobbies-title">
      <h1 id="hobbies-title">興趣</h1>
      <p className="subtitle">課業與工作以外的興趣與生活記錄。</p>

      {posts.length === 0 ? (
        <p className="bio-text">目前還沒有興趣文章，之後再回來看看。</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/hobbies/${post.slug}`}
              className="post-item"
            >
              <span className="exp-date">{formatHobbyDate(post.date)}</span>
              <span className="post-title">{post.title}</span>
              {post.description && (
                <span className="post-desc">{post.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
