import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAG Course | Yuan-Hsiang (Oliver) Huang",
  description:
    "繁體中文 RAG 社課：從 PDF 文件、文字切割、embedding 到向量檢索，附投影片與學生練習教材。",
};

const lessons = [
  "為什麼需要 RAG：讓回答有指定文件作為依據",
  "RAG 流程：載入 PDF、切割文字與建立索引",
  "向量檢索：embedding、cosine similarity 與 Top-k",
  "動手練習：用 LangChain 與 ChromaDB 找回相關段落",
  "延伸方向：RAG 與外部工具的結合",
];

export default function RagCoursePage() {
  return (
    <article className="course-detail" lang="zh-Hant">
      <p className="course-back"><Link href="/courses">← 所有課程</Link></p>
      <span className="exp-date">
        <time dateTime="2026-10-19">2026/10/19</time> · NTU AI Club · RAG 技術社課
      </span>
      <h1>讓 AI 先找資料，再回答問題</h1>
      <p className="subtitle">
        從零理解 Retrieval-Augmented Generation（檢索增強生成），再用一份
        PDF 練習完成文件檢索流程。
      </p>

      <section className="course-section" aria-labelledby="rag-overview">
        <h2 className="section-title" id="rag-overview">這門課在做什麼</h2>
        <p>
          一般的 AI 回答不一定知道你手上的文件。這門課從「先找相關段落，再把段落交給
          AI」這個想法出發，逐步做出 PDF 載入、文字切割、向量索引與檢索。
          練習的重點是看懂系統找回了哪些文字，以及它們是否真的支持答案。
        </p>
      </section>

      <section className="course-section" aria-labelledby="rag-topics">
        <h2 className="section-title" id="rag-topics">課程內容</h2>
        <ol className="course-topics">
          {lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
        </ol>
      </section>

      <section className="course-section" aria-labelledby="rag-materials">
        <h2 className="section-title" id="rag-materials">課程教材</h2>
        <div className="course-resources">
          <div className="course-resource">
            <h3>課堂投影片</h3>
            <p>在瀏覽器直接閱讀 RAG 概念、流程圖與程式步驟。</p>
            <a href="/course-materials/rag/slides.html" target="_blank" rel="noopener noreferrer">
              開啟投影片 ↗
            </a>
          </div>
          <div className="course-resource">
            <h3>學生練習包</h3>
            <p>包含練習 notebook、8 份範例 PDF、投影片與執行說明；下載後解壓縮使用。</p>
            <a href="/course-materials/rag/rag_course_student.zip" download>
              下載練習包（ZIP） ↓
            </a>
          </div>
        </div>
        <p className="course-note">
          練習使用 VS Code、Python 3.13 與 uv。文件檢索可在本機完成；最後的
          OpenAI API 範例為選用內容，預設不會執行。
        </p>
      </section>
    </article>
  );
}
