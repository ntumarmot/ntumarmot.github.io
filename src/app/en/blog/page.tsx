import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Yuan-Hsiang (Oliver) Huang",
  description: "Notes on optimization, data science, learning, and building things.",
  alternates: { languages: { en: "/en/blog", "zh-Hant": "/blog" } },
};

export default function EnglishBlogIndex() {
  const posts = getPosts("en");

  return (
    <section>
      <h1>Blog</h1>
      <p className="subtitle">
        Notes on optimization, data science, learning, and building things.
      </p>

      {posts.length === 0 ? (
        <p className="bio-text">No posts yet — check back soon.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/en/blog/${post.slug}`}
              className="post-item"
            >
              <span className="exp-date">{formatDate(post.date, "en")}</span>
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
