import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses | Yuan-Hsiang (Oliver) Huang",
  description: "Courses and teaching materials by Oliver Huang.",
  alternates: { languages: { en: "/en/courses", "zh-Hant": "/courses" } },
};

export default function EnglishCoursesPage() {
  return (
    <section aria-labelledby="courses-title-en">
      <h1 id="courses-title-en">Courses</h1>
      <p className="subtitle">Courses I have taught, with materials you can explore.</p>
      <div className="post-list">
        <Link href="/en/courses/rag" className="post-item"><span className="exp-date"><time dateTime="2026-10-19">Oct. 19, 2026</time> · NTU AI Club · AI / Retrieval</span><span className="post-title">RAG: Let AI Find the Evidence Before Answering</span><span className="post-desc">Start with PDFs, text chunking, and vector retrieval, then build a small RAG pipeline.</span></Link>
        <Link href="/en/courses/idealab" className="post-item"><span className="exp-date"><time dateTime="2026-07-27">July 27</time> and <time dateTime="2026-07-31">31, 2026</time> · TABF Idea Lab</span><span className="post-title">Build Your Own AI Assistant</span><span className="post-desc">Move from no-code assistants to multi-step AI work through financial-industry examples, validation, and human review.</span></Link>
      </div>
    </section>
  );
}
