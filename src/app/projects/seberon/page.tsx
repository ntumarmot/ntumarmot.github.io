import type { Metadata } from "next";
import Image from "next/image";
import SeberonProjectNav from "@/components/SeberonProjectNav";
import { projectStats } from "@/lib/seberon";

export const metadata: Metadata = {
  title: "華祺螺絲工廠生產排程系統 | Oliver Huang",
  description:
    "從公司製令與機台資料出發，建立整廠多站排程、站內機台分配與可行性驗證的資管專題。",
};

const factoryProblems = [
  {
    title: "上游半成品來得及嗎？",
    description:
      "螺絲要經過多道製程。下游開工前，必須先有足夠的上游物料，因此系統要跨日追蹤生產、庫存、消耗與出貨。",
  },
  {
    title: "哪個工作站會塞車？",
    description:
      "每個工作站的機台數、加工速度與換線時間都不同。只看整體產量，無法知道某道製程是否已超過負荷。",
  },
  {
    title: "訂單能不能按時出貨？",
    description:
      "排程不只追求做得出來，也要比較交期、延遲、加班與替代製程路線之間的取捨。",
  },
];

const flowSteps = [
  {
    label: "資料準備",
    title: "把公司資料整理成模型輸入",
    description:
      "讀取訂單、製令、BOM、製程途程、工作站、機台與產品規格，統一欄位、單位與彼此關係。",
  },
  {
    label: "第一層：整廠",
    title: "決定每站每天要做多少",
    description:
      "多站排程同時考慮物料銜接、工作站產能、庫存、交期與加班，產生整座工廠的生產與出貨計畫。",
  },
  {
    label: "第二層：站內",
    title: "把產量分配到實際機台",
    description:
      "依機台相容性、加工時間、可用工時與換線成本，把工作站目標轉成各機台的任務與數量。",
  },
  {
    label: "驗證與分析",
    title: "確認方案真的符合限制",
    description:
      "檢查物料平衡、產能與機台分配，並輸出延遲、加班、缺口、objective 與圖表，方便比較不同方案。",
  },
];

const decisionFactors = [
  ["工作站產能", "當天加工時間與換線時間不能超過可用工時；加班是額外但有成本的容量。"],
  ["物料平衡", "今日可用物料來自前期庫存、今日生產與進貨，扣除下游消耗及出貨後才是期末庫存。"],
  ["交期與延遲", "系統追蹤訂單在每個時段還有多少未交量，越晚完成，累積的延遲代價越高。"],
  ["途程與機台相容性", "產品可能有替代製程路線，但不能任意指派工作站或機台，仍需符合產品與設備規格。"],
];

const solvers = [
  ["Basic", "測試基本貪婪演算法與設定，快速產生可行候選方案。"],
  ["Advanced", "增加訂單排序與加班比例組合，再從多個候選方案中挑選較好的結果。"],
  ["Premium", "加入 Gurobi 輔助子問題與更廣的策略搜尋，需要可用的 Gurobi 授權。"],
  ["Gurobi", "直接建立完整數學規劃模型，可作為正式求解入口或比較基準。"],
];

export default function SeberonOverviewPage() {
  return (
    <article className="seberon-case" lang="zh-Hant">
      <SeberonProjectNav active="overview" />

      <header className="seberon-hero">
        <div className="seberon-hero-copy">
          <p className="seberon-eyebrow">NTU IM · Industrial Scheduling</p>
          <h1>華祺螺絲工廠生產排程系統</h1>
          <p className="seberon-lead">
            把訂單、物料關係、工作站產能與機台條件放進同一套系統，先規劃整座工廠每天要做什麼，再把產量分配到可執行的機台。
          </p>
          <p className="seberon-meta">資管專題 · 2026/03 至今 · 進行中</p>
        </div>
        <div className="seberon-hero-image">
          <Image
            src="/projects/seberon/machine_1.jpg"
            alt="華祺螺絲工廠內的生產機台"
            width={1024}
            height={766}
            priority
          />
        </div>
      </header>

      <section className="seberon-section" aria-labelledby="project-summary">
        <div className="seberon-section-heading">
          <span>01</span>
          <div>
            <h2 id="project-summary">這個專案在解什麼問題？</h2>
            <p>
              這不是只幫一台機器排工作，而是同時處理多道製程、上下游物料、工作站產能與訂單交期的整廠排程問題。
            </p>
          </div>
        </div>

        <div className="seberon-stat-grid">
          {projectStats.map((stat) => (
            <div className="seberon-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.note}</small>
            </div>
          ))}
        </div>
        <p className="seberon-note">
          以上數字採專題海報目前的展示口徑；資料版本或欄位定義改變時，筆數也可能改變。
        </p>
      </section>

      <section className="seberon-section" aria-labelledby="factory-problems">
        <div className="seberon-section-heading">
          <span>02</span>
          <div>
            <h2 id="factory-problems">人工排程最難的，是問題彼此牽動</h2>
            <p>一張訂單不是獨立完成。前一站沒做完、瓶頸站被占滿，或機台規格不相容，都會讓後面的計畫失效。</p>
          </div>
        </div>
        <div className="seberon-card-grid three-columns">
          {factoryProblems.map((problem, index) => (
            <article className="seberon-card" key={problem.title}>
              <span className="seberon-card-number">0{index + 1}</span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
        <div className="seberon-figure-grid">
          <figure>
            <Image
              src="/projects/seberon/process_flow.jpg"
              alt="從盤元、鍛頭、製牙、熱處理、表面處理到包裝出貨的螺絲製程"
              width={725}
              height={341}
            />
            <figcaption>螺絲需要經過多道相互銜接的製程。</figcaption>
          </figure>
          <figure>
            <Image
              src="/projects/seberon/machine_2.jpg"
              alt="華祺工廠內的機台與作業環境"
              width={1024}
              height={766}
            />
            <figcaption>站內機台的規格與可用產能並不完全相同。</figcaption>
          </figure>
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="project-flow">
        <div className="seberon-section-heading">
          <span>03</span>
          <div>
            <h2 id="project-flow">從原始資料，到可執行的機台分配</h2>
            <p>系統把資料準備、整廠排程、站內分配與驗證拆開，每一層都有清楚的輸入與輸出。</p>
          </div>
        </div>
        <ol className="seberon-flow-list">
          {flowSteps.map((step) => (
            <li key={step.label}>
              <span>{step.label}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="seberon-section" aria-labelledby="project-decisions">
        <div className="seberon-section-heading">
          <span>04</span>
          <div>
            <h2 id="project-decisions">系統在限制中做選擇</h2>
            <p>每一步都要同時回答：這個決定是否合法，以及這個方案是否比另一個方案更好。</p>
          </div>
        </div>
        <div className="seberon-definition-list">
          {decisionFactors.map(([term, description]) => (
            <div key={term}>
              <h3>{term}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="project-solvers">
        <div className="seberon-section-heading">
          <span>05</span>
          <div>
            <h2 id="project-solvers">用多種策略比較，不把希望押在單一演算法</h2>
            <p>不同方法在速度、搜尋範圍與授權需求上各有取捨，因此系統保留多個求解入口。</p>
          </div>
        </div>
        <div className="seberon-card-grid four-columns">
          {solvers.map(([name, description]) => (
            <article className="seberon-card" key={name}>
              <span className="seberon-pill">{name}</span>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="project-output">
        <div className="seberon-section-heading">
          <span>06</span>
          <div>
            <h2 id="project-output">最後交付兩個層次的排程答案</h2>
            <p>工廠層先回答整體資源怎麼配置，工作站層再把計畫落到實際機台。</p>
          </div>
        </div>
        <div className="seberon-output-grid">
          <article>
            <p className="seberon-eyebrow">Factory level</p>
            <h3>工廠層生產與出貨計畫</h3>
            <ul>
              <li>每一天、每個工作站、每種物料的生產量</li>
              <li>每張訂單的出貨量、未交量與延遲</li>
              <li>工作站產能使用、加班與 objective</li>
              <li>必要時記錄改派或拆單後的製程途程</li>
            </ul>
          </article>
          <article>
            <p className="seberon-eyebrow">Station level</p>
            <h3>工作站內機台分配</h3>
            <ul>
              <li>各機台在指定日期應生產的物料</li>
              <li>每項任務的生產數量</li>
              <li>機台工時、換線與規格相容性檢查</li>
              <li>無法排入的量與可能需要的加班</li>
            </ul>
          </article>
        </div>
      </section>

      <aside className="seberon-boundary" aria-label="目前成果的適用範圍">
        <div>
          <h2>目前可以確認</h2>
          <p>這是一套以 Python 與命令列操作為主的排程分析系統，可建立資料 instance、執行 solver、檢查可行性並產生分析圖表。</p>
        </div>
        <div>
          <h2>目前不能直接宣稱</h2>
          <p>現有程式不足以證明系統已與工廠 ERP、MES 或機台控制系統即時串接，也不能把本機模擬結果直接視為正式上線成效。</p>
        </div>
      </aside>
    </article>
  );
}
