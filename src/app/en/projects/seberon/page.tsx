import type { Metadata } from "next";
import Image from "next/image";
import SeberonProjectNav from "@/components/SeberonProjectNav";
import { projectStatsEn } from "@/lib/seberon-en";

export const metadata: Metadata = {
  title: "Huachi Screw Factory Production Scheduling System | Oliver Huang",
  description: "A production-scheduling capstone that turns company work orders and machine data into factory plans, machine allocations, and feasibility checks.",
  alternates: { languages: { en: "/en/projects/seberon", "zh-Hant": "/projects/seberon" } },
};

const factoryProblems = [
  { title: "Will upstream materials arrive in time?", description: "Screws pass through several processes. Before a downstream step begins, enough upstream material must exist, so the system tracks production, inventory, consumption, and shipments across days." },
  { title: "Which station will become a bottleneck?", description: "Stations differ in machine count, speed, and setup time. Looking only at total output cannot reveal whether a particular process is overloaded." },
  { title: "Can orders ship on time?", description: "A useful schedule must balance due dates, delay, overtime, and alternative process routes—not merely prove that production is possible." },
];

const flowSteps = [
  { label: "Data preparation", title: "Turn company files into model inputs", description: "Read orders, work orders, BOMs, routings, stations, machines, and product specifications, then reconcile their fields, units, and relationships." },
  { label: "Layer 1: factory", title: "Decide daily output for every station", description: "The multi-station schedule jointly considers material flow, capacity, inventory, due dates, and overtime to create a factory-wide production and shipment plan." },
  { label: "Layer 2: station", title: "Assign output to actual machines", description: "Machine compatibility, processing time, available hours, and setup cost turn station targets into machine-level tasks and quantities." },
  { label: "Validation and analysis", title: "Check whether the plan truly satisfies its constraints", description: "The system checks material balance, capacity, and allocation, then reports delay, overtime, shortages, objective values, and comparison charts." },
];

const decisionFactors = [
  ["Station capacity", "Daily processing and setup time must fit available hours. Overtime adds capacity, but also cost."],
  ["Material balance", "Available material comes from starting inventory, production, and arrivals; downstream consumption and shipments are deducted before ending inventory is known."],
  ["Due dates and delay", "The system tracks how much of each order remains unshipped in every period. A later completion accumulates a larger delay penalty."],
  ["Routing and compatibility", "Products may have alternative routes, but they cannot be assigned to arbitrary stations or machines; equipment specifications must still match."],
];

const solvers = [
  ["Basic", "Tests core greedy algorithms and settings to produce feasible candidates quickly."],
  ["Advanced", "Adds order-sorting and overtime-ratio combinations, then selects the better candidate."],
  ["Premium", "Adds Gurobi-assisted subproblems and a wider strategy search; it requires a working Gurobi license."],
  ["Gurobi", "Builds the complete mathematical model directly and serves as a formal solver entry point or comparison baseline."],
];

export default function EnglishSeberonOverviewPage() {
  return (
    <article className="seberon-case" lang="en">
      <SeberonProjectNav active="overview" locale="en" />

      <header className="seberon-hero">
        <div className="seberon-hero-copy">
          <p className="seberon-eyebrow">NTU IM · Industrial Scheduling</p>
          <h1>Huachi Screw Factory Production Scheduling System</h1>
          <p className="seberon-lead">The system combines orders, material relationships, station capacity, and machine constraints. It first plans daily work across the factory, then assigns output to machines that can execute it.</p>
          <p className="seberon-meta">Information Management Capstone · Mar. 2026–present · In progress</p>
        </div>
        <div className="seberon-hero-image">
          <Image src="/projects/seberon/machine_1.jpg" alt="Production machinery inside the Huachi screw factory" width={1024} height={766} priority />
        </div>
      </header>

      <section className="seberon-section" aria-labelledby="project-summary-en">
        <div className="seberon-section-heading"><span>01</span><div><h2 id="project-summary-en">What problem does this project solve?</h2><p>This is not a schedule for one machine. It coordinates multiple processes, upstream and downstream materials, station capacity, and order due dates across an entire factory.</p></div></div>
        <div className="seberon-stat-grid">
          {projectStatsEn.map((stat) => <div className="seberon-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note}</small></div>)}
        </div>
        <p className="seberon-note">These figures follow the current capstone poster. Counts may change when data versions or field definitions change.</p>
      </section>

      <section className="seberon-section" aria-labelledby="factory-problems-en">
        <div className="seberon-section-heading"><span>02</span><div><h2 id="factory-problems-en">Manual scheduling is hard because every decision affects another</h2><p>An order is not produced in isolation. If an upstream step is late, a bottleneck is full, or machine specifications do not match, the downstream plan fails.</p></div></div>
        <div className="seberon-card-grid three-columns">{factoryProblems.map((problem, index) => <article className="seberon-card" key={problem.title}><span className="seberon-card-number">0{index + 1}</span><h3>{problem.title}</h3><p>{problem.description}</p></article>)}</div>
        <div className="seberon-figure-grid">
          <figure><Image src="/projects/seberon/process_flow.jpg" alt="Screw production flow from wire rod through forming, threading, heat treatment, surface finishing, packing, and shipment" width={725} height={341} /><figcaption>Screw manufacturing contains several connected processes.</figcaption></figure>
          <figure><Image src="/projects/seberon/machine_2.jpg" alt="Machines and work area inside the Huachi factory" width={1024} height={766} /><figcaption>Machines within one station do not have identical specifications or capacity.</figcaption></figure>
        </div>
      </section>

      <section className="seberon-section" aria-labelledby="project-flow-en">
        <div className="seberon-section-heading"><span>03</span><div><h2 id="project-flow-en">From raw data to an executable machine allocation</h2><p>Data preparation, factory scheduling, station allocation, and validation are separated so that every layer has a clear input and output.</p></div></div>
        <ol className="seberon-flow-list">{flowSteps.map((step) => <li key={step.label}><span>{step.label}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
      </section>

      <section className="seberon-section" aria-labelledby="project-decisions-en">
        <div className="seberon-section-heading"><span>04</span><div><h2 id="project-decisions-en">The system chooses within real constraints</h2><p>Each decision must answer two questions: is it allowed, and is it better than the alternatives?</p></div></div>
        <div className="seberon-definition-list">{decisionFactors.map(([term, description]) => <div key={term}><h3>{term}</h3><p>{description}</p></div>)}</div>
      </section>

      <section className="seberon-section" aria-labelledby="project-solvers-en">
        <div className="seberon-section-heading"><span>05</span><div><h2 id="project-solvers-en">Multiple strategies are compared instead of relying on one algorithm</h2><p>Methods differ in speed, search coverage, and license requirements, so the system keeps several solver entry points.</p></div></div>
        <div className="seberon-card-grid four-columns">{solvers.map(([name, description]) => <article className="seberon-card" key={name}><span className="seberon-pill">{name}</span><p>{description}</p></article>)}</div>
      </section>

      <section className="seberon-section" aria-labelledby="project-output-en">
        <div className="seberon-section-heading"><span>06</span><div><h2 id="project-output-en">The final output has two levels</h2><p>The factory layer allocates overall resources; the station layer turns that plan into machine tasks.</p></div></div>
        <div className="seberon-output-grid">
          <article><p className="seberon-eyebrow">Factory level</p><h3>Production and shipment plan</h3><ul><li>Daily production by station and material</li><li>Shipment, remaining quantity, and delay by order</li><li>Station utilization, overtime, and objective value</li><li>Rerouted or split processes when needed</li></ul></article>
          <article><p className="seberon-eyebrow">Station level</p><h3>Machine allocation</h3><ul><li>Material assigned to each machine on each date</li><li>Quantity for every task</li><li>Machine hours, setups, and compatibility checks</li><li>Unassigned quantity and possible overtime</li></ul></article>
        </div>
      </section>

      <aside className="seberon-boundary" aria-label="Current scope of the project">
        <div><h2>What is confirmed</h2><p>This is a Python- and command-line-based scheduling analysis system that can build data instances, run solvers, verify feasibility, and generate analysis charts.</p></div>
        <div><h2>What cannot yet be claimed</h2><p>The current code does not prove real-time integration with the factory’s ERP, MES, or machine-control systems. Local simulation results are not the same as measured production deployment outcomes.</p></div>
      </aside>
    </article>
  );
}
