import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Idea Lab AI Assistant Course | Oliver Huang", description: "A TABF Idea Lab course on no-code assistants, ChatGPT Work, documents, spreadsheets, and human review.", alternates: { languages: { en: "/en/courses/idealab", "zh-Hant": "/courses/idealab" } } };

export default function EnglishIdeaLabCoursePage() {
  return (
    <article className="course-detail" lang="en">
      <p className="course-back"><Link href="/en/courses">← All courses</Link> · <Link href="/courses/idealab" hrefLang="zh-Hant">中文版</Link></p>
      <span className="exp-date"><time dateTime="2026-07-27">July 27</time> and <time dateTime="2026-07-31">31, 2026</time> · Taiwan Academy of Banking and Finance Idea Lab</span>
      <h1>Build Your Own AI Assistant</h1>
      <p className="subtitle">An Idea Lab session from my internship: configure an assistant that answers from designated documents, then see how AI can support multi-step work.</p>
      <section className="course-section" aria-labelledby="idealab-overview-en"><h2 className="section-title" id="idealab-overview-en">What this course covers</h2><p>The course begins with a common workplace problem: repeatedly explaining the same background and rules. It demonstrates how to define a role, response boundaries, and sources in an assistant’s configuration. Document organization and spreadsheet analysis examples then show which steps AI can support and which results still require human confirmation.</p></section>
      <section className="course-section" aria-labelledby="idealab-topics-en"><h2 className="section-title" id="idealab-topics-en">Topics</h2><div className="course-resources"><div className="course-resource"><h3>No-code AI assistants</h3><p>Compare GPTs, Claude Projects, and Gemini Gems. A compliance Q&A example demonstrates instructions, reference files, and tests for known, unknown, and out-of-scope questions.</p></div><div className="course-resource"><h3>ChatGPT Work</h3><p>Client-visit preparation and course-profit summaries demonstrate multi-step work: plan, read, organize, verify dates and figures, and obtain human approval before sending or adopting results.</p></div></div></section>
      <section className="course-section" aria-labelledby="idealab-checks-en"><h2 className="section-title" id="idealab-checks-en">Checks emphasized in class</h2><ol className="course-topics"><li>State the task, allowed data, and desired output format clearly.</li><li>Use an unanswerable question to test whether the assistant admits missing information.</li><li>Check sources, dates, figures, and uncertain assumptions.</li><li>Have a person review anything sent externally or used for an important decision.</li></ol></section>
      <section className="course-section" aria-labelledby="idealab-materials-en"><h2 className="section-title" id="idealab-materials-en">Slides</h2><div className="course-resources"><div className="course-resource"><h3>Build Your Own AI Assistant</h3><p>GPTs, Claude Projects, Gemini Gems, and a hands-on compliance assistant.</p><a href="/course-materials/idealab/ai-assistant.pdf" download>Download PDF ↓</a></div><div className="course-resource"><h3>ChatGPT Work</h3><p>Client-visit and course-profit examples with human checkpoints in multi-step tasks.</p><a href="/course-materials/idealab/chatgpt-work.pdf" download>Download PDF ↓</a></div></div></section>
    </article>
  );
}
