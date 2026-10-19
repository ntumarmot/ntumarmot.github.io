import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses | Yuan-Hsiang (Oliver) Huang",
  description: "Courses and teaching materials by Oliver Huang.",
};

export default function CoursesPage() {
  return (
    <section aria-labelledby="courses-title">
      <h1 id="courses-title">Courses</h1>
      <p className="subtitle">Courses I have taught, with materials you can explore.</p>

      <div className="post-list">
        <Link href="/courses/rag" className="post-item">
          <span className="exp-date">
            <time dateTime="2026-10-19">2026/10/19</time> · NTU AI Club · AI / Retrieval
          </span>
          <span className="post-title">RAG: 讓 AI 先找資料，再回答問題</span>
          <span className="post-desc">
            從 PDF、文字切割與向量檢索開始，動手完成一個簡單的 RAG 流程。
          </span>
        </Link>
        <Link href="/courses/idealab" className="post-item">
          <span className="exp-date">
            <time dateTime="2026-07-27">2026/07/27</time>、
            <time dateTime="2026-07-31">2026/07/31</time> · 臺灣金融研訓院 Idea Lab
          </span>
          <span className="post-title">打造你專屬的 AI 助理</span>
          <span className="post-desc">
            從無程式碼助理到能執行多步驟工作的 AI，透過金融業情境練習設定、驗證與人工覆核。
          </span>
        </Link>
      </div>
    </section>
  );
}
