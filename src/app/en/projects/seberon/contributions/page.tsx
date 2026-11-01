import type { Metadata } from "next";
import SeberonProjectNav from "@/components/SeberonProjectNav";
import {
  contributionStatsEn,
  contributionTimelineEn,
  contributionsEn,
} from "@/lib/seberon-en";

export const metadata: Metadata = {
  title: "My Contributions to the Huachi Scheduling System | Oliver Huang",
  description: "Oliver Huang's work on data preparation, capacity modeling, machine allocation, validation, and work-order integration since March 2026.",
  alternates: { languages: { en: "/en/projects/seberon/contributions", "zh-Hant": "/projects/seberon/contributions" } },
};

const contextSteps = [
  { label: "01 · Company data", title: "Understand the factory's source files", description: "Inputs include customer orders, work orders, product specifications, process sequences, material relationships, and each machine's capability and speed." },
  { label: "02 · Factory schedule", title: "Plan daily output for every station", description: "The first layer considers due dates, inventory, station capacity, and material dependencies to choose what every station should produce." },
  { label: "03 · Machine allocation", title: "Turn output into executable machine tasks", description: "The second layer uses machine specifications, available hours, and setup time to assign station targets to individual machines." },
];

export default function EnglishSeberonContributionsPage() {
  return (
    <article className="seberon-case" lang="en">
      <SeberonProjectNav active="contributions" locale="en" />

      <header className="seberon-contribution-hero">
        <p className="seberon-eyebrow">MAR. 2026 — NOV. 2026</p>
        <h1>What I contributed to the Huachi scheduling project</h1>
        <p className="seberon-lead">My work sits at two important connections: converting raw company data into numbers the scheduling model can use, and translating factory-level output into assignments for machines within a station. I also built validation and testing tools to check whether the results satisfy capacity and material constraints.</p>
      </header>

      <section className="seberon-section" aria-labelledby="contribution-context-en">
        <div className="seberon-section-heading"><span>01</span><div><h2 id="contribution-context-en">Understand the project in one minute</h2><p>After Huachi receives a screw order, it must coordinate multiple processes, semi-finished materials, station capacity, and machine specifications—not merely choose a production date.</p></div></div>
        <div className="seberon-context-grid">{contextSteps.map((step) => <article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-records-en">
        <div className="seberon-section-heading"><span>02</span><div><h2 id="contribution-records-en">Contribution scope confirmed by Git</h2><p>The period is Mar. 1–Nov. 1, 2026. Three stash or backup snapshots and one merge-only record are excluded.</p></div></div>
        <div className="seberon-stat-grid">{contributionStatsEn.map((stat) => <div className="seberon-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note}</small></div>)}</div>
        <p className="seberon-note">No commits under Yuan-Hsiang Huang’s Git identity were found in March, May, or June. This means Git evidence is absent; it does not prove there was no participation during those months.</p>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-timeline-en">
        <div className="seberon-section-heading"><span>03</span><div><h2 id="contribution-timeline-en">From model foundations to company-data integration</h2><p>As the project progressed, my work expanded from single-station validation to real capacity parameters, machine allocation, and company work orders.</p></div></div>
        <ol className="seberon-timeline">{contributionTimelineEn.map((item) => <li key={item.month}><time>{item.month}</time><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-details-en">
        <div className="seberon-section-heading"><span>04</span><div><h2 id="contribution-details-en">Six main contributions</h2><p>Each item explains the original problem, what I built, its value, and a small example so that readers without a scheduling background can follow it.</p></div></div>
        <div className="seberon-contribution-list">
          {contributionsEn.map((contribution) => (
            <article className="seberon-contribution" key={contribution.number}>
              <header><span>{contribution.number}</span><div><h3>{contribution.title}</h3><p>{contribution.subtitle}</p></div></header>
              <div className="seberon-contribution-body">
                <div><h4>Original problem</h4><p>{contribution.problem}</p></div>
                <div><h4>What I built</h4><p>{contribution.work}</p></div>
                <div><h4>Value</h4><p>{contribution.value}</p></div>
              </div>
              <aside><strong>Example</strong><p>{contribution.example}</p></aside>
            </article>
          ))}
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="contribution-evidence-en">
        <div className="seberon-section-heading"><span>05</span><div><h2 id="contribution-evidence-en">What is confirmed, and where the evidence stops</h2><p>The formal Git history confirms committed content and dates. Local exploratory files are supporting clues, not equally strong authorship evidence.</p></div></div>
        <div className="seberon-evidence-grid">
          <article><h3>Confirmed by Git</h3><p>Single-station validation, setup parameters, processing-time and capacity tools, machine allocation, company-order integration, documentation, and presentation materials all have matching author commits.</p></article>
          <article><h3>Local exploratory work</h3><p><code>workspace/yuanhsiang</code> also contains HiGHS subproblem solving, test instances, and capacity analysis. Its path and README suggest personal work, but uncommitted files cannot fully confirm dates or authorship.</p></article>
        </div>
      </section>

      <blockquote className="seberon-resume-line">Responsible for data preprocessing, capacity-parameter modeling, single-station machine allocation, schedule-feasibility validation, and company work-order integration for the Huachi Screw Factory production scheduling system.</blockquote>
    </article>
  );
}
