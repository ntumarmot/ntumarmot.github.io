import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "en");
  return {
    title: post ? `${post.title} | Oliver Huang` : "Blog | Oliver Huang",
    description: post?.description,
    alternates: {
      languages: {
        en: `/en/blog/${slug}`,
        "zh-Hant": `/blog/${slug}`,
      },
    },
  };
}

export default async function EnglishPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) notFound();

  return (
    <article className="post">
      <span className="exp-date">{formatDate(post.date, "en")}</span>
      <h1>{post.title}</h1>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <p className="links">
        <Link href="/en/blog">← All posts</Link>
        {"  ·  "}
        <Link href={`/blog/${slug}`} hrefLang="zh-Hant">
          閱讀中文版
        </Link>
      </p>
    </article>
  );
}
