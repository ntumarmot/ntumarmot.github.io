import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Idea Lab AI 助理課程 | Yuan-Hsiang (Oliver) Huang",
  description:
    "臺灣金融研訓院 Idea Lab AI 助理課程：無程式碼助理、ChatGPT Work、文件與表格示範，以及人工覆核。",
};

export default function IdeaLabCoursePage() {
  return (
    <article className="course-detail" lang="zh-Hant">
      <p className="course-back"><Link href="/courses">← 所有課程</Link></p>
      <span className="exp-date">
        <time dateTime="2026-07-27">2026/07/27</time>、
        <time dateTime="2026-07-31">2026/07/31</time> · 臺灣金融研訓院 Idea Lab
      </span>
      <h1>打造你專屬的 AI 助理</h1>
      <p className="subtitle">
        實習期間的 Idea Lab 分享：先設定一個能依指定文件回答的助理，
        再看 AI 如何協助完成多步驟的工作。
      </p>

      <section className="course-section" aria-labelledby="idealab-overview">
        <h2 className="section-title" id="idealab-overview">這門課在做什麼</h2>
        <p>
          課程從「每次都要重新交代背景與規則」這個工作情境出發，示範如何把角色、
          回答範圍與引用來源寫進助理設定。接著用文件整理與表格分析案例，
          說明 AI 可以幫忙完成哪些步驟，以及哪些結果仍需要人確認。
        </p>
      </section>

      <section className="course-section" aria-labelledby="idealab-topics">
        <h2 className="section-title" id="idealab-topics">課程內容</h2>
        <div className="course-resources">
          <div className="course-resource">
            <h3>無程式碼 AI 助理</h3>
            <p>
              比較 GPTs、Claude Projects 與 Gemini Gems；以法遵問答情境示範設定角色指令、
              加入參考文件，再用有答案、無答案與超出範圍的問題檢查回覆。
            </p>
          </div>
          <div className="course-resource">
            <h3>ChatGPT Work 工具分享</h3>
            <p>
              以拜會準備與課程損益整理示範多步驟工作：先列計畫、讀取資料、整理成果，
              再核對日期、數字與來源，並在寄信或採用結論前由人確認。
            </p>
          </div>
        </div>
      </section>

      <section className="course-section" aria-labelledby="idealab-takeaway">
        <h2 className="section-title" id="idealab-takeaway">課堂強調的檢查方式</h2>
        <ol className="course-topics">
          <li>先寫清楚任務、可使用的資料與希望得到的格式。</li>
          <li>用找不到答案的問題測試助理會不會承認資料不足。</li>
          <li>檢查輸出中的來源、日期、數字與未確定的假設。</li>
          <li>對外寄送或重要判斷，先由人閱讀並確認。</li>
        </ol>
      </section>

      <section className="course-section" aria-labelledby="idealab-materials">
        <h2 className="section-title" id="idealab-materials">課程投影片</h2>
        <div className="course-resources">
          <div className="course-resource">
            <h3>打造你專屬的 AI 助理</h3>
            <p>GPTs、Claude Projects、Gemini Gems 與法遵問答助理的現場實作。</p>
            <a href="/course-materials/idealab/ai-assistant.pdf" download>
              下載投影片（PDF） ↓
            </a>
          </div>
          <div className="course-resource">
            <h3>ChatGPT Work 工具分享</h3>
            <p>拜會準備與課程損益示範，以及多步驟任務中的人工確認。</p>
            <a href="/course-materials/idealab/chatgpt-work.pdf" download>
              下載投影片（PDF） ↓
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
