import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatHobbyDate, getHobbyPost, getHobbyPosts } from "@/lib/hobbies";

export function generateStaticParams() { return getHobbyPosts("en").map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getHobbyPost(slug, "en");
  return { title: post ? `${post.title} | Hobbies | Oliver Huang` : "Hobbies | Oliver Huang", description: post?.description, alternates: { languages: { en: `/en/hobbies/${slug}`, "zh-Hant": `/hobbies/${slug}` } } };
}

export default async function EnglishHobbyPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getHobbyPost(slug, "en");
  if (!post) notFound();
  return <article className="post"><span className="exp-date">{formatHobbyDate(post.date, "en")}</span><h1>{post.title}</h1><div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} /><p className="links"><Link href="/en/hobbies">← All hobby posts</Link>{"  ·  "}<Link href={`/hobbies/${slug}`} hrefLang="zh-Hant">中文版</Link></p></article>;
}
