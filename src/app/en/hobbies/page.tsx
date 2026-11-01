import type { Metadata } from "next";
import Link from "next/link";
import { formatHobbyDate, getHobbyPosts } from "@/lib/hobbies";

export const metadata: Metadata = { title: "Hobbies | Yuan-Hsiang Huang", description: "Stories and notes about interests beyond school and work.", alternates: { languages: { en: "/en/hobbies", "zh-Hant": "/hobbies" } } };

export default function EnglishHobbiesPage() {
  const posts = getHobbyPosts("en");
  return <section aria-labelledby="hobbies-title-en"><h1 id="hobbies-title-en">Hobbies</h1><p className="subtitle">Stories and notes about life beyond school and work.</p>{posts.length === 0 ? <p className="bio-text">No hobby posts yet — check back soon.</p> : <div className="post-list">{posts.map((post) => <Link key={post.slug} href={`/en/hobbies/${post.slug}`} className="post-item"><span className="exp-date">{formatHobbyDate(post.date, "en")}</span><span className="post-title">{post.title}</span>{post.description && <span className="post-desc">{post.description}</span>}</Link>)}</div>}</section>;
}
