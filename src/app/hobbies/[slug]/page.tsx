import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatHobbyDate,
  getHobbyPost,
  getHobbyPosts,
} from "@/lib/hobbies";

const EMPTY_COLLECTION_PLACEHOLDER = "__placeholder__";

export function generateStaticParams() {
  const posts = getHobbyPosts();
  if (posts.length === 0) {
    return [{ slug: EMPTY_COLLECTION_PLACEHOLDER }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getHobbyPost(slug);
  return {
    title: post ? `${post.title} | 興趣 | 黃元翔` : "興趣 | 黃元翔",
    description: post?.description,
    alternates: { languages: { en: `/en/hobbies/${slug}`, "zh-Hant": `/hobbies/${slug}` } },
  };
}

export default async function HobbyPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === EMPTY_COLLECTION_PLACEHOLDER) notFound();
  const post = getHobbyPost(slug);
  if (!post) notFound();

  return (
    <article className="post">
      <span className="exp-date">{formatHobbyDate(post.date)}</span>
      <h1>{post.title}</h1>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <p className="links">
        <Link href="/hobbies">← 所有興趣文章</Link>{"  ·  "}<Link href={`/en/hobbies/${slug}`} hrefLang="en">Read in English</Link>
      </p>
    </article>
  );
}
