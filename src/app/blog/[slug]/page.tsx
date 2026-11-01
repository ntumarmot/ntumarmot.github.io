import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post ? `${post.title} | 黃元翔` : "文章 | 黃元翔",
    description: post?.description,
    alternates: {
      languages: {
        en: `/en/blog/${slug}`,
        "zh-Hant": `/blog/${slug}`,
      },
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="post">
      <span className="exp-date">{formatDate(post.date)}</span>
      <h1>{post.title}</h1>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <p className="links">
        <Link href="/blog">← 所有文章</Link>
        {"  ·  "}
        <Link href={`/en/blog/${slug}`} hrefLang="en">
          Read in English
        </Link>
      </p>
    </article>
  );
}
