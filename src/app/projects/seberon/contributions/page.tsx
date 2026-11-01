import type { Metadata } from "next";
import SeberonProjectNav from "@/components/SeberonProjectNav";
import {
  contributionStats,
  contributionTimeline,
  contributions,
} from "@/lib/seberon";

export const metadata: Metadata = {
  title: "黃元翔的華祺排程系統貢獻 | Oliver Huang",
  description:
    "黃元翔自 2026 年 3 月起，在華祺螺絲工廠生產排程系統中完成的資料、產能、機台分配、驗證與製令整合工作。",
};

const contextSteps = [
  {
    label: "01 · 公司資料",
    title: "先讀懂工廠提供的資料",
    description:
      "輸入包含客戶訂單、工廠製令、產品規格、製程順序、原料與半成品關係，以及每台機器能做什麼、速度多快。",
  },
  {
    label: "02 · 整廠排程",
    title: "安排每站每天要做多少",
    description:
      "第一層排程同時考慮交期、庫存、工作站產能與上下游物料，決定每天各站應生產哪些物料。",
  },
  {
    label: "03 · 機台分配",
    title: "把產量落到實際機台",
    description:
      "第二層依機台規格、可用工時與換線時間，把工作站目標轉成各台機器可以執行的任務。",
  },
];

export default function SeberonContributionsPage() {
  return (
    <article className="seberon-case" lang="zh-Hant">
      <SeberonProjectNav active="contributions" />

      <header className="seberon-contribution-hero">
        <p className="seberon-eyebrow">2026 / 03 — 2026 / 11</p>
        <h1>我在華祺排程專案中完成的工作</h1>
        <p className="seberon-lead">
          我的工作主要位在兩個接點：把公司原始資料轉成排程模型看得懂的數字，以及把整廠排程的產量進一步分配到站內機台。我也建立驗證與測試工具，確認算出的結果真的符合產能與物料限制。
        </p>
      </header>

      <section className="seberon-section" aria-labelledby="contribution-context">
        <div className="seberon-section-heading">
          <span>01</span>
          <div>
            <h2 id="contribution-context">先用一分鐘理解這個專案</h2>
            <p>華祺收到螺絲訂單後，不只要決定哪一天生產，還要處理多道製程、半成品銜接、工作站產能與機台規格。</p>
          </div>
        </div>
        <div className="seberon-context-grid">
          {contextSteps.map((step) => (
            <article key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-records">
        <div className="seberon-section-heading">
          <span>02</span>
          <div>
            <h2 id="contribution-records">Git 可確認的貢獻範圍</h2>
            <p>統計範圍為 2026/3/1 至 2026/11/1，已排除 3 個 stash／備份快照與 1 個純合併紀錄。</p>
          </div>
        </div>
        <div className="seberon-stat-grid">
          {contributionStats.map((stat) => (
            <div className="seberon-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
        <p className="seberon-note">
          3 月、5 月與 6 月沒有找到以黃元翔 Git 身分提交的 commit；這只能說明缺少 Git 證據，不能證明當時完全沒有參與。
        </p>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-timeline">
        <div className="seberon-section-heading">
          <span>03</span>
          <div>
            <h2 id="contribution-timeline">從模型基礎，走到公司資料整合</h2>
            <p>工作內容隨專案推進，從單站驗證逐步延伸到實廠產能參數、機台分配與公司製令。</p>
          </div>
        </div>
        <ol className="seberon-timeline">
          {contributionTimeline.map((item) => (
            <li key={item.month}>
              <time>{item.month}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-details">
        <div className="seberon-section-heading">
          <span>04</span>
          <div>
            <h2 id="contribution-details">六項主要貢獻</h2>
            <p>每一項都分成原本的問題、我實際完成的工作、帶來的價值與一個小例子，讓沒有排程背景的人也能理解。</p>
          </div>
        </div>

        <div className="seberon-contribution-list">
          {contributions.map((contribution) => (
            <article className="seberon-contribution" key={contribution.number}>
              <header>
                <span>{contribution.number}</span>
                <div>
                  <h3>{contribution.title}</h3>
                  <p>{contribution.subtitle}</p>
                </div>
              </header>
              <div className="seberon-contribution-body">
                <div>
                  <h4>原本的問題</h4>
                  <p>{contribution.problem}</p>
                </div>
                <div>
                  <h4>我做了什麼</h4>
                  <p>{contribution.work}</p>
                </div>
                <div>
                  <h4>帶來的價值</h4>
                  <p>{contribution.value}</p>
                </div>
              </div>
              <aside>
                <strong>小例子</strong>
                <p>{contribution.example}</p>
              </aside>
            </article>
          ))}
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-evidence">
        <div className="seberon-section-heading">
          <span>05</span>
          <div>
            <h2 id="contribution-evidence">確認過的事，和證據的邊界</h2>
            <p>正式 Git 歷史可以確認提交內容與時間；本機探索資料只能作為補充線索，不能當成相同強度的作者證據。</p>
          </div>
        </div>
        <div className="seberon-evidence-grid">
          <article>
            <h3>Git 可以確認</h3>
            <p>單站驗證、換線參數、加工時間與產能工具、機台分配、公司訂單整合、資料文件與展示材料，都有對應的作者提交紀錄。</p>
          </article>
          <article>
            <h3>本機探索內容</h3>
            <p>
              <code>workspace/yuanhsiang</code> 還有 HiGHS 子問題求解、測試 instance 與產能分析；路徑與 README 顯示很可能是個人工作，但未提交內容無法由 Git 完整確認日期與作者。
            </p>
          </article>
        </div>
      </section>

      <blockquote className="seberon-resume-line">
        負責華祺螺絲工廠生產排程系統的資料前處理、產能參數建模、單站機台分配、排程可行性驗證及公司製令整合。
      </blockquote>
    </article>
  );
}
